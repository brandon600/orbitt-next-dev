import React from 'react';
import DefaultReward from '../molecules/DefaultReward';
import Text from '../subatomic/Text';
import StyledMediaQuery from '@/constants/StyledMediaQuery';
import { styled } from 'styled-components';
import Colors from '@/constants/Colors';

// Define a type for the data that your organism will receive
interface DefaultRewardData {
  id: number;
  name: string;
  value: number;
  active: boolean;
  // Add other properties as needed
}

interface RewardSettingsProps {
  defaultRewardsData: DefaultRewardData[]; // An array of RewardData objects
}

const RewardSettingsContainer = styled.div`
    @media ${StyledMediaQuery.XS} {
        display: flex;
        flex-direction: column;
        width: 100%;
        gap: 24px;
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

const RewardSettingsList = styled.div`
    @media ${StyledMediaQuery.XS} {
        display: flex;
        flex-direction: column;
        gap: 24px;
        width: 100%;
    }

    @media ${StyledMediaQuery.L} {
        gap: 32px;
    }
`


export const mockDefaultRewardData: DefaultRewardData[] = [
    {
      id: 1,
      name: 'Reward 1',
      value: 2,
      active: true,
    },
    {
      id: 2,
      name: 'Reward 2',
      value: 2,
      active: true,
    },
    {
      id: 3,
      name: 'Reward 3',
      value: 2,
      active: false,
    },
    // Add more objects as needed
  ];

const RewardSettings: React.FC<RewardSettingsProps> = ({ defaultRewardsData }) => {
  return (
    <RewardSettingsContainer>
        <HeadingPlusSubheading>
            <h3
            >
            Reward Settings
            </h3>
            <Text
                text='Setup the default triggers for issuing reward stars'
            />
        </HeadingPlusSubheading>
        <RewardSettingsList>
            {defaultRewardsData.map((defaultReward) => (
            <DefaultReward
            key={defaultReward.id} // Make sure to provide a unique key for each item
            // Pass the data to the RewardItem component as props
            defaultRewardName={defaultReward.name}
            defaultRewardValue={defaultReward.value}
            defaultRewardActive={defaultReward.active}
            // Add other props as needed
            />
        ))}
        </RewardSettingsList>
    </RewardSettingsContainer>
  );
};

export default RewardSettings;