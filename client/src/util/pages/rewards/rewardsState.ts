import { useState } from 'react';
import { RewardData } from '@/types/RewardData';
import { DefaultRewardData } from '@/types/DefaultRewardData';

export function useRewardsState(initialRewardsData: RewardData[], initialDefaultRewardsData: DefaultRewardData[]) {
    // Core states from your component
    const [hasPendingChanges, setHasPendingChanges] = useState(false);
    const [isOverlayOpen, setIsOverlayOpen] = useState(false);
    const [isEditFormOpen, setIsEditFormOpen] = useState(false);
    const [selectedReward, setSelectedReward] = useState<RewardData | null>(null);
    const [isEditDefaultFormOpen, setIsEditDefaultFormOpen] = useState(false);
    const [selectedDefaultReward, setSelectedDefaultReward] = useState<DefaultRewardData | null>(null);

    // Return the states and their setters
    return {
        hasPendingChanges, setHasPendingChanges,
        isOverlayOpen, setIsOverlayOpen,
        isEditFormOpen, setIsEditFormOpen,
        selectedReward, setSelectedReward,
        isEditDefaultFormOpen, setIsEditDefaultFormOpen,
        selectedDefaultReward, setSelectedDefaultReward,
    };
}