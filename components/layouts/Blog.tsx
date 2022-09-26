import { Avatar, Box, Divider, Heading, HStack, Text } from '@chakra-ui/react';
import Image from 'next/image';
import { ReactNode } from 'react';
import Layout from './Article';

interface BlogLayoutProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  frontmatter: any;
  children: ReactNode;
  thumbnail: string;
}

export default function BlogLayout(props: BlogLayoutProps) {
  const { frontmatter, thumbnail, children } = props;

  if (!frontmatter) return <></>;

  const { publishedDate = {}, authorData: data = {} } = frontmatter;

  return (
    <Layout title={frontmatter.title}>
      <HStack mt={8} mb={4}>
        <Avatar size='md' src={data.avatar_url} />
        <Box>
          <Text fontWeight='bold' fontSize='sm'>
            <a href={data.url}>{data.name}</a>
          </Text>
          <Text fontSize='xs' color='gray.500'>
            {publishedDate.text}
          </Text>
        </Box>
      </HStack>
      {thumbnail && (
        <Box my={4}>
          <Image
            src={thumbnail}
            alt={frontmatter.title}
            className='grid-item-thumbnail'
            height={350}
            width={750}
            objectFit='cover'
          />
        </Box>
      )}
      <Heading fontSize='3xl' my={1}>
        {frontmatter.title}
      </Heading>
      <Text color='gray.500'>{frontmatter.description}</Text>
      <Divider my={4} />

      <Box>{children}</Box>
    </Layout>
  );
}
