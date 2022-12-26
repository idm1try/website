import CommandMenu from '@/components/command-menu'
import Meta from '@/components/meta'
import '@/styles/index.css'
import { Inter } from '@next/font/google'
import { Analytics } from '@vercel/analytics/react'
import { ThemeProvider } from 'next-themes'
import { AppProps } from 'next/app'

const inter = Inter({ display: 'swap' })

const Website = ({ Component, pageProps, router }: AppProps) => (
  <ThemeProvider attribute='class'>
    <style jsx global>{`
      html {
        font-family: ${inter.style.fontFamily};
      }
    `}</style>
    <div className='mx-auto max-w-3xl px-6 pb-20 selection:bg-neutral-200 dark:selection:bg-neutral-700'>
      <Meta />
      <Analytics />
      <div>
        <div className='sticky top-6 z-10'>
          <CommandMenu />
        </div>
        <main className='pt-16'>
          <Component {...pageProps} key={router.route} />
        </main>
      </div>
    </div>
  </ThemeProvider>
)

export default Website
