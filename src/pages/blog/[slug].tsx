import CoverImage from '@/components/CoverImage';
import Layout from '@/components/Layout';
import CodeBlock from '@/components/mdx/CodeBlock';
import ScreenshotLink from '@/components/ScreenshotLink';
import TableOfContent from '@/components/TableOfContents';
import { getTableOfContents } from '@/lib/getTableOfContents';
import { postFilePaths, POSTS_PATH } from '@/lib/mdx/mdxUtils';
import Post from '@/types/post';
import fs from 'fs/promises';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import dynamic from 'next/dynamic';
import ErrorPage from 'next/error';
import Head from 'next/head';
import path from 'path';
import { AnchorHTMLAttributes } from 'react';
import readingTime from 'reading-time';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';

const components = {
  pre: (props: HTMLPreElement) => <CodeBlock {...props} />,
  a: (props: AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a className='border-underline-grow mb-1' {...props} />
  ),
  ScreenshotLink: ScreenshotLink,
};

const ReadProgress = dynamic(() => import('@/components/ReadProgress'), {
  ssr: false,
});

interface Params {
  params: {
    slug: string;
  };
}

interface Props {
  source: any;
  frontMatter: Post;
  slug: string;
}

const Post = ({ source, frontMatter, slug }: Props) => {
  if (!frontMatter?.title) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <>
      <ReadProgress />
      <Layout>
        <Head>
          <title>{`${frontMatter.title} | idm1try`}</title>
          <meta property='og:type' content='article' />
          <meta property='og:title' content={`${frontMatter.title} | idm1try`} />
          <meta property='og:url' content={`https://idm1try.ru/blog/${slug}`} />
          <meta property='og:description' content={frontMatter.excerpt ?? ''} />
          <meta property='article:author' content='idm1try' />
          <meta property='article:tag' content={frontMatter.tags.join(',')} />

          <meta name='twitter:card' content='summary' />
          <meta name='twitter:title' content={`${frontMatter.title} | idm1try`} />
          <meta name='twitter:site' content='@idm1try' />
          <meta name='twitter:description' content={frontMatter.excerpt} />
          <meta name='twitter:image:alt' content={frontMatter.title} />
        </Head>
        <article className='mt-12'>
          <div>
            <h1 className='mb-5 animate-fade_in_up_10 text-5xl font-bold'>{frontMatter.title}</h1>
            <div className='mb-10 flex justify-between'>
              <span className='text-pink-200 dark:text-pink-100'>
                {new Date(frontMatter.date).toDateString()}
              </span>
              <span className='text-surface2-200 dark:text-surface2-100'>
                {frontMatter.time.text ?? '1 min'}
              </span>
            </div>
            {frontMatter.cover && (
              <div className='mb-16 sm:mx-0'>
                <CoverImage
                  title={frontMatter.title}
                  cover={frontMatter.cover}
                  width={970}
                  height={600}
                  loading='eager'
                  priority
                />
              </div>
            )}
          </div>
          <div className='prose prose-lg mx-auto max-w-4xl text-text-200 dark:text-text-100 dark:prose-dark'>
            <MDXRemote {...source} components={components} lazy />
          </div>
        </article>
        <TableOfContent headings={frontMatter.headings} />
      </Layout>
    </>
  );
};

export default Post;

export async function getStaticProps({ params }: Params) {
  const postFilePath = path.join(POSTS_PATH, params.slug, 'index.mdx');
  const source = await fs.readFile(postFilePath);

  const { content, data } = matter(source);

  data.excerpt = content
    .split('\n')
    .filter((item: string) => item?.length)
    .slice(0, 2)
    .join(' ');

  data.time = readingTime(content);
  data.headings = getTableOfContents(content);

  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [
        rehypeSlug,
        [
          rehypeAutolinkHeadings,
          {
            behavior: 'append',
            properties: {
              className: ['ml-2 text-surface2-200 group-hover:opacity-100 dark:text-surface2-100'],
            },
          },
        ],
      ],
    },
    scope: data,
  });

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
      slug: params.slug,
    },
  };
}

export const getStaticPaths = async () => {
  const filePaths = await postFilePaths();
  const paths = filePaths
    .map((path: string) => path.replace(/\.mdx?$/, ''))
    .map((slug: string) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};
