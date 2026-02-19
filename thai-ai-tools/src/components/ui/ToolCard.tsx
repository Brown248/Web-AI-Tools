"use client";

import Link from 'next/link';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import { AITool } from '@/lib/data';
import { ArrowUpRight, Star } from 'lucide-react';

interface ToolCardProps {
  tool: AITool;
  variants?: Variants;
}

export default function ToolCard({ tool, variants }: ToolCardProps) {
  return (
    <motion.div variants={variants} className="h-full">
      <Link href={`/tool/${tool.slug}`} className="block h-full group">
        <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-blue-500/5 hover:-translate-y-1 transition-all duration-300 h-full flex flex-col relative overflow-hidden">
          
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          <div className="flex justify-between items-start mb-5">
            {/* โชว์โลโก้ AI */}
            <div className="w-14 h-14 relative bg-slate-50 rounded-2xl flex items-center justify-center border border-slate-100 group-hover:border-blue-100 transition-colors shadow-sm overflow-hidden shrink-0">
               {tool.logoUrl ? (
                 <Image 
                   src={tool.logoUrl} 
                   alt={`${tool.name} logo`} 
                   fill
                   sizes="56px"
                   className="object-cover"
                 />
               ) : (
                 <span className="text-xl font-bold text-slate-900">{tool.name.charAt(0)}</span>
               )}
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
             <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider bg-slate-50 px-2.5 py-1 rounded-md">
               {tool.category}
             </span>
             <span className="flex items-center gap-1 text-sm font-bold text-slate-400 group-hover:text-blue-600 transition-colors">
               ดูรายละเอียด <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
             </span>
          </div>

        </div>
      </Link>
    </motion.div>
  );
}