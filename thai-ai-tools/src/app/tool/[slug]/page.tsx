"use client";
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import { tools, categories } from '@/lib/data';
import ToolCard from '@/components/ui/ToolCard';
import AdUnit from '@/components/ui/AdUnit';
import { ArrowRight, Sparkles, Search, Layers, Image as IconImage, Type, Presentation, Video, ShoppingBag, GraduationCap, Mic } from 'lucide-react';

const iconMap: any = {
  Image: <IconImage size={24} />,
  Type: <Type size={24} />,
  Presentation: <Presentation size={24} />,
  Video: <Video size={24} />,
  ShoppingBag: <ShoppingBag size={24} />,
  GraduationCap: <GraduationCap size={24} />,
  Mic: <Mic size={24} />,
};

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.5, ease: "easeOut" } 
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

export default function Home() {
  // ดึงเฉพาะ 6 รายการแรกมาแสดงที่หน้าแรก
  const displayTools = tools.slice(0, 6);

  return (
    <main className="min-h-screen pb-20">
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-6 overflow-hidden bg-gradient-to-b from-primary-50/50 to-white">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary-100 rounded-full blur-3xl opacity-30 animate-float" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="flex flex-col items-center">
            <motion.div variants={fadeInUp} className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 bg-white border border-primary-100 rounded-full shadow-sm text-sm font-semibold text-primary-600">
              <Sparkles size={14} className="fill-primary-600" />
              <span>อัปเดต AI ล่าสุด 2024</span>
            </motion.div>
            <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-extrabold text-foreground mb-6 leading-tight">
              รวม <span className="text-primary-600">AI ฟรี</span> ที่คนไทยต้องรู้
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
              รีวิวละเอียด วิธีใช้จริง เหมาะกับใคร บอกครบ เพื่อคนไทยที่อยากทำงานไวขึ้น
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
               <Link href="/categories" className="px-8 py-3.5 bg-primary-600 text-white rounded-2xl font-bold text-lg hover:bg-primary-700 shadow-lg shadow-primary-600/20 transition-all">
                 ดู AI ทั้งหมด
               </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6 mb-16">
        <AdUnit label="ผู้สนับสนุน" />
      </div>

      {/* AI Grid Section */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <div className="flex justify-between items-end mb-10">
          <h2 className="text-3xl font-bold text-foreground">AI ฟรียอดนิยม 🔥</h2>
          <Link href="/ranking" className="text-primary-600 font-bold hover:underline flex items-center gap-1">
            ดูทั้งหมด <ArrowRight size={18} />
          </Link>
        </div>

        {displayTools.length > 0 ? (
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayTools.map((tool) => (
              <motion.div key={tool.id} variants={fadeInUp}>
                <ToolCard tool={tool} />
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <div className="py-20 text-center bg-slate-50 rounded-3xl border-2 border-dashed border-slate-200 text-slate-400">
            กำลังอัปเดตข้อมูลเครื่องมือใหม่...
          </div>
        )}
      </section>

      {/* Categories Section */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">หมวดหมู่ AI</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {categories.map((cat, idx) => (
              <Link href={`/category/${cat.slug}`} key={idx}>
                <motion.div whileHover={{ scale: 1.05 }} className="bg-white rounded-2xl p-4 flex flex-col items-center justify-center gap-3 border border-border shadow-soft h-32">
                  <div className="text-primary-600 bg-primary-50 p-2 rounded-lg">{iconMap[cat.icon]}</div>
                  <span className="font-semibold text-sm">{cat.name}</span>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6 mt-16">
        <AdUnit label="โฆษณา" />
      </div>
    </main>
  );
}