import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',  // Habilita export estático
  images: {
    unoptimized: true,  // Necessário para export estático
  },
  basePath: process.env.NODE_ENV === 'production' ? '/site' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/site/' : '',
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
