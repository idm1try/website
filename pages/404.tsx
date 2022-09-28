import { Box, Button, Heading, Text } from '@chakra-ui/react';
import NextLink from 'next/link';
import { TbHome } from 'react-icons/tb';
import Layout from 'layouts/Article';

const NotFound = () => {
  return (
    <Layout title='404: Not found' description='Page not found'>
      <Box textAlign='center' mt={5}>
        <Heading display='inline-block' as='h2' size='2xl' color='accent'>
          404
        </Heading>
        <Text fontSize='18px' mt={3} mb={2}>
          Page Not Found
        </Text>
        <Text color='gray.500' mb={6}>
          The page you&apos;re looking for does not seem to exist
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
