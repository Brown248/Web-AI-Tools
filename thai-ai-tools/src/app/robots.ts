import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

const BASE_URL = 'https://aitoolbox-demo.vercel.app'; // ⚠️ เปลี่ยนโดเมนเมื่อถึงเวลา

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',     // อนุญาตบอททุกค่าย (Google, Bing, Yahoo)
      allow: '/',         // อนุญาตให้เข้ามาอ่านได้ทุกหน้า
      disallow: '/private/', // ห้ามเข้าหน้า private (ถ้ามี)
    },
    sitemap: `${BASE_URL}/sitemap.xml`, // บอกว่าแผนที่เว็บอยู่ที่ไหน
  };
}