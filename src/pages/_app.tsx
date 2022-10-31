import { Auth0Provider } from '@auth0/auth0-react';
import { ChakraProvider } from '@chakra-ui/react';
import { AnimatePresence } from 'framer-motion';
import { getSeo } from 'lib/seo';
import theme from 'lib/theme';
import { DefaultSeo } from 'next-seo';
import { AppProps } from 'next/app';
import Head from 'next/head';

const Website = ({ Component, pageProps, router }: AppProps) => (
  <Auth0Provider
    clientId={process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID}
    domain={process.env.NEXT_PUBLIC_AUTH0_DOMAIN}
  >
    <ChakraProvider theme={theme}>
      <Head>
        <meta content='IE=edge' httpEquiv='X-UA-Compatible' />
        <meta content='width=device-width, initial-scale=1' name='viewport' />
        <link rel='icon' type='image/png' sizes='96x96' href='/favicon.png' />
        <link rel='apple-touch-icon' href='apple-touch-icon.png' />
        <meta name='theme-color' content='#319795' />
      </Head>

      <DefaultSeo {...getSeo()} />

      <AnimatePresence
        mode='wait'
        initial={true}
        onExitComplete={() => {
          if (typeof window !== 'undefined') {
            window.scrollTo({ top: 0 });
          }
        }}
      >
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </ChakraProvider>
  </Auth0Provider>
);

export default Website;
