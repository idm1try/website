import { Avatar, Box, HStack, Text } from '@chakra-ui/react';
import { ReactNode } from 'react';
import Layout from './Article';

interface BlogLayoutProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  frontmatter: any;
  children: ReactNode;
}

export default function BlogLayout(props: BlogLayoutProps) {
  const { frontmatter, children } = props;

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
      <Box>{children}</Box>
    </Layout>
  );
}
