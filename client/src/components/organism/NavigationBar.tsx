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
import { SettingsIcon } from '../subatomic/Icons/SettingsIcon';
import { ProcessTransactionIcon } from '../subatomic/Icons/ProcessTransactionIcon';
import { useRouter } from 'next/router';
import GlobalStyle  from '../../GlobalStyle';
import { CancelIcon } from '../subatomic/Icons/CancelIcon';
import Overlay from '../atoms/Overlay';
import { AnimatePresence } from 'framer-motion';
import { MenuIcon } from '../subatomic/Icons/MenuIcon';

type SlideoutNavigationProps = {
  isOpen: boolean;
};


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
      },
      {
        id: 'settings',
        label: 'Settings',
        href: '/settings',
        svgComponent: SettingsIcon // replace this with the SVG for "Messages"
      }
    // ... add more items as needed
  ];


  const FloatingButton = styled.button`
  position: fixed;
  left: 16px;
  bottom: 32px;
  z-index: 700; // higher z-index than your navigation
  background-color: ${Colors.neutral700}; // Any color you prefer
  border: none;
  border-radius: 50%;
  width: 72px; // size of the button
  height: 72px;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.32);

  svg {
    width: 70%;
    height: 70%;
  }
  
  @media ${StyledMediaQuery.XS} {
    display: flex; // Only visible for mobile devices
  }

  @media ${StyledMediaQuery.S} {
    width: 88px;
    height: 88px;
    left: 24px;
    bottom: 48px;
  }

  @media ${StyledMediaQuery.L} {
    display: none;
  }
`;

const NavigationBarContainer = styled.div`
    @media ${StyledMediaQuery.XS} {
        display: flex;
        flex-direction: column;
        width: 280px;
        height: 100vh;
        position: fixed;
        top: 0;
        left: 0;
        padding: 12px;
        flex-direction: column;
        background: ${Colors.neutral100};
        box-sizing: border-box;
        z-index: 1000;
        gap: 0px;
    }

    @media ${StyledMediaQuery.S} {
        width: 360px;
        padding: 24px;
    }

    @media ${StyledMediaQuery.L} {
        width: 260px;
        display: flex;
        padding: 24px;
        background: ${Colors.shades100};
        gap: 12px;
    }
`

const ActiveNavItem = styled.div`
  color: gold; // or any highlight color you want for the active item
  font-weight: bold; // make it stand out
`;

const SlideoutNavigation = styled(NavigationBarContainer)<SlideoutNavigationProps>`
  transform: translateX(${props => (props.isOpen ? '0' : '-100%')});
  transition: transform 0.3s ease-in-out;
  
  @media ${StyledMediaQuery.L} {
    transform: translateX(0); // always shown for larger screens
  }
`;

const NavMenuClose = styled.div`
    @media ${StyledMediaQuery.XS} {
        display: flex;
        width: 48px;
        height: 48px;
        align-items: center;
        justify-content: center;
        align-self: flex-end;
        padding-bottom: 24px;

        svg {
            height: 100%;
            width: 100%;
        }
    }

    @media ${StyledMediaQuery.S} {
        width: 64px;
        height: 64px;
        padding-bottom: 32px;
    }

    @media ${StyledMediaQuery.L} {
      display: none;
  }
`


interface NavigationBarProps {}

const useHasMounted = (): boolean => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  return hasMounted;
};

// 2. useWindowSize hook
const useWindowSize = (): number => {
  const [windowSize, setWindowSize] = useState<number>(typeof window !== 'undefined' ? window.innerWidth : 0);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
};

const NavigationBar: React.FC<NavigationBarProps> = () => {
    const router = useRouter();
    const currentPage = router.pathname; // e.g., '/dashboard'
    const initialActiveItem = navItems.find(item => item.href === currentPage)?.id || ''; // e.g., 'dashboard'
    const [activePage, setActivePage] = useState<string>(initialActiveItem);
    const [isNavOpen, setIsNavOpen] = useState<boolean>(false);

    const handleTabClick = (page: string, href: string) => {
      console.log('tab clicked');
      setActivePage(page); // update the active page
      router.push(href, undefined, { shallow: true }); // navigate to the new page
  
      // If screen width is less than 1280px, close the navigation bar
      if (windowSize < 1280) {
        setIsNavOpen(false);
      }
  };
  

    const toggleNav = () => {
      setIsNavOpen(prev => !prev);
    };

    const windowSize = useWindowSize();
    const hasMounted = useHasMounted();

    return (
      <>
        <FloatingButton onClick={toggleNav}>
          <MenuIcon fill={Colors.shades100} />
        </FloatingButton>
        
        <SlideoutNavigation isOpen={isNavOpen}>
          <NavMenuClose onClick={toggleNav}>
              <CancelIcon fill={Colors.neutral600} />
          </NavMenuClose>
          {navItems.map(item => (
            <Link key={item.id} href={item.href} onClick={() => handleTabClick(item.id, item.href)}>
              <NavItem
                label={item.label}
                isActive={activePage === item.id}
                fill={activePage === item.id ? Colors.shades100 : Colors.neutral600}
                SvgComponent={item.svgComponent}
              />
            </Link>
          ))}
        </SlideoutNavigation>
        <AnimatePresence>
        {/* Conditionally render the Overlay only for smaller screens and if hasMounted */}
        {hasMounted && windowSize < 1280 && isNavOpen && <Overlay />}
      </AnimatePresence>
      </>
    );
}

export default NavigationBar;