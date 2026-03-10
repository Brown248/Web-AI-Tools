// 1. ประกาศหมวดหมู่ (คงไว้เหมือนเดิม ไม่ต้องแก้)
export const PROMPT_CATEGORIES = [
  "Marketing, SEO & Writing",
  "Writing & Email",
  "Coding & Development",
  "Image Generation", // 👈 มีหมวดหมู่นี้รอรับไว้อยู่แล้ว!
  "Video & Voice Generation",
  "Data & Analytics",
  "Presentation & Slides"
] as const;

export type PromptCategory = typeof PROMPT_CATEGORIES[number];

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

// 2. Import โพรอมต์จากหมวดต่างๆ 
import { codingPrompts } from './coding';
import { marketingPrompts } from './marketing';
import { writingPrompts } from './writing';
import { imagePrompts } from './image'; // 👈 [เพิ่มบรรทัดนี้] ดึงไฟล์ใหม่เข้ามา

// 3. รวมร่างทุก Array เข้าด้วยกัน
export const customPrompts: CustomPrompt[] = [
  ...codingPrompts,
  ...marketingPrompts,
  ...writingPrompts,
  ...imagePrompts, // 👈 [เพิ่มบรรทัดนี้] เอา Prompt รูปภาพมารวมเข้าไป
];