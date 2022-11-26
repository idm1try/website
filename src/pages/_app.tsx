import '@/styles/index.css';
import { AppProps } from 'next/app';

const Website = ({ Component, pageProps, router }: AppProps) => (
  <Component {...pageProps} key={router.route} />
);

export default Website;
