import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
  }
  html,
  body {
    margin: 0;
    font-family: "Work Sans", sans-serif;
    font-size: 62.5%;
    line-height: 1.4;
    background: #D8DBE2;
    
    > div {
      margin-top: 0;
    }
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: #222;
    line-height: 1.1;
  }

  h2 {
    font-size: 2.5rem
  }

  strong {
    color: #222;
  }

  p {
    font-size: 1.6rem;
  }

  ul {
    list-style: none;
    padding-left: 0;
  }

  li {
    margin-top: 0.25rem;
    font-size: 1.6rem;
  }
`;
