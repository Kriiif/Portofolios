import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable static export for deployment to static hosts (GitHub Pages, Netlify, Vercel, etc.)
  output: "export",

  // Disable image optimization for static export (or use a custom loader)
  images: {
    unoptimized: true,
  },

  // Enable React Strict Mode for better debugging
  reactStrictMode: true,

  // Trailing slashes for cleaner URLs
  trailingSlash: true,
};

export default nextConfig;
