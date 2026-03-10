// ไฟล์: src/lib/data.ts

export { tools } from './data/tools';
export { categories } from './data/categories';

// ชี้ไปที่โฟลเดอร์ prompts (มันจะอ่านไฟล์ index.ts อัตโนมัติ)
export { customPrompts } from './data/prompts'; 

export type { AITool, BlogPost } from '@/app/types';
export type { CustomPrompt } from './data/prompts';