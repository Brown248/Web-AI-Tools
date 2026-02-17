"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, Check, X } from 'lucide-react';
import Link from 'next/link';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // ตรวจสอบว่าผู้ใช้เคยเลือกยอมรับ/ปฏิเสธไปหรือยัง
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      // หน่วงเวลา 1 วินาทีเพื่อให้เว็บโหลดเสร็จก่อนค่อยเด้งขึ้นมา
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setIsVisible(false);
    // ในอนาคต: สามารถใส่ Logic เปิด Google Analytics ตรงนี้ได้
  };

  const handleDecline = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-4 left-4 right-4 z-[100] md:left-auto md:right-4 md:max-w-md"
        >
          <div className="bg-slate-900/95 backdrop-blur-md text-white p-6 rounded-2xl shadow-2xl border border-white/10 flex flex-col gap-4">
            
            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-600/20 rounded-xl text-blue-400 shrink-0">
                <Cookie size={24} />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-base mb-1">เว็บไซต์นี้ใช้คุกกี้ 🍪</h3>
                <p className="text-slate-300 text-xs leading-relaxed">
                  เราใช้คุกกี้เพื่อวิเคราะห์การใช้งานและมอบประสบการณ์ที่ดีที่สุดให้กับคุณ 
                  รวมถึงการแสดงผลโฆษณาที่เกี่ยวข้อง 
                  <Link href="/privacy" className="text-blue-400 hover:underline ml-1">
                    อ่านเพิ่มเติม
                  </Link>
                </p>
              </div>
              <button 
                onClick={() => setIsVisible(false)}
                className="text-slate-500 hover:text-white transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            <div className="flex gap-3">
              <button 
                onClick={handleDecline}
                className="flex-1 py-2.5 rounded-lg border border-white/10 text-slate-300 hover:bg-white/5 text-xs font-medium transition-colors"
              >
                ปฏิเสธทั้งหมด
              </button>
              <button 
                onClick={handleAccept}
                className="flex-1 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition-colors flex items-center justify-center gap-2"
              >
                <Check size={14} /> ยอมรับ
              </button>
            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}