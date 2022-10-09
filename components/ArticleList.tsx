import { Box, SimpleGrid, Tag } from '@chakra-ui/react';
import { BlogGridItem } from 'components/GridItem';
import { Blog, Konovalov } from 'contentlayer/generated';

const ArticleList = ({ data }: { data: Blog[] | Konovalov[] }) => (
  <SimpleGrid columns={{ base: 1, md: 2 }} gap={6} mt={6}>
    {data
      .sort(
        (a: Blog | Konovalov, b: Blog | Konovalov) =>
          new Date(b.frontMatter.publishedDate.raw).valueOf() -
          new Date(a.frontMatter.publishedDate.raw).valueOf()
      )
      .map(item => (
        <Box key={item._id} mb={6}>
          <BlogGridItem slug={item.slug} title={item.title} thumbnail={item.thumbnail}>
            <Box my={1}>
              <b>{item.author}</b> &bull; {item.frontMatter.publishedDate.text}
            </Box>
            <Box>{item.description}</Box>
            {item.tags?.map(tag => (
              <Tag fontWeight='bold' mt={2} colorScheme='teal' key={tag} mr={1}>
                {tag}
              </Tag>
            ))}
          </BlogGridItem>
        </Box>
      ))}
  </SimpleGrid>
);

export default ArticleList;
