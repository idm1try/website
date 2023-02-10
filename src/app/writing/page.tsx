import { allWritings, Writing as WritingProps } from 'contentlayer/generated'
import Link from 'next/link'

export const metadata = {
  title: 'Writing',
  twitter: {
    title: 'Writing',
    images: 'https://idm1try.ru/api/og?heading=Writing',
  },
  openGraph: {
    title: 'Writing',
    url: 'https://idm1try.ru/writing',
    images: 'https://idm1try.ru/api/og?heading=Writing',
  },
  alternates: {
    canonical: 'https://idm1try.ru/writing',
  },
}

const Writing = () => (
  <section>
    <ul className='animated-list'>
      {allWritings
        .sort((a: WritingProps, b: WritingProps) => (a.date > b.date ? -1 : 1))
        .map(writing => (
          <li key={writing._id} className='transition-all duration-300'>
            <Link
              href={`writing/${writing.slug}`}
              className='-mx-3 flex flex-col gap-1 rounded-xl p-3 focus:bg-neutral-200/40 focus:outline-none dark:focus:bg-neutral-800/75 md:flex-row md:gap-9'
            >
              <span className='text-neutral-600 dark:text-neutral-400 md:w-28'>
                {new Date(writing.date).toLocaleString('en-US', {
                  month: 'numeric',
                  day: 'numeric',
                  year: 'numeric',
                })}
              </span>
              <span className='font-medium'>{writing.title}</span>
            </Link>
          </li>
        ))}
    </ul>
  </section>
)

export default Writing
