import { cn } from '@/lib/utils'
import { useMDXComponent } from 'next-contentlayer/hooks'
import Image from 'next/image'
import Link from 'next/link'

const headingStyle = cn(
  'scroll-mt-16 decoration-surface2 decoration-2',
  'underline-offset-4 transition-colors duration-300',
  'hover:underline active:decoration-surface0'
)

const components = {
  img: ({ ...props }) => (
    <Image
      src={props.src}
      alt={props.alt}
      width={700}
      height={600}
      className='mx-auto rounded-lg border-crust border'
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
        'border-crust bg-mantle p-4'
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
        'text-text prose dark:prose-invert',
        'prose-a:text-text prose-p:text-text',
        'prose-h1:text-text prose-h2:text-text',
        'prose-h3:text-text prose-h4:text-text',
        'prose-code:text-text prose-strong:text-text',
        'prose-hr:border-surface0 prose-th:text-text'
      )}
    >
      <Component components={components} />
    </div>
  )
}

export default Mdx
