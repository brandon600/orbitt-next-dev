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

interface MessagesProps {
    triggeredMessagesData: TriggeredMessageData[];
}

const FlexDiv = styled.div`
    display: flex;
    width: 100vw;
`

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
            <MessageCell 
                messageName='Message Name'
            />
        </FlexDiv>
    );
}

export default Messages;