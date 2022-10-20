import { Box, BoxProps, Center } from '@chakra-ui/react';
import dynamic from 'next/dynamic';

const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });

export const VideoPlayer = (props: BoxProps) => (
  <Center my={8}>
    <Box as={ReactPlayer} maxH={{ base: 200, md: 400 }} {...props} />
  </Center>
);
