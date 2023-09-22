import React from 'react';
import { CustomerFilter, FilterType, FILTER_CONFIGS, FilterValue } from '@/components/molecules/CustomerFilter';
import Text from '../subatomic/Text';
import StyledMediaQuery from '@/constants/StyledMediaQuery';
import { styled } from 'styled-components';

interface CustomerFiltersProps {
    filters: Record<FilterType, FilterValue>;
    setFilters: React.Dispatch<React.SetStateAction<Record<FilterType, FilterValue>>>;
    areaCodeOptions: string[];
  }

  const FiltersContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 32px;

    @media (min-width: 768px) { /* Tablet breakpoint */
        > div {
            flex: 1 1 calc(50% - 32px);  /* 2 in a row */
        }
    }

    @media (min-width: 1024px) { /* Desktop breakpoint */
        > div {
            flex: 1 1 calc(33.333% - 32px); /* 3 in a row */
        }
    }
`;



  export const CustomerFilters: React.FC<CustomerFiltersProps> = ({ areaCodeOptions, filters, setFilters }) => {
    const handleFilterChange = (type: FilterType, filterConfig: FilterValue) => {
        setFilters(prev => ({ ...prev, [type]: filterConfig }));
    };

    return (
        <FiltersContainer>
                    {Object.entries(FILTER_CONFIGS).map(([key, config]) => (
                        <div key={key}> {/* Each filter wrapped in a div */}
                            <CustomerFilter
                                options={key === FilterType.AREA_CODE ? areaCodeOptions : config.options}
                                startDate={(filters[FilterType.BIRTHDAY].value as any).startDate}
                                endDate={(filters[FilterType.BIRTHDAY].value as any).endDate}
                                value={filters[key as FilterType].value}
                                onChange={handleFilterChange}
                                onFilterChange={(value) => setFilters(prev => ({
                                    ...prev,
                                    [key as FilterType]: {
                                        ...prev[key as FilterType],
                                        active: value !== null,
                                        value: value?.toString() || prev[key as FilterType].value
                                    }
                                }))}
                                isCheckboxChecked={filters[key as FilterType].active}
                                onCheckboxChange={(active) => setFilters(prev => ({
                                    ...prev,
                                    [key as FilterType]: {
                                        ...prev[key as FilterType],
                                        active
                                    }
                                }))}
                                filterType={key as FilterType}
                            />
                        </div>
                    ))}
        </FiltersContainer>
    );
};