"use client";
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Tool } from '@/lib/data';
import { ArrowUpRight, MessageSquare } from 'lucide-react';

export default function ToolCard({ tool }: { tool: Tool }) {
  return (
    <Link href={`/tool/${tool.slug}`} className="block h-full">
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="group relative bg-white rounded-2xl h-full border border-border shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col overflow-hidden"
      >
        {/* Card Body */}
        <div className="p-8 flex flex-col h-full">
            
            {/* Header: Icon + Name */}
            <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                    {/* Placeholder Icon box */}
                    <div className="w-14 h-14 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center text-xl font-bold text-gray-400">
                        {tool.name.charAt(0)}
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
                            {tool.name}
                        </h3>
                        <span className="text-xs font-medium text-gray-400">{tool.category}</span>
                    </div>
                </div>
                
                {/* Free/Paid Badge */}
                 <span className={`px-2.5 py-1 rounded-md text-[10px] font-bold tracking-wider uppercase border ${
                    tool.isFree 
                    ? 'bg-emerald-50 text-emerald-600 border-emerald-100' 
                    : 'bg-amber-50 text-amber-600 border-amber-100'
                }`}>
                    {tool.isFree ? 'Free' : 'Paid'}
                </span>
            </div>

            {/* Description */}
            <p className="text-base text-gray-500 font-light leading-relaxed line-clamp-3 mb-8 flex-1">
                {tool.description}
            </p>

            {/* Footer Actions */}
            <div className="flex items-center justify-between pt-6 border-t border-gray-50">
                <div className="flex items-center gap-4 text-sm font-medium text-gray-400">
                     <div className="flex items-center gap-1.5 hover:text-gray-600 transition-colors">
                        <MessageSquare size={16} />
                        <span>12</span>
                     </div>
                     <div className="flex items-center gap-1.5 text-primary-500">
                        ▲ <span>248</span>
                     </div>
                </div>

                <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-primary-500 group-hover:text-white transition-all duration-300">
                    <ArrowUpRight size={16} />
                </div>
            </div>

        </div>
      </motion.div>
    </Link>
  );
}