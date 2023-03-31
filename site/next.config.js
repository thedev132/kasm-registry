/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'The Dev\'s Registry',
    description: 'Kasm Workspace images',
    icon: 'https://www.linuxserver.io/user/assets/typhoon/Asset%202.svg',
    listUrl: 'https://thedev132.github.io/kasm-registry/'
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
