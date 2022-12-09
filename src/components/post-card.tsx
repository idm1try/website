import cn from '@/lib/classNames'
import { Post } from 'contentlayer/generated'
import Image from 'next/image'
import Link from 'next/link'

const PostCard = ({ post, index }: { post: Post; index: number }) => {
  const { title, date, slug, tags, time, image } = post

  return (
    <div className='group mb-6'>
      <Link href={slug}>
        <div
          className={cn(
            'mb-5 rounded-lg ring-mauve-200 ring-offset-4',
            'dark:ring-mauve-100 dark:ring-offset-base-100',
            'ring-offset-base-200 duration-300 group-hover:ring-2'
          )}
        >
          {image && (
            <Image
              src={`/assets/posts/${image}`}
              alt={`${title} Image`}
              className='rounded-lg bg-mantle-200 object-cover dark:bg-mantle-100'
              width={700}
              height={400}
              priority={index <= 1}
            />
          )}
        </div>
        <div>
          <span className='text-2xl font-bold transition-colors duration-300 line-clamp-2 active:text-pink-200/80 group-hover:text-pink-200 dark:active:text-pink-100/80 dark:group-hover:text-pink-100'>
            {title}
          </span>
          <div className='my-2 text-surface2-200 dark:text-surface2-100'>
            <span>{new Date(date).toDateString()}</span> &bull;{' '}
            <span>{time.text}</span>
          </div>
        </div>
        <div className='mt-2'>
          {tags.map(tag => (
            <span
              key={tag}
              className={cn(
                'mt-2 mr-2 inline-block rounded-lg',
                'bg-mantle-200 px-4 py-2 text-sm font-medium',
                'text-pink-200 dark:bg-mantle-100 dark:text-pink-100'
              )}
            >
              {tag}
            </span>
          ))}
        </div>
      </Link>
    </div>
  )
}

export default PostCard
