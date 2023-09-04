import React, { CSSProperties, ReactNode, PropsWithChildren, useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import Colors from '../../constants/Colors';
import StyledMediaQuery from '../../constants/StyledMediaQuery';
import Text from '../subatomic/Text'
import Button from '../atoms/Button';
import ToggleSwitch from '../atoms/ToggleSwitch';

// Define the props interface for RewardItem
interface RewardItemProps {
    // Define the types for your props here
    rewardName: string;
    rewardCost: number;
    rewardValue: string;
    rewardNotes: string;
    rewardActive: boolean;
    // Add other props as needed
  }

const RewardItemContainer = styled.div`
    @media ${StyledMediaQuery.XS} {
        display: flex;
        width: 100%;
        padding: 20px 0px;
        align-items: center;
        gap: 12px;
        border-bottom: 1px solid ${Colors.neutral200};
    }

    @media ${StyledMediaQuery.S} {
        padding: 24px 0px;
        gap: 16px;
    }

    @media ${StyledMediaQuery.L} {
        padding: 20px 0px;
        gap: 24px;
    }
`

const RewardNameAndValue = styled.div`
    @media ${StyledMediaQuery.XS} {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        flex: 1 0 0;

        h6 {
            font-size: 16px;
            font-weight: 800;
            line-height: 26px;
            color: ${Colors.neutral700};
        }

        p {
            font-size: 16px;
            font-weight: 400;
            line-height: 19px;
            color: ${Colors.neutral400};
        }
    }

    @media ${StyledMediaQuery.S} {
        gap: 4px;

            h6 {
                font-size: 24px;
                font-weight: 800;
                line-height: 29px;
            }

            p {
                font-size: 20px;
                font-weight: 400;
                line-height: 24px;
            }
    }

    @media ${StyledMediaQuery.L} {
        h6 {
            font-size: 32px;
            font-weight: 800;
            line-height: 39px;
        }

        p {
            font-size: 24px;
            font-weight: 500;
            line-height: 29px;
        }
    }
`

const RewardCost = styled.div`
    @media ${StyledMediaQuery.XS} {
        display: flex;
        width: 50px;
        align-items: center;
        gap: 12px;
        flex-shrink: 0;

        p {
            flex: 1 0 0;
            font-size: 24px;
            font-weight: 500;
            line-height: 29px;
            color: ${Colors.neutral700};
        }
    }

    @media ${StyledMediaQuery.S} {
        width: 64px;
    }

    @media ${StyledMediaQuery.L} {
        width: 96px;
        p {
            font-size: 32px;
            font-style: normal;
            font-weight: 500;
            line-height: 39px;
        }
    }
`

const RewardNotes = styled.div`
    @media ${StyledMediaQuery.XS} {
        display: none;
    }

    @media ${StyledMediaQuery.S} {
        display: flex;
        width: 160px;
        align-items: center;
        flex-shrink: 0;

        p {
            font-size: 16px;
            font-weight: 500;
            line-height: 19px;
            color: ${Colors.neutral700};
        }
    }

    @media ${StyledMediaQuery.L} {
        width: 240px;
    }
`

const RewardActive = styled.div`
    @media ${StyledMediaQuery.XS} {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 64px;
    }
`

const RewardEdit = styled.div`
    @media ${StyledMediaQuery.XS} {
        display: none;
        width: 80px;
        justify-content: center;
        align-items: center;
        flex-shrink: 0;
    }

    @media ${StyledMediaQuery.S} {
        display: flex;
        width: 80px;
        justify-content: center;
        align-items: center;
        flex-shrink: 0;
    }
`


// Define the type for the RewardItem component itself
const RewardItem: React.FC<RewardItemProps> = ({
    rewardName,
    rewardValue,
    rewardCost,
    rewardNotes,
    rewardActive
  }) => {
    const handleClick = () => {
      console.log('handle click');
    };

    const [isActive, setIsActive] = useState(rewardActive);

  const handleToggle = (active: boolean) => {
    setIsActive(active);
  };
  
    return (
      <RewardItemContainer>
        <RewardNameAndValue>
          <h6>{rewardName}</h6>
          <Text text={rewardValue} />
        </RewardNameAndValue>
        <RewardCost>
          <Text text={rewardCost.toString()} />
        </RewardCost>
        <RewardNotes>
          <Text text={rewardNotes} />
        </RewardNotes>
        <RewardActive>
        <ToggleSwitch 
            active={isActive} onChange={handleToggle} 
        />
        </RewardActive>
        <RewardEdit>
          <Button
            typeVariant="neutral"
            sizeVariant="small"
            label="Edit"
            widthVariant="content"
            onClick={handleClick}
          />
        </RewardEdit>
      </RewardItemContainer>
    );
  };
  
export default RewardItem;
  
  
  