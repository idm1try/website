import { AbsoluteCenter, Box, Link, Spinner, useColorModeValue } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { ReactNode, useState } from 'react';
import Image from './Image';

export interface ScreenshotLinkProps {
  href: string;
  children: ReactNode;
}

const ScreenshotLink = ({ href, children }: ScreenshotLinkProps) => {
  const [isHovering, setIsHovering] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [linkScreenshot, setLinkScreenshot] = useState('');
  const bgColor = useColorModeValue('gray.50', 'gray.900');

  const fetchImage = async (url: string) => {
    try {
      setIsHovering(true);
      const res = await fetch(`/api/screenshot-link?url=${encodeURIComponent(url)}`);
      const image = await res.blob();
      setLinkScreenshot(res.status !== 500 && URL.createObjectURL(image));
      setIsLoading(false);
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
        {isHovering && (
          <motion.div
            initial={{ opacity: 0, x: 0, y: '3.2rem' }}
            animate={{ opacity: 1, x: 0, y: '2.0rem' }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            style={{ position: 'absolute' }}
          >
            {isLoading ? (
              <Box
                pos='absolute'
                pointerEvents='none'
                display='block'
                zIndex={9}
                bgColor={bgColor}
                height={124}
                width={52}
                shadow='lg'
                bottom='2.0rem'
                rounded='lg'
              >
                <AbsoluteCenter>
                  <Spinner color='accent' size='lg' thickness='4px' />
                </AbsoluteCenter>
              </Box>
            ) : (
              <Box>
                {linkScreenshot ? (
                  <Image
                    src={linkScreenshot}
                    height={180}
                    width={300}
                    alt='Link preview'
                    rounded='lg'
                    pointerEvents='none'
                    pos='absolute'
                    bottom='2.0rem'
                    zIndex={9}
                    display='block'
                    h={124}
                    w={52}
                    shadow='lg'
                  />
                ) : (
                  <Box
                    pos='absolute'
                    pointerEvents='none'
                    display='block'
                    zIndex={9}
                    bgColor={bgColor}
                    height={124}
                    width={52}
                    shadow='lg'
                    bottom='2.0rem'
                    rounded='lg'
                  >
                    <AbsoluteCenter color='accent' fontWeight='bold'>
                      Error or not found
                    </AbsoluteCenter>
                  </Box>
                )}
              </Box>
            )}
          </motion.div>
        )}
        <Link href={href}>{children}</Link>
      </Box>
    </span>
  );
};

export default ScreenshotLink;
