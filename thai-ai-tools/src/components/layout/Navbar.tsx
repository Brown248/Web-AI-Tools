"use client";
import Link from 'next/link';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { Sparkles, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { usePathname } from 'next/navigation'; // นำมาใช้เพื่อให้เมนูปิดเองเวลาเปลี่ยนหน้า

export default function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // ✅ เพิ่ม State มือถือ
  const pathname = usePathname();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const navLinks = [
    { name: 'Discover', href: '/' },
    { name: 'Categories', href: '/categories' }, 
    { name: 'Prompts', href: '/prompts' },       
    { name: 'Submit', href: '/submit' }           
  ];

  return (
    <>
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
              ? 'bg-white/85 backdrop-blur-md border border-slate-800 shadow-2xl shadow-slate-900/20 w-full max-w-5xl' 
              : 'bg-white/40 backdrop-blur-sm border border-white/20 shadow-none w-full max-w-7xl'}
          `}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group" onClick={() => setIsMobileMenuOpen(false)}>
            <div className="relative flex items-center justify-center w-9 h-9 rounded-xl bg-slate-900 text-white overflow-hidden shadow-md group-hover:shadow-blue-500/30 transition-shadow">
               <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"/>
               <Sparkles size={16} className="relative z-10 text-blue-300" />
            </div>
            <span className={`font-bold text-lg tracking-tight ${isScrolled ? 'text-white' : 'text-slate-800'}`}>
              AI<span className="text-blue-600">Toolbox</span>
            </span>
          </Link>
          
          {/* Menu (Desktop Centered) */}
          <nav className={`hidden md:flex items-center gap-1 p-1.5 rounded-full border backdrop-blur-md absolute left-1/2 -translate-x-1/2 ${isScrolled ? 'bg-slate-800/80 border-slate-700' : 'bg-slate-100/50 border-slate-200/50'}`}>
            {navLinks.map((item) => (
              <Link 
                key={item.name} 
                href={item.href} 
                className={`relative px-4 py-1.5 text-sm font-medium rounded-full transition-colors duration-300 group
                  ${pathname === item.href 
                    ? (isScrolled ? 'text-slate-900 bg-white' : 'text-slate-900 bg-white shadow-sm') 
                    : (isScrolled ? 'text-slate-300 hover:text-white' : 'text-slate-500 hover:text-slate-900')}
                `}
              >
                {item.name}
                {!pathname.includes(item.href) && <span className="absolute inset-0 bg-white/10 rounded-full scale-90 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 -z-10" />}
              </Link>
            ))}
          </nav>

          {/* ✅ ปุ่ม Mobile Menu Toggle (แสดงเฉพาะหน้าจอมือถือ) */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded-full flex items-center justify-center ${isScrolled ? 'text-white hover:bg-slate-800' : 'text-slate-800 hover:bg-slate-200/50'}`}
          >
             {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
          
          {/* Right Side Spacer สำหรับ Desktop */}
          <div className="hidden md:block w-9" /> 
        </div>
      </motion.header>

      {/* ✅ Dropdown Menu สำหรับมือถือ */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-[88px] left-4 right-4 z-40 md:hidden"
          >
            <nav className="bg-white/95 backdrop-blur-xl border border-slate-200 shadow-2xl rounded-3xl p-4 flex flex-col gap-2">
              {navLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`px-5 py-3 rounded-2xl text-base font-semibold transition-colors
                    ${pathname === item.href ? 'bg-blue-50 text-blue-600' : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'}
                  `}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}