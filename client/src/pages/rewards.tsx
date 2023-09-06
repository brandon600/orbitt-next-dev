import DataDisplay from '../components/DataDisplay';
import Text from '../components/subatomic/Text';
import styled from 'styled-components';
import StyledMediaQuery from '../constants/StyledMediaQuery';
import Button from '../components/atoms/Button';
import RewardTableHead from '@/components/atoms/RewardTableHead';
import DefaultRewards from '@/components/organism/DefaultRewards';
import RewardOfferings from '@/components/organism/RewardOfferings';
import Colors from '@/constants/Colors';
import React, { useState, useEffect } from 'react';
import Overlay from '@/components/atoms/Overlay';
import RewardForm from '@/components/organism/RewardForm';
import EditRewardForm from '@/components/organism/EditRewardForm';
import GlobalStyle from '../GlobalStyle';
import { useStore, AppState } from '../store/store'; // Import your store
import { getServers } from 'dns';
import { AnimatePresence } from 'framer-motion';
import Toast from '@/components/atoms/Toast';
import { RewardData }  from '@/types/RewardData';
import { DefaultRewardData } from '@/types/DefaultRewardData';
import io from "socket.io-client";

interface RewardsProps {
    rewardsData: RewardData[]; // Replace YourDataTypeHere with the actual type of your rewards data
    defaultRewardsData: DefaultRewardData[]; // Replace YourDataTypeHere with the actual type of your default rewards data
    onEditClick?: () => void;  // Make it optional by adding '?'
    originalRewardToggles: boolean[]; 
}


const FlexDiv = styled.div`
@media ${StyledMediaQuery.XS} {
    display: flex;
    gap: 40px;
    flex-direction: column;
    padding: 24px 16px;
    width: 100vw;
    box-sizing: border-box;
    background: ${Colors.primary100};
}
`

const TitlePlusButton = styled.div`
    @media ${StyledMediaQuery.XS} {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 32px;
    }

    @media ${StyledMediaQuery.S} {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
`

const RewardsPageTitle = styled.div`
 @media ${StyledMediaQuery.XS} {
    display: flex;
    color: ${Colors.neutral700};
    p {
        font-size: 32px;
        line-height: 39px;
        font-weight: 800;
    }
 }

 @media ${StyledMediaQuery.S} {
    display: flex;
    color: ${Colors.neutral700};
    p {
        font-size: 40px;
        line-height: 48px;
    }
 }

 @media ${StyledMediaQuery.L} {
    display: flex;
    color: ${Colors.neutral700};
    p {
        font-size: 48px;
        line-height: 58px;
    }
 }
`

const RewardOfferingsAndSettings = styled.div`
 @media ${StyledMediaQuery.XS} {
        display: flex;
        flex-direction: column;
        gap: 64px;
 }
`

const ButtonWrap = styled.div`
@media ${StyledMediaQuery.XS} {
    display: flex;
    width: 100%;
   
}

 @media ${StyledMediaQuery.S} {
    width: auto;
    align-self: flex-start;
  }
`


export async function getServerSideProps() {
    try {
        // Fetch rewards data
        const response1 = await fetch('http://localhost:5000/current-rewards');
        if (!response1.ok) {
            throw new Error('Network response was not ok');
        }
        const rewardsData = await response1.json();

        // Fetch reward offerings data
        const response2 = await fetch('http://localhost:5000/current-outbound-rewards');
        if (!response2.ok) {
            throw new Error('Network response was not ok');
        }
        const defaultRewardsData = await response2.json();

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


function useBodyScrollLock(isLocked: boolean) {
    useEffect(() => {
      if (isLocked) {
        document.body.style.overflowY = 'hidden';
      } else {
        document.body.style.overflowY = 'auto';
      }
  
      return () => {
        document.body.style.overflowY = 'auto';
      };
    }, [isLocked]);
  }


function Rewards({ rewardsData: initialRewardsData, defaultRewardsData }: RewardsProps) {
    const { data, fetchData, toast, hideToast, showToast } = useStore((state: AppState) => ({
        data: state.data,
        fetchData: state.fetchData,
        toast: state.toast,
        hideToast: state.hideToast,
        showToast: state.showToast
      }));

    const [hasPendingChanges, setHasPendingChanges] = useState(false);
    const [originalRewardToggles, setOriginalRewardToggles] = useState<boolean[]>([]);
    const [currentRewardToggles, setCurrentRewardToggles] = useState<boolean[]>([]);
    const [originalDefaultRewardsToggles, setOriginalDefaultRewardsToggles] = useState<boolean[]>([]);
    const [currentDefaultRewardsToggles, setCurrentDefaultRewardsToggles] = useState<boolean[]>([]);
    const [isOverlayOpen, setIsOverlayOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [isLoading2, setIsLoading2] = useState(true);
    useBodyScrollLock(isOverlayOpen);

    const [isEditFormOpen, setIsEditFormOpen] = useState(false); // New state for form visibility
    const [selectedReward, setSelectedReward] = useState<RewardData | null>(null);

    const [rewardsData, setRewardsData] = useState(initialRewardsData);



    useEffect(() => {
      console.log("Setting up socket connection.");
      const socket = io("http://localhost:5000");
    
      // Listen for 'reward-updated' events
      socket.on("reward-updated", (updatedReward) => {
        // Update the rewardsData state here
        console.log(updatedReward)
        const updatedRewardsData = rewardsData.map((reward) => {
          if (reward.rewardid === updatedReward.rewardid) {
            return updatedReward;
          }
          return reward;
        });
        setRewardsData(updatedRewardsData);
      });

      socket.on("disconnect", () => {
        console.log("Disconnected from the server");
      });
    
      return () => {
        // Cleanup: Disconnect socket when component is unmounted
        socket.disconnect();
      };
  }, [rewardsData]);

  




    useEffect(() => {
        setOriginalRewardToggles(rewardsData.map((reward) => reward.rewardActive));
        setCurrentRewardToggles(rewardsData.map((reward) => reward.rewardActive));
      }, [rewardsData]);

    useEffect(() => {
    setOriginalDefaultRewardsToggles(defaultRewardsData.map((defaultReward) => defaultReward.rewardActive));
    setCurrentDefaultRewardsToggles(defaultRewardsData.map((defaultReward) => defaultReward.rewardActive));
    }, [defaultRewardsData]);

      const handleRewardsPendingChange = (index: number, newValue: boolean) => {
        const newCurrentToggles = [...currentRewardToggles];
        newCurrentToggles[index] = newValue;
        setCurrentRewardToggles(newCurrentToggles);
        setHasPendingChanges(!originalRewardToggles.every((val, i) => val === newCurrentToggles[i]));
      };

      const handleDefaultRewardsPendingChange = (index: number, newValue: boolean) => {
        const newcurrentDefaultRewardsToggles = [...currentDefaultRewardsToggles];
        newcurrentDefaultRewardsToggles[index] = newValue;
        setCurrentDefaultRewardsToggles(newcurrentDefaultRewardsToggles);
        setHasPendingChanges(!originalDefaultRewardsToggles.every((val, i) => val === newcurrentDefaultRewardsToggles[i]));
      };


    const handleEditClick = (reward: RewardData) => {
    setSelectedReward(reward);
    setIsEditFormOpen(true);
    };

    const handleEditFormClose = () => {
        setIsOverlayOpen(false);
        setIsEditFormOpen(false);
        setSelectedReward(null);
      };

    const handleOverlayOpen = () => {
        setIsOverlayOpen(true);
      };

    const handleOverlayClose = () => {
      setIsOverlayOpen(false);
    };

    const handleClick = () => {
        console.log('clicked')
    }
   // Initialize the store on the client side
   useEffect(() => {
    fetchData();
}, []);

async function handleSaveChanges() {
    const updatedRewardsData = rewardsData.map((reward, index) => ({
      ...reward,
      rewardActive: currentRewardToggles[index]
    }));
  
    const updatedDefaultRewardsData = defaultRewardsData.map((defaultReward, index) => ({
      ...defaultReward,
      rewardActive: currentDefaultRewardsToggles[index]
    }));
  
    const payload = {
      updatedRewards: updatedRewardsData,
      updatedDefaultRewards: updatedDefaultRewardsData
    };
  
    console.log(`Sending updated data: ${JSON.stringify(payload)}`);
  
    try {
      const response = await fetch('http://localhost:5000/update-active-rewards', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
      });
  
      if (response.ok) {
        console.log('Successfully updated rewards and default rewards');
        showToast('Successfully updated rewards!', 'success'); // Added toast message
        setOriginalRewardToggles(currentRewardToggles);
        setOriginalDefaultRewardsToggles(currentDefaultRewardsToggles);
        setHasPendingChanges(false);
      } else {
        console.log('Failed to update rewards.');
        showToast('Failed to update rewards.', 'error');
      }
    } catch (error) {
      console.error('Error updating rewards:', error);
      showToast('Error updating rewards.', 'error');
    }
  }
  
  
    const storeData = useStore.getState(); // Get the current state of the store
    console.log('Store Data:', storeData); // Log the entire store data

    return (
        <FlexDiv>
        {hasPendingChanges && (
            <div>
                <p>You have pending changes to save. Click the button to save.</p>
                <button onClick={handleSaveChanges}>Save Changes</button>
            </div>
          )}
            <AnimatePresence>
            {toast.visible && (
                <Toast key="toast" />
            )}
            </AnimatePresence>
            <AnimatePresence>
            { (isOverlayOpen || isEditFormOpen) && <Overlay />}
            </AnimatePresence>
            <AnimatePresence>
                {isOverlayOpen && <RewardForm onClose={handleOverlayClose} />}
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
            <GlobalStyle />
            <TitlePlusButton>
            <RewardsPageTitle>
                <Text text='Rewards' />
            </RewardsPageTitle>
            <ButtonWrap>
            <Button
                buttonTypeVariant='primary'
                sizeVariant='large'
                label='Add Reward'
                buttonWidthVariant='fill'
                onClick={handleOverlayOpen}
            />
            </ButtonWrap>
            </TitlePlusButton>
                <RewardOfferingsAndSettings>
                    <RewardOfferings rewardsData={rewardsData} onPendingChange={handleRewardsPendingChange} originalRewardToggles={originalRewardToggles} onEditClick={handleEditClick} />
                    <DefaultRewards defaultRewardsData={defaultRewardsData} onDefaultRewardsPendingChange={handleDefaultRewardsPendingChange} originalDefaultRewardsToggles={originalDefaultRewardsToggles} />
                </RewardOfferingsAndSettings>
        </FlexDiv>
    );
}

export default Rewards;