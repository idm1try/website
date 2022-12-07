import { useWindowScroll } from '@/hooks/use-window-scroll'
import { useEffect } from 'react'

const ReadProgress = () => {
  const [scroll] = useWindowScroll()
  const pageHeight =
    typeof document !== 'undefined' &&
    document.body.scrollHeight - window.innerHeight

  useEffect(() => {
    const percentScrolled = (Math.abs(scroll.y) / pageHeight) * 100
    const el = document.getElementById('scroll-progress')
    el?.style.setProperty(
      '--tw-gradient-stops',
      `var(--tw-ring-color) ${percentScrolled}%, transparent 0`
    )
  }, [scroll.y, pageHeight])

  return (
    <div
      id='scroll-progress'
      className='fixed top-0 left-0 z-50 h-1.5 w-full bg-gradient-to-r p-0 ring-pink-200 dark:ring-pink-100'
    />
  )
}

export default ReadProgress
