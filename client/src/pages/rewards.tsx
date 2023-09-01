import DataDisplay from '../components/DataDisplay';
import Text from '../components/subatomic/Text';
import styled from 'styled-components';
import StyledMediaQuery from '../constants/StyledMediaQuery';
import Button from '../components/atoms/Button';
import RewardTableHead from '@/components/atoms/RewardTableHead';
import TriggeredReward from '@/components/molecules/TriggeredReward';
import RewardItem from '@/components/molecules/RewardItem';
import { Colors } from '@/constants/Colors';
import React, { useState } from 'react';
import SlideoutModal from '@/components/molecules/SlideoutModal';

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

export default function Home() {
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
        <Text
            text='Rewards'
        >
        </Text>
        <Button
            typeVariant='primary'
            sizeVariant='large'
            label='Add Reward'
            widthVariant='fill'
            onClick={handleOverlayOpen}
        />
      <RewardTableHead 
        label1='Rewards'
        label2='Cost'
        label3='Terms'
        label4='Active'
        label5='Edit'
    />
        <TriggeredReward />
        <RewardItem />
      </FlexDiv>
    </main>
  )
}