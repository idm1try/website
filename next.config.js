/* eslint-disable @typescript-eslint/no-var-requires */
const withMDX = require('@next/mdx')({
  extension: /\.mdx$/,
});

const nextConfig = withMDX({
  pageExtensions: ['tsx', 'md', 'mdx'],
  reactStrictMode: true,
  swcMinify: true,
});

module.exports = nextConfig;
