/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig

module.exports = {
  webpack(config) {
    config.experiments = { topLevelAwait: true, layers: true },
    config.module.rules.push({  
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  }
};