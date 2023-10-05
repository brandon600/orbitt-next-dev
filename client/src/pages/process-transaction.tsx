import React, { useState, useEffect, useCallback } from 'react';
import InputField from '@/components/atoms/InputField';
import Text from '../components/subatomic/Text';
import styled from 'styled-components';
import StyledMediaQuery from '../constants/StyledMediaQuery';
import Button from '../components/atoms/Button';
import Colors from '@/constants/Colors';
import GlobalStyle from '../GlobalStyle';
import Toast from '@/components/atoms/Toast';
import { useStore, AppState, UserData, fetchData, initialData } from '../store/store'; // Import your store
import { AnimatePresence } from 'framer-motion';
import FoundCustomerModal from '@/components/molecules/FoundCustomerModal';
import Overlay from '@/components/atoms/Overlay';
import Cookie from 'js-cookie';

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
      const originalOverflow = document.body.style.overflowY;
      
      if (isLocked) {
        document.body.style.overflowY = 'hidden';
      } else {
        document.body.style.overflowY = 'auto';
      }
  
      return () => {
        document.body.style.overflowY = originalOverflow;
      };
    }, [isLocked]);
}

function getCookie(name: string): string | null {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop()?.split(';').shift() || null;
    return null;
  }

const fetchCustomer = async (phoneNumber: string) => {
    let userData: UserData = initialData;
    const userCookie = getCookie('user');
    if (userCookie) {
        userData = JSON.parse(userCookie);
    } else {
        // Fetch user data if it's not in the cookie
        const memberstackId = getCookie('memberstackId'); 
        if (memberstackId) {
            const fetchedData = await fetchData(memberstackId); // fetchData can return null
            if (fetchedData) {
                userData = fetchedData;
                // fetchData already sets the cookie, so you don't have to do it again here
            }
        }
    }

    if (!userData.userid) {
        throw new Error('No user data available');
    }

    try {
        const response = await fetch(`/process-transaction?userId=${userData.userid}&phoneNumber=${phoneNumber}`);
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
      const savedUserData = JSON.parse(Cookie.get('user') || '{}')
      console.log(savedUserData);

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

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <FlexDiv>
            <AnimatePresence>
                {toast.visible && (
                    <Toast key="toast" />
                )}
            </AnimatePresence>
            <AnimatePresence>
                { (isModalOpen) &&  <FoundCustomerModal
                key="foundCustomerModal"
                isOpen={isModalOpen} 
                onClose={handleCloseModal} 
                customer={customer}
            />}
            </AnimatePresence>
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