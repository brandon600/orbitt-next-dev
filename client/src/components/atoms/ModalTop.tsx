import React, { CSSProperties, ReactNode, PropsWithChildren, useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import Colors from '../../constants/Colors';
import StyledMediaQuery from '../../constants/StyledMediaQuery';
import Text from '../subatomic/Text'
import { CancelIcon } from '../subatomic/Icons/CancelIcon';

interface ModalTopProps {
    label: string;
    onClose: () => void;
}

const ModalTopContainer = styled.div`
 @media ${StyledMediaQuery.XS} {
    display: flex;
    padding: 16px;
    justify-content: space-between;
    align-items: center;
    border-radius: 12px 12px 0px 0px;
    background: ${Colors.neutral100};
    height: 80px;

    p {
        font-size: 20px;
        font-weight: 800;
        line-height: 24px;
        color: ${Colors.neutral600};
    }
 }

 @media ${StyledMediaQuery.S} {
    padding: 24 20px;
    height: 104px;

    p {
        font-size: 32px;
        line-height: 39px;
    }
 }
`

const CancelIconContainer = styled.div`
    @media ${StyledMediaQuery.XS} {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 48px;
        height: 48px;

        svg {
            width: 100%;
            height: 100%;
        }
    }

    @media ${StyledMediaQuery.S} {
        width: 64px;
        height: 64px;
    }
`

const ModalTop: React.FC<ModalTopProps> = ({ label, onClose, ...rest }) => {
    return (
      <ModalTopContainer>
        <Text
            text={label}
        />
        <CancelIconContainer onClick={onClose}>
            <CancelIcon 
                fill={Colors.neutral600}
            />
        </CancelIconContainer>
      </ModalTopContainer>
    );
  };
  
  export default ModalTop;