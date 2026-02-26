import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://web-ai-tools.vercel.app';

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      // ระบุหน้าที่ไม่ต้องการให้ Google ค้นหาเจอ (เช่น หน้า Admin หรือ API)
      disallow: ['/private/', '/api/'], 
    },
    // ชี้ตำแหน่ง Sitemap ให้บอทวิ่งตาม
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}