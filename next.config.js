/** @type {import('next').NextConfig} */

module.exports = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '/azos-crafts-page/' : '',
}
