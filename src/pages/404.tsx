import Layout from '@/components/Layout';
import Link from 'next/link';
import { TbHome } from 'react-icons/tb';

const NotFound = () => (
  <Layout className='text-center'>
    <div className='my-10'>
      <h1 className='animate-fade_in_up_10 text-5xl font-bold text-pink-200 dark:text-pink-100'>
        404
      </h1>
      <p className='my-5 text-xl font-medium'>Oops, not found</p>
    </div>
    <Link href='/'>
      <button className='mt-3 select-none rounded-lg bg-pink-200 py-2 px-4 font-bold text-base-200 transition-colors duration-500 hover:bg-flamingo-200 active:bg-rosewater-200 dark:bg-pink-100 dark:text-base-100 dark:hover:bg-flamingo-100 dark:active:bg-rosewater-100'>
        <TbHome className='mb-1 inline-block' /> Go to home
      </button>
    </Link>
  </Layout>
);

export default NotFound;
