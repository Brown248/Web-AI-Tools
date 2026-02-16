"use client";
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import { tools, categories } from '@/lib/data';
import ToolCard from '@/components/ui/ToolCard';
import AdUnit from '@/components/ui/AdUnit';
import { ArrowRight, Sparkles, Search, Layers, Image as IconImage, Type, Presentation, Video, ShoppingBag, GraduationCap, Mic } from 'lucide-react';

// Icon mapping
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
  return (
    <main className="min-h-screen pb-20">
      
      {/* --- 1. HERO SECTION --- */}
      <section className="relative pt-32 pb-24 px-6 overflow-hidden bg-gradient-to-b from-primary-50/50 to-white">
        {/* Floating Shapes */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary-100 rounded-full blur-3xl opacity-30 animate-[float_8s_ease-in-out_infinite]" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-accent-100 rounded-full blur-3xl opacity-30 animate-[float_10s_ease-in-out_infinite_reverse]" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="flex flex-col items-center"
          >
            <motion.div variants={fadeInUp} className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 bg-white border border-primary-100 rounded-full shadow-sm text-sm font-semibold text-primary-600">
              <Sparkles size={14} className="fill-primary-600" />
              <span>อัปเดตใหม่ 2024</span>
            </motion.div>

            <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-extrabold text-foreground mb-6 leading-tight tracking-tight">
              รวม <span className="text-primary-600">AI ฟรี</span> ที่คนไทยต้องรู้ <br className="hidden md:block" />
              ช่วยงานเสร็จไวขึ้น 10 เท่า
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
              รีวิวเครื่องมือ AI ภาษาไทย คัดเน้นๆ เฉพาะตัวที่ใช้งานได้จริง <br className="hidden md:block"/> 
              มีวิธีใช้ละเอียด เหมาะกับนักเรียน คนทำงาน และธุรกิจ
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
               <button className="px-8 py-3.5 bg-primary-600 text-white rounded-2xl font-bold text-lg hover:bg-primary-700 hover:-translate-y-1 transition-all shadow-lg shadow-primary-600/20">
                 ดู AI ทั้งหมด
               </button>
               <button className="px-8 py-3.5 bg-white text-foreground border border-border rounded-2xl font-bold text-lg hover:bg-slate-50 hover:border-slate-300 transition-all flex items-center justify-center gap-2">
                 <Search size={20} /> ค้นหาเครื่องมือ
               </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* --- ADSENSE PLACEMENT 1 --- */}
      <div className="max-w-4xl mx-auto px-6 mb-16">
        <AdUnit label="ผู้สนับสนุน" />
      </div>

      {/* --- 2. POPULAR AI SECTION --- */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-2">AI ฟรียอดนิยม 🔥</h2>
            <p className="text-muted-foreground">เครื่องมือที่มีผู้ใช้งานมากที่สุดในเดือนนี้</p>
          </div>
          <Link href="/ranking" className="hidden md:flex items-center gap-2 text-primary-600 font-bold hover:underline">
            ดูทั้งหมด <ArrowRight size={18} />
          </Link>
        </div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {tools.map((tool) => (
            <motion.div key={tool.id} variants={fadeInUp}>
              <ToolCard tool={tool} />
            </motion.div>
          ))}
        </motion.div>
        
        <div className="mt-8 text-center md:hidden">
             <Link href="/ranking" className="text-primary-600 font-bold hover:underline">
               ดูทั้งหมด →
            </Link>
        </div>
      </section>

      {/* --- 3. CATEGORIES SECTION --- */}
      <section className="bg-slate-50 py-20 mb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">เลือกตามหมวดหมู่</h2>
            <p className="text-muted-foreground">รวม AI แยกตามการใช้งาน หาเจอง่าย</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {categories.map((cat, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ scale: 1.03, y: -2 }}
                className="bg-white rounded-2xl p-4 flex flex-col items-center justify-center gap-3 border border-border shadow-soft cursor-pointer hover:border-primary-200 hover:shadow-md transition-all h-32 text-center"
              >
                <div className="text-primary-600 bg-primary-50 p-2 rounded-lg">
                  {iconMap[cat.icon] || <Layers size={24} />}
                </div>
                <span className="font-semibold text-sm text-foreground">{cat.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 4. LATEST ARTICLES (Placeholder) --- */}
      <section className="max-w-7xl mx-auto px-6 mb-20">
        <h2 className="text-3xl font-bold text-foreground mb-10">บทความแนะนำ 📖</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           {/* Dummy Article Card */}
           {[1, 2].map((i) => (
             <div key={i} className="group cursor-pointer">
               <div className="bg-slate-200 rounded-2xl h-64 mb-4 overflow-hidden relative">
                  <div className="absolute inset-0 bg-slate-300 group-hover:scale-105 transition-transform duration-500" />
               </div>
               <div className="flex gap-2 text-sm text-primary-600 font-bold mb-2">
                 <span>TIPS & TRICKS</span>
                 <span>•</span>
                 <span>12 ก.พ. 2024</span>
               </div>
               <h3 className="text-xl font-bold text-foreground group-hover:text-primary-600 transition-colors">
                 รวม 10 Prompt ChatGPT ภาษาไทย สำหรับแม่ค้าออนไลน์
               </h3>
             </div>
           ))}
        </div>
      </section>

      {/* --- ADSENSE PLACEMENT 2 --- */}
      <div className="max-w-4xl mx-auto px-6">
        <AdUnit label="โฆษณา" />
      </div>

    </main>
  );
}