import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Enable React Strict Mode
  reactStrictMode: true,
  
  // Next.js 15 optimizations
  experimental: {
    // Turbo is enabled by default in Next.js 15
    turbo: {},
  }
}

export default nextConfig