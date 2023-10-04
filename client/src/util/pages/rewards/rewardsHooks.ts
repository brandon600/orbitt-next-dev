import { useEffect, useState, useCallback } from 'react';
import io from 'socket.io-client';
import { RewardData }  from '@/types/RewardData';
import { DefaultRewardData } from '@/types/DefaultRewardData';
import { Dispatch, SetStateAction } from 'react';
import { genericEditHandler, genericFormCloseHandler } from './rewardsFunctions';

type UseRewardsHandlersProps = {
    setIsEditFormOpen: Dispatch<SetStateAction<boolean>>;
    setSelectedReward: Dispatch<SetStateAction<RewardData | null>>;
    setIsEditDefaultFormOpen: Dispatch<SetStateAction<boolean>>;
    setSelectedDefaultReward: Dispatch<SetStateAction<DefaultRewardData | null>>;
    setIsOverlayOpen: Dispatch<SetStateAction<boolean>>;
}

export const useRewardsHandlers = ({
    setIsEditFormOpen,
    setSelectedReward,
    setIsEditDefaultFormOpen,
    setSelectedDefaultReward,
    setIsOverlayOpen,
}: UseRewardsHandlersProps) => {
    
    return {
        handleEditClick: (reward: RewardData) => genericEditHandler({
            setForm: setIsEditFormOpen,
            setData: setSelectedReward,
            setIsOverlayOpen,
            data: reward
        }),

        handleEditDefaultClick: (defaultReward: DefaultRewardData) => genericEditHandler({
            setForm: setIsEditDefaultFormOpen,
            setData: setSelectedDefaultReward,
            setIsOverlayOpen,
            data: defaultReward
        }),

        handleEditFormClose: () => genericFormCloseHandler({
            setForm: setIsEditFormOpen,
            setData: setSelectedReward,
            setIsOverlayOpen
        }),

        handleEditDefaultFormClose: () => genericFormCloseHandler({
            setForm: setIsEditDefaultFormOpen,
            setData: setSelectedDefaultReward,
            setIsOverlayOpen
        }),

        openOverlay: () => {
            setIsOverlayOpen(true);
        },

        closeOverlay: () => {
            setIsOverlayOpen(false);
        },
    }
};


//SOCKET HOOKS
interface SocketData {
    rewardsData: any[],
    defaultRewardsData: any[]
}

export const useSockets = (initialRewards: any[], initialDefaultRewards: any[]): SocketData => {
    const [rewardsData, setRewardsData] = useState(initialRewards);
    const [defaultRewardsData, setDefaultRewardsData] = useState(initialDefaultRewards);

    useEffect(() => {
        console.log("Setting up socket connection.");
        const socket = io("http://localhost:5000");

        socket.on("reward-added", (addedReward: RewardData) => {
            setRewardsData(prevRewards => [...prevRewards, addedReward]);
        });
    

        socket.on("reward-updated", (updatedReward) => {
            const updatedRewardsData = rewardsData.map((reward) => {
                if (reward.rewardid === updatedReward.rewardid) {
                    return updatedReward;
                }
                return reward;
            });
            setRewardsData(updatedRewardsData);
        });

        socket.on("default-reward-updated", (updatedDefaultReward) => {
            const updatedDefaultRewardsData = defaultRewardsData.map((defaultReward) => {
                if (defaultReward.rewardNumberId === updatedDefaultReward.rewardNumberId) {
                    return updatedDefaultReward;
                }
                return defaultReward;
            });
            setDefaultRewardsData(updatedDefaultRewardsData);
        });

        socket.on("disconnect", () => {
            console.log("Disconnected from the server");
        });

        return () => {
            socket.disconnect();
        };
    }, [rewardsData, defaultRewardsData]);

    return {
        rewardsData,
        defaultRewardsData
    };
};


export const useRewardToggles = (rewardsData: any[]) => {
    const [originalRewardToggles, setOriginalRewardToggles] = useState(rewardsData.map((reward) => reward.rewardActive));
    const [currentRewardToggles, setCurrentRewardToggles] = useState(rewardsData.map((reward) => reward.rewardActive));

    useEffect(() => {
        setOriginalRewardToggles(rewardsData.map((reward) => reward.rewardActive));
        setCurrentRewardToggles(rewardsData.map((reward) => reward.rewardActive));
    }, [rewardsData]);

    return {
        originalRewardToggles,
        currentRewardToggles,
        setOriginalRewardToggles,
        setCurrentRewardToggles   // <-- Return the setState function
    };
};


export const useDefaultRewardToggles = (defaultRewardsData: any[]) => {
    const [originalDefaultRewardToggles, setOriginalDefaultRewardToggles] = useState(defaultRewardsData.map((reward) => reward.rewardActive));
    const [currentDefaultRewardToggles, setCurrentDefaultRewardToggles] = useState(defaultRewardsData.map((reward) => reward.rewardActive));

    useEffect(() => {
        setOriginalDefaultRewardToggles(defaultRewardsData.map((defaultReward) => defaultReward.rewardActive));
        setCurrentDefaultRewardToggles(defaultRewardsData.map((defaultReward) => defaultReward.rewardActive));
        }, [defaultRewardsData]);

    return {
        originalDefaultRewardToggles,
        currentDefaultRewardToggles,
        setOriginalDefaultRewardToggles,
        setCurrentDefaultRewardToggles   // <-- Return the setState function
    };
};


export function useBodyScrollLock(isLocked: boolean) {
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



