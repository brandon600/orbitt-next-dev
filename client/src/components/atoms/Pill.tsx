import React from 'react';
import styled from 'styled-components';
import Colors from '../../constants/Colors';
import Text from '../subatomic/Text'

interface PillContainerProps {
    isActive: boolean;
}

interface PillProps extends PillContainerProps {
    label: string;
    onClick?: () => void;
}

export const PillContainer = styled.div<PillContainerProps>`
    display: inline-flex;
    height: 40px;
    padding: 0px 20px;
    justify-content: center;
    align-items: center;
    gap: 8px;
    border-radius: 24px;
    cursor: pointer;

    ${props => props.isActive ? `
        background-color: ${Colors.primary400};
        color: ${Colors.shades100};
        
        p {
            font-size: 16px;
            font-weight: 800;
            line-height: 19px; 
        }
    ` : `
        background-color:${Colors.neutral200}; // Inactive color
        color: ${Colors.neutral400};

        p {
            font-size: 16px;
            font-weight: 500;
            line-height: 19px;
        }
    `}
`;


const Pill: React.FC<PillProps> = ({ label, isActive, onClick }) => {
    return (
        <PillContainer isActive={isActive} onClick={onClick}>
            <Text
                text={label}
            />
        </PillContainer>
    );
}

export default Pill;