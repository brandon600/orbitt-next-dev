import React, { CSSProperties, ReactNode, PropsWithChildren, useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { Colors } from '../../constants/Colors';
import StyledMediaQuery from '../../constants/StyledMediaQuery';
import Text from '../subatomic/Text'

interface RewardTableHeadProps {
    label1: string;
    label2: string;
    label3: string;
    label4: string;
    label5: string;
  }
  
  interface RewardTableHeadCellProps {
    width?: CSSProperties['width'];
    flex?: CSSProperties['flex'];
  }
  
  interface RewardTableHeadComponentProps {
    label1?: RewardTableHeadProps['label1'];
    label2?: RewardTableHeadProps['label2'];
    label3?: RewardTableHeadProps['label3'];
    label4?: RewardTableHeadProps['label4'];
    label5?: RewardTableHeadProps['label5'];
  }
  
  const RewardTableHeadContainer = styled.div<RewardTableHeadComponentProps>`
    display: flex;
    flex-direction: row;
    width: 100%;
    padding-bottom: 8px;
    border-bottom: 1px solid ${Colors.neutral200};
    justify-content: space-between;
  `;
  
  const RewardTableHeadLabel = styled.div<RewardTableHeadCellProps>`
    display: flex;
    width: ${({ width }) => (width || 'auto')};
    flex: ${({ flex }) => (flex || '0 1 auto')};
  
    p {
      font-size: 16px;
      line-height: 19px;
      font-weight: 500;
      color: ${Colors.neutral400};
    }
  `;
  
  // ... Your RewardTableHead components here ...
  
  const RewardTableHeadXS: React.FC<RewardTableHeadComponentProps> = ({ label1, label2, label3, label4, label5, ...rest }) => {
    return (
      <RewardTableHeadContainer>
        <RewardTableHeadLabel width="auto" flex="1 0 0">
          <Text text={label1} />
        </RewardTableHeadLabel>
        <RewardTableHeadLabel width="50px">
          <Text text={label2} />
        </RewardTableHeadLabel>
        <RewardTableHeadLabel width="64px">
          <Text text={label3} />
        </RewardTableHeadLabel>
      </RewardTableHeadContainer>
    );
  };
  
  const RewardTableHeadS: React.FC<RewardTableHeadComponentProps> = ({ label1, label2, label3, label4, label5, ...rest }) => {
    return (
      <RewardTableHeadContainer>
        <RewardTableHeadLabel width="auto" flex="1 0 0">
          <Text text={label1} />
        </RewardTableHeadLabel>
        <RewardTableHeadLabel width="64px">
          <Text text={label2} />
        </RewardTableHeadLabel>
        <RewardTableHeadLabel width="160px">
          <Text text={label3} />
        </RewardTableHeadLabel>
        <RewardTableHeadLabel width="64px">
          <Text text={label4} />
        </RewardTableHeadLabel>
        <RewardTableHeadLabel width="80px">
          <Text text={label5} />
        </RewardTableHeadLabel>
      </RewardTableHeadContainer>
    );
  };
  
  const RewardTableHeadL: React.FC<RewardTableHeadComponentProps> = ({ label1, label2, label3, label4, label5, ...rest }) => {
    return (
      <RewardTableHeadContainer>
        <RewardTableHeadLabel width="auto" flex="1 0 0">
          <Text text={label1} />
        </RewardTableHeadLabel>
        <RewardTableHeadLabel width="96px">
          <Text text={label2} />
        </RewardTableHeadLabel>
        <RewardTableHeadLabel width="240px">
          <Text text={label3} />
        </RewardTableHeadLabel>
        <RewardTableHeadLabel width="64px">
          <Text text={label4} />
        </RewardTableHeadLabel>
        <RewardTableHeadLabel width="80px">
          <Text text={label5} />
        </RewardTableHeadLabel>
      </RewardTableHeadContainer>
    );
  };
  
  // Define breakpoints for different screen sizes
  const breakpoints = {
    XS: 320,
    S: 720,
    L: 1280, // Adjust this value as needed
  };

  function renderRewardTableHead(windowWidth: number, labels: RewardTableHeadProps): React.ReactElement {
    // Determine the component to render based on the window width
    if (windowWidth < breakpoints.S) {
      return <RewardTableHeadXS {...labels} />;
    } else if (windowWidth < breakpoints.L) {
      return <RewardTableHeadS {...labels} />;
    } else {
      return <RewardTableHeadL {...labels} />;
    }
  }
  
  // Your RewardTableHead component
  const RewardTableHead: React.FC<RewardTableHeadProps> = (labels) => {
    const [windowWidth, setWindowWidth] = useState<number>(0);
  
    useEffect(() => {
      // Access the window object on the client side
      setWindowWidth(window.innerWidth);
  
      // Add event listener to update window width on resize
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };
  
      // Attach event listener
      window.addEventListener('resize', handleResize);
  
      // Clean up the event listener when the component unmounts
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
  
    return renderRewardTableHead(windowWidth, labels);
  };
  
  export default RewardTableHead;
  