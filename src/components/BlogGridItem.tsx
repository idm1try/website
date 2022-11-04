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
  image?: string | StaticImageData;
}

const BlogGridItem = ({ children, slug, title, description, image }: BlogGridItemProps) => (
  <Box
    w='100%'
    transition='0.25s transform ease-out'
    _hover={{ transform: 'translateY(-10px)' }}
    _focus={{
      transform: 'translateY(-10px)',
      shadow: 'outline',
    }}
  >
    <NextLink href={slug} passHref scroll={false} legacyBehavior>
      <LinkBox cursor='pointer'>
        {image ? (
          <Image src={image} alt={title} height={320} width={720} objectFit='cover' />
        ) : (
          <Image src='/card.png' alt={title} height={320} width={720} objectFit='cover' />
        )}
        <LinkOverlay href={slug} transition='0.25s color ease-out' _hover={{ color: 'accent' }}>
          <Text mt={2} fontSize={20} fontWeight='bold' noOfLines={2}>
            {title}
          </Text>
        </LinkOverlay>
        {description && (
          <Text fontSize={14} color='gray.500' mt={1} noOfLines={2}>
            {description}
          </Text>
        )}
      </LinkBox>
    </NextLink>
    <Box fontSize={14}>{children}</Box>
  </Box>
);

export default BlogGridItem;
