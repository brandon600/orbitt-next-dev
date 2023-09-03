import DataDisplay from '../components/DataDisplay';
import Text from '../components/subatomic/Text';
import styled from 'styled-components';
import StyledMediaQuery from '../constants/StyledMediaQuery';
import Button from '../components/atoms/Button';
import RewardTableHead from '@/components/atoms/RewardTableHead';
import TriggeredReward from '@/components/molecules/TriggeredReward';
import RewardItem from '@/components/molecules/RewardItem';
import RewardOfferings from '@/components/organism/RewardOfferings';
import Colors from '@/constants/Colors';
import React, { useState } from 'react';
import SlideoutModal from '@/components/molecules/SlideoutModal';
import { mockRewardData } from '@/components/organism/RewardOfferings';
import GlobalStyle from '../GlobalStyle';


const OfferingSettingsAndButtons = styled.div`
 @media ${StyledMediaQuery.XS} {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
 }
`

const FlexDiv = styled.div`
 display: flex
 gap: 48px;
 background: ${Colors.primary100};
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
    <main>
           {/* Render the overlay when isOverlayOpen is true */}
      {isOverlayOpen && <SlideoutModal onClose={handleOverlayClose} />}
      <FlexDiv>
        <GlobalStyle />
        <Text
            text='Rewards'
        >
        </Text>
        <DataDisplay />
        <Button
            typeVariant='primary'
            sizeVariant='large'
            label='Add Reward'
            widthVariant='fill'
            onClick={handleOverlayOpen}
        />
        <TriggeredReward />
        <RewardOfferings
            rewardsData={mockRewardData}
         />
      </FlexDiv>
    </main>
  )
}