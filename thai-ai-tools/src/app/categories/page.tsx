"use client";

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { tools } from '@/lib/data';
import ToolCard from '@/components/ui/ToolCard'; // ✅ ใช้ Component หลักตัวเดียวกับหน้าแรก
import { 
  LayoutGrid, MessageSquare, ImageIcon, Video, Code, 
  Search, Mic, Presentation, FileText, CheckCircle2 
} from 'lucide-react';

const getCategoryIcon = (category: string) => {
  const name = category.toLowerCase();
  if (name.includes('presentation') || name.includes('slide')) return <Presentation size={16} />;
  if (name.includes('summar') || name.includes('note')) return <FileText size={16} />;
  if (name.includes('chat') || name.includes('text')) return <MessageSquare size={16} />;
  if (name.includes('image')) return <ImageIcon size={16} />;
  if (name.includes('video')) return <Video size={16} />;
  if (name.includes('code')) return <Code size={16} />;
  if (name.includes('voice') || name.includes('audio')) return <Mic size={16} />;
  return <LayoutGrid size={16} />;
};

export default function CategoriesPage() {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categoriesList = useMemo(() => {
    const counts: Record<string, number> = {};
    tools.forEach(tool => {
      counts[tool.category] = (counts[tool.category] || 0) + 1;
    });
    return Object.keys(counts).map(name => ({ name, count: counts[name] })).sort((a, b) => b.count - a.count);
  }, []);

  const filteredTools = useMemo(() => {
    if (activeCategory === 'All') return tools;
    return tools.filter(tool => tool.category === activeCategory);
  }, [activeCategory]);

  return (
    <main className="min-h-screen bg-background pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
            Explore <span className="text-blue-600">Categories</span>
          </h1>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          <button
            onClick={() => setActiveCategory('All')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
              activeCategory === 'All' ? 'bg-slate-900 text-white' : 'bg-white text-slate-600 border'
            }`}
          >
            <LayoutGrid size={16} /> ทั้งหมด ({tools.length})
          </button>
          {categoriesList.map((cat) => (
            <button
              key={cat.name}
              onClick={() => setActiveCategory(cat.name)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
                activeCategory === cat.name ? 'bg-blue-600 text-white' : 'bg-white text-slate-600 border'
              }`}
            >
              {getCategoryIcon(cat.name)} {cat.name} ({cat.count})
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredTools.map((tool) => (
              <motion.div key={tool.slug} layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                {/* ✅ เรียกใช้ ToolCard โดยตรง ซึ่งจะดึงโลโก้จากพาธที่ถูกต้องตามหน้าแรก */}
                <ToolCard tool={tool} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </main>
  );
}