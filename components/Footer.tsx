import { Box } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box textAlign='center' color='gray.500' fontSize='sm' mt={5}>
      &copy; {new Date().getFullYear()}{' '}
      <a href='https://idm1try.github.io'>
        <b>idm1try</b>
      </a>
    </Box>
  );
};

export default Footer;
