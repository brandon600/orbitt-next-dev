import React, { useState, useEffect, useCallback } from 'react';
import InputField from '@/components/atoms/InputField';
import Text from '../components/subatomic/Text';
import styled from 'styled-components';
import StyledMediaQuery from '../constants/StyledMediaQuery';
import Button from '../components/atoms/Button';
import Colors from '@/constants/Colors';
import GlobalStyle from '../GlobalStyle';
import Toast from '@/components/atoms/Toast';
import { useStore, AppState } from '../store/store'; // Import your store
import { AnimatePresence } from 'framer-motion';
import FoundCustomerModal from '@/components/molecules/FoundCustomerModal';
import Overlay from '@/components/atoms/Overlay';

const FlexDiv = styled.div`
@media ${StyledMediaQuery.XS} {
    display: flex;
    flex-direction: column;
    padding: 24px 16px;
    width: 100vw;
    height: 100vh;
    box-sizing: border-box;
    background: ${Colors.primary100};
    min-height: 100vh;
}

@media ${StyledMediaQuery.S} {
    padding: 120px 24px 24px 24px;
    align-items: center;
}

@media ${StyledMediaQuery.L} {
    margin-left: 260px;
    width: calc(100vw - 260px);
}
`

const ProcessTransactionContainer = styled.div`
@media ${StyledMediaQuery.XS} {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 24px;
}

@media ${StyledMediaQuery.S} {
    gap: 32px;
    width: 442px;
}
`

const TitlePlusSubhead = styled.div`
@media ${StyledMediaQuery.XS} {
    display: flex;
    flex-direction: column;
    gap: 4px;
}

@media ${StyledMediaQuery.S} {
    gap: 8px;
}
`

const Title = styled.div`
@media ${StyledMediaQuery.XS} {
    display: flex;
    color: ${Colors.neutral600};
    p {
        font-size: 32px;
        line-height: 39px;
        font-weight: 800;
    }
}

@media ${StyledMediaQuery.S} {
    p {
        text-align: center;
        font-size: 48px;
        line-height: 58px;
    }
}
`

const Subhead = styled.div`
@media ${StyledMediaQuery.XS} {
    display: flex;
    color: ${Colors.neutral400};
    p {
        font-size: 16px;
        line-height: 19px;
        font-weight: 500;
    }
}

@media ${StyledMediaQuery.S} {
    p {
        text-align: center;
        font-size: 20px;
        line-height: 24px;
    }
}
`

const FieldAndButton = styled.div`
@media ${StyledMediaQuery.XS} {
    display: flex;
    flex-direction: column;
    gap: 16px;
}
`

function useBodyScrollLock(isLocked: boolean) {
    useEffect(() => {
      if (isLocked) {
        document.body.style.overflowY = 'hidden';
      } else {
        document.body.style.overflowY = 'auto';
      }
  
      return () => {
        document.body.style.overflowY = 'auto';
      };
    }, [isLocked]);
  }

const fetchCustomer = async (phoneNumber: string) => {
    try {
        const response = await fetch(`http://localhost:5000/process-transaction?phoneNumber=${phoneNumber}`);
      
        if (!response.ok) {
            if (response.status === 404) {
                throw new Error('Customer not found');
            }
            throw new Error('Error fetching customer');
        }
  
        return await response.json();
    } catch (error) {
        console.error('Error fetching customer:', error);
        throw error;
    }
};


/**
 * Formats a phone number to the format: (XXX) XXX-XXXX.
 * @param value - The string to format.
 * @returns {string} - Formatted phone number.
 */
export const formatPhoneNumber = (value: string): string => {
    const numericValue = value.replace(/\D/g, '');  // Remove non-digit characters
    
    if (numericValue.length < 4) {
      return numericValue;
    } else if (numericValue.length < 7) {
      return `(${numericValue.substring(0, 3)}) ${numericValue.substring(3)}`;
    } else {
      return `(${numericValue.substring(0, 3)}) ${numericValue.substring(3, 6)}-${numericValue.substring(6, 10)}`;
    }
  };
  
  /**
   * Validates that a phone number contains exactly 10 digits.
   * @param phoneNumber - The phone number to validate.
   * @returns {boolean} - True if the phone number is valid, otherwise false.
   */
  export const isValidPhoneNumber = (phoneNumber: string): boolean => {
    const numericPhoneNumber = phoneNumber.replace(/\D/g, '');
    return numericPhoneNumber.length === 10;
  };

const ProcessTransaction = () => {
    const [phoneNumber, setPhoneNumber] = useState<string>('');
    const [customer, setCustomer] = useState<any>(null);
    const [isPhoneNumberValid, setPhoneNumberValid] = useState<boolean>(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { 
        data, fetchData, toast, 
        hideToast, showToast 
      } = useStore((state: AppState) => state);

      useBodyScrollLock(isModalOpen);


      const handleSearchCustomer = async () => {
        try {
            const customerData = await fetchCustomer(phoneNumber);
            setCustomer(customerData);
            setIsModalOpen(true); // Show modal when customer is found
        } catch (error) {
            const err = error as Error; // Type assertion
    
            if (err.message === 'Customer not found') {
                console.error('Error:', err);
                showToast(`Error: No Customer found.`, 'error');
            } else {
                // Handle other errors as needed
                showToast(`Error: Something wrong happened!`, 'error');
            }
        }
    };

    return (
        <FlexDiv>
            <AnimatePresence>
                {toast.visible && (
                    <Toast key="toast" />
                )}
            </AnimatePresence>
            <FoundCustomerModal
                isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} customer={customer}
            />
            <AnimatePresence>
            { (isModalOpen) && <Overlay />}
            </AnimatePresence>
            <GlobalStyle />
            <ProcessTransactionContainer>
                <TitlePlusSubhead>
                    <Title>
                        <Text text="Process Transaction" />
                    </Title>
                    <Subhead>
                        <Text text="Find the customer you want to service by entering their phone number below" />
                    </Subhead>
                </TitlePlusSubhead>
                <FieldAndButton>
                    <InputField 
                        label="Enter Phone Number"
                        value={phoneNumber}
                        placeholder="e.g. (555) 555-5555"
                        onChange={(value) => {
                            const formattedNumber = formatPhoneNumber(value);
                            setPhoneNumber(formattedNumber);
                            setPhoneNumberValid(isValidPhoneNumber(formattedNumber));
                        }}
                    />
                <Button
                    buttonTypeVariant={
                        isPhoneNumberValid
                        ? 'primary'
                        : 'disabled'
                    }
                    sizeVariant='large'
                    label='Search For Customer'
                    buttonWidthVariant='fill'
                    onClick={handleSearchCustomer}
                    type='submit'
                    disabled={
                        !isPhoneNumberValid
                    }
                />
                </FieldAndButton>
            </ProcessTransactionContainer>
        </FlexDiv>
    );
};

export default ProcessTransaction;