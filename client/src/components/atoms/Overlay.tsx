import React, { CSSProperties, ReactNode, PropsWithChildren, useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import Colors from '../../constants/Colors';
import StyledMediaQuery from '../../constants/StyledMediaQuery';

import { motion } from 'framer-motion';

const OverlayDiv = styled(motion.div)`
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
      <OverlayDiv 
      initial={{ opacity: 0, backdropFilter: "blur(0px)" }}  // initial state (hidden to the right)
      animate={{ opacity: 1, backdropFilter: "blur(4px)"  }}  // end state (appears from the right)
      exit={{ opacity: 0, backdropFilter: "blur(0px)"  }}  // exit state (disappears to the right)
      transition={{ duration: .2 }} // animation takes 400ms with easeInOut easing
      />
    );
  };
  
  export default Overlay;