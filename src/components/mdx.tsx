import { cn } from '@/lib/utils'
import { useMDXComponent } from 'next-contentlayer/hooks'
import Image from 'next/image'
import Link from 'next/link'

const headingStyle = cn(
  'scroll-mt-16 decoration-neutral-300 decoration-2',
  'underline-offset-4 transition-colors duration-300',
  'hover:underline active:decoration-neutral-500',
  'dark:decoration-neutral-700 dark:active:decoration-neutral-400'
)

const components = {
  img: ({ ...props }) => (
    <Image
      src={props.src}
      alt={props.alt}
      width={700}
      height={600}
      className='mx-auto rounded-lg'
      {...props}
    />
  ),
  h1: ({ ...props }) => (
    <a href={`#${props.id}`} className='no-underline'>
      <h1 className={headingStyle} {...props} />
    </a>
  ),
  h2: ({ ...props }) => (
    <a href={`#${props.id}`} className='no-underline'>
      <h2 className={headingStyle} {...props} />
    </a>
  ),
  h3: ({ ...props }) => (
    <a href={`#${props.id}`} className='no-underline'>
      <h3 className={headingStyle} {...props} />
    </a>
  ),
  h4: ({ ...props }) => (
    <a href={`#${props.id}`} className='no-underline'>
      <h4 className={headingStyle} {...props} />
    </a>
  ),
  a: ({ ...props }) => {
    const href = props.href

    if (href.startsWith('/')) {
      return (
        <Link href={href} className='underlined' {...props}>
          {props.children}
        </Link>
      )
    }

    if (href.startsWith('#')) {
      return <a {...props} className='underlined' />
    }

    return (
      <a
        target='_blank'
        rel='noopener noreferrer'
        className='underlined'
        {...props}
      />
    )
  },
  Callout: ({ ...props }) => (
    <div
      className={cn(
        'my-8 flex rounded-lg border',
        'border-neutral-200 bg-neutral-100 p-4',
        'dark:border-neutral-800 dark:bg-neutral-900'
      )}
    >
      <div className='mr-4 flex w-4 items-center'>{props.emoji}</div>
      <div className='callout w-full'>{props.children}</div>
    </div>
  ),
}

const Mdx = ({ code }: { code: string }) => {
  const Component = useMDXComponent(code)

  return (
    <div
      className={cn(
        'prose prose-neutral text-neutral-900 dark:prose-invert',
        'prose-blockquote:text-neutral-600 dark:text-neutral-100',
        'dark:prose-blockquote:text-neutral-400'
      )}
    >
      <Component components={components} />
    </div>
  )
}

export default Mdx
