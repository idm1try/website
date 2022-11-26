import Document, { Head, Html, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                  if (localStorage.theme === "dark" || (!("theme" in localStorage) &&
                  window.matchMedia("(prefers-color-scheme: dark)").matches)) {
                    document.documentElement.classList.add("dark")
                    document.documentElement.style.setProperty("color-scheme", "dark")
                  } else {
                    document.documentElement.classList.remove("dark")
                    document.documentElement.style.setProperty("color-scheme", "light")
                  }
          `,
            }}
          />
        </Head>
        <body className='break-words bg-base-200 text-text-200 transition-colors duration-300 dark:bg-base-100 dark:text-text-100'>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
