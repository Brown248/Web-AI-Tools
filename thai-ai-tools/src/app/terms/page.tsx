import Link from 'next/link';
import { ArrowLeft, AlertTriangle } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | AIToolbox',
  description: 'ข้อตกลงการใช้งานเว็บไซต์ AIToolbox',
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-background pt-32 pb-20 px-6">
      <div className="max-w-3xl mx-auto">
        
        <Link href="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-600 mb-8 transition-colors text-sm font-medium bg-white/50 px-4 py-2 rounded-full border border-slate-200 hover:border-blue-200">
           <ArrowLeft size={16} /> กลับหน้าแรก
        </Link>
        
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-100 prose prose-slate prose-lg max-w-none">
          <h1>ข้อตกลงการใช้งาน</h1>
                    
          <p>
            ยินดีต้อนรับสู่ <strong>AIToolbox</strong> การใช้งานเว็บไซต์นี้ถือว่าคุณยอมรับข้อตกลงและเงื่อนไขดังต่อไปนี้
          </p>

          <div className="bg-amber-50 p-6 rounded-2xl border border-amber-100 not-prose my-6 flex gap-4 items-start">
             <AlertTriangle className="text-amber-600 shrink-0 mt-1" />
             <div>
                <h4 className="text-amber-900 font-bold mb-1">ข้อปฏิเสธความรับผิดชอบ (Disclaimer)</h4>
                <p className="text-amber-800 text-sm leading-relaxed">
                   AIToolbox เป็นเพียง <strong>"ผู้รวบรวมข้อมูล" (Directory)</strong> เท่านั้น เราไม่ใช่เจ้าของ ผู้พัฒนา หรือมีส่วนได้ส่วนเสียกับเครื่องมือ AI (Tools) ที่ปรากฏบนเว็บไซต์นี้ 
                   การตัดสินใจเลือกใช้บริการหรือชำระเงินใดๆ ถือเป็นความรับผิดชอบของผู้ใช้แต่เพียงผู้เดียว
                </p>
             </div>
          </div>

          <h3>1. ลักษณะการให้บริการ</h3>
          <p>
            เว็บไซต์นี้จัดทำขึ้นเพื่อวัตถุประสงค์ในการให้ข้อมูลและการศึกษาเท่านั้น ข้อมูลเกี่ยวกับราคา ฟีเจอร์ และเงื่อนไขของเครื่องมือต่างๆ 
            อาจมีการเปลี่ยนแปลงโดยเจ้าของลิขสิทธิ์ได้ตลอดเวลา เราไม่รับประกันความถูกต้อง 100% ของข้อมูล
          </p>

          <h3>2. ลิงก์ไปยังเว็บไซต์ภายนอก</h3>
          <p>
            เว็บไซต์ของเรามีการเชื่อมโยงไปยังเว็บไซต์ของบุคคลที่สาม (External Links) เราไม่มีอำนาจควบคุมและไม่ขอรับผิดชอบต่อเนื้อหา 
            นโยบายความเป็นส่วนตัว หรือความเสียหายใดๆ ที่อาจเกิดขึ้นจากการใช้งานเว็บไซต์เหล่านั้น
          </p>

          <h3>3. ทรัพย์สินทางปัญญา</h3>
          <p>
            เนื้อหาการรีวิว บทความ และการจัดหมวดหมู่บนเว็บไซต์นี้เป็นลิขสิทธิ์ของ AIToolbox <br/>
            ส่วนเครื่องหมายการค้า โลโก้ และชื่อผลิตภัณฑ์ เป็นลิขสิทธิ์ของเจ้าของผลิตภัณฑ์นั้นๆ
          </p>

          <h3>4. การจำกัดความรับผิด</h3>
          <p>
             ผู้พัฒนาเว็บไซต์จะไม่รับผิดชอบต่อความเสียหายใดๆ (ทั้งทางตรงและทางอ้อม) ที่เกิดจากการใช้งานเว็บไซต์นี้ 
             หรือจากการนำเครื่องมือที่แนะนำไปใช้งาน
          </p>

          <h3>5. การเปลี่ยนแปลงข้อตกลง</h3>
          <p>
             เราขอสงวนสิทธิ์ในการแก้ไขข้อตกลงการใช้งานนี้ได้ทุกเมื่อ โดยการเปลี่ยนแปลงจะมีผลทันทีที่ปรากฏบนเว็บไซต์
          </p>

          <hr className="my-8 border-slate-100" />
          
          <p className="text-center text-sm text-slate-400">
             หากมีข้อสงสัย ติดต่อได้ที่ eng.master17@gmail.com
          </p>
        </div>
      </div>
    </main>
  );
}