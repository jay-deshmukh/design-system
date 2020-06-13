import { createGlobalStyle } from 'styled-components';
import { normalize } from 'polished';
import { primaryFont } from './typography';


export const GlobalStyle = createGlobalStyle`
  ${normalize()}
  html {
    font-size: 16px;
    box-sizingL border-box;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    margin: 10px;
    font-family: ${primaryFont};
  }

  main {
    width: 90%;
    margin: 0 auto;
  }

`