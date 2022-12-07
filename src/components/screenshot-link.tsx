import Image from 'next/image'
import { ReactNode, useState } from 'react'

export interface ScreenshotLinkProps {
  href: string
  children: ReactNode
  className?: string
}

const ScreenshotLink = ({
  href,
  children,
  className = '',
}: ScreenshotLinkProps) => {
  const [isHovering, setIsHovering] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [linkScreenshot, setLinkScreenshot] = useState('')

  const fetchImage = async (url: string) => {
    let colorScheme: 'light' | 'dark' = 'light'
    if (typeof document !== 'undefined') {
      colorScheme = document.documentElement.classList.contains('dark')
        ? 'dark'
        : 'light'
    }
    try {
      setIsLoading(true)
      setIsHovering(true)
      const res = await fetch(
        `/api/img?url=${encodeURIComponent(url)}&colorScheme=${colorScheme}`
      )
      const image = await res.blob()
      setLinkScreenshot(res.status === 200 && URL.createObjectURL(image))
      setIsLoading(false)
    } catch (e) {
      console.error('Error fetching screenshot image', e)
    }
  }

  return (
    <span>
      <div
        className={`relative inline-block ${className}`}
        onMouseOver={() => fetchImage(href)}
        onMouseOut={() => setIsHovering(false)}
        onFocus={() => fetchImage(href)}
        onBlur={() => setIsHovering(false)}
      >
        {isHovering && (
          <div className='animate-fade_in_up_10'>
            {!isLoading ? (
              <div
                className='pointer-events-none absolute bottom-2 z-10 block h-[105px] w-44 rounded-lg bg-mantle-200 dark:bg-mantle-100'
                aria-label='Loading...'
                role='status'
              >
                <svg
                  width='40'
                  height='40'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                  className='mx-auto mt-8 animate-spin text-pink-200 dark:text-pink-100'
                >
                  <path
                    opacity='0.2'
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z'
                    fill='currentColor'
                  />
                  <path
                    d='M2 12C2 6.47715 6.47715 2 12 2V5C8.13401 5 5 8.13401 5 12H2Z'
                    fill='currentColor'
                  />
                </svg>
              </div>
            ) : (
              <div>
                {!linkScreenshot ? (
                  <div className='pointer-events-none absolute bottom-2 z-10 block h-[105px] w-44 rounded-lg bg-mantle-200 dark:bg-mantle-100'>
                    <div className='mt-10 text-center text-lg font-bold text-pink-200 dark:text-pink-100'>
                      Error
                    </div>
                  </div>
                ) : (
                  <div className='absolute bottom-2 z-10 block w-44'>
                    <Image
                      src={linkScreenshot}
                      height={180}
                      width={300}
                      alt='Link preview'
                      className='rounded-lg'
                    />
                  </div>
                )}
              </div>
            )}
          </div>
        )}
        <a href={href} className='border-underline-grow'>
          {children}
        </a>
      </div>
    </span>
  )
}

export default ScreenshotLink
