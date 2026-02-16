"use client";
import Link from 'next/link';
import { motion } from 'framer-motion';
import { tools, categories } from '@/lib/data';
import ToolCard from '@/components/ui/ToolCard';
import AdUnit from '@/components/ui/AdUnit';
import { ArrowRight, BookOpen, Image as ImageIcon, PenTool, Presentation, ShoppingBag } from 'lucide-react';

// Map icon string to component (แบบง่าย)
const iconMap: any = {
  BookOpen: <BookOpen />,
  Image: <ImageIcon />,
  PenTool: <PenTool />,
  Presentation: <Presentation />,
  ShoppingBag: <ShoppingBag />,
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function Home() {
  return (
    <main className="min-h-screen pb-20">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden bg-gradient-to-b from-primary-50 to-white">
        <div className="container mx-auto px-4 text-center z-10 relative">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-extrabold text-dark mb-6 tracking-tight"
          >
            รวม <span className="text-primary-600">AI ฟรี</span> ที่คนไทยต้องรู้
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-xl text-gray-500 mb-8 max-w-2xl mx-auto"
          >
            ค้นหาเครื่องมือ AI ตัวช่วยทำงาน เรียน และทำธุรกิจ อัปเดตใหม่ทุกวัน ใช้งานง่าย ภาษาไทย
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
          >
            <button className="bg-primary-600 text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-primary-700 transition-all shadow-lg hover:shadow-primary-500/30 flex items-center mx-auto gap-2">
              ดู AI ทั้งหมด <ArrowRight size={20} />
            </button>
          </motion.div>
        </div>
      </section>

      {/* AdSense Zone 1 */}
      <div className="container mx-auto px-4">
        <AdUnit slot="1234567890" />
      </div>

      {/* Categories Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-dark mb-8 text-center">เลือกตามการใช้งาน</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((cat, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center p-4 bg-white border border-gray-100 rounded-xl shadow-sm w-32 cursor-pointer hover:border-primary-200"
              >
                <div className="text-primary-500 mb-2">
                  {iconMap[cat.icon]}
                </div>
                <span className="text-sm font-medium text-gray-700 text-center">{cat.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular AI Section */}
      <section className="py-16 bg-gray-50/50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl font-bold text-dark mb-2">AI ยอดนิยม</h2>
              <p className="text-gray-500">เครื่องมือที่คนไทยใช้งานมากที่สุดในเดือนนี้</p>
            </div>
            <Link href="/ranking" className="text-primary-600 font-medium hover:underline hidden md:block">ดูทั้งหมด</Link>
          </div>

          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {tools.map((tool) => (
              <motion.div key={tool.id} variants={item}>
                <ToolCard tool={tool} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* AdSense Zone 2 */}
      <div className="container mx-auto px-4">
        <AdUnit label="Sponsored" />
      </div>
    </main>
  );
}