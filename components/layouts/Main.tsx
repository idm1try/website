import { Box, Container } from '@chakra-ui/react';
import GoToTopButton from 'components/GoToTopButton';
import Head from 'next/head';
import { ReactNode } from 'react';
import Footer from '../Footer';
import Navbar from '../Navbar';

interface Props {
  children: ReactNode;
  router: {
    asPath: string;
  };
}

const Main = ({ children, router }: Props) => {
  return (
    <Box as='main' pb={8}>
      <Head>
        <title>idm1try blog</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='description' content='idm1try blog' />
        <meta name='author' content='idm1try' />
        <meta name='twitter:title' content='idm1try-blog' />
        <meta name='twitter:site' content='@idm1try' />
        <meta name='twitter:creator' content='@idm1try' />
        <meta property='og:site_name' content='idm1try-blog' />
        <meta name='og:title' content='idm1try-blog' />
        <meta property='og:type' content='website' />
      </Head>

      <Navbar path={router.asPath} />

      <Container maxW='container.md' pt={14}>
        {children}
      </Container>
      <Footer />
      <GoToTopButton />
    </Box>
  );
};

export default Main;
