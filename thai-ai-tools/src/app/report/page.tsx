"use client";

import { Suspense } from 'react';
import { AlertTriangle } from 'lucide-react';

function GoogleFormEmbed() {
  return (
    <div className="bg-white rounded-3xl shadow-lg border border-slate-100 overflow-hidden">
      {/* ✅ ฝัง Google Form ผ่าน iframe */}
      <iframe 
        src="https://docs.google.com/forms/d/e/1FAIpQLSeh6poQOWhW9lCTsjHRGkxdtpfcytTU7bWIcXlpYmD3wfvSMQ/viewform?embedded=true" 
        width="100%" 
        height="800" 
        frameBorder="0" 
        marginHeight={0} 
        marginWidth={0}
        className="w-full"
      >
        กำลังโหลดแบบฟอร์ม...
      </iframe>
    </div>
  );
}

export default function ReportPage() {
  return (
    <main className="min-h-screen bg-background pt-32 pb-20 px-6">
      <div className="max-w-3xl mx-auto">
        
        {/* Header ส่วนหัว */}
        <div className="text-center mb-10">
           <h1 className="text-3xl font-bold text-slate-900 mb-2 flex items-center justify-center gap-2">
             <AlertTriangle className="text-red-500" /> แจ้งปัญหาการใช้งาน
           </h1>
           <p className="text-slate-500">
             พบข้อมูลผิดพลาด หรือเครื่องมือใช้งานไม่ได้ กรอกข้อมูลลงในแบบฟอร์มด้านล่างได้เลยครับ
           </p>
        </div>

        {/* แสดงฟอร์ม */}
        <Suspense fallback={<div className="text-center p-10">กำลังโหลด...</div>}>
          <GoogleFormEmbed />
        </Suspense>

      </div>
    </main>
  );
}