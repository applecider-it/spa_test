import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export', // これで静的HTMLとしてビルド可能
  trailingSlash: true, // これで /about/index.html になる
};

export default nextConfig;
