import { useMDXComponent } from 'next-contentlayer/hooks'
import Image from 'next/image'
import ScreenshotLink from './screenshot-link'
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
          'scroll-mt-16 decoration-surface2-200 decoration-[3px]',
          'underline-offset-[5px] hover:underline dark:decoration-surface1-100'
        )}
        {...props}
      />
    </a>
  ),
  h2: ({ ...props }) => (
    <a href={`#${props.id}`} className='no-underline'>
      <h2
        className={cn(
          'scroll-mt-16 decoration-surface2-200 decoration-[3px]',
          'underline-offset-[5px] hover:underline dark:decoration-surface1-100'
        )}
        {...props}
      />
    </a>
  ),
  h3: ({ ...props }) => (
    <a href={`#${props.id}`} className='no-underline'>
      <h3
        className={cn(
          'scroll-mt-16 decoration-surface2-200 decoration-[3px]',
          'underline-offset-[5px] hover:underline dark:decoration-surface1-100'
        )}
        {...props}
      />
    </a>
  ),
  h4: ({ ...props }) => (
    <a href={`#${props.id}`} className='no-underline'>
      <h4
        className={cn(
          'scroll-mt-16 decoration-surface2-200 decoration-[3px]',
          'underline-offset-[5px] hover:underline dark:decoration-surface1-100'
        )}
        {...props}
      />
    </a>
  ),
  a: ({ ...props }) => <a {...props} className='underlined' />,
  ScreenshotLink,
}

const Mdx = ({ code }: { code: string }) => {
  const Component = useMDXComponent(code)

  return <Component components={components} />
}

export default Mdx
