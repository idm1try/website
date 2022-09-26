// eslint-disable-next-line @typescript-eslint/no-var-requires
const { withContentlayer } = require('next-contentlayer');

/** @type {import('next').NextConfig} */
module.exports = withContentlayer({
  optimizeFonts: true,
  productionBrowserSourceMaps: true,
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['pbs.twimg.com'],
  },
});
