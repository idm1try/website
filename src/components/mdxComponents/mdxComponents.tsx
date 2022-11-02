import {
  Alert,
  AspectRatio,
  Badge,
  Box,
  chakra,
  ChakraProps,
  Divider,
  Heading,
  Kbd,
  Link,
} from '@chakra-ui/react';
import Image from 'components/Image';
import ScreenshotLink, { ScreenshotLinkProps } from 'components/ScreenshotLink';
import { ImageProps } from 'next/legacy/image';
import NextLink from 'next/link';
import CodeBlock from './codeblock';
import { InlineCode } from './InlineCode';
import { LinkedHeading } from './LinkedHeading';
import { Table, TData, THead } from './Table';
import { VideoPlayer } from './VideoPlayer';

export const MDXComponents = {
  p: (props: ChakraProps) => <Box {...props} />,
  img: (props: ImageProps) => (
    <Image
      layout='responsive'
      width={750}
      height={350}
      objectFit='contain'
      my={8}
      alt='image'
      {...props}
    />
  ),
  h1: (props: ChakraProps) => <Heading my={8} fontSize='4xl' {...props} />,
  h2: (props: ChakraProps) => <LinkedHeading fontSize='3xl' lineHeight='1.5em' {...props} />,
  h3: (props: ChakraProps) => <LinkedHeading fontSize='2xl' lineHeight='1.5em' {...props} />,
  h4: (props: ChakraProps) => <LinkedHeading fontSize='xl' {...props} />,
  Divider: (props: ChakraProps) => <Divider my={8} {...props} />,
  code: InlineCode,
  pre: (props: { children: string }) => {
    if (typeof props.children === 'string') return <chakra.div my='2em' rounded='sm' {...props} />;
    return <CodeBlock {...props} />;
  },
  Kbd: (props: ChakraProps) => <Kbd {...props} />,
  table: Table,
  th: THead,
  td: TData,
  a: (props: ScreenshotLinkProps) => {
    const href = props.href;
    const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'));
    const isExternalLink = href && (href.startsWith('https') || href.startsWith('http'));

    if (isInternalLink) {
      return <Link as={NextLink} href={href} passHref {...props} />;
    }

    if (isExternalLink) {
      return <ScreenshotLink {...props} />;
    }

    return <Link {...props} />;
  },
  ul: (props: ChakraProps) => <chakra.ul ps={4} my={5} {...props} />,
  ol: (props: ChakraProps) => <chakra.ol ps={4} my={5} {...props} />,
  li: (props: ChakraProps) => (
    <chakra.li my={2} sx={{ '&::marker': { color: 'accent' } }} {...props} />
  ),
  blockquote: (props: ChakraProps) => (
    <Alert
      as='blockquote'
      my={8}
      role='none'
      rounded='lg'
      status='warning'
      variant='left-accent'
      {...props}
    />
  ),
  Badge: (props: ChakraProps) => <Badge colorScheme='teal' {...props} />,
  AspectRatio,
  VideoPlayer,
};
