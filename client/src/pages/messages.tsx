import Text from '../components/subatomic/Text';
import styled from 'styled-components';
import StyledMediaQuery from '../constants/StyledMediaQuery';
import Button from '../components/atoms/Button';
import Colors from '@/constants/Colors';
import React, { useState, useEffect, useCallback } from 'react';
import GlobalStyle from '../GlobalStyle';
import { useStore, AppState } from '../store/store'; // Import your store
import { AnimatePresence } from 'framer-motion';
import Toast from '@/components/atoms/Toast';
import BottomSaveNotice from '@/components/molecules/BottomSaveNotice';
import io from "socket.io-client";
import { TriggeredMessageData } from '@/types/TriggeredMessageData';
import MessageCell from '@/components/molecules/MessageCell';


interface MessagesProps {
    triggeredMessagesData: TriggeredMessageData[];
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

const MessagesPageTitle = styled.div`
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
    color: ${Colors.neutral700};
    p {
        font-size: 40px;
        line-height: 48px;
    }
 }

 @media ${StyledMediaQuery.L} {
    color: ${Colors.neutral700};
    p {
        font-size: 48px;
        line-height: 58px;
    }
 }
 `

export async function getServerSideProps() {
    try {
        // Fetch rewards data
        const response = await fetch('http://localhost:5000/triggered-messages');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const triggeredMessagesData = await response.json();
        console.log(triggeredMessagesData);

        // Return the fetched data as props
        return {
            props: {
                triggeredMessagesData,
            }
        };
    } catch (error) {
        console.error('Error fetching data:', error);
        return {
            props: {
                triggeredMessagesData: []
            }
        };
    }
}

function Messages( { triggeredMessagesData }: MessagesProps) {
    const [isOverlayOpen, setIsOverlayOpen] = useState(false);
    const { data, fetchData } = useStore();

   useEffect(() => {
    fetchData();
}, []);

const storeData = useStore.getState(); // Get the current state of the store
console.log('Store Data:', storeData); // Log the entire store data
console.log(triggeredMessagesData);

    return (
        <FlexDiv>
            <GlobalStyle />
            <MessagesPageTitle>
                <Text text='Messages' />
            </MessagesPageTitle>
                {triggeredMessagesData.map((
				{ messageNumberId: triggeredMessageNumberId, 
				  messageTitle: triggeredMessageTitle, 
                  messageSubtitle: triggeredMessageSubtitle,
				  textMessageDefaultStart: triggeredMessageDefaultStart,
                  textMessageCustomText: triggeredMessageCustomText,
                  textMessageDefaultEnd1: triggeredMessageDefaultEnd1,
                  textMessageDefaultEnd2: triggeredMessageDefaultEnd2,
                  active: triggeredMessageActive,
				  id
				}, index) => (
                <MessageCell
                        key={id} // Make sure to provide a unique key for each item
                        // Pass the data to the RewardItem component as props
                        index={index}
                        id={id}
                        messageNumberId={triggeredMessageNumberId}
                        messageTitle={triggeredMessageTitle}
                        messageSubtitle={triggeredMessageSubtitle}
                        textMessageDefaultStart={triggeredMessageDefaultStart}
                        textMessageCustomText={triggeredMessageCustomText}
                        textMessageDefaultEnd1={triggeredMessageDefaultEnd1}
                        textMessageDefaultEnd2={triggeredMessageDefaultEnd2}
                        active={triggeredMessageActive}
                        // Add other props as needed
                    />
            ))}
        </FlexDiv>
    );
}

export default Messages;



/*

export interface TriggeredMessageData {
    id: number; // Example ID property, adjust as needed
    messageNumberId: number;
    messageTitle: string;
    messagesubTitle: string;
    textMessageDefaultStart: string;
    textMessageCustomText: string;
    textMessageDefaultEnd1: string;
    textMessageDefaultEnd2: string;
    active: boolean;
    index: number;
    // Add other properties as needed
  }
  */