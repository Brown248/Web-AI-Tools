"use client";
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Search, Sparkles } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <nav className={`
        flex items-center justify-between px-6 py-3 rounded-full transition-all duration-300
        ${scrolled 
          ? 'bg-white/80 backdrop-blur-md shadow-glass border border-white/20 w-full max-w-4xl' 
          : 'bg-transparent w-full max-w-6xl'}
      `}>
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-bold text-xl tracking-tight text-foreground">
          <div className="bg-primary-600 text-white p-1.5 rounded-lg">
            <Sparkles size={16} />
          </div>
          Thai<span className="text-primary-600">AI</span>Tools
        </Link>
        
        {/* Menu */}
        <div className="hidden md:flex gap-6 text-sm font-medium text-muted-foreground">
          {['หน้าแรก', 'หมวดหมู่', 'บทความ', 'เกี่ยวกับเรา'].map((item) => (
            <Link key={item} href="#" className="hover:text-primary-600 transition-colors relative group">
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-600 transition-all group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* Action */}
        <button className="p-2 rounded-full hover:bg-black/5 transition-colors text-foreground">
          <Search size={20} />
        </button>
      </nav>
    </motion.header>
  );
}