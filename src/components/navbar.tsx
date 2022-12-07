import dynamic from 'next/dynamic'
import Link from 'next/link'

const links = [
  { title: 'home', href: '/' },
  { title: 'blog', href: '/blog' },
  { title: 'work', href: '/projects' },
]

const ThemeToggle = dynamic(import('./theme-toggle'), { ssr: false })

const Navbar = () => (
  <nav className='navbar my-4 flex py-4'>
    <ul className='flex w-full items-center space-x-5 text-xl font-medium text-subtext0-200 dark:text-subtext0-100 md:space-x-10'>
      {links.map(item => (
        <li key={item.title}>
          <Link
            href={item.href}
            className='pb-0.5 transition-colors duration-300'
          >
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
    <ThemeToggle />
  </nav>
)

export default Navbar
