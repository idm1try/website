import LastPostCard from '@/components/last-post-card'
import PostCard from '@/components/post-card'
import cn from '@/lib/classNames'
import { allPosts, Post } from 'contentlayer/generated'
import Head from 'next/head'
import { useState } from 'react'

const Blog = () => {
  const [searchValue, setSearchValue] = useState('')
  const filteredPosts = allPosts.filter(post => {
    const searchContent = post.title + post.tags.join(' ')
    return searchContent.toLowerCase().includes(searchValue.toLowerCase())
  })
  const sortedPosts = filteredPosts.sort((post1: Post, post2: Post) =>
    post1.date > post2.date ? -1 : 1
  )

  return (
    <div>
      <Head>
        <title>blog | idm1try</title>
        <meta property='og:title' content='blog | idm1try' />
        <meta name='twitter:title' content='blog | idm1try' />
      </Head>
      <h1 className='mb-12 animate-fade_in_up_10 text-6xl font-bold tracking-tight'>
        blog.
      </h1>
      <input
        onChange={e => setSearchValue(e.target.value)}
        placeholder='Search posts'
        className={cn(
          'transition-all duration-300',
          'ring-offset-4 ring-offset-base-200',
          'py-2 px-4 outline-none ring-mauve-200',
          'mb-12 w-full rounded-lg bg-mantle-200',
          'placeholder:text-surface2-200 hover:ring-2',
          'focus:ring-2 dark:bg-mantle-100 dark:ring-mauve-100',
          'dark:ring-offset-base-100 dark:placeholder:text-surface2-100'
        )}
      />
      {sortedPosts.length ? (
        <div>
          <LastPostCard post={sortedPosts[0]} />
          <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
            {sortedPosts.slice(1).map((post: Post, index: number) => (
              <PostCard key={post.slug} post={post} index={index} />
            ))}
          </div>
        </div>
      ) : (
        <div className='my-20 text-center text-4xl font-bold'>
          No posts found
        </div>
      )}
    </div>
  )
}

export default Blog
