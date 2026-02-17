import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  
  // ✅ ต้องปิด Image Optimization ถ้าไม่ได้ใช้ Custom Loader
  images: {
    unoptimized: true, 
  },
};

export default nextConfig;