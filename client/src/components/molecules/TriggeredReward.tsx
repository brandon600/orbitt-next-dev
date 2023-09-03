import React, { CSSProperties, ReactNode, PropsWithChildren, useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import Colors from '../../constants/Colors';
import StyledMediaQuery from '../../constants/StyledMediaQuery';
import Text from '../subatomic/Text'


  
const TriggeredRewardContainer = styled.div`
    @media ${StyledMediaQuery.XS} {
        display: flex;
        width: 100%;
        gap: 12px;
        flex-direction: column;
        justify-content: center;
        color ${Colors.neutral700};

        p {
            font-size: 20px;
            font-weight: 500;
            line-height: 24px;
        }

        border-bottom: 1px solid ${Colors.neutral200};
    }

    @media ${StyledMediaQuery.S} {
        gap: 16px;

        p {
            font-size: 24px;
            font-weight: 500;
            line-height: 29px;
        }
    }
`;

const RewardInfoPlusToggle = styled.div`
    @media ${StyledMediaQuery.XS} {
        display: flex;
        padding: 8px 12px;
        align-items: center;
        gap: 8px;
        align-self: stretch;
        background: ${Colors.neutral200};
        border-radius: 8px;
    }

    @media ${StyledMediaQuery.S} {
        justify-content: space-between;
    }
`

const RewardInfo = styled.div`
    @media ${StyledMediaQuery.XS} {
        display: flex;
        align-items: center;
        gap: 16px;
    }

    @media ${StyledMediaQuery.S} { 
        gap: 16px;
    }
`

const GiveCustomersDiv = styled.div`
    @media ${StyledMediaQuery.XS} {
        display: flex;
        color: ${Colors.neutral700};

        p {
            font-size: 14px;
            font-weight: 500;
            line-height: 22px;
        }
    }

    @media ${StyledMediaQuery.S} {
        p {
            font-size: 20px;
            font-weight: 500;
            line-height: 24px;
        }
    }
`

const PointsGivenDiv = styled.div`
    @media ${StyledMediaQuery.XS} {
        display: flex;
        height: 48px;
        padding: 0px 8px;
        justify-content: center;
        align-items: center;
        color: ${Colors.neutral700};
        background: ${Colors.shades100};
        border-radius: 8px;

        p {
            font-size: 20px;
            font-weight: 800;
            line-height: 24px; 
        }
    }

    @media ${StyledMediaQuery.S} {
        padding: 0px 16px;
        p {
            font-size: 24px;
            font-weight: 800;
            line-height: 29px;
        }
    }
`

const PointsDiv = styled.div`
    @media ${StyledMediaQuery.XS} {
        display: flex;
        height: 48px;
        align-items: center;
        gap: 12px;

        color: ${Colors.neutral700};

        p {
            font-size: 14px;
            font-weight: 500;
            line-height: 22px;
        }
    }

    @media ${StyledMediaQuery.S} {
        p {
            font-size: 20px;
            font-weight: 500;
            line-height: 24px;
        }
    }
`
  
  // ... Your RewardTableHead components here ...
  
  const TriggeredReward: React.FC = () => {
    return (
      <TriggeredRewardContainer>
        <Text text='Reward Name' />
        <RewardInfoPlusToggle>
            <RewardInfo>
                <GiveCustomersDiv>
                    <Text text='Give customers' />
                </GiveCustomersDiv>
                <PointsGivenDiv>
                    <Text text='1' />
                </PointsGivenDiv>
                <PointsDiv>
                    <Text text='point(s)' />
                </PointsDiv>
            </RewardInfo>
        </RewardInfoPlusToggle>
      </TriggeredRewardContainer>
    );
  };

  
  export default TriggeredReward;