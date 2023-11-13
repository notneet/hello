/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  productionBrowserSourceMaps: true,
  compiler: {
    removeConsole: true,
    emotion: {
      sourceMap: true,
    },
  },
};

module.exports = nextConfig;
