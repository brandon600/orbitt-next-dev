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
import Overlay from '@/components/atoms/Overlay';
import RewardForm from '@/components/organism/RewardForm';
import GlobalStyle from '../GlobalStyle';
import { useStore, AppState } from '../store/store'; // Import your store
import { getServers } from 'dns';
import { AnimatePresence } from 'framer-motion';
import Toast from '@/components/atoms/Toast';

interface RewardsProps {
    rewardsData: []; // Replace YourDataTypeHere with the actual type of your rewards data
    defaultRewardsData: []; // Replace YourDataTypeHere with the actual type of your default rewards data
}


const FlexDiv = styled.div`
@media ${StyledMediaQuery.XS} {
    display: flex;
    gap: 40px;
    flex-direction: column;
    padding: 24px 16px;
    width: 100vw;
    box-sizing: border-box;
    background: ${Colors.primary100};
}
`

const TitlePlusButton = styled.div`
    @media ${StyledMediaQuery.XS} {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 32px;
    }

    @media ${StyledMediaQuery.S} {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
`

const RewardsPageTitle = styled.div`
 @media ${StyledMediaQuery.XS} {
    display: flex;
    color: ${Colors.neutral700};
    p {
        font-size: 32px;
        line-height: 39px;
        font-weight: 800;
    }
 }

 @media ${StyledMediaQuery.S} {
    display: flex;
    color: ${Colors.neutral700};
    p {
        font-size: 40px;
        line-height: 48px;
    }
 }

 @media ${StyledMediaQuery.L} {
    display: flex;
    color: ${Colors.neutral700};
    p {
        font-size: 48px;
        line-height: 58px;
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

const ButtonWrap = styled.div`
@media ${StyledMediaQuery.XS} {
    display: flex;
    width: 100%;
   
}

 @media ${StyledMediaQuery.S} {
    width: auto;
    align-self: flex-start;
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

function useBodyScrollLock(isLocked: boolean) {
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


function Rewards({ rewardsData, defaultRewardsData }: RewardsProps) {
    const { data, fetchData, toast, hideToast } = useStore((state: AppState) => ({
        data: state.data,
        fetchData: state.fetchData,
        toast: state.toast,
        hideToast: state.hideToast,
      }));

    const [isOverlayOpen, setIsOverlayOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [isLoading2, setIsLoading2] = useState(true);
    useBodyScrollLock(isOverlayOpen);


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
            <AnimatePresence>
            {toast.visible && (
                <Toast key="toast" />
            )}
            </AnimatePresence>
            <AnimatePresence>
            {isOverlayOpen && <Overlay />}
            </AnimatePresence>
            <AnimatePresence>
                {isOverlayOpen && <RewardForm onClose={handleOverlayClose} />}
            </AnimatePresence>
            <GlobalStyle />
            <TitlePlusButton>
            <RewardsPageTitle>
                <Text text='Rewards' />
            </RewardsPageTitle>
            <ButtonWrap>
            <Button
  buttonTypeVariant='primary'
  sizeVariant='small'
  label='Hide Toast'
  onClick={hideToast}
/>
            <Button
                buttonTypeVariant='primary'
                sizeVariant='large'
                label='Add Reward'
                buttonWidthVariant='fill'
                onClick={handleOverlayOpen}
            />
            </ButtonWrap>
            </TitlePlusButton>
                <RewardOfferingsAndSettings>
                    <RewardOfferings rewardsData={rewardsData} />
                    <RewardSettings defaultRewardsData={defaultRewardsData} />
                </RewardOfferingsAndSettings>
        </FlexDiv>
    );
}

export default Rewards;