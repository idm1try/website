import Link from 'next/link';
import CoverImage from './CoverImage';

interface LastPostCardProps {
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

const LastPostCard = ({ post }: LastPostCardProps) => {
  const { title, date, slug, tags, time, cover } = post;

  return (
    <div className='mb-10 animate-fade_in rounded-lg bg-mantle-200 p-6 ring-peach-200 ring-offset-4 ring-offset-base-200 duration-300 hover:ring-2 dark:bg-mantle-100 dark:ring-peach-100 dark:ring-offset-base-100'>
      <div className='mb-5'>
        <CoverImage title={title} cover={cover} slug={slug} width={1000} height={800} />
      </div>
      <div>
        <Link
          href={`/blog/${slug ?? ''}`}
          className='text-3xl font-bold transition-colors duration-300 hover:text-pink-200 active:text-pink-200/80 dark:hover:text-pink-100 dark:active:text-pink-100/80'
        >
          {title}
        </Link>
        <div className='my-2 text-surface2-200 dark:text-surface2-100'>
          <span>{new Date(date).toDateString()}</span> &bull; <span>{time.text}</span>
        </div>
      </div>
      <div className='mt-2'>
        {tags.map(tag => (
          <span
            key={tag}
            className='mt-2 mr-2 inline-block rounded-lg bg-crust-200 px-4 py-2 text-sm font-medium uppercase text-pink-200 dark:bg-crust-100 dark:text-pink-100'
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default LastPostCard;
