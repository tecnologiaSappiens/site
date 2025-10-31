import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',  // Habilita export estático
  images: {
    unoptimized: true,  // Necessário para export estático
  },
  basePath: process.env.NODE_ENV === 'production' ? '/nome-do-repositorio' : '',  // Ajuste para o nome do seu repo
  assetPrefix: process.env.NODE_ENV === 'production' ? '/nome-do-repositorio/' : '',
};

export default nextConfig;
