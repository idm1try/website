import {
  Box,
  Heading,
  HStack,
  Icon,
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
import Avatar from 'components/Avatar';
import BlogGridItem from 'components/BlogGridItem';
import Member from 'components/Member';
import PageContainer from 'components/PageContainer';
import SearchInput from 'components/SearchInput';
import TagCheckboxGroup from 'components/TagCheckboxGroup';
import { Blog } from 'contentlayer/generated';
import useBlogSearch from 'hooks/useBlogSearch';
import { getMember } from 'lib/getAllMembers';
import NextLink from 'next/link';
import { TbSearch } from 'react-icons/tb';

const Blog = () => {
  const search = useBlogSearch();

  return (
    <PageContainer>
      <Box>
        <Box w='full' mt={8} mb={6}>
          <SearchInput
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
      {search.results.length !== 0 ? (
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
                      <NextLink href={`/?filter=${tag}`} key={tag}>
                        <Tag
                          fontWeight='bold'
                          mt={2}
                          colorScheme='teal'
                          mr={1}
                          _hover={{ color: 'teal.500' }}
                        >
                          {tag}
                        </Tag>
                      </NextLink>
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
      ) : (
        <Box textAlign='center' my={100} noOfLines={3}>
          <Icon as={TbSearch} fontSize='6xl' mb={2} />
          <Heading>No results for &quot;{search.defaultValue}&quot;</Heading>
        </Box>
      )}
    </PageContainer>
  );
};

export default Blog;
