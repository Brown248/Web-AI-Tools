import { MetadataRoute } from 'next';
import { tools, categories } from '@/lib/data';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://web-ai-tools.vercel.app';

  // 1. หน้า Static หลักๆ
  const routes = [
    '',
    '/categories',
    '/prompts',
    '/submit',
    '/privacy',
    '/terms',
    '/report',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  // 2. หน้า Dynamic - หมวดหมู่
  const categoryRoutes = categories.map((category) => ({
    url: `${baseUrl}/categories/${category.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  // 3. หน้า Dynamic - เครื่องมือ AI แบบรายตัว
  const toolRoutes = tools.map((tool) => ({
    url: `${baseUrl}/tool/${tool.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9, // ให้ความสำคัญหน้าเครื่องมือสูงหน่อย
  }));

  return [...routes, ...categoryRoutes, ...toolRoutes];
}