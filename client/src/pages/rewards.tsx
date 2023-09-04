import DataDisplay from '../components/DataDisplay';
import Text from '../components/subatomic/Text';
import styled from 'styled-components';
import StyledMediaQuery from '../constants/StyledMediaQuery';
import Button from '../components/atoms/Button';
import RewardTableHead from '@/components/atoms/RewardTableHead';
import RewardSettings from '@/components/organism/RewardSettings';
import RewardOfferings from '@/components/organism/RewardOfferings';
import Colors from '@/constants/Colors';
import React, { useState, useEffect } from 'react';
import SlideoutModal from '@/components/molecules/SlideoutModal';
import GlobalStyle from '../GlobalStyle';
import { useStore } from '../store/store'; // Import your store
import { getServers } from 'dns';

interface RewardsProps {
    rewardsData: []; // Replace YourDataTypeHere with the actual type of your rewards data
    defaultRewardsData: []; // Replace YourDataTypeHere with the actual type of your default rewards data
}


const OfferingSettingsAndButton = styled.div`
 @media ${StyledMediaQuery.XS} {
    display: flex;
    flex-direction: column;
    gap: 40px;
    width: 100%;
 }
`

const FlexDiv = styled.div`
@media ${StyledMediaQuery.XS} {
    display: flex;
    gap: 32px;
    flex-direction: column;
    padding: 24px 16px;
    width: 100vw;
    box-sizing: border-box;
    background: ${Colors.primary100};
}
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

export async function getServerSideProps() {
    try {
        // Fetch rewards data
        const response1 = await fetch('http://localhost:5000/current-rewards');
        if (!response1.ok) {
            throw new Error('Network response was not ok');
        }
        const rewardsData = await response1.json();

        // Fetch reward offerings data
        const response2 = await fetch('http://localhost:5000/current-outbound-rewards');
        if (!response2.ok) {
            throw new Error('Network response was not ok');
        }
        const defaultRewardsData = await response2.json();

        // Return the fetched data as props
        return {
            props: {
                rewardsData,
                defaultRewardsData,
            },
        };
    } catch (error) {
        console.error('Error fetching data:', error);
        return {
            props: {
                rewardsData: [],
                defaultRewardsData: [],
            },
        };
    }
}


function Rewards({ rewardsData, defaultRewardsData }: RewardsProps) {
    const [isOverlayOpen, setIsOverlayOpen] = useState(false);
    const { data, fetchData } = useStore();
    const [isLoading, setIsLoading] = useState(true);
    const [isLoading2, setIsLoading2] = useState(true);


const handleOverlayOpen = () => {
    setIsOverlayOpen(true);
  };

  const handleOverlayClose = () => {
    setIsOverlayOpen(false);
  };

const handleClick = () => {
    console.log('clicked')
}
   // Initialize the store on the client side
   useEffect(() => {
    fetchData();
}, []);


    const storeData = useStore.getState(); // Get the current state of the store
    console.log('Store Data:', storeData); // Log the entire store data

    return (
        <FlexDiv>
            {isOverlayOpen && <SlideoutModal onClose={handleOverlayClose} />}
            <GlobalStyle />
            <DataDisplay />
            <RewardsPageTitle>
                <Text text='Rewards' />
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
                    <RewardOfferings rewardsData={rewardsData} />
                    <RewardSettings defaultRewardsData={defaultRewardsData} />
                </RewardOfferingsAndSettings>
            </OfferingSettingsAndButton>
        </FlexDiv>
    );
}

export default Rewards;