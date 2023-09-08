import React, { useState } from 'react';
import styled from 'styled-components';
import Colors from '../../constants/Colors';
import StyledMediaQuery from '../../constants/StyledMediaQuery';


interface ToggleProps {
  active: boolean;
}

interface ToggleSwitchProps {
  active: boolean;
  onChange: (active: boolean) => void;
  disabled?: boolean;
}


const ToggleContainer = styled.label<ToggleProps & { disabled?: boolean }>`
  display: flex;
  width: 64px;
  height: 32px;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  border-radius: 20px;
  background-color: ${(props) => (props.active ? Colors.success600 : Colors.neutral300)};
  transition: background-color 0.4s;
  opacity: ${(props) => (props.disabled ? '0.5' : '1')}; // optional, to give a "faded" look when disabled
`;

const SwitchInput = styled.input`
  display: none; /* Hide the default checkbox */
`;

const Slider = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  transition: 0.4s;
`;

const SliderButton = styled.div<ToggleProps>`
  width: 24px;
  height: 24px;
  background-color: white;
  border-radius: 50%;
  margin-left: ${(props) => (props.active ? 'calc(100% - 28px)' : '4px')};
  transition: margin-left 0.2s ease-in-out;
`;


const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ active, onChange, disabled }) => {
  const handleToggle = () => {
    if (disabled) return; // Don't toggle if it's disabled
    onChange(!active);
  };

  return (
    <ToggleContainer active={active} disabled={disabled}>
      <SwitchInput type="checkbox" checked={active} onChange={handleToggle} />
      <Slider>
        <SliderButton active={active} />
      </Slider>
    </ToggleContainer>
  );
};

export default ToggleSwitch;
  