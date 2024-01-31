'use client'

import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    :root {
        --white: #FFFFFF;
        
        --grey-100: #1A1A1A;
        --grey-200: #202020;
        --grey-300: #242424;
        --grey-400: #2B2B2B;
        --grey-500: #5E5E5E;
        --grey-700: #C1C1C1;

        --green-100: #ADF1D5;
        --green-300: #00CE78;

        --grey-highlight: rgba(255,255,255, 0.1);
        --green-highlight: rgba(0,206,120, 0.1);
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
        color: var(--white);
        background-color: var(--grey-200);
    }

    a {
        color: inherit;
    }
`;

export { GlobalStyles };
