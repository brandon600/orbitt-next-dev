import React, { ReactNode } from 'react';
import styled from 'styled-components';
import Colors from '../../constants/Colors';
import StyledMediaQuery from '../../constants/StyledMediaQuery';
import Text from '../subatomic/Text';
import { PersonIcon } from '../subatomic/Icons/PersonIcon';
import { CancelIcon } from '../subatomic/Icons/CancelIcon';
import Button from '../atoms/Button';
import { useRouter } from 'next/router';
import { RewardData } from '@/types/RewardData';
import { useStore, AppState } from '../../store/store'; // Import your store
import { motion } from 'framer-motion';
import { useMemberstack } from "@memberstack/react";
import { useAuth } from "@memberstack/react";

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
        gap: 32px;
        border-radius: 12px;
        width: auto;
    }

    @media ${StyledMediaQuery.S} {
        padding: 96px 24px 32px 24px;
        gap: 40px;
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

const ModalNameNumber = styled.div`
    @media ${StyledMediaQuery.XS} {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 8px;
    }
`;

const ModalName = styled.div`
    @media ${StyledMediaQuery.XS} {
        display: flex;
        color: ${Colors.neutral600};
        p {
            font-size: 24px;
            font-weight: 800;
            line-height: 29px;
        }
    }

    @media ${StyledMediaQuery.S} {
        p {
            font-size: 32px;
            font-weight: 800;
            line-height: 39px;
        }
    }
`;

const ModalNumber = styled.div`
    @media ${StyledMediaQuery.XS} {
        display: flex;
        color: ${Colors.neutral600};
        p {
            font-size: 20px;
            font-weight: 500;
            line-height: 24px;
        }
    }

    @media ${StyledMediaQuery.S} {
        p {
            font-size: 24px;
            font-weight: 500;
            line-height: 29px;
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
`;

const BottomButtons = styled.div`
    @media ${StyledMediaQuery.XS} {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 12px;
        width: 100%;
    }
`;

const PTMTopContent = styled.div`
    @media ${StyledMediaQuery.XS} {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 16px;
    }
`;

const PTMMidConent = styled.div`
    @media ${StyledMediaQuery.XS} {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 16px;
    }

    @media ${StyledMediaQuery.S} {
        gap: 24px;
    }
`;

const PTMMidContent1 = styled.div`
    @media ${StyledMediaQuery.XS} {
        display: flex;
        color: ${Colors.neutral500};
        p {
            font-size: 16px;
            font-weight: 400;
            line-height: 19px; 
            text-align: center;
        }
    }

    @media ${StyledMediaQuery.S} {
        p {
            font-size: 20px;
            line-height: 24px; 
        }
    }
`;

const PTMMidContent2 = styled.div`
    @media ${StyledMediaQuery.XS} {
        display: flex;
        color: ${Colors.neutral700};
        p {
            font-size: 16px;
            font-weight: 500;
            line-height: 19px;
            text-align: center;
        }
    }

    @media ${StyledMediaQuery.S} {
        p {
            font-size: 20px;
            line-height: 24px; 
        }
    }
`;

const ContentDiv = styled.div`
    @media ${StyledMediaQuery.XS} {
        display: flex;
        flex-direction: column;
        width: 100%;
        gap: 32px;
    }

    @media ${StyledMediaQuery.S} {
        gap: 40px;
    }
`;

interface ProcessTransactionModalProps {
    isOpen: boolean;
    onClose: () => void;
    customer?: {
        fullName: string;
        fullPhoneNumber: string;
        customerid: string;
        rewardNumber: number;
    };
    mode?: 'givePoints' | 'redeemReward';
    reward?: RewardData;
    pointsGive?: string;
    transactionDetails?: string;
}

function formatPhoneNumber(number: string) {
    const strNum = number
    
    if (strNum.length !== 11) {
        return "Invalid Number";
    }

    const areaCode = strNum.substring(1, 4);  // get the digits for area code
    const centralOfficeCode = strNum.substring(4, 7); // get the next three digits
    const stationCode = strNum.substring(7); // get the last four digits

    return `(${areaCode}) ${centralOfficeCode}-${stationCode}`;
}

const ProcessTransactionModal: React.FC<ProcessTransactionModalProps> = ({ isOpen, onClose, customer, mode, reward, pointsGive,
    transactionDetails, }) => {

    const router = useRouter();
    if (!isOpen || !customer) return null;

    const { data, fetchData, toast, showToast, hideToast } = useStore.getState(); // Directly access Zustand state
    
    const handleGivePoints = async () => {
        const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
        try {
            const response = await fetch(`${apiUrl}/give-points`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    customerId: customer?.customerid,
                    points: pointsGive,
                    transactionDetails: transactionDetails,
                    user: data,
                }),
            });

            const responseData = await response.json();

            if (responseData.success) {
                showToast('Successfully gave points!', 'success');
                router.push('/process-transaction');
            } else {
                showToast('Failed to give points.', 'error');
            }
        } catch (error) {
            console.error('Failed to give points:', error);
            showToast('Failed to give points.', 'error');
            // Handle unexpected errors (e.g., network issues, timeouts, etc.)
        }
    };


    const handleRedeemReward = async () => {
        if (!reward) return;  // Safety check
        try {
            const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
            const response = await fetch(`${apiUrl}/redeem-reward`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    customerId: customer?.customerid,
                    rewardId: reward.rewardid,  // Assuming reward has an ID
                    user: data
                }),
            });

            const responseData = await response.json();

            if (responseData.success) {
                showToast('Successfully redeemed reward!', 'success');
                router.push('/process-transaction');
            } else {
                // Handle error
                showToast('Failed to redeem reward.', 'error');
            }
        } catch (error) {
            console.error('Failed to redeem reward:', error);
            showToast('Failed to redeem reward.', 'error');
            // Handle unexpected errors
        }
    };


    const confirmTransactionProcess = () => {
        if (mode === 'givePoints') {
            handleGivePoints();
        } else if (mode === 'redeemReward') {
            handleRedeemReward();
        }
    };

    const formattedNumber = formatPhoneNumber(customer.fullPhoneNumber);

    let content;
    let pointsGiveNumber

    if (mode === 'givePoints') {
        if (pointsGive === undefined) {
            pointsGiveNumber = 1
        } else {
            pointsGiveNumber = parseInt(pointsGive)
        }
        content = (
        <ContentDiv>
        <PTMMidConent>
        <PTMMidContent1>
            <Text
                text={`Are you sure you would like to give ${customer?.fullName} ${pointsGive} reward point(s) and complete this transaction?`}
            />
        </PTMMidContent1>
        <PTMMidContent2>
            <Text
                text={`The customer’s new point balance will be ${customer?.rewardNumber + pointsGiveNumber}.`}
            />
        </PTMMidContent2>
        </PTMMidConent>
        <BottomButtons>
            <Button
                label='Yes, Confirm'
                buttonTypeVariant='primary'
                buttonWidthVariant='fill'
                onClick={confirmTransactionProcess}
            />
            <Button
                label='No, Go Back'
                buttonTypeVariant='secondary'
                buttonWidthVariant='fill'
                onClick={onClose}
            />
        </BottomButtons>
        </ContentDiv>
        );
    } else if (mode === 'redeemReward' && reward) {
        content = (
            <ContentDiv>
            <PTMMidConent>
            <PTMMidContent1>
                <Text
                    text={`Are you sure you would like to redeem a ${reward.rewardName} for ${customer?.fullName} for ${reward.rewardCost} points?`}
                />
            </PTMMidContent1>
            <PTMMidContent2>
                <Text
                    text={`This customer's new point balance will be ${customer?.rewardNumber - reward.rewardCost}`}
                />
            </PTMMidContent2>
            </PTMMidConent>
            <BottomButtons>
                <Button
                    label='Yes, Redeem This Reward'
                    buttonTypeVariant='primary'
                    buttonWidthVariant='fill'
                    onClick={confirmTransactionProcess}
                />
                <Button
                    label='No, Go Back'
                    buttonTypeVariant='secondary'
                    buttonWidthVariant='fill'
                    onClick={onClose}
                />
            </BottomButtons>
            </ContentDiv>
            );
    } else {
        content = (
            <ContentDiv>
            </ContentDiv>
        )
    }

    return (
        <ModalWrapper>
        <ModalContainer 
            initial={{ scale: 0 }}  // start from a dot
            animate={{ scale: 1 }}  // grow to full size
            exit={{ scale: 0 }}  // shrink back to a dot
            transition={{ duration: 0.4, ease: [0.88, 0, 0.16, 1] }} 
            onClick={onClose}
        >
            <ModalCloseIcon>
                <CancelIcon 
                    fill={Colors.neutral700}
                />
            </ModalCloseIcon>
            <PTMTopContent>
            <ModalIcon>
                    <PersonIcon 
                        fill={Colors.neutral600}
                    />
                </ModalIcon>
                <ModalNameNumber>
                    <ModalName>
                        <Text text={customer.fullName} />
                    </ModalName>
                    <ModalNumber>
                    <Text text={formattedNumber} />
                    </ModalNumber>
                </ModalNameNumber>
            </PTMTopContent>
            {content}
        </ModalContainer>
        </ModalWrapper>
    );
};

export default ProcessTransactionModal;