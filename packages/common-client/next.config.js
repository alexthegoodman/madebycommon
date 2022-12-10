/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "0.0.0.0",
        port: "3000",
        pathname: "/media/**",
      },
    ],
  },
};

module.exports = nextConfig;
