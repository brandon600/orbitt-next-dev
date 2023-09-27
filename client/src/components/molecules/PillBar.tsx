import React, { useState } from 'react';
import styled from 'styled-components';
import Colors from '../../constants/Colors';
import Text from '../subatomic/Text'
import StyledMediaQuery from '../../constants/StyledMediaQuery';
import Pill from '../atoms/Pill';  // Assuming the Pill component is in the same directory

const PillBarContainer = styled.div`
    @media ${StyledMediaQuery.XS} {
        display: flex;
        flex-direction: row;
        height: 40px;
    }
`

interface PillBarProps {
    options: string[];
    onActiveChange?: (activePillLabel: string) => void; // Callback to notify parent if required
}

const PillBar: React.FC<PillBarProps> = ({ options, onActiveChange }) => {
    const [activePillIndex, setActivePillIndex] = useState<number>(0);

    console.log("Current active pill index:", activePillIndex);

    const handlePillClick = (index: number) => {
        console.log("Pill clicked:", index);
        setActivePillIndex(index);
        if (onActiveChange) {
            onActiveChange(options[index]);
        }
    };

    return (
        <PillBarContainer>
            {options.map((pillLabel, index) => (
                <Pill
                    key={index} // In more complex scenarios, consider using unique identifiers instead of index
                    label={pillLabel}
                    isActive={activePillIndex === index}
                    onClick={() => handlePillClick(index)}
                />
            ))}
        </PillBarContainer>
    );
}

export default PillBar;