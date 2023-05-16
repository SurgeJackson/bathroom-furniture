/** @type {import('next').NextConfig} */
const webpack = require("webpack");

const nextConfig = {
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ["mongoose"],
  },
  reactStrictMode: false,
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.plugins.push(
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery",
      })
    );
    return config;
  },
  webpack(config) {
    config.experiments = {
      ...config.experiments,
      topLevelAwait: true,
    }
    return config
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'sturmproject.ru',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'st.bork.ru',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;