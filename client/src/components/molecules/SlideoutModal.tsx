import React, { CSSProperties, ReactNode, PropsWithChildren, useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import Colors from '../../constants/Colors';
import StyledMediaQuery from '../../constants/StyledMediaQuery';
import Overlay from '../atoms/Overlay';
import RewardForm from '../organism/RewardForm';

const OverlayContent = styled.div`
position: absolute;
    display: flex;
    z-index: 100;
`

const SlideoutModal = ({ onClose }: { onClose: () => void }) => {
    return (
        <div>
        <Overlay />
        <button onClick={onClose}>Close</button>
        <RewardForm />
      </div>
    );
  };
  
export default SlideoutModal;