/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'standalone',

  reactStrictMode: true,
  pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js'],
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: false,
  },
  images: {
    unoptimized: true,
  },
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
}

module.exports = nextConfig
