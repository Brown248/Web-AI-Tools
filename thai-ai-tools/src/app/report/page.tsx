"use client";

import { AlertTriangle, Home } from 'lucide-react';
import Link from 'next/link';

export default function ReportPage() {
  return (
    <main className="min-h-screen bg-background pt-32 pb-20 px-6">
      <div className="max-w-3xl mx-auto">
        
        {/* --- HEADER --- */}
        <div className="text-center mb-10">
           <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-100/50 text-red-600 text-sm font-bold mb-4 border border-red-200">
             <AlertTriangle size={16} /> แจ้งปัญหาการใช้งาน
           </div>
           <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
             Report <span className="text-red-600">an Issue</span>
           </h1>
           <p className="text-slate-500 text-lg max-w-xl mx-auto">
             พบลิงก์เสีย ข้อมูลไม่ถูกต้อง หรือต้องการแจ้งปัญหาด้านเทคนิค? 
             กรุณากรอกรายละเอียดด้านล่าง ทีมงานจะรีบดำเนินการตรวจสอบและแก้ไขโดยเร็วที่สุดครับ
           </p>
        </div>

        {/* --- GOOGLE FORM EMBED --- */}
        <div className="bg-white p-2 md:p-6 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden w-full flex flex-col items-center">
           
           {/* 🔴 นำลิงก์จากเมนู "ฝัง HTML" (< >) ของ Google Form มาใส่ใน src นี้ 🔴 */}
           <iframe 
             src="https://docs.google.com/forms/d/e/1FAIpQLScywFDoXVEUeRotEc4m8KaUzQ3dT9b_W3H8u6kSuE71H_ytbg/viewform?usp=dialog" 
             width="100%" 
             height="800" 
             frameBorder="0" 
             marginHeight={0} 
             marginWidth={0}
             className="w-full max-w-[640px] rounded-xl"
           >
             กำลังโหลดแบบฟอร์ม...
           </iframe>

           <div className="mt-8 pb-4">
              <Link 
                href="/" 
                className="flex items-center gap-2 text-slate-400 hover:text-blue-600 transition-colors font-medium text-sm"
              >
                <Home size={16} /> กลับไปสำรวจเครื่องมือ AI ต่อ
              </Link>
           </div>
        </div>

        {/* --- ADDITIONAL CONTACT --- */}
        <div className="mt-10 text-center">
          <p className="text-slate-400 text-sm">
            หรือติดต่อทีมงานโดยตรงผ่านอีเมล: <a href="mailto:suwatkaen248@hotmail.com" className="text-blue-500 hover:underline">suwatkaen248@hotmail.com</a>
          </p>
        </div>
      </div>
    </main>
  );
}