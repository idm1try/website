import { ReactNode, useState } from 'react';
import Image from 'next/image';
import Spinner from './Spinner';

type ScreenshotLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
};

const ScreenshotLink = ({ href, children, className = '' }: ScreenshotLinkProps) => {
  const [isHovering, setIsHovering] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [linkScreenshot, setLinkScreenshot] = useState('');

  const fetchImage = async (url: string) => {
    let colorScheme: 'light' | 'dark' = 'light';
    if (typeof document !== 'undefined') {
      colorScheme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
    }
    try {
      setIsLoading(true);
      setIsHovering(true);
      const res = await fetch(
        `/api/screenshot-link?url=${encodeURIComponent(url)}&colorScheme=${colorScheme}`
      );
      const image = await res.blob();
      setLinkScreenshot(res.status !== 500 && URL.createObjectURL(image));
      setIsLoading(false);
    } catch (e) {
      console.error('Error fetching screenshot image', e);
    }
  };

  return (
    <span>
      <div
        className={`relative inline-block ${className}`}
        onMouseOver={() => fetchImage(href)}
        onMouseOut={() => setIsHovering(false)}
        onFocus={() => fetchImage(href)}
        onBlur={() => setIsHovering(false)}
      >
        {isHovering && (
          <div className='animate-fade_in_up_10'>
            {isLoading ? (
              <div className='pointer-events-none absolute bottom-2 z-10 block h-[105px] w-44 rounded-lg bg-mantle-200 dark:bg-mantle-100'>
                <Spinner className='mx-auto mt-8' />
              </div>
            ) : (
              <div>
                {!linkScreenshot ? (
                  <div className='pointer-events-none absolute bottom-2 z-10 block h-[105px] w-44 rounded-lg bg-mantle-200 dark:bg-mantle-100'>
                    <div className='mt-10 text-center text-lg font-bold text-pink-200 dark:text-pink-100'>
                      Error or not found
                    </div>
                  </div>
                ) : (
                  <div className='absolute bottom-2 z-10 block w-44 lg:block'>
                    <Image
                      src={linkScreenshot}
                      height={180}
                      width={300}
                      unoptimized
                      alt='Link preview'
                      className='rounded-md'
                    />
                  </div>
                )}
              </div>
            )}
          </div>
        )}
        <a href={href} className='border-underline-grow mb-1 pb-0.5 transition-all'>
          {children}
        </a>
      </div>
    </span>
  );
};

export default ScreenshotLink;
