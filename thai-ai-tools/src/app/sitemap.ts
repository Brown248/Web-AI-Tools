import { MetadataRoute } from 'next';
import { tools, categories } from '@/lib/data'; // ❌ เอา blogPosts ออกไปแล้ว

// ✅ บรรทัดนี้สำคัญมาก!
export const dynamic = 'force-static';

const BASE_URL = 'https://aitoolbox-demo.vercel.app'; // ⚠️ เปลี่ยนเป็นโดเมนจริงของคุณเมื่อได้โดเมนแล้ว

export default function sitemap(): MetadataRoute.Sitemap {
  // หน้าหลักๆ ของเว็บ (Static Routes)
  const staticRoutes = [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: 'daily' as const, priority: 1.0 },
    { url: `${BASE_URL}/categories`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${BASE_URL}/prompts`, lastModified: new Date(), changeFrequency: 'daily' as const, priority: 0.9 }, // ✅ เปลี่ยนเป็น prompts
    { url: `${BASE_URL}/submit`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.5 },
  ];

  // หน้าย่อยของหมวดหมู่ (ถ้าในอนาคตคุณทำหน้ารวม AI เฉพาะหมวดหมู่)
  const categoryRoutes = categories.map((cat) => ({
    url: `${BASE_URL}/category/${cat.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  // หน้ารายละเอียด AI แต่ละตัว (สำคัญมาก ต้องให้ Google เข้ามาเก็บข้อมูลให้ครบ)
  const toolRoutes = tools.map((tool) => ({
    url: `${BASE_URL}/tool/${tool.slug}`,
    lastModified: new Date(tool.updatedAt),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  return [...staticRoutes, ...categoryRoutes, ...toolRoutes];
}