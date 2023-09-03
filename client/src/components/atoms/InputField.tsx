import React, { CSSProperties, ReactNode, PropsWithChildren, useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import Colors from '../../constants/Colors';
import StyledMediaQuery from '../../constants/StyledMediaQuery';
import { Input } from 'postcss';

interface InputFieldProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean; // Add a prop to make the input required
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
        font-size: 16px;
        font-weight: 400;
        line-height: 19px;
        color: ${Colors.neutral700};
    }
`

const InputFieldInput = styled.input`
    @media ${StyledMediaQuery.XS} {
        display: flex;
        height: 32px;
        padding: 8px 12px;
        align-items: center;
        align-self: stretch;
        border-radius: 8px;
        background: ${Colors.shades100};

        &:focus {
            border 1px solid ${Colors.primary400};
            color: ${Colors.primary400};
        }
    }
`



const InputField: React.FC<InputFieldProps> = ({
  label,
  value,
  onChange,
  required, // Accept the 'required' prop
}) => {
  return (
    <InputFieldContainer>
        <InputFieldLabel>{label}</InputFieldLabel>
        <InputFieldInput
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required} // Add the 'required' attribute conditionally
        />
    </InputFieldContainer>
  );
};

export default InputField;