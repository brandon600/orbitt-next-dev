import React from 'react';
import RewardItem from '../molecules/RewardItem'; // Import your RewardItem component here
import Text from '../subatomic/Text';
import StyledMediaQuery from '@/constants/StyledMediaQuery';
import { styled } from 'styled-components';
import Colors from '@/constants/Colors';
import RewardTableHead from '@/components/atoms/RewardTableHead';

// Define a type for the data that your organism will receive
interface RewardData {
  id: number;
  name: string;
  value: string;
  cost: number;
  notes: string;
  // Add other properties as needed
}

interface RewardOfferingsProps {
  rewardsData: RewardData[]; // An array of RewardData objects
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

export const mockRewardData: RewardData[] = [
    {
      id: 1,
      name: 'Reward 1',
      value: 'Free Item',
      cost: 10,
      notes: 'Notes for Reward 1',
    },
    {
      id: 2,
      name: 'Reward 2',
      value: 'Free Item',
      cost: 20,
      notes: 'Notes for Reward 2',
    },
    {
      id: 3,
      name: 'Reward 3',
      value: 'Free Item',
      cost: 15,
      notes: 'Notes for Reward 3',
    },
    // Add more objects as needed
  ];

const RewardOfferings: React.FC<RewardOfferingsProps> = ({ rewardsData }) => {
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
            {rewardsData.map((reward) => (
            <RewardItem
            key={reward.id} // Make sure to provide a unique key for each item
            // Pass the data to the RewardItem component as props
            rewardName={reward.name}
            rewardValue={reward.value}
            rewardCost={reward.cost}
            rewardNotes={reward.notes}
            // Add other props as needed
            />
        ))}
        </RewardOfferingList>
    </RewardOfferingsContainer>
  );
};

export default RewardOfferings;