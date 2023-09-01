import React, { CSSProperties, ReactNode, PropsWithChildren, useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { Colors } from '../../constants/Colors';
import StyledMediaQuery from '../../constants/StyledMediaQuery';

interface DropdownFieldProps {
  value: string;
  onChange: (value: string) => void;
  label?: string; // Make the label optional
  required?: boolean; // Make it possible to mark the field as required
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

const DropdownFieldSelect = styled.select`
    @media ${StyledMediaQuery.XS} {
        display: flex;
        height: 48px;
        padding: 0px 4px 0px 12px;
        justify-content: space-between;
        align-items: center;
        align-self: stretch;
        border-radius: 8px;
        background ${Colors.shades100};
        color: 300;

        &:focus {
            border 1px solid ${Colors.neutral600};
            color: ${Colors.neutral600};

        }

        option {
            color: ${Colors.neutral300};
          }
        
          :checked {
            color: ${Colors.neutral600};
          }
    }
`

const DropdownField: React.FC<DropdownFieldProps> = ({
  value,
  onChange,
  label,
  required,
}) => {
  return (
    <div>
      {label && <label>{label}</label>}
      <DropdownFieldSelect
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required} // Add the 'required' attribute conditionally
      >
      <option value="value1">Value 1</option>
        <option value="value2">Value 2</option>
      </DropdownFieldSelect>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required} // Add the 'required' attribute conditionally
      >
      </select>
    </div>
  );
};

export default DropdownField;