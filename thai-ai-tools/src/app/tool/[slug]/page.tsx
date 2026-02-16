import { tools } from '@/lib/data';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import AdUnit from '@/components/ui/AdUnit';
import { Check, X, HelpCircle } from 'lucide-react';

// 1. Generate Static Params (จำเป็นสำหรับ Static Export)
export async function generateStaticParams() {
  return tools.map((tool) => ({
    slug: tool.slug,
  }));
}

// 2. Dynamic SEO Metadata
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const tool = tools.find((t) => t.slug === params.slug);
  if (!tool) return {};

  return {
    title: `รีวิว ${tool.name} ดีไหม? วิธีใช้และราคา - Thai AI Tools`,
    description: tool.description,
    openGraph: {
      title: tool.name,
      description: tool.description,
      images: [tool.image],
    },
  };
}

export default function ToolDetail({ params }: { params: { slug: string } }) {
  const tool = tools.find((t) => t.slug === params.slug);
  
  if (!tool) {
    notFound();
  }

  // Schema for SEO (SoftwareApplication)
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: tool.name,
    applicationCategory: tool.category,
    offers: {
      '@type': 'Offer',
      price: tool.isFree ? '0' : 'Price varies',
      priceCurrency: 'THB',
    },
    description: tool.description,
  };

  return (
    <div className="min-h-screen bg-white pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* Article Header */}
      <header className="bg-gray-50 pt-24 pb-12 border-b border-gray-200">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 text-sm font-bold rounded-full mb-4">
            {tool.category}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-dark mb-6">{tool.name} คืออะไร? รีวิวเจาะลึก</h1>
          <p className="text-xl text-gray-500 mb-8">{tool.description}</p>
          <div className="flex justify-center gap-4">
            <a href="#" className="bg-dark text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors">
              ไปที่เว็บไซต์ {tool.name}
            </a>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 max-w-3xl mt-12">
        {/* AdSense Top */}
        <AdUnit slot="top-content" />

        <article className="prose prose-lg prose-indigo mx-auto text-gray-700">
          {/* เนื้อหาบทความ */}
          <h2>{tool.name} คืออะไร?</h2>
          <div dangerouslySetInnerHTML={{ __html: tool.content }} />
          
          <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 my-8 not-prose">
            <h3 className="text-lg font-bold text-blue-900 mb-4 flex items-center gap-2">
              <HelpCircle size={20}/> สรุปจุดเด่น
            </h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-sm">
                <Check className="text-green-500 mt-1 flex-shrink-0" size={16} />
                <span>ใช้งานภาษาไทยได้ดีเยี่ยม (ตัวอย่าง)</span>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <Check className="text-green-500 mt-1 flex-shrink-0" size={16} />
                <span>มีเวอร์ชันฟรีตลอดชีพ</span>
              </li>
            </ul>
          </div>

          <h2>ราคาและความคุ้มค่า</h2>
          <p>{tool.isFree ? 'สามารถใช้งานได้ฟรี โดยมีข้อจำกัดบางอย่าง...' : 'เริ่มต้นที่ $20 ต่อเดือน...'}</p>

          <AdUnit slot="middle-content" />

          <h2>ข้อดี / ข้อเสีย</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose my-8">
             <div className="border border-green-200 bg-green-50/50 p-5 rounded-lg">
                <h4 className="font-bold text-green-800 mb-3">ข้อดี</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                   <li className="flex gap-2"><Check size={16} className="text-green-600"/> ประมวลผลเร็ว</li>
                   <li className="flex gap-2"><Check size={16} className="text-green-600"/> UI ใช้งานง่าย</li>
                </ul>
             </div>
             <div className="border border-red-200 bg-red-50/50 p-5 rounded-lg">
                <h4 className="font-bold text-red-800 mb-3">ข้อสังเกต</h4>
                 <ul className="space-y-2 text-sm text-gray-700">
                   <li className="flex gap-2"><X size={16} className="text-red-600"/> ต้องต่อเน็ตตลอดเวลา</li>
                </ul>
             </div>
          </div>

          <h2>เหมาะกับใคร?</h2>
          <p>เครื่องมือนี้เหมาะสำหรับนักเรียน นักศึกษา และ Content Creator...</p>

        </article>

        {/* AdSense Bottom */}
        <AdUnit slot="bottom-content" className="mt-12" />

        <div className="border-t border-gray-200 mt-12 pt-8">
            <h3 className="text-xl font-bold mb-6">บทความแนะนำอื่นๆ</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {tools.filter(t => t.id !== tool.id).slice(0,2).map(t => (
                    <Link key={t.id} href={`/tool/${t.slug}`} className="block p-4 border rounded-lg hover:border-primary-400 transition-colors">
                        <div className="font-bold text-dark">{t.name}</div>
                        <div className="text-sm text-gray-500 line-clamp-1">{t.description}</div>
                    </Link>
                ))}
            </div>
        </div>
      </div>
    </div>
  );
}