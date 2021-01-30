import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

html {
    /* happy rems */
    font-size: 62.5%;
    font-family: 'PT Sans', sans-serif;
}

body {
    background: ${({ theme }) => theme.bgColors.tertiary};
    font-size: 1.6rem;
}
`;

export default GlobalStyle;
