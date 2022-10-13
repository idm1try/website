import { chakra, useColorModeValue } from '@chakra-ui/react';

export const Table = (props: object) => (
  <chakra.div overflowX='auto' rounded='lg' my={8}>
    <chakra.table textAlign='left' width='full' {...props} />
  </chakra.div>
);

export const THead = (props: object) => (
  <chakra.th
    bg={useColorModeValue('gray.100', 'whiteAlpha.100')}
    fontWeight='semibold'
    p={2}
    fontSize='sm'
    {...props}
  />
);

export const TData = (props: object) => (
  <chakra.td
    p={2}
    borderTopWidth={1}
    fontSize='sm'
    whiteSpace='normal'
    borderColor={useColorModeValue('gray.100', 'gray.700')}
    bgColor={useColorModeValue('gray.50', 'gray.900')}
    {...props}
  />
);
