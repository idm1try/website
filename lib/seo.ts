export function getSeo() {
  return {
    title: 'idm1try blog',
    titleTemplate: '%s - idm1try blog',
    description: 'idm1try blog website',
    siteUrl: 'https://idm1try-blog.vercel.app',
    twitter: {
      handle: '@idm1try',
      site: '@idm1try',
      cardType: 'summary_large_image',
    },
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: 'https://idm1try-blog.vercel.app',
      title: 'idm1try blog',
      description: 'idm1try blog website',
      site_name: 'idm1try blog website',
      images: [
        {
          url: 'https://idm1try-blog.vercel.app/card.png',
          width: 720,
          height: 320,
          alt: 'idm1try blog website',
        },
        {
          url: 'https://idm1try-blog.vercel.app/apple-touch-icon.png',
          width: 180,
          height: 180,
          alt: 'idm1try blog website',
        },
      ],
    },
  };
}
