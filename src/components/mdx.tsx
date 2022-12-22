import { useMDXComponent } from 'next-contentlayer/hooks'
import Image from 'next/image'
import cn from '@/lib/classNames'

const components = {
  img: ({ ...props }) => (
    <Image
      src={props.src}
      alt={props.alt}
      width={900}
      height={600}
      className='mx-auto'
      {...props}
    />
  ),
  h1: ({ ...props }) => (
    <a href={`#${props.id}`} className='no-underline'>
      <h1
        className={cn(
          'scroll-mt-16 decoration-neutral-300 decoration-2',
          'underline-offset-4 hover:underline dark:decoration-neutral-700'
        )}
        {...props}
      />
    </a>
  ),
  h2: ({ ...props }) => (
    <a href={`#${props.id}`} className='no-underline'>
      <h2
        className={cn(
          'scroll-mt-16 decoration-neutral-300 decoration-2',
          'underline-offset-4 hover:underline dark:decoration-neutral-700'
        )}
        {...props}
      />
    </a>
  ),
  h3: ({ ...props }) => (
    <a href={`#${props.id}`} className='no-underline'>
      <h3
        className={cn(
          'scroll-mt-16 decoration-neutral-300 decoration-2',
          'underline-offset-4 hover:underline dark:decoration-neutral-700'
        )}
        {...props}
      />
    </a>
  ),
  h4: ({ ...props }) => (
    <a href={`#${props.id}`} className='no-underline'>
      <h4
        className={cn(
          'scroll-mt-16 decoration-neutral-300 decoration-2',
          'underline-offset-4 hover:underline dark:decoration-neutral-700'
        )}
        {...props}
      />
    </a>
  ),
  a: ({ ...props }) => <a {...props} className='underlined' />,
}

const Mdx = ({ code }: { code: string }) => {
  const Component = useMDXComponent(code)

  return <Component components={components} />
}

export default Mdx
