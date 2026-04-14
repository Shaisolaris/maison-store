/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/maison-store',
  assetPrefix: '/maison-store/',
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
  images: { unoptimized: true },
}
export default nextConfig
