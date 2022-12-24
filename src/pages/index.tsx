import React, { useEffect, useState } from 'react'

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
      <h1 className='mb-5 animate-in text-4xl font-bold'>idm1try</h1>
      <p
        className='mb-5 animate-in text-neutral-600 dark:text-neutral-400'
        style={{ '--index': 1 } as React.CSSProperties}
      >
        {mounted && time} / Neftekamsk, Russia / Merry Christmas!
      </p>
      <div
        className='animate-in space-y-5'
        style={{ '--index': 2 } as React.CSSProperties}
      >
        <p>Hi there! I&apos;m Dmitry, a frontend developer</p>
        <p>Interested in TypeScript and React</p>
        <p>I&apos;m passionate about minimalism and simplicity</p>
        <div className='space-x-4'>
          <a className='underlined' href='https://github.com/idm1try'>
            GitHub
          </a>
          <a className='underlined' href='https://twitter.com/idm1try'>
            Twitter
          </a>
          <a className='underlined' href='mailto:admin@idm1try.ru'>
            Mail
          </a>
        </div>
      </div>
    </div>
  )
}

export default Home
