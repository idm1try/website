import {
  Box,
  Divider,
  Heading,
  HStack,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverTrigger,
  Tag,
  Text,
} from '@chakra-ui/react';
import Avatar from 'components/Avatar';
import Image from 'components/Image';
import Member from 'components/Member';
import TableOfContent from 'components/TableOfContents';
import { ReactNode } from 'react';
import Layout from './Article';

interface FrontmatterHeading {
  level: string | number;
  text: string;
  id: string;
}

interface BlogLayoutProps {
  frontmatter: {
    publishedDate: {
      raw: string;
      iso: string;
      text: string;
    };
    image: {
      raw: string;
      url: string;
    };
    authorData: {
      name: string;
      url?: string;
      bio?: string;
      avatarUrl?: string;
      twitterUsername?: string;
    };
    readingTime: {
      text: string;
    };
    author: string;
    description: string;
    title: string;
    tags: string[];
    headings: FrontmatterHeading[];
  };
  children: ReactNode;
}

const BlogLayout = (props: BlogLayoutProps) => {
  const { frontmatter, children } = props;

  if (!frontmatter) return <></>;

  const { publishedDate, authorData, headings } = frontmatter;

  return (
    <Box>
      <Layout
        title={frontmatter.title}
        description={frontmatter.description}
        image={frontmatter.image.url}
        post={{ date: frontmatter.publishedDate.iso, tags: frontmatter.tags }}
      >
        <HStack my={6}>
          <Box>
            <Popover isLazy trigger='hover' id='author-info'>
              <PopoverTrigger>
                <Box>
                  <Avatar src={authorData.avatarUrl} size={48} alt={authorData.name} />
                </Box>
              </PopoverTrigger>
              <PopoverContent maxW={{ base: 240, sm: 320 }} rounded='lg' p={1}>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverBody>
                  <Member member={authorData} />
                </PopoverBody>
              </PopoverContent>
            </Popover>
          </Box>
          <Box>
            <Text fontWeight='bold' fontSize='sm'>
              {authorData.name}
            </Text>
            <Text fontSize='xs' color='gray.500'>
              {publishedDate.text} &bull; {frontmatter.readingTime.text}
            </Text>
          </Box>
        </HStack>
        {frontmatter.image.raw && (
          <Image
            src={frontmatter.image.raw}
            alt={frontmatter.title}
            height={350}
            width={750}
            objectFit='cover'
            rounded='lg'
            my={4}
          />
        )}
        <Heading fontSize='3xl' my={1}>
          {frontmatter.title}
        </Heading>
        <Text color='gray.500'>{frontmatter.description}</Text>
        {frontmatter.tags?.map(tag => (
          <Tag fontWeight='bold' mt={2} colorScheme='teal' key={tag} mr={1}>
            {tag}
          </Tag>
        ))}
        <Divider my={4} />

        {children}
      </Layout>

      <TableOfContent
        visibility={headings.length === 0 ? 'hidden' : 'initial'}
        headings={headings}
      />
    </Box>
  );
};

export default BlogLayout;
