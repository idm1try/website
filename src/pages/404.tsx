import cn from '@/lib/classNames'
import Head from 'next/head'
import Link from 'next/link'

const NotFound = () => (
  <div>
    <Head>
      <title>Page Not Found | idm1try</title>
    </Head>
    <div
      className={cn(
        'relative z-10 my-16 flex max-w-7xl',
        'flex-col items-start text-left lg:my-[20vh]',
        'lg:flex-row lg:items-center lg:justify-between'
      )}
    >
      <div
        className={cn(
          'mb-8 animate-fade_in_up_10 pl-2 text-6xl',
          'font-bold tracking-tight text-pink-200',
          'dark:text-pink-100 lg:pl-0 lg:pr-8'
        )}
      >
        404
      </div>
      <div className='relative w-full p-2 text-left leading-8 lg:w-11/12 lg:pl-10'>
        <div className='text-3xl text-subtext0-200 dark:text-subtext0-100'>
          Whoops, it looks like the page you were looking for doesn&apos;t
          exist!
        </div>
        <Link href='/' legacyBehavior>
          <button
            className={cn(
              'mt-8 select-none rounded-lg bg-mantle-200',
              'py-2 px-4 font-bold text-pink-200',
              'transition-colors duration-300 hover:bg-surface0-200',
              'active:bg-surface1-200 dark:bg-mantle-100 dark:text-pink-100',
              'dark:hover:bg-surface0-100 dark:active:bg-surface1-100'
            )}
          >
            Go to home
          </button>
        </Link>
      </div>
    </div>
  </div>
)

export default NotFound
