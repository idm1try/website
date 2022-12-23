import { allPosts, Post } from '.contentlayer/generated'
import Mdx from '@/components/mdx'
import cn from '@/lib/classNames'
import ErrorPage from 'next/error'
import Head from 'next/head'
import React from 'react'

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

  return { props: { post } }
}

const Post = ({ post }: { post: Post }) => {
  if (!post) return <ErrorPage statusCode={404} />

  return (
    <div>
      <Head>
        <title>{`${post.title} | idm1try`}</title>
        <meta property='og:type' content='article' />
        <meta property='og:title' content={`${post.title} | idm1try`} />
        <meta property='article:author' content='idm1try' />

        <meta name='twitter:title' content={`${post.title} | idm1try`} />
        <meta name='twitter:image:alt' content={post.title} />
        <meta
          property='og:image'
          content={`https://idm1try.ru/api/og?heading=${post.title}&date=${post.date}&readtime=${post.time.text}`}
        />
        <meta
          name='twitter:image'
          content={`https://idm1try.ru/api/og?heading=${post.title}&date=${post.date}&readtime=${post.time.text}`}
        />
      </Head>
      <article>
        <div>
          <h1 className='mb-3 animate-in text-4xl font-bold'>{post.title}</h1>
          <div
            className='mb-7 animate-in text-neutral-600 dark:text-neutral-400'
            style={{ '--index': 1 } as React.CSSProperties}
          >
            {new Date(post.date).toLocaleString('en-US', {
              month: 'short',
              day: '2-digit',
              year: 'numeric',
            })}{' '}
            / {post.time.text}
          </div>
        </div>
        <div
          className={cn(
            'prose-md prose prose-neutral dark:prose-invert',
            'animate-in prose-blockquote:text-neutral-600',
            'text-neutral-900 dark:text-neutral-100',
            'dark:prose-blockquote:text-neutral-400'
          )}
          style={{ '--index': 2 } as React.CSSProperties}
        >
          <Mdx code={post.body.code} />
        </div>
      </article>
    </div>
  )
}

export default Post
