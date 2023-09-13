import React, { CSSProperties, ReactNode, PropsWithChildren, useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import Colors from '../../constants/Colors';
import StyledMediaQuery from '../../constants/StyledMediaQuery';
import Text from '../subatomic/Text'

interface CustomerTableHeadProps {
    label1: string;
    label2: string;
    label3: string;
    label4: string;
    label5: string;
    label6: string;
    label7: string;
    label8: string;
  }
  
interface CustomerTableHeadCellProps {
    width?: CSSProperties['width'];
    flex?: CSSProperties['flex'];
  }
  
interface CustomerTableHeadComponentProps {
    label1?: CustomerTableHeadProps['label1'];
    label2?: CustomerTableHeadProps['label2'];
    label3?: CustomerTableHeadProps['label3'];
    label4?: CustomerTableHeadProps['label4'];
    label5?: CustomerTableHeadProps['label5'];
    label6?: CustomerTableHeadProps['label6'];
    label7?: CustomerTableHeadProps['label7'];
    label8?: CustomerTableHeadProps['label8'];
  }
  
const CustomerTableHeadContainer = styled.div<CustomerTableHeadComponentProps>`
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
    padding-bottom: 12px;
}

@media ${StyledMediaQuery.L} {
    gap: 24px;
}
  `;

const CustomerTableNameLabel = styled.div<CustomerTableHeadCellProps>`
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

const CustomerTablePhoneNumberLabel = styled.div<CustomerTableHeadCellProps>`
@media ${StyledMediaQuery.XS} {
  display: none;
  align-items: center;
  flex-shrink: 0;

  p {
    font-size: 16px;
    line-height: 19px;
    font-weight: 500;
    color: ${Colors.neutral400};
  }
}

  @media ${StyledMediaQuery.L} {
    display: flex;
    width: 120px;
  }
`

const CustomerTableDOBLabel = styled.div<CustomerTableHeadCellProps>`
@media ${StyledMediaQuery.XS} {
  display: none;
  align-items: center;
  flex-shrink: 0;

  p {
    font-size: 16px;
    line-height: 19px;
    font-weight: 500;
    color: ${Colors.neutral400};
  }
}

  @media ${StyledMediaQuery.L} {
    display: flex;
    width: 104px;
  }
`

const CustomerTablePointsLabel = styled.div<CustomerTableHeadCellProps>`
@media ${StyledMediaQuery.XS} {
  display: flex;
  width: 53px;
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
    width: 56px;
  }

  @media ${StyledMediaQuery.L} {
    width: 48px;
  }
`

const CustomerTableVisitsLabel = styled.div<CustomerTableHeadCellProps>`
@media ${StyledMediaQuery.XS} {
  display: none;
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
    display: flex;
    width: 56px;
  }

  @media ${StyledMediaQuery.L} {
    width: 48px;
  }
`

const CustomerTableSignUpLabel = styled.div<CustomerTableHeadCellProps>`
@media ${StyledMediaQuery.XS} {
  display: none;
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
    display: flex;
    width: 92px;
  }
`

const CustomerTableLastVisitLabel = styled.div<CustomerTableHeadCellProps>`
@media ${StyledMediaQuery.XS} {
  display: none;
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
    display: flex;
    width: 92px;
  }
`

const CustomerTableViewLabel = styled.div<CustomerTableHeadCellProps>`
@media ${StyledMediaQuery.XS} {
  display: flex;
  align-items: center;
  flex-shrink: 0;
  width: 56px;

  p {
    font-size: 16px;
    line-height: 19px;
    font-weight: 500;
    color: ${Colors.neutral400};
  }
}

  @media ${StyledMediaQuery.S} {
    display: flex;
    width: 53px;
  }
`


  const RewardTableHead: React.FC<CustomerTableHeadComponentProps> = ({ label1, label2, label3, label4, label5, label6, label7, label8, ...rest }) => {
    return (
      <CustomerTableHeadContainer>
        <CustomerTableNameLabel>
          <Text text={label1} />
        </CustomerTableNameLabel>
        <CustomerTablePhoneNumberLabel>
          <Text text={label2} />
        </CustomerTablePhoneNumberLabel>
        <CustomerTableDOBLabel>
          <Text text={label3} />
        </CustomerTableDOBLabel>
        <CustomerTablePointsLabel>
          <Text text={label4} />
        </CustomerTablePointsLabel>
        <CustomerTableVisitsLabel>
          <Text text={label5} />
        </CustomerTableVisitsLabel>
        <CustomerTableSignUpLabel>
            <Text text={label6} />
        </CustomerTableSignUpLabel>
        <CustomerTableLastVisitLabel>
            <Text text={label7} />
        </CustomerTableLastVisitLabel>
        <CustomerTableViewLabel>
            <Text text={label8} />
        </CustomerTableViewLabel>
      </CustomerTableHeadContainer>
    );
  };
  
  export default RewardTableHead;