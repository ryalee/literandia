import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["books.google.com"],
    remotePatterns: [
      {
        protocol: "http",
        hostname: "books.googleusercontent.com"
      },
      {
        protocol: "https",
        hostname: "books.googleusercontent.com"
      }
    ]
  },
  
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;