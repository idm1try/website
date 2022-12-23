import Head from 'next/head'
import { useRouter } from 'next/router'

const Meta = () => {
  const router = useRouter()

  return (
    <Head>
      <meta name='msapplication-TileColor' content='#1e1e2e' />
      <meta name='theme-color' content='#171717' />
      <meta name='description' content='Frontend Developer' />
      <link rel='icon' type='image/png' sizes='96x96' href='/favicon.png' />
      <link
        rel='apple-touch-icon'
        sizes='180x180'
        href='apple-touch-icon.png'
      />

      <meta property='og:type' content='profile' />
      <meta property='og:title' content='idm1try' />
      <meta property='og:description' content='Frontend Developer' />
      <meta property='og:url' content={`https://idm1try.ru${router.asPath}`} />
      <meta property='profile:username' content='idm1try' />
      <meta
        property='og:image'
        content='https://idm1try.ru/api/og?heading=idm1try&desc=Frontend+Developer'
      />
      <meta
        name='twitter:image'
        content='https://idm1try.ru/api/og?heading=idm1try&desc=Frontend+Developer'
      />
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:title' content='idm1try' />
      <meta name='twitter:site' content='@idm1try' />
      <meta name='twitter:creator' content='@idm1try' />
      <meta name='darkreader-lock' />
      <title>idm1try</title>
    </Head>
  )
}

export default Meta
