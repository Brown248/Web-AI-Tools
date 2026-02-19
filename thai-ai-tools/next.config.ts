import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ตั้งค่าอนุญาตโดเมนรูปภาพภายนอก สำหรับ Image Optimization
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      // หากอนาคตมีรูปจากโดเมนอื่น (เช่น Supabase, AWS) สามารถนำมาเพิ่มตรงนี้ได้
    ],
  },
};

export default nextConfig;