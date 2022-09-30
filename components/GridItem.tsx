import NextLink from 'next/link';
import { StaticImageData } from 'next/image';
import { Box, Text, LinkBox, LinkOverlay } from '@chakra-ui/react';
import { ReactNode } from 'react';
import ChakraNextImage from './ChakraNextImage';

interface BlogGridItemProps {
  children: ReactNode;
  slug: string;
  title: string;
  thumbnail?: string | StaticImageData;
}

export const BlogGridItem = ({ children, slug, title, thumbnail }: BlogGridItemProps) => (
  <Box w='100%' textAlign='center'>
    <NextLink href={`${slug}`} passHref scroll={false}>
      <LinkBox
        cursor='pointer'
        transition='0.25s transform ease-out, 0.25s color ease-out'
        _hover={{ transform: 'translateY(-10px)', color: 'teal.500' }}
        _focus={{
          transform: 'translateY(-10px)',
          shadow: 'outline',
        }}
      >
        {thumbnail ? (
          <ChakraNextImage
            src={thumbnail}
            alt={title}
            height={320}
            width={720}
            objectFit='cover'
            borderRadius='lg'
          />
        ) : (
          <ChakraNextImage
            src='/card.png'
            alt={title}
            height={320}
            width={720}
            objectFit='cover'
            borderRadius='lg'
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
