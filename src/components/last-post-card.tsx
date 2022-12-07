import { Post } from 'contentlayer/generated'
import Image from 'next/image'
import Link from 'next/link'

const LastPostCard = ({ post }: { post: Post }) => {
  const { title, date, slug, tags, time, image } = post

  return (
    <div className='mb-10 rounded-lg bg-mantle-200 p-6 ring-peach-200 ring-offset-4 ring-offset-base-200 duration-300 hover:ring-2 dark:bg-mantle-100 dark:ring-peach-100 dark:ring-offset-base-100'>
      <Link href={slug}>
        <div className='mb-5'>
          {image && (
            <Image
              src={`/assets/posts/${image}`}
              alt={`${title} Image`}
              className='max-h-96 rounded-lg bg-crust-200 object-cover dark:bg-crust-100'
              width={920}
              height={500}
              loading='eager'
              priority
            />
          )}
        </div>
        <div>
          <span className='text-3xl font-bold transition-colors duration-300 hover:text-pink-200 active:text-pink-200/80 dark:hover:text-pink-100 dark:active:text-pink-100/80'>
            {title}
          </span>
          <div className='my-2 flex justify-between'>
            <span className='text-pink-200 dark:text-pink-100'>
              {new Date(date).toDateString()}
            </span>{' '}
            <span className='text-surface2-200 dark:text-surface2-100'>
              {time.text}
            </span>
          </div>
        </div>
        <div className='mt-2'>
          {tags.map(tag => (
            <span
              key={tag}
              className='mt-2 mr-2 inline-block rounded-lg bg-crust-200 px-4 py-2 text-sm font-medium text-pink-200 dark:bg-crust-100 dark:text-pink-100'
            >
              {tag}
            </span>
          ))}
        </div>
      </Link>
    </div>
  )
}

export default LastPostCard
