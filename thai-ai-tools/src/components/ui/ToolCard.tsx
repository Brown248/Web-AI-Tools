"use client";

import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import { Tool } from '@/lib/data';
import { ArrowUpRight } from 'lucide-react';

interface ToolCardProps {
  tool: Tool;
  index?: number;
}

const SMOOTH_EASE = [0.25, 0.4, 0.25, 1] as const;

export default function ToolCard({ tool, index = 0 }: ToolCardProps) {
  
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.6, 
        delay: index * 0.05, 
        ease: SMOOTH_EASE 
      }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      className="h-full"
    >
      <Link href={`/tool/${tool.slug}`} className="block h-full group">
        <motion.article
          whileHover={{ y: -8 }}
          transition={{ duration: 0.4, ease: SMOOTH_EASE }}
          className="relative h-full bg-white rounded-[24px] border border-slate-100 overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500"
        >
           {/* Top Image / Gradient Placeholder (Optional) */}
           <div className="h-24 bg-gradient-to-br from-slate-50 to-slate-100/50 w-full absolute top-0 left-0 z-0"></div>

           <div className="relative z-10 p-6 flex flex-col h-full pt-12">
             
             {/* Icon */}
             <div className="w-14 h-14 rounded-2xl bg-white shadow-lg shadow-slate-100 flex items-center justify-center mb-5 border border-slate-50 group-hover:scale-110 transition-transform duration-500">
                <span className="text-2xl font-bold text-slate-700 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-tr group-hover:from-primary-600 group-hover:to-accent transition-all">
                  {tool.name.charAt(0)}
                </span>
             </div>

             {/* Content */}
             <div className="flex-1">
               <div className="flex justify-between items-center mb-2">
                 <h3 className="text-xl font-bold text-slate-800 group-hover:text-primary-600 transition-colors">
                   {tool.name}
                 </h3>
                 {tool.isFree && (
                   <span className="px-2.5 py-1 bg-emerald-50 text-emerald-600 text-[10px] font-bold uppercase rounded-full border border-emerald-100">
                     Free
                   </span>
                 )}
               </div>
               
               <p className="text-sm text-slate-500 leading-relaxed line-clamp-2 font-light">
                 {tool.description}
               </p>
             </div>

             {/* Footer Action */}
             <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider bg-slate-50 px-2 py-1 rounded-md">
                   {tool.category}
                </span>
                <div className="flex items-center gap-1 text-sm font-bold text-slate-300 group-hover:text-primary-600 transition-colors">
                   <span>Try it</span>
                   <ArrowUpRight size={16} />
                </div>
             </div>
           </div>
        </motion.article>
      </Link>
    </motion.div>
  );
}