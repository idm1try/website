import { AnimatePresence } from 'framer-motion';
import type { AppProps } from 'next/app';
import Chakra from 'components/Chakra';
import Layout from 'layouts/Main';

function Website({ Component, pageProps, router }: AppProps) {
  return (
    <Chakra>
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
    </Chakra>
  );
}

export default Website;
