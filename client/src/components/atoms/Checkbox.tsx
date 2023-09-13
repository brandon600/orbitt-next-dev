import React from 'react';
import styled from 'styled-components';
import Colors from '../../constants/Colors';

interface CheckboxProps {
  checked: boolean;
}

interface StyledCheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
}

const CheckboxContainer = styled.label<CheckboxProps & { disabled?: boolean }>`
  display: inline-flex;
  width: 24px;
  height: 24px;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  border-radius: 4px;
  background-color: ${(props) => (props.checked ? Colors.primary500 : Colors.neutral200)};
  transition: background-color 0.1s;
  opacity: ${(props) => (props.disabled ? '0.5' : '1')};
  align-items: center;
  justify-content: center;
`;

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  display: none;
`;

const Icon = styled.svg`
  width: 18px;
  height: 18px;
  fill: white;
`;

const Checkbox: React.FC<StyledCheckboxProps> = ({ checked, onChange, disabled }) => {
    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (disabled) return;
      onChange(e.target.checked);  // Use the event to get the checkbox's state
    };
  
    return (
      <CheckboxContainer checked={checked} disabled={disabled}>
        <HiddenCheckbox checked={checked} onChange={handleCheckboxChange} />
        {checked ? (
          <Icon viewBox="0 0 24 24">
            <path d="M20.285 2l-11.285 11.567-5.286-5.011l-3.714 3.716l9 8.728l15-15.285z" />
          </Icon>
        ) : null}
      </CheckboxContainer>
    );
  };

  export default Checkbox;





