import { Box, BoxProps } from '@chakra-ui/react';

function CodeContainer(props: BoxProps) {
  return <Box padding={5} rounded='lg' my={8} bg='#011627' {...props} />;
}

export default CodeContainer;
