import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    }

    *,
    *::before,
    *::after {
        box-sizing: inherit;
    }

    body {
        margin: 0;
        background-color: #f0f0f0;
        font-family: Roboto, sant-serif;
        font-size: 20px;
        color: black;
    }

    img {
        max-width: 100%;
        height: auto;
    }

    a {
        text-decoration: none;
    }

    ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    h1, h2, h3 {
        cursor: default;
        font-family: Pacifico, sant-serif;
        padding: 0;
        margin: 0;
    }

    p {
        padding: 0;
        margin: 0;
    }

    button {
        cursor: pointer;
    }

    input, button {
        font: inherit;
    }

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
    }
`;