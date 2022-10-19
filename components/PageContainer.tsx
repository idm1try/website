import { Box, Container } from '@chakra-ui/react';
import GoToTopButton from 'components/GoToTopButton';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import SEO from './Seo';

interface Props {
  title?: string;
  description?: string;
  image?: string;
  children: ReactNode;
  post?: {
    date?: string;
    tags?: string[];
  };
}

const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: -0, y: 20 },
};

const PageContainer = ({ children, title, description, image, post }: Props) => (
  <Box as='main' pb={8}>
    <SEO title={title} description={description} image={image} post={post} />

    <Navbar />

    <motion.div
      initial='hidden'
      animate='enter'
      exit='exit'
      variants={variants}
      transition={{ duration: 0.4, ease: 'easeInOut' }}
      style={{ position: 'relative' }}
    >
      <Container maxW='container.md' pt={14}>
        {children}
      </Container>
    </motion.div>

    <Footer />
    <GoToTopButton />
  </Box>
);

export default PageContainer;
