import { Box, Divider, Heading, Text } from '@chakra-ui/react';
import { MDXComponents } from 'components/mdxComponents';
import { allKonovalovs } from 'contentlayer/generated';
import BlogLayout from 'layouts/Blog';
import { getMember } from 'lib/getAllMembers';
import { GetStaticPaths, InferGetStaticPropsType } from 'next';
import { useMDXComponent } from 'next-contentlayer/hooks';
import Image from 'next/image';

export default function Page({ blog }: InferGetStaticPropsType<typeof getStaticProps>) {
  const Component = useMDXComponent(blog.body.code);

  return (
    <BlogLayout frontmatter={blog.frontMatter}>
      {blog.thumbnail && (
        <Box my={4}>
          <Image
            src={blog.thumbnail}
            alt={blog.title}
            className='grid-item-thumbnail'
            height={350}
            width={750}
            objectFit='cover'
          />
        </Box>
      )}
      <Heading fontSize='3xl' my={1}>
        {blog.title}
      </Heading>
      <Text color='gray.500'>{blog.description}</Text>
      <Divider my={4} />
      <Component components={MDXComponents} />
    </BlogLayout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const blogs = allKonovalovs
    .map(t => t._id.replace('konovalov/', '').replace('.mdx', '').replace('index', ''))
    .map(id => ({ params: { slug: [id.replace('konovalov/', '')] } }));

  return { paths: blogs, fallback: false };
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getStaticProps = async (ctx: any) => {
  const params = Array.isArray(ctx.params.slug) ? ctx.params.slug : [ctx.params.slug];

  const blog = allKonovalovs.find(blog => blog._id.includes(params.join('/')));
  const authorData = getMember(blog.frontMatter.author);

  blog.frontMatter.authorData = authorData;

  return { props: { blog } };
};
