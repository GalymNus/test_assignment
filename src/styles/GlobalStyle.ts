import { createGlobalStyle } from "styled-components";
import MontserratVar from "../assets/fonts/Montserrat-Variable.ttf";

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Montserrat';
    src: url(${MontserratVar}) format('truetype-variations');
    font-weight: 100 900; 
    font-style: normal;
    font-display: swap;
    
  }

  body {
    font-family: 'Montserrat', sans-serif;
    background: linear-gradient(270deg, #06225D 0%, #02011F 37.03%);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0;
    margin: 0;

  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
  }


  :root {
    // не стал добавлять глобальные переменные так как мало общих цветов и атрибутов
  }
`;
