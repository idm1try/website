import { useMDXComponent } from 'next-contentlayer/hooks'
import Image from 'next/image'

const components = {
  img: ({ ...props }) => (
    <Image
      src={props.src}
      alt={props.alt}
      width={700}
      height={600}
      className='mx-auto'
      {...props}
    />
  ),
  h1: ({ ...props }) => (
    <a href={`#${props.id}`} className='no-underline'>
      <h1
        className='scroll-mt-16 decoration-neutral-300 decoration-2 underline-offset-4 transition-colors duration-300 hover:underline active:decoration-neutral-500 dark:decoration-neutral-700 dark:active:decoration-neutral-400'
        {...props}
      />
    </a>
  ),
  h2: ({ ...props }) => (
    <a href={`#${props.id}`} className='no-underline'>
      <h2
        className='scroll-mt-16 decoration-neutral-300 decoration-2 underline-offset-4 transition-colors duration-300 hover:underline active:decoration-neutral-500 dark:decoration-neutral-700 dark:active:decoration-neutral-400'
        {...props}
      />
    </a>
  ),
  h3: ({ ...props }) => (
    <a href={`#${props.id}`} className='no-underline'>
      <h3
        className='scroll-mt-16 decoration-neutral-300 decoration-2 underline-offset-4 transition-colors duration-300 hover:underline active:decoration-neutral-500 dark:decoration-neutral-700 dark:active:decoration-neutral-400'
        {...props}
      />
    </a>
  ),
  h4: ({ ...props }) => (
    <a href={`#${props.id}`} className='no-underline'>
      <h4
        className='scroll-mt-16 decoration-neutral-300 decoration-2 underline-offset-4 transition-colors duration-300 hover:underline active:decoration-neutral-500 dark:decoration-neutral-700 dark:active:decoration-neutral-400'
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
