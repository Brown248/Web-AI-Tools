import Link from 'next/link';
import { ArrowLeft, Shield, Lock, Eye } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | AIToolbox',
  description: 'นโยบายความเป็นส่วนตัวของ AIToolbox',
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-background pt-32 pb-20 px-6">
      <div className="max-w-3xl mx-auto">
        
        <Link href="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-600 mb-8 transition-colors text-sm font-medium bg-white/50 px-4 py-2 rounded-full border border-slate-200 hover:border-blue-200">
           <ArrowLeft size={16} /> กลับหน้าแรก
        </Link>

        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-100 prose prose-slate prose-lg max-w-none">
          <h1>นโยบายความเป็นส่วนตัว</h1>
                    
          <p>
            <strong>AIToolbox</strong> ("เรา") ให้ความสำคัญกับความเป็นส่วนตัวของคุณอย่างยิ่ง นโยบายนี้จะอธิบายว่าเราดูแลข้อมูลของคุณอย่างไร 
            ในฐานะผู้พัฒนาเว็บไซต์อิสระ (Solo Developer) เรามีความมุ่งมั่นที่จะโปร่งใสที่สุดในการเก็บรวบรวมข้อมูล
          </p>

          <div className="not-prose grid sm:grid-cols-2 gap-4 my-8">
             <div className="p-4 bg-blue-50 rounded-xl border border-blue-100">
                <Shield className="text-blue-600 mb-2" />
                <h4 className="font-bold text-blue-900 text-sm">ข้อมูลปลอดภัย</h4>
                <p className="text-xs text-blue-700">เราไม่ขายข้อมูลส่วนตัวของคุณให้บุคคลที่สาม</p>
             </div>
             <div className="p-4 bg-green-50 rounded-xl border border-green-100">
                <Eye className="text-green-600 mb-2" />
                <h4 className="font-bold text-green-900 text-sm">ความโปร่งใส</h4>
                <p className="text-xs text-green-700">เราใช้ข้อมูลเพื่อพัฒนาเว็บและแสดงโฆษณาเท่านั้น</p>
             </div>
          </div>

          <h3>1. ข้อมูลที่เราเก็บรวบรวม</h3>
          <p>เมื่อคุณใช้งานเว็บไซต์ เราอาจเก็บรวบรวมข้อมูลดังนี้:</p>
          <ul>
            <li><strong>ข้อมูลจราจรคอมพิวเตอร์ (Log Files):</strong> เช่น IP Address, ประเภทของเบราว์เซอร์, วันเวลาที่เข้าชม (ตามที่กฎหมายกำหนด)</li>
            <li><strong>คุกกี้ (Cookies):</strong> ข้อมูลขนาดเล็กที่เก็บในอุปกรณ์ของคุณ เพื่อช่วยให้เว็บไซต์จดจำการตั้งค่า</li>
            <li><strong>ข้อมูลจากแบบฟอร์ม:</strong> ชื่อและข้อมูลที่คุณกรอกในหน้า "ส่งเครื่องมือ" (Submit Tool)</li>
          </ul>

          <h3>2. การใช้งานเครื่องมือของบุคคลที่สาม</h3>
          <p>เว็บไซต์นี้มีการใช้งานบริการจากภายนอก ซึ่งอาจมีการเก็บคุกกี้ของตนเอง ได้แก่:</p>
          <ul>
             <li><strong>Google Analytics:</strong> เพื่อวิเคราะห์สถิติผู้เข้าชมเว็บไซต์และปรับปรุงเนื้อหา</li>
             <li><strong>Google AdSense:</strong> เพื่อแสดงโฆษณาที่เหมาะสมกับความสนใจของคุณ (Personalized Ads)</li>
          </ul>

          <h3>3. วัตถุประสงค์การใช้ข้อมูล</h3>
          <p>เราใช้ข้อมูลเพื่อ:</p>
          <ul>
             <li>ให้บริการเว็บไซต์และฟีเจอร์ต่างๆ ให้ทำงานได้อย่างปกติ</li>
             <li>ตรวจสอบความปลอดภัยและป้องกันการสแปม</li>
             <li>วิเคราะห์พฤติกรรมการใช้งานเพื่อพัฒนาเว็บไซต์ให้ดียิ่งขึ้น</li>
          </ul>

          <h3>4. สิทธิ์ของคุณ</h3>
          <p>
             คุณสามารถเลือกที่จะ <strong>"ปฏิเสธคุกกี้"</strong> ได้ผ่านการตั้งค่าเบราว์เซอร์ หรือผ่านแบนเนอร์ขอความยินยอมบนหน้าเว็บไซต์ของเรา 
             นอกจากนี้ คุณมีสิทธิ์ขอให้เราลบข้อมูลที่คุณเคยส่งมาให้เราได้ทุกเมื่อ
          </p>

          <h3>5. การติดต่อ</h3>
          <p>
             หากมีข้อสงสัยเกี่ยวกับนโยบายความเป็นส่วนตัว สามารถติดต่อผู้พัฒนาได้โดยตรงที่: <br/>
             <strong>Email:</strong> eng.master17@gmail.com
          </p>

        </div>
      </div>
    </main>
  );
}