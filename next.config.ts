import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  experimental: {
    optimizePackageImports: ["@react-three/fiber", "@react-three/drei", "three", "gsap", "framer-motion"],
  },
};

export default nextConfig;