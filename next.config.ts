import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '',
  assetPrefix: '',
  turbopack: {
    rules: {
      '*.webm': {
        loaders: ['file-loader'],
        as: '*.js',
      },
      '*.mp4': {
        loaders: ['file-loader'],
        as: '*.js',
      },
    },
  },
};

export default nextConfig;