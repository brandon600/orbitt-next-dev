import React, { CSSProperties, ReactNode, PropsWithChildren, useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import Colors from '../../constants/Colors';
import StyledMediaQuery from '../../constants/StyledMediaQuery';
import Text from '../subatomic/Text'
import Button from '../atoms/Button';
import Checkbox from '../atoms/Checkbox';
import { CustomerData } from '@/types/CustomerData';

//type FilterType = 'star' | 'visit';
export enum FilterType {
    POINTS = 'POINTS',
    VISITS = 'VISITS',
}

export const FILTER_CONFIGS = {
    [FilterType.POINTS]: {
        options: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
        headingText: "Filter by Points",
        filterFunction: (customer: any, value: string) => customer.starsEarned >= Number(value),
    },
    [FilterType.VISITS]: {
        options: ['1', '2', '3', '4', '5', '10', '15', '20', '25', '30'],
        headingText: "Filter by Visits",
        filterFunction: (customer: any, value: string) => customer.totalVisits >= Number(value),
    }
    // ... add other filters with their respective configs
};


interface CustomerFilterProps {
  value: string;
  onChange: (type: FilterType, config: { value: string, active: boolean }) => void;
  onFilterChange: (value: number | null) => void;
  disabled?: boolean;
  isCheckboxChecked: boolean; 
  onCheckboxChange: (isActive: boolean) => void;
  filterType: FilterType;
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


export const CustomerFilter: React.FC<CustomerFilterProps> = ({
  value,
  onChange,
  isCheckboxChecked,
  onFilterChange,
  onCheckboxChange,
  filterType
}) => {


    // Default value for the dropdown
    const DEFAULT_DROPDOWN_VALUE = '1';

    const handleCheckboxToggle = () => {
        const newCheckboxState = !isCheckboxChecked;
    
        if (!newCheckboxState) {
            // Reset dropdown value and filter if checkbox is deselected
            onChange(filterType, { value: DEFAULT_DROPDOWN_VALUE, active: false });
        } else {
            onChange(filterType, { value, active: true });
        }
        onCheckboxChange(newCheckboxState);
    };

    const handleDropdownChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newValue = e.target.value;
    onChange(filterType, { value: newValue, active: isCheckboxChecked });
    onFilterChange(Number(newValue));
    };

    const { options, headingText } = FILTER_CONFIGS[filterType];

    return (
        <CustomerFilterContainer>
            <CustomerFilterHeading>
                <Text
                    text={headingText}
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
                        {options.map(optionValue => (
                    <option key={optionValue} value={optionValue}>{optionValue}</option>
                ))}
                </DropdownFieldSelect>
            </FilterCheckField>
        </CustomerFilterContainer>
    )
};