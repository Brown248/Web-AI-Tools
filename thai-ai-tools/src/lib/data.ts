import { Image, Type, Presentation, Video, ShoppingBag, GraduationCap, Mic } from 'lucide-react';

export interface FAQ {
  question: string;
  answer: string;
}

export interface Tool {
  id: string;
  slug: string;
  name: string;
  description: string;
  category: string;
  isFree: boolean;
  priceModel: 'Free' | 'Freemium' | 'Paid';
  rating: number;
  reviewCount: number;
  updatedAt: string;
  longDescription: string;
  features: string[];
  steps: { title: string; desc: string }[];
  pros: string[];
  cons: string[];
  targetAudience: string[];
  faqs: FAQ[];
  externalUrl: string; 
}

export const categories = [
  { name: 'AI ทำรูปฟรี', slug: 'image-generator', icon: 'Image' },
  { name: 'AI เขียนบทความ', slug: 'writing', icon: 'Type' },
  { name: 'AI ทำสไลด์', slug: 'presentation', icon: 'Presentation' },
  { name: 'AI ทำวิดีโอ', slug: 'video-generator', icon: 'Video' },
  { name: 'AI ทำเสียง', slug: 'voice', icon: 'Mic' },
  { name: 'AI ขายของ', slug: 'ecommerce', icon: 'ShoppingBag' },
  { name: 'AI นักเรียน', slug: 'education', icon: 'GraduationCap' },
];

// ✅ เพิ่มข้อมูลตัวอย่าง (Mock Data) เพื่อให้ Build ผ่าน
export const tools: Tool[] = [
  {
    id: '1',
    slug: 'chatgpt',
    name: 'ChatGPT',
    description: 'AI Chatbot ยอดนิยมที่ช่วยตอบคำถาม เขียนบทความ และเขียนโค้ดได้หลากหลายภาษา',
    category: 'writing',
    isFree: true,
    priceModel: 'Freemium',
    rating: 4.9,
    reviewCount: 10500,
    updatedAt: '2024-02-01',
    longDescription: 'ChatGPT คือโมเดลภาษาขนาดใหญ่ที่พัฒนาโดย OpenAI สามารถสนทนาโต้ตอบได้เหมือนมนุษย์...',
    features: ['ตอบคำถามทั่วไป', 'ช่วยเขียนโปรแกรม', 'แปลภาษา', 'สรุปบทความ'],
    steps: [
      { title: 'สมัครสมาชิก', desc: 'ไปที่ chat.openai.com แล้วสมัครด้วย Email' },
      { title: 'เริ่มใช้งาน', desc: 'พิมพ์คำถามที่ต้องการในช่องแชทได้เลย' }
    ],
    pros: ['ใช้งานง่าย', 'รองรับภาษาไทย', 'มีความรู้กว้างขวาง'],
    cons: ['ข้อมูลฟรีอาจไม่อัปเดตล่าสุด', 'บางครั้งอาจให้ข้อมูลผิดพลาด'],
    targetAudience: ['นักเรียน', 'โปรแกรมเมอร์', 'Content Creator'],
    faqs: [
      { question: 'ChatGPT ใช้ฟรีไหม?', answer: 'มีเวอร์ชันฟรี (GPT-3.5) และเสียเงิน (GPT-4)' }
    ],
    externalUrl: 'https://chat.openai.com'
  },
  // เพิ่มเครื่องมืออื่นๆ ต่อได้ที่นี่...
];