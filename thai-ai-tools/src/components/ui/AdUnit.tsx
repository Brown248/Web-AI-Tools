"use client";

import Link from 'next/link';
import { ExternalLink, Megaphone } from 'lucide-react';

export default function AdUnit() {
  return (
    <article className="h-full relative group">
      {/* Glow Effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-br from-amber-400 to-orange-500 rounded-[26px] opacity-0 group-hover:opacity-30 blur-md transition-opacity duration-500" />

      <div className="relative h-full bg-gradient-to-br from-amber-50 to-white rounded-3xl border border-amber-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
         
         {/* Ad Badge */}
         <div className="absolute top-4 right-4 z-10">
            <span className="px-2 py-0.5 bg-white/80 backdrop-blur-sm border border-amber-200 text-[10px] font-bold text-amber-600 rounded-full uppercase tracking-wider">
               Sponsored
            </span>
         </div>

         {/* Content Area */}
         <div className="px-7 pt-10 pb-7 flex flex-col h-full items-center text-center">
            
            {/* Icon / Logo */}
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-100 to-orange-50 flex items-center justify-center mb-6 shadow-inner text-amber-600">
               <Megaphone size={32} />
            </div>

            <div className="space-y-3 flex-1">
               <h3 className="text-xl font-bold text-slate-900">
                  ลงโฆษณาที่นี่?
               </h3>
               <p className="text-sm text-slate-500 leading-relaxed">
                  เข้าถึงผู้ใช้งานกว่า 10,000 คนต่อเดือน โปรโมท AI Tool หรือบริการของคุณตรงกลุ่มเป้าหมาย
               </p>
            </div>

            {/* CTA Button */}
            <Link 
              href="/contact" 
              className="mt-8 w-full py-3 bg-slate-900 hover:bg-amber-600 text-white rounded-xl font-medium transition-colors duration-300 shadow-lg shadow-slate-900/10 flex items-center justify-center gap-2"
            >
               ติดต่อเรา <ExternalLink size={16} />
            </Link>
         </div>
      </div>
    </article>
  );
}