import React, { CSSProperties, ReactNode, PropsWithChildren } from 'react';
import styled from 'styled-components';

interface TextProps {
  display?: CSSProperties['display'];
  lineHeight?: CSSProperties['lineHeight'];
  color?: string;
  margin?: CSSProperties['margin'];
  padding?: CSSProperties['padding'];
  maxWidth?: CSSProperties['maxWidth'];
  background?: string;
  textAlign?: CSSProperties['textAlign'];
  text?: string;
}

const StyledText = styled.p<TextProps>`
  display: ${({ display }) => (display || 'flex')};
  color: ${({ color }) => (color || 'inherit')};
  margin: ${({ margin }) => (margin || '0')};
  padding: ${({ padding }) => (padding || '0')};
  max-width: ${({ maxWidth }) => (maxWidth || 'none')};
  background: ${({ background }) => (background || 'none')};
  text-align: ${({ textAlign }) => (textAlign || 'left')};
  margin-block-start: 0px;
  margin-block-end: 0px;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
`;

const Text: React.FC<PropsWithChildren<TextProps>> = ({ text, ...rest }) => {
    return <StyledText {...rest}>{text}</StyledText>;
  };
  
export default Text;