import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
  ${reset}

  body {
    font-family: 'Roboto', sans-serif;
    background-color: #fff;
    color: #0f0f0f
  }
  a {
    text-decoration: none;
    color: #0F0F0F;
  }
  ::selection {
    color: white;
    background-color: #2358c5;
  }
  .swiper-rtl > .swiper-wrapper {
    transition-timing-function : linear;
  }

`;

export default GlobalStyles;
