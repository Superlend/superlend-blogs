/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: '/posts/beyond_stablecoins', destination: '/posts/beyond-stablecoins', permanent: true },
      { source: '/posts/earning_passive_income_on_your_dollar', destination: '/posts/earning-passive-income-on-your-dollar', permanent: true },
      { source: '/posts/how_yield_works_on_superfund', destination: '/posts/how-yield-works-on-superfund', permanent: true },
      { source: '/posts/superlend_loop', destination: '/posts/superlend-loop', permanent: true },
      { source: '/posts/understanding_lending_protocols', destination: '/posts/understanding-lending-protocols', permanent: true },
      { source: '/posts/what_is_defi', destination: '/posts/what-is-defi', permanent: true },
      { source: '/posts/why_structured_yield_products_are_the_future_of_passive_income_in_deFi', destination: '/posts/why-structured-yield-products-are-the-future-of-passive-income-in-defi', permanent: true },
      { source: '/posts/yield_ramp_up', destination: '/posts/yield-ramp-up', permanent: true },
    ];
  },
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