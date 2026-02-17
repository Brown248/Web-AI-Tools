import { MetadataRoute } from 'next';
import { tools, blogPosts, categories } from '@/lib/data';

// ✅ บรรทัดนี้สำคัญมาก! แก้ Error "revalidate not configured"
export const dynamic = 'force-static';

const BASE_URL = 'https://aitoolbox-demo.vercel.app'; // ⚠️ เปลี่ยนเป็นโดเมนจริง

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: 'daily' as const, priority: 1 },
    { url: `${BASE_URL}/blog`, lastModified: new Date(), changeFrequency: 'daily' as const, priority: 0.8 },
    { url: `${BASE_URL}/submit`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.5 },
  ];

  const categoryRoutes = categories.map((cat) => ({
    url: `${BASE_URL}/category/${cat.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  const toolRoutes = tools.map((tool) => ({
    url: `${BASE_URL}/tool/${tool.slug}`,
    lastModified: new Date(tool.updatedAt),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  const blogRoutes = blogPosts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...categoryRoutes, ...toolRoutes, ...blogRoutes];
}