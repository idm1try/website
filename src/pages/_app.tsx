import Meta from '@/components/meta'
import Navbar from '@/components/navbar'
import '@/styles/index.css'
import { Fira_Code, Inter } from '@next/font/google'
import { Analytics } from '@vercel/analytics/react'
import { AppProps } from 'next/app'

const fontSans = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const fontMono = Fira_Code({
  subsets: ['latin'],
  variable: '--font-fira-code',
})

const Website = ({ Component, pageProps, router }: AppProps) => (
  <div
    className={`mx-auto max-w-5xl px-8 pb-12 font-sans selection:bg-rosewater-200 ${fontSans.variable} ${fontMono.variable}`}
  >
    <Meta />
    <Analytics />
    <div>
      <Navbar />
      <main>
        <Component {...pageProps} key={router.route} />
      </main>
    </div>
  </div>
)

export default Website
