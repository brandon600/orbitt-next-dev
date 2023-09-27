import React from 'react';
import styled from 'styled-components';
import Colors from '../../constants/Colors';
import StyledMediaQuery from '../../constants/StyledMediaQuery';
import Text from '../subatomic/Text';
import { PersonIcon } from '../subatomic/Icons/PersonIcon';
import { CancelIcon } from '../subatomic/Icons/CancelIcon';
import Button from '../atoms/Button';
import { useRouter } from 'next/router';

const ModalContainer = styled.div`
    @media ${StyledMediaQuery.XS} {
        position: fixed;
        z-index: 910;
        display: flex;
        left: 24px;
        right: 24px;
        background: ${Colors.shades100};
        padding: 64px 16px 16px 16px;
        box-sizing: border-box;
        flex-direction: column;
        align-items: center;
        gap: 48px;
        border-radius: 12px;
        width: auto;
    }

    @media ${StyledMediaQuery.S} {
        width: 442px;
        top: 120px;
        left: 50%; 
        transform: translateX(-50%);
        right: 0px;
        padding: 96px 24px 32px 24px;
    }

    @media ${StyledMediaQuery.L} {
        width: 604px;
        top: 50%; 
        left: 50%;  /* Center horizontally */
        transform: translate(-50%, -50%); 
    }
`;

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
            font-size: 20px;
            font-weight: 500;
            line-height: 24px;
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

interface FoundCustomerModalProps {
    isOpen: boolean;
    onClose: () => void;
    customer?: {
        fullName: string;
        phoneNumber: string;
        customerid: string;
    };
}


const FoundCustomerModal: React.FC<FoundCustomerModalProps> = ({ isOpen, onClose, customer }) => {
    if (!isOpen || !customer) return null;
    const router = useRouter();

    const handleProcessTransaction = () => {
        console.log('customer', customer);
        console.log('customer.customerId', customer.customerid);
        if (customer && customer.customerid) {
            router.push(`/process-transaction-customer/${customer.customerid}`);
        }
    };

    return (
        <ModalContainer onClick={onClose}>
            <ModalCloseIcon>
                <CancelIcon 
                    fill={Colors.neutral700}
                />
            </ModalCloseIcon>
            <IconPlusText>
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
                    <Text text={customer.phoneNumber} />
                    </ModalNumber>
                </ModalNameNumber>
            </IconPlusText>
            <BottomButtons>
                <Button
                    label='Process Transaction'
                    buttonTypeVariant='primary'
                    buttonWidthVariant='fill'
                    onClick={handleProcessTransaction}
                />
                <Button
                    label='Return to Search'
                    buttonTypeVariant='secondary'
                    buttonWidthVariant='fill'
                    onClick={onClose}
                />
            </BottomButtons>
        </ModalContainer>
    );
};

export default FoundCustomerModal;