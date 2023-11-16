/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  productionBrowserSourceMaps: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
    emotion: {
      sourceMap: true,
    },
  },
  experimental: {
    serverActions: true,
  },
  images: {
    domains: ["avatars.githubusercontent.com"],
  },
};

module.exports = nextConfig;
