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
import { useStore, AppState } from '../store/store'; // Import your store
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

interface RewardsProps {
    rewardsData: RewardData[]; // Replace YourDataTypeHere with the actual type of your rewards data
    defaultRewardsData: DefaultRewardData[]; // Replace YourDataTypeHere with the actual type of your default rewards data
    onEditClick?: () => void;  // Make it optional by adding '?'
    originalRewardToggles: boolean[]; 
}

export async function getServerSideProps() {
  try {
      // Fetch rewards data
      const rewardsData = await fetchDataFromURL('http://localhost:5000/current-rewards');

      // Fetch reward offerings data
      const defaultRewardsData = await fetchDataFromURL('http://localhost:5000/current-outbound-rewards');

      // Return the fetched data as props
      return {
          props: {
              rewardsData,
              defaultRewardsData,
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


function Rewards({ rewardsData: initialRewardsData, defaultRewardsData: initialDefaultRewardsData }: RewardsProps) {
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

useEffect(() => {
  if (userId) {
    fetchData(userId);
  }
}, [userId]);


  const saveChanges = () => {
    handleSaveChanges({
      rewardsData,
      currentRewardToggles,
      defaultRewardsData,
      currentDefaultRewardToggles,
      showToast: showToast, // adjust if your store structure is different
      setOriginalRewardToggles,
      setOriginalDefaultRewardToggles,
      setHasPendingChanges
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