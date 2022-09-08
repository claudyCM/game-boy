import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --primary: ${({ theme }) => theme.colors.primary};
  }
  
  * {
    font-family: Courier New;
    color: #333;
    box-sizing: border-box;
  }

  body {
    max-width: 1218px;
    margin: 0;
    padding: 0;
    padding-left: 16px;
    padding-right: 16px;
    margin: auto;
  }
`;

export default GlobalStyle;
