import { CustomPrompt } from './index';

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
  }
];

