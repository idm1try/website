import { useEffect, useState } from 'react'

const Time = () => {
  const [localTime, setLocalTime] = useState(
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
      setLocalTime(
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

  return <>{localTime}</>
}

export default Time
