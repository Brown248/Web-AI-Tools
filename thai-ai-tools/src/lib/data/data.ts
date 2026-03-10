// 1. Export ข้อมูลเครื่องมือ AI
export { tools } from './tools';

// 2. Export ข้อมูลหมวดหมู่ของ AI
export { categories } from './categories';

// 3. Export ข้อมูลคลัง Prompt และ Types (แยกส่วนกันชัดเจน)
export { customPrompts, PROMPT_CATEGORIES } from './prompts';
export type { CustomPrompt, PromptCategory } from './prompts';