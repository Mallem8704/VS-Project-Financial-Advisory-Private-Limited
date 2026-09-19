import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  experimental: {
    // optimize package imports for lucide-react
    optimizePackageImports: ["lucide-react"],
  },
};

export default nextConfig;
