import ScreenshotLink from '@/components/screenshot-link'
import cn from '@/lib/classNames'
import { useEffect, useState } from 'react'

const Home = () => {
  const [mounted, setMounted] = useState(false)
  const [time, setTime] = useState(
    new Date().toLocaleString('en-US', {
      timeZone: 'Asia/Yekaterinburg',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      hourCycle: 'h23',
    })
  )

  useEffect(() => {
    setInterval(() => {
      setTime(
        new Date().toLocaleString('en-US', {
          timeZone: 'Asia/Yekaterinburg',
          hour: 'numeric',
          minute: 'numeric',
          second: 'numeric',
          hourCycle: 'h23',
        })
      )
    }, 1000)
  })

  useEffect(() => setMounted(true), [])

  return (
    <div>
      <div
        className={cn(
          'relative my-16 flex max-w-7xl',
          'flex-col items-start text-left lg:my-[20vh]',
          'lg:flex-row lg:items-center lg:justify-between'
        )}
      >
        <div
          className={cn(
            'mb-8 animate-fade_in_up_10 pl-2',
            'text-6xl font-bold tracking-tight',
            'text-pink-200 dark:text-pink-100 lg:pl-0 lg:pr-8'
          )}
        >
          idm1try
        </div>
        <div className='relative w-full p-2 text-left text-xl leading-8 lg:w-11/12 lg:pl-10'>
          <div>
            Hi! My name&apos;s Dmitry. I&apos;m a beginner front-end developer
            based in{' '}
            <ScreenshotLink href='https://en.wikipedia.org/wiki/Neftekamsk'>
              Neftekamsk
            </ScreenshotLink>
            , Russia.
          </div>
          <ul className='mt-4 space-y-1.5'>
            <li>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='mr-2 mb-1 inline-block text-mauve-200 dark:text-mauve-100'
                width='1em'
                height='1em'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <path d='M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4' />
                <path d='M9 18c-4.51 2-5-2-7-2' />
              </svg>
              <ScreenshotLink href='https://github.com/idm1try'>
                @idm1try
              </ScreenshotLink>
            </li>
            <li>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='mr-2 mb-1 inline-block text-mauve-200 dark:text-mauve-100'
                width='1em'
                height='1em'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <path d='M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z' />
              </svg>
              <ScreenshotLink href='https://twitter.com/idm1try'>
                @idm1try
              </ScreenshotLink>
            </li>
            <li>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='mr-2 mb-1 inline-block text-mauve-200 dark:text-mauve-100'
                width='1em'
                height='1em'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <rect x='2' y='4' width='20' height='16' rx='2' />
                <path d='m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7' />
              </svg>
              <a className='underlined' href='mailto:admin@idm1try.ru'>
                admin@idm1try.ru
              </a>
            </li>
            <li>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='mr-2 mb-1 inline-block text-mauve-200 dark:text-mauve-100'
                width='1em'
                height='1em'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <circle cx='12' cy='12' r='10' />
                <polyline points='12 6 12 12 16.5 12' />
              </svg>
              {mounted && time}
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Home
