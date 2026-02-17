import { MetadataRoute } from 'next'

// ✅ เพิ่มบรรทัดนี้เพื่อให้ทำงานกับ output: 'export' ได้
export const dynamic = 'force-static'

export default function robots(): MetadataRoute.Robots {
  // เปลี่ยนเป็นโดเมนจริงของคุณตอน deploy
  const baseUrl = 'https://thaiaitools.com' 

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}