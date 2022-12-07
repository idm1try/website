import LastPostCard from '@/components/last-post-card'
import PostCard from '@/components/post-card'
import Search from '@/components/search'
import TagCheckbox from '@/components/tag-checkbox'
import useSearch from '@/hooks/use-search'
import { allPosts, Post } from 'contentlayer/generated'
import Head from 'next/head'

const Blog = () => {
  const search = useSearch(allPosts)
  const sortedPosts = search.results.sort((post1: Post, post2: Post) =>
    post1.date > post2.date ? -1 : 1
  )

  return (
    <div>
      <Head>
        <title>blog | idm1try</title>
        <meta property='og:title' content='blog | idm1try' />
        <meta name='twitter:title' content='blog | idm1try' />
      </Head>
      <h1 className='animate-fade_in_up_10 text-6xl font-bold tracking-tight'>
        blog.
      </h1>
      {allPosts?.length !== 0 && (
        <div>
          <Search
            className='mt-12 mb-10'
            defaultValue={search.defaultValue}
            onChange={value => {
              search.setParams(value)
            }}
          />
          <div className='mb-6'>
            {search.tags.sort().map(tag => (
              <TagCheckbox
                key={tag}
                checked={search.filters.includes(tag)}
                value={tag}
                onChange={e =>
                  e.target.checked ? search.addTag(tag) : search.removeTag(tag)
                }
              >
                {tag}
              </TagCheckbox>
            ))}
          </div>
        </div>
      )}
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
