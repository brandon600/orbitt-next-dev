import React, { CSSProperties, ReactNode, PropsWithChildren, useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import Colors from '../../constants/Colors';
import StyledMediaQuery from '../../constants/StyledMediaQuery';

interface TextFieldProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean; // Add a prop to make the input required
  placeholder?: string; // Add the 'placeholder' prop
}


const TextFieldContainer = styled.div`
    @media ${StyledMediaQuery.XS} {
        display: flex;
        width: 100%;
        flex-direction: column;
        align-items: flex-start;
        gap: 20px;
    }
`

const TextFieldTop = styled.div`
    @media ${StyledMediaQuery.XS} {
        display: flex;
        gap: 24px;
    }
`

const HeadingAndSubhead = styled.div`
    @media ${StyledMediaQuery.XS} {
        display: flex;
        flex-direction: column;
        gap: 8px;
        flex: 1 0 0;

        h4 {
            font-size: 24px;
            font-weight: 800;
            line-height: 29px;
            color: ${Colors.neutral600};
        }

        p {
            font-size: 16px;
            font-weight: 500;
            line-height: 19px;
            color: ${Colors.neutral400};
        }
    }
`

const MessageContainer = styled.div`
    @media ${StyledMediaQuery.XS} {
        display: flex;
        padding: 16px;
        flex-direction: column;
        gap: 16px;
        border-radius: 16px;
    }
`

const MessageTextAndCustomText = styled.div`
    @media ${StyledMediaQuery.XS} {
        display: flex;
        gap: 16px;

        p {
            font-size: 16px;
            font-weight: 500;
            line-height: 26px; 
            color: ${Colors.neutral700};
        }
    }
`