import React, { CSSProperties, ReactNode, PropsWithChildren, useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import Colors from '../../constants/Colors';
import StyledMediaQuery from '../../constants/StyledMediaQuery';

interface TextareaProps {
  label?: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean; // Add a prop to make the input required
  placeholder?: string; // Add the 'placeholder' prop
  disabled?: boolean;
}


const TextareaContainer = styled.div`
    @media ${StyledMediaQuery.XS} {
        display: flex;
        width: 100%;
        flex-direction: column;
        align-items: flex-start;
        gap: 8px;
    }
`

const TextareaLabel = styled.label`
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

const TextareaTextarea = styled.textarea`
    @media ${StyledMediaQuery.XS} {
        display: flex;
        height: 100px;
        padding: 12px;
        box-sizing: border-box;
        align-items: flex-start;
        align-self: stretch;
        border-radius: 8px;
        background: ${Colors.neutral100};
        color: ${Colors.neutral400};
        border: none;
        outline: none;

        &:focus {
            border: 1px solid ${Colors.primary400};
            color: ${Colors.primary400};
        }

        &::placeholder {
          color: ${Colors.neutral300};
        }
    }
`



const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, value, onChange, required, placeholder, disabled }, ref) => {
  return (
    <TextareaContainer>
        {label && (  // Conditionally render label only if it's provided
            <TextareaLabel>
                {required && <RequiredAsterisk>*</RequiredAsterisk>}
                {label}
            </TextareaLabel>
        )}
        <TextareaTextarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required} // Add the 'required' attribute conditionally
        placeholder={placeholder} // Pass the 'placeholder' prop
        disabled={disabled}
        ref={ref}
        />
    </TextareaContainer>
  );
});

Textarea.displayName = 'Textarea';

export default Textarea;