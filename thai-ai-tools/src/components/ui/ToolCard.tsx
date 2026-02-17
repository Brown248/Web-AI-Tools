"use client";

import Link from 'next/link';
import { motion, Variants } from 'framer-motion'; // เพิ่ม Variants
import { Tool } from '@/lib/data';
import { ArrowUpRight, Sparkles, Lock, Zap } from 'lucide-react';

interface ToolCardProps {
  tool: Tool;
  index?: number;
}

export default function ToolCard({ tool, index = 0 }: ToolCardProps) {
  // แก้ไข: ระบุ type เป็น Variants เพื่อให้ TS รู้ว่า ease: "easeOut" คือค่าที่ถูกต้อง
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.5, 
        delay: index * 0.1, 
        ease: "easeOut" 
      }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className="h-full"
    >
      <Link href={`/tool/${tool.slug}`} className="block h-full group">
        <motion.article
          whileHover={{ y: -5 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
          className="relative flex flex-col h-full bg-white rounded-2xl border border-slate-200 overflow-hidden transition-shadow duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:border-indigo-100"
        >
          {/* Card Header & Icon */}
          <div className="p-6 pb-4">
            <div className="flex justify-between items-start mb-4">
              {/* Icon Box */}
              <div className="relative flex items-center justify-center w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 text-2xl group-hover:bg-indigo-50 group-hover:text-indigo-600 transition-colors duration-300">
                <span className="font-bold text-slate-400 group-hover:text-indigo-600">
                  {tool.name.charAt(0)}
                </span>
              </div>

              {/* Badge: Free / Paid */}
              <span className={`
                flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide border
                ${tool.isFree 
                  ? 'bg-emerald-50 text-emerald-600 border-emerald-100' 
                  : 'bg-amber-50 text-amber-600 border-amber-100'}
              `}>
                {tool.isFree ? <Zap size={10} className="fill-current" /> : <Lock size={10} />}
                {tool.isFree ? 'Free' : 'Paid'}
              </span>
            </div>

            <h3 className="text-lg font-bold text-slate-800 mb-1 group-hover:text-indigo-600 transition-colors">
              {tool.name}
            </h3>
            <p className="text-xs font-medium text-slate-400 uppercase tracking-wider">
              {tool.category}
            </p>
          </div>

          {/* Card Body: Description */}
          <div className="px-6 pb-6 flex-1">
            <p className="text-sm text-slate-500 leading-relaxed line-clamp-3">
              {tool.description}
            </p>
          </div>

          {/* Card Footer: Action */}
          <div className="px-6 py-4 border-t border-slate-50 bg-slate-50/30 flex items-center justify-between mt-auto">
            <span className="text-xs font-medium text-slate-400 group-hover:text-indigo-500 transition-colors flex items-center gap-1">
              <Sparkles size={12} />
              AI Tool
            </span>
            <div className="flex items-center gap-2 text-sm font-bold text-indigo-600 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
              ลองใช้งาน <ArrowUpRight size={16} />
            </div>
          </div>
        </motion.article>
      </Link>
    </motion.div>
  );
}