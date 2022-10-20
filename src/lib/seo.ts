export function getSeo() {
  return {
    title: 'idm1try blog',
    titleTemplate: '%s - idm1try blog',
    description: 'idm1try blog website',
    siteUrl: 'https://blog.idm1try.ru',
    twitter: {
      handle: '@idm1try',
      site: '@idm1try',
      cardType: 'summary_large_image',
    },
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: 'https://blog.idm1try.ru',
      title: 'idm1try blog',
      description: 'idm1try blog website',
      site_name: 'idm1try blog website',
      images: [
        {
          url: 'https://blog.idm1try.ru/card.png',
          width: 720,
          height: 320,
          alt: 'idm1try blog website',
        },
      ],
    },
  };
}
