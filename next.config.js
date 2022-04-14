/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  productionBrowserSourceMaps: true,
  // using swc
  // swcMinify: true,
  compiler: {
    // removing all console.* exclude error
    removeConsole: {
      exclude: ['error']
    }
  }
};

module.exports = nextConfig;
