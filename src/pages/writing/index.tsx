import { allPosts, Post } from 'contentlayer/generated'
import Head from 'next/head'
import Link from 'next/link'

const Writing = () => {
  const sortedPosts = allPosts.sort((post1: Post, post2: Post) =>
    post1.date > post2.date ? -1 : 1
  )

  return (
    <div>
      <Head>
        <title>Writing | idm1try</title>
        <meta property='og:title' content='Writing | idm1try' />
        <meta name='twitter:title' content='Writing | idm1try' />
        <meta
          property='og:image'
          content='https://idm1try.ru/api/og?heading=Writing'
        />
        <meta
          name='twitter:image'
          content='https://idm1try.ru/api/og?heading=Writing'
        />
      </Head>
      <ul className='animated-list'>
        {sortedPosts.map((post: Post) => (
          <li key={post._id} className='transition-all duration-300'>
            <Link
              href={post.slug}
              className='-mx-3 flex flex-col gap-1 rounded-xl p-3 focus:bg-neutral-200/40 focus:outline-none dark:focus:bg-neutral-800/75 md:flex-row md:gap-9'
            >
              <span className='text-neutral-600 dark:text-neutral-400 md:w-28'>
                {new Date(post.date).toLocaleString('en-US', {
                  month: 'numeric',
                  day: 'numeric',
                  year: 'numeric',
                })}
              </span>
              <span className='font-medium'>{post.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Writing
