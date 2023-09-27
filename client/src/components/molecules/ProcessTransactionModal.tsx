import React, { ReactNode } from 'react';
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
        z-index: 920;
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
`;

interface ProcessTransactionModalProps {
    isOpen: boolean;
    onClose: () => void;
    customer?: {
        fullName: string;
        fullPhoneNumber: string;
        customerid: string;
    };
    content: ReactNode;
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

const ProcessTransactionModal: React.FC<ProcessTransactionModalProps> = ({ isOpen, onClose, customer }) => {
    const router = useRouter();
    if (!isOpen || !customer) return null;

    const confirmTransactionProcess = () => {
        console.log('customer', customer);
        console.log('customer.customerId', customer.customerid);
        if (customer && customer.customerid) {
            router.push(`/process-transaction-customer/${customer.customerid}`);
        }
    };

    const formattedNumber = formatPhoneNumber(customer.fullPhoneNumber);
    console.log(formattedNumber);

    return (
        <ModalContainer onClick={onClose}>
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
            <PTMMidConent>
            <PTMMidContent1>
                <Text
                    text="Are you sure you would like to give this customer 1 reward point and complete this transaction?"
                />
            </PTMMidContent1>
            <PTMMidContent2>
                <Text
                    text="The customer’s new point balance will be 12."
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
        </ModalContainer>
    );
};

export default ProcessTransactionModal;