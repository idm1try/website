import { Box, Link } from '@chakra-ui/react';
import { ReactNode, useState } from 'react';
import { motion } from 'framer-motion';
import Image from './Image';

export interface ScreenshotLinkProps {
  href: string;
  children: ReactNode;
}

const ScreenshotLink = ({ href, children }: ScreenshotLinkProps) => {
  const [isHovering, setIsHovering] = useState(false);
  const [linkScreenshot, setLinkScreenshot] = useState('');

  const fetchImage = async (url: string) => {
    try {
      setIsHovering(true);
      const res = await fetch(`/api/screenshot-link?url=${encodeURIComponent(url)}`);
      const image = await res.blob();
      setLinkScreenshot(URL.createObjectURL(image));
    } catch (e) {
      console.error('Error fetching screenshot image', e);
    }
  };

  return (
    <span>
      <Box
        pos='relative'
        display='inline-block'
        onMouseOver={() => fetchImage(href)}
        onMouseOut={() => setIsHovering(false)}
        onBlur={() => setIsHovering(false)}
      >
        {isHovering && linkScreenshot && (
          <motion.div
            initial={{ opacity: 0, x: 0, y: '3.2rem' }}
            animate={{ opacity: 1, x: 0, y: '2.0rem' }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            style={{ position: 'absolute' }}
          >
            <Image
              src={linkScreenshot}
              height={180}
              width={300}
              unoptimized
              alt='Link preview'
              rounded='lg'
              pointerEvents='none'
              pos='absolute'
              right='1/2'
              bottom='2.0rem'
              zIndex={9}
              display='block'
              w={52}
              shadow='lg'
            />
          </motion.div>
        )}
        <Link href={href}>{children}</Link>
      </Box>
    </span>
  );
};

export default ScreenshotLink;
