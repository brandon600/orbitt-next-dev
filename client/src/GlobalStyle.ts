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

  form {
    display: flex;
    flex-direction: column;
    margin-top: 0em;
}

/* Reset default input styles */
input {
    /* Remove default border and padding */
    padding: 0;

    /* Reset font styles */
    font: inherit;
    font-size: 16px; /* You can set your desired font size */
    
    /* Remove background color */
    background-color: transparent;

    /* Reset margins and alignment */
    margin: 0;
    text-align: left;

    /* Reset other styles */
    appearance: none;
    cursor: text;
    outline: none; /* Remove the default focus outline */

    /* Reset default styles for select */
    
  select {
    background-color: pink;
    /* Reset font styles */
    font: inherit;
    font-size: 16px; /* Set your desired font size */
    font-family: inherit; /* Inherit font family from parent element */

    /* Reset background and border styles */
    background-color: transparent;
    border: none; /* Add your desired border style */
    border-color: 

    /* Reset padding and margin */
    padding: 0.25rem;
    margin: 0;

    /* Reset box-sizing and width */
    box-sizing: border-box;
    width: 100%; /* Set the width as needed */

    /* Reset other styles */
    cursor: pointer; /* Change cursor style to indicate interaction */
    outline: none; /* Remove default focus outline, consider custom focus styles for accessibility */
}
`;

export default GlobalStyle;