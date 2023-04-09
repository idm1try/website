import Mdx from '@/components/mdx'
import { allWritings } from 'contentlayer/generated'
import { notFound } from 'next/navigation'
import React from 'react'
import Balancer from 'react-wrap-balancer'

interface Props {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  return allWritings.map(writing => ({
    slug: writing.slug,
  }))
}

export async function generateMetadata({ params }: Props) {
  const writing = allWritings.find(writing => writing.slug === params.slug)
  const { title, date: publishedTime, slug } = writing

  return {
    title,
    openGraph: {
      title,
      type: 'article',
      publishedTime,
      url: `https://idm1try.ru/writing/${slug}`,
      images: [{ url: `https://idm1try.ru/api/og?title=${title}` }],
    },
    twitter: {
      title,
      images: `https://idm1try.ru/api/og?title=${title}`,
    },
    alternates: {
      canonical: `https://idm1try.ru/writing/${slug}`,
    },
  }
}

const Writing = async ({ params }: Props) => {
  const writing = allWritings.find(writing => writing.slug === params.slug)
  if (!writing) {
    notFound()
  }

  return (
    <article>
      <div>
        <h1 className='mb-5 text-4xl font-bold'>
          <Balancer>{writing.title}</Balancer>
        </h1>
        <p className='mb-5 text-overlay0'>
          {new Date(writing.date).toLocaleString('en-US', {
            month: 'numeric',
            day: 'numeric',
            year: 'numeric',
          })}
        </p>
      </div>
      <Mdx code={writing.body.code} />
    </article>
  )
}

export default Writing
