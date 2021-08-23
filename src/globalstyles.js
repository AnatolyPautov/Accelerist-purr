import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    html, body {
    background: #F9F9F9;
    box-sizing: border-box;
    padding: 0;
    height: 100%;
    overflow-x: auto;
    margin: 0;
    font-family: 'Rubik', sans-serif;
    }
    *{padding: 0;margin: 0;border: 0;}
    *,*:before,*:after{-moz-box-sizing: border-box;-webkit-box-sizing: border-box;box-sizing: border-box;}
`;

export default GlobalStyle;
