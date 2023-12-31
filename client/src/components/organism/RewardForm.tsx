// components/RewardForm.tsx
import React, { useState } from 'react';
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
import { DropdownOption } from '../atoms/DropdownField';

interface RewardFormProps {
  onClose: () => void;
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

const rewardOptions: DropdownOption[] = [
  { label: "Free Item", value: "Free Item" },
  { label: "5% Off", value: "5% Off" },
  { label: "10% Off", value: "10% Off" },
  { label: "15% Off", value: "15% Off" },
  { label: "25% Off", value: "25% Off" },
  { label: "50% Off", value: "50% Off" },
];

const RewardForm: React.FC<RewardFormProps> = ({ onClose }) => {
  const [rewardName, setRewardName] = useState<string>('');
  const [rewardCost, setRewardCost] = useState<string>('');
  const [rewardTerms, setRewardTerms] = useState<string>('');
  const [rewardValue, setRewardValue] = useState<string>('Free Item'); 
  const [isRewardNameValid, setRewardNameValid] = useState<boolean>(false);
  const [isRewardCostValid, setRewardCostValid] = useState<boolean>(false);

  const { showToast } = useStore((state: AppState) => ({ showToast: state.showToast }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Get global state data
    const { data } = useStore.getState(); // Directly access Zustand state
    console.log(data)
    
    // Collect reward details and some global state data into an object
    const payload = {
      rewardDetails: {
        name: rewardName,
        cost: rewardCost,
        terms: rewardTerms,
        value: rewardValue
      },
      user: data, // example global state data
      // include any other relevant state data
    };
  
    // Make POST request to your Express server

    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
      const response = await fetch(`${apiUrl}/add-reward`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });
  
      if (response.ok) {
        const data = await response.json();
        console.log('Success:', data);
        showToast('Reward added successfully!', 'success');
        // Additional logic here (e.g., close the form, refresh rewards list, etc.)
      } else {
        console.log('Failed:', response);
        showToast('Failed to add reward.', 'error');
      }
    } catch (error) {
      console.error('Error:', error);
      showToast(`Error: Something wrong happened!`, 'error');
    }

    onClose();
  };

  return (
    <RewardFormDiv
      initial={{ x: "100%" }}  // initial state (hidden to the right)
      animate={{ x: "0%" }}  // end state (appears from the right)
      exit={{ x: "100%" }}  // exit state (disappears to the right)
      transition={{ duration: 0.4, ease: [0.88, 0, 0.16, 1] }} // animation takes 400ms with easeInOut easing
    >
      <ModalCloseButton
          onClick={onClose}
        >
          <CancelIcon
            fill={Colors.neutral700} 
          />
      </ModalCloseButton>
      <RewardFormContent>
      <RewardFormHeading>
        <Text
          text="Add New Reward"
        />
      </RewardFormHeading>
      <FormAndButton>
          <RequiredLabel>
            <Text
              text="*"
              color={Colors.error500}
            />
            <h6>Required</h6>
          </RequiredLabel>
          <form onSubmit={handleSubmit}>
            <FormFields>
            <InputField
            label="Reward Name"
            value={rewardName}
            onChange={(value) => {
              setRewardName(value);
              setRewardNameValid(!!value); // Validate based on whether the input is not empty
            }}
            required={true}
            placeholder='Ex: Hamburer'
          />
          <InputField
            label="Reward Cost"
            value={rewardCost}
            onChange={(value) => {
              setRewardCost(value);
              setRewardCostValid(!!value);
            }}
            required={true}
            placeholder='Ex: 10'
          />
          <DropdownField 
            value={rewardValue} 
            onChange={(value) => setRewardValue(value)}
            label="Reward Value" 
            useDefaultDropdown={false} 
            required={true}
            options={rewardOptions}
          />
          <InputField
            label="Reward Terms"
            value={rewardTerms}
            onChange={(value) => setRewardTerms(value)}
            placeholder='Ex: Need 10 stars for this'
          />
            </FormFields>
            <Button
                  buttonTypeVariant={
                    isRewardNameValid && isRewardCostValid /* && Add conditions for other fields */
                      ? 'primary'
                      : 'disabled'
                  }
                  sizeVariant='large'
                  label='Submit'
                  buttonWidthVariant='fill'
                  onClick={handleSubmit}
                  type='submit'
                  disabled={
                    !isRewardNameValid ||
                    !isRewardCostValid /* || Add conditions for other fields */
                  }
                />
        </form>
      </FormAndButton>
      </RewardFormContent>
    </RewardFormDiv>
  );
};

export default RewardForm;