"use client";
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Tool } from '@/lib/data';

export default function ToolCard({ tool }: { tool: Tool }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03, y: -5 }}
      transition={{ duration: 0.2 }}
      className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow"
    >
      <Link href={`/tool/${tool.slug}`}>
        <div className="h-48 bg-gray-200 relative">
           {/* ใช้ next/image ในโปรเจกต์จริง */}
           <div className="absolute inset-0 flex items-center justify-center text-gray-400">
             [Image: {tool.name}]
           </div>
           <div className={`absolute top-3 right-3 px-3 py-1 text-xs font-bold rounded-full ${tool.isFree ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'}`}>
             {tool.isFree ? 'ใช้ฟรี' : 'พรีเมียม'}
           </div>
        </div>
        <div className="p-5">
          <div className="text-xs text-primary-600 font-semibold mb-2">{tool.category}</div>
          <h3 className="text-xl font-bold text-dark mb-2">{tool.name}</h3>
          <p className="text-gray-500 text-sm line-clamp-2">{tool.description}</p>
          <div className="mt-4 text-primary-600 text-sm font-medium flex items-center">
            อ่านรีวิวเต็ม →
          </div>
        </div>
      </Link>
    </motion.div>
  );
}