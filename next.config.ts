import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pyroblog-pictures.s3.us-east-1.amazonaws.com',
        port: '',
        pathname: '/**', // allow all paths
      },
    ],
  },

};

export default nextConfig;
