'use client'

import { useRouter, useSelectedLayoutSegment } from 'next/navigation'
import * as Menu from '@radix-ui/react-dropdown-menu'
import { cn } from '@/lib/utils'

const Navbar = () => {
  const router = useRouter()
  const page = useSelectedLayoutSegment()

  return (
    <nav className='sticky top-6 z-10'>
      <Menu.Root>
        <Menu.Trigger asChild>
          <button
            className={cn(
              'group inline-flex truncate rounded-lg',
              'border border-crust bg-mantle p-2',
              'font-medium capitalize text-subtext0 shadow-sm',
              'outline-none transition-colors duration-300',
              'hover:text-subtext1 focus:ring-2 ring-surface1',
              'ring-offset-2 ring-offset-base'
            )}
          >
            {page ?? 'Home'}
            <ArrowIcon />
          </button>
        </Menu.Trigger>
        <Menu.Portal>
          <Menu.Content
            align='start'
            sideOffset={6}
            className={cn(
              'z-50 min-w-[8rem] overflow-hidden rounded-lg',
              'border border-crust bg-mantle p-1',
              'text-subtext0 shadow-md animate-in',
              'data-[side=bottom]:slide-in-from-top-2',
              'data-[side=top]:slide-in-from-bottom-2'
            )}
          >
            <Menu.Group>
              <MenuItem onSelect={() => router.push('/')}>
                <HomeIcon />
                <span>Home</span>
              </MenuItem>
              <MenuItem onSelect={() => router.push('/writing')}>
                <WritingIcon />
                <span>Writing</span>
              </MenuItem>
              <MenuItem onSelect={() => router.push('/writing/uses')}>
                <UsesIcon />
                <span>Uses</span>
              </MenuItem>
            </Menu.Group>
            <Menu.Separator className='-mx-1 my-1 h-px bg-crust' />
            <Menu.Group>
              <MenuItem
                onSelect={() => window.open('https://github.com/idm1try')}
              >
                <GitHubIcon />
                <span>GitHub</span>
              </MenuItem>
              <MenuItem
                onSelect={() => window.open('https://mastodon.social/@idm1try')}
              >
                <MastodonIcon />
                <span>Mastodon</span>
              </MenuItem>
              <MenuItem onSelect={() => window.open('mailto:me@idm1try.ru')}>
                <MailIcon />
                <span>Mail</span>
              </MenuItem>
            </Menu.Group>
          </Menu.Content>
        </Menu.Portal>
      </Menu.Root>
    </nav>
  )
}

const MenuItem = ({ ...props }) => (
  <Menu.Item
    className={cn(
      'relative flex cursor-default select-none',
      'items-center rounded-lg py-1.5 px-2 text-sm',
      'font-medium outline-none focus:bg-surface0',
      'active:bg-surface1 data-[disabled]:pointer-events-none',
      'data-[disabled]:opacity-50'
    )}
    {...props}
  />
)

const ArrowIcon = () => (
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
)

const HomeIcon = () => (
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
)

const WritingIcon = () => (
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
)

const UsesIcon = () => (
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
)

const GitHubIcon = () => (
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
)

const MastodonIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='14'
    height='14'
    viewBox='0 0 24 24'
    className='mr-2'
  >
    <g>
      <path fill='none' d='M0 0h24v24H0z' />
      <path
        fillRule='nonzero'
        fill='currentColor'
        d='M3.018 12.008c-.032-1.26-.012-2.448-.012-3.442 0-4.338 2.843-5.61 2.843-5.61 1.433-.658 3.892-.935 6.45-.956h.062c2.557.02 5.018.298 6.451.956 0 0 2.843 1.272 2.843 5.61 0 0 .036 3.201-.396 5.424-.275 1.41-2.457 2.955-4.963 3.254-1.306.156-2.593.3-3.965.236-2.243-.103-4.014-.535-4.014-.535 0 .218.014.426.04.62.084.633.299 1.095.605 1.435.766.85 2.106.93 3.395.974 1.82.063 3.44-.449 3.44-.449l.076 1.646s-1.274.684-3.542.81c-1.25.068-2.803-.032-4.612-.51-1.532-.406-2.568-1.29-3.27-2.471-1.093-1.843-1.368-4.406-1.431-6.992zm3.3 4.937v-2.548l2.474.605a20.54 20.54 0 0 0 1.303.245c.753.116 1.538.2 2.328.235 1.019.047 1.901-.017 3.636-.224 1.663-.199 3.148-1.196 3.236-1.65.082-.422.151-.922.206-1.482a33.6 33.6 0 0 0 .137-2.245c.015-.51.02-.945.017-1.256v-.059c0-1.43-.369-2.438-.963-3.158a3.008 3.008 0 0 0-.584-.548c-.09-.064-.135-.089-.13-.087-1.013-.465-3.093-.752-5.617-.773h-.046c-2.54.02-4.62.308-5.65.782.023-.01-.021.014-.112.078a3.008 3.008 0 0 0-.584.548c-.594.72-.963 1.729-.963 3.158 0 .232 0 .397-.003.875a77.483 77.483 0 0 0 .014 2.518c.054 2.197.264 3.835.7 5.041.212.587.472 1.07.78 1.45a5.7 5.7 0 0 1-.18-1.505zM8.084 6.37a1.143 1.143 0 1 1 0 2.287 1.143 1.143 0 0 1 0-2.287z'
      />
    </g>
  </svg>
)

const MailIcon = () => (
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
)

export default Navbar
