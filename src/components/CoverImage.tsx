import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Spinner from './Spinner';

interface CoverImageProps {
  title: string;
  cover: string;
  slug?: string;
  width?: number;
  height?: number;
  loading?: 'lazy' | 'eager';
  priority?: boolean;
}

const CoverImage = ({
  title,
  cover = '',
  slug,
  width,
  height,
  loading,
  priority,
}: CoverImageProps) => {
  const [imageImport, setImage] = useState('');
  const loadImage = (img: string) => {
    if (!img) {
      return false;
    }
    import(`../../public/assets/posts/${img}`).then(image => {
      setImage(image);
    });
  };

  useEffect(() => {
    loadImage(cover);
  });

  const imageComponent = !imageImport ? (
    <div className='rounded-lg bg-mantle-200 py-14 dark:bg-mantle-100'>
      <Spinner className='mx-auto' size={50} />
    </div>
  ) : (
    <Image
      src={imageImport}
      alt={`Cover Image for ${title}`}
      width={width}
      height={height}
      placeholder='blur'
      loading={loading ?? 'lazy'}
      priority={priority}
      className={slug ? 'max-h-96 rounded-lg object-cover' : 'rounded-lg bg-blend-overlay'}
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
            src={`/assets/posts/${cover}`}
            width={width}
            height={height}
            className='mx-auto rounded-lg object-cover ring-mauve-200 ring-offset-4 ring-offset-base-200 duration-300 group-hover:ring-2 dark:ring-mauve-100 dark:ring-offset-base-100'
            loading='eager'
          />
        </Link>
      )}
    </div>
  );
};

export default CoverImage;
