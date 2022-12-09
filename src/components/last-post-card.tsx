import cn from '@/lib/classNames'
import { Post } from 'contentlayer/generated'
import Image from 'next/image'
import Link from 'next/link'

const LastPostCard = ({ post }: { post: Post }) => {
  const { title, date, slug, tags, time, image } = post

  return (
    <Link href={slug}>
      <div
        className={cn(
          'mb-10 grid gap-8 rounded-lg',
          'bg-mantle-200 p-8 ring-peach-200 md:px-10',
          'ring-offset-4 ring-offset-base-200 duration-300',
          'hover:ring-2 dark:bg-mantle-100 dark:ring-peach-100',
          'dark:ring-offset-base-100 md:grid-cols-2'
        )}
      >
        <div>
          <span
            className={cn(
              'text-4xl font-bold transition-colors',
              'duration-300 hover:text-pink-200 active:text-pink-200/80',
              'dark:hover:text-pink-100 dark:active:text-pink-100/80'
            )}
          >
            {title}
          </span>
          <div className='my-4 text-surface2-200 dark:text-surface2-100'>
            <span>{new Date(date).toDateString()}</span> &bull;{' '}
            <span>{time.text}</span>
          </div>
          <div className='mt-5'>
            {tags.map(tag => (
              <span
                key={tag}
                className={cn(
                  'mb-2 mr-2 inline-block rounded-lg',
                  'bg-crust-200 px-4 py-2 text-sm font-medium',
                  'text-pink-200 dark:bg-crust-100 dark:text-pink-100'
                )}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div>
          {image && (
            <Image
              src={`/assets/posts/${image}`}
              alt={`${title} Image`}
              className='max-h-52 rounded-lg bg-crust-200 object-cover dark:bg-crust-100'
              width={920}
              height={500}
              loading='eager'
              priority
            />
          )}
        </div>
      </div>
    </Link>
  )
}

export default LastPostCard
