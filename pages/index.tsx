import { Box, SimpleGrid } from '@chakra-ui/react';
import { BlogGridItem } from 'components/GridItem';
import { allBlogs, Blog } from 'contentlayer/generated';
import Layout from 'layouts/Article';

const Home = () => {
  return (
    <Layout>
      <SimpleGrid columns={{ base: 1, md: 2 }} gap={6} mt={6}>
        {allBlogs
          .sort(
            (a: Blog, b: Blog) =>
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

export default Home;
