import { Box, Button, Text } from '@chakra-ui/react';
import Image from 'components/Image';
import Layout from 'layouts/Article';
import NextLink from 'next/link';
import { TbHome } from 'react-icons/tb';

const NotFound = () => (
  <Layout title='404: Not found' description='Page not found'>
    <Box textAlign='center' mt={5}>
      <Image
        alignItems='center'
        justifyContent='center'
        src='/404.webp'
        height={300}
        width={500}
        objectFit='cover'
        w='100%'
        alt='Meme'
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

export default NotFound;
