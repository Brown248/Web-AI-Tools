import type { CustomPrompt } from './index';

export const codingPrompts: CustomPrompt[] = [
  {
    id: "custom-1",
    purpose: "💻 Prompt สำหรับให้ AI ออกแบบและเขียนโค้ดโปรเจกต์แบบมืออาชีพ",
    promptTh: `
คุณคือ Senior Software Engineer ระดับโลก มีประสบการณ์มากกว่า 15 ปี

โปรเจกต์ที่ต้องการสร้าง:
[ใส่ชื่อโปรเจกต์]

วัตถุประสงค์:
[อธิบายว่าต้องการสร้างอะไร]

ประเภทระบบ:
[เช่น Web App / Mobile App / API / AI System]

ภาษาโปรแกรม:
[เช่น JavaScript / Python / TypeScript]

Framework หรือ Library:
[เช่น React / Next.js / Django / FastAPI]

ฟีเจอร์หลัก:
1. [Feature 1]
2. [Feature 2]
3. [Feature 3]

Architecture ที่ต้องการ:
[เช่น MVC / Clean Architecture / Microservices]

Database:
[เช่น PostgreSQL / MongoDB / MySQL]

สิ่งที่ต้องการให้คุณทำ:
1. วิเคราะห์ Requirement
2. ออกแบบ Architecture
3. เสนอ Folder Structure
4. เขียนตัวอย่างโค้ด
5. อธิบายโค้ด
6. แนะนำ Best Practice
7. แนะนำวิธี Deploy

โค้ดต้อง:
- อ่านง่าย
- เป็น Production-ready
- มี Comment อธิบาย
`,
    promptEn: `
You are a world-class Senior Software Engineer with over 15 years of experience.

Project Name:
[Insert project name]

Project Goal:
[Describe what you want to build]

System Type:
[e.g. Web App / Mobile App / API / AI System]

Programming Language:
[e.g. JavaScript / Python / TypeScript]

Framework or Libraries:
[e.g. React / Next.js / Django / FastAPI]

Main Features:
1. [Feature 1]
2. [Feature 2]
3. [Feature 3]

Preferred Architecture:
[e.g. MVC / Clean Architecture / Microservices]

Database:
[e.g. PostgreSQL / MongoDB / MySQL]

Please do the following:
1. Analyze the requirements
2. Design the architecture
3. Suggest a folder structure
4. Write example code
5. Explain the code
6. Recommend best practices
7. Suggest deployment methods

Write clean, maintainable, production-ready code with comments.
`,
    category: "Coding & Development",
    toolName: "ChatGPT / Claude / Cursor",
    toolSlug: "chatgpt",
    logoUrl: "/logos/AI-Chatbot/OpenAI – ChatGPT.png"
  },

  {
    id: "custom-2",
    purpose: "🌐 Prompt สำหรับสร้าง Web Application แบบ Full Stack",
    promptTh: `
คุณคือ Full Stack Developer ระดับมืออาชีพ

รายละเอียดโปรเจกต์

ชื่อเว็บไซต์:
[ใส่ชื่อเว็บ]

ประเภทเว็บไซต์:
[เช่น AI Tools Directory / SaaS / Marketplace]

กลุ่มผู้ใช้งาน:
[เช่น Developer / นักเรียน / ธุรกิจ]

Tech Stack:

Frontend:
[React / Next.js / Vue]

Backend:
[Node.js / Django / FastAPI]

Database:
[PostgreSQL / MongoDB]

ฟีเจอร์ที่ต้องมี:

- [Feature 1]
- [Feature 2]
- [Feature 3]
- [Feature 4]

Design Style:
[Minimal / Luxury / Modern]

สิ่งที่ต้องการให้ทำ:

1. ออกแบบระบบ
2. สร้าง UI Layout
3. เขียน Frontend
4. เขียน Backend API
5. เชื่อม Database
6. ทำระบบ Login / Authentication
7. ปรับ Performance ให้เร็ว

โค้ดต้องสะอาด และสามารถขยายระบบในอนาคตได้
`,
    promptEn: `
You are a professional Full Stack Developer.

Project Details

Website Name:
[Insert website name]

Website Type:
[e.g. AI Tools Directory / SaaS / Marketplace]

Target Users:
[e.g. Developers / Students / Businesses]

Tech Stack

Frontend:
[React / Next.js / Vue]

Backend:
[Node.js / Django / FastAPI]

Database:
[PostgreSQL / MongoDB]

Required Features:

- [Feature 1]
- [Feature 2]
- [Feature 3]
- [Feature 4]

Design Style:
[Minimal / Luxury / Modern]

Tasks:

1. Design the full system architecture
2. Create UI layout
3. Write frontend code
4. Build backend API
5. Connect database
6. Implement authentication
7. Optimize performance

Ensure the code is clean and scalable.
`,
    category: "Coding & Development",
    toolName: "Cursor IDE",
    toolSlug: "cursor",
    logoUrl: "/logos/AI-Code/Cursor.png"
  },

  {
    id: "custom-3",
    purpose: "🚀 Prompt สำหรับสร้าง MVP Startup ด้วย AI",
    promptTh: `
คุณคือ AI Coding Assistant สำหรับ Startup

ไอเดียโปรเจกต์:
[อธิบายไอเดีย]

ปัญหาที่ต้องการแก้:
[Describe the problem]

กลุ่มผู้ใช้:
[Target user]

MVP Features:

1. [Feature 1]
2. [Feature 2]
3. [Feature 3]

Tech Stack:
[เช่น Next.js + Supabase]

UI Style:
[Minimal / Modern / AI style]

สิ่งที่ต้องการให้ทำ:

1. วิเคราะห์ไอเดีย
2. ออกแบบ MVP Architecture
3. แนะนำ Tech Stack ที่เหมาะสม
4. สร้าง Project Structure
5. เขียนตัวอย่างโค้ด
6. อธิบายวิธีรันโปรเจกต์
7. แนะนำวิธี Deploy

เป้าหมาย:
- สร้าง Prototype ได้เร็ว
- โค้ดอ่านง่าย
- สามารถขยายระบบในอนาคตได้
`,
    promptEn: `
You are an AI Coding Assistant acting as a Startup Engineer.

Project Idea:
[Describe the idea]

Problem to solve:
[Describe the problem]

Target Users:
[Target user]

MVP Features:

1. [Feature 1]
2. [Feature 2]
3. [Feature 3]

Preferred Tech Stack:
[e.g. Next.js + Supabase]

UI Style:
[Minimal / Modern / AI style]

Please do the following:

1. Analyze the idea
2. Design MVP architecture
3. Recommend the best tech stack
4. Create project structure
5. Write example code
6. Explain how to run the project
7. Suggest deployment strategy

Goal:
- Build a prototype fast
- Clean code
- Scalable architecture
`,
    category: "Coding & Development",
    toolName: "ChatGPT / Claude / Cursor",
    toolSlug: "chatgpt",
    logoUrl: "/logos/AI-Code/Anthropic – Claude.png"
  },

  {
  id: "custom-4",
  purpose: "🐞 Prompt สำหรับ Debug โค้ดและหาสาเหตุของ Bug",
  promptTh: `
คุณคือ Senior Software Engineer ที่มีประสบการณ์ด้านการ Debug ระบบซอฟต์แวร์ขนาดใหญ่

โปรดช่วยวิเคราะห์และแก้ไข Bug จากข้อมูลต่อไปนี้

ภาษาโปรแกรม:
[เช่น JavaScript / Python / TypeScript]

Framework:
[เช่น React / Next.js / Express / Django]

โค้ดที่มีปัญหา:
[วางโค้ดตรงนี้]

Error Message:
[วาง Error ที่เกิดขึ้น]

พฤติกรรมที่ควรจะเป็น:
[อธิบายว่าโปรแกรมควรทำงานอย่างไร]

พฤติกรรมที่เกิดขึ้นจริง:
[อธิบายว่าเกิดอะไรขึ้นจริง]

สิ่งที่ต้องการให้คุณทำ:

1. วิเคราะห์สาเหตุของ Bug
2. อธิบายว่า Bug เกิดจากอะไร
3. เสนอวิธีแก้ไข
4. เขียนโค้ดเวอร์ชันที่แก้แล้ว
5. แนะนำวิธีป้องกัน Bug ในอนาคต

โปรดอธิบายแบบเข้าใจง่ายและให้โค้ดที่ถูกต้อง
`,
  promptEn: `
You are a senior software engineer specialized in debugging complex systems.

Please analyze and fix the bug based on the following information.

Programming Language:
[e.g. JavaScript / Python / TypeScript]

Framework:
[e.g. React / Next.js / Express / Django]

Problematic Code:
[Paste the code here]

Error Message:
[Paste the error message]

Expected Behavior:
[Describe how the program should behave]

Actual Behavior:
[Describe what is actually happening]

Please do the following:

1. Analyze the cause of the bug
2. Explain why the bug occurs
3. Suggest a solution
4. Provide the corrected code
5. Recommend ways to prevent similar issues in the future
`,
  category: "Coding & Development",
  toolName: "ChatGPT / Claude",
  toolSlug: "chatgpt",
  logoUrl: "/logos/AI-Code/Anthropic – Claude.png"
},

{
  id: "custom-5",
  purpose: "⚡ Prompt สำหรับ Refactor โค้ดให้สะอาดและระดับ Production",
  promptTh: `
คุณคือ Software Engineer ระดับ Senior ที่เชี่ยวชาญเรื่อง Clean Code และ Software Architecture

โปรดช่วย Refactor โค้ดต่อไปนี้ให้ดีขึ้น

ภาษาโปรแกรม:
[เช่น JavaScript / Python / TypeScript]

Framework:
[เช่น React / Next.js / Node.js]

โค้ดปัจจุบัน:
[วางโค้ดตรงนี้]

เป้าหมายของการ Refactor:

- ทำให้โค้ดอ่านง่ายขึ้น
- ปรับโครงสร้างให้เป็นมาตรฐาน
- ลดความซ้ำซ้อน
- เพิ่มประสิทธิภาพ
- ทำให้ขยายระบบได้ง่าย

สิ่งที่ต้องการให้คุณทำ:

1. วิเคราะห์ปัญหาของโค้ด
2. อธิบายว่าควรปรับปรุงตรงไหน
3. เขียนโค้ดเวอร์ชัน Refactor
4. อธิบายว่าทำไมโค้ดใหม่ดีกว่า
5. แนะนำ Best Practice ที่ควรใช้

โค้ดใหม่ต้องเป็นระดับ Production และมีโครงสร้างที่ดี
`,
  promptEn: `
You are a senior software engineer specialized in clean code and software architecture.

Please refactor the following code to improve quality and maintainability.

Programming Language:
[e.g. JavaScript / Python / TypeScript]

Framework:
[e.g. React / Next.js / Node.js]

Current Code:
[Paste the code here]

Refactoring Goals:

- Improve readability
- Follow best coding practices
- Reduce code duplication
- Improve performance
- Make the system easier to scale

Please do the following:

1. Analyze problems in the current code
2. Explain what should be improved
3. Provide the refactored version
4. Explain why the new code is better
5. Recommend best practices

Ensure the new code is production-ready and well structured.
`,
  category: "Coding & Development",
  toolName: "Claude / ChatGPT / Cursor",
  toolSlug: "claude-3",
  logoUrl: "/logos/AI-Code/Anthropic – Claude.png"
}

  // คุณสามารถเพิ่ม Prompt ของคุณเองต่อตรงนี้ได้เลย
];
