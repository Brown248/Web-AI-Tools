"use client";

import Link from 'next/link';
import { motion, Variants, AnimatePresence } from 'framer-motion';
import { tools, categories } from '@/lib/data';
import ToolCard from '@/components/ui/ToolCard';
import AdUnit from '@/components/ui/AdUnit'; // ✅ Import AdUnit
import { Search, ArrowRight, Sparkles, X, Filter } from 'lucide-react';
import { useState, useMemo } from 'react';

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
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredTools = useMemo(() => {
    return tools.filter((tool) => {
      const searchContent = query.toLowerCase();
      const matchesSearch = 
        tool.name.toLowerCase().includes(searchContent) ||
        tool.description.toLowerCase().includes(searchContent) ||
        tool.features.some(f => f.toLowerCase().includes(searchContent));

      const matchesCategory = selectedCategory ? tool.category === selectedCategory : true;

      return matchesSearch && matchesCategory;
    });
  }, [query, selectedCategory]);

  const isFiltering = query.length > 0 || selectedCategory !== null;

  const handleCategorySelect = (slug: string | null) => {
    setSelectedCategory(slug === selectedCategory ? null : slug);
    if (slug) {
      document.getElementById('tools-section')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const clearFilters = () => {
    setQuery("");
    setSelectedCategory(null);
  };

  return (
    <main className="min-h-screen bg-background relative overflow-hidden">
      
      {/* Background & Hero Section (เหมือนเดิม) ... */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.6] z-0" />
        <div className="absolute top-[-20%] left-[10%] w-[60vw] h-[60vw] bg-blue-100/40 rounded-full blur-[120px] mix-blend-multiply animate-pulse-slow" />
        <div className="absolute top-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-purple-100/40 rounded-full blur-[120px] mix-blend-multiply animate-pulse-slow animation-delay-2000" />
      </div>

      <section className="relative pt-44 pb-32 px-6 z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="flex flex-col items-center gap-8"
          >
             {/* ... (Hero Content Code เดิม) ... */}
             <motion.div variants={itemVariants}>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-blue-100 shadow-sm text-xs font-semibold text-blue-600 tracking-wide">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                AI Tools Updated 2025
              </span>
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 leading-[1.15]">
              Discover the Best <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">AI Tools</span> for You.
            </motion.h1>

            <motion.p variants={itemVariants} className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed font-light">
              รวบรวมเครื่องมือ AI ที่ทรงพลังที่สุด ช่วยคุณประหยัดเวลา <br className="hidden md:block"/>
              และสร้างสรรค์ผลงานได้มากกว่าเดิม
            </motion.p>

            <motion.div variants={itemVariants} className="w-full max-w-xl relative group mt-2">
               <div className="absolute -inset-1 bg-gradient-to-r from-blue-200 to-indigo-200 rounded-2xl blur opacity-40 group-hover:opacity-60 transition duration-500"></div>
               <div className="relative flex items-center bg-white p-2 rounded-2xl shadow-xl shadow-blue-900/5 border border-slate-100">
                  <Search className="ml-4 text-slate-400" size={20} />
                  <input 
                    type="text" 
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="ค้นหาเครื่องมือ เช่น 'เขียนบทความ', 'แต่งรูป'..." 
                    className="w-full p-3.5 bg-transparent outline-none text-slate-700 placeholder:text-slate-400"
                  />
                  {query && (
                    <button onClick={() => setQuery("")} className="mr-2 p-1 text-slate-400 hover:text-slate-600">
                      <X size={16} />
                    </button>
                  )}
                  <button className="px-6 py-3 bg-slate-900 hover:bg-blue-600 text-white rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-blue-500/30">
                    ค้นหา
                  </button>
               </div>
            </motion.div>

             <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-2 mt-4">
              <span className="text-sm text-slate-400 py-1">ยอดฮิต:</span>
              {['ChatGPT', 'Midjourney', 'Canva', 'Notion'].map((tag) => (
                <button 
                  key={tag}
                  onClick={() => setQuery(tag)}
                  className="text-sm px-3 py-1 rounded-full bg-white/60 border border-slate-200 text-slate-600 hover:bg-white hover:text-blue-600 hover:border-blue-200 cursor-pointer transition-all shadow-sm"
                >
                  {tag}
                </button>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* =========================================
          TOOLS GRID SECTION (Updated with Ads)
      ========================================= */}
      <section id="tools-section" className="max-w-7xl mx-auto px-6 mb-32 relative z-10 min-h-[500px]">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 px-2 gap-4">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 flex items-center gap-2">
              {isFiltering ? (
                <>Search Results <span className="text-lg font-normal text-slate-400">({filteredTools.length})</span></>
              ) : (
                <>Featured Tools 🔥</>
              )}
            </h2>
            <p className="text-slate-500 mt-2 font-light">
              {isFiltering ? "ผลลัพธ์การค้นหาตามเงื่อนไขของคุณ" : "เครื่องมือแนะนำประจำสัปดาห์"}
            </p>
          </div>

          <div className="flex items-center gap-3">
             {isFiltering ? (
               <button 
                 onClick={clearFilters}
                 className="flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-red-500 bg-white border border-slate-200 px-4 py-2 rounded-full transition-all hover:border-red-200 hover:bg-red-50"
               >
                 <X size={16} /> ล้างตัวกรอง
               </button>
             ) : (
               <Link href="/ranking" className="flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 bg-blue-50 hover:bg-blue-100 px-4 py-2 rounded-full transition-all">
                 ดูทั้งหมด <ArrowRight size={16} />
               </Link>
             )}
          </div>
        </div>
        
        {/* Active Filters */}
        {selectedCategory && (
           <div className="mb-8 flex gap-2">
              <span className="text-sm text-slate-500 py-1">หมวดหมู่:</span>
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-md bg-blue-50 text-blue-700 text-sm font-medium border border-blue-100">
                {categories.find(c => c.slug === selectedCategory)?.name || selectedCategory}
                <button onClick={() => setSelectedCategory(null)} className="hover:text-blue-900"><X size={14}/></button>
              </span>
           </div>
        )}

        {/* Grid Content with Ads */}
        <AnimatePresence mode="wait">
          {filteredTools.length > 0 ? (
            <motion.div 
              key="grid"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{ visible: { transition: { staggerChildren: 0.05 } } }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredTools.map((tool, index) => (
                <motion.div key={tool.id} layout>
                   <ToolCard tool={tool} />
                   
                   {/* ✅ แทรก AdUnit ทุกๆ 6 การ์ด (และต้องไม่ใช่การ์ดสุดท้าย) */}
                   {(index + 1) % 6 === 0 && index !== filteredTools.length - 1 && (
                     <div className="hidden lg:block lg:col-span-1 mt-6">
                        <AdUnit />
                     </div>
                   )}
                   {/* สำหรับ Mobile อาจจะแทรกถี่ขึ้นหรือซ่อนไว้ก็ได้ */}
                </motion.div>
              ))}
              
              {/* ถ้าอยากให้ AdUnit แทรกเป็น Item แยกใน Grid เลย (ไม่ซ้อนใน Div) ต้องใช้ Fragment */}
              {/* แต่เนื่องจากเราใช้ framer-motion การห่อด้วย div แล้วใช้ grid-flow อาจจะซับซ้อน */}
              {/* วิธีที่ง่ายที่สุดสำหรับ Grid คือ Render Array ที่ผสม Ad เข้าไปแล้ว */}
            </motion.div>
          ) : (
            <motion.div 
              key="empty"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center justify-center py-20 text-center bg-white/50 rounded-3xl border border-dashed border-slate-200"
            >
               <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mb-4 text-slate-400">
                 <Search size={32} />
               </div>
               <h3 className="text-xl font-bold text-slate-900">ไม่พบเครื่องมือที่คุณค้นหา</h3>
               <p className="text-slate-500 mt-2">ลองใช้คำค้นหาอื่น หรือเลือกหมวดหมู่ใหม่</p>
               <button onClick={clearFilters} className="mt-6 text-blue-600 hover:underline">
                 กลับไปดูทั้งหมด
               </button>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* Categories Section (เหมือนเดิม) ... */}
      <section className="py-24 relative bg-slate-50/50 border-t border-slate-200/60">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Explore by Category</h2>
            <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full opacity-20" />
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {categories.map((cat, idx) => {
              const isActive = selectedCategory === cat.slug;
              return (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                >
                  <button
                    onClick={() => handleCategorySelect(cat.slug)}
                    className={`
                      flex items-center gap-3 px-6 py-3.5 rounded-xl border shadow-sm transition-all duration-300
                      ${isActive 
                        ? 'bg-blue-600 border-blue-600 text-white shadow-blue-500/25 ring-2 ring-blue-200 ring-offset-2' 
                        : 'bg-white border-slate-200 text-slate-700 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-500/10'}
                    `}
                  >
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${isActive ? 'bg-white/20 text-white' : 'bg-blue-50 text-blue-600'}`}>
                      <Sparkles size={14} />
                    </div>
                    <span className="font-medium">
                      {cat.name}
                    </span>
                  </button>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

    </main>
  );
}