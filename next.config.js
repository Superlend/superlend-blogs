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
      {
        protocol: 'https',
        hostname: 'app.superlend.xyz',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'assets.tina.io',
        port: '',
      },
    ],
    localPatterns: [
      {
        pathname: '/assets/**',
        search: '',
      },
    ],
  },
}

module.exports = nextConfig 