import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Lato:wght@900&family=Montserrat:wght@600&display=swap');

  body{
    background-color:#0f0f0f;
    z-index: -9999;
    font-family: 'Lato', sans-serif;
    font-family: 'Montserrat', sans-serif;
  }



`;

export default GlobalStyle;
