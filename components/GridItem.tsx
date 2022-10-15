import NextLink from 'next/link';
import { StaticImageData } from 'next/image';
import { Box, Text, LinkBox, LinkOverlay } from '@chakra-ui/react';
import { ReactNode } from 'react';
import Image from './Image';

interface BlogGridItemProps {
  children: ReactNode;
  slug: string;
  title: string;
  description?: string;
  thumbnail?: string | StaticImageData;
}

export const BlogGridItem = ({
  children,
  slug,
  title,
  description,
  thumbnail,
}: BlogGridItemProps) => (
  <Box
    w='100%'
    transition='0.25s transform ease-out'
    _hover={{ transform: 'translateY(-10px)' }}
    _focus={{
      transform: 'translateY(-10px)',
      shadow: 'outline',
    }}
  >
    <NextLink href={slug} passHref scroll={false}>
      <LinkBox cursor='pointer'>
        {thumbnail ? (
          <Image src={thumbnail} alt={title} height={320} width={720} objectFit='cover' />
        ) : (
          <Image src='/card.png' alt={title} height={320} width={720} objectFit='cover' />
        )}
        <LinkOverlay href={slug} transition='0.25s color ease-out' _hover={{ color: 'accent' }}>
          <Text mt={2} fontSize={20} fontWeight='bold'>
            {title}
          </Text>
        </LinkOverlay>
        {description && (
          <Text fontSize={14} color='gray.500' mt={1}>
            {description}
          </Text>
        )}
      </LinkBox>
    </NextLink>
    <Box fontSize={14}>{children}</Box>
  </Box>
);
