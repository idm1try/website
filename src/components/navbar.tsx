'use client'

import { useRouter, useSelectedLayoutSegment } from 'next/navigation'
import * as Menu from '@radix-ui/react-dropdown-menu'

const MenuItem = ({ ...props }) => (
  <Menu.Item
    className='relative flex cursor-default select-none items-center rounded-lg py-1.5 px-2 text-sm font-medium outline-none focus:bg-neutral-200/40 active:bg-neutral-200/40 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-neutral-800/75 dark:active:bg-neutral-800/75'
    {...props}
  />
)

const Navbar = () => {
  const router = useRouter()
  const page = useSelectedLayoutSegment()

  return (
    <nav className='sticky top-6 z-10'>
      <Menu.Root>
        <Menu.Trigger asChild>
          <button className='group inline-flex truncate rounded-lg border border-neutral-400/30 bg-white p-2 font-medium capitalize text-neutral-700 shadow-sm transition-colors duration-300 hover:text-neutral-900/50 focus:text-neutral-900/50 focus:shadow-sm focus:outline-none dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-300 dark:hover:border-neutral-500/50 dark:hover:text-white dark:focus:border-neutral-500/50 dark:focus:text-white'>
            {page ?? 'Home'}
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='14'
              height='14'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='relative top-1.5 ml-1 transition duration-200 group-data-[state=open]:rotate-180'
              aria-hidden='true'
            >
              <polyline points='6 9 12 15 18 9' />
            </svg>
          </button>
        </Menu.Trigger>
        <Menu.Portal>
          <Menu.Content
            align='start'
            sideOffset={6}
            className='z-50 min-w-[8rem] overflow-hidden rounded-lg border border-neutral-400/30 bg-white p-1 text-neutral-700 shadow-md animate-in data-[side=bottom]:slide-in-from-top-2 data-[side=top]:slide-in-from-bottom-2 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-300'
          >
            <Menu.Group>
              <MenuItem onSelect={() => router.push('/')}>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='14'
                  height='14'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  className='mr-2'
                >
                  <path d='m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z' />
                  <polyline points='9 22 9 12 15 12 15 22' />
                </svg>
                <span>Home</span>
              </MenuItem>
              <MenuItem onSelect={() => router.push('/writing')}>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='14'
                  height='14'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  className='mr-2'
                >
                  <path d='M12 20h9' />
                  <path d='M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z' />
                </svg>
                <span>Writing</span>
              </MenuItem>
              <MenuItem onSelect={() => router.push('/projects')}>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='14'
                  height='14'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  className='mr-2'
                >
                  <rect x='3' y='3' width='7' height='7' />
                  <rect x='14' y='3' width='7' height='7' />
                  <rect x='14' y='14' width='7' height='7' />
                  <rect x='3' y='14' width='7' height='7' />
                </svg>
                <span>Projects</span>
              </MenuItem>
              <MenuItem onSelect={() => router.push('/writing/uses')}>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='14'
                  height='14'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  className='mr-2'
                >
                  <rect x='2' y='4' width='20' height='16' rx='2' ry='2' />
                  <path d='M6 8h.001' />
                  <path d='M10 8h.001' />
                  <path d='M14 8h.001' />
                  <path d='M18 8h.001' />
                  <path d='M8 12h.001' />
                  <path d='M12 12h.001' />
                  <path d='M16 12h.001' />
                  <path d='M7 16h10' />
                </svg>
                <span>Uses</span>
              </MenuItem>
            </Menu.Group>
            <Menu.Separator className='-mx-1 my-1 h-px bg-neutral-400/30 dark:bg-neutral-800' />
            <Menu.Group>
              <MenuItem
                onSelect={() => window.open('https://github.com/idm1try')}
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='14'
                  height='14'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  className='mr-2'
                >
                  <path d='M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4' />
                  <path d='M9 18c-4.51 2-5-2-7-2' />
                </svg>
                <span>GitHub</span>
              </MenuItem>
              <MenuItem
                onSelect={() => window.open('https://twitter.com/idm1try')}
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='14'
                  height='14'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  className='mr-2'
                >
                  <path d='M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z' />
                </svg>
                <span>Twitter</span>
              </MenuItem>
              <MenuItem onSelect={() => window.open('mailto:me@idm1try.ru')}>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='14'
                  height='14'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  className='mr-2'
                >
                  <rect x='2' y='4' width='20' height='16' rx='2' />
                  <path d='m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7' />
                </svg>
                <span>Mail</span>
              </MenuItem>
            </Menu.Group>
          </Menu.Content>
        </Menu.Portal>
      </Menu.Root>
    </nav>
  )
}

export default Navbar
