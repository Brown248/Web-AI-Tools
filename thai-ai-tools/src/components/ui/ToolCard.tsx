"use client";

import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import { Tool } from '@/lib/data';
import { ArrowUpRight } from 'lucide-react';

interface ToolCardProps {
  tool: Tool;
  index?: number;
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { 
      type: "spring",
      stiffness: 50,
      damping: 20
    }
  }
};

export default function ToolCard({ tool, index = 0 }: ToolCardProps) {
  return (
    <motion.div variants={cardVariants} className="h-full">
      <Link href={`/tool/${tool.slug}`} className="block h-full relative group">
        
        {/* Background Glow on Hover */}
        <div className="absolute -inset-0.5 bg-gradient-to-br from-blue-500 to-purple-600 rounded-[26px] opacity-0 group-hover:opacity-20 blur-md transition-opacity duration-500" />

        <motion.article
          whileHover={{ y: -8 }}
          transition={{ type: "spring", stiffness: 200, damping: 25 }}
          className="relative h-full bg-white rounded-3xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 flex flex-col"
        >
           {/* Decorative Top Gradient */}
           <div className="h-28 w-full bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-100/50 relative overflow-hidden">
              {/* Abstract shapes in header */}
              <div className="absolute -right-4 -top-8 w-24 h-24 bg-blue-100/50 rounded-full blur-2xl group-hover:bg-blue-200/50 transition-colors duration-500" />
              <div className="absolute left-10 bottom-0 w-16 h-16 bg-purple-100/50 rounded-full blur-xl" />
           </div>

           <div className="px-7 pb-7 pt-0 flex flex-col h-full flex-1">
             
             {/* Floating Icon Container */}
             <div className="-mt-10 mb-5 relative">
               <div className="w-20 h-20 rounded-2xl bg-white shadow-lg shadow-slate-200/60 p-1 flex items-center justify-center border border-white">
                  <div className="w-full h-full rounded-xl bg-slate-50 flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-blue-500 group-hover:to-indigo-600 transition-all duration-500 group-hover:scale-105">
                    <span className="text-3xl font-bold text-slate-700 group-hover:text-white transition-colors duration-300">
                      {tool.name.charAt(0)}
                    </span>
                  </div>
               </div>
             </div>

             {/* Content */}
             <div className="flex-1 space-y-3">
               <div className="flex justify-between items-start">
                 <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors duration-300">
                   {tool.name}
                 </h3>
                 {tool.isFree && (
                   <span className="px-2.5 py-1 bg-green-50 text-green-700 text-[10px] font-bold uppercase rounded-full border border-green-100 tracking-wide">
                     Free
                   </span>
                 )}
               </div>
               
               <p className="text-sm text-slate-500 leading-relaxed line-clamp-2">
                 {tool.description}
               </p>
             </div>

             {/* Footer */}
             <div className="mt-8 pt-5 border-t border-slate-100/80 flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-400 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100">
                   {tool.category}
                </span>
                
                <div className="w-8 h-8 rounded-full bg-slate-50 text-slate-300 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 transform group-hover:rotate-45">
                   <ArrowUpRight size={16} />
                </div>
             </div>
           </div>
        </motion.article>
      </Link>
    </motion.div>
  );
}