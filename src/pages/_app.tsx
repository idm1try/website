import { AppProps } from 'next/app';
import '@/styles/index.css';

const Website = ({ Component, pageProps, router }: AppProps) => (
  <Component {...pageProps} key={router.route} />
);

export default Website;
