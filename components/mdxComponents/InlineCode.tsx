import { chakra, HTMLChakraProps, useColorModeValue } from '@chakra-ui/react';

export const InlineCode = (props: HTMLChakraProps<'code'>) => {
  return (
    <chakra.code
      apply='mdx.code'
      color={useColorModeValue('purple.500', 'purple.200')}
      {...props}
    />
  );
};
