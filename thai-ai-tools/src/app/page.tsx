"use client";

import Link from 'next/link';
import { motion, Variants } from 'framer-motion'; // เพิ่ม Variants
import { tools, categories } from '@/lib/data';
import ToolCard from '@/components/ui/ToolCard';
import AdUnit from '@/components/ui/AdUnit';
import { 
  Search, ArrowRight, Sparkles, Layers, 
  Image as IconImage, Type, Presentation, Video, 
  ShoppingBag, GraduationCap, Mic, Code, Wrench
} from 'lucide-react';

// --- Configuration & Variants ---

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  Image: <IconImage size={24} />,
  Type: <Type size={24} />,
  Writing: <Type size={24} />,
  Presentation: <Presentation size={24} />,
  Video: <Video size={24} />,
  Marketing: <ShoppingBag size={24} />,
  Education: <GraduationCap size={24} />,
  Audio: <Mic size={24} />,
  Code: <Code size={24} />,
  Productivity: <Wrench size={24} />,
};

// แก้ไขจุดที่ Error: ระบุ type Variants และใช้ as const กับค่า ease
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.8, 
      ease: [0.16, 1, 0.3, 1] as const // ✅ ใส่ as const เพื่อบอกว่าเป็น Tuple (Fixed array)
    } 
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 }
  }
};

// --- Main Page Component ---

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      
      {/* =========================================
          1. HERO SECTION
      ========================================= */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full overflow-hidden -z-10 pointer-events-none">
          <div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] bg-indigo-100/40 rounded-full blur-[100px] mix-blend-multiply animate-float" />
          <div className="absolute top-[10%] right-[20%] w-[400px] h-[400px] bg-sky-100/40 rounded-full blur-[80px] mix-blend-multiply animate-float" style={{ animationDelay: '2s' }} />
        </div>

        <div className="max-w-4xl mx-auto text-center z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="flex flex-col items-center"
          >
            {/* Tagline Badge */}
            <motion.div variants={fadeInUp} className="mb-8">
              <span className="inline-flex items-center gap-2 px-3 py-1 bg-white/80 backdrop-blur-sm border border-indigo-100 rounded-full shadow-sm text-xs font-bold text-indigo-600 tracking-wide uppercase">
                <Sparkles size={12} className="fill-indigo-600" />
                อัปเดตเครื่องมือใหม่ 2024
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 mb-6 leading-[1.1] tracking-tight">
              รวมสุดยอด <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-sky-500">AI Tools</span> <br />
              ที่ช่วยคุณทำงานไวขึ้น 10 เท่า
            </motion.h1>

            {/* Subheadline */}
            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed">
              คลังเครื่องมือ AI ภาษาไทย คัดเน้นๆ เฉพาะตัวที่ใช้งานได้จริง ฟรี และคุ้มค่า 
              เหมาะสำหรับนักเรียน คนทำงาน และนักสร้างสรรค์
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center">
               <button className="px-8 py-4 bg-indigo-600 text-white rounded-xl font-bold text-base hover:bg-indigo-700 hover:shadow-lg hover:shadow-indigo-600/20 transition-all duration-300 transform hover:-translate-y-1">
                 ดูเครื่องมือทั้งหมด
               </button>
               <button className="px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-xl font-bold text-base hover:bg-slate-50 hover:border-slate-300 transition-all duration-300 flex items-center justify-center gap-2">
                 <Search size={18} /> ค้นหา AI
               </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* --- Ad Unit --- */}
      <div className="max-w-5xl mx-auto px-6 mb-16">
        <AdUnit label="ผู้สนับสนุน" />
      </div>

      {/* =========================================
          2. FEATURED TOOLS (POPULAR)
      ========================================= */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-2 flex items-center gap-2">
              ยอดนิยมประจำสัปดาห์ <span className="text-2xl">🔥</span>
            </h2>
            <p className="text-slate-500">เครื่องมือที่มีผู้ใช้งานมากที่สุดและได้รับการโหวตสูงสุด</p>
          </div>
          <Link href="/ranking" className="group flex items-center gap-1 text-indigo-600 font-bold hover:text-indigo-700 transition-colors">
            ดูอันดับทั้งหมด 
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {tools.slice(0, 6).map((tool, index) => (
            <ToolCard key={tool.id} tool={tool} index={index} />
          ))}
        </motion.div>
      </section>

      {/* =========================================
          3. CATEGORIES
      ========================================= */}
      <section className="bg-slate-50/50 border-y border-slate-100 py-20 mb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">ค้นหาตามหมวดหมู่</h2>
            <p className="text-slate-500">แยกประเภทตามการใช้งาน เพื่อให้คุณเจอสิ่งที่ใช่ได้ง่ายที่สุด</p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {categories.map((cat, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group bg-white rounded-xl p-6 flex flex-col items-center justify-center gap-4 border border-slate-100 shadow-sm cursor-pointer hover:border-indigo-200 hover:shadow-md transition-all duration-300"
              >
                <div className="text-slate-400 bg-slate-50 p-3 rounded-lg group-hover:bg-indigo-50 group-hover:text-indigo-600 transition-colors">
                  {CATEGORY_ICONS[cat.icon] || <Layers size={24} />}
                </div>
                <span className="font-semibold text-sm text-slate-700 group-hover:text-slate-900">
                  {cat.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
          4. LATEST ARTICLES
      ========================================= */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <div className="flex items-center justify-between mb-10">
            <h2 className="text-3xl font-bold text-slate-900">บทความแนะนำ 📖</h2>
            <Link href="/blog" className="text-sm font-semibold text-slate-500 hover:text-indigo-600 transition-colors">
                อ่านทั้งหมด
            </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           {[1, 2].map((i) => (
             <article key={i} className="group cursor-pointer flex flex-col gap-4">
               <div className="bg-slate-100 rounded-2xl h-64 overflow-hidden relative border border-slate-200">
                  <div className="absolute inset-0 bg-slate-200 group-hover:scale-105 transition-transform duration-700 ease-out" />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-indigo-600">
                    TIPS & TRICKS
                  </div>
               </div>
               <div>
                   <div className="flex gap-2 text-xs font-medium text-slate-400 mb-2">
                     <span>12 ก.พ. 2024</span> • <span>5 นาทีอ่าน</span>
                   </div>
                   <h3 className="text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors leading-snug">
                     รวม 10 Prompt ChatGPT ภาษาไทย สำหรับแม่ค้าออนไลน์ ช่วยปิดการขายไวขึ้น
                   </h3>
               </div>
             </article>
           ))}
        </div>
      </section>

    </main>
  );
}