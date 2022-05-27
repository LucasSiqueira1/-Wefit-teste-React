import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
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
        -webkit-font-smoothing: antialiased;
    }
    body, input, button{
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
    }
`