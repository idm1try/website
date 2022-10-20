import { ColorModeScript } from '@chakra-ui/react';
import { Html, Head, Main, NextScript } from 'next/document';

const Document = () => (
  <Html lang='en'>
    <Head />
    <body>
      <ColorModeScript initialColorMode='dark' />
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default Document;
