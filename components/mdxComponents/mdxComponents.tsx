import {
  Alert,
  Badge,
  ChakraProps,
  Divider,
  Heading,
  Kbd,
  Link,
  LinkProps,
  ListItem,
  OrderedList,
  UnorderedList,
} from '@chakra-ui/react';
import Image from 'components/Image';
import { ImageProps } from 'next/image';
import NextLink from 'next/link';
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
      width={750}
      height={350}
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
  Divider: (props: ChakraProps) => <Divider my={8} {...props} />,
  code: InlineCode,
  pre: (props: { children: string }) => {
    if (typeof props.children === 'string') return <Pre {...props} />;
    return <CodeBlock {...props} />;
  },
  Kbd: (props: ChakraProps) => <Kbd {...props} />,
  table: Table,
  th: THead,
  td: TData,
  a: (props: LinkProps) => {
    const href = props.href;
    const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'));

    if (isInternalLink) {
      return (
        <NextLink href={href} passHref>
          <Link {...props} />
        </NextLink>
      );
    }

    return <Link {...props} />;
  },
  ul: (props: ChakraProps) => <UnorderedList mt='0.5rem' ml='1.25rem' {...props} />,
  ol: (props: ChakraProps) => <OrderedList mt='0.5rem' ml='1.25rem' {...props} />,
  li: (props: ChakraProps) => <ListItem pb='4px' {...props} />,
  blockquote: (props: ChakraProps) => (
    <Alert
      role='none'
      status='warning'
      variant='left-accent'
      as='blockquote'
      rounded='lg'
      my={8}
      {...props}
    />
  ),
  Badge: (props: ChakraProps) => <Badge colorScheme='teal' {...props} />,
  VideoPlayer,
};
