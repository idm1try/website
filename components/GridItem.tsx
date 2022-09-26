import NextLink from 'next/link';
import Image, { StaticImageData } from 'next/image';
import { Box, Text, LinkBox, LinkOverlay } from '@chakra-ui/react';
import { Global } from '@emotion/react';
import { ReactNode } from 'react';
import emplyThumbnail from 'public/emplyThumbnail.webp';

interface BlogGridItemProps {
  children: ReactNode;
  slug: string;
  title: string;
  thumbnail?: string | StaticImageData;
}

export const BlogGridItem = ({ children, slug, title, thumbnail }: BlogGridItemProps) => (
  <Box w='100%' textAlign='center'>
    <NextLink href={`${slug}`} passHref scroll={false}>
      <LinkBox cursor='pointer'>
        {thumbnail ? (
          <Image
            src={thumbnail}
            alt={title}
            className='grid-item-thumbnail'
            height={320}
            width={720}
            objectFit='cover'
          />
        ) : (
          <Image
            src={emplyThumbnail}
            alt={title}
            className='grid-item-thumbnail'
            height={320}
            width={720}
            objectFit='cover'
          />
        )}
        <LinkOverlay href={`/${slug}`}>
          <Text mt={2} fontSize={20} fontWeight='bold'>
            {title}
          </Text>
        </LinkOverlay>
        <Text fontSize={14} textColor='gray.500'>
          {children}
        </Text>
      </LinkBox>
    </NextLink>
  </Box>
);

export const GridItemStyle = () => (
  <Global
    styles={`
      .grid-item-thumbnail {
        border-radius: 0.5rem;
      }
    `}
  />
);
