import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    html {
        font-size: 62.5%;
        -webkit-font-smoothing: antialiased;
        -moz-osx-smoothing: grayscale;
    }

    main {
        background: #000;
        display: flex;
        flex-direction: column;
        flex: 1;
    }

    ol,
    ul {
        list-style: none;
    }

    a {
        text-decoration: none;
    }

    @keyframes fade-in {
        from {
            opacity: 0;
        }
        to {
            opacity: 100;
        }
    }
`;

export default GlobalStyle;
