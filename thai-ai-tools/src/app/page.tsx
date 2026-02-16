"use client";
import Link from 'next/link';
import { motion } from 'framer-motion';
import { tools, categories } from '@/lib/data';
import ToolCard from '@/components/ui/ToolCard';
import AdUnit from '@/components/ui/AdUnit';
import { ArrowRight, BookOpen, Image as ImageIcon, PenTool, Presentation, ShoppingBag, Sparkles, Zap } from 'lucide-react';

const iconMap: any = {
  BookOpen: <BookOpen size={24} />,
  Image: <ImageIcon size={24} />,
  PenTool: <PenTool size={24} />,
  Presentation: <Presentation size={24} />,
  ShoppingBag: <ShoppingBag size={24} />,
};

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function Home() {
  return (
    <main className="min-h-screen bg-light pb-20 selection:bg-primary-100 selection:text-primary-900">
      
      {/* Hero Section: ดีไซน์สะอาด พร้อม Background Gradient นุ่มๆ */}
      <section className="relative pt-28 pb-32 overflow-hidden">
        {/* Background Graphic */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl -z-10 opacity-60">
           <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-100 rounded-full blur-3xl mix-blend-multiply filter" />
           <div className="absolute top-20 right-1/4 w-96 h-96 bg-blue-50 rounded-full blur-3xl mix-blend-multiply filter" />
        </div>

        <div className="container mx-auto px-4 text-center z-10 relative">
          
          {/* Badge: New Update */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-primary-200 text-primary-700 text-sm font-bold shadow-sm mb-8 hover:border-primary-300 transition-colors cursor-default"
          >
            <Sparkles size={14} className="text-primary-500 fill-primary-500" />
            <span>อัปเดตเครื่องมือ AI ใหม่ 2024</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold text-dark mb-6 tracking-tight leading-[1.1]"
          >
            รวมสุดยอด <span className="text-primary-600 relative inline-block">
              AI Tools
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-primary-200 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" /></svg>
            </span><br />
            ช่วยงานคุณให้ไวขึ้น 10 เท่า
          </motion.h1>
          
          {/* Subheadline */}
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-lg md:text-xl text-text mb-10 max-w-2xl mx-auto leading-relaxed font-medium"
          >
            คลังเครื่องมือ AI ภาษาไทย คัดเน้นๆ เฉพาะตัวที่ใช้งานได้จริง 
            <br className="hidden md:block"/> ช่วยลดเวลาทำงาน เรียน และทำธุรกิจ
          </motion.p>
          
          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button className="bg-primary-600 text-white px-8 py-3.5 rounded-xl font-bold text-lg hover:bg-primary-700 transition-all shadow-glow hover:-translate-y-1 active:translate-y-0 flex items-center gap-2 min-w-[200px] justify-center">
              <Zap size={20} fill="currentColor" /> ค้นหา AI ตอนนี้
            </button>
            <button className="bg-white text-text border border-border px-8 py-3.5 rounded-xl font-bold text-lg hover:bg-surface hover:text-dark hover:border-primary-300 transition-all min-w-[200px]">
              ดูหมวดหมู่ทั้งหมด
            </button>
          </motion.div>
        </div>
      </section>

      {/* AdSense Zone 1 */}
      <div className="container mx-auto px-4 mb-16">
        <AdUnit slot="1234567890" />
      </div>

      {/* Categories Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-dark mb-10 text-center flex items-center justify-center gap-2">
            เลือกตามหมวดหมู่
          </h2>
          <div className="flex flex-wrap justify-center gap-5">
            {categories.map((cat, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="flex flex-col items-center justify-center w-36 h-36 bg-white border border-border rounded-2xl shadow-sm cursor-pointer hover:border-primary-500 hover:shadow-md transition-all group"
              >
                <div className="text-muted group-hover:text-primary-600 transition-colors mb-3 bg-surface p-3 rounded-xl group-hover:bg-primary-50">
                  {iconMap[cat.icon]}
                </div>
                <span className="text-sm font-bold text-text group-hover:text-primary-700 text-center px-2">{cat.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular AI Section */}
      <section className="py-20 bg-surface border-t border-border">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-1 h-6 bg-primary-600 rounded-full"></span>
                <h2 className="text-3xl font-bold text-dark">AI ยอดนิยม</h2>
              </div>
              <p className="text-muted pl-3 font-medium">เครื่องมือที่มีผู้ใช้งานมากที่สุดในเดือนนี้</p>
            </div>
            <Link href="/ranking" className="text-primary-600 font-bold hover:text-primary-800 transition-colors hidden md:flex items-center gap-1 bg-white px-4 py-2 rounded-lg border border-transparent hover:border-border hover:shadow-sm">
              ดูอันดับทั้งหมด <ArrowRight size={18} />
            </Link>
          </div>

          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {tools.map((tool) => (
              <motion.div key={tool.id} variants={item}>
                <ToolCard tool={tool} />
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-10 text-center md:hidden">
             <Link href="/ranking" className="text-primary-600 font-bold hover:underline">
               ดูอันดับทั้งหมด →
            </Link>
          </div>
        </div>
      </section>

      {/* AdSense Zone 2 */}
      <div className="container mx-auto px-4 mt-10">
        <AdUnit label="Sponsored Content" />
      </div>
    </main>
  );
}