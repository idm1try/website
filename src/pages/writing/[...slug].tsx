import { allPosts, Post } from '.contentlayer/generated'
import Mdx from '@/components/mdx'
import ErrorPage from 'next/error'
import Head from 'next/head'
import React from 'react'
import Balancer from 'react-wrap-balancer'

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
    <>
      <Head>
        <title>{`${post.title} | idm1try`}</title>
        <meta property='og:type' content='article' />
        <meta property='og:title' content={`${post.title} | idm1try`} />
        <meta property='article:author' content='idm1try' />
        <meta property='article:published_time' content={post.date} />
        <meta name='twitter:title' content={`${post.title} | idm1try`} />
        <meta name='twitter:image:alt' content={post.title} />
        <meta
          property='og:image'
          content={`https://idm1try.ru/api/og?heading=${post.title}&date=${post.date}`}
        />
        <meta
          name='twitter:image'
          content={`https://idm1try.ru/api/og?heading=${post.title}&date=${post.date}`}
        />
      </Head>
      <article>
        <div>
          <h1 className='mb-5 text-4xl font-bold'>
            <Balancer>{post.title}</Balancer>
          </h1>
          <p className='mb-5 text-neutral-600 dark:text-neutral-400'>
            {new Date(post.date).toLocaleString('en-US', {
              month: 'numeric',
              day: 'numeric',
              year: 'numeric',
            })}
          </p>
        </div>
        <div className='prose prose-neutral text-neutral-900 prose-blockquote:text-neutral-600 dark:prose-invert dark:text-neutral-100 dark:prose-blockquote:text-neutral-400'>
          <Mdx code={post.body.code} />
        </div>
      </article>
    </>
  )
}

export default Post
