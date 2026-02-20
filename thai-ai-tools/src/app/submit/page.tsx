"use client";

import { Send } from 'lucide-react';

export default function SubmitPage() {
  return (
    <main className="min-h-screen bg-background pt-32 pb-20 px-6">
      <div className="max-w-3xl mx-auto">
        
        <div className="text-center mb-10">
           <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100/50 text-blue-700 text-sm font-bold mb-4 border border-blue-200">
             <Send size={16} /> แนะนำเครื่องมือ AI
           </div>
           <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
             Submit <span className="text-blue-600">AI Tool</span>
           </h1>
           <p className="text-slate-500 text-lg max-w-xl mx-auto">
             เจอเครื่องมือ AI เจ๋งๆ ที่อยากให้เราเพิ่มลงในเว็บไซต์? กรอกข้อมูลลงในฟอร์มด้านล่างได้เลยครับ ทีมงานจะรีบนำมาอัปเดตให้เร็วที่สุด!
           </p>
        </div>

        {/* กล่องใส่ Google Form */}
        <div className="bg-white p-2 md:p-6 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden w-full flex justify-center">
           
           {/* 🔴 เอาลิงก์ Google Form ของคุณมาใส่ใน src ตรงนี้ 🔴 */}
           <iframe 
             src="https://docs.google.com/forms/d/e/1FAIpQLSdKx080ZvqzMRBLzmgtSyv4PvtRgCEdwmhUlwdJGe0eBNboUA/viewform?usp=publish-editor" 
             width="100%" 
             height="850" 
             frameBorder="0" 
             marginHeight={0} 
             marginWidth={0}
             className="w-full max-w-[640px] mx-auto rounded-xl"
           >
             กำลังโหลดแบบฟอร์ม...
           </iframe>

        </div>
      </div>
    </main>
  );
}