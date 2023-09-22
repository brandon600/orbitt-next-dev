import React, { CSSProperties, ReactNode, PropsWithChildren, useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import Colors from '../../constants/Colors';
import StyledMediaQuery from '../../constants/StyledMediaQuery';

export interface DropdownOption {
  label: string;
  value: string;
}

interface DropdownFieldProps {
  value: string;
  onChange: (value: string) => void;
  label?: string; // Make the label optional
  required?: boolean; // Make it possible to mark the field as required
  useDefaultDropdown: boolean;
  options?: DropdownOption[];
}

const DropdownFieldContainer = styled.div`
    @media ${StyledMediaQuery.XS} {
        display: flex;
        width: 100%;
        flex-direction: column;
        align-items: flex-start;
        gap: 8px;
    }
`

const DropdownFieldLabel = styled.label`
    @media ${StyledMediaQuery.XS} {
        display: flex;
        font-size: 12px;
        font-weight: 500;
        line-height: 15px;
        color: ${Colors.neutral400};

        p {
            font-size: 16px;
            font-weight: 500;
            line-height: 19px;
        }
    }
`

const DropdownFieldLabel2 = styled.label`
    @media ${StyledMediaQuery.XS} {
        display: flex; 
        flex-direction: row;
        gap: 4px;
        font-size: 16px;
        font-weight: 400;
        line-height: 19px;
        color: ${Colors.neutral700};

        p {
            font-size: 16px;
            font-weight: 500;
            line-height: 19px;
        }
    }
`

const DropdownFieldSelect = styled.select`
    @media ${StyledMediaQuery.XS} {
      font: inherit;
      font-size: 16px;
      font-family: inherit;
      background-color: ${Colors.shades100};
      border: none;
      padding: 0rem;
      margin: 0;
      box-sizing: border-box;
      width: 100%;
      cursor: pointer;
      outline: none;
      display: flex;
      height: 48px;
      padding: 0px 4px 0px 12px;
      justify-content: space-between;
      align-items: center;
      align-self: stretch;
      border-radius: 8px;
      color: ${Colors.neutral300};

      &:focus {
        border: 1px solid ${Colors.neutral600};
        color: ${Colors.neutral600};
    }
        
    }
`

const DropdownFieldSelect2 = styled.select`
    @media ${StyledMediaQuery.XS} {
      font: inherit;
      font-size: 16px;
      font-family: inherit;
      background-color: ${Colors.neutral100};
      border: none;
      padding: 0rem;
      margin: 0;
      box-sizing: border-box;
      width: 100%;
      cursor: pointer;
      outline: none;
      display: flex;
      height: 48px;
      padding: 0px 4px 0px 12px;
      justify-content: space-between;
      align-items: center;
      align-self: stretch;
      border-radius: 8px;
      color: ${Colors.neutral600};

        &:focus {
            border 1px solid ${Colors.neutral600};
            color: ${Colors.neutral600};
        }
    }
`

const RequiredAsterisk = styled.span`
  @media ${StyledMediaQuery.XS} {
    color: red; // Style the asterisk with your desired color
    margin-left: 4px; // Add spacing between the text and the asterisk
  }
`;

const DropdownField: React.FC<DropdownFieldProps & { useDefaultDropdown: boolean }> = ({
  value,
  onChange,
  label,
  required,
  useDefaultDropdown,
  options = []
}) => {

  const DefaultDropdown = () => {
    return (
      <DropdownFieldContainer>
          <DropdownFieldLabel>
          {label}
          </DropdownFieldLabel>
        <DropdownFieldSelect
          value={value}
          onChange={(e) => onChange(e.target.value)}
          required={required} // Add the 'required' attribute conditionally
        >
          <option value="value1">Value 1</option>
          <option value="value2">Value 2</option>
        </DropdownFieldSelect>
      </DropdownFieldContainer>
    );
  }

  const renderOptions = (optionList: DropdownOption[]) => {
    return optionList.map((option, index) => (
      <option key={index} value={option.value} disabled={option.value === ""}>
        {option.label}
      </option>
    ));
};

  const FormDropdown = () => {
    return (
      <DropdownFieldContainer>
        <DropdownFieldLabel2>
          {required && <RequiredAsterisk>*</RequiredAsterisk>} {/* Render asterisk if 'required' prop is true */}
          {label}
          </DropdownFieldLabel2>
        <DropdownFieldSelect2
          value={value}
          onChange={(e) => onChange(e.target.value)}
          required={required} // Add the 'required' attribute conditionally
        >
          {renderOptions(options)}
        </DropdownFieldSelect2>
      </DropdownFieldContainer>
    );
  }

    // Use the selected component based on the 'useDefaultDropdown' prop
    const SelectedDropdown = useDefaultDropdown ? DefaultDropdown : FormDropdown;

    return (
      <SelectedDropdown />
    );
};

export default DropdownField;