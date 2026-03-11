import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["books.google.com"],
  },
  
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
