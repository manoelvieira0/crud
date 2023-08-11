import { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`

    html {
        font-size: 62.5%; //10px
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
    }

    body {
        width: 100vw;
        height: 100vh;
        display: flex;
        justify-content: center;
        background-color: #F2F2F2;
        font-size: 1.6rem; //16px
    }

    body, button, textarea {
        font-family: 'Poppins', sans-serif;
    }
`;

export default Global;