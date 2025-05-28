/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'markets.superlend.xyz',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig 