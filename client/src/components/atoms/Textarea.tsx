import React, { CSSProperties, ReactNode, PropsWithChildren, useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import Colors from '../../constants/Colors';
import StyledMediaQuery from '../../constants/StyledMediaQuery';

interface TextareaStyleProps {
  height?: string;
}

type TextareaFunctionalProps = Omit<TextareaProps, 'height'>;

interface TextareaProps extends TextareaStyleProps {
  label?: string;
  value: string;
  onChange: (value: string) => void;
  onKeyUp?: (event: React.KeyboardEvent<HTMLTextAreaElement>) => void;
  onClick?: (event: React.MouseEvent<HTMLTextAreaElement>) => void;
  required?: boolean; // Add a prop to make the input required
  placeholder?: string; // Add the 'placeholder' prop
  disabled?: boolean;
}


const TextareaContainer = styled.div<TextareaStyleProps>`
    @media ${StyledMediaQuery.XS} {
        display: flex;
        width: 100%;
        height: ${(props) => props.height || "100px"};
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
        height: 100%;
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
  ({ label, value, onChange, onKeyUp, onClick, required, placeholder, disabled, height }, ref) => {
    return (
      <TextareaContainer height={height}>
        {label && (
          <TextareaLabel>
            {label}
            {required && <RequiredAsterisk>*</RequiredAsterisk>}
          </TextareaLabel>
        )}
        <TextareaTextarea
          value={value}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => onChange(e.target.value)}
          onKeyUp={onKeyUp}
          onClick={onClick}
          required={required}
          placeholder={placeholder}
          disabled={disabled}
          ref={ref}
        />
      </TextareaContainer>
    );
  }
);
Textarea.displayName = 'Textarea';
export default Textarea;





