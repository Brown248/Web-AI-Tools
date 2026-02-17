"use client";

import { useEffect, useRef } from 'react';

interface AdUnitProps {
  label?: string;
  slotId?: string; // Google AdSense Slot ID (ถ้ามี)
  format?: 'auto' | 'fluid' | 'rectangle';
}

export default function AdUnit({ 
  label = "Advertisement", 
  slotId, 
  format = 'auto' 
}: AdUnitProps) {
  const adRef = useRef<HTMLDivElement>(null);
  const isDev = process.env.NODE_ENV === 'development';

  // ถ้าจะใส่ AdSense Script จริงๆ ให้ uncomment ส่วนนี้
  /*
  useEffect(() => {
    if (slotId && !isDev) {
      try {
        ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
      } catch (e) {
        console.error('AdSense error:', e);
      }
    }
  }, [slotId, isDev]);
  */

  return (
    <div className="w-full my-8 flex flex-col items-center gap-2">
      {/* Label ตัวเล็กๆ ด้านบน */}
      <span className="text-[10px] uppercase tracking-widest text-slate-400 font-medium">
        {label}
      </span>

      {/* Ad Container */}
      <div 
        ref={adRef}
        className="relative w-full overflow-hidden rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center min-h-[120px] md:min-h-[200px]"
      >
        {slotId && !isDev ? (
          /* พื้นที่สำหรับ Google AdSense (ถ้ามี Slot ID) */
          <ins
            className="adsbygoogle block w-full h-full"
            data-ad-client="ca-pub-XXXXXXXXXXXXXXXX" // ใส่ Client ID ของคุณ
            data-ad-slot={slotId}
            data-ad-format={format}
            data-full-width-responsive="true"
          />
        ) : (
          /* Placeholder (แสดงตอน Dev หรือยังไม่มีโฆษณา) */
          <div className="flex flex-col items-center gap-3 text-slate-300 select-none p-6">
             <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center">
                <svg className="w-6 h-6 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
             </div>
             <span className="text-sm font-medium">Space for {label}</span>
          </div>
        )}
      </div>
    </div>
  );
}