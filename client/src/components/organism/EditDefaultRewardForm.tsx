// components/RewardForm.tsx
import React, { useState, useEffect } from 'react';
import InputField from '../atoms/InputField';
import DropdownField from '../atoms/DropdownField';
import Text from '../subatomic/Text';
import Button from '../atoms/Button';
import { styled } from 'styled-components';
import StyledMediaQuery from '../../constants/StyledMediaQuery';
import Colors from '../../constants/Colors';
import { CancelIcon } from '../subatomic/Icons/CancelIcon';
import { motion } from 'framer-motion';
import { useStore, AppState } from '../../store/store'; // Import your store
import { on } from 'events';


type EditDefaultRewardFormProps = {
    id: number;
    _id: string;
    defaultRewardValue: string;
    index: number;
    onClose: () => void;
    rewardNumberId: number;
    // Add other properties as needed
}

  
  const ModalCloseButton = styled.div`
      @media ${StyledMediaQuery.XS} {
        display: flex;
        position: fixed;
        top: 20px;
        right: 20px;
        z-index: 1000;
  
          svg {
            width: 48px;
            height: 48px;
          }
      }
  
      @media ${StyledMediaQuery.S} {
        top: 24px;
        right: 24px;
  
          svg {
            width: 64px;
            height: 64px;
          }
      }
  `
  
  const RewardFormDiv =  motion(styled.div`
      @media ${StyledMediaQuery.XS} {
        position: fixed;
        right: 0;
        top: 0;
        display: flex;
        width: 280px;
        height: 100vh;
        background: ${Colors.shades100};
        flex-direction: column;
        align-items: flex-start;
        flex-shrink: 0;
        z-index: 900;
      }
  
      @media ${StyledMediaQuery.S} {
          width: 400px;
      }
  `)
  
  const RewardFormContent = styled.div`
      @media ${StyledMediaQuery.XS} {
          display: flex;
          flex-direction: column;
          gap: 24px;
          width: 100%;
          padding: 88px 16px 16px 16px;
          box-sizing: border-box;
          overflow-y: auto;
          max-height: 100vh - 96px;
      }
  
      @media ${StyledMediaQuery.S} {
        padding: 120px 24px 24px 24px;
      }
  `
  
  const RewardFormHeading = styled.div`
      @media ${StyledMediaQuery.XS} {
          display: flex;
          color: ${Colors.neutral700};
  
          p {
            font-size: 24px;
            font-weight: 800;
            line-height: 29px;
          }
      }
  
      @media ${StyledMediaQuery.S} {
          p {
            font-size: 32px;
            line-height: 39px;
          }
      }
  `
  
  const FormAndButton = styled.div`
      @media ${StyledMediaQuery.XS} {
        display: flex;
        width: 100%;
        flex-direction: column;
        align-items: flex-start;
        gap: 16px;
        align-self: stretch;
  
        form {
          display: flex;
          gap: 24px;
          width: 100%;
        }
      }
  `
  
  const RequiredLabel = styled.div`
      @media ${StyledMediaQuery.XS} {
        display: flex;
        align-items: flex-start;
        gap: 4px;
        color: ${Colors.error500};
  
        p {
          font-size: 16px;
        }
  
        h6 {
          font-size: 14px;
          font-weight: 500;
        }
      }
  `
  
  const FormFields = styled.div`
      @media ${StyledMediaQuery.XS} {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 16px;
        width: 100%;
      }
  `
  
  const EditDefaultRewardForm: React.FC<EditDefaultRewardFormProps> = ({
    onClose,
    _id,
    rewardNumberId,
    defaultRewardValue,
    index
  }) => {
 
    const [newDefaultRewardValue, setNewDefaultRewardValue] = useState<string>(defaultRewardValue);
    const [hasChanged, setHasChanged] = useState<boolean>(false);
    const [fieldValid, setFieldValid] = useState<boolean>(true);

    useEffect(() => {
      // Check for changes
      setHasChanged(newDefaultRewardValue !== defaultRewardValue);
  
      // Check if the field is valid (not empty)
      setFieldValid(newDefaultRewardValue.trim() !== "");
  }, [newDefaultRewardValue, defaultRewardValue]);
    
  
    const { showToast } = useStore((state: AppState) => ({ showToast: state.showToast }));
  
    const handleUpdate = async (e: React.FormEvent) => {
      e.preventDefault();
      // Get global state data
      const { data } = useStore.getState(); // Directly access Zustand state
      console.log(data)
    
      const finalDefaultRewardValue = parseFloat(newDefaultRewardValue);
  
      const payload = {
        rewardDetails: {
          value: finalDefaultRewardValue,
          id: rewardNumberId,
        },
        // Include any other relevant data
        user: data
      };
  
      try {
        const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
        const response = await fetch(`${apiUrl}/update-default-reward`, {
          method: 'PUT',  // Typically, updates are done via PUT
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        });
  
        if (response.ok) {
          const updatedDefaultReward = await response.json();
          showToast('Reward updated successfully!', 'success');
          // Additional logic here (e.g., close the form, refresh rewards list, etc.)
        } else {
          showToast('Failed to update reward.', 'error');
        }
      } catch (error) {
        showToast('Error: Something went wrong!', 'error');
      }
      onClose();
    };
  
    // The part where the JSX is returned
return (
    <RewardFormDiv
      initial={{ x: "100%" }}  // initial state (hidden to the right)
      animate={{ x: "0%" }}  // end state (appears from the right)
      exit={{ x: "100%" }}  // exit state (disappears to the right)
      transition={{ duration: 0.4, ease: [0.88, 0, 0.16, 1] }} // animation takes 400ms with easeInOut easing
    >
      <ModalCloseButton onClick={onClose}>
        <CancelIcon fill={Colors.neutral700} />
      </ModalCloseButton>
      <RewardFormContent>
        <RewardFormHeading>
          <Text text="Edit Reward" />
        </RewardFormHeading>
        <FormAndButton>
          <RequiredLabel>
            <Text text="*" color={Colors.error500} />
            <h6>Required</h6>
          </RequiredLabel>
          <form onSubmit={handleUpdate}>
            <FormFields>
            <InputField
                label="Reward Value"
                value={newDefaultRewardValue.toString()}  // Convert the number to a string for the input
                onChange={(value) => setNewDefaultRewardValue(value)}  // Convert the string back to a number when updating the state
                required={true}
                placeholder='Ex: 10'
            />
            </FormFields>
            <Button
              buttonTypeVariant={hasChanged && fieldValid ? 'primary' : 'disabled'}
              sizeVariant='large'
              label='Update'
              buttonWidthVariant='fill'
              onClick={handleUpdate}
              type='submit'
              disabled={!hasChanged || !fieldValid}
            />
          </form>
        </FormAndButton>
      </RewardFormContent>
    </RewardFormDiv>
  );
  };
  
  export default EditDefaultRewardForm;