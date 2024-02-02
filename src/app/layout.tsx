import './global.css'
import { cn } from '@/lib/utils'
import { Metadata, Viewport } from 'next'
import localFont from 'next/font/local'

const cartographcf = localFont({
  variable: '--font-cartographcf',
  src: [
    {
      path: '../../public/fonts/CartographCF-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/CartographCF-RegularItalic.woff2',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../../public/fonts/CartographCF-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/CartographCF-BoldItalic.woff2',
      weight: '700',
      style: 'italic',
    },
    {
      path: '../../public/fonts/CartographCF-ExtraBold.woff2',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../../public/fonts/CartographCF-ExtraBoldItalic.woff2',
      weight: '800',
      style: 'italic',
    },
    {
      path: '../../public/fonts/CartographCF-Heavy.woff2',
      weight: '900',
      style: 'normal',
    },
    {
      path: '../../public/fonts/CartographCF-HeavyItalic.woff2',
      weight: '900',
      style: 'italic',
    },
  ],
})

export const viewport: Viewport = {
  themeColor: '#161616',
  initialScale: 1,
  maximumScale: 1,
  userScalable: true,
}

export const metadata: Metadata = {
  metadataBase: new URL('https://idm1try.dev'),
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
    url: 'https://idm1try.dev/',
    images: '/api/og?heading=idm1try&desc=Frontend%20Developer',
  },
  icons: {
    icon: '/favicon.png',
    apple: 'apple-touch-icon.png',
  },
  alternates: {
    canonical: 'https://idm1try.dev/',
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
        'antialiased selection:bg-surface1 leading-relaxed',
        cartographcf.variable,
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
