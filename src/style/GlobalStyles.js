import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;  
    box-sizing: border-box;

  }
  html {
    font-size: 62.5%; // 1rem = 10px; 10px/16px = 62.5%
    height: 100%;
    width: 100%;
  }
  body {
    height: 100%;
    width: 100%;
    min-height: 100vh;
    text-align: center;
    font-size: 1.6rem;
  }
  input,
  select,
  button {
    /* -webkit-appearance: none; */
    background: none;
    border: none;
    font-size: inherit;
    color: inherit;
    &:focus {
      outline: none;
    }
    &:disabled {
      cursor: not-allowed;
    }
  }
  a,
  button {
    cursor: pointer;
  }
  a{
    text-decoration: none;
    color:inherit;
  }
`;

export default GlobalStyle;
