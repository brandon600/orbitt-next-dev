import React, { CSSProperties, ReactNode, PropsWithChildren, useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import Colors from '../../constants/Colors';
import StyledMediaQuery from '../../constants/StyledMediaQuery';
import Text from '../subatomic/Text'
import Button from '../atoms/Button';
import { motion } from 'framer-motion';

const BottomSaveNoticeContainer = motion(styled.div`
    @media ${StyledMediaQuery.XS} {
        position: fixed;
        z-index: 490;
        bottom: 0;
        right: 0;
        display: flex;
        flex-direction: column;
        width: 100%;
        box-sizing: border-box;
        padding: 24px;
        justify-content: center;
        gap: 20px;
        background: ${Colors.neutral400};
    }

    @media ${StyledMediaQuery.L} {
        padding: 32px;
        gap: 24px;
        width: calc(100vw - 260px);
    }

`)

const NoticeText = styled.div`
    @media ${StyledMediaQuery.XS} {
        display: flex;
        align-items: flex-start;
        align-self: stretch;
        color: ${Colors.shades100};
        flex: 1 0 0;
        
        p {
            font-size: 20px;
            font-weight: 800;
            line-height: 24px;
        }
    }
`

const BottomButtons = styled.div`
    @media ${StyledMediaQuery.XS} {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        gap: 8px;
        align-self: stretch;
    }

    @media ${StyledMediaQuery.S} {
        gap: 12px;
    }
`

const BottomButton = styled.div`
    @media ${StyledMediaQuery.XS} {
        dislay: flex;
        flex: 1 0 0;
    }

    @media ${StyledMediaQuery.S} {
        flex: none;
        width: 140px;
    }
`

interface SaveNoticeProps {
    onSave: () => void;
    onCancel: () => void;
  }
  
  const BottomSaveNotice: React.FC<SaveNoticeProps> = ({ onSave, onCancel }) => {
    return (
        <BottomSaveNoticeContainer
            initial={{ bottom: "-200px" }}  // initial state (hidden to the right)
            animate={{ bottom: "0px" }}  // end state (appears from the right)
            exit={{ bottom: "-200px" }}  // exit state (disappears to the right)
            transition={{ duration: 0.4, ease: [0.88, 0, 0.16, 1] }} // animation takes 400ms with easeInOut easing
        >
            <NoticeText>
               <Text text='You have made changes. Click ‘Save’ button to apply.' />
            </NoticeText>
            <BottomButtons>
                <BottomButton>
                    <Button
                        buttonTypeVariant="neutral"
                        sizeVariant="large"
                        label="Cancel"
                        buttonWidthVariant="fill"
                        onClick={onCancel}
                    />
                </BottomButton>
                <BottomButton>
                    <Button
                        buttonTypeVariant="primary"
                        sizeVariant="large"
                        label="Save"
                        buttonWidthVariant="fill"
                        onClick={onSave}
                    />
                </BottomButton>
            </BottomButtons>
        </BottomSaveNoticeContainer>
    );
  };
  
  export default BottomSaveNotice;