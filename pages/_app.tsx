import { ChakraProvider } from '@chakra-ui/react';
import { AnimatePresence } from 'framer-motion';
import Layout from 'layouts/Main';
import theme from 'lib/theme';
import { AppProps } from 'next/app';

const Website = ({ Component, pageProps, router }: AppProps) => (
  <ChakraProvider theme={theme}>
    <Layout router={router}>
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
    </Layout>
  </ChakraProvider>
);

export default Website;
