import Head from 'next/head'
import Link from 'next/link'
import React from 'react'

const NotFound = () => (
  <>
    <Head>
      <title>Page not found | idm1try</title>
    </Head>
    <div>
      <h1 className='mb-5 text-4xl font-bold'>404</h1>
      <p className='mb-5'>Oops! Page not found</p>
      <Link href='/' className='underlined font-medium'>
        Go to home
      </Link>
    </div>
  </>
)

export default NotFound
