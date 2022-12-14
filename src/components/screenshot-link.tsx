import Image from 'next/image'
import { ReactNode, useState } from 'react'

interface ScreenshotLinkProps {
  href: string
  children: ReactNode
  className?: string
}

const ScreenshotLink = ({ href, children }: ScreenshotLinkProps) => {
  const [isHovering, setIsHovering] = useState(false)
  const [linkScreenshot, setLinkScreenshot] = useState('')

  const fetchImage = async (url: string) => {
    let colorScheme: 'light' | 'dark' = 'light'
    if (typeof document !== 'undefined') {
      colorScheme = document.documentElement.classList.contains('dark')
        ? 'dark'
        : 'light'
    }
    try {
      setIsHovering(true)
      const res = await fetch(
        `https://screenshot.idm1try.ru/api/image?url=${encodeURIComponent(
          url
        )}&colorScheme=${colorScheme}&skipCookieBannerClick=true`
      )
      const image = await res.blob()
      setLinkScreenshot(res.status === 200 && URL.createObjectURL(image))
    } catch (e) {
      console.error('Error fetching screenshot image', e)
    }
  }

  return (
    <span>
      <div
        className='relative inline-block'
        onMouseOver={() => fetchImage(href)}
        onMouseOut={() => setIsHovering(false)}
        onFocus={() => fetchImage(href)}
        onBlur={() => setIsHovering(false)}
      >
        {isHovering && linkScreenshot && (
          <div className='pointer-events-none absolute bottom-8 z-10 w-44 animate-fade_in_up_10'>
            <Image
              src={linkScreenshot}
              height={380}
              width={500}
              alt='Link Screenshot'
              className='rounded-lg bg-mantle-200 dark:bg-mantle-100'
            />
          </div>
        )}
        <a href={href} className='underlined'>
          {children}
        </a>
      </div>
    </span>
  )
}

export default ScreenshotLink
