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
import { Blog, Konovalov } from 'contentlayer/generated';
import { getMember } from 'lib/getAllMembers';
import Avatar from './Avatar';
import Member from './Member';

const ArticleList = ({ data }: { data: Blog[] | Konovalov[] }) => (
  <SimpleGrid columns={{ base: 1, md: 2 }} gap={6} mt={6}>
    {data
      .sort(
        (a: Blog | Konovalov, b: Blog | Konovalov) =>
          new Date(b.frontMatter.publishedDate.raw).valueOf() -
          new Date(a.frontMatter.publishedDate.raw).valueOf()
      )
      .map(item => {
        const authorInfo = getMember(item.author);

        return (
          <Box key={item._id} mb={6}>
            <BlogGridItem slug={item.slug} title={item.title} thumbnail={item.thumbnail}>
              {item.description && (
                <Box mt={1} color='gray.500'>
                  {item.description}
                </Box>
              )}
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
                    <PopoverContent maxW={{ base: 240, sm: 320 }}>
                      <PopoverArrow />
                      <PopoverCloseButton />
                      <PopoverBody>
                        <Member member={authorInfo} />
                      </PopoverBody>
                    </PopoverContent>
                  </Popover>
                </Box>
                <Box color='gray.500'>
                  <Text fontWeight='bold' fontSize='sm'>
                    {item.author}
                  </Text>
                  <Text fontSize='xs' color='gray.500'>
                    {item.frontMatter.publishedDate.text}
                  </Text>
                </Box>
              </HStack>
            </BlogGridItem>
          </Box>
        );
      })}
  </SimpleGrid>
);

export default ArticleList;
