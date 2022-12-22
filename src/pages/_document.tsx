import Document, { Head, Html, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang='en' className='scroll-smooth'>
        <Head />
        <body className='bg-neutral-50 text-neutral-900 antialiased dark:bg-neutral-900 dark:text-neutral-100'>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
