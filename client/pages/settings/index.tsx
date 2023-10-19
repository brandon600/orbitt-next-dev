import Text from '../../src/components/subatomic/Text';
import styled from 'styled-components';
import StyledMediaQuery from '../../src/constants/StyledMediaQuery';
import Button from '../../src/components/atoms/Button';
import Colors from '@/constants/Colors';
import React, { useState, useEffect, useCallback, useRef } from 'react';
import GlobalStyle from '../../src/GlobalStyle';
import { useStore, AppState } from '../../src/store/store'; // Import your store
import PillBar from '../../src/components/molecules/PillBar';
import InputField from '../../src/components/atoms/InputField';
import { EditIcon } from '@/components/subatomic/Icons/EditIcon';
import Textarea from '../../src/components/atoms/Textarea';
import { AnimatePresence } from 'framer-motion';
import Toast from '@/components/atoms/Toast';
import { useMemberAuth } from '../../src/util/global/globalHooks';
import { FlexDiv, PageTitle, PillTitle, NoFlexDiv, CompanyNameContainer, InputPlusEdit, CompanyNameEdit, BottomButtonFlex, BottomButtonDiv, SMSContentContainer, CreditsPlusButton, SMSCreditsRemaining, SMSCreditsTitle, SMSCreditsBarContainerNotice, SMSCreditsBarContainer, SMSCreditsBar, SMSCreditsBarFill, SMSCreditsBarCount, SMSNoticeText, SMSButtonsContainer, SMSPhoneNumber, SMSPhoneNumberTextContainer, SMSPhoneNumberTitle, SMSPhoneNumberSubtitle, TermsConditionsContainer, TextAreaContainer, TermsConditionsButton } from './styles';

interface ProgressBarProps {
    value: number;
    maxValue: number;
  }

const ProgressBar: React.FC<ProgressBarProps> = ({ value, maxValue }) => {
    const filledPercentage = (value / maxValue) * 100;
    console.log(value)
    console.log(maxValue)
  
    return (
      <SMSCreditsBar>
        <SMSCreditsBarFill
          style={{
            width: `${filledPercentage}%`,
          }}
        />
      </SMSCreditsBar>
    );
  };

interface SettingsProps {
    // Define any props if you have specific ones for this component.
}


/**
 * Formats a phone number to the format: (XXX) XXX-XXXX.
 * @param value - The string to format.
 * @returns {string} - Formatted phone number.
 */
export const formatPhoneNumber = (value: string): string => {
    let numericValue = value.replace(/\D/g, '');  // Remove non-digit characters
  
    // Check for 11 digits and starts with "1"
    if (numericValue.length === 11 && numericValue.startsWith('1')) {
      numericValue = numericValue.substring(1); // Remove the leading "1"
    }
  
    if (numericValue.length < 4) {
      return numericValue;
    } else if (numericValue.length < 7) {
      return `(${numericValue.substring(0, 3)}) ${numericValue.substring(3)}`;
    } else {
      return `(${numericValue.substring(0, 3)}) ${numericValue.substring(3, 6)}-${numericValue.substring(6, 10)}`;
    }
  };

const Settings: React.FC<SettingsProps> = () => {
    const { data, fetchData, toast, showToast } = useStore();
    const [activeTab, setActiveTab] = useState<string>('Account');
    const [businessName, setBusinessName] = useState<string>(data.companyName || '');
    const [newBusinessName, setNewBusinessName] = useState<string>('');
    const [isEditingBusinessName, setEditingBusinessName] = useState<boolean>(false);
    const businessNameRef = useRef<HTMLInputElement | null>(null);
    const businessTCRef = useRef<HTMLTextAreaElement | null>(null);
    const [businessTC, setBusinessTC] = useState<string>(data.termsConditions || '');
    const [newBusinessTC, setNewBusinessTC] = useState<string>('');
    const [isEditingBusinessTC, setEditingBusinessTC] = useState<boolean>(false);
    const { userId } = useMemberAuth();


    useEffect(() => {
        if (isEditingBusinessName) {
            businessNameRef.current?.focus();
        }
    }, [isEditingBusinessName]);

    useEffect(() => {
        setBusinessName(data.companyName || '');
    }, [data.companyName]);


    useEffect(() => {
        if (isEditingBusinessTC) {
            businessTCRef.current?.focus();
        }
    }, [isEditingBusinessTC]);


    useEffect(() => {
        setBusinessTC(data.termsConditions || '');
    }, [data.termsConditions]);

    useEffect(() => {
        if (userId) {
          fetchData(userId);
        }
      }, [fetchData, userId]);


    const handleEditBusinessName = () => {
        setNewBusinessName(businessName);
        setEditingBusinessName(true);
    };

    const handleCancelEditBusinessName = () => {
        setEditingBusinessName(false);
    };

    const handleEditBusinessTC= () => {
        setNewBusinessTC(businessTC);
        setEditingBusinessTC(true);
    };

    const handleCancelEditBusinessTC = () => {
        setEditingBusinessTC(false);
    };

    const handleSaveBusinessName = async (e?: React.FormEvent) => {
        e?.preventDefault();
        setBusinessName(newBusinessName);
        setEditingBusinessName(false);
         const payload = {
          businessName: newBusinessName,
          user: data,
        };
    
        try {
            const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
          const response = await fetch(`${apiUrl}/update-company-name`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
          });
      
          if (response.ok) {
            const data = await response.json();
            console.log('Success:', data);
            showToast('Name updated successfully!', 'success');
          } else {
            console.log('Failed:', response);
            showToast('Failed to update name.', 'error');
          }
        } catch (error) {
          console.error('Error:', error);
          showToast(`sdj: Something wrong happened!`, 'error');
        }

    };

    const handleSaveBusinessTC = async (e?: React.FormEvent) => {
        e?.preventDefault();
        setBusinessTC(newBusinessTC);
        setEditingBusinessTC(false);
        console.log("Sending to backend:", newBusinessTC); 
         const payload = {
          businessTC: newBusinessTC,
          user: data,
        };
    
        try {
            const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
          const response = await fetch(`${apiUrl}/update-terms-conditions`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
          });
      
          if (response.ok) {
            const data = await response.json();
            console.log('Success:', data);
            showToast(`T&C's updated successfully!`, 'success');
            // Additional logic here (e.g., close the form, refresh rewards list, etc.)
          } else {
            console.log('Failed:', response);
            showToast(`Failed to update T&C's.`, 'error');
          }
        } catch (error) {
          console.error('Error:', error);
          showToast(`sdj: Something wrong happened!`, 'error');
        }

    };

    useEffect(() => {
        if (userId) {
          fetchData(userId);
        }
      }, [fetchData, userId]);

    const handleTabChange = (tabName: string) => {
        setActiveTab(tabName);
    };

    const inputSMSNumber = formatPhoneNumber(data.messagingPhoneNumber)
    const barValue = data.monthlyMessagesLeft;
    const barMaxValue = 1000

    const handleUpgradeSubscription = () => {
        console.log('Upgrade Subscription button clicked!');
    }

    const handleBuyMoreCredits = () => {
        console.log('Buy More Credits button clicked!')
    }


    return (
        <FlexDiv>
            <AnimatePresence>
            {toast.visible && (
                <Toast key="toast" />
            )}
            </AnimatePresence>
            <GlobalStyle />
            <PillTitle>
            <PageTitle>
                <Text text='Settings' />
            </PageTitle>
            <PillBar options={['Account', 'SMS', 'Privacy']} onActiveChange={handleTabChange} />
            </PillTitle>
            <NoFlexDiv>
                {activeTab === 'Account' && (
                    <CompanyNameContainer>
                        <InputPlusEdit>
                        {/* Account Tab Content */}
                            <InputField
                                ref={businessNameRef}
                                label="Company Name"
                                value={isEditingBusinessName ? newBusinessName : businessName}
                                onChange={setNewBusinessName}
                                disabled={!isEditingBusinessName}
                            />
                            {!isEditingBusinessName && <CompanyNameEdit onClick={handleEditBusinessName}><EditIcon fill={Colors.neutral700} /></CompanyNameEdit>}
                            </InputPlusEdit>
                        {isEditingBusinessName && (
                            <BottomButtonFlex>
                                <BottomButtonDiv>
                                    <Button
                                        label='Cancel'
                                        onClick={handleCancelEditBusinessName}
                                        buttonTypeVariant='neutral'
                                        buttonWidthVariant='fill'
                                        sizeVariant='large'
                                    />
                                </BottomButtonDiv>
                                <BottomButtonDiv>
                                    <Button
                                        label='Save'
                                        onClick={handleSaveBusinessName}
                                        buttonTypeVariant='primary'
                                        buttonWidthVariant='fill'
                                        sizeVariant='large'
                                    />
                                </BottomButtonDiv>
                            </BottomButtonFlex>
                        )}
                    </CompanyNameContainer>
                )}

                {activeTab === 'SMS' && (
                    <div>
                        {/* SMS Tab Content */}
                        <SMSContentContainer>
                            <CreditsPlusButton>
                                <SMSCreditsRemaining>
                                    <SMSCreditsTitle>
                                        <Text
                                            text="SMS Credits Remaining"
                                        />
                                    </SMSCreditsTitle>
                                    <SMSCreditsBarContainerNotice>
                                        <SMSCreditsBarContainer>
                                        <ProgressBar
                                            value={barValue ?? 0}
                                            maxValue={barMaxValue ?? 1000}
                                            />
                                            <SMSCreditsBarCount>
                                                <Text
                                                    text={`${barValue ?? 0}/${barMaxValue ?? 1000}`}
                                                />
                                            </SMSCreditsBarCount>
                                        </SMSCreditsBarContainer>
                                        <SMSNoticeText>
                                            <Text
                                                text='SMS Credits to be reset on 9/09/2023'
                                            />
                                        </SMSNoticeText>
                                    </SMSCreditsBarContainerNotice>
                                </SMSCreditsRemaining>
                                <SMSButtonsContainer>
                                    <Button
                                        label='Upgrade Subscription'
                                        buttonTypeVariant='secondary'
                                        buttonWidthVariant='fill'
                                        sizeVariant='large'
                                        onClick={handleUpgradeSubscription}
                                    />
                                    <Button
                                        label='Buy More Credits'
                                        buttonTypeVariant='primary'
                                        buttonWidthVariant='fill'
                                        sizeVariant='large'
                                        onClick={handleBuyMoreCredits}
                                    />
                                    </SMSButtonsContainer>
                            </CreditsPlusButton>
                            <SMSPhoneNumber>
                            <SMSPhoneNumberTextContainer>
                                <SMSPhoneNumberTitle>
                                    <Text
                                        text="SMS Phone Number"
                                    />
                                </SMSPhoneNumberTitle>
                                <SMSPhoneNumberSubtitle>
                                    <Text
                                        text="This is the phone number you are sending SMS messages from."
                                    />
                                </SMSPhoneNumberSubtitle>
                            </SMSPhoneNumberTextContainer>
                            <InputField
                                ref={businessNameRef}
                                label="Phone Number"
                                value={inputSMSNumber}
                                onChange={setNewBusinessName}
                                disabled={true}
                            />
                        </SMSPhoneNumber>
                        </SMSContentContainer>
                    </div>
                )}

                {activeTab === 'Privacy' && (
                    <TermsConditionsContainer>
                        <TextAreaContainer>
                            <Textarea
                                value={isEditingBusinessTC ? newBusinessTC : businessTC}
                                onChange={setNewBusinessTC}
                                height='100%'
                                ref={businessTCRef}
                            />
                        </TextAreaContainer>
                        {!isEditingBusinessTC && <BottomButtonDiv>
                            <TermsConditionsButton>
                                    <Button
                                        label='Edit'
                                        onClick={handleEditBusinessTC}
                                        buttonTypeVariant='neutral'
                                        buttonWidthVariant='fill'
                                        sizeVariant='large'
                                    />
                            </TermsConditionsButton>
                                </BottomButtonDiv>}
                        {isEditingBusinessTC && (
                            <BottomButtonFlex>
                                <BottomButtonDiv>
                                    <Button
                                        label='Cancel'
                                        onClick={handleCancelEditBusinessTC}
                                        buttonTypeVariant='neutral'
                                        buttonWidthVariant='fill'
                                        sizeVariant='large'
                                    />
                                </BottomButtonDiv>
                                <BottomButtonDiv>
                                    <Button
                                        label='Save'
                                        onClick={handleSaveBusinessTC}
                                        buttonTypeVariant='primary'
                                        buttonWidthVariant='fill'
                                        sizeVariant='large'
                                    />
                                </BottomButtonDiv>
                            </BottomButtonFlex>
                        )}
                    </TermsConditionsContainer>
                )}
            </NoFlexDiv>
        </FlexDiv>
    );
};

export default Settings;