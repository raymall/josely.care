import type { NextConfig } from 'next'
import path from 'path'

const nextConfig: NextConfig = {
  turbopack: {
    rules: {
      '*.svg': {
        loaders: ['@svgr/webpack'],
        as: '*.js',
      },
    },
  },
  sassOptions: {
    includePaths: [path.join(process.cwd(), 'src/styles')],
  },
}

export default nextConfig