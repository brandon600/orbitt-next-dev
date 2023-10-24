import React from 'react';
import styled from 'styled-components';
import Colors from '../../constants/Colors';
import StyledMediaQuery from '../../constants/StyledMediaQuery';
import Text from '../subatomic/Text';
import { PersonIcon } from '../subatomic/Icons/PersonIcon';
import { CancelIcon } from '../subatomic/Icons/CancelIcon';
import Button from '../atoms/Button';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { LogoutIcon } from '../subatomic/Icons/LogoutIcon';
import { useStore } from '../../store/store';
import { useAuth } from '@memberstack/react';

const ModalWrapper = styled.div`
    position: fixed;
    z-index: 910;
    left: 50%;
    transform: translateX(-50%); // horizontal centering

    @media ${StyledMediaQuery.XS} {
        top: 50%; 
        width: calc(100% - 48px);  // width minus 24px left and 24px right
        transform: translate(-50%, -50%); // centers both horizontally and vertically
    }

    @media ${StyledMediaQuery.S} {
        width: 442px;
        top: 50%;
        transform: translate(-50%, -50%); // this centers both horizontally and vertically
    }

    @media ${StyledMediaQuery.L} {
        width: 604px;
        top: 50%;
        transform: translate(-50%, -50%); // this centers both horizontally and vertically
        left: calc(50% + 130px);
        
    }
`;

const ModalContainer = motion(styled.div`
    @media ${StyledMediaQuery.XS} {
        display: flex;
        background: ${Colors.shades100};
        padding: 64px 16px 16px 16px;
        box-sizing: border-box;
        flex-direction: column;
        align-items: center;
        gap: 48px;
        border-radius: 12px;
        width: auto;
        transform-origin: center;
    }

    @media ${StyledMediaQuery.S} {
        width: 442px;
        padding: 96px 24px 32px 24px;
    }

    @media ${StyledMediaQuery.L} {
        width: 604px;
    }
`);

const IconPlusText = styled.div`
    @media ${StyledMediaQuery.XS} {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 16px;
    }
`;

const ModalIcon = styled.div`
    @media ${StyledMediaQuery.XS} {
        display: flex;
        width: 80px;
        height: 80px;
        justify-content: center;
        align-items: center;

        svg {
            width: 100%;
            height: 100%;
        }
    }

    @media ${StyledMediaQuery.S} {
        width: 96px;
        height: 96px;
    }
`;

const ModalText = styled.div`
    @media ${StyledMediaQuery.XS} {
        display: flex;
        color: ${Colors.neutral600};
        p {
            font-size: 20px;
            font-weight: 500;
            line-height: 24px;
            text-align: center;
        }
    }

    @media ${StyledMediaQuery.S} {
        p {
            font-size: 32px;
            font-weight: 500;
            line-height: 39px;
        }
    }
`;

const ModalCloseIcon = styled.div`
    @media ${StyledMediaQuery.XS} {
        display: flex;
        position: absolute;
        right: 16px;
        top: 16px;
        width: 48px;
        height: 48px;
        justify-content: center;
        align-items: center;
        cursor: pointer;

        svg {
            width: 100%;
            height: 100%;
        }
    }

    @media ${StyledMediaQuery.S} {
        width: 64px;
        height: 64px;
        top: 24px;
        right: 24px;
    }
`

const BottomButtons = styled.div`
    @media ${StyledMediaQuery.XS} {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 12px;
        width: 100%;
    }
`;

const LogoutConfirmationModal: React.FC = () => {
    const { isLogoutModalOpen, closeLogoutModal } = useStore();
    const { userId, isLoggedIn, signOut } = useAuth(); 

    const handleLogoutConfirmation = () => {
        console.log('Logout confirmed');
        signOut();
        closeLogoutModal();
    };

    return (
        <ModalWrapper>
        <ModalContainer 
            initial={{ scale: 0 }}  // start from a dot
            animate={{ scale: 1 }}  // grow to full size
            exit={{ scale: 0 }}  // shrink back to a dot
            transition={{ duration: 0.4, ease: [0.88, 0, 0.16, 1] }} 
        >
            <ModalCloseIcon
                onClick={closeLogoutModal}
            >
                <CancelIcon 
                    fill={Colors.neutral700}
                />
            </ModalCloseIcon>
            <IconPlusText>
                <ModalIcon>
                    <LogoutIcon
                        fill={Colors.neutral600}
                    />
                </ModalIcon>
                <ModalText>
                        <Text text='Are you sure you would like to logout?' />
                </ModalText>
            </IconPlusText>
            <BottomButtons>
                <Button
                    label='Yes, Logout'
                    buttonTypeVariant='primary'
                    buttonWidthVariant='fill'
                    onClick={handleLogoutConfirmation}
                />
                <Button
                    label='Cancel'
                    buttonTypeVariant='secondary'
                    buttonWidthVariant='fill'
                    onClick={closeLogoutModal}
                />
            </BottomButtons>
        </ModalContainer>
        </ModalWrapper>
    );
};

export default LogoutConfirmationModal;