"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2, AlertCircle, Link as LinkIcon } from 'lucide-react';
import Link from 'next/link';

export default function SubmitPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  // ✅ State สำหรับ Consent (สำคัญมาก!)
  const [consent, setConsent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!consent) {
      alert("กรุณายอมรับนโยบายความเป็นส่วนตัวก่อนส่งข้อมูล");
      return;
    }

    setIsLoading(true);
    
    // จำลองการส่งข้อมูล (เพราะเราไม่มี Backend)
    setTimeout(() => {
       setIsLoading(false);
       setIsSubmitted(true);
    }, 1500);
  };

  if (isSubmitted) {
    return (
      <main className="min-h-screen bg-background flex items-center justify-center p-6 pt-32">
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="max-w-md w-full bg-white rounded-3xl p-8 text-center shadow-xl border border-slate-100"
        >
          <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 size={40} />
          </div>
          <h1 className="text-2xl font-bold text-slate-900 mb-2">ขอบคุณที่แบ่งปัน!</h1>
          <p className="text-slate-500 mb-8">
            ข้อมูลของคุณถูกส่งเรียบร้อยแล้ว ทีมงานจะตรวจสอบและนำขึ้นเว็บไซต์ภายใน 24 ชม. ครับ
          </p>
          <Link href="/" className="block w-full py-3 bg-slate-900 text-white rounded-xl font-medium hover:bg-slate-800 transition-colors">
            กลับหน้าแรก
          </Link>
        </motion.div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background pt-32 pb-20 px-6">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-10">
           <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Submit AI Tool</h1>
           <p className="text-slate-500 text-lg">
             เจอเครื่องมือ AI เจ๋งๆ? ส่งมาให้เรารีวิวเพื่อแบ่งปันเพื่อนๆ ได้เลย
           </p>
        </div>

        <div className="bg-white p-8 rounded-3xl shadow-lg shadow-slate-200/50 border border-slate-100">
           <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Input: Name */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  ชื่อเครื่องมือ (Tool Name) <span className="text-red-500">*</span>
                </label>
                <input required type="text" placeholder="เช่น ChatGPT, Midjourney" className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all" />
              </div>

              {/* Input: URL */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  เว็บไซต์ (Website URL) <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                   <LinkIcon size={18} className="absolute left-3 top-3.5 text-slate-400" />
                   <input required type="url" placeholder="https://..." className="w-full pl-10 p-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all" />
                </div>
              </div>

              {/* Input: Description */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  คำอธิบายสั้นๆ
                </label>
                <textarea rows={3} placeholder="เครื่องมือนี้ทำอะไรได้บ้าง? ดียังไง?" className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all resize-none" />
              </div>

              {/* ✅ Consent Checkbox (สำคัญมากตามกฎหมาย) */}
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                <div className="flex items-start gap-3">
                  <input 
                    type="checkbox" 
                    id="consent" 
                    checked={consent}
                    onChange={(e) => setConsent(e.target.checked)}
                    className="mt-1 w-5 h-5 rounded border-slate-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
                  />
                  <label htmlFor="consent" className="text-sm text-slate-600 cursor-pointer leading-relaxed">
                    ข้าพเจ้ายอมรับ <Link href="/privacy" target="_blank" className="text-blue-600 underline font-medium">นโยบายความเป็นส่วนตัว</Link> 
                    และยินยอมให้เว็บไซต์เก็บรวบรวมข้อมูลข้างต้นเพื่อใช้ในการตรวจสอบและเผยแพร่บนเว็บไซต์ AIToolbox
                  </label>
                </div>
              </div>

              <button 
                type="submit" 
                disabled={isLoading || !consent} 
                className="w-full py-4 bg-slate-900 text-white rounded-xl font-bold text-lg hover:bg-blue-600 shadow-lg hover:shadow-blue-500/30 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? "กำลังส่งข้อมูล..." : "ส่งข้อมูล"} <Send size={20} />
              </button>
           </form>
        </div>
      </div>
    </main>
  );
}