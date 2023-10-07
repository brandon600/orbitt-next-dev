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
        fullPhoneNumber: string;
        customerid: string;
    };
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

const FoundCustomerModal: React.FC<FoundCustomerModalProps> = ({ isOpen, onClose, customer }) => {
    const router = useRouter();
    if (!isOpen || !customer) return null;

    const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

    const handleProcessTransaction = () => {
        console.log('customer', customer);
        console.log('customer.customerId', customer.customerid);
        if (customer && customer.customerid) {
            router.push(`/process-transaction-customer/${customer.customerid}`);
        }
    };

    const formattedNumber = formatPhoneNumber(customer.fullPhoneNumber);
    console.log(formattedNumber);

    return (
        <ModalWrapper>
        <ModalContainer 
            initial={{ scale: 0 }}  // start from a dot
            animate={{ scale: 1 }}  // grow to full size
            exit={{ scale: 0 }}  // shrink back to a dot
            transition={{ duration: 0.4, ease: [0.88, 0, 0.16, 1] }} 
        >
            <ModalCloseIcon
                onClick={onClose}
            >
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
                    <Text text={formattedNumber} />
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
        </ModalWrapper>
    );
};

export default FoundCustomerModal;