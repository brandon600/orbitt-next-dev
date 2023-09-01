// components/RewardValueDropdown.tsx
import React from 'react';

interface DropdownFieldProps {
  value: string;
  onChange: (value: string) => void;
}

const DropdownField: React.FC<DropdownFieldProps> = ({
  value,
  onChange,
}) => {
  return (
    <div>
      <label>Reward Value</label>
      <select value={value} onChange={(e) => onChange(e.target.value)}>
        <option value="value1">Value 1</option>
        <option value="value2">Value 2</option>
        {/* Add more options as needed */}
      </select>
    </div>
  );
};

export default DropdownField;