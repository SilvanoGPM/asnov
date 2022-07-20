import { createGlobalStyle } from 'styled-components';

import spyagencyFont from './fonts/spyagency3.ttf';
import latoFont from './fonts/lato.ttf';

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Spyagency';
        src: url(${spyagencyFont}) format('truetype');
    }

    @font-face {
        font-family: 'Lato';
        src: url(${latoFont}) format('truetype');
    }

    :root {
        --blue-500: #08124b;
        --blue-100: #15f4ee
        --white: #ffffff;
        --text: #111111;
        --background: #f0f2f5;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        @media (max-width: 1080px) {
            font-size: 93.75% // 15px
        }

        @media (max-width: 720px) {
            font-size: 87.5%; // 14px
        }
    }

    body {
        background: var(--background);
        color: var(--text);
        -webkit-font-smoothing: antialised;
        font-family: 'Lato';
    }

    body, input, button, textarea {
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
        font-family: 'Lato';
    }

    button {
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }
`;
