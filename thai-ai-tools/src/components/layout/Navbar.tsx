"use client";
import Link from 'next/link';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4 md:pt-6 pointer-events-none"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div 
        className={`
          pointer-events-auto flex items-center justify-between px-5 py-3 rounded-full transition-all duration-500 ease-in-out
          ${isScrolled 
            ? 'glass-card w-full max-w-5xl shadow-lg shadow-slate-200/20' 
            : 'bg-white/40 backdrop-blur-sm border border-white/20 w-full max-w-7xl'}
        `}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative flex items-center justify-center w-9 h-9 rounded-xl bg-slate-900 text-white overflow-hidden shadow-md group-hover:shadow-blue-500/30 transition-shadow">
             <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"/>
             <Sparkles size={16} className="relative z-10 text-blue-300" />
          </div>
          <span className="font-bold text-lg tracking-tight text-slate-800">
            AI<span className="text-blue-600">Toolbox</span>
          </span>
        </Link>
        
        {/* Menu (Centered) */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-100/50 p-1.5 rounded-full border border-slate-200/50 backdrop-blur-md absolute left-1/2 -translate-x-1/2">
          {['Discover', 'Categories', 'Blog', 'About'].map((item) => (
            <Link key={item} href="#" className="relative px-4 py-1.5 text-sm font-medium text-slate-500 rounded-full hover:text-slate-900 transition-colors duration-300 group">
              {item}
              <span className="absolute inset-0 bg-white rounded-full scale-90 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 shadow-sm -z-10" />
            </Link>
          ))}
        </nav>

        {/* Right Side Spacer */}
        <div className="w-9 md:w-0" /> 
      </div>
    </motion.header>
  );
}