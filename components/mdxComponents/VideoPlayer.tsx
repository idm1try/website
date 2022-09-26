import { Box, BoxProps, Center } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';

export const VideoPlayer = (props: BoxProps) => {
  const [hasWindow, setHasWindow] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setHasWindow(true);
    }
  }, []);

  return (
    <Center my={8}>
      {hasWindow && <Box as={ReactPlayer} maxH={{ base: 200, md: 400 }} {...props} />}
    </Center>
  );
};
