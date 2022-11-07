import { Box, Heading, HStack, Tag, Text } from '@chakra-ui/react';
import Avatar from 'components/Avatar';
import Image from 'components/Image';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const Page = () => {
  const router = useRouter();

  const searchParams = new URLSearchParams(router.asPath.split(/\?/)[1]);

  const title = searchParams.get('title');
  const description = searchParams.get('description');
  const date = searchParams.get('date');
  const author = searchParams.get('author');
  const avatar = searchParams.get('avatar');
  const image = searchParams.get('image');
  const readingTime = searchParams.get('readingTime');
  const tags = searchParams.get('tags')?.split(',') ?? [];

  const [hasWindow, setHasWindow] = useState(false);

  useEffect(() => setHasWindow(true), []);

  if (!hasWindow) return;

  return (
    <>
      <NextSeo noindex nofollow />
      <Box pos='relative' p='20' color='gray.100' w='1200px' h='630px'>
        <Heading
          color='teal.300'
          as='h1'
          size='4xl'
          w='15ch'
          mb={5}
          lineHeight='1.2em'
          noOfLines={2}
        >
          {title}
        </Heading>

        {description != 'undefined' && (
          <Text color='gray.500' fontSize='2xl' mb={5} maxW='45ch' noOfLines={2}>
            {description}
          </Text>
        )}

        {tags.map(tag => (
          <>
            {tag != 'undefined' && (
              <Tag
                colorScheme='teal'
                fontWeight='bold'
                fontSize='3xl'
                rounded='lg'
                key={tag}
                mr={2}
                py={2}
                px={3}
              >
                {tag}
              </Tag>
            )}
          </>
        ))}

        <HStack spacing='10' pos='absolute' bottom={20} left={20}>
          <Avatar src={avatar == 'undefined' ? undefined : avatar} size={110} alt={author} />
          <Box fontSize='3xl' fontWeight='bold'>
            {author}
            <Text fontSize='2xl' color='gray.500'>
              {date} &bull; {readingTime}
            </Text>
          </Box>
        </HStack>

        {image != 'undefined' && (
          <Image
            src={image}
            width={300}
            height={200}
            pos='absolute'
            right={20}
            top={20}
            alt={title}
            objectFit='cover'
            rounded='2xl'
          />
        )}

        <Box
          pos='absolute'
          bottom='20'
          right='20'
          rounded='2xl'
          fontWeight='semibold'
          fontSize='3xl'
          bg='teal.300'
          color='black'
          px='6'
          py='2'
        >
          https://blog.idm1try.ru
        </Box>
      </Box>
    </>
  );
};

export default Page;
