import Link from 'next/link';
import Image from 'next/image';
import { tools } from '@/lib/data';
import { notFound } from 'next/navigation';
import { 
  ArrowLeft, ExternalLink, CheckCircle2, 
  XCircle, Zap, Sparkles, Terminal, BookOpen, AlertCircle
} from 'lucide-react';
import PromptCopyBox from '@/components/ui/PromptCopyBox';

export async function generateStaticParams() {
  return tools.map((tool) => ({
    slug: tool.slug,
  }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const tool = tools.find((t) => t.slug === slug);
  if (!tool) return { title: 'Tool Not Found' };
  return {
    title: `รู้จักกับ ${tool.name} - คู่มือใช้งาน เจาะลึกข้อดีข้อเสีย และแจก Prompt | AIToolbox`,
    description: tool.description,
  };
}

export default async function ToolArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const tool = tools.find((t) => t.slug === slug);

  if (!tool) notFound();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: `คู่มือการใช้งาน ${tool.name} ฉบับเจาะลึก`,
    description: tool.longDescription,
    author: {
      '@type': 'Organization',
      name: 'AIToolbox'
    },
    dateModified: tool.updatedAt,
  };

  return (
    <main className="min-h-screen bg-slate-50 pt-32 pb-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      
      <article className="max-w-3xl mx-auto px-6">
        <Link href="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-blue-600 mb-8 transition-colors font-medium text-sm">
           <ArrowLeft size={16} /> กลับหน้าแรก
        </Link>

        {/* ---------------- HEADER ---------------- */}
        <header className="mb-14">
           <div className="flex items-center gap-4 mb-6">
              
              <div className="w-16 h-16 relative bg-white rounded-2xl flex items-center justify-center shadow-sm border border-slate-200 shrink-0 overflow-hidden">
                {tool.logoUrl ? (
                   <Image 
                     src={tool.logoUrl} 
                     alt={`${tool.name} logo`} 
                     fill
                     sizes="64px"
                     className="object-cover"
                   />
                ) : (
                   <span className="text-3xl font-bold text-slate-900">{tool.name.charAt(0)}</span>
                )}
              </div>
              
              <div>
                <span className="text-blue-600 font-bold text-xs tracking-widest uppercase mb-1 block">
                  {tool.category}
                </span>
                <div className="flex items-center gap-3">
                   <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">{tool.name}</h1>
                   {tool.isFree && (
                     <span className="px-2.5 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-md">
                        FREE
                     </span>
                   )}
                </div>
              </div>
           </div>

           <p className="text-xl text-slate-600 leading-relaxed font-light mb-8">
             {tool.longDescription}
           </p>

           <div className="flex flex-wrap items-center gap-4 py-6 border-y border-slate-200/60">
              <a 
                 href={tool.externalUrl} 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all shadow-md hover:shadow-xl hover:shadow-blue-500/20"
              >
                 เข้าใช้งาน {tool.name} <ExternalLink size={18} />
              </a>
              <span className="text-sm text-slate-600 bg-white px-5 py-3 rounded-xl border border-slate-200 font-medium">
                 💳 ค่าบริการ: <span className="font-bold text-slate-900">{tool.priceModel}</span>
              </span>
           </div>
        </header>

        {/* ---------------- BODY CONTENT ---------------- */}
        <div className="prose prose-slate prose-lg max-w-none">
           
           {/* Section 1: ที่มาที่ไป */}
           <section className="mb-16">
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2 border-b border-slate-200 pb-4">
                 <BookOpen className="text-blue-600" /> ที่มาและแนวคิดการทำงาน
              </h2>
              <p className="text-slate-600 leading-loose">
                 {tool.origin}
              </p>
           </section>

           {/* Section 2: จุดเด่นและฟีเจอร์ */}
           <section className="mb-16 p-8 bg-white rounded-3xl border border-slate-200 shadow-sm">
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                 <Sparkles className="text-yellow-500" /> ความสามารถหลัก (Features)
              </h2>
              <ul className="grid sm:grid-cols-1 gap-4">
                 {tool.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-4 bg-slate-50 p-4 rounded-xl border border-slate-100">
                       <div className="mt-0.5 bg-blue-100 text-blue-600 p-1.5 rounded-full shrink-0">
                          <CheckCircle2 size={16} />
                       </div>
                       <span className="text-slate-700 text-base">{feature}</span>
                    </li>
                 ))}
              </ul>
           </section>

           {/* Section 3: เจาะลึก ข้อดี - ข้อสังเกต */}
           <section className="mb-16">
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2 border-b border-slate-200 pb-4">
                 <AlertCircle className="text-slate-700" /> วิเคราะห์ข้อดีและข้อสังเกต
              </h2>
              <div className="grid md:grid-cols-2 gap-6 mt-8">
                 {/* ข้อดี */}
                 <div className="bg-green-50/50 p-6 rounded-3xl border border-green-200">
                    <h3 className="text-green-800 font-bold mb-6 flex items-center gap-2 text-xl">
                       <CheckCircle2 className="text-green-500" /> จุดเด่น (Pros)
                    </h3>
                    <ul className="space-y-4">
                       {tool.pros.map((pro, i) => (
                          <li key={i} className="flex items-start gap-3 text-slate-700 leading-relaxed text-sm">
                             <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 shrink-0" />
                             {pro}
                          </li>
                       ))}
                    </ul>
                 </div>
                 
                 {/* ข้อเสีย */}
                 <div className="bg-red-50/50 p-6 rounded-3xl border border-red-200">
                    <h3 className="text-red-800 font-bold mb-6 flex items-center gap-2 text-xl">
                       <XCircle className="text-red-500" /> ข้อควรระวัง (Cons)
                    </h3>
                    <ul className="space-y-4">
                       {tool.cons.map((con, i) => (
                          <li key={i} className="flex items-start gap-3 text-slate-700 leading-relaxed text-sm">
                             <div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 shrink-0" />
                             {con}
                          </li>
                       ))}
                    </ul>
                 </div>
              </div>
           </section>

           {/* Section 4: แจก Prompts พร้อมปุ่ม Copy */}
           <section className="mb-16">
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2 border-b border-slate-200 pb-4">
                 <Terminal className="text-slate-700" /> แจก Prompt นำไปใช้งานจริง
              </h2>
              <p className="text-slate-600 mb-8 leading-relaxed">
                 นี่คือตัวอย่าง Prompt ระดับพรีเมียมที่คุณสามารถกด <strong>"คัดลอก"</strong> ไปวางใน {tool.name} ได้ทันที (อย่าลืมเติมข้อมูลของคุณลงในช่อง <span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded text-sm font-mono">[ระบุ...]</span> ก่อนกดส่งคำสั่งนะครับ)
              </p>
              
              <div className="space-y-12">
                 {tool.prompts?.map((p, i) => (
                    <div key={i} className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
                       <h3 className="text-lg font-bold text-slate-800 mb-4 border-l-4 border-blue-500 pl-3">
                          💡 ไอเดียที่ {i+1}: {p.purpose}
                       </h3>
                       
                       <PromptCopyBox label="🇹🇭 โครงสร้างภาษาไทย" promptText={p.promptTh} />
                       <PromptCopyBox label="🇬🇧 โครงสร้างภาษาอังกฤษ (แนะนำ)" promptText={p.promptEn} />
                    </div>
                 ))}
              </div>
           </section>

           {/* Section 5: Step-by-step */}
           <section className="mb-16">
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2 border-b border-slate-200 pb-4">
                 <Zap className="text-blue-600" /> 3 ขั้นตอนเริ่มต้นใช้งาน
              </h2>
              <div className="grid sm:grid-cols-3 gap-6 mt-8">
                 {tool.steps.map((step, i) => (
                    <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm text-center">
                       <div className="w-12 h-12 mx-auto rounded-full bg-blue-50 text-blue-600 flex items-center justify-center font-black text-xl mb-4 border border-blue-100">
                          {i + 1}
                       </div>
                       <h3 className="font-bold text-slate-900 mb-2">{step.title}</h3>
                       <p className="text-sm text-slate-500 leading-relaxed">{step.desc}</p>
                    </div>
                 ))}
              </div>
           </section>

           {/* Section 6: FAQs */}
           <section className="mb-16 p-8 bg-slate-50 rounded-3xl border border-slate-200">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">🤔 คำถามที่พบบ่อย</h2>
              <div className="space-y-4">
                 {tool.faqs.map((faq, i) => (
                    <div key={i}>
                       <h4 className="font-bold text-slate-800">Q: {faq.question}</h4>
                       <p className="text-slate-600 text-sm mt-1">A: {faq.answer}</p>
                    </div>
                 ))}
              </div>
           </section>

        </div>
      </article>
    </main>
  );
}