import Post from '@/types/post';
import Image from 'next/image';
import Link from 'next/link';

const PostCard = ({ post, index }: { post: Post; index: number }) => {
  const { title, date, excerpt, slug, tags, time, cover } = post;

  return (
    <div className='group mb-6'>
      <div className='mb-4 rounded-lg ring-mauve-200 ring-offset-4 ring-offset-base-200 duration-300 group-hover:ring-2 dark:ring-mauve-100 dark:ring-offset-base-100'>
        {cover && (
          <Link href={`/blog/${slug}`} aria-label={title} tabIndex={-1}>
            <Image
              src={`/assets/posts/${cover}`}
              alt={`${title} Image`}
              className='rounded-lg bg-mantle-200 object-cover dark:bg-mantle-100'
              width={700}
              height={400}
              priority={index <= 1}
            />
          </Link>
        )}
      </div>
      <div>
        <Link
          href={`/blog/${slug ?? ''}`}
          className='text-2xl font-bold transition-colors duration-300 line-clamp-2 active:text-pink-200/80 group-hover:text-pink-200 dark:active:text-pink-100/80 dark:group-hover:text-pink-100'
        >
          {title}
        </Link>
        <div className='my-1 text-surface2-200 dark:text-surface2-100'>
          <span>{new Date(date).toDateString()}</span> &bull; <span>{time.text}</span>
        </div>
      </div>
      <div
        className='prose-md prose mt-2 text-subtext0-200 line-clamp-2 dark:text-subtext0-100 dark:prose-dark'
        dangerouslySetInnerHTML={{ __html: excerpt }}
      />
      <div className='mt-2'>
        {tags.map(tag => (
          <span
            key={tag}
            className='mt-2 mr-2 inline-block rounded-lg bg-mantle-200 px-4 py-2 text-sm font-medium text-pink-200 dark:bg-mantle-100 dark:text-pink-100'
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default PostCard;
