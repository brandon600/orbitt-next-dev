import React, { useState, useEffect } from 'react';
import Text from '../subatomic/Text';
import { styled } from 'styled-components';
import StyledMediaQuery from '../../constants/StyledMediaQuery';
import Colors from '../../constants/Colors';
import { motion } from 'framer-motion';
import Link from 'next/link';

const NavigationBarContainer = styled.div`
    @media ${StyledMediaQuery.XS} {
        display: flex;
        flex-direction: column;
        width: 260px;
        height: 100vh;
        position: fixed;
        top: 0;
        left: 0;
        padding: 12px;
        flex-direction: column;
        gap: 12px;
        background: ${Colors.neutral400};
        box-sizing: border-box;
        z-index: 1000;
    }

    @media ${StyledMediaQuery.S} {
        padding: 16px;
    }

    @media ${StyledMediaQuery.M} {
        padding: 24px;
    }
`

const ActiveNavItem = styled.div`
  color: gold; // or any highlight color you want for the active item
  font-weight: bold; // make it stand out
`;

interface NavItemProps {
    pageName: string;
    activePage: string;
  }

  const renderNavItem = ({ pageName, activePage }: NavItemProps) => {
    if (pageName === activePage) {
      return <ActiveNavItem>{pageName}</ActiveNavItem>;
    }
    return <div>{pageName}</div>;
  }

  interface NavigationBarProps {}

const NavigationBar: React.FC<NavigationBarProps> = () => {
    const [activePage, setActivePage] = useState<string>('');

    const handleTabClick = (page: string) => {
        console.log('tab clicked');
        setActivePage(page); // update the active page
    };

    return (
        <NavigationBarContainer>
                <Link href='/customers' onClick={() => handleTabClick('customers')}>
                    {renderNavItem({ pageName: 'customers', activePage })}
                </Link>
                <Link href='/messages' onClick={() => handleTabClick('messages')}>
                    {renderNavItem({ pageName: 'messages', activePage })}
                </Link>
        </NavigationBarContainer>
    );
}

export default NavigationBar;