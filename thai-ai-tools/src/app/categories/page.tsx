"use client";

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { tools } from '@/lib/data';
import { 
  LayoutGrid, MessageSquare, ImageIcon, Video, Code, 
  PenTool, Music, Star, ArrowRight, Search, Mic, 
  Presentation, FileText, CheckCircle2 
} from 'lucide-react'; // ✅ อัปเดตการดึง Icon ให้ครบชุด

// 🧠 ฟังก์ชันสแกนชื่อหมวดหมู่ แล้วหาไอคอนที่ตรงสายที่สุด
const getCategoryIcon = (category: string) => {
  const name = category.toLowerCase();
  
  if (name.includes('presentation') || name.includes('slide')) return <Presentation size={16} />;
  if (name.includes('summar') || name.includes('note') || name.includes('document')) return <FileText size={16} />;
  if (name.includes('search') || name.includes('research')) return <Search size={16} />;
  if (name.includes('chat') || name.includes('text') || name.includes('writing')) return <MessageSquare size={16} />;
  if (name.includes('image') || name.includes('design') || name.includes('art')) return <ImageIcon size={16} />;
  if (name.includes('video') || name.includes('animation')) return <Video size={16} />;
  if (name.includes('code') || name.includes('dev') || name.includes('programming')) return <Code size={16} />;
  if (name.includes('voice') || name.includes('audio') || name.includes('speech')) return <Mic size={16} />;
  if (name.includes('music')) return <Music size={16} />;
  if (name.includes('productivity') || name.includes('workflow')) return <CheckCircle2 size={16} />;
  
  return <LayoutGrid size={16} />; // ค่าเริ่มต้น
};

export default function CategoriesPage() {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  // จัดกลุ่มและนับจำนวน Tool ในแต่ละหมวด
  const categoriesList = useMemo(() => {
    const counts: Record<string, number> = {};
    tools.forEach(tool => {
      counts[tool.category] = (counts[tool.category] || 0) + 1;
    });
    
    const catArray = Object.keys(counts).map(name => ({
      name,
      count: counts[name]
    }));
    
    // เรียงให้หมวดที่มีของเยอะสุดขึ้นก่อน
    catArray.sort((a, b) => b.count - a.count);
    return catArray;
  }, []);

  const filteredTools = useMemo(() => {
    if (activeCategory === 'All') return tools;
    return tools.filter(tool => tool.category === activeCategory);
  }, [activeCategory]);

  return (
    <main className="min-h-screen bg-background pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* --- HEADER --- */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
            Explore <span className="text-blue-600">Categories</span>
          </h1>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            ค้นหาเครื่องมือ AI ตามความสามารถเฉพาะด้าน ไม่ว่าจะเป็นทำสไลด์ สรุปเอกสาร หรือแต่งรูป
          </p>
        </div>

        {/* --- CATEGORY TABS --- */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          <button
            onClick={() => setActiveCategory('All')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
              activeCategory === 'All' 
                ? 'bg-slate-900 text-white shadow-lg shadow-slate-900/20 scale-105' 
                : 'bg-white text-slate-600 hover:bg-slate-50 border border-slate-200'
            }`}
          >
            <LayoutGrid size={16} /> ทั้งหมด
            <span className={`px-2 py-0.5 rounded-full text-xs ${activeCategory === 'All' ? 'bg-white/20' : 'bg-slate-100 text-slate-500'}`}>
              {tools.length}
            </span>
          </button>

          {categoriesList.map((cat) => (
            <button
              key={cat.name}
              onClick={() => setActiveCategory(cat.name)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeCategory === cat.name 
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30 scale-105' 
                  : 'bg-white text-slate-600 hover:bg-slate-50 border border-slate-200 hover:border-blue-200 hover:text-blue-600'
              }`}
            >
              {getCategoryIcon(cat.name)} {cat.name}
              <span className={`px-2 py-0.5 rounded-full text-xs ${activeCategory === cat.name ? 'bg-white/20' : 'bg-slate-100 text-slate-500'}`}>
                {cat.count}
              </span>
            </button>
          ))}
        </div>

        {/* --- TOOLS GRID --- */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredTools.map((tool) => (
              <motion.div
                key={tool.slug}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <Link href={`/tool/${tool.slug}`} className="block h-full">
                  <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-blue-500/5 hover:-translate-y-1 transition-all duration-300 h-full flex flex-col group">
                    
                    <div className="flex justify-between items-start mb-4">
                      <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-xl font-bold text-slate-900 border border-slate-100 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                        {tool.name.charAt(0)}
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        {tool.isFree && (
                           <span className="px-2.5 py-1 bg-green-50 text-green-600 text-[10px] font-bold uppercase tracking-wider rounded-full border border-green-100">
                             Free
                           </span>
                        )}
                        <div className="flex items-center gap-1 text-xs font-medium text-slate-500 bg-slate-50 px-2 py-1 rounded-lg">
                          <Star size={12} className="text-yellow-400 fill-yellow-400" /> {tool.rating}
                        </div>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {tool.name}
                    </h3>
                    <p className="text-slate-500 text-sm line-clamp-2 mb-6 flex-grow leading-relaxed">
                      {tool.description}
                    </p>

                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between mt-auto">
                       {/* ป้ายแสดงหมวดหมู่ */}
                       <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider bg-slate-50 px-2 py-1 rounded-md flex items-center gap-1">
                         {getCategoryIcon(tool.category)} {tool.category}
                       </span>
                       <span className="flex items-center gap-1 text-sm font-bold text-blue-600 group-hover:gap-2 transition-all">
                         ดูรีวิว <ArrowRight size={16} />
                       </span>
                    </div>

                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredTools.length === 0 && (
          <div className="text-center py-20">
             <p className="text-slate-400 text-lg">ไม่พบเครื่องมือในหมวดหมู่นี้</p>
          </div>
        )}

      </div>
    </main>
  );
}