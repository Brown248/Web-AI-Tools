"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { blogPosts } from '@/lib/data';
import { Clock, User, ArrowRight } from 'lucide-react';

export default function BlogPage() {
  const featuredPost = blogPosts[0];
  const otherPosts = blogPosts.slice(1);

  return (
    <main className="min-h-screen bg-background pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            AI Toolbox <span className="text-blue-600">Blog</span>
          </h1>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            อัปเดตข่าวสาร เทคนิคการใช้งาน และรีวิวเครื่องมือ AI ล่าสุดก่อนใคร
          </p>
        </div>

        {/* Featured Post */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 group cursor-pointer"
        >
          <div className="relative rounded-3xl overflow-hidden bg-white shadow-xl shadow-slate-200/50 border border-slate-100 grid md:grid-cols-2 gap-0">
             <div className="h-64 md:h-auto overflow-hidden relative">
                <div className="absolute inset-0 bg-blue-600/10 group-hover:bg-transparent transition-colors z-10"/>
                <img 
                  src={featuredPost.coverImage} 
                  alt={featuredPost.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
             </div>
             <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
                   <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full font-semibold">{featuredPost.category}</span>
                   <span className="flex items-center gap-1"><Clock size={14}/> {featuredPost.readTime}</span>
                </div>
                <h2 className="text-3xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors leading-tight">
                  {featuredPost.title}
                </h2>
                <p className="text-slate-500 mb-6 line-clamp-3 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center gap-3">
                   <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-400">
                      <User size={20}/>
                   </div>
                   <div className="text-sm">
                      <p className="font-semibold text-slate-900">{featuredPost.author}</p>
                      <p className="text-slate-400">{featuredPost.date}</p>
                   </div>
                </div>
             </div>
          </div>
        </motion.div>

        {/* Recent Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {otherPosts.map((post, idx) => (
            <motion.article 
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 group flex flex-col"
            >
              <div className="h-48 overflow-hidden relative">
                 <img 
                   src={post.coverImage} 
                   alt={post.title}
                   className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                 />
              </div>
              <div className="p-6 flex flex-col flex-1">
                 <div className="flex items-center gap-3 text-xs text-slate-400 mb-3">
                    <span className="text-blue-600 font-semibold uppercase tracking-wider">{post.category}</span>
                    <span>•</span>
                    <span>{post.date}</span>
                 </div>
                 <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                   {post.title}
                 </h3>
                 <p className="text-slate-500 text-sm line-clamp-2 mb-4 flex-1">
                   {post.excerpt}
                 </p>
                 <Link href={`/blog/${post.slug}`} className="inline-flex items-center gap-1 text-sm font-semibold text-blue-600 hover:gap-2 transition-all">
                   อ่านต่อ <ArrowRight size={16}/>
                 </Link>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </main>
  );
}