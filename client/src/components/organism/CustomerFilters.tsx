import React from 'react';
import { CustomerFilter, FilterType, FILTER_CONFIGS, FilterValue } from '@/components/molecules/CustomerFilter';

interface CustomerFiltersProps {
    filters: Record<FilterType, FilterValue>;
    setFilters: React.Dispatch<React.SetStateAction<Record<FilterType, FilterValue>>>;
    areaCodeOptions: string[];
  }


  export const CustomerFilters: React.FC<CustomerFiltersProps> = ({ areaCodeOptions, filters, setFilters }) => {
    const handleFilterChange = (type: FilterType, filterConfig: FilterValue) => {
        setFilters(prev => ({ ...prev, [type]: filterConfig }));
    };

    return (
        <div>
            {Object.entries(FILTER_CONFIGS).map(([key, config]) => (
                <CustomerFilter
                    key={key}
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
            ))}
        </div>
    );
};