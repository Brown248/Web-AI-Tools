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
  externalUrl: string; // เพิ่ม URL จริงของเครื่องมือ
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

// คำแนะนำ: เมื่อเริ่มใช้งานจริง ให้ลบรายการเหล่านี้ออกและใส่ข้อมูลที่คุณรีวิวเองลงไป
export const tools: Tool[] = [
  // ใส่ข้อมูลเครื่องมือ AI ที่คุณรีวิวที่นี่
];