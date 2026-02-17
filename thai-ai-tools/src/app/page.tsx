"use client";

import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import { tools, categories } from '@/lib/data';
import ToolCard from '@/components/ui/ToolCard';
import { Search, ArrowRight, Sparkles } from 'lucide-react';

// --- Animation Config ---
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.5, ease: "easeOut" } 
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-background relative overflow-hidden">
      
      {/* =========================================
          BACKGROUND DESIGN (Clean & Blended)
      ========================================= */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        {/* 1. Grid Pattern พื้นหลังจางๆ */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.6] z-0" />
        
        {/* 2. Soft Gradient Blobs (ใหญ่และเบลอมาก เพื่อความเนียน) */}
        <div className="absolute top-[-20%] left-[10%] w-[60vw] h-[60vw] bg-blue-100/40 rounded-full blur-[120px] mix-blend-multiply animate-pulse-slow" />
        <div className="absolute top-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-purple-100/40 rounded-full blur-[120px] mix-blend-multiply animate-pulse-slow animation-delay-2000" />
        <div className="absolute top-[40%] left-[30%] w-[40vw] h-[40vw] bg-indigo-100/30 rounded-full blur-[100px] mix-blend-multiply" />
      </div>

      {/* =========================================
          1. HERO SECTION
      ========================================= */}
      <section className="relative pt-44 pb-32 px-6 z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="flex flex-col items-center gap-8"
          >
            {/* Badge */}
            <motion.div variants={itemVariants}>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-blue-100 shadow-sm text-xs font-semibold text-blue-600 tracking-wide">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                AI Tools Updated 2025
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1 
              variants={itemVariants} 
              className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 leading-[1.15]"
            >
              Discover the Best <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">AI Tools</span> for You.
            </motion.h1>

            {/* Subheadline */}
            <motion.p variants={itemVariants} className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed font-light">
              รวบรวมเครื่องมือ AI ที่ทรงพลังที่สุด ช่วยคุณประหยัดเวลา <br className="hidden md:block"/>
              และสร้างสรรค์ผลงานได้มากกว่าเดิม
            </motion.p>

            {/* Search Bar (Clean White on Soft Bg) */}
            <motion.div variants={itemVariants} className="w-full max-w-xl relative group mt-2">
               <div className="absolute -inset-1 bg-gradient-to-r from-blue-200 to-indigo-200 rounded-2xl blur opacity-40 group-hover:opacity-60 transition duration-500"></div>
               <div className="relative flex items-center bg-white p-2 rounded-2xl shadow-xl shadow-blue-900/5 border border-slate-100">
                  <Search className="ml-4 text-slate-400" size={20} />
                  <input 
                    type="text" 
                    placeholder="ค้นหาเครื่องมือ..." 
                    className="w-full p-3.5 bg-transparent outline-none text-slate-700 placeholder:text-slate-400"
                  />
                  <button className="px-6 py-3 bg-slate-900 hover:bg-blue-600 text-white rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-blue-500/30">
                    ค้นหา
                  </button>
               </div>
            </motion.div>

            {/* Tags */}
            <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-2 mt-4">
              <span className="text-sm text-slate-400 py-1">ยอดฮิต:</span>
              {['ChatGPT', 'Midjourney', 'Canva', 'Notion'].map((tag) => (
                <span 
                  key={tag}
                  className="text-sm px-3 py-1 rounded-full bg-white/60 border border-slate-200 text-slate-600 hover:bg-white hover:text-blue-600 hover:border-blue-200 cursor-pointer transition-all shadow-sm"
                >
                  {tag}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* =========================================
          2. FEATURED TOOLS
      ========================================= */}
      <section className="max-w-7xl mx-auto px-6 mb-32 relative z-10">
        <div className="flex justify-between items-end mb-10 px-2">
          <div>
            <h2 className="text-3xl font-bold text-slate-900">Featured Tools</h2>
            <p className="text-slate-500 mt-2 font-light">เครื่องมือแนะนำประจำสัปดาห์</p>
          </div>
          <Link href="/ranking" className="flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 bg-blue-50 hover:bg-blue-100 px-4 py-2 rounded-full transition-all">
            ดูทั้งหมด <ArrowRight size={16} />
          </Link>
        </div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {tools.slice(0, 6).map((tool, index) => (
            <ToolCard key={tool.id} tool={tool} index={index} />
          ))}
        </motion.div>
      </section>

      {/* =========================================
          3. CATEGORIES
      ========================================= */}
      <section className="py-24 relative">
        {/* พื้นหลังแยกส่วนเล็กน้อยแต่ยังกลมกลืน */}
        <div className="absolute inset-0 bg-white/40 skew-y-2 transform origin-bottom-left -z-10" />
        
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Explore Categories</h2>
            <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full opacity-20" />
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {categories.map((cat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
              >
                <motion.button
                  whileHover={{ y: -4, scale: 1.02 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-3 px-6 py-3.5 bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-lg hover:shadow-blue-500/10 hover:border-blue-200 transition-all duration-300"
                >
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                    <Sparkles size={14} />
                  </div>
                  <span className="font-medium text-slate-700">
                    {cat.name}
                  </span>
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}