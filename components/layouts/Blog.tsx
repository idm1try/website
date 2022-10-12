import {
  Box,
  Divider,
  Heading,
  HStack,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverTrigger,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import Giscus from '@giscus/react';
import Avatar from 'components/Avatar';
import Image from 'components/Image';
import Member from 'components/Member';
import TableOfContent from 'components/TableOfContents';
import { ReactNode } from 'react';
import Layout from './Article';

interface BlogLayoutProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  frontmatter: any;
  children: ReactNode;
}

export default function BlogLayout(props: BlogLayoutProps) {
  const { frontmatter, children } = props;
  const commentsTheme = useColorModeValue('light', 'dark');

  if (!frontmatter) return <></>;

  const { publishedDate = {}, authorData: data = {}, headings = [] } = frontmatter;

  return (
    <>
      <Layout
        title={frontmatter.title}
        description={frontmatter.description}
        image={frontmatter.thumbnail.url}
      >
        <HStack my={6}>
          <Box>
            <Popover isLazy trigger='hover' id='author-info'>
              <PopoverTrigger>
                <Box>
                  <Avatar src={data.avatarUrl} size={48} alt={data.name} />
                </Box>
              </PopoverTrigger>
              <PopoverContent maxW={{ base: 240, sm: 320 }}>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverBody>
                  <Member member={data} />
                </PopoverBody>
              </PopoverContent>
            </Popover>
          </Box>
          <Box>
            <Text fontWeight='bold' fontSize='sm'>
              {data.name}
            </Text>
            <Text fontSize='xs' color='gray.500'>
              {publishedDate.text}
            </Text>
          </Box>
        </HStack>
        {frontmatter.thumbnail.raw && (
          <Image
            src={frontmatter.thumbnail.raw}
            alt={frontmatter.title}
            className='grid-item-thumbnail'
            height={350}
            width={750}
            objectFit='cover'
            borderRadius='lg'
            my={4}
          />
        )}
        <Heading fontSize='3xl' my={1}>
          {frontmatter.title}
        </Heading>
        <Text color='gray.500'>{frontmatter.description}</Text>
        <Divider my={4} />

        {children}

        <Box mt={8}>
          <Giscus
            id='comments'
            repo='idm1try/idm1try-blog'
            repoId='R_kgDOIEagqg'
            category='General'
            categoryId='DIC_kwDOIEagqs4CR4PJ'
            mapping='title'
            reactionsEnabled='1'
            emitMetadata='0'
            inputPosition='bottom'
            theme={commentsTheme}
            lang='en'
            loading='lazy'
          />
        </Box>
      </Layout>

      <TableOfContent
        visibility={headings.length === 0 ? 'hidden' : 'initial'}
        headings={headings}
      />
    </>
  );
}
