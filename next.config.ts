import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  // Ensure static assets are served properly in Electron
  ...(process.env.ELECTRON_BUILD && {
    output: 'standalone',
    // Ensure public assets are properly handled
    trailingSlash: true,
  }),
};

export default nextConfig;
