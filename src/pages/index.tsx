import Layout from '@/components/Layout';
import ScreenshotLink from '@/components/ScreenshotLink';
import { TbBrandGithub, TbBrandTwitter, TbMail } from 'react-icons/tb';

const Home = () => (
  <Layout>
    <div className='relative z-10 my-16 flex max-w-7xl flex-col items-start text-left lg:my-[20vh] lg:flex-row lg:items-center lg:justify-between'>
      <div className='mb-8 animate-fade_in_up_10 pl-2 text-6xl font-bold tracking-tight text-pink-200 dark:text-pink-100 lg:pl-0 lg:pr-8'>
        idm1try
      </div>
      <div className='relative w-full p-2 text-left text-xl leading-8 lg:w-11/12 lg:pl-10'>
        <div>
          Hi! My name&apos;s Dmitry. I&apos;m a beginner front-end developer and based in{' '}
          <ScreenshotLink href='https://en.wikipedia.org/wiki/Neftekamsk'>
            Neftekamsk
          </ScreenshotLink>
          , Russia.
        </div>
        <div className='mt-2 font-bold underline decoration-surface2-200 decoration-4 underline-offset-4 transition-colors duration-500 hover:decoration-pink-200 dark:decoration-surface2-100 dark:hover:decoration-pink-200'>
          Links
        </div>
        <ul className='mt-2'>
          <li>
            <TbBrandGithub className='mr-1 inline-block text-mauve-200 dark:text-mauve-100' />{' '}
            <ScreenshotLink href='https://github.com/idm1try'>@idm1try</ScreenshotLink>
          </li>
          <li>
            <TbBrandTwitter className='mr-1 inline-block text-mauve-200 dark:text-mauve-100' />{' '}
            <ScreenshotLink href='https://twitter.com/idm1try'>@idm1try</ScreenshotLink>
          </li>
          <li>
            <TbMail className='mr-1 inline-block text-mauve-200 dark:text-mauve-100' />{' '}
            <a className='border-underline-grow' href='mailto:admin@idm1try.ru'>
              admin@idm1try.ru
            </a>
          </li>
        </ul>
      </div>
    </div>
  </Layout>
);

export default Home;
