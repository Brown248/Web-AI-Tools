import type { CustomPrompt } from './index';

export const writingPrompts: CustomPrompt[] = [
  {
    id: "writing-1",
    purpose: "💡 ร่างอีเมลตอบกลับแบบมืออาชีพ",
    promptTh: "ช่วยร่างอีเมลตอบกลับเพื่อ [ระบุจุดประสงค์ เช่น ปฏิเสธการสัมภาษณ์งาน] ด้วยภาษาที่สุภาพและเป็นทางการ",
    promptEn: "Draft a reply email to [State objective, e.g., decline a job interview] using polite and highly professional language.",
    category: "Writing & Email",
    toolName: "OpenAI – ChatGPT",
    toolSlug: "chatgpt",
    logoUrl: "/logos/AI-Chatbot/OpenAI – ChatGPT.png"
  },

  {
    id: "writing-2",
    purpose: "📧 เขียนอีเมลธุรกิจอย่างมืออาชีพ",
    promptTh: `
คุณคือผู้เชี่ยวชาญด้าน Business Communication

ช่วยเขียนอีเมลธุรกิจสำหรับสถานการณ์ต่อไปนี้

วัตถุประสงค์ของอีเมล:
[อธิบาย]

ผู้รับ:
[เช่น ลูกค้า / ผู้จัดการ / บริษัทคู่ค้า]

บริบทของอีเมล:
[อธิบายสถานการณ์]

โทนภาษา:
[เป็นทางการ / กึ่งทางการ]

สิ่งที่ต้องการ:

1. เขียนหัวข้ออีเมล
2. เขียนเนื้อหาอีเมล
3. ใช้ภาษาสุภาพและชัดเจน
4. มี Opening และ Closing ที่เหมาะสม
5. ทำให้อีเมลดูเป็นมืออาชีพ
`,
    promptEn: `
You are a business communication expert.

Write a professional business email for the following situation.

Email Objective:
[Describe]

Recipient:
[e.g. client / manager / partner company]

Context:
[Explain the situation]

Tone:
[formal / semi-formal]

Please:

1. Write an email subject
2. Write the email body
3. Use clear and polite language
4. Include a proper opening and closing
5. Ensure a professional tone
`,
    category: "Writing & Email",
    toolName: "OpenAI – ChatGPT",
    toolSlug: "chatgpt",
    logoUrl: "/logos/AI-Chatbot/OpenAI – ChatGPT.png"
  },

  {
    id: "writing-3",
    purpose: "📝 เขียนบทความทั่วไป",
    promptTh: `
คุณคือผู้เชี่ยวชาญด้านการเขียนบทความ

ช่วยเขียนบทความในหัวข้อต่อไปนี้

หัวข้อ:
[ใส่หัวข้อ]

กลุ่มผู้อ่าน:
[เช่น นักเรียน / นักธุรกิจ]

ความยาว:
[เช่น 800 - 1200 คำ]

โทนภาษา:
[ให้ความรู้ / เป็นกันเอง / มืออาชีพ]

สิ่งที่ต้องการ:

1. Introduction ที่ดึงดูด
2. เนื้อหาที่มีโครงสร้างชัดเจน
3. ตัวอย่างประกอบ
4. Conclusion ที่สรุปเนื้อหา
`,
    promptEn: `
You are an expert article writer.

Write an article based on the following topic.

Topic:
[Insert topic]

Target Audience:
[e.g. students / professionals]

Length:
[e.g. 800 - 1200 words]

Tone:
[informative / friendly / professional]

Please include:

1. An engaging introduction
2. Well structured content
3. Examples where relevant
4. A clear conclusion
`,
    category: "Writing & Email",
    toolName: "Jasper AI",
    toolSlug: "jasper-ai",
    logoUrl: "/logos/AI-Writing/Jasper AI.png"
  },

  {
    id: "writing-4",
    purpose: "✏️ ปรับปรุงข้อความให้เป็นมืออาชีพ",
    promptTh: `
คุณคือผู้เชี่ยวชาญด้านการแก้ไขข้อความ

ช่วยปรับปรุงข้อความต่อไปนี้ให้ดีขึ้น

ข้อความต้นฉบับ:
[วางข้อความ]

เป้าหมาย:

1. ทำให้ภาษาชัดเจนขึ้น
2. ทำให้เป็นมืออาชีพ
3. แก้ Grammar
4. ปรับ Flow ของประโยค
`,
    promptEn: `
You are a professional editor.

Improve the following text.

Original Text:
[Paste text]

Goals:

1. Improve clarity
2. Make it more professional
3. Fix grammar issues
4. Improve sentence flow
`,
    category: "Writing & Email",
    toolName: "Copy.ai",
    toolSlug: "copy-ai",
    logoUrl: "/logos/AI-Writing/Copy.ai.png"
  },

  {
    id: "writing-5",
    purpose: "📚 สรุปเนื้อหาให้เข้าใจง่าย",
    promptTh: `
คุณคือผู้เชี่ยวชาญด้านการสรุปเนื้อหา

ช่วยสรุปข้อความต่อไปนี้

เนื้อหาต้นฉบับ:
[วางเนื้อหา]

รูปแบบที่ต้องการ:

- Bullet points
- หรือ Paragraph

เป้าหมาย:

1. ให้สั้นลง
2. เข้าใจง่าย
3. เก็บสาระสำคัญครบ
`,
    promptEn: `
You are a professional content summarizer.

Summarize the following text.

Original Content:
[Paste content]

Format:
[bullet points / paragraph]

Goals:

1. Shorten the content
2. Make it easy to understand
3. Preserve key ideas
`,
    category: "Writing & Email",
    toolName: "OpenAI – ChatGPT",
    toolSlug: "chatgpt",
    logoUrl: "/logos/AI-Chatbot/OpenAI – ChatGPT.png"
  },

  {
    id: "writing-6",
    purpose: "🎤 เขียนสคริปต์นำเสนอ",
    promptTh: `
คุณคือผู้เชี่ยวชาญด้านการเขียน Presentation Script

ช่วยเขียนสคริปต์สำหรับการนำเสนอ

หัวข้อ:
[ใส่หัวข้อ]

กลุ่มผู้ฟัง:
[เช่น นักศึกษา / นักลงทุน]

ระยะเวลา:
[เช่น 5 นาที / 10 นาที]

เป้าหมาย:
[ให้ความรู้ / โน้มน้าว]

สิ่งที่ต้องการ:

1. Opening ที่น่าสนใจ
2. โครงสร้างการพูด
3. Key points
4. Closing ที่น่าจดจำ
`,
    promptEn: `
You are a presentation script expert.

Write a presentation script.

Topic:
[Insert topic]

Audience:
[e.g. students / investors]

Duration:
[e.g. 5 minutes / 10 minutes]

Goal:
[inform / persuade]

Include:

1. Engaging opening
2. Structured talking points
3. Key messages
4. Memorable closing
`,
    category: "Writing & Email",
    toolName: "OpenAI – ChatGPT",
    toolSlug: "chatgpt",
    logoUrl: "/logos/AI-Chatbot/OpenAI – ChatGPT.png"
  },

  {
    id: "writing-7",
    purpose: "📄 เขียนรายงาน",
    promptTh: `
คุณคือผู้เชี่ยวชาญด้านการเขียนรายงาน

ช่วยเขียนรายงานเกี่ยวกับ

หัวข้อ:
[ใส่หัวข้อ]

วัตถุประสงค์:
[อธิบาย]

กลุ่มผู้อ่าน:
[เช่น ผู้บริหาร / อาจารย์]

สิ่งที่ต้องการ:

1. Introduction
2. เนื้อหาหลัก
3. ข้อมูลสนับสนุน
4. Conclusion
`,
    promptEn: `
You are a professional report writer.

Write a report about the following topic.

Topic:
[Insert topic]

Objective:
[Describe]

Audience:
[e.g. executives / professors]

Include:

1. Introduction
2. Main discussion
3. Supporting points
4. Conclusion
`,
    category: "Writing & Email",
    toolName: "Jasper AI",
    toolSlug: "jasper-ai",
    logoUrl: "/logos/AI-Writing/Jasper.png"
  },

  {
    id: "writing-8",
    purpose: "🧠 ระดมไอเดียบทความ",
    promptTh: `
คุณคือ Content Strategist

ช่วยคิดไอเดียบทความ

หัวข้อหลัก:
[ใส่หัวข้อ]

กลุ่มผู้อ่าน:
[เช่น นักเรียน / นักพัฒนา]

เป้าหมาย:
[เพิ่ม Traffic / ให้ความรู้]

สิ่งที่ต้องการ:

1. เสนอหัวข้อบทความ 10 หัวข้อ
2. อธิบายสั้น ๆ แต่ละหัวข้อ
`,
    promptEn: `
You are a content strategist.

Generate article ideas.

Main Topic:
[Insert topic]

Audience:
[e.g. students / developers]

Goal:
[increase traffic / educate]

Please:

1. Suggest 10 article topics
2. Provide a short description for each
`,
    category: "Writing & Email",
    toolName: "Copy.ai",
    toolSlug: "copy-ai",
    logoUrl: "/logos/AI-Writing/Copy.ai.png"
  },

  {
    id: "writing-9",
    purpose: "📖 เขียน Storytelling",
    promptTh: `
คุณคือ Storytelling Writer

ช่วยเขียนเรื่องราวเกี่ยวกับ

หัวข้อ:
[ใส่หัวข้อ]

กลุ่มผู้อ่าน:
[เช่น เด็ก / ผู้ใหญ่]

โทนเรื่อง:
[อบอุ่น / ตลก / สร้างแรงบันดาลใจ]

สิ่งที่ต้องการ:

1. โครงเรื่อง
2. ตัวละคร
3. เนื้อเรื่อง
4. ตอนจบ
`,
    promptEn: `
You are a storytelling writer.

Write a story.

Topic:
[Insert topic]

Audience:
[e.g. children / adults]

Tone:
[emotional / humorous / inspirational]

Include:

1. Plot
2. Characters
3. Narrative
4. Ending
`,
    category: "Writing & Email",
    toolName: "OpenAI – ChatGPT",
    toolSlug: "chatgpt",
    logoUrl: "/logos/AI-Chatbot/OpenAI – ChatGPT.png"
  },

  {
    id: "writing-10",
    purpose: "✍️ เขียนโพสต์ LinkedIn",
    promptTh: `
คุณคือผู้เชี่ยวชาญด้าน LinkedIn Content

ช่วยเขียนโพสต์ LinkedIn

หัวข้อ:
[ใส่หัวข้อ]

กลุ่มเป้าหมาย:
[เช่น HR / Developer / Entrepreneur]

เป้าหมาย:
[สร้างแบรนด์ / แชร์ความรู้]

สิ่งที่ต้องการ:

1. Hook เปิดโพสต์
2. เนื้อหา
3. Call to action
`,
    promptEn: `
You are a LinkedIn content expert.

Write a LinkedIn post.

Topic:
[Insert topic]

Target Audience:
[e.g. HR / developers / entrepreneurs]

Goal:
[build personal brand / share knowledge]

Include:

1. Strong hook
2. Engaging content
3. Call to action
`,
    category: "Writing & Email",
    toolName: "OpenAI – ChatGPT",
    toolSlug: "chatgpt",
    logoUrl: "/logos/AI-Chatbot/OpenAI – ChatGPT.png"
  },

  {
    id: "writing-11",
    purpose: "📢 เขียนประกาศอย่างเป็นทางการ",
    promptTh: `
คุณคือผู้เชี่ยวชาญด้านการเขียนประกาศ

ช่วยเขียนประกาศเกี่ยวกับ

หัวข้อ:
[ใส่หัวข้อ]

กลุ่มผู้อ่าน:
[เช่น พนักงาน / ลูกค้า]

โทน:
[ทางการ]

สิ่งที่ต้องการ:

1. หัวข้อประกาศ
2. เนื้อหาประกาศ
3. ภาษาชัดเจนและเป็นทางการ
`,
    promptEn: `
You are an official communication writer.

Write an announcement.

Topic:
[Insert topic]

Audience:
[e.g. employees / customers]

Tone:
[formal]

Include:

1. Title
2. Announcement body
3. Clear and professional language
`,
    category: "Writing & Email",
    toolName: "OpenAI – ChatGPT",
    toolSlug: "chatgpt",
    logoUrl: "/logos/AI-Chatbot/OpenAI – ChatGPT.png"
  }
];