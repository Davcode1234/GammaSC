import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  html {
    font-size: 62.5%;
  }
  
  body {
    margin: 0;
    padding: 0;
    font-size: 1.6rem;
    font-family: Montserrat, sans-serif;
    font-weight: 400;
    overflow-x: hidden;
  }

  h1,h2,h3,h4,h5,h6, p, li, a  {
    margin: 0;
  }
  
`;
