import React, { useEffect, useState } from "react";
import styled, { css, keyframes } from 'styled-components';
import { useStore, AppState } from "../../store/store"; // adjust the import to your file structure
//import { AppState } from "../../store/store";
import Colors from "../../constants/Colors";
import StyledMediaQuery from '../../constants/StyledMediaQuery';
import { InformationIcon } from "../subatomic/Icons/InformationIcon";
import { CheckCircleIcon } from "../subatomic/Icons/CheckCircleIcon";
import { ErrorIcon } from "../subatomic/Icons/ErrorIcon";
import { motion } from 'framer-motion';

const ToastContainer = motion(styled.div<{ visible: boolean, type: string }>`
@media ${StyledMediaQuery.XS} {
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    width: 300px;
    height: 72px;
    align-items: center;
    border-radius: 8px;
    background-color: ${Colors.shades100};
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.32);
}

@media ${StyledMediaQuery.S} {
    width: 360px;
}
`);

const ToastMessageIndicator = styled.div<{ type: string }>`
    @media ${StyledMediaQuery.XS} {
        display: flex;
        width: 72px;
        height: 72px;
        justify-content: center;
        align-items: center;
        border-radius: 8px 0px 0px 8px;

        svg {
            width: 48px;
            height: 48px;
        }

        ${props => props.type === 'success' && css`
        background-color: ${Colors.success600};
      `}
      ${props => props.type === 'error' && css`
        background-color: ${Colors.error400};
      `}
      ${props => props.type === 'info' && css`
        background-color: ${Colors.neutral500};
      `}
    }
`

const ToastRight = styled.div`
    @media ${StyledMediaQuery.XS} {
        display: flex;
        height: 72px;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        flex: 1 0 0;
        align-self: stretch;
        background: ${Colors.shades100};
        border-radius: 0px 8px 8px 0px;
    }
`

const ToastText = styled.div`
    @media ${StyledMediaQuery.XS} {
        display: flex;
        padding: 22px 16px 0px 12px;
        justify-content: space-between;
        align-items: flex-start;
        align-self: stretch;

        p {
            color: ${Colors.neutral500};
            font-size: 16px;
            font-weight: 500;
            line-height: 19px;
        }
    }
`

const ToastBar = styled.div<{ type: string }>`
  @media ${StyledMediaQuery.XS} {
    width: 0; // Start at 0 width
    height: 6px;
    transition: width 3.2s linear; // Animate to full width over 4 seconds
  }

  ${props => props.type === 'success' && css`
    background-color: ${Colors.success600};
  `}
  ${props => props.type === 'error' && css`
    background-color: ${Colors.error400};
  `}
  ${props => props.type === 'info' && css`
    background-color: ${Colors.neutral500};
  `}
`;

const Toast: React.FC = () => {
  const { toast, hideToast } = useStore((state: AppState) => ({
    toast: state.toast,
    hideToast: state.hideToast,
  }));

  const [barWidth, setBarWidth] = useState('0');

  const returnCorrectIcon = () => {
    switch (toast.type) {
        case 'success':
            return <CheckCircleIcon fill={Colors.shades100} />
        case 'error':
            return <ErrorIcon fill={Colors.shades100} />
        case 'info':
            return <InformationIcon fill={Colors.shades100} />
        default:
            return <InformationIcon fill={Colors.shades100} />
    }
  }

  const [shouldRender, setShouldRender] = useState(false);

/*
  useEffect(() => {
    if (toast.visible) {
      setBarWidth('0');  // Reset the width to 0
      const timerForBar = setTimeout(() => {
        setBarWidth('100%');  // Set the width to 100% after 10ms
      }, 10);
      
      const timerForToast = setTimeout(() => {
        hideToast();
      }, 3200);
      return () => {
        clearTimeout(timerForBar);
        clearTimeout(timerForToast);
      };
    }
  }, [toast, hideToast]);
  */

 
  useEffect(() => {
    let renderTimeout: NodeJS.Timeout | undefined;
    if (toast.visible) {
      setShouldRender(true);

      setBarWidth('0');  // Reset the width to 0
      const timerForBar = setTimeout(() => {
        setBarWidth('100%');  // Set the width to 100% after 10ms
      }, 10);

      const timerForToast = setTimeout(() => {
        hideToast();
      }, 3000);

      // We'll give another 600ms for exit animation to complete
      renderTimeout = setTimeout(() => {
        setShouldRender(false);
      }, 3600); // 3200 + 600

      return () => {
        clearTimeout(timerForBar);
        clearTimeout(timerForToast);
        if (renderTimeout) clearTimeout(renderTimeout);
      };
    }
  }, [toast, hideToast]);

  if (!shouldRender) return null;

  return (
    <ToastContainer 
        role="alert" 
        visible={toast.visible} 
        type={toast.type}
        initial={{ bottom: "0px", opacity: 0 }}  // initial state (hidden to the right)
        animate={{ bottom: "24px", opacity: 1 }}  // end state (appears from the right)
        exit={{ bottom: "0px", opacity: 0 }}  // exit state (disappears to the right)
        transition={{ duration: 0.6, ease: [0.88, 0, 0.16, 1] }} // animation takes 400ms with easeInOut easing
    >
        <ToastMessageIndicator
            type={toast.type}
        >
            {returnCorrectIcon()}
        </ToastMessageIndicator>
            <ToastRight>
                <ToastText>
                    <p>{toast.message}</p>
                </ToastText>
                <ToastBar type={toast.type} style={{ width: barWidth }} />
            </ToastRight>
    </ToastContainer>
  );
};

export default Toast;