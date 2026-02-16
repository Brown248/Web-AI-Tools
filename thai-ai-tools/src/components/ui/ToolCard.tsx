// ไฟล์: src/components/ui/ToolCard.tsx

"use client";
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Tool } from '@/lib/data';
import { ExternalLink } from 'lucide-react';

export default function ToolCard({ tool }: { tool: Tool }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      className="group bg-white rounded-2xl border border-border overflow-hidden hover:shadow-card hover:border-primary-500 transition-all duration-300 h-full flex flex-col"
    >
      <Link href={`/tool/${tool.slug}`} className="flex-1 flex flex-col">
        {/* ส่วนรูปภาพ (Image Section) */}
        <div className="h-48 bg-slate-100 relative overflow-hidden border-b border-border/50">
           {/* Placeholder Image Gradient */}
           {/* ใช้ next/image แทนตรงนี้ในอนาคต */}
           <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-slate-200 flex items-center justify-center text-slate-500 font-semibold group-hover:scale-105 transition-transform duration-500">
             <span className="text-lg tracking-wider opacity-80">{tool.name}</span>
           </div>
           
           {/* Overlay effect เวลา Hover */}
           <div className="absolute inset-0 bg-primary-900/0 group-hover:bg-primary-900/5 transition-colors duration-300" />

           {/* Badge สถานะ ฟรี/เสียเงิน (High Contrast version) */}
           <div className={`absolute top-4 right-4 px-3 py-1 text-xs font-bold rounded-lg shadow-sm border ${
             tool.isFree 
               ? 'bg-emerald-100 text-emerald-800 border-emerald-200' 
               : 'bg-amber-100 text-amber-800 border-amber-200'
           }`}>
             {tool.isFree ? 'Free' : 'Premium'}
           </div>
        </div>

        {/* ส่วนเนื้อหา (Content Section) */}
        <div className="p-6 flex flex-col flex-1">
          {/* หมวดหมู่ (Category) */}
          <div className="flex items-center justify-between mb-3">
            <span className="text-[10px] font-bold text-primary-700 bg-primary-50 border border-primary-100 px-2 py-1 rounded-md uppercase tracking-wider">
              {tool.category}
            </span>
          </div>
          
          {/* ชื่อเครื่องมือ (Title) */}
          <h3 className="text-xl font-bold text-dark mb-3 group-hover:text-primary-600 transition-colors">
            {tool.name}
          </h3>
          
          {/* คำอธิบาย (Description) - ใช้ text-text เพื่อความคมชัด */}
          <p className="text-text text-sm line-clamp-3 leading-relaxed mb-4 flex-1">
            {tool.description}
          </p>
          
          {/* ส่วน Footer ของ Card */}
          <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-sm font-semibold text-muted group-hover:text-primary-700 transition-colors">
            <span>อ่านรีวิวฉบับเต็ม</span>
            <ExternalLink size={16} className="opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}