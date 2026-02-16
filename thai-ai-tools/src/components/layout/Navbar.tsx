// ไฟล์: src/components/layout/Navbar.tsx

"use client";
import Link from 'next/link';
import { Search } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`sticky top-0 z-50 w-full transition-all duration-300 border-b ${
      scrolled 
        ? 'bg-light/80 backdrop-blur-md border-border shadow-sm py-3' 
        : 'bg-transparent border-transparent py-5'
    }`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-extrabold text-dark tracking-tight flex items-center gap-1">
          Thai<span className="text-primary-600">AI</span>Tools
        </Link>
        
        {/* Menu (Desktop) */}
        <div className="hidden md:flex gap-8 text-sm font-semibold text-muted">
          <Link href="/" className="hover:text-primary-600 transition-colors">หน้าแรก</Link>
          <Link href="/categories" className="hover:text-primary-600 transition-colors">หมวดหมู่</Link>
          <Link href="/blog" className="hover:text-primary-600 transition-colors">บทความ</Link>
          <Link href="/about" className="hover:text-primary-600 transition-colors">เกี่ยวกับเรา</Link>
        </div>

        {/* Search Button */}
        <button className="p-2 text-muted hover:text-primary-600 hover:bg-surface rounded-full transition-all">
          <Search size={22} />
        </button>
      </div>
    </nav>
  );
}