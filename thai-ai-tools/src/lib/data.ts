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

// ✅ 1. เพิ่ม Interface สำหรับ Blog
export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  coverImage: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
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
    longDescription: 'ChatGPT คือโมเดลภาษาขนาดใหญ่ที่พัฒนาโดย OpenAI สามารถสนทนาโต้ตอบได้เหมือนมนุษย์ ช่วยงานได้สารพัดประโยชน์ตั้งแต่งานเขียน งานแปล ไปจนถึงการเขียนโปรแกรมที่ซับซ้อน',
    features: ['ตอบคำถามทั่วไปอย่างฉลาด', 'ช่วยเขียนและแก้ไขโค้ดโปรแกรม', 'แปลภาษาได้เป็นธรรมชาติ', 'สรุปบทความยาวๆ ให้สั้นลง', 'คิดไอเดีย Content Marketing'],
    steps: [
      { title: 'สมัครสมาชิก', desc: 'ไปที่ chat.openai.com แล้วสมัครด้วย Email หรือ Google Account' },
      { title: 'เริ่มแชท', desc: 'พิมพ์คำถามหรือคำสั่งที่ต้องการในช่องแชทได้ทันที' },
      { title: 'ปรับแต่งคำสั่ง', desc: 'หากคำตอบยังไม่โดนใจ สามารถพิมพ์สั่งให้แก้ใหม่ได้เรื่อยๆ' }
    ],
    pros: ['ใช้งานง่าย อินเตอร์เฟซเป็นมิตร', 'รองรับภาษาไทยได้ดีมาก', 'มีความรู้กว้างขวางในหลายสาขา'],
    cons: ['ข้อมูลฟรี (GPT-3.5) อาจไม่อัปเดตล่าสุด', 'บางครั้งอาจให้ข้อมูลที่ผิดพลาด (Hallucination)'],
    targetAudience: ['นักเรียน/นักศึกษา', 'โปรแกรมเมอร์', 'Content Creator', 'นักการตลาด'],
    faqs: [
      { question: 'ChatGPT ใช้ฟรีไหม?', answer: 'มีเวอร์ชันฟรี (GPT-3.5) ตลอดชีพ และเวอร์ชันเสียเงิน (GPT-4) ที่ฉลาดกว่า' },
      { question: 'ใช้ภาษาไทยได้ไหม?', answer: 'ได้ดีมาก แต่บางครั้งอาจจะตอบช้ากว่าภาษาอังกฤษเล็กน้อย' }
    ],
    externalUrl: 'https://chat.openai.com'
  },
  {
    id: '2',
    slug: 'midjourney',
    name: 'Midjourney',
    description: 'สุดยอด AI วาดรูปที่สร้างภาพได้สวยงามสมจริงที่สุดในปัจจุบัน',
    category: 'image-generator',
    isFree: false,
    priceModel: 'Paid',
    rating: 4.8,
    reviewCount: 8500,
    updatedAt: '2024-01-15',
    longDescription: 'Midjourney คือ AI Image Generator ที่ทำงานผ่าน Discord โดดเด่นเรื่องความสวยงามทางศิลปะ แสงเงา และความละเอียดที่สูงมาก เหมาะสำหรับงาน Art, Concept Design และสื่อสิ่งพิมพ์',
    features: ['สร้างภาพความละเอียดสูง', 'รองรับ Style หลากหลาย', 'Image-to-Image', 'Pan & Zoom Out'],
    steps: [
      { title: 'เข้าร่วม Discord', desc: 'ต้องมีบัญชี Discord และเข้าร่วม Server ของ Midjourney' },
      { title: 'สมัครสมาชิก', desc: 'เลือกแพ็กเกจรายเดือน (ไม่มีฟรีแล้ว)' },
      { title: 'พิมพ์คำสั่ง', desc: 'ใช้คำสั่ง /imagine ตามด้วย prompt ภาษาอังกฤษ' }
    ],
    pros: ['คุณภาพรูปสวยที่สุดในตลาด', 'Community แข็งแกร่ง มีตัวอย่างให้ดูเยอะ'],
    cons: ['ต้องใช้ผ่าน Discord เท่านั้น (เริ่มมีเว็บแล้วแต่ยัง beta)', 'ไม่มีเวอร์ชันฟรีแล้ว', 'ควบคุม Pose ตัวละครยากกว่า ControlNet'],
    targetAudience: ['Graphic Designer', 'Artist', 'Architect'],
    faqs: [
      { question: 'ใช้ฟรีได้ไหม?', answer: 'ปัจจุบันไม่มีทดลองใช้ฟรีแล้ว ต้องสมัครสมาชิกเท่านั้น' }
    ],
    externalUrl: 'https://www.midjourney.com'
  }
];

// ✅ 2. เพิ่มข้อมูล Mock Up สำหรับหน้า Blog
export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'chatgpt-tips-2024',
    title: 'รวม 10 เทคนิคสั่ง ChatGPT ให้ทำงานแทนคุณแบบมือโปร',
    excerpt: 'เลิกสั่งงานกว้างๆ แล้วมาดูวิธีเขียน Prompt ให้ได้ผลลัพธ์ที่ตรงใจ ประหยัดเวลาทำงานไปได้ 10 เท่า...',
    coverImage: 'https://images.unsplash.com/photo-1684469273523-26466336e7a2?q=80&w=2000&auto=format&fit=crop',
    category: 'Tips & Tricks',
    author: 'Admin Ton',
    date: '15 Feb 2024',
    readTime: '5 min'
  },
  {
    id: '2',
    slug: 'midjourney-v6-update',
    title: 'รีวิว Midjourney V6 มีอะไรใหม่? สวยขึ้นจริงไหม?',
    excerpt: 'เจาะลึกฟีเจอร์ใหม่ใน V6 ที่สายอาร์ตต้องร้องว้าว พร้อมตัวอย่าง Prompt เปรียบเทียบกับ V5.2',
    coverImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2000&auto=format&fit=crop',
    category: 'Update',
    author: 'Creative Jane',
    date: '10 Feb 2024',
    readTime: '8 min'
  },
  {
    id: '3',
    slug: 'ai-tools-for-student',
    title: '5 AI Tools ที่นักศึกษาต้องมีติดเครื่อง ปี 2024',
    excerpt: 'แนะนำตัวช่วยทำการบ้าน ทำสไลด์ และสรุปวิจัย ที่จะทำให้ชีวิตมหาลัยง่ายขึ้นเยอะ',
    coverImage: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2000&auto=format&fit=crop',
    category: 'Education',
    author: 'Study Smart',
    date: '05 Feb 2024',
    readTime: '4 min'
  }
];