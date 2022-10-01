// eslint-disable-next-line @typescript-eslint/no-var-requires
const { withContentlayer } = require('next-contentlayer');

/** @type {import('next').NextConfig} */
module.exports = withContentlayer({
  optimizeFonts: true,
  productionBrowserSourceMaps: true,
  reactStrictMode: true,
  images: {
    domains: [
      'pbs.twimg.com',
      'raw.githubusercontent.com',
      'avatars.githubusercontent.com',
      'devblogs.microsoft.com',
    ],
  },
});
