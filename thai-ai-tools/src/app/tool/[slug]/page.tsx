import Link from 'next/link';
import { tools } from '@/lib/data';
import { notFound } from 'next/navigation';
import { 
  ArrowLeft, ExternalLink, Star, CheckCircle2, 
  XCircle, Zap, Globe, Calendar, Share2
} from 'lucide-react';

// ใน Next.js 15+ ต้องใช้ Promise สำหรับ params
interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ToolDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const tool = tools.find((t) => t.slug === slug);

  if (!tool) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background pb-20">
      
      {/* 1. Header Hero */}
      <div className="bg-slate-900 text-white pt-32 pb-16 px-6 relative overflow-hidden">
         {/* Background Effect */}
         <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4" />
         
         <div className="max-w-4xl mx-auto relative z-10">
            <Link href="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-white mb-8 transition-colors text-sm">
               <ArrowLeft size={16} /> กลับหน้าแรก
            </Link>

            <div className="flex flex-col md:flex-row items-start gap-8">
               {/* Logo */}
               <div className="w-24 h-24 bg-white rounded-2xl flex items-center justify-center shadow-2xl shadow-blue-900/50 text-slate-900 text-4xl font-bold shrink-0">
                  {tool.name.charAt(0)}
               </div>
               
               <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                     <h1 className="text-3xl md:text-4xl font-bold">{tool.name}</h1>
                     {tool.isFree && (
                        <span className="px-2 py-0.5 bg-green-500/20 text-green-300 text-xs font-bold rounded-full border border-green-500/30">
                           FREE
                        </span>
                     )}
                  </div>
                  <p className="text-slate-300 text-lg leading-relaxed mb-6 max-w-2xl">
                     {tool.description}
                  </p>
                  
                  <div className="flex flex-wrap items-center gap-4">
                     <a 
                        href={tool.externalUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl transition-all shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 hover:-translate-y-0.5"
                     >
                        เข้าใช้งานเว็บไซต์ <ExternalLink size={18} />
                     </a>
                     <div className="flex items-center gap-4 text-sm text-slate-400 px-4 py-2 bg-white/5 rounded-lg border border-white/10">
                        <span className="flex items-center gap-1 text-yellow-400">
                           <Star size={16} fill="currentColor" /> {tool.rating}
                        </span>
                        <span className="w-px h-4 bg-white/10" />
                        <span>{tool.reviewCount.toLocaleString()} รีวิว</span>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>

      {/* 2. Main Content Grid */}
      <div className="max-w-4xl mx-auto px-6 -mt-8 relative z-20 grid grid-cols-1 lg:grid-cols-3 gap-8">
         
         {/* Left Column (Info) */}
         <div className="lg:col-span-2 space-y-8">
            
            {/* About */}
            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
               <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <Globe className="text-blue-600" size={24}/> เกี่ยวกับ {tool.name}
               </h2>
               <p className="text-slate-600 leading-relaxed">
                  {tool.longDescription}
               </p>
            </div>

            {/* Features */}
            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
               <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                  <Zap className="text-yellow-500" size={24}/> ฟีเจอร์เด่น
               </h2>
               <div className="grid sm:grid-cols-2 gap-4">
                  {tool.features.map((feature, i) => (
                     <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100">
                        <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                           <CheckCircle2 size={14} />
                        </div>
                        <span className="text-slate-700 text-sm font-medium">{feature}</span>
                     </div>
                  ))}
               </div>
            </div>

            {/* How to use */}
            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
               <h2 className="text-xl font-bold text-slate-900 mb-6">วิธีใช้งานเบื้องต้น</h2>
               <div className="space-y-6">
                  {tool.steps.map((step, i) => (
                     <div key={i} className="flex gap-4">
                        <div className="flex flex-col items-center">
                           <div className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-sm shadow-md">
                              {i + 1}
                           </div>
                           {i !== tool.steps.length - 1 && <div className="w-0.5 h-full bg-slate-200 my-2" />}
                        </div>
                        <div className="pb-2">
                           <h3 className="font-bold text-slate-900 text-lg">{step.title}</h3>
                           <p className="text-slate-500 mt-1">{step.desc}</p>
                        </div>
                     </div>
                  ))}
               </div>
            </div>

            {/* FAQs */}
            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
               <h2 className="text-xl font-bold text-slate-900 mb-6">คำถามที่พบบ่อย</h2>
               <div className="space-y-4">
                  {tool.faqs.map((faq, i) => (
                     <div key={i} className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                        <h4 className="font-semibold text-slate-800 mb-2">{faq.question}</h4>
                        <p className="text-slate-600 text-sm">{faq.answer}</p>
                     </div>
                  ))}
               </div>
            </div>

         </div>

         {/* Right Column (Sidebar) */}
         <div className="space-y-6">
            
            {/* Meta Card */}
            <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm space-y-6 sticky top-24">
               <div>
                  <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">Overview</h3>
                  <div className="space-y-4">
                     <div className="flex justify-between items-center py-2 border-b border-slate-50">
                        <span className="text-slate-500">ราคาเริ่มต้น</span>
                        <span className="font-medium text-slate-900">{tool.priceModel}</span>
                     </div>
                     <div className="flex justify-between items-center py-2 border-b border-slate-50">
                        <span className="text-slate-500">หมวดหมู่</span>
                        <span className="font-medium text-blue-600 capitalize">{tool.category}</span>
                     </div>
                     <div className="flex justify-between items-center py-2 border-b border-slate-50">
                        <span className="text-slate-500">อัปเดตล่าสุด</span>
                        <span className="font-medium text-slate-900">{tool.updatedAt}</span>
                     </div>
                  </div>
               </div>

               {/* Pros & Cons */}
               <div>
                  <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3">ข้อดี</h3>
                  <ul className="space-y-2 mb-6">
                     {tool.pros.map((pro, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                           <CheckCircle2 size={16} className="text-green-500 shrink-0 mt-0.5" />
                           {pro}
                        </li>
                     ))}
                  </ul>

                  <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3">ข้อสังเกต</h3>
                  <ul className="space-y-2">
                     {tool.cons.map((con, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                           <XCircle size={16} className="text-red-400 shrink-0 mt-0.5" />
                           {con}
                        </li>
                     ))}
                  </ul>
               </div>

               <button className="w-full py-3 rounded-xl border border-slate-200 text-slate-600 font-medium hover:bg-slate-50 hover:text-slate-900 transition-colors flex items-center justify-center gap-2">
                  <Share2 size={18} /> แชร์หน้านี้
               </button>
            </div>
         </div>

      </div>
    </main>
  );
}