import React, { CSSProperties, ReactNode, PropsWithChildren, useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import Colors from '../../constants/Colors';
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

@media ${StyledMediaQuery.XS} {
  display: flex;
  gap: 12px;
  flex-direction: row;
  width: 100%;
  padding-bottom: 8px;
  border-bottom: 1px solid ${Colors.neutral200};
  justify-content: space-between;
}

@media ${StyledMediaQuery.S} {
    gap: 16px;
}

@media ${StyledMediaQuery.L} {
    gap: 24px;
}
  `;

const RewardTableRewardsLabel = styled.div<RewardTableHeadCellProps>`
  @media ${StyledMediaQuery.XS} {
    display: flex;
    align-items: center;
    flex: 1 0 0;

    p {
      font-size: 16px;
      line-height: 19px;
      font-weight: 500;
      color: ${Colors.neutral400};
    }
  }
  `

const RewardTableCostLabel = styled.div<RewardTableHeadCellProps>`
@media ${StyledMediaQuery.XS} {
  display: flex;
  width: 50px;
  align-items: center;
  flex-shrink: 0;

  p {
    font-size: 16px;
    line-height: 19px;
    font-weight: 500;
    color: ${Colors.neutral400};
  }
}

  @media ${StyledMediaQuery.S} {
    width: 64px;
  }

  @media ${StyledMediaQuery.L} {
    width: 96px;
  }
`

const RewardTableTermsLabel = styled.div<RewardTableHeadCellProps>`
@media ${StyledMediaQuery.XS} {
    display: none;
    p {
      font-size: 16px;
      line-height: 19px;
      font-weight: 500;
      color: ${Colors.neutral400};
    }
}
@media ${StyledMediaQuery.S} {
  display: flex;
  width: 160px;
}

@media ${StyledMediaQuery.L} {
  width: 240px;
}
`

const RewardTableActiveLabel = styled.div<RewardTableHeadCellProps>`
@media ${StyledMediaQuery.XS} {
  display: flex;
  width: 64px;
  align-items: center;
  flex-shrink: 0;
  
  p {
    font-size: 16px;
    line-height: 19px;
    font-weight: 500;
    color: ${Colors.neutral400};
  }
}
`

const RewardTableEditLabel = styled.div<RewardTableHeadCellProps>`
@media ${StyledMediaQuery.XS} {
  display: none;
  p {
    font-size: 16px;
    line-height: 19px;
    font-weight: 500;
    color: ${Colors.neutral400};
  }
}
@media ${StyledMediaQuery.S} {
  display: flex;
  width: 80px;
}
`

  const RewardTableHead: React.FC<RewardTableHeadComponentProps> = ({ label1, label2, label3, label4, label5, ...rest }) => {
    return (
      <RewardTableHeadContainer>
        <RewardTableRewardsLabel>
          <Text text={label1} />
        </RewardTableRewardsLabel>
        <RewardTableCostLabel>
          <Text text={label2} />
        </RewardTableCostLabel>
        <RewardTableTermsLabel>
          <Text text={label3} />
        </RewardTableTermsLabel>
        <RewardTableActiveLabel>
          <Text text={label4} />
        </RewardTableActiveLabel>
        <RewardTableEditLabel>
          <Text text={label5} />
        </RewardTableEditLabel>
      </RewardTableHeadContainer>
    );
  };
  
  export default RewardTableHead;
  