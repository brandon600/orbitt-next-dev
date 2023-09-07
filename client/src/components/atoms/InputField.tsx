import React, { CSSProperties, ReactNode, PropsWithChildren, useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import Colors from '../../constants/Colors';
import StyledMediaQuery from '../../constants/StyledMediaQuery';

interface InputFieldProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean; // Add a prop to make the input required
  placeholder?: string; // Add the 'placeholder' prop
}


const InputFieldContainer = styled.div`
    @media ${StyledMediaQuery.XS} {
        display: flex;
        width: 100%;
        flex-direction: column;
        align-items: flex-start;
        gap: 8px;
    }
`

const InputFieldLabel = styled.label`
    @media ${StyledMediaQuery.XS} {
        display: flex; 
        flex-direction: row;
        gap: 4px;
        font-size: 16px;
        font-weight: 400;
        line-height: 19px;
        color: ${Colors.neutral700};
    }
`

const RequiredAsterisk = styled.span`
  @media ${StyledMediaQuery.XS} {
    color: ${Colors.error500}; // Style the asterisk with your desired color
  }
`;

const InputFieldInput = styled.input`
    @media ${StyledMediaQuery.XS} {
        display: flex;
        height: 32px;
        padding: 8px 12px;
        align-items: center;
        align-self: stretch;
        border-radius: 8px;
        background: ${Colors.neutral100};
        color: ${Colors.neutral600};
        border: none;

        &:focus {
            border: 1px solid ${Colors.primary400};
            color: ${Colors.primary400};
        }

        &::placeholder {
          color: ${Colors.neutral300};
        }
    }
`



const InputField: React.FC<InputFieldProps> = ({
  label,
  value,
  onChange,
  required, // Accept the 'required' prop
  placeholder, // Accept the 'placeholder' prop
}) => {
  return (
    <InputFieldContainer>
        <InputFieldLabel>
        {required && <RequiredAsterisk>*</RequiredAsterisk>} {/* Render asterisk if 'required' prop is true */}
        {label}
        </InputFieldLabel>
        <InputFieldInput
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required} // Add the 'required' attribute conditionally
        placeholder={placeholder} // Pass the 'placeholder' prop
        />
    </InputFieldContainer>
  );
};

export default InputField;