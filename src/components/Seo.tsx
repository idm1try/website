import { NextSeo } from 'next-seo';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  post?: {
    date?: string;
    tags?: string[];
  };
}

const SEO = ({
  title,
  description,
  image = 'https://blog.idm1try.ru/card.png',
  post,
}: SEOProps) => (
  <NextSeo
    title={title}
    description={description}
    openGraph={{
      title,
      description,
      images: image && [{ url: image, width: 1200, height: 630, alt: title }],
      article: post && { publishedTime: post.date, tags: post.tags },
    }}
    titleTemplate='%s - idm1try blog'
  />
);

export default SEO;
