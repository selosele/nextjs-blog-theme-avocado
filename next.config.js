const { withContentlayer } = require('next-contentlayer')
const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    prependData: `
      @import "@/styles/variable.scss";
    `,
  },
}

module.exports = withContentlayer(nextConfig)