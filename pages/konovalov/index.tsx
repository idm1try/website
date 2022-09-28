import { Box, Heading, SimpleGrid, Text } from '@chakra-ui/react';
import { BlogGridItem } from 'components/GridItem';
import { allKonovalovs, Konovalov } from 'contentlayer/generated';
import Layout from 'layouts/Article';

const Konovalov = () => {
  return (
    <Layout
      title='Aleksey Konovalov'
      description='Alexey konovalovich - самый донный хайпатошный канал, будьте в курсе волный хайпатоша'
      image='https://idm1try-blog.vercel.app/posts/konovalov/avatar.jpg'
    >
      <Box my={100} textAlign='center'>
        <Heading>Aleksey Konovalov</Heading>
        <Text color='gray.500' mt={2}>
          Alexey konovalovich - самый донный хайпатошный канал, будьте в курсе волный хайпатоша
        </Text>
      </Box>
      <SimpleGrid columns={[1, 1, 2]} gap={6} mt={6}>
        {allKonovalovs
          .sort(
            (a: Konovalov, b: Konovalov) =>
              new Date(b.frontMatter.publishedDate.raw).valueOf() -
              new Date(a.frontMatter.publishedDate.raw).valueOf()
          )
          .map(item => (
            <Box key={item._id} mb={6}>
              <BlogGridItem slug={item.slug} title={item.title} thumbnail={item.thumbnail}>
                {item.description} &bull; <b>{item.author}</b> &bull;{' '}
                {item.frontMatter.publishedDate.text}
              </BlogGridItem>
            </Box>
          ))}
      </SimpleGrid>
    </Layout>
  );
};

export default Konovalov;
