"use client";
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Tool } from '@/lib/data';
import { ExternalLink, Star } from 'lucide-react';

export default function ToolCard({ tool }: { tool: Tool }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="group bg-white rounded-2xl border border-border overflow-hidden hover:shadow-card hover:border-primary-400 transition-all duration-300 h-full flex flex-col relative"
    >
      <Link href={`/tool/${tool.slug}`} className="flex-1 flex flex-col">
        
        {/* Image Section */}
        <div className="h-52 bg-surface relative overflow-hidden border-b border-border/60">
           {/* Gradient Background แทนรูปภาพ */}
           <div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
             <span className="text-2xl font-bold text-slate-400/50 tracking-widest uppercase select-none">
                {tool.name}
             </span>
           </div>
           
           {/* Overlay สีเมื่อ Hover */}
           <div className="absolute inset-0 bg-primary-900/0 group-hover:bg-primary-900/5 transition-colors duration-300" />

           {/* Badges */}
           <div className="absolute top-4 left-4">
             <span className="bg-white/90 backdrop-blur text-[10px] font-bold text-dark px-2 py-1 rounded border border-border/50 uppercase tracking-wide">
               {tool.category}
             </span>
           </div>

           <div className={`absolute top-4 right-4 px-3 py-1 text-xs font-bold rounded-lg shadow-sm border ${
             tool.isFree 
               ? 'bg-emerald-100 text-emerald-800 border-emerald-200' 
               : 'bg-amber-100 text-amber-800 border-amber-200'
           }`}>
             {tool.isFree ? 'ใช้ฟรี' : 'พรีเมียม'}
           </div>
        </div>

        {/* Content Section */}
        <div className="p-6 flex flex-col flex-1">
          
          <h3 className="text-xl font-bold text-dark mb-3 group-hover:text-primary-600 transition-colors line-clamp-1">
            {tool.name}
          </h3>
          
          {/* ใช้ text-text (Slate-800) เพื่อให้อ่านชัดที่สุด */}
          <p className="text-text text-sm line-clamp-3 leading-relaxed mb-5 flex-1 font-medium">
            {tool.description}
          </p>
          
          {/* Footer */}
          <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-sm">
            <div className="flex items-center gap-1 text-amber-500 font-bold">
               <Star size={14} fill="currentColor"/> 
               <span>4.8</span>
               <span className="text-muted font-normal text-xs ml-1">(120 รีวิว)</span>
            </div>

            <div className="flex items-center font-bold text-primary-600 group-hover:text-primary-700 transition-colors bg-primary-50 px-3 py-1.5 rounded-lg group-hover:bg-primary-100">
              อ่านต่อ <ExternalLink size={14} className="ml-1.5" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}