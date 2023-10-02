import React, { CSSProperties, ReactNode, PropsWithChildren, useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import dayjs from 'dayjs';
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
    LAST_TRANSACTION_DATE = 'LAST_TRANSACTION_DATE',
    SIGN_UP_DATE = 'SIGN_UP_DATE',
    AREA_CODE = 'AREA_CODE',
    BIRTHDAY = 'BIRTHDAY'
}

export type FilterValue = { 
    value: string | { startDate?: string; endDate?: string };
    active: boolean;
};

export enum LastTransactionOptions {
    LAST_24_HOURS = '24 Hours',
    LAST_WEEK = 'Last Week',
    LAST_2_WEEKS = 'Last 2 Weeks',
    LAST_MONTH = 'Last Month',
    LAST_3_MONTHS = 'Last 3 Months',
    LAST_YEAR = 'Last Year'
}

interface FilterConfig {
    options: string[];
    headingText: string;
    filterFunction: (customer: any, filterConfig: FilterValue) => boolean;
    dateRange?: { startDate: string, endDate: string };
}

function constructDateFromFields(month: string, day: string, year: string): Date {
    return new Date(`${month}/${day}/${year}`);
}

export const FILTER_CONFIGS: Record<FilterType, FilterConfig> = {
    [FilterType.POINTS]: {
        options: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
        headingText: "Filter by Points",
        filterFunction: (customer: any, filterConfig: FilterValue) => {
            const value = filterConfig.value as string;
            return customer.rewardNumber >= Number(value);
        }
    },
    [FilterType.VISITS]: {
        options: ['1', '2', '3', '4', '5', '10', '15', '20', '25', '30'],
        headingText: "Filter by Visits",
        filterFunction: (customer: any, filterConfig: FilterValue) => {
            const value = filterConfig.value as string;
            return customer.totalVisits >= Number(value);
        }
    },
    [FilterType.LAST_TRANSACTION_DATE]: {
        options: Object.values(LastTransactionOptions),
        headingText: "Filter by Last Transaction Date",
        filterFunction: (customer: any, filterConfig: FilterValue): boolean => {
            const value = filterConfig.value as string;
            
            const now = dayjs();
            const lastTransactionDate = dayjs(Number(customer.lastTransactionDate));

            switch (value) {
                case LastTransactionOptions.LAST_24_HOURS:
                    return now.diff(lastTransactionDate, 'hour') <= 24;
                case LastTransactionOptions.LAST_WEEK:
                    return now.diff(lastTransactionDate, 'week') <= 1;
                case LastTransactionOptions.LAST_2_WEEKS:
                    return now.diff(lastTransactionDate, 'week') <= 2;
                case LastTransactionOptions.LAST_MONTH:
                    return now.diff(lastTransactionDate, 'month') <= 1;
                case LastTransactionOptions.LAST_3_MONTHS:
                    return now.diff(lastTransactionDate, 'month') <= 3;
                case LastTransactionOptions.LAST_YEAR:
                    return now.diff(lastTransactionDate, 'year') <= 1;
                default:
                    return true;
            }
        },
    },
    [FilterType.AREA_CODE]: {
        options: [],  // We'll populate this dynamically if necessary
        headingText: "Filter by Area Code",
        filterFunction: (customer: any, filterConfig: FilterValue) => {
            const value = filterConfig.value as string;
            return customer.areaCodeNumber === value;
        }
    },
    [FilterType.BIRTHDAY]: {
        headingText: "Birthday",
        options: [],
        filterFunction: (customer, filterConfig: FilterValue) => {
            const dateRange = filterConfig.value as { startDate?: string; endDate?: string };
            if(dateRange.startDate && dateRange.endDate) {
                const customerBirthDate = constructDateFromFields(customer.birthdayMonth, customer.birthdayDay, customer.birthdayYear);
                return customerBirthDate >= new Date(dateRange.startDate) && customerBirthDate <= new Date(dateRange.endDate);
            }
            return true;
        }
    },
    [FilterType.SIGN_UP_DATE]: {
        options: Object.values(LastTransactionOptions),
        headingText: "Filter by Sign Up Date",
        filterFunction: (customer: any, filterConfig: FilterValue): boolean => {
            const value = filterConfig.value as string;
            
            const now = dayjs();
            const signUpDate = dayjs(customer.signUpDate);
    
            switch (value) {
                case LastTransactionOptions.LAST_24_HOURS:
                    return now.diff(signUpDate, 'hour') <= 24;
                case LastTransactionOptions.LAST_WEEK:
                    return now.diff(signUpDate, 'week') <= 1;
                case LastTransactionOptions.LAST_2_WEEKS:
                    return now.diff(signUpDate, 'week') <= 2;
                case LastTransactionOptions.LAST_MONTH:
                    return now.diff(signUpDate, 'month') <= 1;
                case LastTransactionOptions.LAST_3_MONTHS:
                    return now.diff(signUpDate, 'month') <= 3;
                case LastTransactionOptions.LAST_YEAR:
                    return now.diff(signUpDate, 'year') <= 1;
                default:
                    return true;
            }
        },
    },
    // ... add other filters with their respective configs
};


interface CustomerFilterProps {
  value: string | { startDate?: string; endDate?: string };
  onChange: (type: FilterType, filterConfig: FilterValue) => void;
  onFilterChange: (value: string | null) => void;
  disabled?: boolean;
  isCheckboxChecked: boolean; 
  onCheckboxChange: (isActive: boolean) => void;
  filterType: FilterType;
  options?: string[];
  startDate?: string;
  endDate?: string;
}


const CustomerFilterContainer = styled.div`
    @media ${StyledMediaQuery.XS} {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 12px;
    }
`

const CustomerFilterHeading = styled.div`
    @media ${StyledMediaQuery.XS} {
        display: flex;

        p {
            font-size: 16px;
            font-weight: 500;
            line-height: 19px;
            color: ${Colors.neutral400};
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
      border: 1px solid ${Colors.neutral300};

      &:focus {
        border: 1px solid ${Colors.primary400};
        color: ${Colors.primary400};
    }
        
    }
`

const FilterInput = styled.input`
    @media ${StyledMediaQuery.XS} {
        font: inherit;
        font-size: 16px;
        font-family: inherit;
        background-color: ${Colors.shades100};
        border-radius: 8px;
        color: ${Colors.neutral300};
        border: 1px solid ${Colors.neutral300};
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
        color: ${Colors.neutral300};
        border: 1px solid ${Colors.neutral300};
        width: 50%;

        &:focus {
            border: 1px solid ${Colors.primary400};
            color: ${Colors.primary400};
        }
    }
`


export const CustomerFilter: React.FC<CustomerFilterProps> = ({
  value,
  onChange,
  isCheckboxChecked,
  onFilterChange,
  onCheckboxChange,
  filterType,
  options,
  startDate,
  endDate
}) => {

    
    const { headingText } = FILTER_CONFIGS[filterType];
    const finalOptions = options || FILTER_CONFIGS[filterType].options;
    console.log('Options inside CustomerFilter:', options);

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

    const handleDropdownChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
        const newValue = e.target.value;
        onChange(filterType, { value: newValue, active: isCheckboxChecked });
        onFilterChange(newValue);
    };


    const handleBirthdayStartChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const newDate = e.target.value;
        const currentBirthdayFilter = { startDate: startDate || '', endDate: endDate || '' };
        const newFilterConfig = { value: { ...currentBirthdayFilter, startDate: newDate }, active: !!newDate || !!currentBirthdayFilter.endDate };
        onChange(filterType, newFilterConfig);
    };
      
    const handleBirthdayEndChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const newDate = e.target.value;
        const currentBirthdayFilter = { startDate: startDate || '', endDate: endDate || '' };
        const newFilterConfig = { value: { ...currentBirthdayFilter, endDate: newDate }, active: !!newDate || !!currentBirthdayFilter.startDate };
        onChange(filterType, newFilterConfig);
    };

    return (
        <CustomerFilterContainer>
            <CustomerFilterHeading>
                <Text text={headingText} />
            </CustomerFilterHeading>
            <FilterCheckField>
                <Checkbox checked={isCheckboxChecked} onChange={handleCheckboxToggle} />
                {filterType === FilterType.BIRTHDAY ? (
                   <>
                   <FilterInput
                       type="date"
                       value={startDate || ''}
                       onChange={handleBirthdayStartChange}
                       disabled={!isCheckboxChecked}
                       placeholder="Start Date"
                   />
                   <FilterInput
                       type="date"
                       value={endDate || ''}
                       onChange={handleBirthdayEndChange}
                       disabled={!isCheckboxChecked}
                       placeholder="End Date"
                   />
               </>
                ) : (
                    <DropdownFieldSelect
                        value={typeof value === "string" ? value : JSON.stringify(value) || 'default'}
                        onChange={handleDropdownChange}
                        disabled={!isCheckboxChecked}
                    >
                        <option value="default" disabled>Select a filter</option>
                        {finalOptions.map(optionValue => (
                            <option key={optionValue} value={optionValue}>{optionValue}</option>
                        ))}
                    </DropdownFieldSelect>
                )}
            </FilterCheckField>
        </CustomerFilterContainer>
    );
};