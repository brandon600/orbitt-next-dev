import React, { useState, useEffect, useCallback } from 'react';
import InputField from '@/components/atoms/InputField';
import Text from '../components/subatomic/Text';
import styled from 'styled-components';
import StyledMediaQuery from '../constants/StyledMediaQuery';
import Button from '../components/atoms/Button';
import Colors from '@/constants/Colors';
import GlobalStyle from '../GlobalStyle';
import { useStore, AppState } from '../store/store'; // Import your store
import { AnimatePresence } from 'framer-motion';

const FlexDiv = styled.div`
@media ${StyledMediaQuery.XS} {
    display: flex;
    gap: 40px;
    flex-direction: column;
    padding: 24px 16px;
    width: 100vw;
    box-sizing: border-box;
    background: ${Colors.primary100};
}
`

const ProcessTransactionContainer = styled.div`
@media ${StyledMediaQuery.XS} {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 24px;
}
`

const TitlePlusSubhead = styled.div`
@media ${StyledMediaQuery.XS} {
    display: flex;
    flex-direction: column;
    gap: 4px;
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
`

const FieldAndButton = styled.div`
@media ${StyledMediaQuery.XS} {
    display: flex;
    flex-direction: column;
    gap: 16px;
}
`

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

    const handleSearchCustomer = async () => {
        try {
            const customerData = await fetchCustomer(phoneNumber);
            setCustomer(customerData);
            console.log(customerData);
        } catch (error) {
            // Handle error like showing an error message to the user
        }
    };
    

    return (
        <FlexDiv>
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
                        placeholder="e.g. 555-555-5555"
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