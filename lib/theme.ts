import { extendTheme, type ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: true,
};

const breakpoints = { sm: '330px' };

const theme = extendTheme({ config, breakpoints });

export default theme;
