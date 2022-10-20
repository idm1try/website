import { Box, BoxProps, Text, useColorModeValue } from '@chakra-ui/react';

const TocNav = ({ children, title, ...rest }: BoxProps) => (
  <Box
    as='nav'
    aria-labelledby='toc-title'
    width='16rem'
    flexShrink={0}
    display={{ base: 'none', '2xl': 'block' }}
    position='fixed'
    py='10'
    pr='8'
    pl='8'
    top='6rem'
    right={{ base: 0, '8xl': 90 }}
    fontSize='sm'
    alignSelf='start'
    maxHeight='calc(100vh - 8rem)'
    overflowY='auto'
    sx={{ overscrollBehavior: 'contain' }}
    {...rest}
  >
    <Text
      as='h2'
      id='toc-title'
      fontWeight='bold'
      fontSize='xs'
      color={useColorModeValue('gray.700', 'gray.400')}
      letterSpacing='wide'
      textTransform='uppercase'
    >
      {title}
    </Text>
    {children}
  </Box>
);

export default TocNav;
