import React, { useState, useEffect, useCallback } from 'react';
import InputField from '@/components/atoms/InputField';
import Text from '../../src/components/subatomic/Text';
import styled from 'styled-components';
import StyledMediaQuery from '../../src/constants/StyledMediaQuery';
import Button from '../../src/components/atoms/Button';
import Colors from '@/constants/Colors';
import GlobalStyle from '../../src/GlobalStyle';
import Toast from '@/components/atoms/Toast';
import { useStore, AppState, UserData, fetchData, initialData } from '../../src/store/store'; // Import your store
import { AnimatePresence } from 'framer-motion';
import FoundCustomerModal from '@/components/molecules/FoundCustomerModal';
import Overlay from '@/components/atoms/Overlay';
import Cookie from 'js-cookie';
import { useMemberAuth } from '../../src/util/global/globalHooks';
import { FlexDiv, ProcessTransactionContainer, TitlePlusSubhead, Title, Subhead, FieldAndButton } from '../../src/pagesource/process-transaction/styles';

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
    console.log('being called!!')
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop()?.split(';').shift() || null;
    return null;
  }


  const fetchCustomer = async (phoneNumber: string, userData: UserData) => {
    console.log('being called!!!')
    console.log(userData);
    console.log(userData.userid)
    

    /*
    let userData: UserData = initialData;
    const userCookie = getCookie('user');
    console.log(userCookie);
    if (userCookie) {
        userData = JSON.parse(userCookie);
        console.log(userData);
    } else {
        // Fetch user data if it's not in the cookie
        const memberstackId = getCookie('memberstackId'); 
        console.log(memberstackId)
        if (memberstackId) {
            const fetchedData = await fetchData(memberstackId); // fetchData can return null
            if (fetchedData) {
                userData = fetchedData;
                // fetchData already sets the cookie, so you don't have to do it again here
            }
        }
    }
        */

    if (!userData.userid) {
        throw new Error('No user data available');
    }

    try {
        const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
        console.log(apiUrl)
        console.log(userData.userid);
        const response = await fetch(`${apiUrl}/process-transaction?userId=${userData.userid}&phoneNumber=${phoneNumber}`);
        console.log('Server Response:', response);
    
        if (!response.ok) {
            console.error('Error fetching customer:', response.status, response.statusText);
            throw new Error('Error fetching customer');
        }
    
        const responseText = await response.text(); // Get the response text
        console.log('Response Text:', responseText);
    
        const customerData = JSON.parse(responseText); // Attempt to parse JSON
    
        if (!customerData) {
            throw new Error('Empty customer data received');
        }
    
        return customerData;
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
      const { userId } = useMemberAuth();

      useEffect(() => {
        if (userId) {
          fetchData(userId);
        }
      }, [fetchData, userId]);

      useBodyScrollLock(isModalOpen);

      const userData = data


      const handleSearchCustomer = async (userData: UserData) => {
        console.log(phoneNumber)
        console.log(userData)
            if (userData) {
                try {
                    const customerData = await fetchCustomer(phoneNumber, userData);
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
            } else {
                console.log('user data not found')
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
                    onClick={() => handleSearchCustomer(userData)}
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