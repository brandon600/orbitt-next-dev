// src/GlobalStyles.ts
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    display: flex;
    margin: 0;
    font-family: Arial, sans-serif;
    background-color: #f0f0f0;
    color: #333;
  }

  h1, h2, h3, h4, h5, h6, p {
    margin-block-start: 0px;
    margin-block-end: 0px;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }
`;

export default GlobalStyle;