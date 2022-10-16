import {
  Alert,
  AspectRatio,
  Badge,
  Box,
  chakra,
  ChakraProps,
  Heading,
  Kbd,
  Link,
  ListItem,
  OrderedList,
  Text,
  UnorderedList,
} from '@chakra-ui/react';
import Image from 'components/Image';
import { ImageProps } from 'next/image';
import CodeBlock from './codeblock';
import { InlineCode } from './InlineCode';
import { LinkedHeading } from './LinkedHeading';
import { Pre } from './Pre';
import { Table, TData, THead } from './Table';
import { VideoPlayer } from './VideoPlayer';

export const MDXComponents = {
  Image: (props: ImageProps) => (
    <Image
      layout='responsive'
      width={1000}
      height={400}
      objectFit='contain'
      my={8}
      alt='image'
      {...props}
    />
  ),
  LinkedImage: ({ href, src, ...props }: { href: string; src: string }) => (
    <Link display='block' my={8} href={href} isExternal>
      <MDXComponents.Image src={src} {...props} />
    </Link>
  ),
  h1: (props: ChakraProps) => <Heading my={8} fontSize='4xl' {...props} />,
  h2: (props: ChakraProps) => <LinkedHeading fontSize='3xl' {...props} />,
  h3: (props: ChakraProps) => <LinkedHeading fontSize='2xl' {...props} />,
  h4: (props: ChakraProps) => <LinkedHeading fontSize='xl' {...props} />,
  hr: (props: ChakraProps) => <chakra.hr my='4rem' {...props} />,
  strong: (props: ChakraProps) => <Box as='strong' fontWeight='semibold' {...props} />,
  code: InlineCode,
  pre: (props: { children: string }) => {
    if (typeof props.children === 'string') return <Pre {...props} />;
    return <CodeBlock {...props} />;
  },
  Kbd: (props: ChakraProps) => <Kbd {...props} />,
  br: ({ reset, ...props }: { reset: string }) => (
    <Box as={reset ? 'br' : undefined} height={reset ? undefined : '24px'} {...props} />
  ),
  table: Table,
  th: THead,
  td: TData,
  a: (props: ChakraProps) => <Link {...props} />,
  p: (props: ChakraProps) => <Text {...props} />,
  ul: (props: ChakraProps) => <UnorderedList mt='0.5rem' ml='1.25rem' {...props} />,
  ol: (props: ChakraProps) => <OrderedList mt='0.5rem' ml='1.25rem' {...props} />,
  li: (props: ChakraProps) => <ListItem pb='4px' {...props} />,
  blockquote: (props: ChakraProps) => (
    <Alert
      mt='4'
      role='none'
      status='warning'
      variant='left-accent'
      as='blockquote'
      rounded='lg'
      my='1.5rem'
      {...props}
    />
  ),
  Badge: (props: ChakraProps) => <Badge colorScheme='teal' {...props} />,
  VideoPlayer,
  AspectRatio,
};
