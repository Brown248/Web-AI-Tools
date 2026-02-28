"use client";

import Link from 'next/link';
import { motion, Variants, AnimatePresence } from 'framer-motion';
import { tools, categories } from '@/lib/data';
import ToolCard from '@/components/ui/ToolCard';
import { Search, ArrowRight, Sparkles, X, SlidersHorizontal, ArrowDownAZ } from 'lucide-react';
import { useState, useMemo, useEffect } from 'react';

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
  const [debouncedQuery, setDebouncedQuery] = useState(""); // State สำหรับหน่วงเวลาพิมพ์
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  const [priceFilter, setPriceFilter] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("recommended");

  // ระบบ Debounce: รอให้ผู้ใช้พิมพ์เสร็จ 300ms ค่อยอัปเดตคำค้นหา
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(query);
    }, 300);

    return () => clearTimeout(timer);
  }, [query]);

  // เลื่อนจออัตโนมัติเมื่อเลือกหมวดหมู่
  useEffect(() => {
    if (selectedCategory) {
      document.getElementById('tools-section')?.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
      });
    }
  }, [selectedCategory]);

  const filteredTools = useMemo(() => {
    let result = tools.filter((tool) => {
      const searchContent = debouncedQuery.toLowerCase();
      
      // ป้องกันเว็บแครช (Null/Undefined Safety) ด้วย Optional Chaining (?.)
      const matchesSearch = 
        (tool.name?.toLowerCase() || "").includes(searchContent) ||
        (tool.description?.toLowerCase() || "").includes(searchContent) ||
        (tool.features || []).some(f => (f?.toLowerCase() || "").includes(searchContent));

      // ✅ แก้ไขการจับคู่หมวดหมู่: หาชื่อเต็ม (name) จาก slug ที่ผู้ใช้เลือก
      const activeCategoryName = categories.find(c => c.slug === selectedCategory)?.name;
      const matchesCategory = selectedCategory ? tool.category === activeCategoryName : true;

      let matchesPrice = true;
      if (priceFilter === "free") matchesPrice = tool.isFree === true;
      if (priceFilter === "paid") matchesPrice = tool.isFree === false;

      return matchesSearch && matchesCategory && matchesPrice;
    });

    if (sortBy === "a-z") {
      result.sort((a, b) => (a.name || "").localeCompare(b.name || ""));
    } else if (sortBy === "z-a") {
      result.sort((a, b) => (b.name || "").localeCompare(a.name || ""));
    } else if (sortBy === "rating") {
      result.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    }

    return result;
  }, [debouncedQuery, selectedCategory, priceFilter, sortBy]);

  const isFiltering = debouncedQuery.length > 0 || selectedCategory !== null || priceFilter !== "all" || sortBy !== "recommended";

  const handleCategorySelect = (slug: string | null) => {
    setSelectedCategory(slug === selectedCategory ? null : slug);
  };

  const clearFilters = () => {
    setQuery("");
    setDebouncedQuery(""); // เคลียร์ทันที ไม่ต้องรอ Debounce
    setSelectedCategory(null);
    setPriceFilter("all");
    setSortBy("recommended");
  };

  const handleTagClick = (tag: string) => {
    setQuery(tag);
    setDebouncedQuery(tag); // อัปเดตทันที ไม่ต้องรอ Debounce
    // หน่วงเวลาเล็กน้อยเพื่อให้ DOM อัปเดตก่อนเลื่อนจอ ป้องกันการกระตุก
    setTimeout(() => {
      document.getElementById('tools-section')?.scrollIntoView({ behavior: 'smooth' });
    }, 50);
  };

  return (
    <main className="min-h-screen bg-background relative overflow-hidden">
      
      {/* Background & Hero Section */}
      <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.6] z-0" />
        <div className="absolute top-[-20%] left-[10%] w-[60vw] h-[60vw] bg-blue-100/40 rounded-full blur-[120px] animate-pulse-slow animate-float transform-gpu will-change-transform" />
        <div className="absolute top-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-purple-100/40 rounded-full blur-[120px] animate-pulse-slow animate-float [animation-direction:reverse] [animation-delay:2s] transform-gpu will-change-transform" />
      </div>

      <section className="relative pt-44 pb-32 px-6 z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="flex flex-col items-center gap-8"
          >
             <motion.div variants={itemVariants}>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-blue-100 shadow-sm text-xs font-semibold text-blue-600 tracking-wide">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                AI Tools Updated 2026
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
               <div className="absolute -inset-1 bg-gradient-to-r from-blue-300 to-indigo-300 rounded-2xl blur opacity-30 group-focus-within:opacity-70 group-hover:opacity-60 transition duration-500 transform-gpu"></div>
               
               <div className="relative flex items-center bg-white p-2 rounded-2xl shadow-xl shadow-blue-900/5 border border-slate-100 focus-within:ring-4 focus-within:ring-blue-500/20 focus-within:border-blue-400 transition-all duration-300">
                  <Search className="ml-4 text-slate-400 group-focus-within:text-blue-500 transition-colors" size={20} />
                  <input 
                    type="text" 
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="ค้นหาเครื่องมือ เช่น 'เขียนบทความ', 'แต่งรูป'..." 
                    className="w-full p-3.5 bg-transparent outline-none text-slate-700 placeholder:text-slate-400"
                  />
                  {query && (
                    <motion.button 
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      onClick={() => { setQuery(""); setDebouncedQuery(""); }} 
                      className="mr-2 p-1 text-slate-400 hover:text-slate-600"
                    >
                      <X size={16} />
                    </motion.button>
                  )}
                  <button className="px-6 py-3 bg-slate-900 hover:bg-blue-600 text-white rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-blue-500/30 hover:-translate-y-0.5 active:translate-y-0">
                    ค้นหา
                  </button>
               </div>
            </motion.div>

             <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-2 mt-4">
              <span className="text-sm text-slate-400 py-1">ยอดฮิต:</span>
              {['ChatGPT', 'Midjourney', 'Canva', 'Notion'].map((tag) => (
                <button 
                  key={tag}
                  onClick={() => handleTagClick(tag)}
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
          TOOLS GRID SECTION
      ========================================= */}
      <section id="tools-section" className="max-w-7xl mx-auto px-6 mb-32 relative z-10 min-h-[500px]">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-6 px-2 gap-4">
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
               <Link href="/categories" className="flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 bg-blue-50 hover:bg-blue-100 px-4 py-2 rounded-full transition-all">
                 ดูทั้งหมด <ArrowRight size={16} />
               </Link>
             )}
          </div>
        </div>

        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm mb-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          
          <div className="flex-1 flex items-center gap-2 w-full">
            {selectedCategory && (
              <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-blue-50 text-blue-700 text-sm font-medium border border-blue-100">
                <Sparkles size={14} />
                {categories.find(c => c.slug === selectedCategory)?.name || selectedCategory}
                <button onClick={() => setSelectedCategory(null)} className="ml-1 hover:text-blue-900 bg-white/50 rounded-full p-0.5"><X size={12}/></button>
              </span>
            )}
            {!selectedCategory && <span className="text-sm text-slate-400 hidden sm:block">แสดงทุกหมวดหมู่</span>}
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <div className="relative group">
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-slate-400">
                <SlidersHorizontal size={16} />
              </div>
              <select 
                value={priceFilter}
                onChange={(e) => setPriceFilter(e.target.value)}
                className="appearance-none bg-slate-50 border border-slate-200 text-slate-600 text-sm rounded-xl pl-9 pr-8 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500/20 cursor-pointer w-full"
              >
                <option value="all">ทุกราคา</option>
                <option value="free">ใช้งานฟรี (Free)</option>
                <option value="paid">มีค่าใช้จ่าย (Paid)</option>
              </select>
            </div>

            <div className="relative group">
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-slate-400">
                <ArrowDownAZ size={16} />
              </div>
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-slate-50 border border-slate-200 text-slate-600 text-sm rounded-xl pl-9 pr-8 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500/20 cursor-pointer w-full"
              >
                <option value="recommended">แนะนำ</option>
                <option value="rating">คะแนนรีวิวสูงสุด</option>
                <option value="a-z">ตัวอักษร (A-Z)</option>
                <option value="z-a">ตัวอักษร (Z-A)</option>
              </select>
            </div>
          </div>
        </div>

        {filteredTools.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredTools.map((tool) => (
                <motion.div 
                  key={tool.id} 
                  layout="position"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                  className="h-full" 
                >
                   <ToolCard tool={tool} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        ) : (
          <AnimatePresence mode="wait">
            <motion.div 
              key="empty"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="flex flex-col items-center justify-center py-20 text-center bg-white/50 rounded-3xl border border-dashed border-slate-200"
            >
               <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mb-4 text-slate-400">
                 <Search size={32} />
               </div>
               <h3 className="text-xl font-bold text-slate-900">ไม่พบเครื่องมือที่คุณค้นหา</h3>
               <p className="text-slate-500 mt-2">ลองเปลี่ยนเงื่อนไขการกรอง หรือใช้คำค้นหาอื่น</p>
               <button onClick={clearFilters} className="mt-6 text-blue-600 hover:underline">
                 ล้างตัวกรองทั้งหมด
               </button>
            </motion.div>
          </AnimatePresence>
        )}
      </section>
      
      {/* =========================================
          CATEGORIES SECTION (เพิ่มกลับมาให้สมบูรณ์)
      ========================================= */}
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
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <button
                    onClick={() => handleCategorySelect(cat.slug)}
                    className={`
                      flex items-center gap-3 px-6 py-3.5 rounded-xl border shadow-sm transition-all duration-300
                      ${isActive 
                        ? 'bg-blue-600 border-blue-600 text-white shadow-blue-500/40 ring-4 ring-blue-500/20' 
                        : 'bg-white border-slate-200 text-slate-700 hover:border-blue-300 hover:shadow-lg hover:shadow-blue-500/10'}
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