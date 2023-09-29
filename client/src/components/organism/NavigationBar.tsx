import React, { useState, useEffect } from 'react';
import Text from '../subatomic/Text';
import { styled } from 'styled-components';
import StyledMediaQuery from '../../constants/StyledMediaQuery';
import Colors from '../../constants/Colors';
import { motion } from 'framer-motion';
import Link from 'next/link';
import NavItem from '../atoms/NavItem';
import { DashboardIcon } from '../subatomic/Icons/DashboardIcon';
import { GroupsIcon } from '../subatomic/Icons/GroupsIcon';
import { RewardIcon } from '../subatomic/Icons/RewardIcon';
import { MailIcon } from '../subatomic/Icons/MailIcon';
import { ProcessTransactionIcon } from '../subatomic/Icons/ProcessTransactionIcon';
import { useRouter } from 'next/router';
import GlobalStyle  from '../../GlobalStyle';

const navItems = [
    {
        id: 'dashboard',
        label: 'Dashboard',
        href: '/dashboard',
        svgComponent: DashboardIcon // replace this with the SVG for "Customers"
      },
    {
      id: 'customers',
      label: 'Customers',
      href: '/customers',
      svgComponent: GroupsIcon // replace this with the SVG for "Customers"
    },
    {
        id: 'rewards',
        label: 'Rewards',
        href: '/rewards',
        svgComponent: RewardIcon // replace this with the SVG for "Messages"
      },
    {
      id: 'messages',
      label: 'Messages',
      href: '/messages',
      svgComponent: MailIcon // replace this with the SVG for "Messages"
    },
    {
        id: 'processtransaction',
        label: 'Process Transaction',
        href: '/process-transaction',
        svgComponent: ProcessTransactionIcon // replace this with the SVG for "Messages"
      }
    // ... add more items as needed
  ];

const NavigationBarContainer = styled.div`
    @media ${StyledMediaQuery.XS} {
        display: none;
        flex-direction: column;
        width: 260px;
        height: 100vh;
        position: fixed;
        top: 0;
        left: 0;
        padding: 12px;
        flex-direction: column;
        gap: 12px;
        background: ${Colors.shades100};
        box-sizing: border-box;
        z-index: 1000;
    }

    @media ${StyledMediaQuery.S} {
        padding: 16px;
    }

    @media ${StyledMediaQuery.L} {
        display: flex;
        padding: 24px;
    }
`

const ActiveNavItem = styled.div`
  color: gold; // or any highlight color you want for the active item
  font-weight: bold; // make it stand out
`;

interface NavigationBarProps {}

const NavigationBar: React.FC<NavigationBarProps> = () => {
    const router = useRouter();
    const currentPage = router.pathname; // e.g., '/dashboard'
    const initialActiveItem = navItems.find(item => item.href === currentPage)?.id || ''; // e.g., 'dashboard'
    const [activePage, setActivePage] = useState<string>(initialActiveItem);

    const handleTabClick = (page: string, href: string) => {
        console.log('tab clicked');
        setActivePage(page); // update the active page
        router.push(href, undefined, { shallow: true });
  // navigate to the new page
    };

    return (
        <NavigationBarContainer>
            {navItems.map(item => (
                <Link key={item.id} href={item.href} onClick={() => handleTabClick(item.id, item.href)}>
                    <NavItem
                        label={item.label}
                        isActive={activePage === item.id}
                        fill={activePage === item.id ? Colors.shades100 : Colors.neutral600}
                        SvgComponent={item.svgComponent}  // Pass the SVG component down here
                    />
                </Link>
            ))}
        </NavigationBarContainer>
    );
}

export default NavigationBar;