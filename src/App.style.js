import { createGlobalStyle } from "styled-components";
import bg from './assets/background.png'


export const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
  }
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }
  body {
    background-image: url(${bg});
    background-size: cover;
  }
`
