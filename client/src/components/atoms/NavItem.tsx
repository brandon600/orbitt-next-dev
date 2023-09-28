import React from 'react';
import styled from 'styled-components';
import Colors from '../../constants/Colors';
import Text from '../subatomic/Text';
import StyledMediaQuery from '../../constants/StyledMediaQuery';

interface NavItemContainerProps {
    isActive: boolean;
}

interface NavItemProps extends NavItemContainerProps {
    label: string;
    onClick?: () => void;
    fill: string;
    SvgComponent?: React.ComponentType<{ fill: string }>; // specify the SVG as a component type
  }

const NavItemContainer = styled.div<NavItemContainerProps>`
@media ${StyledMediaQuery.XS} {
    display: inline-flex;
    padding: 12px 0px;
    align-items: center;
    gap: 12px;
    width: 100%;
    box-sizing: border-box;
    border-radius: 32px;

    p {
        font-size: 20px;
        font-weight: 500;
        line-height: 32px;
    }

    ${props => props.isActive ? `
        background-color: ${Colors.primary400};
        color: ${Colors.shades100};

        p {
            color: ${Colors.shades100};
            font-weight: 800;
        }
    ` : `
        background-color: none; // Inactive color
        color: ${Colors.neutral600};
    `}
}

@media ${StyledMediaQuery.S} {
    padding: 16px 0px;
    gap: 16px;

    p {
        font-size: 24px;
        font-weight: 500;
        line-height: 38px;
    }
}

@media ${StyledMediaQuery.L} {
    display: inline-flex;
    padding: 12px 7px 12px 12px;
    align-items: center;
    gap: 12px;

    p {
        font-size: 16px;
        font-weight: 800;
        line-height: 26px;
    }

    ${props => props.isActive ? `
        background-color: ${Colors.primary400};
        color: ${Colors.shades100};
    ` : `
        background-color: none; // Inactive color
        color: ${Colors.neutral600};
    `}
}
`;

const NavItemSVG = styled.div`
    @media ${StyledMediaQuery.XS} {
        display: flex;
        width: 24px;
        height: 24px;

        svg {
            height: 100%;
            width: 100%;
        }
    }

    @media ${StyledMediaQuery.S} {
        width: 24px;
        height: 24px;
    }

    @media ${StyledMediaQuery.L} {
        width: 24px;
        height: 24px;
    }
`

const NavItemLabel = styled.div`
    @media ${StyledMediaQuery.XS} {
        display: flex;
`

const NavItem: React.FC<NavItemProps> = ({ label, isActive, onClick, fill, SvgComponent }) => {
    return (
      <NavItemContainer isActive={isActive} onClick={onClick}>
        {SvgComponent && <NavItemSVG><SvgComponent fill={fill} /></NavItemSVG>}
        <NavItemLabel>
          <Text text={label} />
        </NavItemLabel>
      </NavItemContainer>
    );
  };

  export default NavItem;