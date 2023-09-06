import React, { useState, useEffect } from 'react';
import DefaultRewardItem from '../molecules/DefaultRewardItem';
import Text from '../subatomic/Text';
import StyledMediaQuery from '@/constants/StyledMediaQuery';
import { styled } from 'styled-components';
import Colors from '@/constants/Colors';
import { DefaultRewardData } from '../../types/DefaultRewardData';

interface DefaultRewardsProps {
  defaultRewardsData: DefaultRewardData[]; // An array of RewardData objects
  onDefaultRewardsPendingChange: (index: number, newValue: boolean) => void;
  originalDefaultRewardsToggles: boolean[];
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

const DefaultRewards: React.FC<DefaultRewardsProps> = ({ defaultRewardsData, onDefaultRewardsPendingChange, originalDefaultRewardsToggles, }) => {
    console.log(defaultRewardsData)
  
    if (!defaultRewardsData) {
      return <p>Loading...</p>;
    }
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
            {defaultRewardsData.map(({ rewardName: defaultRewardName, rewardValue: defaultRewardValue, rewardActive: defaultRewardActive, _id, id }, index) => (
            <DefaultRewardItem
                key={id}
                _id={_id}
                id={id}
                index={index}
                originalDefaultValue={originalDefaultRewardsToggles[index]}
                rewardName={defaultRewardName}
                rewardValue={defaultRewardValue}
                rewardActive={defaultRewardActive}
                onDefaultToggleChange={onDefaultRewardsPendingChange}
            />
        ))}
        </RewardSettingsList>
    </RewardSettingsContainer>
  );
};

export default DefaultRewards;