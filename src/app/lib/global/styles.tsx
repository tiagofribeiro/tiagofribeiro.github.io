'use client'

import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    :root {
        --font-color: #FFFFFF;
        --background-color: #202020;
    }

    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    html, body {
        max-width: 100vw;
        overflow-x: hidden;
    }

    body {
        color: var(--font-color);
        background-color: var(--background-color);
    }

    a {
        color: inherit;
    }
`;

export { GlobalStyles };
