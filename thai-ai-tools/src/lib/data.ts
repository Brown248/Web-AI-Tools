export interface AITool {
  id: string;
  slug: string;
  name: string;
  description: string;
  longDescription: string;
  category: string;
  priceModel: string;
  isFree: boolean;
  externalUrl: string;
  rating: number;
  reviewCount: number;
  updatedAt: string;
  features: string[];
  pros: string[];
  cons: string[];
  steps: { title: string; desc: string }[];
  faqs: { question: string; answer: string }[];
}

export const tools: AITool[] = [
  {
    id: "1",
    slug: "chatgpt",
    name: "ChatGPT",
    description: "แชทบอทอัจฉริยะที่เก่งที่สุดด้านการสนทนา เขียนบทความ และให้คำปรึกษา",
    longDescription: "พัฒนาโดย OpenAI เป็น AI Language Model ที่มีความสามารถครอบจักรวาล เก่งด้านการใช้ภาษาธรรมชาติ การแต่งประโยค และการคิดวิเคราะห์เบื้องต้น",
    category: "Text Generation & Chatbot", // ✅ แชทและเขียนข้อความ
    priceModel: "Free / $20",
    isFree: true,
    externalUrl: "https://chat.openai.com",
    rating: 4.9,
    reviewCount: 15420,
    updatedAt: "Feb 2025",
    features: ["GPT-4o Model", "Voice Conversation", "Data Analysis", "Custom GPTs"],
    pros: ["ภาษาไทยฉลาดมาก", "ตอบสนองรวดเร็ว", "ใช้งานง่ายบนทุกแพลตฟอร์ม"],
    cons: ["ข้อมูลอาจจะไม่อัปเดตแบบ Real-time เท่า Perplexity", "เวอร์ชันฟรีจำกัดการใช้โมเดลล่าสุด"],
    steps: [
      { title: "พิมพ์ Prompt", desc: "พิมพ์คำถามหรือคำสั่งที่ต้องการในช่องแชท" },
      { title: "ปรับแก้", desc: "สั่งให้ AI ปรับแก้โทนเสียงหรือความยาวของคำตอบได้ตามต้องการ" }
    ],
    faqs: [
      { question: "ใช้ฟรีได้ไหม?", answer: "มีเวอร์ชันฟรีให้ใช้งานได้ตลอด" }
    ]
  },
  {
    id: "2",
    slug: "notebooklm",
    name: "NotebookLM",
    description: "สุดยอด AI สำหรับอ่านเอกสาร สรุปเนื้อหา และถามตอบจากไฟล์งานของคุณ",
    longDescription: "AI จาก Google ที่ออกแบบมาเพื่อการ 'สรุปเนื้อหา' โดยเฉพาะ คุณสามารถอัปโหลด PDF, สไลด์, หรือลิงก์เว็บ แล้วให้ AI ช่วยสรุป หรือจัดเป็น Audio Podcast ก็ยังได้",
    category: "Summarization & Notes", // ✅ สรุปเนื้อหา
    priceModel: "Free",
    isFree: true,
    externalUrl: "https://notebooklm.google.com",
    rating: 4.8,
    reviewCount: 3200,
    updatedAt: "Feb 2025",
    features: ["PDF/Web Upload", "Auto-Summary", "Audio Overview (Podcast)", "Citation Tracking"],
    pros: ["สรุปข้อมูลยาวๆ ได้แม่นยำมาก ไม่มั่วข้อมูล", "ใช้งานฟรี 100%", "อ้างอิงแหล่งที่มาให้ดูได้เลยว่าดึงมาจากหน้าไหนของเอกสาร"],
    cons: ["Audio Podcast ยังไม่ค่อยรองรับภาษาไทยเท่าที่ควร", "อัปโหลดได้เฉพาะไฟล์จำกัดขนาดตามกำหนด"],
    steps: [
      { title: "อัปโหลดข้อมูล", desc: "ใส่ไฟล์ PDF, ลิงก์เว็บ หรือข้อความที่เป็น Source ของเราลงไป" },
      { title: "สั่งสรุป", desc: "พิมพ์ถามคำถาม หรือกดปุ่มให้สรุปประเด็นสำคัญได้เลย" }
    ],
    faqs: [
      { question: "ข้อมูลหลุดไหม?", answer: "Google ระบุว่าข้อมูลที่อัปโหลดจะไม่ถูกนำไปใช้เทรนโมเดลสาธารณะ" }
    ]
  },
  {
    id: "3",
    slug: "gamma",
    name: "Gamma App",
    description: "AI ช่วยทำสไลด์ Presentation สวยๆ เสร็จภายใน 1 นาที",
    longDescription: "เครื่องมือออกแบบสไลด์ Presentation และเว็บไซต์อัตโนมัติ เพียงแค่พิมพ์หัวข้อที่ต้องการ AI จะเขียนเนื้อหา จัดหน้า และวางรูปภาพให้ออกมาสวยงามพร้อมพรีเซนต์",
    category: "Presentation & Slides", // ✅ ทำสไลด์
    priceModel: "Free / Starts at $8",
    isFree: true,
    externalUrl: "https://gamma.app",
    rating: 4.8,
    reviewCount: 6500,
    updatedAt: "Jan 2025",
    features: ["Text to Presentation", "Auto-Layout", "One-click Themes", "Export to PDF/PPT"],
    pros: ["สร้างสไลด์ไวมาก ประหยัดเวลาได้มหาศาล", "ดีไซน์สวยงาม ทันสมัย แบบไม่ต้องจัดหน้าเอง", "รองรับภาษาไทยค่อนข้างดี"],
    cons: ["เวอร์ชันฟรีมีลายน้ำ Gamma ติดตอน Export", "ปรับแต่ง Layout อิสระได้ยากกว่า PowerPoint ทั่วไป"],
    steps: [
      { title: "ใส่หัวข้อสไลด์", desc: "พิมพ์หัวข้อหรือใส่ Outline โครงเรื่องที่ต้องการทำสไลด์" },
      { title: "เลือกธีมสี", desc: "เลือกสไตล์ภาพรวม แล้วกด Generate" },
      { title: "Export นำไปใช้งาน", desc: "ดาวน์โหลดเป็น PDF หรือ PowerPoint เพื่อพรีเซนต์ได้เลย" }
    ],
    faqs: [
      { question: "เซฟเป็น PowerPoint ได้ไหม?", answer: "ได้ครับ สามารถ Export เป็น .pptx ได้แต่ Layout อาจจะคลาดเคลื่อนเล็กน้อย" }
    ]
  },
  {
    id: "4",
    slug: "midjourney",
    name: "Midjourney",
    description: "สุดยอด AI สร้างรูปภาพที่มีความสมจริงและมีสไตล์ศิลปะที่สวยงามที่สุด",
    longDescription: "AI สร้างรูปภาพจาก Text-to-Image ที่ขึ้นชื่อเรื่องความละเอียด แสงเงา และสไตล์ที่เป็นเอกลักษณ์ เหมาะสำหรับงานกราฟิกและศิลปิน",
    category: "Image Generation", // ✅ สร้างรูปภาพ
    priceModel: "Starts at $10",
    isFree: false,
    externalUrl: "https://midjourney.com",
    rating: 4.8,
    reviewCount: 9850,
    updatedAt: "Feb 2025",
    features: ["V6 Model", "Style Reference", "Character Reference", "High Upscaling"],
    pros: ["ภาพสวยงามระดับมืออาชีพ", "เข้าใจ Prompt ศิลปะได้ดีมาก", "ฟีเจอร์คุมสไตล์ภาพแม่นยำ"],
    cons: ["ต้องใช้งานผ่าน Discord (อาจจะยุ่งยากสำหรับมือใหม่)", "ไม่มีแพ็กเกจทดลองใช้ฟรี"],
    steps: [
      { title: "เข้า Discord", desc: "เข้าไปที่ห้องแชทของ Midjourney Bot" },
      { title: "ใช้คำสั่ง /imagine", desc: "พิมพ์ /imagine ตามด้วยคำอธิบายภาพที่ต้องการ (Prompt ภาษาอังกฤษ)" }
    ],
    faqs: [
      { question: "เอารูปไปใช้เชิงพาณิชย์ได้ไหม?", answer: "หากสมัครสมาชิกแบบเสียเงิน สามารถนำไปใช้เชิงพาณิชย์ได้ 100%" }
    ]
  },
  {
    id: "5",
    slug: "perplexity",
    name: "Perplexity AI",
    description: "AI Search Engine ค้นหาข้อมูลพร้อมอ้างอิงแหล่งที่มาแบบ Real-time",
    longDescription: "ค้นหาข้อมูลได้แม่นยำและรวดเร็วกว่าการใช้ Google Search แบบเดิม สรุปข้อมูลพร้อมแปะลิงก์อ้างอิงเสมอ ลดปัญหา AI มั่วข้อมูล",
    category: "AI Search Engine", // ✅ ค้นหาข้อมูลวิจัย
    priceModel: "Free / $20",
    isFree: true,
    externalUrl: "https://perplexity.ai",
    rating: 4.9,
    reviewCount: 8400,
    updatedAt: "Feb 2025",
    features: ["Real-time Web Search", "Citations & Sources", "Pro Search", "File Uploads"],
    pros: ["อ้างอิงแหล่งข้อมูลชัดเจน ลดปัญหา Hallucination", "ค้นหาข่าวหรือข้อมูลอัปเดตล่าสุดได้", "ใช้งานลื่นไหลมาก"],
    cons: ["ไม่เก่งเรื่องการแต่งนิยายหรืองานครีเอทีฟ", "Pro Search แบบฟรีจำกัดโควต้าค่อนข้างน้อย"],
    steps: [
      { title: "ถามคำถาม", desc: "พิมพ์คำถามที่ต้องการค้นหาแบบปกติ" },
      { title: "อ่านสรุป", desc: "AI จะค้นหาเว็บหลายๆ หน้าและนำมาสรุปพร้อมแปะเลขกำกับแหล่งที่มา" }
    ],
    faqs: [
      { question: "ต่างจาก ChatGPT ยังไง?", answer: "Perplexity เน้นค้นหาข้อมูลจริงจากเว็บและให้แหล่งอ้างอิง ส่วน ChatGPT เน้นสนทนาและแต่งเนื้อหา" }
    ]
  },
  {
    id: "6",
    slug: "github-copilot",
    name: "GitHub Copilot",
    description: "ผู้ช่วยเขียนโค้ดสำหรับโปรแกรมเมอร์ ช่วยเติมโค้ดและแนะนำ Logic อัตโนมัติ",
    longDescription: "AI Pair Programmer ที่เทรนจากโค้ดบน GitHub ช่วยลดเวลาการพิมพ์โค้ดซ้ำซากและช่วยหา Bug ได้อย่างรวดเร็ว",
    category: "Coding & Development", // ✅ เขียนโปรแกรม
    priceModel: "$10 / month",
    isFree: false,
    externalUrl: "https://github.com/features/copilot",
    rating: 4.7,
    reviewCount: 12300,
    updatedAt: "Feb 2025",
    features: ["Auto-complete", "Chat inside IDE", "Pull Request Summaries", "Security Vulnerability Fixes"],
    pros: ["รองรับเกือบทุกภาษาโปรแกรม", "ฝังตัวใน VS Code ได้แนบเนียน", "เพิ่มความเร็วในการเขียนโค้ดได้ 50%"],
    cons: ["บางครั้งแนะนำโค้ดที่ล้าสมัย (Deprecated)", "ไม่มีเวอร์ชันฟรีสำหรับคนทั่วไป"],
    steps: [
      { title: "ติดตั้ง Extension", desc: "โหลด Copilot extension ใน VS Code หรือ IDE ที่ใช้" },
      { title: "เริ่มพิมพ์โค้ด", desc: "พิมพ์ชื่อฟังก์ชัน หรือคอมเมนต์อธิบาย แล้วกด Tab เพื่อยอมรับโค้ดที่ AI แนะนำ" }
    ],
    faqs: [
      { question: "นักศึกษาใช้ฟรีไหม?", answer: "ฟรีครับ นักศึกษาสามารถยืนยันตัวตนด้วยอีเมลมหาวิทยาลัยเพื่อใช้งานได้ฟรี" }
    ]
  }
];

// ข้อมูลสำหรับบทความ (คงไว้เหมือนเดิม)
export const blogPosts = [
  {
    id: "1",
    slug: "top-10-ai-tools-2025",
    title: "10 เครื่องมือ AI ที่คนทำงานยุค 2025 ต้องมีติดเครื่อง",
    excerpt: "รวมสุดยอดเครื่องมือ AI ที่จะช่วยลดเวลาทำงานของคุณลงครึ่งหนึ่ง พร้อมเปรียบเทียบข้อดีข้อเสียแบบเจาะลึก...",
    coverImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
    date: "17 ก.พ. 2025",
    category: "Guide",
    readTime: "5 นาที",
    author: "AI Expert"
  }
];

export const categories = [
  { name: "Text Generation & Chatbot", slug: "Text Generation & Chatbot" },
  { name: "Summarization & Notes", slug: "Summarization & Notes" },
  { name: "Presentation & Slides", slug: "Presentation & Slides" },
  { name: "Image Generation", slug: "Image Generation" },
  { name: "Video Generation", slug: "Video Generation" },
  { name: "Voice & Audio", slug: "Voice & Audio" },
  { name: "AI Search Engine", slug: "AI Search Engine" },
  { name: "Coding & Development", slug: "Coding & Development" },
  { name: "Productivity & Workflow", slug: "Productivity & Workflow" }
];