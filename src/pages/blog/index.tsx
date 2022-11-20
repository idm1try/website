import LastPostCard from '@/components/LastPostCard';
import Layout from '@/components/Layout';
import PostCard from '@/components/PostCard';
import SearchPosts from '@/components/SearchPosts';
import usePostSearch from '@/hooks/usePostSearch';
import { getAllPosts } from '@/lib/mdx/api';
import Post from '@/types/post';
import { TbSearch } from 'react-icons/tb';

const Blog = ({ allPosts }: { allPosts: Post[] }) => {
  const search = usePostSearch(allPosts);

  const lastPost: Post = search.results.sort((post1: Post, post2: Post) =>
    post1.date > post2.date ? -1 : 1
  )[0];

  const morePosts = search.results
    .sort((post1: Post, post2: Post) => (post1.date > post2.date ? -1 : 1))
    .slice(1);

  return (
    <Layout>
      <h1 className='animate-fade_in_up_10 text-6xl font-bold tracking-tight'>blog.</h1>
      {allPosts.length !== 0 && (
        <div>
          <SearchPosts
            className='my-12'
            defaultValue={search.defaultValue}
            onChange={value => {
              search.setParams(value);
            }}
          />
        </div>
      )}
      {search.results.length !== 0 ? (
        <div>
          <LastPostCard post={lastPost} />
          <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
            {morePosts.map((post: Post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      ) : (
        <div>
          {allPosts.length === 0 ? (
            <div className='text-center text-4xl font-bold'>No posts</div>
          ) : (
            <div className='text-center line-clamp-2'>
              <TbSearch
                className='mx-auto animate-fade_in_up text-pink-200 dark:text-pink-100'
                size={80}
              />
              <div className='my-3 text-2xl font-bold'>No results</div>
            </div>
          )}
        </div>
      )}
    </Layout>
  );
};

export default Blog;

export const getStaticProps = async () => {
  const allPosts = await getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'cover',
    'excerpt',
    'tags',
    'time',
  ]);

  return {
    props: { allPosts },
  };
};
