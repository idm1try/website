import CommandMenu from '@/components/command-menu'
import Meta from '@/components/meta'
import '@/styles/index.css'
import { Inter } from '@next/font/google'
import { Analytics } from '@vercel/analytics/react'
import { ThemeProvider } from 'next-themes'
import { AppProps } from 'next/app'

const fontSans = Inter()

const Website = ({ Component, pageProps, router }: AppProps) => (
  <ThemeProvider attribute='class'>
    <div
      className={`mx-auto max-w-5xl px-6 pb-12 selection:bg-rosewater-200 ${fontSans.className}`}
    >
      <Meta />
      <Analytics />
      <div>
        <div className='sticky top-6 z-[5]'>
          <CommandMenu />
        </div>
        <main className='pt-12'>
          <Component {...pageProps} key={router.route} />
        </main>
      </div>
    </div>
  </ThemeProvider>
)

export default Website
