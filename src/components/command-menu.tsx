import React, {
  Fragment,
  MouseEventHandler,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { useTheme } from 'next-themes'
import { useRouter } from 'next/router'
import cn from '@/lib/classNames'

interface Action {
  name: string
  keywords?: string
  href?: string
  perform?: () => void
  section: 'Navigation' | 'Socials' | 'Themes'
}

const Socials: Action[] = [
  {
    name: 'GitHub',
    keywords: 'github',
    perform: () => {
      window.open('https://github.com/idm1try')
    },
    section: 'Socials',
  },
  {
    name: 'Twitter',
    keywords: 'twitter',
    perform: () => {
      window.open('https://twitter.com/idm1try')
    },
    section: 'Socials',
  },
  {
    name: 'Mail',
    keywords: 'mail',
    perform: () => {
      window.open('mailto:me@idm1try.ru')
    },
    section: 'Socials',
  },
]

const Navigation: Action[] = [
  {
    name: 'Home',
    href: '/',
    section: 'Navigation',
  },
  {
    name: 'Writing',
    href: '/writing',
    section: 'Navigation',
  },
  {
    name: 'Projects',
    href: '/projects',
    section: 'Navigation',
  },
  {
    name: 'Uses',
    href: '/writing/uses',
    section: 'Navigation',
  },
]

const Themes: Action[] = [
  {
    name: 'Change theme to light',
    keywords: 'light',
    section: 'Themes',
  },
  {
    name: 'Change theme to dark',
    keywords: 'dark',
    section: 'Themes',
  },
  {
    name: 'Change theme to system',
    keywords: 'system',
    section: 'Themes',
  },
]

const CommandMenu = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { resolvedTheme, setTheme } = useTheme()
  const router = useRouter()

  const [results] = useState(Navigation.concat(Socials).concat(Themes))
  const [input, setInput] = useState('')

  const [highlightedTab, setHighlightedTab] = useState<HTMLElement | null>(null)
  const [isHoveredFromNull, setIsHoveredFromNull] = useState(true)
  const [transform, setTransform] = useState('translate(0, 0)')
  const parentRef = useRef<HTMLUListElement>(null)
  const highlightRef = useRef<HTMLDivElement>(null)

  const cardStyle =
    'px-2 py-3 cursor-pointer relative flex items-center gap-2 rounded-xl transition-colors duration-300'

  const placeholder = useMemo(() => {
    if (highlightedTab) {
      return highlightedTab.textContent
    }
    if (input.length === 0) {
      return 'What do you need?'
    }
  }, [highlightedTab, input])

  const searchResults = useMemo(() => {
    const answer = []

    const myFilter = results.filter(result =>
      result.name.toLowerCase().includes(input.toLowerCase())
    )

    let last = ''
    for (let i = 0; i < myFilter.length; i++) {
      const result = myFilter[i]
      if (i === 0) {
        if (result.section === 'Themes') {
          if (result.keywords !== resolvedTheme) {
            answer.push(result.section)
          } else if (result.keywords === 'system') {
            answer.push(result.section)
          }
        } else {
          answer.push(result.section)
        }
        last = result.section
      } else {
        if (last !== result.section) {
          answer.push(result.section)
          last = result.section
        }
      }

      if (result.section === 'Themes') {
        if (result.keywords !== resolvedTheme) {
          answer.push(result)
        } else if (result.keywords === 'system') {
          answer.push(result)
        }
      } else {
        answer.push(result)
      }
    }

    return answer
  }, [input, resolvedTheme, results])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value)
    if (parentRef.current) {
      const children = parentRef.current.children
      if (children.length > 1) {
        changeHighlight(children[2] as HTMLElement)
      }
    }
  }

  const handleReset = () => {
    setInput('')
    setHighlightedTab(null)
    setIsHoveredFromNull(true)
    setIsOpen(false)
  }

  const handleEnter = () => {
    if (parentRef.current) {
      const children = parentRef.current.children
      if (children.length > 1) {
        changeHighlight(children[2] as HTMLElement)
      }
    }
  }

  const handleMouseOver = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    const parent = parentRef.current
    if (!parent) {
      return
    }

    const node = event.target as HTMLElement
    if (!node) {
      return
    }

    setIsHoveredFromNull(!highlightedTab)
    setHighlightedTab(node)

    const tabBoundingBox = node.getBoundingClientRect()
    const parentBoundingBox = parent.getBoundingClientRect()
    const highlightOffset = tabBoundingBox.top - parentBoundingBox.top

    if (node.className === cardStyle) {
      setTransform(`translate(0, ${highlightOffset + parent.scrollTop}px)`)
    }
  }

  const changeHighlight = (node: Element) => {
    const parent = parentRef.current
    if (!parent) {
      return
    }

    if (!node) {
      return
    }

    setIsHoveredFromNull(!highlightedTab)

    const tabBoundingBox = node.getBoundingClientRect()
    const parentBoundingBox = parent.getBoundingClientRect()
    const highlightOffset = tabBoundingBox.top - parentBoundingBox.top

    if (node.className === cardStyle) {
      setHighlightedTab(node as HTMLElement)

      setTransform(`translate(0, ${highlightOffset + parent.scrollTop}px)`)
      node.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'center',
      })
    }
  }

  useEffect(() => {
    const handler = (event: {
      key: string
      preventDefault: () => void
      metaKey: boolean
    }) => {
      if (event.key === 'ArrowUp' && isOpen) {
        event.preventDefault()
        if (highlightedTab && highlightedTab.previousElementSibling) {
          if (highlightedTab.previousElementSibling.className === cardStyle) {
            changeHighlight(highlightedTab.previousElementSibling)
          } else if (
            highlightedTab.previousElementSibling.previousElementSibling
          ) {
            changeHighlight(
              highlightedTab.previousElementSibling.previousElementSibling
            )
          }
        }
      } else if (event.key === 'ArrowDown' && isOpen) {
        event.preventDefault()
        if (highlightedTab && highlightedTab.nextElementSibling) {
          if (highlightedTab.nextElementSibling.className === cardStyle) {
            changeHighlight(highlightedTab.nextElementSibling)
          } else if (highlightedTab.nextElementSibling.nextElementSibling) {
            changeHighlight(
              highlightedTab.nextElementSibling.nextElementSibling
            )
          }
        }
      } else if (event.key === 'Enter' && isOpen && highlightedTab) {
        highlightedTab?.click()
      } else if (event.key === 'k' && event.metaKey) {
        event.preventDefault()
        setIsOpen(!isOpen)
      }
    }

    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  })

  return (
    <>
      <div className='sticky top-6 z-10'>
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label='Command Menu'
          className={cn(
            'rounded-lg border border-neutral-400',
            'border-opacity-30 bg-white px-2 py-2',
            'text-neutral-700 shadow-sm hover:border-opacity-50',
            'transition-all duration-300 hover:text-neutral-900',
            'dark:border-neutral-500 dark:border-opacity-30',
            'hover:shadow-sm dark:bg-neutral-900 dark:text-neutral-300',
            'dark:hover:border-opacity-50 dark:hover:text-white'
          )}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <path d='M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z' />
          </svg>
        </button>
      </div>
      <Transition
        show={isOpen}
        as={Fragment}
        afterLeave={handleReset}
        afterEnter={handleEnter}
      >
        <Dialog
          onClose={setIsOpen}
          className='fixed inset-0 z-10 overflow-y-auto p-4 pt-[20vh]'
        >
          <Transition.Child
            enter='duration-150 ease-out'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='duration-150 ease-in'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Dialog.Overlay className='fixed inset-0 bg-neutral-50/75 dark:bg-black/75' />
          </Transition.Child>

          <Transition.Child
            enter='duration-150 ease-out'
            enterFrom='opacity-0 scale-95'
            enterTo='opacity-100 scale-100'
            leave='duration-150 ease-in'
            leaveFrom='opacity-100 scale-100'
            leaveTo='opacity-0 scale-95'
            className='mx-auto max-w-2xl'
          >
            <div
              className={cn(
                'ring-1 ring-black/10 dark:ring-neutral-700/50',
                'relative flex flex-col rounded-lg shadow-2xl',
                'bg-neutral-50 dark:bg-neutral-900'
              )}
            >
              <Dialog.Title
                className={cn(
                  'border-black/10 dark:border-neutral-700/50',
                  searchResults.length ? 'border-b' : ''
                )}
              >
                <input
                  autoComplete='off'
                  className={cn(
                    'placeholder:text-neutral-600 dark:placeholder:text-neutral-400',
                    'w-full bg-transparent p-4 outline-none focus:ring-0'
                  )}
                  placeholder={placeholder}
                  aria-label='What do you need?'
                  value={input}
                  onChange={handleChange}
                  type='text'
                  spellCheck={false}
                />
              </Dialog.Title>
              <Dialog.Description as='div'>
                {searchResults.length > 0 && (
                  <ul
                    ref={parentRef}
                    className={cn(
                      'relative m-3',
                      'max-h-[32vh] overflow-auto',
                      'text-neutral-600 dark:text-neutral-300'
                    )}
                  >
                    <div
                      ref={highlightRef}
                      className={cn(
                        'absolute block h-12 w-full',
                        'duration-200',
                        isHoveredFromNull
                          ? 'transition-none'
                          : 'transition-transform'
                      )}
                      style={{ transform }}
                    >
                      <div
                        className={cn(
                          'h-full w-full rounded-xl bg-neutral-200/40 dark:bg-neutral-800/75',
                          highlightedTab ? 'opacity-100' : 'opacity-0',
                          'transition-opacity duration-300'
                        )}
                      />
                    </div>

                    {searchResults.map((result, index) => {
                      if (typeof result === 'string') {
                        return (
                          <span
                            key={index}
                            className='text-sm text-neutral-600 dark:text-neutral-400'
                          >
                            {result}
                          </span>
                        )
                      }
                      if (result.section === 'Navigation') {
                        return (
                          <li
                            key={index}
                            className={cn(
                              cardStyle,
                              result.name === highlightedTab?.textContent
                                ? 'text-neutral-900 dark:text-neutral-100'
                                : ''
                            )}
                            onMouseOver={handleMouseOver as MouseEventHandler}
                            onMouseLeave={() => setIsHoveredFromNull(false)}
                            onClick={() => {
                              router.push(result.href)
                              setIsOpen(false)
                            }}
                          >
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              width={20}
                              height={20}
                              viewBox='0 0 24 24'
                              fill='none'
                              stroke='currentColor'
                              strokeWidth='2'
                              strokeLinecap='round'
                              strokeLinejoin='round'
                            >
                              <line x1='5' y1='12' x2='19' y2='12' />
                              <polyline points='12 5 19 12 12 19' />
                            </svg>
                            <a>{result.name}</a>
                          </li>
                        )
                      }
                      if (result.section === 'Socials') {
                        return (
                          <li
                            key={index}
                            className={cn(
                              cardStyle,
                              result.name === highlightedTab?.textContent
                                ? 'text-neutral-900 dark:text-neutral-100'
                                : ''
                            )}
                            onMouseOver={handleMouseOver as MouseEventHandler}
                            onMouseLeave={() => setIsHoveredFromNull(false)}
                            onClick={() => {
                              result.perform?.()
                              setIsOpen(false)
                            }}
                          >
                            {result.keywords === 'twitter' && (
                              <svg
                                xmlns='http://www.w3.org/2000/svg'
                                width='20'
                                height='20'
                                viewBox='0 0 24 24'
                                strokeWidth='2'
                                stroke='currentColor'
                                fill='none'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                              >
                                <path
                                  stroke='none'
                                  d='M0 0h24v24H0z'
                                  fill='none'
                                />
                                <path d='M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z' />
                              </svg>
                            )}
                            {result.keywords === 'github' && (
                              <svg
                                xmlns='http://www.w3.org/2000/svg'
                                width='20'
                                height='20'
                                viewBox='0 0 24 24'
                                strokeWidth='2'
                                stroke='currentColor'
                                fill='none'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                              >
                                <path
                                  stroke='none'
                                  d='M0 0h24v24H0z'
                                  fill='none'
                                />
                                <path d='M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5' />
                              </svg>
                            )}
                            {result.keywords === 'mail' && (
                              <svg
                                xmlns='http://www.w3.org/2000/svg'
                                width='20'
                                height='20'
                                viewBox='0 0 24 24'
                                strokeWidth='2'
                                stroke='currentColor'
                                fill='none'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                              >
                                <path
                                  stroke='none'
                                  d='M0 0h24v24H0z'
                                  fill='none'
                                />
                                <rect
                                  x='3'
                                  y='5'
                                  width='18'
                                  height='14'
                                  rx='2'
                                />
                                <polyline points='3 7 12 13 21 7' />
                              </svg>
                            )}
                            <a>{result.name}</a>
                          </li>
                        )
                      }
                      if (result.section === 'Themes') {
                        return (
                          <li
                            key={index}
                            className={cn(
                              cardStyle,
                              result.name === highlightedTab?.textContent
                                ? 'text-neutral-900 dark:text-neutral-100'
                                : ''
                            )}
                            onMouseOver={handleMouseOver as MouseEventHandler}
                            onMouseLeave={() => setIsHoveredFromNull(false)}
                            onClick={() => {
                              setIsOpen(false)
                              setTheme(result.keywords)
                            }}
                          >
                            {result.keywords === 'dark' && (
                              <svg
                                xmlns='http://www.w3.org/2000/svg'
                                width={20}
                                height={20}
                                viewBox='0 0 24 24'
                                fill='none'
                                stroke='currentColor'
                                strokeWidth='2'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                              >
                                <path d='M12 3a6.364 6.364 0 0 0 9 9 9 9 0 1 1-9-9Z' />
                              </svg>
                            )}
                            {result.keywords === 'light' && (
                              <svg
                                xmlns='http://www.w3.org/2000/svg'
                                width={20}
                                height={20}
                                viewBox='0 0 24 24'
                                fill='none'
                                stroke='currentColor'
                                strokeWidth='2'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                              >
                                <circle cx='12' cy='12' r='4' />
                                <path d='M12 2v2' />
                                <path d='M12 20v2' />
                                <path d='m4.93 4.93 1.41 1.41' />
                                <path d='m17.66 17.66 1.41 1.41' />
                                <path d='M2 12h2' />
                                <path d='M20 12h2' />
                                <path d='m6.34 17.66-1.41 1.41' />
                                <path d='m19.07 4.93-1.41 1.41' />
                              </svg>
                            )}
                            {result.keywords === 'system' && (
                              <svg
                                xmlns='http://www.w3.org/2000/svg'
                                width={20}
                                height={20}
                                viewBox='0 0 24 24'
                                fill='none'
                                stroke='currentColor'
                                strokeWidth='2'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                              >
                                <rect
                                  x='2'
                                  y='3'
                                  width='20'
                                  height='14'
                                  rx='2'
                                  ry='2'
                                />
                                <line x1='8' y1='21' x2='16' y2='21' />
                                <line x1='12' y1='17' x2='12' y2='21' />
                              </svg>
                            )}
                            <span>{result.name}</span>
                          </li>
                        )
                      }
                    })}
                  </ul>
                )}
              </Dialog.Description>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition>
    </>
  )
}

export default CommandMenu
