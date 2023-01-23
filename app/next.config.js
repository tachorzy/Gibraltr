/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config) {
    config.experiments = { topLevelAwait: true, layers: true },
    config.module.rules.push({  
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });
  return config;
  },
  exportPathMap: function () {
    return {
        '/': { page: '/' },
        '/destination/[destination]': { page: '/destination/[destination]' },
    }
  }
}

module.exports = nextConfig
