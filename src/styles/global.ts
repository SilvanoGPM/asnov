import { createGlobalStyle } from 'styled-components';

import spyagencyFont from './fonts/spyagency3.ttf';
import latoFont from './fonts/lato.ttf';
import latoBlackFont from './fonts/lato-black.ttf';
import latoBoldFont from './fonts/lato-bold.ttf';
import latoLightFont from './fonts/lato-light.ttf';

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Spyagency';
        src: url(${spyagencyFont}) format('truetype');
        font-display: swap;
    }

    @font-face {
        font-family: 'Lato';
        src: url(${latoFont}) format('truetype');
        font-display: swap;
    }

    @font-face {
        font-family: 'Lato';
        src: url(${latoBlackFont}) format('truetype');
        font-weight: 900;
        font-display: swap;
    }

    @font-face {
        font-family: 'Lato';
        src: url(${latoBoldFont}) format('truetype');
        font-weight: bold;
        font-display: swap;
    }

    @font-face {
        font-family: 'Lato';
        src: url(${latoLightFont}) format('truetype');
        font-weight: lighter;
        font-display: swap;
    }

    :root {
        --brand-500: #336645;
        --brand-100: #11f561;
        --text-900: #010101;
        --text: #111111;
        --background: #f0f2f5;
        --gray: #333333;
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

        scrollbar-width: thin;

        &::-webkit-scrollbar  { width: 9px }

        &::-webkit-scrollbar-track { background-color: transparent }

        &::-webkit-scrollbar-thumb {
          background-color: rgba(155, 155, 155, 0.5);
          border: transparent
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
