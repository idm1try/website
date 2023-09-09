'use client'

import { useEffect, useState } from 'react'

const Time = () => {
  const [mounted, setMounted] = useState(false)
  const [time, setTime] = useState(
    new Date().toLocaleString('en-US', {
      timeZone: 'Asia/Yekaterinburg',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
    }),
  )

  useEffect(() => {
    setInterval(() => {
      setTime(
        new Date().toLocaleString('en-US', {
          timeZone: 'Asia/Yekaterinburg',
          hour: 'numeric',
          minute: 'numeric',
          second: 'numeric',
        }),
      )
    }, 1000)
  })

  useEffect(() => setMounted(true), [])

  return <p className='mb-5 text-neutral-600 dark:text-neutral-400'>{mounted && time}</p>
}

export default Time
