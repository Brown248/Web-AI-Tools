"use client";

import { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { AlertTriangle, Send, CheckCircle2, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

// แยก Component เนื้อหาออกมาเพื่อใช้ Suspense (ป้องกัน Error ใน Next.js เวลาใช้ useSearchParams)
function ReportFormContent() {
  const searchParams = useSearchParams();
  const toolName = searchParams.get('tool') || ''; // รับชื่อ Tool มาจากหน้าก่อนหน้า
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    
    // ✅ ส่งข้อมูลไป Formspree (สร้าง Form ใหม่ใน Formspree สำหรับแจ้งปัญหาโดยเฉพาะ)
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      // เปลี่ยน URL เป็น Formspree ID ของคุณ (แยกคนละอันกับ Submit Tool ก็ได้จะได้ไม่งง)
      const response = await fetch("https://docs.google.com/forms/d/e/1FAIpQLSeh6poQOWhW9lCTsjHRGkxdtpfcytTU7bWIcXlpYmD3wfvSMQ/viewform?usp=publish-editor", {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      if (response.ok) setIsSubmitted(true);
    } catch (error) {
      alert("เกิดข้อผิดพลาด");
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-white p-8 rounded-3xl shadow-xl text-center border border-slate-100">
        <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 size={32} />
        </div>
        <h2 className="text-2xl font-bold text-slate-900 mb-2">ขอบคุณที่แจ้งปัญหา</h2>
        <p className="text-slate-500 mb-6">ข้อมูลของคุณช่วยให้ AIToolbox น่าอยู่ขึ้นเยอะเลยครับ</p>
        <Link href="/" className="block w-full py-3 bg-slate-900 text-white rounded-xl font-medium">กลับหน้าแรก</Link>
      </div>
    );
  }

  return (
    <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100">
      <form onSubmit={handleSubmit} className="space-y-6">
        
        {/* Hidden Field: บอกว่าเป็นแบบฟอร์มแจ้งปัญหา */}
        <input type="hidden" name="formType" value="Report Issue" />

        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">เครื่องมือที่มีปัญหา</label>
          <input 
            name="toolName" 
            type="text" 
            defaultValue={toolName}
            readOnly={!!toolName} // ถ้ามีชื่อส่งมา ให้ล็อกไว้แก้ไขไม่ได้
            className={`w-full p-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all ${toolName ? 'text-slate-500 cursor-not-allowed' : ''}`}
            placeholder="เช่น ChatGPT"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">ประเภทปัญหา <span className="text-red-500">*</span></label>
          <select name="issueType" required className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all">
            <option value="">เลือกปัญหาที่พบ...</option>
            <option value="Broken Link">เข้าเว็บไม่ได้ / ลิงก์เสีย</option>
            <option value="Price Change">ราคาไม่ตรง / เลิกฟรีแล้ว</option>
            <option value="Scam">หลอกลวง / อันตราย (Scam)</option>
            <option value="Outdated">ข้อมูลไม่อัปเดต</option>
            <option value="Other">อื่นๆ</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">รายละเอียดเพิ่มเติม</label>
          <textarea name="details" rows={4} className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all resize-none" placeholder="ช่วยเล่ารายละเอียดให้เราตรวจสอบได้ง่ายขึ้น..."></textarea>
        </div>

        <button 
          type="submit" 
          disabled={isLoading}
          className="w-full py-4 bg-red-600 text-white rounded-xl font-bold text-lg hover:bg-red-700 shadow-lg hover:shadow-red-500/30 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
        >
          {isLoading ? "กำลังส่ง..." : "แจ้งปัญหา"} <AlertTriangle size={20} />
        </button>
      </form>
    </div>
  );
}

export default function ReportPage() {
  return (
    <main className="min-h-screen bg-background pt-32 pb-20 px-6">
      <div className="max-w-xl mx-auto">
        <div className="text-center mb-10">
           <h1 className="text-3xl font-bold text-slate-900 mb-2 flex items-center justify-center gap-2">
             <AlertTriangle className="text-red-500" /> แจ้งปัญหาการใช้งาน
           </h1>
           <p className="text-slate-500">พบข้อมูลผิดพลาด หรือเครื่องมือใช้งานไม่ได้ แจ้งเราได้เลยครับ</p>
        </div>

        <Suspense fallback={<div className="text-center">Loading...</div>}>
          <ReportFormContent />
        </Suspense>
      </div>
    </main>
  );
}