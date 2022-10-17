import {
  Box,
  HStack,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverTrigger,
  SimpleGrid,
  Tag,
  Text,
} from '@chakra-ui/react';
import { BlogGridItem } from 'components/GridItem';
import { Blog } from 'contentlayer/generated';
import { getMember } from 'lib/getAllMembers';
import useBlogSearch from 'lib/hooks/useBlogSearch';
import Avatar from 'components/Avatar';
import Member from 'components/Member';
import SearchInput from 'components/SearchInput';
import TagCheckboxGroup from 'components/TagCheckboxGroup';
import Layout from 'components/layouts/Article';

const Blog = () => {
  const search = useBlogSearch();

  return (
    <Layout>
      <Box>
        <Box maxWidth='xl' mt={8} mb={6}>
          <SearchInput
            placeholder='Search blog'
            defaultValue={search.defaultValue}
            onChange={value => {
              search.setParams(value);
            }}
          />
        </Box>
        <TagCheckboxGroup
          data={search.tags}
          isChecked={item => search.filters.includes(item)}
          onChange={({ checked, value }) => {
            if (checked) search.addTag(value);
            else search.removeTag(value);
          }}
        />
      </Box>
      <SimpleGrid columns={{ base: 1, md: 2 }} gap={6} mt={6}>
        {search.results
          .sort(
            (a: Blog, b: Blog) =>
              new Date(b.frontMatter.publishedDate.raw).valueOf() -
              new Date(a.frontMatter.publishedDate.raw).valueOf()
          )
          .map(item => {
            const authorInfo = getMember(item.author);

            return (
              <Box key={item._id} mb={6}>
                <BlogGridItem
                  slug={item.slug}
                  title={item.title}
                  image={item.image}
                  description={item.description}
                >
                  {item.tags?.map(tag => (
                    <Tag fontWeight='bold' mt={2} colorScheme='teal' key={tag} mr={1}>
                      {tag}
                    </Tag>
                  ))}
                  <HStack mt={2}>
                    <Box>
                      <Popover isLazy trigger='hover' id='author-info' placement='top'>
                        <PopoverTrigger>
                          <Box>
                            <Avatar src={authorInfo.avatarUrl} size={36} alt={authorInfo.name} />
                          </Box>
                        </PopoverTrigger>
                        <PopoverContent maxW={{ base: 240, sm: 320 }} rounded='lg' p={1}>
                          <PopoverArrow />
                          <PopoverCloseButton />
                          <PopoverBody>
                            <Member member={authorInfo} />
                          </PopoverBody>
                        </PopoverContent>
                      </Popover>
                    </Box>
                    <Box color='gray.500' cursor='pointer'>
                      <Text fontWeight='bold' fontSize='sm'>
                        {item.author}
                      </Text>
                      <Text fontSize='xs' color='gray.500'>
                        {item.frontMatter.publishedDate.text} &bull;{' '}
                        {item.frontMatter.readingTime.text}
                      </Text>
                    </Box>
                  </HStack>
                </BlogGridItem>
              </Box>
            );
          })}
      </SimpleGrid>
    </Layout>
  );
};

export default Blog;
