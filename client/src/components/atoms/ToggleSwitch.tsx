import React, { useState } from 'react';
import styled from 'styled-components';
import Colors from '../../constants/Colors';
import StyledMediaQuery from '../../constants/StyledMediaQuery';

const ToggleContainer = styled.label`
  position: relative;
  display: flex;
  width: 64px;
  height: 32px;
`;

const SwitchInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
`;

const Slider = styled.span<{ isChecked: boolean }>`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${(props) => (props.isChecked ? '#10B981' : '#ccc')};
  transition: 0.4s;
  border-radius: 20px;

  &:before {
    position: absolute;
    content: '';
    height: 24px;
    width: 24px;
    left: ${(props) => (props.isChecked ? '36px' : '4px')};
    bottom: 4px;
    background-color: white;
    transition: 0.4s;
    border-radius: 50%;
  }
`;

interface ToggleSwitchProps {
  active: boolean;
  onChange: (active: boolean) => void;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ active, onChange }) => {
  const handleToggle = () => {
    onChange(!active); // Notify parent component of the change
  };

  return (
    <ToggleContainer>
      <SwitchInput type="checkbox" checked={active} onChange={handleToggle} />
      <Slider isChecked={active} />
    </ToggleContainer>
  );
};

export default ToggleSwitch;
  