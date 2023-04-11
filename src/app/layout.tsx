import './global.css'
import Navbar from '@/components/navbar'
import { cn } from '@/lib/utils'
import { Analytics } from '@vercel/analytics/react'
import { Fira_Code, Inter } from 'next/font/google'

const fontSans = Inter({ variable: '--font-sans', subsets: ['latin'] })
const fontMono = Fira_Code({ variable: '--font-mono', subsets: ['latin'] })

export const metadata = {
  title: {
    default: 'idm1try',
    template: '%s | idm1try',
  },
  themeColor: '#1e1e2e',
  description: 'Frontend Developer',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: {
      template: '%s | idm1try',
      default: 'idm1try',
    },
    site: '@idm1try',
    creator: '@idm1try',
    card: 'summary_large_image',
    description: 'Frontend Developer',
    images: 'https://idm1try.ru/api/og?heading=idm1try&desc=Frontend%20Developer',
  },
  openGraph: {
    title: {
      template: '%s | idm1try',
      default: 'idm1try',
    },
    description: 'Frontend Developer',
    siteName: 'idm1try',
    locale: 'en-US',
    type: 'website',
    url: 'https://idm1try.ru/',
    images: 'https://idm1try.ru/api/og?heading=idm1try&desc=Frontend%20Developer',
  },
  icons: {
    icon: '/favicon.png',
    apple: 'apple-touch-icon.png',
  },
  alternates: {
    canonical: 'https://idm1try.ru/',
  },
  manifest: '/site.webmanifest',
  other: {
    'darkreader-lock': '',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang='en'
      className={cn(
        'scroll-smooth font-sans text-text bg-base',
        'antialiased selection:bg-surface1 dark:mocha',
        fontSans.variable,
        fontMono.variable,
      )}
    >
      <body>
        <div className='mx-auto max-w-3xl px-6 pb-20'>
          <Navbar />
          <main className='pt-16'>
            {children}
            <Analytics />
          </main>
        </div>
      </body>
    </html>
  )
}
