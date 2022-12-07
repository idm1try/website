import { useEffect, useState } from 'react'

const ThemeToggle = () => {
  const [theme, setTheme] = useState(() => {
    if (typeof document !== 'undefined') {
      if (localStorage.getItem('theme')) {
        return localStorage.getItem('theme')
      }
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark'
      }
    }
    return 'light'
  })

  const toggleTheme = () => {
    const t = theme === 'light' ? 'dark' : 'light'
    localStorage.setItem('theme', t)
    document.documentElement.style.setProperty('color-scheme', t)
    setTheme(t)
  }

  useEffect(() => {
    const root = document.documentElement
    if (theme === 'light') {
      root.classList.remove('dark')
    } else {
      root.classList.add('dark')
    }
  }, [theme])

  return (
    <div>
      <button
        className='rounded-lg p-2.5 text-subtext0-200 transition-all duration-300 hover:bg-surface0-200 active:bg-surface1-200 dark:text-subtext0-100 dark:hover:bg-surface0-100 dark:active:bg-surface1-100'
        onClick={toggleTheme}
        aria-label='Toggle theme'
      >
        {theme === 'light' ? (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='1em'
            height='1em'
            viewBox='0 0 24 24'
            strokeWidth='2'
            stroke='currentColor'
            fill='none'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <path stroke='none' d='M0 0h24v24H0z' fill='none' />
            <circle cx={12} cy={12} r={4} />
            <path d='M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7' />
          </svg>
        ) : (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='1em'
            height='1em'
            viewBox='0 0 24 24'
            strokeWidth='2'
            stroke='currentColor'
            fill='none'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <path stroke='none' d='M0 0h24v24H0z' fill='none' />
            <path d='M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z' />
          </svg>
        )}
      </button>
    </div>
  )
}

export default ThemeToggle
