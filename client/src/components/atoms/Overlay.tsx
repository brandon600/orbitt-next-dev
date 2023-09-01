import React, { CSSProperties, ReactNode, PropsWithChildren, useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { Colors } from '../../constants/Colors';
import StyledMediaQuery from '../../constants/StyledMediaQuery';

const OverlayDiv = styled.div`
    @media ${StyledMediaQuery.XS} {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.4);
        backdrop-filter: blur(4px);
        display: flex;
        justify-content: center;
        align-items: center;
    }
`

const Overlay = () => {
    return (
      <OverlayDiv />
    );
  };
  
  export default Overlay;