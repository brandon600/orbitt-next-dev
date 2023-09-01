// components/RewardForm.tsx
import React, { useState } from 'react';
import InputField from '../atoms/InputField';
import DropdownField from '../atoms/DropdownField';
import { styled } from 'styled-components';
import StyledMediaQuery from '../../constants/StyledMediaQuery';

const RewardFormDiv =  styled.div`
    @media ${StyledMediaQuery.XS} {
        display: flex;
        position: absolute;
        z-index: 90;
    }
`

const RewardForm: React.FC = () => {
  const [rewardName, setRewardName] = useState<string>('');
  const [rewardCost, setRewardCost] = useState<string>('');
  const [rewardTerms, setRewardTerms] = useState<string>('');
  const [rewardValue, setRewardValue] = useState<string>('value1'); 

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Reward Name:', rewardName);
    console.log('Reward Cost:', rewardCost);
    console.log('Reward Value:', rewardValue);
    console.log('Reward Terms:', rewardTerms);
    // Handle form submission (e.g., send data to the server)
  };

  return (
    <RewardFormDiv>
    <form onSubmit={handleSubmit}>
      <InputField
        label="Reward Name"
        value={rewardName}
        onChange={(value) => setRewardName(value)}
      />
      <InputField
        label="Reward Cost"
        value={rewardCost}
        onChange={(value) => setRewardCost(value)}
      />
      <DropdownField
      label = 'sdkfmksldfksmdfl'
      value={rewardValue}
      onChange={(value) => setRewardValue(value)}
        />
      <InputField
        label="Reward Terms"
        value={rewardTerms}
        onChange={(value) => setRewardTerms(value)}
      />
      <button type="submit">Submit</button>
    </form>
    </RewardFormDiv>
  );
};

export default RewardForm;