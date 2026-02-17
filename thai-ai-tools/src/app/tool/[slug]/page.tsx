import Link from 'next/link';
import { tools, categories } from '@/lib/data';
import ToolCard from '@/components/ui/ToolCard';
import { notFound } from 'next/navigation';
import { ArrowLeft, Sparkles, Layers } from 'lucide-react';

// ✅ 1. สร้าง Static Paths เพื่อให้ Build ผ่าน (Static Export)
export async function generateStaticParams() {
  return categories.map((cat) => ({
    slug: cat.slug,
  }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

// ✅ 2. Dynamic SEO Metadata (สำคัญมาก!)
export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const category = categories.find((c) => c.slug === slug);
  
  if (!category) {
    return { title: 'Category Not Found' };
  }

  return {
    title: `รวม AI ${category.name} ยอดนิยม (2025) | AIToolbox`,
    description: `ค้นพบเครื่องมือ AI หมวด ${category.name} ที่ดีที่สุด ช่วยเพิ่มประสิทธิภาพการทำงานของคุณ อัปเดตล่าสุด`,
    openGraph: {
      title: `รวม AI ${category.name} ยอดนิยม | AIToolbox`,
      description: `รวมเครื่องมือ AI หมวด ${category.name} ที่สายงานคุณต้องรู้`,
    },
  };
}

export default async function CategoryPage({ params }: PageProps) {
  const { slug } = await params;
  const category = categories.find((c) => c.slug === slug);

  if (!category) {
    notFound();
  }

  // กรองเฉพาะ Tools ที่อยู่ในหมวดนี้
  const filteredTools = tools.filter((t) => t.category === slug);

  return (
    <main className="min-h-screen bg-background pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* --- Header Section --- */}
        <div className="text-center mb-16 relative">
          {/* Decorative Blur */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-[100px] -z-10" />

          <Link href="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-600 mb-8 transition-colors text-sm font-medium bg-white/50 px-4 py-2 rounded-full border border-slate-200 hover:border-blue-200">
             <ArrowLeft size={16} /> ดูหมวดหมู่อื่นๆ
          </Link>
          
          <div className="flex flex-col items-center gap-4">
             <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 text-white rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/30 transform rotate-3">
                <Layers size={32} />
             </div>
             <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mt-2">
               {category.name}
             </h1>
          </div>
          
          <p className="text-slate-500 text-lg max-w-2xl mx-auto mt-6 leading-relaxed">
            รวบรวมเครื่องมือ AI หมวด <span className="font-semibold text-blue-600">"{category.name}"</span> จำนวน {filteredTools.length} รายการ <br className="hidden md:block"/>
            คัดสรรมาแล้วว่าใช้งานได้จริง และช่วยประหยัดเวลาของคุณ
          </p>
        </div>

        {/* --- Tools Grid --- */}
        {filteredTools.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTools.map((tool, index) => (
              <ToolCard key={tool.id} tool={tool} index={index} />
            ))}
          </div>
        ) : (
          // กรณีไม่มีข้อมูลในหมวดนี้
          <div className="flex flex-col items-center justify-center py-24 bg-slate-50/50 rounded-3xl border border-dashed border-slate-200 text-center">
            <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mb-4 text-slate-400">
               <Sparkles size={24} />
            </div>
            <h3 className="text-lg font-semibold text-slate-900">กำลังอัปเดตข้อมูล</h3>
            <p className="text-slate-500 mt-2">เรากำลังรวบรวมเครื่องมือในหมวดหมู่นี้ เร็วๆ นี้ครับ</p>
            <Link href="/" className="mt-6 text-blue-600 hover:underline">
              กลับไปดูหมวดอื่น
            </Link>
          </div>
        )}

      </div>
    </main>
  );
}