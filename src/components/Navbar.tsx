import dynamic from 'next/dynamic';
import Link from 'next/link';

const ThemeToggle = dynamic(import('./ThemeToggle'), { ssr: false });

const Navbar = () => {
  return (
    <nav className='navbar mx-auto my-4 flex max-w-5xl py-4'>
      <ul className='flex w-full items-center space-x-10 text-xl font-medium text-subtext0-200 dark:text-subtext0-100'>
        <li>
          <Link href='/' className='pb-0.5 transition-all duration-200'>
            home
          </Link>
        </li>
        <li>
          <Link href='/blog' className='pb-0.5 transition-all duration-200'>
            blog
          </Link>
        </li>
      </ul>
      <ThemeToggle />
    </nav>
  );
};
export default Navbar;
