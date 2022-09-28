import { motion } from 'framer-motion';
import Head from 'next/head';
import { ReactNode } from 'react';
import { GridItemStyle } from '../GridItem';

interface Props {
  title?: string;
  description?: string;
  thumbnail?: string;
  children: ReactNode;
}

const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: -0, y: 20 },
};

const Layout = ({ children, title, description, thumbnail }: Props) => {
  const t = `${title} - idm1try blog`;
  return (
    <motion.article
      initial='hidden'
      animate='enter'
      exit='exit'
      variants={variants}
      transition={{ duration: 0.4, type: 'easeInOut' }}
      style={{ position: 'relative' }}
    >
      <>
        {title && (
          <Head>
            <title>{t}</title>
            <meta name='description' content={description} />

            <meta name='twitter:title' content={t} />
            <meta property='twitter:description' content={description} />
            <meta name='twitter:image' content={thumbnail} />

            <meta property='og:title' content={t} />
            <meta property='og:description' content={description} />
            <meta property='og:image' content={thumbnail} />
          </Head>
        )}
        {children}

        <GridItemStyle />
      </>
    </motion.article>
  );
};

export default Layout;
