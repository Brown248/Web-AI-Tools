// ✅ 1. ประกาศหมวดหมู่ที่อนุญาตให้ใช้ (Centralized Category List)
export const PROMPT_CATEGORIES = [
  "Marketing, SEO & Writing",
  "Writing & Email",
  "Coding & Development",
  "Image Generation",
  "Video & Voice Generation",
  "Data & Analytics",
  "Presentation & Slides"
] as const;

// นำ Array ด้านบนมาแปลงเป็น TypeScript Type
export type PromptCategory = typeof PROMPT_CATEGORIES[number];

// ✅ 2. ประกาศ Type สำหรับ Prompt (บังคับใช้ Category จากด้านบน)
export interface CustomPrompt {
  id: string;
  purpose: string;
  promptTh: string;
  promptEn: string;
  category: PromptCategory; 
  toolName: string;
  toolSlug: string;
  logoUrl?: string; 
}

// ✅ 3. Import โพรอมต์จากหมวดต่างๆ ที่คุณเขียนไว้
import { codingPrompts } from './coding';
import { marketingPrompts } from './marketing';
import { writingPrompts } from './writing';

// ✅ 4. รวมร่างทุก Array เข้าด้วยกัน (export ตัวนี้ไปใช้ในหน้าเว็บ)
export const customPrompts: CustomPrompt[] = [
  ...codingPrompts,
  ...marketingPrompts,
  ...writingPrompts,
];