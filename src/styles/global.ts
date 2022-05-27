import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #FFFFFF;
    --grey: #F2F2F2;

    --buttonAddgreen: #40D9B8;

    --text-input: #909090;
    --text-input-content: #303030;
    --text-modal: #606060;

  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  html{
        @media(max-width: 1080px){
            font-size: 92.75%;
        }
        @media(max-width: 720px){
            font-size: 87.5%;
        }
    }
    body{
      background: var(--background);
        -webkit-font-smoothing: antialiased;
    }
    body, input, button{
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
    }
`;
