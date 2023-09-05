import React from 'react';
import styled, { css } from 'styled-components';
import Colors from '../../constants/Colors';

interface ButtonProps {
  label: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void; // Accept an event argument
  buttonTypeVariant?: 'primary' | 'secondary' | 'neutral' | 'disabled' | 'smsBlast' | 'error';
  sizeVariant?: 'small' | 'large';
  buttonWidthVariant?: 'fill' | 'content';
  type?: 'button' | 'submit' | 'reset'; // Include the 'type' prop
  disabled?: boolean; // Add the disabled prop to the interface
}

interface ButtonComponentProps {
  buttonTypeVariant?: ButtonProps['buttonTypeVariant'];
  sizeVariant?: ButtonProps['sizeVariant'];
  buttonWidthVariant?: ButtonProps['buttonWidthVariant'];
}

const buttonTypeSheet = {
  primary: css`
      background-color: ${Colors.primary500};
      p {
        color: ${Colors.shades100};
      }

      border: none;
      color: ${Colors.shades100};
  `,
  secondary: css`
      background-color: ${Colors.shades100};
      color: ${Colors.primary500};
      border: 1px solid ${Colors.primary500};
  `,
  neutral: css`
      background-color: ${Colors.shades100};
      color: ${Colors.neutral400};
      border: 1px solid ${Colors.neutral400};
  `,
    disabled: css`
    background-color: ${Colors.neutral300};
    color: ${Colors.shades100};
    border: none;
    `,
  error: css`
      background-color: ${Colors.error600};
      color:  ${Colors.shades100};
      border: none;
  `,
  smsBlast: css`
      background-color: ${Colors.success700};
      color: ${Colors.shades100};
      border: none;
  `,
};

const buttonSizeSheet = {
  small: css`
      height: 45px;
      padding: 12px 20px;
      font-size: 14px;

      font-size: 16px;
      font-weight: 800;

      p {
        font-size: 16px;
        font-weight: 800;
      }
  `,
  large: css`
      height: 56px;
      padding: 0px 24px;

      font-size: 16px;
      font-weight: 800;

      p {
        font-size: 16px;
        font-weight: 800;
      }

  `
}


const ButtonComponent = styled.button<ButtonComponentProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  cursor: pointer;
  ${({ buttonTypeVariant }) => buttonTypeSheet[buttonTypeVariant || 'primary']};
  ${({ sizeVariant }) => buttonSizeSheet[sizeVariant || 'large']};

  /* Width Styles */
  width: ${({ buttonWidthVariant }) =>
    buttonWidthVariant === 'fill' ? '100%' : 'auto'};
`

const Button: React.FC<ButtonProps> = ({ label, onClick, buttonTypeVariant = 'primary', sizeVariant = 'large', buttonWidthVariant='content', ...rest }) => {
  return (
    <ButtonComponent 
      as="button"
      onClick={onClick}
      buttonTypeVariant={buttonTypeVariant}
      sizeVariant={sizeVariant}
      buttonWidthVariant={buttonWidthVariant}
      {...rest}
    >
         {label}
    </ButtonComponent>
  );
};

export default Button;