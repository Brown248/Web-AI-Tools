import { MetadataRoute } from 'next'
import { tools } from '@/lib/data' // ดึงข้อมูล Tool มา loop สร้าง link

// ✅ เพิ่มบรรทัดนี้
export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  // เปลี่ยนเป็นโดเมนจริงของคุณ
  const baseUrl = 'https://thaiaitools.com'

  // สร้าง URL สำหรับหน้า Tool แต่ละอัน
  const toolUrls = tools.map((tool) => ({
    url: `${baseUrl}/tool/${tool.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/ranking`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
    ...toolUrls,
  ]
}