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
import { MDXComponents } from 'components/mdxComponents';
import Member from 'components/Member';
import PageContainer from 'components/PageContainer';
import TableOfContent from 'components/TableOfContents';
import { allBlogs, Blog } from 'contentlayer/generated';
import { getMember } from 'lib/getAllMembers';
import { getAbsoluteURL } from 'lib/routerUtils';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useMDXComponent } from 'next-contentlayer/hooks';

const Page = ({ blog, ogImageUrl }: { blog: Blog; ogImageUrl: string }) => {
  const Component = useMDXComponent(blog.body.code);
  const authorData = getMember(blog.author);

  return (
    <Box>
      <PageContainer
        title={blog.title}
        description={blog.description}
        image={ogImageUrl}
        post={{ date: blog.frontMatter.publishedDate.iso, tags: blog.tags }}
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
              {blog.frontMatter.publishedDate.text} &bull; {blog.frontMatter.readingTime.text}
            </Text>
          </Box>
        </HStack>
        {blog.frontMatter.image.raw && (
          <Image
            src={blog.frontMatter.image.raw}
            alt={blog.title}
            height={350}
            width={750}
            objectFit='cover'
            rounded='lg'
            my={4}
          />
        )}
        <Heading fontSize='3xl' my={1}>
          {blog.title}
        </Heading>
        <Text color='gray.500'>{blog.description}</Text>
        {blog.tags?.map(tag => (
          <Tag fontWeight='bold' mt={2} colorScheme='teal' key={tag} mr={1}>
            {tag}
          </Tag>
        ))}
        <Divider my={4} />

        <Component components={MDXComponents} />
      </PageContainer>

      <TableOfContent
        visibility={blog.frontMatter.headings.length === 0 ? 'hidden' : 'initial'}
        headings={blog.frontMatter.headings}
      />
    </Box>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const blogs = allBlogs
    .map(t => t._id.replace('blog/', '').replace('.mdx', '').replace('index', ''))
    .map(id => ({ params: { slug: [id.replace('blog/', '')] } }));

  return { paths: blogs, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const blogParams = Array.isArray(params.slug) ? params.slug : [params.slug];

  const blog = allBlogs.find(blog => blog._id.includes(blogParams.join('/')));
  const authorData = getMember(blog.author);
  blog.frontMatter.authorData = authorData;

  const searchParams = new URLSearchParams();

  searchParams.set('title', blog.title);
  searchParams.set('description', blog.description);
  searchParams.set('tags', blog.tags?.join(','));
  searchParams.set('date', blog.frontMatter.publishedDate.text);
  searchParams.set('readingTime', blog.frontMatter.readingTime.text);
  searchParams.set('author', blog.author);
  searchParams.set('avatar', authorData.avatarUrl);
  searchParams.set('image', blog.frontMatter.image.raw);

  const ogImageUrl = getAbsoluteURL(`/api/open-graph-image?${searchParams.toString()}`);

  return { props: { blog, ogImageUrl } };
};

export default Page;
