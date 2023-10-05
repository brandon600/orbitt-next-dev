import React from 'react';
import { RewardData } from '@/types/RewardData';
import { DefaultRewardData } from '@/types/DefaultRewardData';
import { UserData } from '../../../store/store';

interface EditHandlerProps {
    setForm: React.Dispatch<React.SetStateAction<boolean>>;
    setData: React.Dispatch<React.SetStateAction<any | null>>;
    setIsOverlayOpen: React.Dispatch<React.SetStateAction<boolean>>;
    data: any;
}

export const genericEditHandler = ({
    setForm,
    setData,
    setIsOverlayOpen,
    data
}: EditHandlerProps) => {
    setData(data);
    setForm(true);
    setIsOverlayOpen(true);
};

interface FormCloseHandlerProps {
    setForm: React.Dispatch<React.SetStateAction<boolean>>;
    setData: React.Dispatch<React.SetStateAction<any | null>>;
    setIsOverlayOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const genericFormCloseHandler = ({
    setForm,
    setData,
    setIsOverlayOpen
}: FormCloseHandlerProps) => {
    setIsOverlayOpen(false);
    setForm(false);
    setData(null);
};


export const handleRewardsPendingChange = (
    index: number, 
    newValue: boolean, 
    currentRewardToggles: boolean[], 
    originalRewardToggles: boolean[],
    setCurrentRewardToggles: (toggles: boolean[]) => void,
    setHasPendingChanges: (hasChanges: boolean) => void
) => {
    const newCurrentToggles = [...currentRewardToggles];
    newCurrentToggles[index] = newValue;
    setCurrentRewardToggles(newCurrentToggles);
    setHasPendingChanges(!originalRewardToggles.every((val, i) => val === newCurrentToggles[i]));
};


export const handleDefaultRewardsPendingChange = (
    index: number, 
    newValue: boolean, 
    currentDefaultRewardToggles: boolean[], 
    originalDefaultRewardToggles: boolean[],
    setCurrentDefaultRewardToggles: (toggles: boolean[]) => void,
    setHasPendingChanges: (hasChanges: boolean) => void
) => {
    const newCurrentToggles = [...currentDefaultRewardToggles];
    newCurrentToggles[index] = newValue;
    setCurrentDefaultRewardToggles(newCurrentToggles);
    setHasPendingChanges(!originalDefaultRewardToggles.every((val, i) => val === newCurrentToggles[i]));
};


export async function handleSaveChanges({
    rewardsData,
    userData,
    currentRewardToggles,
    defaultRewardsData,
    currentDefaultRewardToggles,
    showToast,
    setOriginalRewardToggles,
    setOriginalDefaultRewardToggles,
    setHasPendingChanges
  }: {
    rewardsData: RewardData[];
    userData: UserData;
    currentRewardToggles: boolean[];
    defaultRewardsData: DefaultRewardData[];
    currentDefaultRewardToggles: boolean[];
    showToast: (message: string, type: 'success' | 'error') => void;
    setOriginalRewardToggles: React.Dispatch<React.SetStateAction<boolean[]>>;
    setOriginalDefaultRewardToggles: React.Dispatch<React.SetStateAction<boolean[]>>;
    setHasPendingChanges: React.Dispatch<React.SetStateAction<boolean>>;
  }) {
    // ... the same implementation of handleSaveChanges ...
    const updatedRewardsData = rewardsData.map((reward, index) => ({
        ...reward,
        rewardActive: currentRewardToggles[index]
      }));
    
      const updatedDefaultRewardsData = defaultRewardsData.map((defaultReward, index) => ({
        ...defaultReward,
        rewardActive: currentDefaultRewardToggles[index]
      }));
    
      const payload = {
        updatedRewards: updatedRewardsData,
        updatedDefaultRewards: updatedDefaultRewardsData,
        user: userData
      };
    
      console.log(`Sending updated data: ${JSON.stringify(payload)}`);
    
      try {
        const response = await fetch('http://localhost:5000/update-active-rewards', {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload)
        });
    
        if (response.ok) {
          console.log('Successfully updated rewards and default rewards');
          showToast('Successfully updated rewards!', 'success'); // Added toast message
          setOriginalRewardToggles(currentRewardToggles);
          setOriginalDefaultRewardToggles(currentDefaultRewardToggles);
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


  export function handleCancelChangesFunc(
    setCurrentRewardToggles: React.Dispatch<React.SetStateAction<boolean[]>>,
    originalRewardToggles: boolean[],
    setCurrentDefaultRewardToggles: React.Dispatch<React.SetStateAction<boolean[]>>,
    originalDefaultRewardToggles: boolean[],
    setHasPendingChanges: React.Dispatch<React.SetStateAction<boolean>>
  ): void {
    // Step 1: Reset Reward Toggles
    setCurrentRewardToggles([...originalRewardToggles]);
  
    // Step 2: Reset Default Reward Toggles
    setCurrentDefaultRewardToggles([...originalDefaultRewardToggles]);
  
    // Step 3: Reset the hasPendingChanges flag
    setHasPendingChanges(false);
  }


  async function fetchDataFromURL(url: string) {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
}

export {
    fetchDataFromURL
};