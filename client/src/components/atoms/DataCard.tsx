import React, { CSSProperties, ReactNode, PropsWithChildren, useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import Colors from '../../constants/Colors';
import StyledMediaQuery from '../../constants/StyledMediaQuery';
import Text from '../subatomic/Text'

interface DataCardProps {
    label: string;
    number1: string;
    number2: string;
  }
  
interface DataCardCellProps {
    width?: CSSProperties['width'];
  }
  
interface DataCardComponentProps {
    label?: DataCardProps['label'];
    number1?: DataCardProps['number1'];
    number2?: DataCardProps['number2'];
  }
  
const DataCardContainer = styled.div<DataCardComponentProps>`
@media ${StyledMediaQuery.XS} {
  display: flex;
  width: 140px;
  height: 160px;
  padding: 16px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
  border-radius: 8px;
  box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.08);
  background: ${Colors.shades100};
}

@media ${StyledMediaQuery.S} {
    gap: 16px;
    padding-bottom: 12px;
}

@media ${StyledMediaQuery.L} {
    gap: 24px;
}
  `;

const DataCardOutOfTotal = styled.div`
    @media ${StyledMediaQuery.XS} {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: flex-end;
        align-self: stretch;

    }
`

const DataCardLabel = styled.div<DataCardCellProps>`
  @media ${StyledMediaQuery.XS} {
    display: flex;
    text-align: center;
    align-items: center;

    p {
      font-size: 16px;
      line-height: 19px;
      font-weight: 500;
      color: ${Colors.neutral500};
      text-align: center;
    }
  }

  @media ${StyledMediaQuery.L} {
    p {
        font-size: 20px;
        line-height: 24px;
    }
  }
  `

const DataCardNumber1 = styled.div`
    @media ${StyledMediaQuery.XS} {
        display: flex;
        p {
            font-size: 48px;
            line-height: 58px;
            font-weight: 500;
            color: ${Colors.neutral500};
        }
    }
`

const DataCardNumber2 = styled.div`
    @media ${StyledMediaQuery.XS} {
        display: flex;
        padding: 8px 0px;
        justify-content: center;
        align-items: flex-end; 
        p {
            font-size: 16px;
            font-weight: 500;
            line-height: 19px;
            color: ${Colors.neutral500};
        }
    }
`

  const DataCard: React.FC<DataCardComponentProps> = ({ label, number1, number2, ...rest }) => {
    return (
      <DataCardContainer>
        <DataCardLabel>
          <Text text={label} />
        </DataCardLabel>
        <DataCardOutOfTotal>
            <DataCardNumber1>
                <Text text={number1} />
            </DataCardNumber1>
            <DataCardNumber2>
                <Text text={number2} />
            </DataCardNumber2>
        </DataCardOutOfTotal>
      </DataCardContainer>
    );
  };
  
  export default DataCard;
  