import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Metadata } from 'next';
import { tools } from '@/lib/data'; // Ensure this path is correct
import AdUnit from '@/components/ui/AdUnit';
import { 
  ArrowLeft, ExternalLink, Share2, 
  CheckCircle2, Globe, Clock, Star 
} from 'lucide-react';

// ==========================================
// 1. Generate Static Params (REQUIRED for output: 'export')
// ==========================================
export async function generateStaticParams() {
  return tools.map((tool) => ({
    slug: tool.slug,
  }));
}

// ==========================================
// 2. Generate Metadata (SEO)
// ==========================================
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const tool = tools.find((t) => t.slug === slug);

  if (!tool) {
    return { title: 'ไม่พบเครื่องมือ' };
  }

  return {
    title: `${tool.name} - รีวิว วิธีใช้ และราคา | AI Tool box`,
    description: tool.description,
    openGraph: {
      title: `${tool.name} - รีวิว AI Tool`,
      description: tool.description,
      type: 'article',
    }
  };
}

// ==========================================
// 3. Page Component
// ==========================================
export default async function ToolPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const tool = tools.find((t) => t.slug === slug);

  if (!tool) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white pb-24 pt-28">
      
      {/* --- Breadcrumb & Back --- */}
      <div className="max-w-4xl mx-auto px-6 mb-8">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-indigo-600 transition-colors group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          กลับหน้าหลัก
        </Link>
      </div>

      <div className="max-w-4xl mx-auto px-6">
        
        {/* --- Header Section --- */}
        <header className="flex flex-col md:flex-row gap-8 items-start mb-12 border-b border-slate-100 pb-12">
           {/* Logo / Icon Box */}
           <div className="shrink-0 w-24 h-24 rounded-2xl bg-gradient-to-br from-indigo-50 to-white border border-slate-100 shadow-sm flex items-center justify-center text-5xl font-bold text-indigo-600">
             {tool.name.charAt(0)}
           </div>

           <div className="flex-1 w-full">
             <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
                  {tool.name}
                </h1>
                
                {/* Action Buttons */}
                <div className="flex items-center gap-3">
                  <button className="p-2.5 rounded-full text-slate-400 hover:bg-slate-50 hover:text-indigo-600 transition-colors border border-transparent hover:border-slate-200">
                    <Share2 size={20} />
                  </button>
                  <a 
                    href={tool.externalUrl || '#'} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-indigo-600 text-white rounded-xl font-bold text-sm hover:bg-indigo-700 shadow-lg shadow-indigo-200 hover:shadow-indigo-300 transition-all transform hover:-translate-y-0.5"
                  >
                    ไปที่เว็บไซต์ <ExternalLink size={16} />
                  </a>
                </div>
             </div>

             {/* Metadata Badges */}
             <div className="flex flex-wrap items-center gap-3 text-sm">
                <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 font-medium">
                  {tool.category}
                </span>
                <span className={`px-3 py-1 rounded-full border font-medium ${
                  tool.isFree 
                    ? 'bg-emerald-50 text-emerald-700 border-emerald-100' 
                    : 'bg-amber-50 text-amber-700 border-amber-100'
                }`}>
                  {tool.isFree ? 'ใช้งานฟรี' : 'มีค่าใช้จ่าย'}
                </span>
                <span className="flex items-center gap-1 text-slate-400 px-2">
                  <Star size={14} className="fill-amber-400 text-amber-400" /> 
                  <span className="text-slate-600 font-bold">4.8</span> (จากผู้ใช้)
                </span>
             </div>
           </div>
        </header>

        {/* --- Content Layout --- */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main Content (Left) */}
          <div className="lg:col-span-2 space-y-10">
            
            {/* Description */}
            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Globe size={20} className="text-indigo-600" />
                เกี่ยวกับ {tool.name}
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                {tool.description}
              </p>
              <p className="mt-4 text-slate-600 leading-relaxed">
                (พื้นที่สำหรับเขียนรีวิวเพิ่มเติม...)
              </p>
            </section>

            {/* Ad Unit (In-Article) */}
            <AdUnit label="ผู้สนับสนุนบทความนี้" />

            {/* Key Features (Example) */}
            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <CheckCircle2 size={20} className="text-emerald-500" />
                จุดเด่นที่น่าสนใจ
              </h2>
              <ul className="grid gap-4">
                {[1, 2, 3].map((item) => (
                  <li key={item} className="flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100">
                    <div className="w-6 h-6 rounded-full bg-white border border-indigo-100 flex items-center justify-center text-indigo-600 font-bold text-xs shadow-sm mt-0.5">
                      {item}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 text-sm mb-1">ฟีเจอร์เด่นข้อที่ {item}</h4>
                      <p className="text-sm text-slate-500">สามารถทำงานได้อย่างรวดเร็วและมีความแม่นยำสูง</p>
                    </div>
                  </li>
                ))}
              </ul>
            </section>

          </div>

          {/* Sidebar (Right) */}
          <aside className="space-y-8">
            
            {/* Quick Info Card */}
            <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm">
              <h3 className="font-bold text-slate-900 mb-4">ข้อมูลเบื้องต้น</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-slate-50">
                  <span className="text-sm text-slate-500 flex items-center gap-2"><Clock size={14}/> อัปเดตล่าสุด</span>
                  <span className="text-sm font-medium text-slate-800">2024</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-slate-50">
                   <span className="text-sm text-slate-500">แพลตฟอร์ม</span>
                   <span className="text-sm font-medium text-slate-800">Web / App</span>
                </div>
                <div className="mt-6 pt-2">
                   <button className="w-full py-3 rounded-xl bg-slate-100 text-slate-600 font-bold text-sm hover:bg-slate-200 transition-colors">
                     แจ้งข้อมูลผิดพลาด
                   </button>
                </div>
              </div>
            </div>

            {/* Sidebar Ad */}
            <AdUnit label="แนะนำ" format="rectangle" />
            
          </aside>

        </div>
      </div>
    </main>
  );
}