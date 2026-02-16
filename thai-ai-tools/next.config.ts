/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // จำเป็นสำหรับ Static Export ถ้าไม่ได้ใช้ Image Loader ภายนอก
  },
};

export default nextConfig;