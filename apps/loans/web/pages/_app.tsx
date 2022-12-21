import { ApolloProvider } from '@apollo/client';
import { CacheProvider, EmotionCache } from '@emotion/react';
import { ThemeProvider } from '@mui/material/styles';
import { NextIntlProvider } from 'next-intl';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { FC } from 'react';
import type { messages } from '../public/locales';
import { apolloClient, createEmotionCache, theme } from '../utils';
import './styles.css';

const clientSideEmotionCache = createEmotionCache();

interface CustomAppProps extends AppProps<{ messages: typeof messages }> {
  emotionCache: EmotionCache;
}
const CustomApp: FC<CustomAppProps> = ({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}) => (
  <ApolloProvider client={apolloClient}>
    <CacheProvider value={emotionCache}>
      <NextIntlProvider messages={pageProps.messages}>
        <Head>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </NextIntlProvider>
    </CacheProvider>
  </ApolloProvider>
);

export default CustomApp;
