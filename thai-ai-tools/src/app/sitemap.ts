// ไฟล์: src/app/sitemap.ts

import { MetadataRoute } from 'next';
import { tools } from '@/lib/data';

// เพิ่มบรรทัดนี้ครับ 👇 เพื่อบอก Next.js ว่านี่คือไฟล์ Static
export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://your-domain.com'; // อย่าลืมแก้เป็น Domain จริงของคุณเมื่อ Deploy

  const toolUrls = tools.map((tool) => ({
    url: `${baseUrl}/tool/${tool.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    ...toolUrls,
  ];
}