// ไฟล์นี้ทำหน้าที่เป็น "ตัวมัดรวม" (Barrel File) 
// ทำให้หน้าเว็บอื่นๆ (เช่น page.tsx) สามารถ import ข้อมูลทั้งหมดได้จากไฟล์เดียวเหมือนเดิม

export { tools } from './data/tools';
export { categories } from './data/categories';
export { blogPosts } from './data/blog';

export type { AITool, BlogPost } from '@/app/types';