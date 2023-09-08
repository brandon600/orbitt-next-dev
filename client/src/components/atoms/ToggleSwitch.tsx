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
}


//  padding: ${(props) => (props.isChecked ? '0px 4px 0px 0px' : '0px 0px 0px 4px')};
const ToggleContainer = styled.label<ToggleProps>`
  display: flex;
  width: 64px;
  height: 32px;
  cursor: pointer;
  border-radius: 20px;
  background-color: ${(props) => (props.active ? Colors.success600 : Colors.neutral300)};
  transition: background-color 0.4s;
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


const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ active, onChange }) => {
  const handleToggle = () => {
    onChange(!active); // Notify parent component of the change
  };

  return (
    <ToggleContainer active={active}>
      <SwitchInput type="checkbox" checked={active} onChange={handleToggle} />
        <Slider 
        >
          <SliderButton 
            active={active}
          />
        </Slider>
    </ToggleContainer>
  );
};

export default ToggleSwitch;
  