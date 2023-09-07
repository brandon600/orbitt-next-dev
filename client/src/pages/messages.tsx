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
import MessageCell from '@/components/molecules/MessageCell';

interface MessagesProps {
    messagesData: RewardData[];
}

const FlexDiv = styled.div`
    display: flex;
    width: 100vw;
`

function Messages() {
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