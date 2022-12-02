import '@/styles/index.css';
import { AppProps } from 'next/app';
import { Inter } from '@next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const Website = ({ Component, pageProps, router }: AppProps) => (
  <div className={`${inter.variable} font-sans`}>
    <Component {...pageProps} key={router.route} />
  </div>
);

export default Website;
