import { NextSeo, NextSeoProps } from 'next-seo';
import React from 'react';

export type SEOProps = Pick<NextSeoProps, 'title' | 'description'>;

const SEO = ({ title, description }: SEOProps) => (
  <NextSeo
    title={title}
    description={description}
    openGraph={{ title, description }}
    titleTemplate='%s - idm1try blog'
  />
);

export default SEO;
