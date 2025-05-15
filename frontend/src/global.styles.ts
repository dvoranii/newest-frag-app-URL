import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500&family=Lora&family=Montserrat:wght@500;600&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap');

  body {
    font-family: 'Inter', sans-serif;
    font-display: swap;
  }
`;

export default GlobalStyles;