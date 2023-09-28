import React, { CSSProperties, ReactNode, PropsWithChildren, useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import Colors from '../../constants/Colors';
import StyledMediaQuery from '../../constants/StyledMediaQuery';
import Text from '../subatomic/Text'
import { CheckCircleIcon } from '../subatomic/Icons/CheckCircleIcon';
import { CakeIcon } from '../subatomic/Icons/CakeIcon';
import { NewCustomerIcon } from '../subatomic/Icons/NewCustomerIcon';
import { RewardIcon } from '../subatomic/Icons/RewardIcon';
import { SellIcon } from '../subatomic/Icons/SellIcon';

export type VisitType = 'New User' | 'Reward' | 'Purchase' | 'Birthday';

type Visit = {
  type: VisitType;
  infoText: string;
};

interface CustomerVisitProps {
    visitInfoText: string;
    visitTypeVariant?: VisitType;
  }

  interface VisitTypeConfig {
    icon: (color: string) => JSX.Element;  
    text: string;
  }

  const visitTypeConfigs: Record<VisitType, VisitTypeConfig> = {
    'New User': {
      icon: (color) => <NewCustomerIcon fill={color} />,
      text: 'New User'
    },
    'Reward': {
      icon: (color) => <RewardIcon fill={color} />,
      text: 'Reward Redeemed'
    },
    'Purchase': {
      icon: (color) => <SellIcon fill={color} />,
      text: 'Purchase'
    },
    'Birthday': {
      icon: (color) => <CakeIcon fill={color} />,
      text: 'Birthday Reward'
    }
  };


  const CustomerVisitContainer = styled.div`
    @media ${StyledMediaQuery.XS} {
        display: flex;
        width: 100%;
        padding: 12px;
        flex-direction: column;
        align-items: flex-start;
        gap: 12px;
        border-radius: 8px;
        background: ${Colors.shades100};
        box-sizing: border-box;
    }

    @media ${StyledMediaQuery.L} {
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        padding: 0px;
        padding-left: 16px;
        height: 64px;
    }
  `

const VisitInfoText = styled.div`
    @media ${StyledMediaQuery.XS} {
        display: flex;
        p {
            color: ${Colors.neutral700};
            font-size: 16px;
            font-weight: 500;
            line-height: 19px;
        }
    }

    @media ${StyledMediaQuery.L} {
        p {
            color: ${Colors.neutral600};
            font-size: 20px;
            line-height: 24px;
        }
    }
`

const VisitTypeBlock = styled.div`
    @media ${StyledMediaQuery.XS} {
        display: flex;
        align-items: center;
        gap: 12px;
        align-self: stretch;
    }

    @media ${StyledMediaQuery.L} {
        display: flex;
        width: 270px;
        height: 64px;
        padding: 0px;
        justify-content: center;
        align-items: center;
        gap: 12px;
        flex-shrink: 0;
        border-radius: 8px;
        background: ${Colors.neutral400};
    }
`

const VisitTypeIcon = styled.div`
    @media ${StyledMediaQuery.XS} {
        display: flex;
        width: 32px;
        height: 32px;

        svg {
            height: 100%;
            width: 100%;
        }
    }
`

const StyledIcon = styled(VisitTypeIcon)`
  svg {
    fill: ${Colors.neutral600};  // Default Color

    @media ${StyledMediaQuery.L} {
      fill: ${Colors.shades100};  // Color for Larger Viewports
    }
  }
`;

const VisitTypeText = styled.div`
    @media ${StyledMediaQuery.XS} {
        display: flex;
        
        p {
            font-size: 16px;
            font-weight: 800;
            line-height: 19px;
            color: ${Colors.neutral600};
        }
    }

    @media ${StyledMediaQuery.L} {
        p {
            font-size: 20px;
            line-height: 24px;
            color: ${Colors.shades100};
        }
    }
`

const CustomerVisit: React.FC<CustomerVisitProps> = ({ visitTypeVariant = 'New User', visitInfoText }) => {
    const config = visitTypeConfigs[visitTypeVariant];
    return (
      <CustomerVisitContainer>
        <VisitInfoText>
          <Text text={visitInfoText} />
        </VisitInfoText>
        <VisitTypeBlock>
                <StyledIcon>
                {config.icon(Colors.neutral600)}
                </StyledIcon>
            <VisitTypeText>
                <Text text={config.text} />
            </VisitTypeText>
            </VisitTypeBlock>
      </CustomerVisitContainer>
    );
  };
  
  export default CustomerVisit;