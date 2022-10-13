import { extendTheme } from '@chakra-ui/react';

const customTheme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: true,
  },
  semanticTokens: {
    colors: {
      accent: { default: 'teal.500', _dark: 'teal.300' },
      grassTeal: '#88ccca',
    },
  },
  breakpoints: {
    sm: '330px',
  },
  styles: {
    global: {
      body: {
        WebkitFontSmoothing: 'antialiased',
        MozOsxFontSmoothing: 'grayscale',
        color: 'fg',
        '.deleted': {
          color: '#ff8383 !important',
          fontStyle: 'normal !important',
        },
        '.inserted': {
          color: '#b5f4a5 !important',
          fontStyle: 'normal !important',
        },
      },
    },
  },
  components: {
    Link: {
      baseStyle: {
        color: 'accent',
        textUnderlineOffset: 3,
      },
    },
    Button: {
      baseStyle: {
        rounded: 'lg',
      },
    },
  },
});

export default customTheme;
