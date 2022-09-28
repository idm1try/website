import { NextSeo, NextSeoProps } from 'next-seo';

export type SEOProps = Pick<NextSeoProps, 'title' | 'description'> & { image: string };

const SEO = ({
  title,
  description,
  image = 'https://idm1try-blog.vercel.app/card.png',
}: SEOProps) => (
  <NextSeo
    title={title}
    description={description}
    openGraph={{
      title,
      description,
      images: [{ url: image, width: 720, height: 320, alt: description }],
    }}
    titleTemplate='%s - idm1try blog'
  />
);

export default SEO;
