import { Box, Container } from '@chakra-ui/react';
import GoToTopButton from 'components/GoToTopButton';
import { getSeo } from 'lib/seo';
import { DefaultSeo } from 'next-seo';
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
  const seo = getSeo();

  return (
    <Box as='main' pb={8}>
      <Head>
        <meta content='IE=edge' httpEquiv='X-UA-Compatible' />
        <meta content='width=device-width, initial-scale=1' name='viewport' />
        <meta name='theme-color' content='#319795' />
      </Head>

      <DefaultSeo {...seo} />

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
