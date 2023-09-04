import DataDisplay from '../components/DataDisplay';
import Text from '../components/subatomic/Text';
import styled from 'styled-components';
import StyledMediaQuery from '../constants/StyledMediaQuery';
import Button from '../components/atoms/Button';
import RewardTableHead from '@/components/atoms/RewardTableHead';
import RewardSettings from '@/components/organism/RewardSettings';
import RewardOfferings from '@/components/organism/RewardOfferings';
import Colors from '@/constants/Colors';
import React, { useState } from 'react';
import SlideoutModal from '@/components/molecules/SlideoutModal';
import { mockRewardData } from '@/components/organism/RewardOfferings';
import { mockDefaultRewardData } from '@/components/organism/RewardSettings';
import GlobalStyle from '../GlobalStyle';


const OfferingSettingsAndButton = styled.div`
 @media ${StyledMediaQuery.XS} {
    display: flex;
    flex-direction: column;
    gap: 40px;
    width: 100%;
 }
`

const FlexDiv = styled.div`
 display: flex;
 gap: 32px;
 flex-direction: column;
 padding: 24px 16px;
 width: 100vw;
 box-sizing: border-box;
 background: ${Colors.primary100};
`

const RewardsPageTitle = styled.div`
 @media ${StyledMediaQuery.XS} {
    display: flex;
    color: ${Colors.neutral700};
    p {
        font-size: 32px;
        font-weight: 800;
        line-height: 39px;
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

export default function Rewards() {
    const [isOverlayOpen, setIsOverlayOpen] = useState(false);

    const handleOverlayOpen = () => {
        setIsOverlayOpen(true);
      };
    
      const handleOverlayClose = () => {
        setIsOverlayOpen(false);
      };

    const handleClick = () => {
        console.log('clicked')
    }

  return (
      <FlexDiv>
      {isOverlayOpen && <SlideoutModal onClose={handleOverlayClose} />}
        <GlobalStyle />
        <DataDisplay />
        <RewardsPageTitle>
            <Text
                text='Rewards'
            >
            </Text>
        </RewardsPageTitle>
        <OfferingSettingsAndButton>
        <Button
            typeVariant='primary'
            sizeVariant='large'
            label='Add Reward'
            widthVariant='fill'
            onClick={handleOverlayOpen}
        />
        <RewardOfferingsAndSettings>
            <RewardOfferings
                rewardsData={mockRewardData}
            />
            <RewardSettings
                defaultRewardsData={mockDefaultRewardData}
            />
        </RewardOfferingsAndSettings>
        </OfferingSettingsAndButton>
      </FlexDiv>
  )
}