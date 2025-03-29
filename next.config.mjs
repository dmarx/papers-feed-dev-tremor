/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'out',
  images: { 
    unoptimized: true 
  },
  basePath: '/${{ github.event.repository.name }}',
  assetPrefix: '/${{ github.event.repository.name }}/',
  trailingSlash: true,
};

export default nextConfig;
