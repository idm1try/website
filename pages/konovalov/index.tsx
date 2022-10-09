import { Box, Heading, Text } from '@chakra-ui/react';
import ArticleList from 'components/ArticleList';
import { allKonovalovs } from 'contentlayer/generated';
import Layout from 'layouts/Article';

const Konovalov = () => {
  const title = 'Aleksey Konovalov';
  const description =
    'Alexey konovalovich - самый донный хайпатошный канал, будьте в курсе волный хайпатоша';

  return (
    <Layout
      title={title}
      description={description}
      image='https://blog.idm1try.ru/posts/konovalov/avatar.jpg'
    >
      <Box my={100} textAlign='center'>
        <Heading>{title}</Heading>
        <Text color='gray.500' mt={2}>
          {description}
        </Text>
      </Box>
      <ArticleList data={allKonovalovs} />
    </Layout>
  );
};

export default Konovalov;
