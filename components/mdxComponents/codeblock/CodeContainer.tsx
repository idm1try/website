import { Box, BoxProps, useColorModeValue } from '@chakra-ui/react';

const CodeContainer = (props: BoxProps) => (
  <Box padding={5} rounded='lg' my={8} bg={useColorModeValue('#FBFBFB', '#011627')} {...props} />
);

export default CodeContainer;
