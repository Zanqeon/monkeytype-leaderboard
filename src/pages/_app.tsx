import type { AppProps } from 'next/app';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyle, THEME } from '@app/theme';
import { Analytics } from '@vercel/analytics/react';
import '../theme/fonts.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import Head from '@app/components/head';

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
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <AppContainer>
        <GlobalStyle />
        <ThemeProvider theme={THEME}>
          <main>
            <Head />
            <Component {...pageProps} />
          </main>
          <Analytics />
        </ThemeProvider>
      </AppContainer>
    </QueryClientProvider>
  );
}
