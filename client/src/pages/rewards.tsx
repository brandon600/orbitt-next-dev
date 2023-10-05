import Text from '../components/subatomic/Text';
import styled from 'styled-components';
import StyledMediaQuery from '../constants/StyledMediaQuery';
import Button from '../components/atoms/Button';
import RewardTableHead from '@/components/atoms/RewardTableHead';
import DefaultRewards from '@/components/organism/DefaultRewards';
import RewardOfferings from '@/components/organism/RewardOfferings';
import Colors from '@/constants/Colors';
import React, { useState, useEffect, useCallback } from 'react';
import Overlay from '@/components/atoms/Overlay';
import RewardForm from '@/components/organism/RewardForm';
import EditRewardForm from '@/components/organism/EditRewardForm';
import EditDefaultRewardForm from '@/components/organism/EditDefaultRewardForm';
import GlobalStyle from '../GlobalStyle';
import { useStore, AppState, UserData, initialData, fetchData } from '../store/store'; // Import your store
import { getServers } from 'dns';
import { AnimatePresence } from 'framer-motion';
import Toast from '@/components/atoms/Toast';
import { RewardData }  from '@/types/RewardData';
import { DefaultRewardData } from '@/types/DefaultRewardData';
import BottomSaveNotice from '@/components/molecules/BottomSaveNotice';
import io from "socket.io-client";
import { useSockets, useRewardToggles, useDefaultRewardToggles, useRewardsHandlers, useBodyScrollLock } from '@/util/pages/rewards/rewardsHooks';
import { handleRewardsPendingChange, handleDefaultRewardsPendingChange, handleSaveChanges, handleCancelChangesFunc, fetchDataFromURL } from '@/util/pages/rewards/rewardsFunctions';
import { useRewardsState } from '@/util/pages/rewards/rewardsState';
import { FlexDiv, TitlePlusButton, RewardsPageTitle, RewardOfferingsAndSettings, ButtonWrap } from '@/util/pages/rewards/rewardsStyles';
import { useMemberAuth } from '../util/global/globalHooks';
import { GetServerSidePropsContext } from 'next';

interface RewardsProps {
    rewardsData: RewardData[]; // Replace YourDataTypeHere with the actual type of your rewards data
    defaultRewardsData: DefaultRewardData[]; // Replace YourDataTypeHere with the actual type of your default rewards data
    onEditClick?: () => void;  // Make it optional by adding '?'
    originalRewardToggles: boolean[]; 
    userData: UserData;
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const userCookie = context.req.cookies.user;
  let userData: UserData = initialData;

  if (userCookie) {
      userData = JSON.parse(userCookie);
  } else {
      // Fetch user data if it's not in the cookie
      const memberstackId = context.req.cookies.memberstackId; // or however you're identifying the user
      if (memberstackId) {
          const fetchedData = await fetchData(memberstackId); // fetchData can return null
          if (fetchedData) {
              userData = fetchedData;
              // fetchData already sets the cookie, so you don't have to do it again here
          }
      }
  }

  if (!userData.userid) {
      return 'no user data'
  }

  try {
      const userId = userData.userid;
      // Fetch rewards data
      const rewardsData = await fetchDataFromURL(`http://localhost:5000/current-rewards?userId=${userId}`);

      // Fetch reward offerings data
      const defaultRewardsData = await fetchDataFromURL(`http://localhost:5000/current-outbound-rewards?userId=${userId}`);

      // Return the fetched data as props
      return {
          props: {
              rewardsData,
              defaultRewardsData,
              userData
          },
      };
  } catch (error) {
      console.error('Error fetching data:', error);
      return {
          props: {
              rewardsData: [],
              defaultRewardsData: [],
          },
      };
  }
}


function Rewards({ rewardsData: initialRewardsData, defaultRewardsData: initialDefaultRewardsData, userData }: RewardsProps) {
  const { 
    data, fetchData, toast, 
    hideToast, showToast 
  } = useStore((state: AppState) => state);
  const { userId } = useMemberAuth();


  // ========== State Variables ==========

const {
  hasPendingChanges, setHasPendingChanges,
  isOverlayOpen, setIsOverlayOpen,
  isEditFormOpen, setIsEditFormOpen,
  selectedReward, setSelectedReward,
  isEditDefaultFormOpen, setIsEditDefaultFormOpen,
  selectedDefaultReward, setSelectedDefaultReward,
} = useRewardsState(initialRewardsData, initialDefaultRewardsData);


    const { rewardsData, defaultRewardsData } = useSockets(initialRewardsData, initialDefaultRewardsData);
    const { originalRewardToggles, currentRewardToggles, setOriginalRewardToggles, setCurrentRewardToggles } = useRewardToggles(rewardsData);
    const { originalDefaultRewardToggles, currentDefaultRewardToggles, setOriginalDefaultRewardToggles, setCurrentDefaultRewardToggles } = useDefaultRewardToggles(defaultRewardsData);

    const onRewardToggleChange = useCallback((index: number, newValue: boolean) => {
      handleRewardsPendingChange(
          index, 
          newValue, 
          currentRewardToggles, 
          originalRewardToggles, 
          setCurrentRewardToggles, 
          setHasPendingChanges
      );
  }, [currentRewardToggles, originalRewardToggles]);
  
  const onDefaultRewardToggleChange = useCallback((index: number, newValue: boolean) => {
      handleDefaultRewardsPendingChange(
          index, 
          newValue, 
          currentDefaultRewardToggles, 
          originalDefaultRewardToggles, 
          setCurrentDefaultRewardToggles, 
          setHasPendingChanges
      );
  }, [currentDefaultRewardToggles, originalDefaultRewardToggles]);

  //Overlay
  const {
    handleEditClick,
    handleEditDefaultClick,
    handleEditFormClose,
    handleEditDefaultFormClose,
    openOverlay,
    closeOverlay
} = useRewardsHandlers({
    setIsEditFormOpen,
    setSelectedReward,
    setIsEditDefaultFormOpen,
    setSelectedDefaultReward,
    setIsOverlayOpen,
});


// ========== Fetching and Updating Data ========== 


  const saveChanges = () => {
    handleSaveChanges({
      rewardsData,
      currentRewardToggles,
      defaultRewardsData,
      currentDefaultRewardToggles,
      showToast: showToast, // adjust if your store structure is different
      setOriginalRewardToggles,
      setOriginalDefaultRewardToggles,
      setHasPendingChanges,
      userData
    });
  };

  const handleCancelChanges: () => void = () => {
    handleCancelChangesFunc(
      setCurrentRewardToggles, 
      originalRewardToggles, 
      setCurrentDefaultRewardToggles, 
      originalDefaultRewardToggles, 
      setHasPendingChanges
    );
  };
  
    return (
        <FlexDiv>
          <AnimatePresence>
            {hasPendingChanges && (
              <BottomSaveNotice
                key="bottom-save-notice"
                onSave={saveChanges}
                onCancel={handleCancelChanges}
              />
            )}
          </AnimatePresence>
            <AnimatePresence>
            {toast.visible && (
                <Toast key="toast" />
            )}
            </AnimatePresence>
            <AnimatePresence>
            { (isOverlayOpen || isEditFormOpen || isEditDefaultFormOpen) && <Overlay />}
            </AnimatePresence>
            <AnimatePresence>
                {isOverlayOpen && <RewardForm onClose={closeOverlay} />}
            </AnimatePresence>
            <AnimatePresence>
            {isEditFormOpen && selectedReward && (
                <EditRewardForm
                    {...selectedReward}
                    rewardCost={selectedReward.rewardCost.toString()}
                    onClose={handleEditFormClose}
                />
            )}
            </AnimatePresence>
            <AnimatePresence>
            {isEditDefaultFormOpen && selectedDefaultReward && (
                <EditDefaultRewardForm
                    {...selectedDefaultReward}
                    defaultRewardValue={selectedDefaultReward.rewardValue.toString()}
                    onClose={handleEditDefaultFormClose}
                />
            )}
            </AnimatePresence>
            <GlobalStyle />
            <TitlePlusButton>
            <RewardsPageTitle>
                <Text text='Rewards' />
            </RewardsPageTitle>
            <ButtonWrap>
            <Button
                buttonTypeVariant='primary'
                sizeVariant='large'
                label='Add New Reward'
                buttonWidthVariant='fill'
                onClick={openOverlay}
            />
            </ButtonWrap>
            </TitlePlusButton>
                <RewardOfferingsAndSettings>
                    <RewardOfferings 
                      rewardsData={rewardsData} 
                      onPendingChange={onRewardToggleChange} 
                      originalRewardToggles={originalRewardToggles} 
                      currentRewardToggles={currentRewardToggles}
                      onEditClick={handleEditClick} 
                    />
                    <DefaultRewards 
                      defaultRewardsData={defaultRewardsData} 
                      onDefaultRewardsPendingChange={onDefaultRewardToggleChange} 
                      originalDefaultRewardToggles={originalDefaultRewardToggles} 
                      currentDefaultRewardToggles={currentDefaultRewardToggles}
                      onEditClick={handleEditDefaultClick} 
                    />
                </RewardOfferingsAndSettings>
        </FlexDiv>
    );
}

export default Rewards;