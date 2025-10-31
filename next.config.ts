import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',  // Habilita export estático
  images: {
    unoptimized: true,  // Necessário para export estático
  },
  basePath: process.env.NODE_ENV === 'production' ? '/site' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/site/' : '',
};

export default nextConfig;
