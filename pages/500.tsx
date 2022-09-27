import { Box, Heading, Text } from '@chakra-ui/react';
import Layout from 'layouts/Article';

const NotFound = () => {
  return (
    <Layout>
      <Box textAlign='center' mt={5}>
        <Heading display='inline-block' as='h2' size='2xl' color='accent'>
          500
        </Heading>
        <Text fontSize='18px' fontWeight='bold' mt={3} mb={5}>
          Internal Server Error
        </Text>
      </Box>
    </Layout>
  );
};

export default NotFound;
