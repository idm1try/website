import Head from 'next/head'
import Link from 'next/link'
import React from 'react'

const NotFound = () => (
  <>
    <Head>
      <title>Page not found | idm1try</title>
    </Head>
    <div>
      <h1 className='mb-5 animate-in text-4xl font-bold'>404</h1>
      <p
        className='mb-5 animate-in'
        style={{ '--index': 1 } as React.CSSProperties}
      >
        Oops! Page not found
      </p>
      <Link
        href='/'
        className='underlined animate-in font-medium'
        style={{ '--index': 2 } as React.CSSProperties}
      >
        Go to home
      </Link>
    </div>
  </>
)

export default NotFound
