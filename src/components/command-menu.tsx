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
  section: 'Navigation' | 'Themes'
}

const Navigation: Action[] = [
  {
    name: 'Home',
    href: '/',
    section: 'Navigation',
  },
  {
    name: 'Blog',
    href: '/blog',
    section: 'Navigation',
  },
  {
    name: 'Projects',
    href: '/projects',
    section: 'Navigation',
  },
  {
    name: 'Uses',
    href: '/blog/uses',
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

  const [results] = useState(Navigation.concat(Themes))
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
      <div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label='Command Menu'
          className={cn(
            'active:text-pink-200 dark:active:text-pink-100',
            'hover:text-text-200 dark:hover:text-text-100',
            'p-2 text-subtext0-200 dark:text-subtext0-100',
            'rounded-lg bg-mantle-200 dark:bg-mantle-100',
            'border-crust-200 dark:border-crust-100',
            'border transition-colors duration-300'
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
          className={cn('fixed inset-0 z-10', 'overflow-y-auto p-4 pt-[20vh]')}
        >
          <Transition.Child
            enter='duration-150 ease-out'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='duration-150 ease-in'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Dialog.Overlay
              className={cn(
                'fixed inset-0 bg-mantle-200/75 dark:bg-mantle-100/75'
              )}
            />
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
                'ring-1 ring-crust-200 dark:ring-crust-100',
                'relative flex flex-col rounded-lg shadow-2xl',
                'bg-mantle-200 dark:bg-mantle-100'
              )}
            >
              <Dialog.Title
                className={cn(
                  'border-crust-200 dark:border-crust-100',
                  searchResults.length ? 'border-b' : ''
                )}
              >
                <input
                  autoComplete='off'
                  className={cn(
                    'placeholder:text-surface2-200 dark:placeholder:text-surface2-100',
                    'w-full bg-transparent p-4 outline-none focus:ring-0',
                    'text-subtext0-200 dark:text-subtext0-100'
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
                      'relative',
                      'mx-3 mt-3 mb-3.5',
                      'max-h-[32vh] overflow-auto',
                      'text-subtext0-200 dark:text-subtext0-100'
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
                          'h-full w-full rounded-xl bg-surface0-200/60  dark:bg-surface0-100/40',
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
                            className='text-sm text-surface2-200 dark:text-surface2-100'
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
                                ? 'text-text-200 dark:text-text-100'
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
                      if (result.section === 'Themes') {
                        return (
                          <li
                            key={index}
                            className={cn(
                              cardStyle,
                              result.name === highlightedTab?.textContent
                                ? 'text-text-200 dark:text-text-100'
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
