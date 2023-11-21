import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, THEME } from '@app/theme';
import { Analytics } from '@vercel/analytics/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import '../theme/fonts.css';
import Head from '@app/components/head';

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={THEME}>
        <GlobalStyle />
        <Head />
        <Component {...pageProps} />
        <Analytics />
      </ThemeProvider>
    </QueryClientProvider>
  );
}
