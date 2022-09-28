import SEO from 'components/seo';
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
  return (
    <motion.article
      initial='hidden'
      animate='enter'
      exit='exit'
      variants={variants}
      transition={{ duration: 0.4, type: 'easeInOut' }}
      style={{ position: 'relative' }}
    >
      <SEO title={title} description={description} />
      {children}

      <GridItemStyle />
    </motion.article>
  );
};

export default Layout;
