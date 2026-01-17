/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'obsidian-remote-1331395796.cos.ap-guangzhou.myqcloud.com',
      },
    ],
  },
};

export default nextConfig;
