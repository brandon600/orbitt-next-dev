import React, { CSSProperties, ReactNode, PropsWithChildren, useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import Colors from '../../constants/Colors';
import StyledMediaQuery from '../../constants/StyledMediaQuery';
import Text from '../subatomic/Text'
import Button from '../atoms/Button';
import Checkbox from '../atoms/Checkbox';
import { CustomerData } from '@/types/CustomerData';


interface CustomerFilterProps {
  value: string;
  onChange: (value: string) => void;
  onFilterChange: (value: number | null) => void;
  disabled?: boolean;
  isCheckboxChecked: boolean; 
  onCheckboxChange: (isActive: boolean) => void;
}



const CustomerFilterContainer = styled.div`
    @media ${StyledMediaQuery.XS} {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 12px;
        width: 300px;
    }
`

const CustomerFilterHeading = styled.div`
    @media ${StyledMediaQuery.XS} {
        display: flex;

        p {
            font-size: 16px;
            font-weight: 500;
            line-height: 19px;
            color: ${Colors.neutral500};
        }
    }
`

const FilterCheckField = styled.div`
    @media ${StyledMediaQuery.XS} {
        display: flex;
        align-items: center;
        flex-direction: row;
        gap: 12px;
        width: 100%;
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


const CustomerFilter: React.FC<CustomerFilterProps> = ({
  value,
  onChange,
  isCheckboxChecked,
  onFilterChange,
  onCheckboxChange
}) => {


    // Default value for the dropdown
    const DEFAULT_DROPDOWN_VALUE = '1';

       const handleCheckboxToggle = () => {
        const newCheckboxState = !isCheckboxChecked;

        if (!newCheckboxState) {
            // Reset dropdown value and filter if checkbox is deselected
            onChange(DEFAULT_DROPDOWN_VALUE);
            onFilterChange(null);
        }

        onCheckboxChange(newCheckboxState);
    };

    const handleDropdownChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newValue = e.target.value;
        onChange(newValue);
        onFilterChange(Number(newValue));
    }

    return (
        <CustomerFilterContainer>
            <CustomerFilterHeading>
                <Text
                    text='Customer Filter'
                />
            </CustomerFilterHeading>
            <FilterCheckField>
                <Checkbox
                    checked={isCheckboxChecked}
                    onChange={handleCheckboxToggle}
                />
                <DropdownFieldSelect
                    value={value || 'default'}
                    onChange={handleDropdownChange}
                    disabled={!isCheckboxChecked}
                >
                    <option value="default" disabled>Select a filter</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                </DropdownFieldSelect>
            </FilterCheckField>
        </CustomerFilterContainer>
    )

};

export default CustomerFilter