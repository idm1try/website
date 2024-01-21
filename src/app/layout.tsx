import { cn } from '@/lib/utils'
import { Inter } from 'next/font/google'
import './global.css'

const fontSans = Inter({ variable: '--font-sans', subsets: ['latin'] })

export const viewport = {
  themeColor: '#161616',
  initialScale: 1,
  maximumScale: 1,
  userScalable: 1,
}

export const metadata = {
  metadataBase: new URL('https://idm1try.vercel.app'),
  title: {
    default: 'idm1try',
    template: '%s | idm1try',
  },
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
    images: '/api/og?heading=idm1try&desc=Frontend%20Developer',
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
    url: 'https://idm1try.vercel.app/',
    images: '/api/og?heading=idm1try&desc=Frontend%20Developer',
  },
  icons: {
    icon: '/favicon.png',
    apple: 'apple-touch-icon.png',
  },
  alternates: {
    canonical: 'https://idm1try.vercel.app/',
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
        'antialiased selection:bg-surface1',
        fontSans.variable,
      )}
    >
      <body>
        <div className='mx-auto max-w-3xl px-6 pb-20'>
          <main className='pt-16'>
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
