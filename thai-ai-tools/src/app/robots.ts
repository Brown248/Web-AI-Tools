import type { MetadataRoute } from 'next';

// ✅ บรรทัดนี้สำคัญมาก!
export const dynamic = 'force-static';

const BASE_URL = 'https://aitoolbox-demo.vercel.app'; // ⚠️ เปลี่ยนเป็นโดเมนจริง

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}