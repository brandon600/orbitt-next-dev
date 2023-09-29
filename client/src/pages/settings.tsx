import Text from '../components/subatomic/Text';
import styled from 'styled-components';
import StyledMediaQuery from '../constants/StyledMediaQuery';
import Button from '../components/atoms/Button';
import Colors from '@/constants/Colors';
import React, { useState, useEffect, useCallback, useRef } from 'react';
import GlobalStyle from '../GlobalStyle';
import { useStore, AppState } from '../store/store'; // Import your store
import PillBar from '../components/molecules/PillBar';
import InputField from '../components/atoms/InputField';
import { EditIcon } from '@/components/subatomic/Icons/EditIcon';

const FlexDiv = styled.div`
@media ${StyledMediaQuery.XS} {
    display: flex;
    gap: 32px;
    flex-direction: column;
    padding: 24px 16px;
    width: 100vw;
    box-sizing: border-box;
    background: ${Colors.primary100};
    min-height: 100vh;
}

@media ${StyledMediaQuery.S} {
  padding: 24px;
}

@media ${StyledMediaQuery.L} {
  margin-left: 260px;
  width: calc(100vw - 260px);
}
`

const PageTitle = styled.div`
@media ${StyledMediaQuery.XS} {
    display: flex;
    color: ${Colors.neutral700};
    p {
        font-size: 32px;
        line-height: 39px;
        font-weight: 800;
    }

    @media ${StyledMediaQuery.S} {
        p {
            font-size: 40px;
            line-height: 48px;
            font-weight: 800;
        }
    }
}`

const CompanyNameContainer = styled.div`
@media ${StyledMediaQuery.XS} {
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 100%;
}

@media ${StyledMediaQuery.L} {
    max-width: 320px;
}
`

const InputPlusEdit = styled.div`
@media ${StyledMediaQuery.XS} {
    display: flex;
    align-items: flex-end;
    flex-direction: row;
    gap: 16px;
    width: 100%;
}
`

const CompanyNameEdit = styled.div`
@media ${StyledMediaQuery.XS} {
    display: flex;
    justify-content: center;
    width: 48px;
    height: 48px;

    svg {
        width: 48px;
        height: 48px;
    }
}
`

const BottomButtonFlex = styled.div`
@media ${StyledMediaQuery.XS} {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

@media ${StyledMediaQuery.S} {
    flex-direction: row;
}
`
const BottomButtonDiv = styled.div`
@media ${StyledMediaQuery.XS} {
    display: flex;
    width: 100%;
}
@media ${StyledMediaQuery.S} {
    width: auto;
}
`

const PillTitle = styled.div`
    @media ${StyledMediaQuery.XS} {
        display: flex;
        flex-direction: column;
        gap: 32px;
    }
`

interface SettingsProps {
    // Define any props if you have specific ones for this component.
}

const Settings: React.FC<SettingsProps> = () => {
    const { data, fetchData, toast, showToast } = useStore();
    const [activeTab, setActiveTab] = useState<string>('Account');
    const [businessName, setBusinessName] = useState<string>(data.companyName || '');
    const [newBusinessName, setNewBusinessName] = useState<string>('');
    const [isEditingBusinessName, setEditingBusinessName] = useState<boolean>(false);
    const businessNameRef = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        if (isEditingBusinessName) {
            businessNameRef.current?.focus();
        }
    }, [isEditingBusinessName]);

    useEffect(() => {
        setBusinessName(data.companyName || '');
    }, [data.companyName]);

    useEffect(() => {
        fetchData();
    }, []);

    const handleEditBusinessName = () => {
        setNewBusinessName(businessName);
        setEditingBusinessName(true);
    };

    const handleCancelEditBusinessName = () => {
        setEditingBusinessName(false);
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
          const response = await fetch('http://localhost:5000/update-company-name', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
          });
      
          if (response.ok) {
            const data = await response.json();
            console.log('Success:', data);
            showToast('Customer updated successfully!', 'success');
            // Additional logic here (e.g., close the form, refresh rewards list, etc.)
          } else {
            console.log('Failed:', response);
            showToast('Failed to add customer.', 'error');
          }
        } catch (error) {
          console.error('Error:', error);
          showToast(`Error: Something wrong happened!`, 'error');
        }

    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleTabChange = (tabName: string) => {
        setActiveTab(tabName);
    };

    return (
        <FlexDiv>
            <GlobalStyle />
            <PillTitle>
            <PageTitle>
                <Text text='Settings' />
            </PageTitle>
            <PillBar options={['Account', 'SMS', 'Privacy']} onActiveChange={handleTabChange} />
            </PillTitle>

            <div>
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
                        <p>SMS settings content here.</p>
                    </div>
                )}

                {activeTab === 'Privacy' && (
                    <div>
                        {/* Privacy Tab Content */}
                        <p>Privacy settings content here.</p>
                    </div>
                )}
            </div>
        </FlexDiv>
    );
};

export default Settings;