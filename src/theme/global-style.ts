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

    @keyframes typing {
        from { width: 0 }
        to { width: 100% }
    }

    @keyframes caret {
        0% { border-color: #FF3E8A }
        99% { border-color: #FF3E8A }
        100% { border-color: transparent }
    }
`;

export default GlobalStyle;
