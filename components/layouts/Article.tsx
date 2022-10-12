import SEO from 'components/Seo';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface Props {
  title?: string;
  description?: string;
  image?: string;
  children: ReactNode;
}

const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: -0, y: 20 },
};

const Layout = ({ children, title, description, image }: Props) => {
  return (
    <motion.article
      initial='hidden'
      animate='enter'
      exit='exit'
      variants={variants}
      transition={{ duration: 0.4, ease: 'easeInOut' }}
      style={{ position: 'relative' }}
    >
      <SEO title={title} description={description} image={image} />
      {children}
    </motion.article>
  );
};

export default Layout;
