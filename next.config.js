/** @type {import('next').NextConfig} */
const path = require('path');

module.exports = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.resolve.alias['@'] = path.resolve(__dirname, 'src');
    return config;
  }
}
