// ประกาศ Type ไว้ที่นี่ที่เดียว
export interface CustomPrompt {
  id: string;
  purpose: string;
  promptTh: string;
  promptEn: string;
  category: string;
  toolName: string;
  toolSlug: string;
  logoUrl?: string; // ใส่ ? เผื่อบางอันไม่มีโลโก้
}

// Import โพรอมต์จากหมวดต่างๆ
import { codingPrompts } from './coding';
import { marketingPrompts } from './marketing';
import { writingPrompts } from './writing';

// รวมร่างทุก Array เข้าด้วยกัน
export const customPrompts: CustomPrompt[] = [
  ...codingPrompts,
  ...marketingPrompts,
  ...writingPrompts,
];



