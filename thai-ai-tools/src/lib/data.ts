export interface Tool {
  id: string;
  slug: string;
  name: string;
  description: string;
  category: string;
  isFree: boolean;
  image: string;
  content: string; // HTML หรือ Markdown สำหรับบทความยาว
}

export const tools: Tool[] = [
  {
    id: '1',
    slug: 'chatgpt',
    name: 'ChatGPT',
    description: 'AI แชทบอทอัจฉริยะที่ช่วยตอบคำถาม เขียนโค้ด และแปลภาษาได้เป็นธรรมชาติ',
    category: 'AI เขียนบทความ',
    isFree: true,
    image: '/images/chatgpt.jpg',
    content: '<p>เนื้อหาบทความรีวิว ChatGPT แบบละเอียด...</p>'
  },
  {
    id: '2',
    slug: 'midjourney',
    name: 'Midjourney',
    description: 'สุดยอด AI วาดรูปที่ให้คุณภาพสูงระดับศิลปิน เหมาะสำหรับงานดีไซน์',
    category: 'AI ทำรูป',
    isFree: false,
    image: '/images/midjourney.jpg',
    content: '<p>เนื้อหาบทความรีวิว Midjourney...</p>'
  },
  // เพิ่มข้อมูลอื่นๆ ตรงนี้
];

export const categories = [
  { name: 'AI ทำการบ้าน', icon: 'BookOpen' },
  { name: 'AI ทำรูป', icon: 'Image' },
  { name: 'AI เขียนบทความ', icon: 'PenTool' },
  { name: 'AI ทำสไลด์', icon: 'Presentation' },
  { name: 'AI สำหรับแม่ค้า', icon: 'ShoppingBag' },
];