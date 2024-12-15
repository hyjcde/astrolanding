/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["www.cuastro.org"],
    unoptimized: true,
  },
};

module.exports = nextConfig;
