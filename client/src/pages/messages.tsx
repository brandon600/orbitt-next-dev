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
import { RewardData } from '@/types/RewardData';
import Textarea from '@/components/atoms/Textarea';

interface MessagesProps {
    messagesData: RewardData[];
}

const FlexDiv = styled.div`
    display: flex;
`

function Messages() {
    return (
        <FlexDiv>
            <Text
                text='Hello Messaging Page!'
            />
            <Textarea 
                label="Message Cell Here"
                value='Message Cell Value here'
                onChange={(value) => console.log(value)}
                placeholder='Ex: Need 10 stars for this'
            />
        </FlexDiv>
    );
}

export default Messages;