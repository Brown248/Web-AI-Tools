import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // ปิดการใช้งาน Optimization ชั่วคราวเพื่อเช็คว่าพาธรูปถูกต้องหรือไม่
    unoptimized: true, 
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
};

export default nextConfig;