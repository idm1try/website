import { allPosts, Post } from '.contentlayer/generated'
import Mdx from '@/components/mdx'
import ReadProgress from '@/components/read-progress'
import { DashboardTableOfContents } from '@/components/toc'
import cn from '@/lib/classNames'
import { getTableOfContents, TableOfContents } from '@/lib/toc'
import ErrorPage from 'next/error'
import Head from 'next/head'
import Image from 'next/image'

export const getStaticPaths = async () => {
  return {
    paths: allPosts.map(post => ({
      params: { slug: post.slugAsParams.split('/') },
    })),
    fallback: false,
  }
}

export const getStaticProps = async ({
  params,
}: {
  params: { slug: string[] }
}) => {
  const slug = params?.slug?.join('/')
  const post = allPosts.find(post => post.slugAsParams === slug)
  const toc = await getTableOfContents(post.body.raw)

  return { props: { post, toc } }
}

const Post = ({ post, toc }: { post: Post; toc: TableOfContents }) => {
  if (!post) <ErrorPage statusCode={404} />

  return (
    <div>
      <Head>
        <title>{`${post.title} | idm1try`}</title>
        <meta property='og:type' content='article' />
        <meta property='og:title' content={`${post.title} | idm1try`} />
        <meta property='article:author' content='idm1try' />
        <meta property='article:tag' content={post.tags.join(',')} />

        <meta name='twitter:title' content={`${post.title} | idm1try`} />
        <meta name='twitter:image:alt' content={post.title} />
      </Head>
      <ReadProgress />
      <div>
        <article className='mt-12'>
          <div>
            <h1 className='mb-5 animate-fade_in_up_10 text-5xl font-bold'>
              {post.title}
            </h1>
            <div className='mb-10 flex justify-between'>
              <span className='text-pink-200 dark:text-pink-100'>
                {new Date(post.date).toDateString()}
              </span>
              <span className='text-surface2-200 dark:text-surface2-100'>
                {post.time.text ?? '1 min'}
              </span>
            </div>
            {post.image && (
              <Image
                src={`/assets/posts/${post.image}`}
                alt={`${post.title} Image`}
                width={960}
                height={600}
                loading='eager'
                priority
                className='mb-16 w-full rounded-lg bg-mantle-200 object-cover dark:bg-mantle-100'
              />
            )}
          </div>
          <div
            className={cn(
              'prose prose-lg mx-auto max-w-4xl',
              'text-text-200 dark:text-text-100 dark:prose-dark'
            )}
          >
            <Mdx code={post.body.code} />
          </div>
        </article>
      </div>
      <div className='hidden 2xl:block'>
        <div className='fixed top-16 right-0 w-[25ch] animate-fade_in overflow-y-auto pt-10'>
          <DashboardTableOfContents toc={toc} />
        </div>
      </div>
    </div>
  )
}

export default Post
