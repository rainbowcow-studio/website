/** @type {import('next').NextConfig} */

// GitHub Pages deployment code comes from:
// https://gregrickaby.blog/2020/03/21/next-js-github-pages

const withMDX = require('@next/mdx')()

const isProd = process.env.NODE_ENV === 'production'

const nextConfig = withMDX({
  reactStrictMode: true,
  swcMinify: true,
  assetPrefix: isProd ? '/website/' : '.',

  experimental: {
    images: {
      unoptimized: true,
    },
  },
})

module.exports = nextConfig
