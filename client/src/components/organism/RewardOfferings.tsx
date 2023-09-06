import React from 'react';
import RewardItem from '../molecules/RewardItem'; // Import your RewardItem component here
import Text from '../subatomic/Text';
import StyledMediaQuery from '@/constants/StyledMediaQuery';
import { styled } from 'styled-components';
import Colors from '@/constants/Colors';
import RewardTableHead from '@/components/atoms/RewardTableHead';
import { RewardData } from '@/types/RewardData';


interface RewardOfferingsProps {
  rewardsData: RewardData[]; // An array of RewardData objects
  onPendingChange: (index: number, newValue: boolean) => void;
  originalRewardToggles: boolean[];
  onEditClick: (reward: RewardData) => void;
}

const RewardOfferingsContainer = styled.div`
    @media ${StyledMediaQuery.XS} {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 24px;
        align-self: stretch;
    }

    @media ${StyledMediaQuery.L} {
        gap: 32px;
    }
`

const HeadingPlusSubheading = styled.div`
    @media ${StyledMediaQuery.XS} {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 4px;
        align-self: stretch;

        h3 {
            font-size: 24px;
            font-weight: 800;
            line-height: 29px;
            color: ${Colors.neutral600}
        }

        p {
            font-size: 16px;
            font-weight: 500;
            line-height: 19px;
            color: ${Colors.neutral400};
        }
    }

    @media ${StyledMediaQuery.L} {
        gap: 8px;

        h3 {
            font-size: 32px;
            font-weight: 800;
            line-height: 39px;
        }

        p {
            font-size: 20px;
            font-weight: 500;
            line-height: 24px;
        }
    }
`

const RewardOfferingList = styled.div`
    @media ${StyledMediaQuery.XS} {
        display: flex;
        flex-direction: column;
        width: 100%;
    }
`

const RewardOfferings: React.FC<RewardOfferingsProps> = ({ rewardsData, onPendingChange, originalRewardToggles, onEditClick }) => {
    console.log(rewardsData)
    if (!rewardsData) {
        // Handle the case when rewardsData is not defined (e.g., still loading)
        return <p>Loading...</p>; // You can display a loading message or spinner
      }
  return (
    <RewardOfferingsContainer>
        <HeadingPlusSubheading>
            <h3
            >
            Offerings
            </h3>
            <Text
                text='Create & Manage Rewards'
            />
        </HeadingPlusSubheading>
        <RewardOfferingList>
        <RewardTableHead 
            label1='Rewards'
            label2='Cost'
            label3='Terms'
            label4='Active'
            label5='Edit'
        />
            {rewardsData.map((reward, index) => (
            <RewardItem
                key={reward.id} // Make sure to provide a unique key for each item
                // Pass the data to the RewardItem component as props
                index={index}
                id={reward.id}
                _id={reward._id}
                rewardid={reward.rewardid}
                originalRewardValue={originalRewardToggles[index]}
                rewardName={reward.rewardName}
                rewardValue={reward.rewardValue}
                rewardCost={reward.rewardCost}
                rewardTerms={reward.rewardTerms}
                rewardActive={reward.rewardActive}
                onRewardToggleChange={onPendingChange}
                onEditClick={onEditClick}
                // Add other props as needed
            />
        ))}
        </RewardOfferingList>
    </RewardOfferingsContainer>
  );
};

export default RewardOfferings;