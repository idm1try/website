import { Box, Button, Text } from '@chakra-ui/react';
import ChakraNextImage from 'components/ChakraNextImage';
import Layout from 'layouts/Article';
import NextLink from 'next/link';
import { TbHome } from 'react-icons/tb';

const NotFound = () => {
  return (
    <Layout title='404: Not found' description='Page not found'>
      <Box textAlign='center' mt={5}>
        <ChakraNextImage
          alignItems='center'
          justifyContent='center'
          src='/travolta.webp'
          height='500'
          width='500'
          alt='Travola Lost'
          filter='brightness(1.25) contrast(1.25) grayscale(100%)'
        />
        <Text color='gray.500' my={6}>
          Whoops, it looks like the page you were looking for doesn&apos;t exist!
        </Text>
        <NextLink href='/'>
          <Button colorScheme='teal' leftIcon={<TbHome />}>
            Go to Home
          </Button>
        </NextLink>
      </Box>
    </Layout>
  );
};

export default NotFound;
