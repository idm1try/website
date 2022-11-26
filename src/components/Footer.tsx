import { SiTypescript } from 'react-icons/si';
import { TbBrandNextjs, TbBrandReactNative, TbBrandTailwind, TbHeart } from 'react-icons/tb';

const Footer = () => (
  <footer className='my-12 text-center text-surface2-200 dark:text-surface2-100'>
    Made with <TbHeart className='mb-1 inline-block text-red-200 dark:text-red-100' /> and{' '}
    <SiTypescript className='mx-1 mb-1 inline-block text-blue-200 dark:text-blue-100' size={12} />
    <TbBrandReactNative className='mb-1 mr-1 inline-block text-sapphire-200 dark:text-sapphire-100' />
    <TbBrandNextjs className='mb-1 mr-1 inline-block text-text-200 dark:text-text-100' />
    <TbBrandTailwind className='mb-1 mr-1 inline-block text-sky-200 dark:text-sky-100' />
  </footer>
);

export default Footer;
