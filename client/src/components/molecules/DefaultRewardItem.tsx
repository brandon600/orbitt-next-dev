import React, { CSSProperties, ReactNode, PropsWithChildren, useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import Colors from '../../constants/Colors';
import StyledMediaQuery from '../../constants/StyledMediaQuery';
import Text from '../subatomic/Text'
import ToggleSwitch from '../atoms/ToggleSwitch';
import { DefaultRewardData } from '@/types/DefaultRewardData';

interface DefaultRewardItemProps extends DefaultRewardData {
    // Define the types for your props here
    originalDefaultRewardValue: boolean;
    onDefaultToggleChange: (index: number, newValue: boolean) => void;
    onEditClick: (reward: DefaultRewardData) => void;
  }

const TriggeredRewardContainer = styled.div`
    @media ${StyledMediaQuery.XS} {
        display: flex;
        width: 100%;
        gap: 12px;
        flex-direction: column;
        justify-content: center;
        color: ${Colors.neutral700};

        p {
            font-size: 20px;
            font-weight: 500;
            line-height: 24px;
        }
    }

    @media ${StyledMediaQuery.S} {
        gap: 16px;
        width: 640px;

        p {
            font-size: 24px;
            font-weight: 500;
            line-height: 29px;
        }
    }
`;

const InfoToggleCTA = styled.div`
    @media ${StyledMediaQuery.XS} {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 24px;
        flex: 1 0 0;
        align-self: stretch;
    }
`

const RewardInfoPlusToggle = styled.div`
    @media ${StyledMediaQuery.XS} {
        display: flex;
        padding: 8px 12px;
        align-items: center;
        gap: 8px;
        align-self: stretch;
        background: ${Colors.neutral200};
        border-radius: 8px;
        flex: 1 0 0;
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

const ActiveDiv = styled.div`
    @media ${StyledMediaQuery.XS} {
        display: flex;
    }
`

const EditRewardValue = styled.div`
    @media ${StyledMediaQuery.XS} {
        display: none;
        cursor: pointer;

        p {
            color: ${Colors.shades100};
            font-size: 14px;
            font-weight: 500;
            line-height: 22px;
        }
    }

    @media ${StyledMediaQuery.S} {
        display: flex;
        padding: 8px 12px;
        border-radius: 8px;
        background: ${Colors.neutral500};
    }
`
  
  const DefaultRewardItem: React.FC<DefaultRewardItemProps> = ({
    rewardName: defaultRewardName,
    rewardValue: defaultRewardValue,
    rewardActive: defaultRewardActive,
    index,
    _id,
    id,
    rewardNumberId,
    originalDefaultRewardValue,
    onDefaultToggleChange,
    onEditClick,
  }) => {
    const handleClick = () => {
      console.log('handle click');
    };
    const [isDefaultActive, setIsDefaultActive] = useState(defaultRewardActive);

    useEffect(() => {
        setIsDefaultActive(defaultRewardActive);
      }, [defaultRewardActive]);
  
      console.log("Reward Active in RewardItem:", defaultRewardActive);
  
      useEffect(() => {
          setIsDefaultActive(originalDefaultRewardValue);
          console.log("isActive state reset to:", originalDefaultRewardValue);
      }, [originalDefaultRewardValue]);
    

    const handleToggle = (newValue: boolean) => {
        setIsDefaultActive(newValue);
        onDefaultToggleChange(index, newValue);
    };

    const handleEditDefaultRewardClick = () => {
        onEditClick({
            _id,
            id,
            rewardName: defaultRewardName,
            rewardValue: defaultRewardValue,
            rewardActive: defaultRewardActive,
            index,
            rewardNumberId
        });
      };


    return (
      <TriggeredRewardContainer>
        <Text text={defaultRewardName} />
        <InfoToggleCTA>
            <RewardInfoPlusToggle>
                <RewardInfo>
                    <GiveCustomersDiv>
                        <Text text='Give customers' />
                    </GiveCustomersDiv>
                    <PointsGivenDiv>
                        <Text text={defaultRewardValue.toString()} />
                    </PointsGivenDiv>
                    <PointsDiv>
                        <Text text='point(s)' />
                    </PointsDiv>
                    <ActiveDiv
                    >
                    <ToggleSwitch 
                        active={isDefaultActive} onChange={handleToggle} 
                    />
                    </ActiveDiv>
                </RewardInfo>
            </RewardInfoPlusToggle>
            <EditRewardValue
                onClick={handleEditDefaultRewardClick}
            >
                <Text 
                    text='Edit'
                />
            </EditRewardValue>
        </InfoToggleCTA>
      </TriggeredRewardContainer>
    );
  };
  
  export default DefaultRewardItem;