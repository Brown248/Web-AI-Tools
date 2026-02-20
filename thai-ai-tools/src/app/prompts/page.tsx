"use client";

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { tools } from '@/lib/data';
import PromptCopyBox from '@/components/ui/PromptCopyBox';
import { Search, Terminal, LayoutGrid, Sparkles, X } from 'lucide-react';

export default function PromptLibraryPage() {
  const [query, setQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  // 🧠 ดึง Prompt ทั้งหมดออกมาจาก AI ทุกตัวมารวมกัน
  const allPrompts = useMemo(() => {
    return tools.flatMap((tool) => 
      (tool.prompts || []).map((prompt) => ({
        ...prompt,
        toolName: tool.name,
        toolSlug: tool.slug,
        category: tool.category,
        logoUrl: tool.logoUrl
      }))
    );
  }, []);

  // ดึงรายชื่อหมวดหมู่ที่มี Prompt 
  const categories = useMemo(() => {
    const cats = Array.from(new Set(allPrompts.map(p => p.category)));
    return ['All', ...cats];
  }, [allPrompts]);

  // ระบบค้นหาและกรอง
  const filteredPrompts = useMemo(() => {
    return allPrompts.filter((p) => {
      const searchContent = query.toLowerCase();
      const matchesSearch = 
        p.purpose.toLowerCase().includes(searchContent) ||
        p.promptTh.toLowerCase().includes(searchContent) ||
        p.promptEn.toLowerCase().includes(searchContent);
      
      const matchesCategory = activeCategory === 'All' || p.category === activeCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [query, activeCategory, allPrompts]);

  return (
    <main className="min-h-screen bg-slate-50 pt-32 pb-24 px-6 relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-blue-100/40 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* --- HEADER --- */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-100/50 text-blue-700 text-sm font-bold mb-4 border border-blue-200">
            <Terminal size={16} /> คลัง Prompt พร้อมใช้
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            AI Prompt <span className="text-blue-600">Library</span>
          </h1>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            รวมสูตรลับคำสั่ง AI ระดับพรีเมียม เลือกคัดลอกไปใช้งานกับงานของคุณได้ทันที ไม่ต้องคิดเองให้ปวดหัว!
          </p>
        </div>

        {/* --- SEARCH & FILTERS --- */}
        <div className="bg-white p-4 rounded-3xl border border-slate-200 shadow-sm mb-10 sticky top-24 z-20">
          <div className="flex flex-col md:flex-row gap-4">
            
            {/* Search Box */}
            <div className="relative flex-grow flex items-center bg-slate-50 rounded-2xl px-4 border border-slate-100 focus-within:border-blue-300 focus-within:bg-white transition-colors">
              <Search className="text-slate-400 shrink-0" size={20} />
              <input 
                type="text" 
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="ค้นหา prompt เช่น 'เขียนบทความ', 'สไลด์'..." 
                className="w-full p-3 bg-transparent outline-none text-slate-700 placeholder:text-slate-400"
              />
              {query && (
                <button onClick={() => setQuery('')} className="p-1 text-slate-400 hover:text-slate-600">
                  <X size={16} />
                </button>
              )}
            </div>

            {/* Category Select */}
            <div className="flex overflow-x-auto hide-scrollbar gap-2 pb-2 md:pb-0 items-center">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`whitespace-nowrap px-4 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                    activeCategory === cat 
                      ? 'bg-slate-900 text-white shadow-md' 
                      : 'bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-100'
                  }`}
                >
                  {cat === 'All' ? <span className="flex items-center gap-1"><LayoutGrid size={14}/> ทั้งหมด</span> : cat}
                </button>
              ))}
            </div>

          </div>
        </div>

        {/* --- PROMPT LIST --- */}
        <div className="space-y-8">
          <div className="flex items-center justify-between text-sm font-semibold text-slate-500 px-2">
            <span>พบ {filteredPrompts.length} รูปแบบคำสั่ง</span>
          </div>

          <AnimatePresence mode="popLayout">
            {filteredPrompts.length > 0 ? (
              filteredPrompts.map((prompt, index) => (
                <motion.div
                  key={`${prompt.toolSlug}-${index}`}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white p-6 md:p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:shadow-blue-500/5 transition-all"
                >
                  
                  {/* Card Header */}
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-100">
                    <h2 className="text-xl font-bold text-slate-800 flex items-start gap-2">
                      <Sparkles className="text-yellow-500 shrink-0 mt-1" size={20} />
                      {prompt.purpose}
                    </h2>
                    
                    <Link href={`/tool/${prompt.toolSlug}`} className="inline-flex items-center gap-2 px-3 py-1.5 bg-slate-50 hover:bg-blue-50 border border-slate-100 hover:border-blue-200 rounded-xl transition-colors group w-fit shrink-0">
                      <div className="w-6 h-6 relative bg-white rounded-md flex items-center justify-center border border-slate-200 overflow-hidden">
                        {prompt.logoUrl ? (
                          <Image src={prompt.logoUrl} alt={prompt.toolName} fill sizes="24px" className="object-cover" />
                        ) : (
                          <span className="text-[10px] font-bold text-slate-900">{prompt.toolName.charAt(0)}</span>
                        )}
                      </div>
                      <span className="text-xs font-bold text-slate-600 group-hover:text-blue-600">ใช้กับ {prompt.toolName}</span>
                    </Link>
                  </div>

                  {/* Copy Boxes */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <PromptCopyBox label="🇹🇭 ภาษาไทย" promptText={prompt.promptTh} />
                    </div>
                    <div>
                      <PromptCopyBox label="🇬🇧 ภาษาอังกฤษ (แนะนำ)" promptText={prompt.promptEn} />
                    </div>
                  </div>

                </motion.div>
              ))
            ) : (
              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                className="text-center py-20 bg-white/50 rounded-3xl border border-dashed border-slate-200"
              >
                <Terminal className="mx-auto text-slate-300 mb-4" size={48} />
                <h3 className="text-xl font-bold text-slate-800">ไม่พบ Prompt ที่ค้นหา</h3>
                <p className="text-slate-500 mt-2">ลองเปลี่ยนคำค้นหา หรือเลือกหมวดหมู่ใหม่ดูนะครับ</p>
                <button onClick={() => {setQuery(''); setActiveCategory('All');}} className="mt-4 text-blue-600 font-semibold hover:underline">
                  ล้างการค้นหา
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </main>
  );
}