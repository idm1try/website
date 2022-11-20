import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Spinner from './Spinner';

interface CoverImageProps {
  title: string;
  cover: string;
  slug?: string;
}

const CoverImage = ({ title, cover = '', slug }: CoverImageProps) => {
  const [imageImport, setImage] = useState('');
  const loadImage = (imgur: string) => {
    if (!imgur) {
      return false;
    }
    import(`../../public/posts/${imgur}`).then(image => {
      setImage(image);
    });
  };
  loadImage(cover);

  const imageComponent = !imageImport ? (
    <div className='my-[59px] py-4'>
      <Spinner className='m-auto' />
    </div>
  ) : (
    <Image
      src={imageImport}
      alt={`Cover Image for ${title}`}
      placeholder='blur'
      className={
        slug
          ? 'max-h-96 rounded-lg object-cover ring-mauve-200 ring-offset-4 ring-offset-base-200 duration-300 group-hover:ring-2 dark:ring-mauve-100 dark:ring-offset-base-100'
          : 'rounded-lg bg-blend-overlay'
      }
    />
  );

  return (
    <div>
      {!cover.includes('.gif') ? (
        <Link
          as={slug ? `/blog/${slug}` : '#'}
          href='/blog/[slug]'
          aria-label={title}
          className='bg-pink-200'
          tabIndex={-1}
        >
          {imageComponent}
        </Link>
      ) : (
        <Link
          as={slug ? `/blog/${slug}` : '#'}
          href='/blog/[slug]'
          aria-label={title}
          className='bg-pink-200'
          tabIndex={-1}
        >
          {/* eslint-disable @next/next/no-img-element */}
          <img
            alt={slug}
            src={`/posts/${cover}`}
            className='mx-auto rounded-lg object-cover ring-mauve-200 ring-offset-4 ring-offset-base-200 duration-300 group-hover:ring-2 dark:ring-mauve-100 dark:ring-offset-base-100'
            loading='eager'
          />
        </Link>
      )}
    </div>
  );
};

export default CoverImage;
