"use client";

import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import { tools, categories } from '@/lib/data';
import ToolCard from '@/components/ui/ToolCard';
import AdUnit from '@/components/ui/AdUnit';
import { 
  Search, ArrowRight, Sparkles, Layers, ArrowUpRight
} from 'lucide-react';

// --- Smooth Animation Variants (No Bounce) ---
const SMOOTH_EASE = [0.25, 0.4, 0.25, 1] as const; // Cubic Bezier สำหรับความนุ่มนวล

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40, filter: "blur(10px)" }, // เริ่มแบบเบลอๆ
  visible: { 
    opacity: 1, 
    y: 0, 
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: SMOOTH_EASE } 
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

export default function Home() {
  return (
    <main className="min-h-screen bg-background overflow-hidden selection:bg-primary-200">
      
      {/* =========================================
          1. HERO SECTION (Clean & Impactful)
      ========================================= */}
      <section className="relative pt-40 pb-32 px-6">
        
        {/* Subtle Background Gradients */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 opacity-60">
           <div className="absolute -top-[20%] -left-[10%] w-[70vw] h-[70vw] bg-primary-100/50 rounded-full blur-[120px]" />
           <div className="absolute top-[20%] -right-[10%] w-[60vw] h-[60vw] bg-purple-100/40 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="flex flex-col items-center gap-8"
          >
            {/* Badge */}
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/60 backdrop-blur-md border border-white/50 rounded-full shadow-sm">
               <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
               <span className="text-xs font-semibold text-slate-600 tracking-wide uppercase">AI Tools Updated 2024</span>
            </motion.div>

            {/* Headline */}
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-bold text-slate-900 tracking-tight leading-[1.1]">
              ค้นพบเครื่องมือ <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-indigo-600">AI</span> <br/>
              เพื่อยกระดับงานของคุณ
            </motion.h1>

            {/* Subheadline */}
            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto font-light leading-relaxed">
              แหล่งรวม AI Tools ภาษาไทยที่คัดสรรมาแล้ว เน้นใช้งานจริง ช่วยประหยัดเวลา <br className="hidden md:block"/>
              เพื่อให้คุณโฟกัสกับสิ่งที่สำคัญกว่า
            </motion.p>

            {/* Search Bar (Hero Style) */}
            <motion.div variants={fadeInUp} className="w-full max-w-lg relative group">
               <div className="absolute -inset-1 bg-gradient-to-r from-primary-200 to-indigo-200 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
               <div className="relative flex items-center bg-white p-2 rounded-2xl shadow-soft border border-slate-100">
                  <Search className="ml-4 text-slate-400" size={20} />
                  <input 
                    type="text" 
                    placeholder="ค้นหาเครื่องมือ เช่น 'แต่งรูป', 'เขียนบทความ'..." 
                    className="w-full p-3 bg-transparent outline-none text-slate-700 placeholder:text-slate-400"
                  />
                  <button className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-xl font-medium transition-colors shadow-lg shadow-primary-600/20">
                    ค้นหา
                  </button>
               </div>
            </motion.div>

            {/* Tags */}
            <motion.div variants={fadeInUp} className="flex gap-3 text-sm text-slate-400 mt-2">
              <span>ยอดฮิต:</span>
              {['ChatGPT', 'Midjourney', 'Canva', 'Notion AI'].map(tag => (
                <span key={tag} className="underline decoration-slate-200 hover:text-primary-600 hover:decoration-primary-600 cursor-pointer transition-all">{tag}</span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* --- Ad Unit --- */}
      <div className="max-w-6xl mx-auto px-6 mb-20">
        <div className="bg-slate-50/50 rounded-3xl p-8 border border-dashed border-slate-200 flex items-center justify-center min-h-[120px]">
           <span className="text-slate-400 text-sm font-medium">พื้นที่โฆษณา</span>
        </div>
      </div>

      {/* =========================================
          2. FEATURED TOOLS (Grid)
      ========================================= */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <div className="flex justify-between items-end mb-10 px-2">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">เครื่องมือแนะนำ 🔥</h2>
            <p className="text-slate-500 mt-1 font-light">คัดมาแล้วว่าเด็ด ใช้งานง่าย และคุ้มค่า</p>
          </div>
          <Link href="/ranking" className="hidden sm:flex items-center gap-1 text-sm font-semibold text-primary-600 hover:text-primary-700 transition-colors bg-primary-50 px-4 py-2 rounded-full">
            ดูทั้งหมด <ArrowRight size={16} />
          </Link>
        </div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {tools.slice(0, 6).map((tool, index) => (
            <ToolCard key={tool.id} tool={tool} index={index} />
          ))}
        </motion.div>
      </section>

      {/* =========================================
          3. CATEGORIES (Minimal Pills)
      ========================================= */}
      <section className="py-24 bg-white relative">
        <div className="absolute inset-0 bg-slate-50/50 skew-y-3 transform origin-bottom-right -z-10" />
        
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">เลือกตามหมวดหมู่</h2>
            <div className="w-16 h-1 bg-primary-600 mx-auto rounded-full opacity-20" />
          </div>
          
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-4xl mx-auto">
            {categories.map((cat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05, ease: SMOOTH_EASE, duration: 0.5 }}
                whileHover={{ y: -4, backgroundColor: "#fff" }}
                className="cursor-pointer group bg-slate-50 border border-slate-100 hover:border-primary-100 px-6 py-4 rounded-2xl flex items-center gap-3 transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-primary-900/5"
              >
                {/* Simple Icon Placeholder */}
                <div className="w-2 h-2 rounded-full bg-slate-300 group-hover:bg-primary-500 transition-colors" />
                <span className="font-medium text-slate-600 group-hover:text-slate-900">
                  {cat.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}