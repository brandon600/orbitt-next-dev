import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import Colors from '../../constants/Colors';
import Text from '../subatomic/Text'
import StyledMediaQuery from '../../constants/StyledMediaQuery';
import { RewardData } from '@/types/RewardData';

interface RedeemRewardCardProps {
    reward: RewardData; 
    onClick: (reward: RewardData) => void;
    customerPoints: number; 
}

interface RedeemRewardCardContainerProps {
    isAffordable: boolean;
}

const RedeemRewardCardContainer = styled.div<RedeemRewardCardContainerProps>`
    @media ${StyledMediaQuery.XS} {
        display: flex;
        width: 288px;
        padding-top: 16px;
        flex-direction: column;
        align-items: flex-start;
        gap: 16px;
        border-radius: 8px;
        background: ${Colors.shades100};
        box-shadow: 0px 4px 12px 2px rgba(0, 0, 0, 0.08);
        opacity: ${props => props.isAffordable ? 1 : 0.3};
    }
`;

const RRCRewardInfo = styled.div`
    @media ${StyledMediaQuery.XS} {
        display: flex;
        padding: 0px 16px;
        flex-direction: column;
        align-items: flex-start;
        gap: 12px;
        align-self: stretch;
    }
`;

const RRCRewardIntoTitle = styled.div`
    @media ${StyledMediaQuery.XS} {
        display: flex;
        color: ${Colors.neutral600};
        
        p {
            font-size: 20px;
            font-weight: 800;
            line-height: 24px;
        }
    }
`;

const RRCValueAndCost = styled.div`
    @media ${StyledMediaQuery.XS} {
        display: flex;
        flex-direction: column;
        gap: 8px;
        color: ${Colors.neutral700};

        p {
            font-size: 16px;
            font-weight: 500;
            line-height: 19px; 
        }
    }
`;

const RRCBottomButton = styled.div`
    @media ${StyledMediaQuery.XS} {
        display: flex;
        width: 100%;
        padding: 20px 0px;
        justify-content: center;
        align-items: center;
        border-radius: 0px 0px 8px 8px;
        background: ${Colors.primary500};
        color: ${Colors.shades100};

        p {
            font-size: 16px;
            font-weight: 800;
            line-height: 19px;
        }
    }
`;

const RedeemRewardCard: React.FC<RedeemRewardCardProps> = ({ reward, onClick, customerPoints }) => {
    const isAffordable = customerPoints >= reward.rewardCost;

    const handleRedeemClick = useCallback(() => {
        if (isAffordable) {
            onClick(reward);
        } else {
            // Optionally: Display a toast or notification to the user
            console.warn("Not enough points to redeem this reward."); // Replace this with a toast or notification call
        }
    }, [isAffordable, reward, onClick]);

    return (
        <RedeemRewardCardContainer isAffordable={customerPoints >= reward.rewardCost}>
            <RRCRewardInfo>
                <RRCRewardIntoTitle>
                    <Text
                        text={reward.rewardName}
                    />
                </RRCRewardIntoTitle>
                <RRCValueAndCost>
                    <Text
                        text={reward.rewardValue}
                    />
                    <Text
                        text={reward.rewardCost.toString()}
                    />
                </RRCValueAndCost>
            </RRCRewardInfo>
            <RRCBottomButton
                onClick={handleRedeemClick}
            >
                <Text
                    text="Redeem Reward"
                />
            </RRCBottomButton>
        </RedeemRewardCardContainer>
    );
}

export default RedeemRewardCard;