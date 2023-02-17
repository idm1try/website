import './global.css'
import { AnalyticsProvider } from '../components/analytics-provider'
import { Fira_Code, Inter } from '@next/font/google'
import Navbar from '@/components/navbar'

const fontSans = Inter({ variable: '--font-sans' })
const fontMono = Fira_Code({ variable: '--font-mono' })

export const metadata = {
  title: {
    default: 'idm1try',
    template: '%s | idm1try',
  },
  themeColor: '#111010',
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
    images:
      'https://idm1try.ru/api/og?heading=idm1try&desc=Frontend%20Developer',
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
    images:
      'https://idm1try.ru/api/og?heading=idm1try&desc=Frontend%20Developer',
  },
  icons: {
    icon: '/favicon.png',
    apple: 'apple-touch-icon.png',
    other: [{ rel: 'manifest', url: '/site.webmanifest' }],
  },
  alternates: {
    canonical: 'https://idm1try.ru/',
  },
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
      className={`scroll-smooth bg-neutral-50 font-sans text-neutral-900 antialiased selection:bg-neutral-200 dark:bg-[#111010] dark:text-neutral-100 dark:selection:bg-neutral-700 ${fontSans.variable} ${fontMono.variable}`}
    >
      <body>
        <div className='mx-auto max-w-3xl px-6 pb-20'>
          <Navbar />
          <main className='pt-16'>
            {children}
            <AnalyticsProvider />
          </main>
        </div>
      </body>
    </html>
  )
}