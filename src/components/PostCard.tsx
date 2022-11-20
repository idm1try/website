import Link from 'next/link';
import CoverImage from './CoverImage';

interface PostCardProps {
  post: {
    title: string;
    date: string;
    excerpt: string;
    slug: string;
    tags: string[];
    cover: string;
    time: {
      text: string;
      minutes: number;
      time: number;
      words: number;
    };
  };
}

const PostCard = ({ post }: PostCardProps) => {
  const { title, date, excerpt, slug, tags, time, cover } = post;

  return (
    <div className='group mb-6'>
      <div className='mb-4'>
        <CoverImage title={title} cover={cover} slug={slug} />
      </div>
      <div>
        <Link
          href={`/blog/${slug ?? ''}`}
          className='text-2xl font-bold transition-colors duration-300 active:text-pink-200/80 group-hover:text-pink-200 dark:active:text-pink-100/80 dark:group-hover:text-pink-100'
        >
          {title}
        </Link>
        <div className='my-1 text-surface2-200 dark:text-surface2-100'>
          <span>{new Date(date).toDateString()}</span> &bull; <span>{time.text}</span>
        </div>
      </div>
      <div
        className='prose-md dark:prose-dark prose prose-pink mt-2 text-subtext0-200 line-clamp-2 dark:text-subtext0-100'
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
