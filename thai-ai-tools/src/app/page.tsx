"use client";
import Link from 'next/link';
import { motion } from 'framer-motion';
import { tools, categories } from '@/lib/data';
import ToolCard from '@/components/ui/ToolCard';
import AdUnit from '@/components/ui/AdUnit';
import { ArrowRight, BookOpen, Image as ImageIcon, PenTool, Presentation, ShoppingBag, Sparkles } from 'lucide-react';

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
    <main className="min-h-screen bg-light pb-20">
      {/* Hero Section - ดีไซน์ใหม่ Modern & Clean */}
      <section className="relative pt-24 pb-32 overflow-hidden">
        {/* Background Gradient แบบผู้ดี */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary-100/50 via-light to-light -z-10" />
        
        <div className="container mx-auto px-4 text-center z-10 relative">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 border border-primary-100 text-primary-700 text-sm font-semibold mb-8"
          >
            <Sparkles size={16} className="text-primary-500" />
            <span>อัปเดตเครื่องมือ AI ใหม่ประจำปี 2024</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold text-dark mb-6 tracking-tight leading-tight"
          >
            รวมสุดยอด <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-cyan-500">AI Tools</span><br />
            ที่ช่วยให้คุณทำงานไวขึ้น 10 เท่า
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-lg md:text-xl text-text mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            แหล่งรวมรีวิวและแนะนำ AI ภาษาไทย คัดสรรมาแล้วว่าดีจริง ใช้งานง่าย
            <br className="hidden md:block"/> เหมาะสำหรับคนทำงาน นักเรียน และ Content Creator
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="bg-primary-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-primary-700 transition-all shadow-glow hover:translate-y-[-2px] flex items-center justify-center gap-2">
              ค้นหา AI ที่ใช่สำหรับคุณ <ArrowRight size={20} />
            </button>
            <button className="bg-white text-dark border border-border px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-50 transition-all hover:border-primary-200">
              ดูหมวดหมู่ทั้งหมด
            </button>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4">
        <AdUnit slot="1234567890" />
      </div>

      {/* Categories Section - ปรับ Card ให้ดู Minimal */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-dark mb-10 text-center">เลือกตามหมวดหมู่</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((cat, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ scale: 1.05, y: -2 }}
                className="flex flex-col items-center justify-center w-36 h-36 bg-white border border-border rounded-2xl shadow-soft cursor-pointer hover:border-primary-500 hover:shadow-card transition-all group"
              >
                <div className="text-muted group-hover:text-primary-600 transition-colors mb-3 bg-slate-50 p-3 rounded-full group-hover:bg-primary-50">
                  {iconMap[cat.icon]}
                </div>
                <span className="text-sm font-semibold text-text group-hover:text-primary-700 text-center px-2">{cat.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular AI Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12 border-b border-border pb-4">
            <div>
              <h2 className="text-3xl font-bold text-dark mb-2">🔥 AI ยอดนิยม</h2>
              <p className="text-muted">เครื่องมือที่มีผู้ใช้งานมากที่สุดในเดือนนี้</p>
            </div>
            <Link href="/ranking" className="text-primary-600 font-semibold hover:text-primary-800 transition-colors hidden md:block">
              ดูอันดับทั้งหมด →
            </Link>
          </div>

          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {tools.map((tool) => (
              <motion.div key={tool.id} variants={item}>
                <ToolCard tool={tool} />
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-12 text-center md:hidden">
            <Link href="/ranking" className="text-primary-600 font-semibold hover:underline">
               ดูอันดับทั้งหมด →
            </Link>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4">
        <AdUnit label="Sponsored Content" />
      </div>
    </main>
  );
}