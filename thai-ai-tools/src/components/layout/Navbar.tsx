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
    <nav className={`sticky top-0 z-50 w-full transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-dark">
          Thai<span className="text-primary-600">AI</span>Tools
        </Link>
        
        <div className="hidden md:flex gap-8 text-sm font-medium text-gray-600">
          <Link href="/" className="hover:text-primary-600 transition-colors">หน้าแรก</Link>
          <Link href="/categories" className="hover:text-primary-600 transition-colors">หมวดหมู่</Link>
          <Link href="/blog" className="hover:text-primary-600 transition-colors">บทความ</Link>
          <Link href="/about" className="hover:text-primary-600 transition-colors">เกี่ยวกับเรา</Link>
        </div>

        <button className="p-2 text-gray-500 hover:text-primary-600 transition-colors">
          <Search size={20} />
        </button>
      </div>
    </nav>
  );
}