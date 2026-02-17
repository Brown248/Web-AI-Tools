"use client";
import Link from 'next/link';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Search, Sparkles, Menu, ChevronRight } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 20);
  });

  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-6 pointer-events-none"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div 
        className={`
          pointer-events-auto flex items-center justify-between px-4 py-2.5 rounded-full transition-all duration-500 border
          ${isScrolled 
            ? 'glass-pro w-full max-w-4xl border-white/50 shadow-sm' 
            : 'bg-transparent border-transparent w-full max-w-7xl'}
        `}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-b from-slate-800 to-slate-950 text-white shadow-lg shadow-slate-900/20 ring-1 ring-white/20 group-hover:scale-105 transition-transform duration-300">
            <Sparkles size={14} className="text-primary-200" />
            <div className="absolute inset-0 rounded-lg bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <span className="font-bold text-lg tracking-tight text-slate-900">
            Thai<span className="text-primary-600">AI</span>Tools
          </span>
        </Link>
        
        {/* Pro Menu (Desktop) */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-100/50 p-1 rounded-full border border-slate-200/50">
          {['Discover', 'Categories', 'Blog', 'About'].map((item) => (
            <Link key={item} href="#" className="px-4 py-1.5 text-sm font-medium text-slate-600 rounded-full hover:bg-white hover:text-slate-900 hover:shadow-sm transition-all duration-200">
              {item}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
           <Link href="/login" className="hidden sm:flex text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors">
             Log in
           </Link>
           <button className="group flex items-center gap-2 pl-3 pr-2 py-1.5 bg-slate-900 text-white rounded-full text-sm font-medium hover:bg-slate-800 transition-all shadow-lg shadow-slate-900/20 active:scale-95">
             <span>Get Started</span>
             <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
                <ChevronRight size={12} />
             </div>
           </button>
        </div>
      </div>
    </motion.header>
  );
}