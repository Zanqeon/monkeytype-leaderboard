import type { AppProps } from 'next/app';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyle, THEME } from '../theme';
import '../theme/fonts.css';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100dvh;
  position: relative;
  top: 0;
  @supports (-webkit-touch-callout: none) {
    min-height: -webkit-fill-available;
  }
`;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppContainer>
      <GlobalStyle />
      <ThemeProvider theme={THEME}>
        <Component {...pageProps} />
      </ThemeProvider>
    </AppContainer>
  );
}
