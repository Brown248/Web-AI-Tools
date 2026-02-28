export interface AITool {
  id: string;
  slug: string;
  name: string;
  logoUrl: string;
  description: string;
  longDescription: string;
  origin: string;
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
  prompts: { purpose: string; promptTh: string; promptEn: string; }[];
  faqs: { question: string; answer: string }[];
}

export const tools: AITool[] = [
  // ==========================================
  // 🌟 หมวดเครื่องมืออเนกประสงค์ (รวมร่างตัวที่เคยซ้ำซ้อน)
  // ==========================================
  {
    id: "bot1",
    slug: "chatgpt",
    name: "OpenAI – ChatGPT",
    logoUrl: "/logos/OpenAI – ChatGPT.png",
    description: "AI แชทบอทอันดับ 1 ของโลก ครบเครื่องที่สุด วางโครงสร้าง SEO วิเคราะห์ข้อมูล และแต่งรูปจบในตัว",
    longDescription: "ChatGPT (โดยเฉพาะโมเดล GPT-4o) คือ AI ที่ 'ครบเครื่อง (Well-rounded)' ที่สุดในตลาดตอนนี้ มันเป็น Multimodal LLM ที่ทำได้ตั้งแต่สวมบทบาท (Roleplay) เป็นนักการตลาดเพื่อวางโครงสร้างบทความ SEO แบบเจาะจง, อัปโหลดไฟล์ Excel เพื่อวิเคราะห์สถิติและวาดกราฟ, ไปจนถึงการสร้าง Custom GPTs เพื่อเป็นบอทเฉพาะทางขององค์กร",
    origin: "พัฒนาโดย OpenAI ถือเป็นแชทบอทที่เปิดประตูโลกสู่ยุค Generative AI และมีความเข้าใจบริบทการค้นหา (Search Intent) ได้อย่างลึกซึ้ง",
    category: "Chatbots, Writing & SEO",
    priceModel: "Free / Plus $20 ต่อเดือน",
    isFree: true,
    externalUrl: "https://chatgpt.com",
    rating: 4.9,
    reviewCount: 95000,
    updatedAt: "Feb 2026",
    features: [
      "Advanced Data Analysis & Multimodal: อัปโหลดไฟล์ คลีนข้อมูล วาดกราฟ พูดคุยด้วยเสียง และสร้างรูปผ่าน DALL-E 3 ได้",
      "SEO & Funnel Creation: วางแผนคอนเทนต์ แจกแจง Heading Tag (H1-H4) และแทรก LSI Keywords ได้แม่นยำ",
      "Custom GPTs: สร้างแชทบอทที่ถูกปรับแต่งเฉพาะกิจ และนำไปแชร์ให้คนอื่นใช้ได้"
    ],
    pros: [
      "ความฉลาดโดยรวมและรองรับภาษาไทยได้เป็นธรรมชาติ สละสลวยที่สุดเมื่อเทียบกับคู่แข่ง",
      "ใช้งานได้สารพัดประโยชน์ ไม่จำกัดแค่การเขียน (ทำรูป, อ่านกราฟ, แปลงไฟล์ได้)",
      "มี Custom GPTs สาย SEO และ Marketing ที่มีคนจูนพารามิเตอร์ไว้ให้ใช้ฟรีๆ นับพันตัว"
    ],
    cons: [
      "หากไม่ให้ Prompt ที่ละเอียดพอ สำนวนการเขียนมักจะดูออกว่าเป็น AI (ชอบใช้คำว่า 'นอกจากนี้', 'สรุปได้ว่า')",
      "โมเดล GPT-4o ในเวอร์ชันฟรีมีข้อจำกัดเรื่องปริมาณการใช้งานที่ค่อนข้างเข้มงวด"
    ],
    steps: [
      { title: "กำหนด Role", desc: "เริ่มต้นด้วยการบอกบทบาท เช่น 'คุณคือ SEO Expert' หรือ 'Data Analyst'" },
      { title: "ป้อนข้อมูลและแนบไฟล์", desc: "ใส่ Keyword หลัก, เป้าหมาย หรือโยนไฟล์ PDF/Excel ลงไป" },
      { title: "สั่งปรับแก้ทีละส่วน", desc: "อย่าสั่งเขียนทีเดียว 2,000 คำ ให้สั่งทำ Outline ก่อนแล้วค่อยเจาะทีละหัวข้อ" }
    ],
    prompts: [
      { 
        purpose: "💡 วางโครงสร้างบทความ SEO หวังผลหน้าแรก Google", 
        promptTh: "คุณคือ SEO Expert ระดับโลก จงวางโครงสร้างบทความบล็อก (Outline) ในหัวข้อ '[ใส่หัวข้อ]' เพื่อติดหน้าแรก Google โดยกำหนด H1 ที่ดึงดูด CTR, กำหนด H2-H3 โดยแทรก LSI Keywords ให้เป็นธรรมชาติ และระบุ Search Intent",
        promptEn: "Act as a world-class SEO Expert. Create a highly optimized blog post outline for '[Insert Topic]'. Goal: Rank on the first page of Google. Provide an engaging H1, H2/H3 structures with LSI Keywords, and specify Search Intent."
      },
      { 
        purpose: "💡 ให้ AI วิเคราะห์ไฟล์ยอดขาย (Data Analysis)", 
        promptTh: "[อัปโหลดไฟล์ Excel]\nช่วยทำหน้าที่เป็น Data Analyst วิเคราะห์ไฟล์นี้: 1. หาสินค้าทำกำไรสูงสุด 3 อันดับ 2. หาสาเหตุที่ยอดขายไตรมาส 3 ตก 3. วาดกราฟเส้นแสดงแนวโน้มรายเดือน พร้อมสรุปข้อเสนอแนะ 3 ข้อ",
        promptEn: "[Upload Excel]\nAct as a Data Analyst. Analyze this dataset: 1. Top 3 profitable products. 2. Root cause of Q3 sales drop. 3. Generate a monthly trend line chart. Provide 3 actionable recommendations."
      }
    ],
    faqs: [
      { question: "ใช้ ChatGPT เขียนบล็อกล้วนๆ จะโดน Google ลงโทษไหม?", answer: "Google ไม่แบน AI แต่แบน 'คอนเทนต์สแปมที่ไร้คุณภาพ' ควรนำมาเกลาเนื้อหาและเพิ่มความคิดเห็นส่วนตัว (E-E-A-T) เสมอครับ" }
    ]
  },
  {
    id: "bot2",
    slug: "claude-3",
    name: "Anthropic – Claude 3.5",
    logoUrl: "/logos/AI-Code/Anthropic – Claude.png",
    description: "นักอ่านและนักวิเคราะห์มือฉมัง เก่งเรื่องสรุปเอกสารยาวๆ ตอบมีเหตุผล และเขียนภาษาได้เป็นธรรมชาติมาก",
    longDescription: "Claude คือนักวิชาการและนักเขียนรางวัลซีไรต์! โดดเด่นอย่างมากเรื่อง 'Long-context window' รองรับการโยนหนังสือยาว 500 หน้าเข้าไปวิเคราะห์ได้โดยไม่หลงลืมรายละเอียด สำนวนการเขียนมีความลื่นไหล เป็นมนุษย์ และมีฟีเจอร์ 'Artifacts' ที่ให้มันเขียนโค้ดสร้างหน้าเว็บ กราฟิก หรือทำตารางเปรียบเทียบโชว์ในหน้าต่างด้านขวาได้ทันที",
    origin: "สร้างโดยทีมอดีตนักวิจัยจาก OpenAI ที่ให้ความสำคัญกับความปลอดภัยและจริยธรรม (Constitutional AI) ทำให้ปลอดภัยและไว้ใจได้",
    category: "Chatbots & Writing",
    priceModel: "Free / Pro $20 ต่อเดือน",
    isFree: true,
    externalUrl: "https://claude.ai",
    rating: 4.9,
    reviewCount: 42100,
    updatedAt: "Feb 2026",
    features: [
      "Artifacts UI: สั่งเขียนโค้ด ทำหน้าเว็บ หรือตารางสรุป แล้วพรีวิวผลลัพธ์ใช้งานได้ทันทีในหน้าต่างคู่ขนาน",
      "Massive Context Window: อ่านและประมวลผลข้อมูลระดับ 200K Tokens (หนังสือ 1 เล่ม) ได้รวดเร็วและแม่นยำมาก",
      "Nuanced Writing: น้ำเสียงการเขียนมีความซับซ้อน เป็นธรรมชาติ คล้ายคลึงนักเขียนมืออาชีพ ไม่ประดิษฐ์คำ"
    ],
    pros: [
      "เป็นเบอร์ 1 ในเรื่องการสรุปเอกสารยาวๆ ไม่มีการ 'หลอน' (Hallucinate) ข้อมูลจากไฟล์ที่อัปโหลด",
      "สำนวนการเขียนภาษาไทยดูเป็น 'คนจริง' ค่อยๆ อธิบายเหตุผล มากกว่า ChatGPT ที่ชอบสรุปเป็นข้อๆ",
      "มีตรรกะการคิดวิเคราะห์ที่ดีเยี่ยม ไม่ตอบตื้นๆ"
    ],
    cons: [
      "ในเวอร์ชันฟรี โควต้าการใช้งานหมดเร็วมาก โดยเฉพาะถ้าอัปโหลดไฟล์ขนาดใหญ่",
      "ไม่สามารถค้นหาข้อมูลอัปเดตจากอินเทอร์เน็ต (Web Browsing) ได้ในตัว"
    ],
    steps: [
      { title: "อัปโหลด Knowledge", desc: "โยนไฟล์ PDF หรือเอกสาร Word หลายๆ ไฟล์เข้าไปเป็นฐานความรู้" },
      { title: "กำหนดบริบท", desc: "พิมพ์คำถาม หรือสั่งให้เปรียบเทียบข้อมูลระหว่างไฟล์" },
      { title: "ใช้งาน Artifacts", desc: "สั่ง 'สร้าง Interactive dashboard' หรือ 'ทำตารางสรุป' เพื่อดูผลในหน้าขวา" }
    ],
    prompts: [
      { 
        purpose: "💡 สรุปและตรวจทานเอกสารยาว (Document Analysis)", 
        promptTh: "[อัปโหลดไฟล์รายงานหรือสัญญา]\nช่วยอ่านเอกสารนี้อย่างละเอียด สรุปประเด็นสำคัญ 5 ข้อให้เข้าใจง่ายๆ และช่วยหา 'ช่องโหว่ หรือข้อเสียเปรียบ' ที่ควรระวัง พร้อมอ้างอิงเลขหน้า",
        promptEn: "[Upload Document]\nThoroughly review this. Summarize 5 key takeaways in plain English. Identify any 'loopholes or unfavorable clauses', referencing specific page numbers."
      },
      { 
        purpose: "💡 สั่งเกลาภาษาให้เป็นมืออาชีพ (Tone Adjustment)", 
        promptTh: "นี่คืออีเมลที่ฉันร่างไว้ [วางข้อความ] ช่วยเกลาภาษาใหม่ให้ดูเป็นทางการ สุภาพ แต่ยังคงความกระตือรือร้นที่จะร่วมงานด้วย และแก้ไขไวยากรณ์ให้ถูกต้อง 100%",
        promptEn: "Here is a draft email: [Paste email]. Rewrite it to sound highly professional, polite, yet enthusiastic. Ensure 100% perfect grammar."
      }
    ],
    faqs: [
      { question: "Claude แตกต่างกับ ChatGPT อย่างไรในการเขียน?", answer: "Claude จะเขียนแบบเล่าเรื่อง (Narrative) ค่อยๆ อธิบายเหตุผล ซึ่งอ่านแล้วรู้สึกลื่นไหลเหมือนมนุษย์เขียนมากกว่าครับ" }
    ]
  },
  {
    id: "w3",
    slug: "jasper-ai",
    name: "Jasper AI",
    logoUrl: "/logos/Jasper AI.png",
    description: "AI นักการตลาดตัวจริง โดดเด่นด้านการเขียนโฆษณาเชิง Conversion, Email และคุม Brand Voice",
    longDescription: "Jasper คือ AI ที่ถูกฝึกฝนด้วยข้อมูลจากแคมเปญโฆษณาที่ประสบความสำเร็จระดับโลก ทำให้สำนวนมุ่งเน้นไปที่ 'การกระตุ้นยอดขาย (Conversion-focused)' คุณสามารถป้อนข้อมูลให้มันเรียนรู้โทนเสียงของแบรนด์ (Brand Voice) เลือกเทมเพลต (AIDA, PAS, Email Sequence) แล้วให้มันปั่นแคปชั่น บล็อกโพสต์ หรือโฆษณาที่อ่านแล้วอยากรูดบัตรเครดิตออกมาได้ทันที",
    origin: "สร้างโดยทีมที่จ้าง Copywriter ตัวท็อปมาช่วยประเมินโมเดล เพื่อให้เป็นสุดยอด AI สำหรับนักการตลาดและเอเจนซี่",
    category: "Marketing, SEO & Writing",
    priceModel: "Starts at $39/เดือน",
    isFree: false,
    externalUrl: "https://www.jasper.ai",
    rating: 4.8,
    reviewCount: 15200,
    updatedAt: "Feb 2026",
    features: [
      "Brand Voice & Infobase: คุมโทนเสียงแบรนด์ให้สม่ำเสมอ และดึงข้อมูลสเปกสินค้าที่บันทึกไว้มาเขียนอัตโนมัติ",
      "50+ Marketing Templates: มีแบบฟอร์มสำเร็จรูปอิงตามหลักจิตวิทยาการขาย เช่น AIDA, PAS, Before-After-Bridge",
      "Campaign Manager: พิมพ์ไอเดียครั้งเดียว ระบบจะสร้าง อีเมล, แคปชั่น FB, และหน้าเว็บ ให้ครบทั้งแคมเปญ"
    ],
    pros: [
      "ประหยัดเวลาทำ A/B Testing กดปุ่มเดียวปั่น Headline มาให้ทดสอบเป็นสิบแบบ",
      "สำนวนการเขียนมีความ 'ขายของ' แบบเนียนๆ (Persuasive) กระตุ้น Conversion ได้ดี",
      "เหมาะกับการทำงานเป็นทีม (Team Collaboration) ในฝั่งเอเจนซี่"
    ],
    cons: [
      "ราคาสูงเมื่อเทียบกับ LLM ทั่วไป",
      "การเขียนภาษาไทยบางครั้งยังต้องนำมาปรับคำให้เป็นภาษาพูดแบบคนไทยอีกเล็กน้อย"
    ],
    steps: [
      { title: "สอน AI รู้จักแบรนด์", desc: "นำแคปชั่นเก่าๆ มาให้ Jasper อ่านเพื่อเรียนรู้ Tone of Voice" },
      { title: "เลือก Template", desc: "เลือกรูปแบบ เช่น 'Facebook Ad Headline' หรือ 'Email Campaign'" },
      { title: "ใส่คีย์เวิร์ด", desc: "พิมพ์ชื่อสินค้าและจุดเด่นสั้นๆ แล้วกด Generate" }
    ],
    prompts: [
      { 
        purpose: "💡 เขียนอีเมลทำ Retargeting (Abandoned Cart)", 
        promptTh: "[ใช้เทมเพลต Email]\nโปรดเขียนอีเมลสำหรับลูกค้าที่ทิ้งตะกร้าสินค้า สินค้าคือ 'เซ็ตสกินแคร์' โทนเสียง: เข้าอกเข้าใจ และเร่งรัด เสนอส่วนลด 15% ภายใน 24 ชม. ทิ้งท้ายด้วยรีวิวผู้ใช้จริง",
        promptEn: "Write an Abandoned Cart email for a 'Skincare Set'. Tone: Empathetic yet Urgent. Offer a 15% discount within 24 hours. End with a short customer testimonial."
      },
      { 
        purpose: "💡 คิดแคปชั่นยิงแอด Facebook (A/B Testing)", 
        promptTh: "[ใช้เทมเพลต Facebook Ads]\nคิด Headline โฆษณา 5 แบบ สำหรับโปรโมท 'แอประบบบัญชี' เน้น Pain point เรื่องทำบัญชีปวดหัว ขอแบบสั้น กระชับ หยุดนิ้วคนดู (Scroll-stopping)",
        promptEn: "Generate 5 variations of Facebook Ad Headlines for an 'Accounting App'. Focus on the pain point of messy bookkeeping. Ensure they are short and scroll-stopping."
      }
    ],
    faqs: [
      { question: "ทำไมถึงควรซื้อ Jasper ในเมื่อ ChatGPT ก็เขียนโฆษณาได้?", answer: "Jasper มีระบบจัดการแคมเปญ, Template สำเร็จรูป และ Brand Voice ที่ช่วยให้คนในทีมการตลาดทำงานได้มาตรฐานเดียวกันโดยไม่ต้องมานั่งคิด Prompt ยาวๆ ทุกครั้งครับ" }
    ]
  },
  {
    id: "w4",
    slug: "copy-ai",
    name: "Copy.ai",
    logoUrl: "/logos/Copy.ai.png",
    description: "ราชาโฆษณาสั้นและผู้ช่วยสายโซเชียล คิดไอเดียคอนเทนต์ เขียนแคปชั่นโซเชียลไวสุดๆ",
    longDescription: "Copy.ai เน้นไปที่ 'ความง่ายและความเร็ว' เหมาะกับ Content Creator และนักการตลาดสายโซเชียล มี Tools ย่อยกว่า 90 แบบ ช่วยคิดแคปชั่น IG, ชื่อคลิป TikTok หรือจดหมายขอโทษลูกค้า แถมมีระบบ Sales Workflows ที่สแกนโปรไฟล์ LinkedIn เป้าหมายแล้วร่างข้อความ DM ไปทักทายเสนอขายได้แบบอัตโนมัติ ช่วยลดอาการสมองตัน (Writer's Block) ได้ชะงัด",
    origin: "สร้างมาเน้น UI สะอาดตา พิมพ์แค่ไม่กี่คำก็พ่นไอเดียเจ๋งๆ ออกมาให้เลือกเพียบ",
    category: "Marketing, SEO & Writing",
    priceModel: "Free (จำกัดคำ) / Pro $36 ต่อเดือน",
    isFree: true,
    externalUrl: "https://www.copy.ai",
    rating: 4.7,
    reviewCount: 10500,
    updatedAt: "Feb 2026",
    features: [
      "90+ Copywriting Tools: เครื่องมือยิบย่อยครอบคลุมทุกแพลตฟอร์ม (Ad Copy, Blog ideas, Social post)",
      "Sales Workflows: ระบบรันงานอัตโนมัติ เช่น สแกนข่าว แปลภาษา แล้วย่อยเป็นโพสต์ลงโซเชียล",
      "Infobase: บันทึกข้อมูลบริษัทไว้ พอจะเขียนก็แค่พิมพ์แท็กชื่อสินค้า AI จะดึงข้อมูลไปเขียนเอง"
    ],
    pros: [
      "ไอเดียและถ้อยคำดูวัยรุ่น สร้างสรรค์ (Creative) มี Hook ที่ดึงดูดสายตาดีมาก",
      "ใช้งานง่ายสุดๆ ไม่ต้องมีทักษะเขียน Prompt ก็ได้งานคุณภาพ",
      "เวอร์ชันฟรีให้โควต้าใจกว้าง เหมาะกับร้านค้าเล็กๆ หรือมือใหม่"
    ],
    cons: [
      "ไม่เก่งเรื่องบทความวิชาการ หรือบทความยาวๆ ที่ใช้ตรรกะซับซ้อนเท่า Claude",
      "การคุมโทนภาษาไทยบางครั้งอาจมีคำแปลกๆ หลุดมาบ้าง"
    ],
    steps: [
      { title: "เลือกโปรเจกต์", desc: "เลือกเครื่องมือ เช่น 'Instagram Captions' หรือ 'Sales Outreach'" },
      { title: "อธิบายสั้นๆ", desc: "พิมพ์จุดขายแค่บรรทัดเดียว และเลือกโทนเสียง" },
      { title: "ก็อปปี้ไปใช้งาน", desc: "AI จะให้ตัวเลือกหลายแบบ เลือกแบบที่จี๊ดจ๊าดที่สุดไปใช้" }
    ],
    prompts: [
      { 
        purpose: "💡 เขียน Hook สำหรับวิดีโอสั้น TikTok", 
        promptTh: "[ใช้เครื่องมือ Brainstorming]\nช่วยคิดประโยคเปิดคลิป (Hook) 3 วินาทีแรก สำหรับคลิปขาย 'แผ่นแปะแก้ปวดหลัง' ขอประโยคที่คนทำงานออฟฟิศฟังแล้วสะดุ้งและหยุดดูทันที",
        promptEn: "Generate powerful 3-second opening Hooks for a TikTok video selling 'Pain Relief Patches'. Must be highly relatable to office workers to stop them scrolling."
      },
      { 
        purpose: "💡 เขียนแคปชั่นโซเชียลแบบเป็นกันเอง", 
        promptTh: "[ใช้เครื่องมือ IG Caption]\nเขียนแคปชั่นโปรโมทเมนูใหม่ 'เบเกิลครีมชีสสตรอว์เบอร์รี' สำหรับร้านโฮมคาเฟ่ โทนเสียงสดใส เป็นกันเอง พร้อมแทรก Hashtag",
        promptEn: "Write an Instagram caption for my cafe's new 'Strawberry Cream Cheese Bagel'. Tone: Cute, bright, friendly. Include hashtags."
      }
    ],
    faqs: [
      { question: "Workflow ของ Copy.ai ทำงานยังไง?", answer: "คุณสามารถตั้งค่าลูกโซ่คำสั่งได้ครับ เช่น ให้มันสรุปบทความวิจัย -> นำไปแปลงเป็นโพสต์ LinkedIn -> แล้วเขียนอีเมลต่อ กดทีเดียวระบบรันให้จบ 3 สเตปเลยครับ" }
    ]
  },
  {
    id: "w5",
    slug: "writesonic",
    name: "Writesonic",
    logoUrl: "/logos/Writesonic.png",
    description: "โรงงานผลิตบทความ SEO อัตโนมัติ ดึงข้อมูลคู่แข่งจากเน็ต เขียนเสร็จกด Publish ได้เลย",
    longDescription: "สุดยอดอาวุธสำหรับสาย Affiliate และ Niche Site! Writesonic มีฟีเจอร์ Article Writer 6.0 ที่ไปสแกนเว็บคู่แข่งหน้าแรก Google แล้วดึงโครงสร้างมาเขียนบทความใหม่ที่ยาวกว่า 2,000+ คำ พร้อมแทรกรูปภาพและคีย์เวิร์ด SEO ให้อัตโนมัติ นอกจากนี้ยังทำ Landing Page และมี Chatsonic (แชทบอทต่อเน็ตได้) ในตัว ถือเป็น AI ที่ให้ ROI คุ้มค่าสำหรับคนทำเว็บไซต์หาเงิน",
    origin: "เน้นลดขั้นตอนที่ยุ่งยาก (Friction) ตั้งแต่คิดคีย์เวิร์ด ไปจนถึงกดส่งบทความขึ้น WordPress ให้จบในที่เดียว",
    category: "Marketing, SEO & Writing",
    priceModel: "Free (จำกัดคำ) / Starts at $16/เดือน",
    isFree: true,
    externalUrl: "https://writesonic.com",
    rating: 4.7,
    reviewCount: 11400,
    updatedAt: "Feb 2026",
    features: [
      "AI Article Writer 6.0: ระบุคีย์เวิร์ด สแกนคู่แข่ง แล้วเสกบทความอัดแน่น SEO ยาว 2,000+ คำ",
      "Surfer SEO Integration: ผูกบัญชี Surfer เพื่อดูคะแนน SEO และคำศัพท์ที่ขาดไปแบบ Real-time ในหน้าพิมพ์",
      "Landing Page Generator & 1-Click Export: สร้างหน้าเว็บขายของ และส่งบทความขึ้น WordPress ได้ทันที"
    ],
    pros: [
      "สายทำเว็บ (Mass Production) จะชอบมาก เพราะประหยัดเวลา Research และปั่นบทความได้เร็วสุดๆ",
      "ข้อมูลเป็นปัจจุบันเสมอ (Real-time data) ไม่ตกยุค",
      "โครงสร้างบทความถูกใจ Google Algorithm (SEO-friendly)"
    ],
    cons: [
      "บทความที่เจนแบบอัตโนมัติ 100% อาจจะดูเป็น 'แพทเทิร์น' มากเกินไป ควรมาเกลาเพิ่ม",
      "เครดิตคำ (Words limit) หมดค่อนข้างเร็วหากเลือกใช้คุณภาพสูงสุด (Premium)"
    ],
    steps: [
      { title: "ใส่ Keyword", desc: "พิมพ์คีย์เวิร์ดหลักที่อยากทำอันดับ" },
      { title: "ปรับแต่ง Outline", desc: "เลือกและปรับหัวข้อย่อยที่ AI ดึงมาจากคู่แข่ง" },
      { title: "Generate & Publish", desc: "กดสร้างบทความยาว แล้วคลิกส่งขึ้นเว็บผ่าน Integration" }
    ],
    prompts: [
      { 
        purpose: "💡 หาเทรนด์ด้วย Chatsonic (มีเน็ต)", 
        promptTh: "ช่วยค้นหา '5 เทรนด์เครื่องสำอางเกาหลีที่มาแรงในปี 2026' อิงจากเว็บต่างประเทศ พร้อมแนะนำ Long-tail keywords ที่คู่แข่งน้อยเพื่อนำไปเขียน SEO",
        promptEn: "Search the web for 'Top 5 K-Beauty trends in 2026'. Suggest low-competition Long-tail keywords related to these trends for an SEO blog post."
      },
      { 
        purpose: "💡 รีวิวสินค้าลงเว็บ Affiliate", 
        promptTh: "[ใช้ฟีเจอร์ Product Review]\nสินค้า: ไมค์ไร้สาย DJI Mic 2\nจุดเด่น: ตัดเสียง AI, แบตทน\nคำสั่ง: เขียนรีวิวแบบจริงใจเหมือนใช้งานจริง (Authentic tone) พร้อมสรุปว่าเหมาะกับใคร",
        promptEn: "Product: DJI Mic 2\nPros: AI noise cancellation, long battery.\nInstruction: Write an authentic product review for an Affiliate site. Conclude with 'Who this is best for'."
      }
    ],
    faqs: [
      { question: "ใช้คู่กับ Surfer SEO ได้ไหม?", answer: "ได้ครับ Writesonic มีปุ่มเชื่อมต่อกับ Surfer ทำให้คุณเห็นคะแนน SEO ขยับขึ้นสดๆ ขณะที่ AI กำลังพิมพ์บทความให้คุณเลยครับ" }
    ]
  },
  {
    id: "vid5",
    slug: "synthesia",
    name: "Synthesia",
    logoUrl: "/logos/AI-Video/Synthesia.png",
    description: "AI พรีเซนเตอร์ครบจบในเว็บเดียว เสก Avatar มาอ่านสคริปต์แทนคุณ รองรับภาษาไทย 100%",
    longDescription: "หมดปัญหาการตั้งกล้องและเขินหน้ากล้อง! Synthesia คือแพลตฟอร์มที่เสก 'พรีเซนเตอร์เสมือนจริง (AI Avatars)' มายืนอ่านสคริปต์หน้าจอ (Lip-sync) ด้วยจังหวะและภาษากายที่สอดคล้องกับเสียง เพียงพิมพ์ข้อความ ก็ได้ทั้งภาพคนขยับปากและเสียงพากย์คุณภาพสูง (รองรับภาษาไทยชัดเจนมาก) เหมาะสุดๆ สำหรับงานทำสื่อ E-learning, วิดีโออธิบายสินค้า, หรืองาน Corporate Training",
    origin: "สร้างมาเพื่อลดต้นทุนการจ้างสตูดิโอและการถ่ายซ่อมขององค์กร B2B ลงกว่า 80%",
    category: "Video & Voice Generation",
    priceModel: "Starts at $22/เดือน",
    isFree: false,
    externalUrl: "https://www.synthesia.io",
    rating: 4.8,
    reviewCount: 6500,
    updatedAt: "Feb 2026",
    features: [
      "160+ AI Avatars: มีพรีเซนเตอร์ทุกเชื้อชาติ อายุ และเสื้อผ้า พร้อมระบบขยับหน้าแบบสมจริง (Micro-expressions)",
      "Text-to-Video & Multilingual Voiceovers: พิมพ์สคริปต์แล้วได้เสียงพากย์เนียนๆ รองรับกว่า 120 ภาษา (รวมไทย)",
      "Voice & Face Cloning: อัดวิดีโอตัวเองส่งไปให้บริษัท เพื่อสร้างอวตารของคุณเองไว้พิมพ์สั่งให้ตัวเองพูดได้ตลอดชีพ"
    ],
    pros: [
      "ประหยัดเวลาและค่าโปรดักชันมหาศาล พูดผิดก็แค่เข้ามาแก้ข้อความแล้วเรนเดอร์ใหม่",
      "มีเครื่องมือตัดต่อจัดสไลด์ ใส่พื้นหลังและกราฟิกได้ในตัว คล้ายทำ PowerPoint",
      "คุณภาพเสียงพากย์และสำเนียงการพูดภาษาไทยทำได้ดีเกินคาด"
    ],
    cons: [
      "ไม่สามารถ Export ออกมาเฉพาะไฟล์เสียง (.mp3) ต้องเซฟเป็นไฟล์วิดีโอ (.mp4) เท่านั้น",
      "อวตารบางตัวในฉากแสดงอารมณ์ดราม่าหนักๆ อาจจะยังดูตาลอยเป็นหุ่นยนต์นิดๆ",
      "โควต้านาทีในการเรนเดอร์แพ็กเกจเริ่มต้นอาจจะน้อยไปนิด"
    ],
    steps: [
      { title: "เลือก Avatar และฉาก", desc: "เลือกพรีเซนเตอร์ และใส่ฉากหลัง (เช่น ออฟฟิศ หรือจอพรีเซนต์)" },
      { title: "พิมพ์สคริปต์และภาษา", desc: "วางสคริปต์ภาษาไทย ปรับจังหวะหายใจและความเร็วได้ตามต้องการ" },
      { title: "Generate Video", desc: "กดสร้างคลิปแล้วรอรับไฟล์ MP4 ไปใช้งานได้เลย" }
    ],
    prompts: [
      { 
        purpose: "💡 สคริปต์วิดีโอสอนงานพนักงาน (Corporate Onboarding)", 
        promptTh: "สวัสดีค่ะ ยินดีต้อนรับเข้าสู่บริษัทของเราอย่างเป็นทางการนะคะ! ในคลิปวิดีโอนี้ เราจะขอแนะนำให้ทุกท่านรู้จักกับ สวัสดิการพนักงาน และกฎระเบียบเบื้องต้นในการทำงานค่ะ [เว้นวรรค] หากพร้อมแล้ว ไปชมสไลด์ถัดไปกันเลยค่ะ",
        promptEn: "Hello, and a very warm welcome to our company! In this video, we will walk you through our employee benefits program and basic workplace policies. [Pause] If you are ready, let's dive into the first slide."
      },
      { 
        purpose: "💡 สคริปต์แนะนำฟีเจอร์ซอฟต์แวร์ (Software Demo)", 
        promptTh: "วันนี้เราจะพาคุณไปทำความรู้จักกับฟีเจอร์ใหม่ล่าสุด ที่จะช่วยให้การจัดการข้อมูลลูกค้าของคุณง่ายขึ้นกว่าเดิมถึง 2 เท่า! ขั้นตอนแรก ให้คลิกที่เมนู 'การตั้งค่า' มุมขวาบนของหน้าจอนะคะ",
        promptEn: "Today, we are thrilled to introduce our newest feature designed to make customer data management twice as efficient. First, please click on the 'Settings' icon located in the top right corner."
      }
    ],
    faqs: [
      { question: "ทำ Avatar โคลนหน้าตัวเองยากไหม แพงไหม?", answer: "มีค่าบริการรายปีเสริมครับ คุณต้องอัดวิดีโอตัวเองอ่านสคริปต์ส่งไปให้ระบบประมวลผลประมาณ 1 สัปดาห์ถึงจะได้ร่างอวตารส่วนตัวมาใช้งานครับ" }
    ]
  },

  // ==========================================
  // 💻 หมวด AI เขียนโค้ด (Coding & Development)
  // ==========================================
  {
    id: "c1",
    slug: "github-copilot",
    name: "GitHub Copilot",
    logoUrl: "/logos/AI-Code/github-copilot.png",
    description: "AI คู่หูโปรแกรมเมอร์ยอดฮิต ช่วยเติมโค้ดอัตโนมัติ (Autocomplete) ใน IDE โคตรแม่นยำ",
    longDescription: "GitHub Copilot คือผู้บุกเบิกวงการ AI Coding Assistant ที่ทรงพลังที่สุดตัวหนึ่ง มันทำงานแบบฝังตัวอยู่ใน IDE (เช่น VS Code, Visual Studio) คอยอ่านบริบทโค้ดที่คุณกำลังพิมพ์ และเสนอโค้ดบรรทัดต่อไป หรือแม้กระทั่งสร้างฟังก์ชันให้ทั้งก้อนเพียงแค่คุณพิมพ์คอมเมนต์อธิบาย (Ghost Text) เวอร์ชันล่าสุดมาพร้อม Copilot Chat ที่ให้คุณคุยกับ AI เพื่อสั่งแก้บั๊ก หรือให้อธิบายโค้ดที่ซับซ้อนได้โดยไม่ต้องสลับหน้าจอไปหา Google",
    origin: "พัฒนาโดย GitHub ร่วมกับ OpenAI โดยเทรนจาก Source Code สาธารณะหลายพันล้านบรรทัดบน GitHub ทำให้มันเข้าใจบริบทของภาษาโปรแกรมมิ่งแทบทุกภาษาบนโลก",
    category: "Coding & Development",
    priceModel: "$10 ต่อเดือน (ฟรีสำหรับนักศึกษาและโปรเจกต์ Open Source)",
    isFree: false,
    externalUrl: "https://github.com/features/copilot",
    rating: 4.8,
    reviewCount: 25400,
    updatedAt: "Feb 2026",
    features: [
      "Real-time Autocomplete: เสนอโค้ดล่วงหน้าขณะพิมพ์แบบเรียลไทม์ กด Tab เพื่อใช้งานได้ทันที",
      "Inline Chat (Cmd/Ctrl + I): ไฮไลต์โค้ดแล้วกดคีย์ลัดเพื่อสั่งแก้โค้ดเฉพาะจุดแบบด่วนๆ",
      "Test Generation: สั่งให้ AI เขียน Unit Test คลุมฟังก์ชันที่เพิ่งเขียนเสร็จได้ในคลิกเดียว"
    ],
    pros: [
      "ประหยัดเวลาพิมพ์โค้ดซ้ำซาก (Boilerplate) และเวลาค้นหา Syntax ทั่วไปได้มหาศาล",
      "ทำงานร่วมกับ Ecosystem ของ GitHub และ VS Code ได้อย่างไร้รอยต่อที่สุด",
      "รองรับภาษาโปรแกรมแทบทุกภาษา โดยเฉพาะ Python, JavaScript/TypeScript, Go และ C++"
    ],
    cons: [
      "บางครั้งเสนอโค้ดที่ใช้ไลบรารีเวอร์ชันเก่า (Deprecated) ต้องคอยรีวิวตรรกะก่อนกดยอมรับเสมอ",
      "ไม่มีโควต้าให้ใช้งานฟรีสำหรับบุคคลทั่วไป (ถ้าไม่ใช่นักศึกษา)"
    ],
    steps: [
      { title: "ติดตั้ง Extension", desc: "ค้นหา 'GitHub Copilot' ในหน้า Extension ของ VS Code แล้วกดติดตั้ง" },
      { title: "ล็อกอิน GitHub", desc: "เชื่อมต่อบัญชี GitHub ที่มีสิทธิ์ใช้งาน Copilot" },
      { title: "พิมพ์ Comment", desc: "พิมพ์อธิบายสิ่งที่ต้องการ (เช่น // function to fetch user data) แล้วกด Enter รอ AI เสนอโค้ด" }
    ],
    prompts: [
      { 
        purpose: "💡 สั่งสร้างฟังก์ชันดึงข้อมูล API ด้วย Python (Inline Prompt)", 
        promptTh: "# สร้างฟังก์ชัน Python โดยใช้ไลบรารี requests เพื่อดึงข้อมูลสภาพอากาศจาก API url: [ระบุ URL]\n# เงื่อนไข: ต้องมี Try/Except จัดการ Error กรณีเน็ตหลุด และรีเทิร์นค่าออกมาเป็น JSON object",
        promptEn: "# Create a Python function using the 'requests' library to fetch weather data from: [Insert URL]\n# Requirements: Include Try/Except blocks for network error handling, and return the parsed JSON object."
      },
      { 
        purpose: "💡 สั่งให้อธิบายโค้ดที่ซับซ้อนและหาบั๊ก (Copilot Chat)", 
        promptTh: "[ไฮไลต์โค้ดที่พังแล้วเปิดแผง Chat]\nช่วยอธิบายหน่อยว่าฟังก์ชันนี้ทำงานยังไง? และตอนนี้ฉันเจอ Error ว่า 'TypeError: Cannot read properties of undefined' มันเกิดจากบรรทัดไหน ช่วยเขียนโค้ดแก้พร้อมใส่เงื่อนไขดัก Null ให้ด้วย",
        promptEn: "Explain how this highlighted function works step-by-step. I am currently getting this Error: 'TypeError: Cannot read properties of undefined'. Which line is causing this? Please provide the fixed code with proper null-checking."
      }
    ],
    faqs: [
      { question: "โค้ดบริษัทจะหลุดไปให้ AI เรียนรู้ไหม?", answer: "สำหรับแพ็กเกจ Copilot Business หรือ Enterprise ทาง GitHub ยืนยันว่าจะไม่มีการนำโค้ด (Source Code) หรือข้อมูลในแชทของคุณไปใช้เทรนโมเดลต่อครับ" }
    ]
  },
  {
    id: "c2",
    slug: "claude-code",
    name: "Claude Code (Anthropic)",
    logoUrl: "/logos/AI-Code/Anthropic – Claude.png",
    description: "AI Coding Agent ตัวตึง ทำงานผ่าน Terminal ช่วยรันคำสั่งและแก้ไฟล์ได้อัตโนมัติ",
    longDescription: "Claude Code ไม่ใช่แค่แชทบอทแนะนำโค้ด แต่เป็น 'AI Agent' ที่ฝังตัวอยู่ใน Terminal (Command Line) ของคุณ มันได้รับอนุญาตให้เข้าถึงไฟล์ในโปรเจกต์ รันสคริปต์ และค้นหาข้อผิดพลาดได้ด้วยตัวเอง คุณสามารถสั่งมันด้วยภาษามนุษย์ เช่น 'ช่วยหาว่าทำไมหน้า Login ถึงพัง แล้วแก้โค้ดให้หน่อย' มันจะทำการค้นหาไฟล์ที่เกี่ยวข้อง วิเคราะห์ตรรกะ (Reasoning) ด้วยโมเดล Claude รุ่นล่าสุด และลงมือแก้ไขไฟล์นั้นให้คุณจริงๆ ทันที",
    origin: "พัฒนาโดย Anthropic เพื่อตอบโจทย์นักพัฒนาที่ต้องการลดภาระงานระดับโปรเจกต์ (Project-level tasks) โดยใช้ความสามารถด้านการวิเคราะห์ขั้นสูงของตระกูล Claude 3.5 ที่ขึ้นชื่อว่าฉลาดที่สุดในงานเขียนโปรแกรม",
    category: "Coding & Development",
    priceModel: "คิดเงินตามปริมาณการใช้งานจริง (Pay-per-use API)",
    isFree: false,
    externalUrl: "https://www.anthropic.com/claude-code",
    rating: 4.8,
    reviewCount: 8500,
    updatedAt: "Feb 2026",
    features: [
      "Terminal Native: ทำงานโดยตรงผ่าน Command Line อินเตอร์เฟซที่คุ้นเคยของ Dev",
      "Agentic Workflow: สั่งงานทีเดียว AI สามารถวางแผน เปิดอ่านหลายไฟล์ แก้โค้ด และรันทดสอบได้เอง",
      "Deep Reasoning: เก่งมากในการวิเคราะห์โครงสร้างโปรเจกต์ที่ซับซ้อน และหาสาเหตุของบั๊กลึกๆ"
    ],
    pros: [
      "ไม่ต้องก๊อปปี้โค้ดแปะไปมา (No Copy-Pasting) เพราะ AI ลงมือแก้ไฟล์ในโปรเจกต์ให้คุณเลย",
      "เข้าใจ Context ของโปรเจกต์ได้ลึกซึ้ง เหมาะกับการทำ Refactoring โค้ดชุดใหญ่",
      "โมเดล Claude เขียนโค้ดได้คลีนและตรงตาม Best Practice ของแต่ละภาษามากๆ"
    ],
    cons: [
      "การใช้งานผ่าน Terminal อาจจะดูน่ากลัวสำหรับมือใหม่ที่ชินกับการกดปุ่มบน UI",
      "ต้องระวังเรื่องค่าใช้จ่าย (Cost) เพราะเป็นการเรียก API หลังบ้านโดยตรง",
      "ต้องตรวจสอบความถูกต้องเสมอก่อนให้มันเซฟไฟล์ทับ (รัน git diff ดูก่อน commit)"
    ],
    steps: [
      { title: "ติดตั้งผ่าน npm", desc: "เปิด Terminal พิมพ์คำสั่ง 'npm install -g @anthropic-ai/claude-code'" },
      { title: "ล็อกอิน API", desc: "ใส่ API Key ของ Anthropic เพื่อเริ่มต้นการใช้งาน" },
      { title: "รันคำสั่ง 'claude'", desc: "เข้าไปที่โฟลเดอร์โปรเจกต์ พิมพ์ 'claude' แล้วสั่งงานเป็นภาษามนุษย์ได้เลย" }
    ],
    prompts: [
      { 
        purpose: "💡 สั่งให้ AI รื้อโครงสร้างและ Refactor โค้ด (Terminal Command)", 
        promptTh: "claude 'ช่วยสแกนไฟล์ทั้งหมดในโฟลเดอร์ /components แล้วหาว่าไฟล์ไหนบ้างที่ยังมี React Class Component หลงเหลืออยู่ จากนั้นช่วยแปลงไฟล์เหล่านั้นให้เป็น Functional Component และใช้ React Hooks (useState, useEffect) ทั้งหมดให้หน่อย'",
        promptEn: "claude 'Please scan all files in the /components directory. Identify any remaining React Class Components and refactor them into modern Functional Components using React Hooks. Save the changes.'"
      },
      { 
        purpose: "💡 สั่งให้ AI ช่วยเขียนสคริปต์และรันทดสอบ (Agentic Task)", 
        promptTh: "claude 'ช่วยสร้างไฟล์ Python ชื่อ data_cleaner.py สำหรับอ่านไฟล์ data.csv กำจัดแถวที่มีค่าว่าง (Null) และเซฟไฟล์ใหม่เป็น clean_data.csv เขียนเสร็จแล้วช่วยรันสคริปต์เพื่อทดสอบให้ดูหน่อยว่าได้ผลลัพธ์กี่บรรทัด'",
        promptEn: "claude 'Create a Python script named data_cleaner.py that reads data.csv, drops any rows with Null values, and saves the output as clean_data.csv. Once written, execute the script and tell me the total row count.'"
      }
    ],
    faqs: [
      { question: "มันจะลบไฟล์โปรเจกต์ฉันทิ้งไหม?", answer: "Claude Code จะถามยืนยัน (Confirmation) คุณก่อนเสมอเมื่อต้องทำการลบไฟล์ หรือเปลี่ยนแปลงโครงสร้างใหญ่ๆ ครับ" }
    ]
  },
  {
    id: "c3",
    slug: "replit-ghostwriter",
    name: "Replit Ghostwriter",
    logoUrl: "/logos/AI-Code/Replit.png",
    description: "AI คู่หูใน Cloud IDE เขียน รัน และ Deploy โค้ดได้จบบนเว็บเบราว์เซอร์",
    longDescription: "Replit ไม่ใช่แค่แชทบอท แต่เป็นพื้นที่เขียนโค้ดบนคลาวด์ (Cloud IDE) ที่มี AI อัจฉริยะชื่อ Ghostwriter ฝังเป็นเนื้อเดียวกัน คุณไม่ต้องเสียเวลาติดตั้ง Node.js หรือ Python ในคอมพิวเตอร์ตัวเอง แค่เปิดเว็บก็เริ่มโปรเจกต์ได้เลย ความเจ๋งคือ AI ตัวนี้จะเห็นความเคลื่อนไหวทั้งหมดในโปรเจกต์ของคุณ ถ้ารันโค้ดแล้วติด Error ตัวแดงแจ้งเตือน AI จะเสนอตัวช่วยวิเคราะห์และกดปุ่ม 'Fix it' เพื่อแก้บั๊กให้ทันที",
    origin: "Replit มีวิสัยทัศน์ที่จะทำให้ทุกคนเข้าถึงการเขียนโปรแกรมได้ง่ายที่สุด การนำ AI เข้ามาผสาน ทำให้กำแพงความรู้เรื่องการตั้งค่า Environment หายไปโดยสิ้นเชิง",
    category: "Coding & Development",
    priceModel: "Free (จำกัดพลัง AI) / Replit Core $20 ต่อเดือน",
    isFree: true,
    externalUrl: "https://replit.com",
    rating: 4.6,
    reviewCount: 6800,
    updatedAt: "Feb 2026",
    features: [
      "Zero Setup: เปิดเบราว์เซอร์แล้วพิมพ์โค้ดได้เลย ไม่ต้องลงโปรแกรมในเครื่อง",
      "Proactive Debugging: เมื่อโปรแกรมแครช AI จะป๊อปอัปขึ้นมาบอกสาเหตุและวิธีแก้ทันที",
      "Generate Code in Context: ไฮไลต์โค้ดแล้วคลิกขวา สั่งให้แปลงภาษา หรือให้มันเติมคอมเมนต์"
    ],
    pros: [
      "เหมาะกับมือใหม่มากที่สุด ลดอาการหัวร้อนจากการตั้งค่าเครื่องไม่ผ่าน",
      "มีระบบ Multiplayer ส่งลิงก์ให้เพื่อนเข้ามาช่วยกันพิมพ์โค้ดแก้บั๊กได้แบบเรียลไทม์",
      "กดปุ่มเดียว Deploy นำแอปขึ้นออนไลน์ให้คนอื่นใช้งานได้เลย"
    ],
    cons: [
      "แพ็กเกจฟรีจะถูกบังคับให้โปรเจกต์เป็นแบบสาธารณะ (Public) คนอื่นเห็นโค้ดเราได้",
      "หากพัฒนาโปรเจกต์ใหญ่มากๆ การรันบนเบราว์เซอร์อาจจะหน่วง"
    ],
    steps: [
      { title: "สร้าง Repl (โปรเจกต์)", desc: "สมัครสมาชิก กดปุ่ม Create Repl เลือกภาษาที่อยากเขียน" },
      { title: "ใช้ AI สร้างโครง", desc: "เปิดช่องแชทด้านขวา พิมพ์สั่งให้ AI สร้างไฟล์ตั้งต้นและไลบรารีที่จำเป็น" },
      { title: "รันและแก้บั๊ก", desc: "กดปุ่ม 'Run' หากมี Error ให้กดปุ่ม 'Explain Error' เพื่อให้ AI ช่วยแก้ไข" }
    ],
    prompts: [
      { 
        purpose: "💡 สร้างโครงแอปขูดข้อมูลเว็บไซต์ด้วย Python", 
        promptTh: "ฉันต้องการสร้างสคริปต์ Python เพื่อขูดข้อมูลราคาสินค้าจากเว็บไซต์ [ระบุ URL] ช่วยเขียนโครงสร้างโค้ดเริ่มต้นโดยใช้ BeautifulSoup ให้หน่อย และเขียนฟังก์ชันเซฟข้อมูลลงไฟล์ CSV ด้วย",
        promptEn: "I want to build a Python script to scrape product prices from [Insert URL]. Please generate the boilerplate code using BeautifulSoup. Also, include a function to save the data into a CSV."
      },
      { 
        purpose: "💡 ให้ AI เติมคอมเมนต์อธิบายโค้ด", 
        promptTh: "[ไฮไลต์บล็อกโค้ดแล้วเลือก AI]\nช่วยอธิบายการทำงานของลูปนี้แบบทีละสเต็ปด้วยภาษาที่เข้าใจง่าย และช่วยเติม Inline Comments เข้าไปในโค้ดแต่ละบรรทัดให้ด้วย",
        promptEn: "Please explain the logic of this highlighted loop step-by-step. After explaining, inject clear inline comments into the code block."
      }
    ],
    faqs: [
      { question: "สามารถโหลดโค้ดกลับมาลงคอมตัวเองได้ไหม?", answer: "ได้ครับ สามารถกดดาวน์โหลดโปรเจกต์เป็นไฟล์ .zip หรือจะเชื่อมต่อกับ GitHub เพื่อ Push โค้ดเก็บไว้ก็ได้ครับ" }
    ]
  },
  {
    id: "c4",
    slug: "blackbox-ai",
    name: "Blackbox AI",
    logoUrl: "/logos/AI-Code/blackbox.png",
    description: "เครื่องมือวิเคราะห์และแนะนำโค้ดที่ครอบคลุม ช่วยหาโค้ด Snippet ตอบโจทย์ได้ไว",
    longDescription: "Blackbox AI เริ่มต้นจากการเป็นเครื่องมือให้ก๊อปปี้ข้อความโค้ดจากวิดีโอ ก่อนจะพัฒนาตัวเองมาเป็น AI Coding Assistant เต็มรูปแบบ จุดเด่นคือมีระบบ 'AI Code Search' ที่ดึงตัวอย่างโค้ด (Snippets) ที่ใช้งานได้จริงจากฐานข้อมูลขนาดใหญ่มาให้ พร้อมมีฟีเจอร์แปลงรูปภาพเป็นโค้ด (Image to Code) ที่ล้ำสมัย",
    origin: "สร้างขึ้นเพื่อแก้ปัญหานักพัฒนาที่ใช้เวลาหลายชั่วโมงในการค้นหาวิธีแก้บั๊กบน StackOverflow",
    category: "Coding & Development",
    priceModel: "Free (ฟีเจอร์พื้นฐาน) / Starts at $0.99/เดือน",
    isFree: true,
    externalUrl: "https://www.blackbox.ai",
    rating: 4.5,
    reviewCount: 9200,
    updatedAt: "Feb 2026",
    features: [
      "Code Search Engine: ค้นหาวิธีแก้ปัญหาและสคริปต์โค้ดจากคำถามภาษามนุษย์",
      "Auto Documentation: กดคลิกเดียวสแกนโค้ดและสร้างเอกสาร README",
      "Image to Code: อัปโหลดภาพหน้าจอ UI แล้วให้ AI เขียนโค้ด HTML/CSS จำลองตามภาพนั้น"
    ],
    pros: [
      "หาตัวอย่างโค้ด (Snippets) มาใช้งานได้เร็ว ประหยัดเวลาค้นหา",
      "ฟีเจอร์ Image to Code ทำงานได้ดี ช่วยขึ้นโครงหน้าเว็บรวดเร็ว",
      "ราคาแพ็กเกจพรีเมียมค่อนข้างถูกเมื่อเทียบกับคู่แข่ง"
    ],
    cons: [
      "ความสามารถในการเข้าใจ Context โปรเจกต์ใหญ่ๆ ยังเป็นรอง Copilot และ Cursor",
      "UI บนหน้าเว็บอาจจะดูรกๆ ไปบ้างในบางฟีเจอร์"
    ],
    steps: [
      { title: "ค้นหาปัญหา", desc: "เข้าไปที่เว็บ Blackbox.ai พิมพ์ปัญหา เช่น 'how to connect MongoDB in Next.js'" },
      { title: "เลือก Snippet", desc: "AI จะพ่นตัวอย่างโค้ดมาให้ คุณก๊อปปี้ไปปรับใช้ได้เลย" },
      { title: "ใช้งานใน IDE", desc: "โหลด Extension มาติดตั้งใน VS Code เพื่อใช้งานฟีเจอร์ Autocomplete" }
    ],
    prompts: [
      { 
        purpose: "💡 สั่งสร้างเอกสาร Readme สำหรับโปรเจกต์", 
        promptTh: "ช่วยเขียนไฟล์ README.md สำหรับโปรเจกต์ Next.js ของฉันหน่อย มีหัวข้อ: วิธีการติดตั้ง, ตัวแปร Environment, และโครงสร้างโฟลเดอร์",
        promptEn: "Generate a professional README.md file for my Next.js project. Include: Installation Guide, Required Environment Variables, and Folder Structure."
      },
      { 
        purpose: "💡 ให้หาโค้ดเชื่อมต่อฐานข้อมูลแบบเร็วๆ", 
        promptTh: "ขอตัวอย่างโค้ด (Snippet) ที่สั้นและกระชับที่สุด สำหรับเชื่อมต่อฐานข้อมูล PostgreSQL โดยใช้ Prisma ORM ในโปรเจกต์ TypeScript",
        promptEn: "Provide the most concise code snippet to establish a connection to a PostgreSQL database using Prisma ORM in a TypeScript project."
      }
    ],
    faqs: [
      { question: "ฟีเจอร์ Image to Code รองรับภาษาอะไรบ้าง?", answer: "รองรับการแปลงรูปภาพเป็นโค้ด HTML, CSS, Tailwind CSS และ React (JSX) เป็นหลักครับ" }
    ]
  },
  {
    id: "c5",
    slug: "amazon-q-developer",
    name: "Amazon Q Developer",
    logoUrl: "/logos/AI-Code/Amazon.png",
    description: "ผู้ช่วยเขียนโค้ดสาย Cloud และ Enterprise จาก AWS โดดเด่นเรื่อง Security",
    longDescription: "Amazon Q Developer (รีแบรนด์จาก CodeWhisperer) คือ AI ที่เกิดมาเพื่อองค์กร ไม้ตายของมันคือ 'ความเชี่ยวชาญในระบบ AWS' ถ้าคุณเขียนโค้ด Deploy บน AWS มันจะแนะนำ Best Practices ให้ นอกจากนี้ยังมีระบบสแกนความปลอดภัย (Security Scan) ตรวจจับช่องโหว่และรหัสผ่านที่หลุดในโค้ด",
    origin: "สร้างโดย AWS เน้นจุดขายเรื่องความปลอดภัยระดับ Enterprise และเป็น AI ตัวเดียวที่การันตีเรื่องลิขสิทธิ์ (Reference Tracker)",
    category: "Coding & Development",
    priceModel: "Free (รายบุคคล) / $19 ต่อเดือน สำหรับ Pro",
    isFree: true,
    externalUrl: "https://aws.amazon.com/q/developer/",
    rating: 4.7,
    reviewCount: 5100,
    updatedAt: "Feb 2026",
    features: [
      "Security Scans: สแกนโค้ดในโปรเจกต์เพื่อหาช่องโหว่ความปลอดภัยแบบเรียลไทม์",
      "AWS Expert: สั่งให้เขียนสคริปต์ Infrastructure (เช่น Terraform) ได้แม่นยำมาก",
      "Legacy Code Upgrade: ช่วยอัปเกรดโค้ดเวอร์ชันเก่า (เช่น อัปเกรด Java) ให้ทั้งโปรเจกต์"
    ],
    pros: [
      "Free Tier คุ้มค่ามาก ได้ระบบสแกนความปลอดภัยมาใช้ฟรี",
      "มีระบบ Reference Tracker แจ้งเตือนลิขสิทธิ์โค้ด",
      "ใครที่ทำงานสาย DevOps หรือใช้ AWS เป็นประจำ ตัวนี้คือผู้ช่วยที่เก่งที่สุด"
    ],
    cons: [
      "การแนะนำโค้ดฝั่ง Frontend ยังไม่ลื่นไหลเท่า Copilot",
      "การตั้งค่าเข้าใช้งานครั้งแรก (Authentication) มีความซับซ้อนตามสไตล์ AWS"
    ],
    steps: [
      { title: "โหลด Extension", desc: "ติดตั้ง AWS Toolkit ใน VS Code หรือ JetBrains" },
      { title: "ล็อกอิน", desc: "สมัครและล็อกอินด้วยบัญชี AWS Builder ID (ใช้งานได้ฟรี)" },
      { title: "ใช้งาน", desc: "พิมพ์ขอสคริปต์ หรือกดปุ่มสแกน Security ในแผงควบคุม" }
    ],
    prompts: [
      { 
        purpose: "💡 สั่งให้เขียนสคริปต์อัปโหลดไฟล์ขึ้น AWS S3", 
        promptTh: "ช่วยเขียนฟังก์ชันภาษา Python โดยใช้ไลบรารี boto3 อัปโหลดไฟล์รูปภาพขึ้น AWS S3 Bucket โดยตั้งค่าสิทธิ์ไฟล์เป็นแบบ Private",
        promptEn: "Write a Python function using boto3 to upload a local image to an AWS S3 Bucket. Ensure permissions are set to Private, and return the presigned URL."
      },
      { 
        purpose: "💡 สั่งสแกนหาจุดอ่อนความปลอดภัย", 
        promptTh: "[ใช้แผงควบคุม Q Developer]\nช่วยสแกนไฟล์ authentication.js นี้ว่ามีช่องโหว่ SQL Injection หรือ XSS ไหม? ถ้าเจอช่วยเขียนโค้ดอัปเดตป้องกันให้ด้วย",
        promptEn: "Scan this authentication.js file for any security vulnerabilities (SQL Injection or XSS). Provide the remediated code."
      }
    ],
    faqs: [
      { question: "ถ้าไม่ได้ใช้ AWS เลย ใช้ตัวนี้คุ้มไหม?", answer: "ยังคุ้มครับ เพราะฟีเจอร์ Autocomplete และหน้าต่าง Chat พื้นฐานก็ใช้งานกับโปรเจกต์ทั่วไปได้ดี แถมฟรีด้วยครับ" }
    ]
  },
  {
    id: "c6",
    slug: "cursor",
    name: "Cursor",
    logoUrl: "/logos/AI-Code/cursor.png",
    description: "Code Editor ขุมพลัง AI แห่งยุค เข้าใจโค้ดทั้งโปรเจกต์ สั่งแก้บั๊กข้ามไฟล์ได้สุดโหด",
    longDescription: "Cursor คือดาวรุ่งพุ่งแรงที่สุด! มันคือโปรแกรม Code Editor (ที่ Fork มาจาก VS Code) ที่ฝังขุมพลัง AI เข้าไปลึกถึงแก่น จุดแข็งคือฟีเจอร์ 'Composer' และคำสั่ง 'Cmd+K' ที่คุณสามารถสั่งให้ AI แก้ไขไฟล์ 5 ไฟล์พร้อมกัน มันสามารถเปิดและแก้โค้ดให้สัมพันธ์กันทั้งโปรเจกต์ได้ ถือเป็นอาวุธลับของ Startup ยุคนี้",
    origin: "สร้างโดย Anysphere ด้วยความเชื่อที่ว่า การพึ่งพาแค่ Extension บน IDE เก่ามีข้อจำกัด จึงสร้าง Editor ตัวใหม่ที่เป็น AI-First",
    category: "Coding & Development",
    priceModel: "Free (จำกัดการเรียกโมเดลเทพ) / Pro $20 ต่อเดือน",
    isFree: true,
    externalUrl: "https://cursor.com",
    rating: 4.9,
    reviewCount: 31000,
    updatedAt: "Feb 2026",
    features: [
      "Cmd+K: ไฮไลต์โค้ด กดคีย์ลัด แล้วพิมพ์สั่งแก้โค้ดตรงนั้นได้เลย",
      "Cursor Composer: แผงควบคุมใหญ่สั่งงานระดับโปรเจกต์ เช่น 'เพิ่มระบบ Login' AI จะร่างไฟล์มาให้ทีเดียว",
      "Codebase Indexing: AI อ่านและจำโค้ดทั้งโปรเจกต์ ถามคำถามข้ามโฟลเดอร์ได้แม่นยำ"
    ],
    pros: [
      "ประสบการณ์ใช้งาน (UX) ไหลลื่นที่สุด สั่งแก้โค้ดได้เร็วเหมือนมีซีเนียร์มานั่งพิมพ์ให้",
      "หน้าตาและคีย์ลัดเหมือน VS Code 100% กดย้ายมาใช้ได้เลย",
      "สามารถเลือกโมเดล AI ตัวท็อปได้ตามใจชอบ (GPT-4o, Claude 3.5 Sonnet)"
    ],
    cons: [
      "แพ็กเกจฟรีให้โควต้าใช้โมเดลระดับสูงน้อยไปหน่อย",
      "การ Indexing โปรเจกต์ขนาดใหญ่อาจจะกินแรมเครื่อง"
    ],
    steps: [
      { title: "ดาวน์โหลดโปรแกรม", desc: "โหลด Cursor มาติดตั้ง (สามารถ Import ตั้งค่าจาก VS Code มาได้เลย)" },
      { title: "เปิดโปรเจกต์", desc: "ลากโฟลเดอร์งานเข้าไป แล้วปล่อยให้ Cursor ทำการ Index โค้ด" },
      { title: "ใช้งาน", desc: "ไฮไลต์โค้ด กด Cmd+K แล้วสั่งให้ AI ปรับแก้โค้ดได้เลย" }
    ],
    prompts: [
      { 
        purpose: "💡 สั่งทำ Refactoring ยกแผง", 
        promptTh: "ฉันต้องการย้ายไปใช้ Tailwind CSS ทั้งหมด ช่วยสแกนไฟล์หน้าเว็บในโฟลเดอร์ /pages แล้วเปลี่ยน Class name ให้เป็น Tailwind คุมโทนสีขาวดำ จัดการแก้ทุกไฟล์ที่เกี่ยวข้องให้หน่อย",
        promptEn: "I want to migrate entirely to Tailwind CSS. Scan all files in /pages and convert styling to Tailwind utility classes. Maintain a minimalist black-and-white aesthetic across all files."
      },
      { 
        purpose: "💡 สั่งสร้าง Component ใหม่", 
        promptTh: "[ไฮไลต์พื้นที่ว่าง]\nสร้าง Navigation Bar ด้านบน ประกอบด้วยโลโก้ ลิงก์เมนู 3 อัน และปุ่ม Login ทำให้เป็นแบบ Responsive ใช้ Next.js และ Tailwind",
        promptEn: "Create a top Navigation Bar component with a logo, 3 menu links, and a Login button. Make it responsive (hamburger menu on mobile). Use Next.js and Tailwind CSS."
      }
    ],
    faqs: [
      { question: "ต้องเลิกใช้ VS Code ไหม?", answer: "สามารถใช้สลับกันได้ครับเพราะไฟล์เซฟที่เดียวกัน แต่ส่วนใหญ่คนที่ลองใช้ Cursor มักจะลบ VS Code ทิ้งเพราะติดใจความไวครับ" }
    ]
  },
  {
    id: "c7",
    slug: "codeium",
    name: "Codeium",
    logoUrl: "/logos/AI-Code/codeium.png",
    description: "ทางเลือกฟรีที่ท้าชน Copilot ปั่นโค้ดไวทะลุนรก รองรับ IDE แทบทุกสำนัก",
    longDescription: "หากไม่อยากเสียเงินรายเดือน Codeium คือของฟรีที่ดีที่สุดในตลาด! เคลมว่าทำงานได้เร็วกว่าคู่แข่ง และมีความแม่นยำสูง ให้ฟีเจอร์ครบทั้ง Autocomplete, แชท และอธิบายโค้ด แถมรองรับ IDE มากกว่า 40 ตัว",
    origin: "พัฒนาโดยทีมวิศวกรเชี่ยวชาญด้าน Deep Learning Infrastructure ทำให้รีดประสิทธิภาพ Latency ให้เสิร์ฟโค้ดได้รวดเร็วปานสายฟ้า",
    category: "Coding & Development",
    priceModel: "Free ตลอดชีพ (รายบุคคล) / Teams $12/เดือน",
    isFree: true,
    externalUrl: "https://codeium.com",
    rating: 4.7,
    reviewCount: 15200,
    updatedAt: "Feb 2026",
    features: [
      "Lightning Fast Autocomplete: เสนอโค้ดล่วงหน้าด้วยความเร็วที่แทบไม่มีดีเลย์",
      "Universal Compatibility: มี Extension รองรับ IDE และ Editor แทบทุกตัวบนโลก",
      "Codeium Chat: หน้าต่างแชทใน IDE ที่ให้ใช้ฟรีแบบไม่มีกั๊กโควต้า"
    ],
    pros: [
      "ของฟรีคุณภาพระดับ Enterprise คุ้มค่าที่สุดสำหรับผู้ใช้งานทั่วไป",
      "ความเร็วในการเสนอโค้ดไวมาก ไม่สะดุด Flow",
      "ติดตั้งง่าย ไม่ต้องผูกบัตรเครดิต"
    ],
    cons: [
      "ความเก่งในการทำความเข้าใจ Context โปรเจกต์ใหญ่ยังตามหลัง Cursor เล็กน้อย",
      "ภาษาที่เฉพาะกลุ่มมากๆ อาจเสนอโค้ดได้ไม่แม่นเท่าภาษาหลัก"
    ],
    steps: [
      { title: "เลือก IDE", desc: "โหลด Extension Codeium ที่ตรงกับโปรแกรมคุณ" },
      { title: "สร้างบัญชี", desc: "สมัครสมาชิกฟรีเพื่อรับสิทธิ์" },
      { title: "เริ่มใช้งาน", desc: "พิมพ์คอมเมนต์หรือฟังก์ชัน AI จะพ่นข้อความสีเทามาให้ กด Tab เพื่อใช้งาน" }
    ],
    prompts: [
      { 
        purpose: "💡 สร้าง API Endpoint อย่างรวดเร็ว (FastAPI)", 
        promptTh: "# สร้าง FastAPI endpoint (GET) ที่ path '/users/{user_id}'\n# ค้นหา user จาก database จำลอง ถ้าไม่เจอโยน Error 404\n# คืนค่าเป็น JSON Pydantic model",
        promptEn: "# Create a FastAPI GET endpoint at '/users/{user_id}'.\n# Search mock DB. If not found, raise HTTP 404.\n# Return serialized Pydantic model."
      },
      { 
        purpose: "💡 ให้ AI เขียน Regex", 
        promptTh: "[เปิดหน้าแชท]\nช่วยเขียน Regex ใน JS สำหรับตรวจสอบ 'รหัสผ่าน' เงื่อนไข: ยาว 8-20 ตัว, มีพิมพ์ใหญ่, พิมพ์เล็ก, ตัวเลข และสัญลักษณ์พิเศษ พร้อมตัวอย่างทดสอบ",
        promptEn: "Write a Regex in JavaScript to validate a password: 8-20 chars, at least 1 uppercase, 1 lowercase, 1 number, and 1 special character. Provide test cases."
      }
    ],
    faqs: [
      { question: "แอบเอาโค้ดเราไปขายไหม?", answer: "Codeium ยืนยันใน Privacy Policy ว่าจะไม่นำโค้ดผู้ใช้รายบุคคลไปฝึกโมเดลครับ เขาหาเงินจากการขายแพ็กเกจ Teams ให้บริษัทแทน" }
    ]
  },
  {
    id: "c8",
    slug: "tabnine",
    name: "Tabnine",
    logoUrl: "/logos/AI-Code/tabnine.png",
    description: "AI คู่ใจองค์กรใหญ่ เน้นความเป็นส่วนตัว รันแบบ Local ได้ ข้อมูลไม่รั่วไหลชัวร์",
    longDescription: "ในโลกธุรกิจที่ Source Code คือความลับ Tabnine จึงเกิดมาปิดจุดอ่อนนี้ มันมีจุดเด่นคือ 'Privacy-First' สามารถรันบนเซิร์ฟเวอร์ส่วนตัว หรือ Local ในเครื่องโปรแกรมเมอร์ได้ โค้ดจะไม่ถูกส่งออกสู่อินเทอร์เน็ต ทำให้องค์กรระดับธนาคารกล้าใช้งาน",
    origin: "หนึ่งในผู้เล่นยุคแรกของ AI Autocomplete มุ่งเป้าเป็นโซลูชันระดับ Enterprise ที่เรียนรู้เฉพาะโค้ดภายในบริษัท",
    category: "Coding & Development",
    priceModel: "Free (Basic) / Pro $12/เดือน / Enterprise",
    isFree: true,
    externalUrl: "https://www.tabnine.com",
    rating: 4.5,
    reviewCount: 4800,
    updatedAt: "Feb 2026",
    features: [
      "Total Privacy: โหมด Local ทำงานออฟไลน์ โค้ดไม่หลุดออกจากเครื่อง",
      "Highly Personalized: เรียนรู้สไตล์การเขียนโค้ดของบริษัท เพื่อแนะนำให้ตรงแพทเทิร์น",
      "Enterprise Ready: มีระบบจัดการสิทธิ์แอดมิน"
    ],
    pros: [
      "ความปลอดภัยสูงสุด ไร้กังวลเรื่องข้อมูลรั่วไหล (Zero Data Retention)",
      "ยิ่งใช้นาน AI ยิ่งปรับตัวเข้ากับสไตล์โค้ดคุณได้ดี",
      "กินทรัพยากรเครื่องน้อยเมื่อเทียบกับตัวอื่น"
    ],
    cons: [
      "ในโหมด Local ความฉลาดจะสู้โมเดลที่รันบน Cloud ไม่ได้ (ได้แค่เติมคำสั้นๆ)",
      "หน้าต่างแชทดูไม่ครบเครื่องเท่าคู่แข่ง"
    ],
    steps: [
      { title: "ติดตั้ง", desc: "โหลด Extension Tabnine ผ่าน IDE" },
      { title: "ตั้งค่า Privacy", desc: "เลือกโหมด Cloud หรือ Local ตามนโยบายบริษัท" },
      { title: "พิมพ์ใช้งาน", desc: "AI จะเรียนรู้สไตล์และเสนอการเติมเต็มคำ" }
    ],
    prompts: [
      { 
        purpose: "💡 เติมแพทเทิร์นโค้ดสไตล์องค์กร", 
        promptTh: "[พิมพ์โครงสร้างนำร่อง]\n// Controller จัดการข้อมูลพนักงาน (อิงสถาปัตยกรรมบริษัท)\nclass EmployeeController { \n  // ฟังก์ชัน Get พนักงานทั้งหมด\n",
        promptEn: "// Employee Data Controller (internal architecture)\nclass EmployeeController { \n  // Fetch all employees\n"
      },
      { 
        purpose: "💡 สร้าง Unit Test ครอบคลุม Edge cases", 
        promptTh: "ช่วยเขียน Unit Test (Jest) สำหรับฟังก์ชันนี้ ขอให้ครอบคลุม Edge cases เช่น ค่าติดลบ ค่าศูนย์ และ Type mismatch",
        promptEn: "Write comprehensive Unit Tests (Jest) for this function. Cover edge cases: negative values, zero, and Type mismatches."
      }
    ],
    faqs: [
      { question: "แบบฟรีทำอะไรได้บ้าง?", answer: "แบบฟรีจะได้แค่ฟีเจอร์ Basic Autocomplete (เดาคำสั้นๆ 1 บรรทัด) ไม่สามารถสั่งสร้างโค้ดทั้งก้อนได้ครับ" }
    ]
  },
  {
    id: "c9",
    slug: "sourcegraph-cody",
    name: "Sourcegraph Cody",
    logoUrl: "/logos/AI-Code/sourcegraph.png",
    description: "นักสืบหาโค้ด AI Agent เก่งที่สุดในการทำความเข้าใจ Codebase ระดับแสนบรรทัด",
    longDescription: "หากต้องรับช่วงต่อโปรเจกต์ที่มีโค้ด 5 แสนบรรทัด Cody คือตัวช่วย! มันใช้เทคโนโลยี RAG เจาะลึกอ่านโครงสร้างไฟล์ทั้งหมด เมื่อถามหาว่าระบบไหนผูกกับ API ตัวไหน มันจะดำน้ำไปดึงไฟล์ที่เกี่ยวข้องมาประกอบร่างเป็นคำตอบให้แม่นยำ",
    origin: "Sourcegraph เป็นบริษัททำระบบค้นหาโค้ดองค์กรมาก่อน พอนำพลังค้นหามาบวกกับ AI จึงเกิดเป็น Cody",
    category: "Coding & Development",
    priceModel: "Free / Pro $9 ต่อเดือน",
    isFree: true,
    externalUrl: "https://sourcegraph.com/cody",
    rating: 4.8,
    reviewCount: 5600,
    updatedAt: "Feb 2026",
    features: [
      "Codebase-Aware Chat: ถามคำถามโดยอิงความรู้จากทั้งโปรเจกต์",
      "Explain Architecture: ให้ AI อธิบายสถาปัตยกรรมรวมของโฟลเดอร์งานได้",
      "One-click Unit Tests: ไฮไลต์โค้ดสั่งสร้างเอกสารหรือ Test ได้แม่นยำ"
    ],
    pros: [
      "สวรรค์ของคนที่ต้องดูแลระบบใหญ่ (Enterprise Monoliths) ย่นเวลาทำความเข้าใจโค้ดเก่าได้มหาศาล",
      "เวลาตอบจะแนบลิงก์อ้างอิงชัดเจนว่าอ่านมาจากไฟล์ไหน บรรทัดไหน",
      "ราคา Pro ถูกมาก คุ้มค่าสุดๆ"
    ],
    cons: [
      "ระบบทำดัชนี (Indexing) สำหรับโปรเจกต์ใหญ่อาจจะใช้เวลาเตรียมตัวนานเล็กน้อย",
      "ไม่ค่อยเห็นความแตกต่างถ้าใช้กับโปรเจกต์เล็กๆ ไฟล์เดียว"
    ],
    steps: [
      { title: "ติดตั้ง", desc: "โหลด Cody เข้า IDE" },
      { title: "Index โค้ด", desc: "เปิดโปรเจกต์รอให้ Cody สแกนโค้ดทั้งหมด" },
      { title: "ถามคำถาม", desc: "เปิดแชทถามถึงระบบโดยรวม AI จะรวบรวมไฟล์มาตอบ" }
    ],
    prompts: [
      { 
        purpose: "💡 อธิบายสถาปัตยกรรมของระบบ", 
        promptTh: "อ้างอิงจาก Codebase ทั้งหมด ช่วยอธิบายว่าระบบ 'ตะกร้าสินค้า' มี Flow อย่างไร เริ่มตั้งแต่คลิกปุ่มไปจนถึงเซฟลง Database มีไฟล์ไหนเกี่ยวข้องบ้าง",
        promptEn: "Based on the codebase, explain the 'Shopping Cart' flow from clicking the button to database persistence. List all involved files."
      },
      { 
        purpose: "💡 วิเคราะห์ผลกระทบก่อนแก้โค้ด (Impact Analysis)", 
        promptTh: "ถ้าฉันแก้ไข Schema ในตาราง 'User_Profile' มันจะส่งผลให้ไฟล์อื่นๆ เช่น Frontend พังไหม? ช่วยลิสต์ไฟล์ที่ต้องตามแก้ให้หน่อย",
        promptEn: "If I modify the 'User_Profile' schema, what other files will break? List all files I need to update."
      }
    ],
    faqs: [
      { question: "Cody รองรับภาษาอะไรบ้าง?", answer: "รองรับทุกภาษาครับ แต่จะทำงานได้เว่อร์ๆ กับภาษาโครงสร้างชัดเจนอย่าง TypeScript, Go, Java และ Python" }
    ]
  },
  {
    id: "c10",
    slug: "phind",
    name: "Phind",
    logoUrl: "/logos/AI-Code/phind.png",
    description: "Search Engine แบบฉบับโปรแกรมเมอร์ หาบั๊กเก่ง มีเหตุผล และอธิบายละเอียดยิบ",
    longDescription: "Phind คือการผสมผสาน Search Engine และ AI สำหรับโปรแกรมเมอร์โดยเฉพาะ! ต่อเน็ตค้นหา Document ล่าสุดของภาษาโปรแกรมมาอ่านแล้วประมวลผลเป็นคำตอบพร้อมโค้ด ชอบอธิบายตรรกะว่าทำไมถึงต้องเขียนโค้ดแบบนี้",
    origin: "สร้างมาเป็นผู้ช่วยไขปัญหาให้ Dev ที่เบื่อเปิดแท็บหาโค้ด 20 หน้า Phind กวาดข้อมูลเว็บท็อปมาสรุปให้หน้าเดียว",
    category: "Coding & Development",
    priceModel: "Free / Pro $20 ต่อเดือน",
    isFree: true,
    externalUrl: "https://www.phind.com",
    rating: 4.8,
    reviewCount: 7100,
    updatedAt: "Feb 2026",
    features: [
      "Developer Search Engine: ถามปัญหาโค้ด ค้นหาเน็ต สรุปและแนบลิงก์ให้",
      "Pair Programmer Mode: โหมดเจาะลึกช่วยคิดและจับผิดโค้ดอย่างมีเหตุผล",
      "VS Code Extension: หาคำตอบใน IDE ได้เลย"
    ],
    pros: [
      "ข้อมูลโคตรอัปเดต เพราะดึงสดจากเน็ต หมดปัญหาโค้ดเก่า",
      "คำอธิบายมีตรรกะ เหมาะกับคนที่ต้องการเรียนรู้ 'ทำไมต้องทำแบบนี้'",
      "ไม่ต้องติดตั้งโปรแกรมก็ใช้งานบนเว็บได้เต็มประสิทธิภาพ"
    ],
    cons: [
      "ประมวลผลนานกว่า ChatGPT เล็กน้อยเพราะต้องค้นเว็บมารวมกัน",
      "ไม่เหมาะสั่งเขียนแอปใหม่ทั้งก้อน เหมาะกับ Debugging มากกว่า"
    ],
    steps: [
      { title: "เปิดเว็บ", desc: "เข้าไปที่ phind.com" },
      { title: "วาง Error", desc: "ก๊อปข้อความ Error แดงๆ จาก Terminal ไปวาง" },
      { title: "อ่านคำตอบ", desc: "Phind จะวิเคราะห์สาเหตุ ให้โค้ดแก้ และอ้างอิง Document" }
    ],
    prompts: [
      { 
        purpose: "💡 ให้ AI ช่วยออกแบบสถาปัตยกรรม", 
        promptTh: "กำลังสร้าง Web App 'สถาบันสอนภาษา' ช่วยแนะนำ Tech Stack ในยุค 2026 พร้อมวิเคราะห์ข้อดีข้อเสียของ Next.js คู่กับ Supabase สำหรับโปรเจกต์นี้",
        promptEn: "Building a 'Language Learning' Web App. Recommend a 2026 Tech Stack. Critically analyze Next.js with Supabase for this use case."
      },
      { 
        purpose: "💡 ให้ AI ช่วยดีบั๊ก Error ร้ายแรง", 
        promptTh: "เจอ Error แบบนี้ตอน Build Next.js: '[วาง Error]' ลองลบ node_modules แล้วก็ไม่หาย เกิดจากอะไรและแก้ยังไง?",
        promptEn: "Encountering this Next.js build error: '[Paste Error]'. Deleted node_modules but persists. Root cause and fix?"
      }
    ],
    faqs: [
      { question: "มีโค้ดลับบริษัท พิมพ์ลง Phind ได้ไหม?", answer: "สามารถปิดสวิตช์ Data Sharing ในตั้งค่าได้ครับ ข้อมูลจะไม่ถูกนำไปเทรน แต่แนะนำให้เซนเซอร์ชื่อเฉพาะไว้ก่อนดีที่สุดครับ" }
    ]
  },

  // ==========================================
  // 🎨 หมวด AI สร้างภาพ (Image Generation)
  // ==========================================
  {
    id: "img1",
    slug: "midjourney",
    name: "Midjourney",
    logoUrl: "/logos/AI-Image/Midjourney.png",
    description: "AI เสกภาพคุณภาพสูงระดับงานศิลป์ สวยสมจริง โทน Cinematic รายละเอียดสุดยอด",
    longDescription: "Midjourney คือราชาแห่งความสวยงามในวงการ AI สร้างภาพ โดดเด่นเรื่องการทำความเข้าใจสุนทรียภาพ แสง เงา และพื้นผิวที่สมบูรณ์แบบ เหมาะที่สุดสำหรับงานโปรดักชัน ทำปกหนังสือ หรืองานกราฟิกที่ต้องการความ Cinematic สมจริงแยกไม่ออกกับรูปถ่าย",
    origin: "ทำงานผ่าน Discord ปัจจุบันเก่งมากเรื่องภาพถ่ายเสมือนจริง (Photorealism) และใส่ตัวหนังสือได้",
    category: "Image Generation",
    priceModel: "Starts at $10/เดือน",
    isFree: false,
    externalUrl: "https://midjourney.com",
    rating: 4.9,
    reviewCount: 35400,
    updatedAt: "Feb 2026",
    features: [
      "Photorealistic & Cinematic: ความสมจริงขั้นสุด แสงเงาระดับสตูดิโอ",
      "Character Reference (--cref): ล็อกหน้าตาตัวละครหรือคัดลอกสไตล์มาใส่รูปใหม่ได้เป๊ะ",
      "Vary (Region): ไฮไลต์แก้ไขรูปเฉพาะจุด (Inpainting) เช่น สั่งเปลี่ยนชุด"
    ],
    pros: [
      "คุณภาพภาพกินขาด AI ทุกตัวบนโลก",
      "ฟีเจอร์ Character Reference ช่วยสร้างคาแรคเตอร์ต่อเนื่องได้ง่าย",
      "คอมมูนิตี้ใหญ่ มี Prompt ให้ศึกษาเยอะ"
    ],
    cons: [
      "ต้องใช้ภาษาอังกฤษเท่านั้นในการสั่ง",
      "ไม่มีโควต้าทดลองใช้ฟรี"
    ],
    steps: [
      { title: "เข้า Discord", desc: "สมัครแพ็กเกจ เข้าห้องแชท Midjourney Bot" },
      { title: "ใช้คำสั่ง", desc: "พิมพ์ /imagine ตามด้วยคำอธิบายภาพภาษาอังกฤษ" },
      { title: "ปรับแต่ง", desc: "กดปุ่ม U เพื่อขยายภาพที่ถูกใจ หรือ V เพื่อสุ่มใหม่ในสไตล์เดิม" }
    ],
    prompts: [
      { 
        purpose: "💡 ภาพถ่ายบุคคลสไตล์ Cinematic", 
        promptTh: "[รับคำสั่งภาษาอังกฤษเท่านั้น]",
        promptEn: "A photorealistic, editorial portrait of a beautiful Asian woman in her mid-20s, wearing a cyberpunk neon jacket. Standing in a rainy Tokyo street. Neon reflections, cinematic lighting, 35mm lens, 8k resolution. --ar 4:5 --style raw --v 6.0"
      },
      { 
        purpose: "💡 ออกแบบโลโก้มินิมอล", 
        promptTh: "[รับคำสั่งภาษาอังกฤษเท่านั้น]",
        promptEn: "A clean minimalist vector logo design for a coffee shop named 'BREW'. Simple geometric coffee cup integrated with a rising sun. Monotone, flat design, white background. --ar 1:1 --no shading --v 6.0"
      }
    ],
    faqs: [
      { question: "ทำยังไงให้หน้าเหมือนเดิมตลอด?", answer: "ใช้ Parameter --cref [ลิงก์รูป] ตามด้วย --cw 100 ครับ" }
    ]
  },
  {
    id: "img2",
    slug: "dall-e-3",
    name: "OpenAI – DALL·E 3",
    logoUrl: "/logos/AI-Image/OpenAI – DALL·E.png",
    description: "Multimodal AI สั่งงานเป็นภาษาไทยได้ เข้าใจ Prompt ซับซ้อนและเขียนตัวอักษรเป๊ะ",
    longDescription: "DALL·E 3 ถูกฝังอยู่ใน ChatGPT ทำให้สั่งวาดรูปเป็นภาษาไทยได้เหมือนคุยกับเพื่อน จุดแข็งคือทำตามคำสั่งที่มีองค์ประกอบยิบย่อยเยอะๆ และสามารถวาด 'ตัวอักษร' ลงบนป้ายหรือเสื้อผ้าได้อย่างแม่นยำ",
    origin: "รวมเข้ากับ ChatGPT Plus โดย ChatGPT แปลงคำสั่งไทยเป็น Prompt อังกฤษที่สมบูรณ์ให้",
    category: "Image Generation",
    priceModel: "รวมอยู่ใน ChatGPT Plus ($20/เดือน)",
    isFree: false,
    externalUrl: "https://openai.com/dall-e-3",
    rating: 4.7,
    reviewCount: 28100,
    updatedAt: "Feb 2026",
    features: [
      "Conversational Editing: สั่งแก้รูปด้วยแชท เช่น 'เปลี่ยนเสื้อเป็นสีแดง'",
      "Text Rendering: เรนเดอร์ตัวหนังสือภาษาอังกฤษลงภาพได้แม่นยำ",
      "Inpainting: มีพู่กันระบายเลือกจุดที่อยากแก้ไขบนภาพได้โดยตรง"
    ],
    pros: [
      "สั่งงานง่ายที่สุด ไม่ต้องจำสูตร Prompt ใช้ภาษาไทยได้",
      "ทำงานร่วมกับฟีเจอร์วิเคราะห์ข้อมูลของ ChatGPT ได้",
      "วาดตัวหนังสือภาษาอังกฤษได้ถูกต้อง"
    ],
    cons: [
      "สไตล์ภาพมักดูเป็น Digital Art ไม่ค่อยสมจริงระดับภาพถ่าย",
      "ระบบเซนเซอร์เข้มงวด ปฏิเสธการวาดภาพคนดังหรือความรุนแรง"
    ],
    steps: [
      { title: "เปิด ChatGPT", desc: "ล็อกอินเข้า ChatGPT Plus" },
      { title: "สั่งวาดรูป", desc: "พิมพ์ภาษาไทย เช่น 'วาดรูปแมวอวกาศ ถือป้าย HELLO'" },
      { title: "ปรับแต่ง", desc: "ระบายจุดที่อยากแก้ หรือพิมพ์สั่งแก้ได้เลย" }
    ],
    prompts: [
      { 
        purpose: "💡 สร้างภาพ Mockup สินค้าพร้อมตัวหนังสือ", 
        promptTh: "ช่วยวาดภาพ Mockup ขวดน้ำหอมมินิมอลบนแท่นหินอ่อน ฉากหลังมีแสงแดดลอดผ่านใบไม้ ฉลากขวดเขียนคำว่า 'ELEGANCE' ฟอนต์หรูหรา โทนสีอบอุ่น อัตราส่วน 16:9",
        promptEn: "Product mockup of a minimalist perfume bottle on marble pedestal. Dappled sunlight background. Label clearly displays 'ELEGANCE' in elegant font. Warm tone, 16:9."
      },
      { 
        purpose: "💡 ภาพประกอบสไตล์ Flat Design", 
        promptTh: "ภาพสไตล์ Flat vector สีสันสดใส พนักงานออฟฟิศนั่งปวดหัวกับเอกสาร มีนาฬิกาจับเวลาด้านหลัง พื้นหลังขาวสะอาด",
        promptEn: "Colorful flat vector illustration of stressed office worker with documents, ticking clock background. Pure white background, corporate Memphis style."
      }
    ],
    faqs: [
      { question: "สั่งวาดตัวหนังสือภาษาไทยได้ไหม?", answer: "ยังเรนเดอร์ฟอนต์ไทยไม่ได้ครับ แนะนำให้สั่งเขียนอังกฤษแล้วไปพิมพ์ไทยทับใน Canva ครับ" }
    ]
  },
  {
    id: "img3",
    slug: "stable-diffusion",
    name: "Stability AI – Stable Diffusion",
    logoUrl: "/logos/AI-Image/Stability AI.png",
    description: "AI สายเปิดกว้าง (Open-source) ปรับแต่งได้อิสระลึกระดับเส้นโครงกระดูก",
    longDescription: "มหาเทพของสายฮาร์ดคอร์ โหลดรันบนการ์ดจอตัวเองฟรีๆ จุดเด่นคือ 'ControlNet' ที่บังคับท่าทาง (Pose) ของตัวละคร หรืออัปโหลดภาพห้องเปล่าแล้วบังคับให้วางเฟอร์นิเจอร์ตามโครงสร้างเป๊ะๆ เหมาะกับสถาปนิก",
    origin: "แจกฟรีโดย Stability AI มีคอมมูนิตี้สร้างโมเดลเฉพาะทางและ LoRA แจกฟรีบน Civitai มหาศาล",
    category: "Image Generation",
    priceModel: "Free (รัน Local เครื่องตัวเอง)",
    isFree: true,
    externalUrl: "https://stability.ai",
    rating: 4.8,
    reviewCount: 19500,
    updatedAt: "Feb 2026",
    features: [
      "ControlNet: ควบคุมท่าทางมนุษย์ เส้นโครงสร้าง และความลึกจากภาพอ้างอิง",
      "LoRA & Fine-tuning: เทรน AI ให้เรียนรู้ใบหน้าคุณหรือสินค้าของคุณเองได้",
      "Uncensored: ไม่มีระบบเซนเซอร์คำสั่ง สร้างสรรค์อิสระ 100%"
    ],
    pros: [
      "อิสระสูงสุด ควบคุมภาพได้ดั่งใจ ไม่ใช่แค่การสุ่ม",
      "โมเดลและส่วนเสริมฟรีนับหมื่นรูปแบบ",
      "รันออฟไลน์ฟรีตลอดชีพ"
    ],
    cons: [
      "UI อย่าง ComfyUI ซับซ้อนมาก มือใหม่ต้องใช้เวลาเรียนรู้สูง",
      "ต้องใช้คอมสเปคแรงมาก (NVIDIA VRAM 8GB ขึ้นไป)"
    ],
    steps: [
      { title: "ดาวน์โหลดโปรแกรม", desc: "ติดตั้ง UI เช่น ComfyUI หรือใช้เว็บบริการคลาวด์" },
      { title: "โหลด Checkpoint", desc: "โหลดสไตล์รูปจากเว็บ Civitai มาติดตั้ง" },
      { title: "รันภาพ", desc: "ใส่ Prompt และตั้งค่า ControlNet แล้วกด Generate" }
    ],
    prompts: [
      { 
        purpose: "💡 Prompt แบบ Tags สำหรับภาพสมจริง", 
        promptTh: "[พิมพ์เป็นกลุ่มคำคั่นด้วยลูกน้ำ]",
        promptEn: "masterpiece, best quality, ultra-detailed, portrait of stunning cyberpunk hacker woman, holographic streetwear, neon city street, 8k uhd, dslr, soft volumetric lighting. \n[Negative]: blurry, ugly, bad anatomy."
      },
      { 
        purpose: "💡 งานเรนเดอร์ตกแต่งภายใน", 
        promptTh: "[ใช้ร่วมกับ ControlNet สายเส้น]",
        promptEn: "interior design, architectural render of modern living room, warm afternoon sunlight, indoor monstera plants, grey sofa, octane render, ray tracing. \n[Negative]: blurry, cartoon, messy."
      }
    ],
    faqs: [
      { question: "คอมไม่แรงใช้ได้ไหม?", answer: "แนะนำให้ไปใช้บริการผ่านเว็บ Third-party ที่รัน Stable Diffusion บน Cloud เช่น Tensor.art หรือ Leonardo.ai ครับ" }
    ]
  },
  {
    id: "img4",
    slug: "adobe-firefly",
    name: "Adobe – Firefly",
    logoUrl: "/logos/AI-Image/Adobe Firefly.png",
    description: "AI สาย Commercial ปลอดภัยเรื่องลิขสิทธิ์ 100% เชื่อมต่อกับ Photoshop โดยตรง",
    longDescription: "เกิดมาเพื่อองค์กรและแบรนด์ใหญ่ จุดขายคือ 'ความปลอดภัยด้านลิขสิทธิ์' ถูกฝึกจาก Adobe Stock เท่านั้น นำไปใช้ทำโฆษณาได้ไม่โดนฟ้อง ฝังเป็นฟีเจอร์ 'Generative Fill' ใน Photoshop ลบคน รีทัชภาพได้เนียนกริบในคลิกเดียว",
    origin: "พัฒนาโดย Adobe ออกแบบให้เป็นเครื่องมือเสริมพลังนักออกแบบ",
    category: "Image Generation",
    priceModel: "รวมอยู่ในแพ็กเกจ Adobe Creative Cloud",
    isFree: false,
    externalUrl: "https://firefly.adobe.com",
    rating: 4.6,
    reviewCount: 12500,
    updatedAt: "Feb 2026",
    features: [
      "Generative Fill: ลบ เติม ขยายขอบภาพใน Photoshop ได้แนบเนียน",
      "Structure Match: อัปโหลดภาพร่างแล้วให้ AI วาดทับตามโครงสร้าง",
      "Text Effects: สร้างกราฟิกตัวหนังสือผิวแปลกๆ เช่น ขนสัตว์ ใบไม้"
    ],
    pros: [
      "ปลอดภัยด้านลิขสิทธิ์ 100% (Commercially Safe)",
      "Generative Fill ใน Photoshop ประหยัดเวลารีทัช 90%",
      "รองรับ Prompt ภาษาไทย"
    ],
    cons: [
      "ความสวยงามของ Text to Image ยังเป็นรอง Midjourney",
      "ความสมจริงของใบหน้ามนุษย์ยังดูเหมือนภาพ Stock Photo"
    ],
    steps: [
      { title: "เปิดโปรแกรม", desc: "ใช้ Photoshop หรือหน้าเว็บ Firefly" },
      { title: "ใช้ Generative Fill", desc: "วงบริเวณที่ต้องการแก้ พิมพ์คำสั่ง เช่น 'ใส่รถสีแดง'" },
      { title: "เลือกผลลัพธ์", desc: "AI จะให้ตัวเลือก 3 แบบ เลือกแบบที่กลืนกับแสงภาพที่สุด" }
    ],
    prompts: [
      { 
        purpose: "💡 ขยายขอบและลบคน (Generative Fill)", 
        promptTh: "ลาก Crop Tool ขยายภาพ -> กด Generative Fill ปล่อยว่างไว้ -> วงคนเดินผ่าน พิมพ์ 'remove person'",
        promptEn: "Expand canvas -> Click Generative Fill -> Leave blank. Lasso a photobomber -> Prompt: 'remove person'."
      },
      { 
        purpose: "💡 พื้นหลังงานโฆษณา (เว็บ Firefly)", 
        promptTh: "พื้นหลังเวที 3D หินอ่อน ป่าดิบชื้นมีหมอก แสงแดดลอดใบไม้ สำหรับวางโฆษณาสกินแคร์ โทนสีเขียวธรรมชาติ",
        promptEn: "3D marble podium background in misty tropical rainforest. Sunbeams filtering. Skincare product advertisement base. Natural green palette."
      }
    ],
    faqs: [
      { question: "ใช้แครดิตฟรีเว็บ ภาพติดลายน้ำไหม?", answer: "มีลายน้ำ Adobe เล็กๆ ครับ ต้องใช้บัญชีเสียเงินถึงโหลดแบบไม่มีลายน้ำได้" }
    ]
  },
  {
    id: "img5",
    slug: "google-imagen",
    name: "Google DeepMind – Imagen 3",
    logoUrl: "/logos/AI-Image/deepmind.png",
    description: "AI สร้างภาพของ Google คมชัดสูง สีสันสมจริงที่สุดในการทำภาพแนว Photorealistic",
    longDescription: "Imagen 3 ใช้งานผ่าน Gemini ทำได้ดีจนน่าขนลุกคือ ภาพถ่ายบุคคลสตรีทสมจริง แสงเงา ริ้วรอยดูเป็นธรรมชาติมากๆ ไม่ติดโทนพลาสติก เรนเดอร์ตัวหนังสือลงป้ายได้แม่นยำ",
    origin: "สร้างโดย DeepMind ผสานเข้ากับ Gemini และ Google Docs เสกภาพประกอบรายงานได้ทันที",
    category: "Image Generation",
    priceModel: "Free (ใช้งานผ่าน Gemini)",
    isFree: true,
    externalUrl: "https://gemini.google.com",
    rating: 4.6,
    reviewCount: 14500,
    updatedAt: "Feb 2026",
    features: [
      "Exceptional Photorealism: ภาพคนสมจริงระดับหลอกตาได้ (Skin texture เนียน)",
      "Accurate Text Generation: พิมพ์สั่งตัวหนังสือลงรูปได้",
      "Gemini Integration: สั่งผ่านแชทด้วยภาษาไทยได้เลย"
    ],
    pros: [
      "แสงเงาดูเป็นธรรมชาติ คล้ายการจัดแสงกล้องโปร",
      "ใช้ฟรีผ่านเว็บ ประมวลผลไว",
      "ทำตามคำสั่ง Prompt ยาวๆ ไม่หลงลืมรายละเอียด"
    ],
    cons: [
      "เซนเซอร์ภาพคนดังหรือภาพดราม่าดุมาก",
      "ยังไม่มีเครื่องมือระบายแก้ไขเฉพาะจุด (Inpainting)"
    ],
    steps: [
      { title: "เปิด Gemini", desc: "เข้าเว็บไซต์ gemini.google.com" },
      { title: "สั่งวาด", desc: "พิมพ์ 'ช่วยวาดภาพ...' ตามด้วยรายละเอียด" },
      { title: "ดาวน์โหลด", desc: "AI ให้ภาพตัวเลือกมา กดดาวน์โหลดได้เลย" }
    ],
    prompts: [
      { 
        purpose: "💡 ภาพสตรีทไลฟ์สมจริง", 
        promptTh: "ภาพถ่าย Portrait ชายชรามีริ้วรอยกำลังยิ้มดื่มกาแฟริมถนนปารีส กล้อง DSLR 85mm หน้าชัดหลังเบลอ แสงแดดเช้าสาดส่อง สมจริงระดับสารคดี",
        promptEn: "Photorealistic portrait of elderly man with detailed facial wrinkles, smiling drinking coffee at Paris cafe. DSLR 85mm, bokeh. Morning sunlight. Documentary style."
      },
      { 
        purpose: "💡 ภาพอาหาร", 
        promptTh: "ภาพถ่ายมุมสูงราเมนต้มยำกุ้งน้ำข้น ควันลอย จัดจานไฟน์ไดนิ่ง ตะเกียบพาดชาม แสงส้มน้ำซุปน่ากิน",
        promptEn: "Top-down food photography of premium Tom Yum Goong ramen. Hot steam. Fine-dining plating, chopsticks resting. Professional lighting, vibrant orange broth."
      }
    ],
    faqs: [
      { question: "วาดรูปคนได้ไหม?", answer: "วาดคนทั่วไปได้สมจริงมากแล้วครับ แต่ยังบล็อกดาราหรือนักการเมืองที่มีอยู่จริง" }
    ]
  },

  // ==========================================
  // 🎬 หมวด AI สร้างวิดีโอ (Video Generation)
  // ==========================================
  {
    id: "vid1",
    slug: "openai-sora",
    name: "OpenAI – Sora",
    logoUrl: "/logos/AI-Video/sora-color.png",
    description: "สุดยอด AI เปลี่ยนข้อความเป็นวิดีโอ สมจริงระดับภาพยนตร์ฮอลลีวูด ความยาว 1 นาทีเต็ม",
    longDescription: "ปรากฏการณ์โลก เสกวิดีโอ 60 วินาทีจาก Text เข้าใจฟิสิกส์ 3 มิติ เมื่อกล้องแพนวัตถุและเงาจะยังอยู่ตำแหน่งเดิม ไม่ละลายหายไป เหมาะทำช็อต B-Roll อลังการ",
    origin: "สร้างโดย OpenAI คุณภาพความเนียนตา (Temporal Consistency) ก้าวกระโดดจากรุ่นก่อนมาก",
    category: "Video & Voice Generation",
    priceModel: "ทดลองเฉพาะกลุ่มนักสร้างสรรค์",
    isFree: false,
    externalUrl: "https://openai.com/sora",
    rating: 4.9,
    reviewCount: 8400,
    updatedAt: "Feb 2026",
    features: [
      "1-Minute Video: สร้างคลิปยาว 1 นาทีแบบตัวละครไม่เปลี่ยนรูปร่าง",
      "Complex Camera Motion: แพนกล้อง โดรนบินวนรอบเมืองสมบูรณ์แบบ",
      "Image to Video: นำภาพนิ่งมาทำให้ขยับสมจริง"
    ],
    pros: [
      "ภาพสวยและมุมกล้องสมจริงที่สุดในตลาด Production-ready",
      "ฉากหลังไม่ละลายเมื่อมีของบัง",
      "ประหยัดงบถ่ายทำช็อตแฟนตาซี"
    ],
    cons: [
      "คนทั่วไปยังเข้าใช้ไม่ได้ง่ายๆ",
      "ยังมีบั๊กฟิสิกส์ซับซ้อน เช่น กินคุกกี้แล้วรอยแหว่งไม่ลด"
    ],
    steps: [
      { title: "เตรียม Prompt", desc: "อธิบายบรรยากาศ มุมกล้อง เคลื่อนไหวให้ชัดเจน" },
      { title: "ป้อนคำสั่ง", desc: "พิมพ์คำสั่งแล้วรอประมวลผล" }
    ],
    prompts: [
      { 
        purpose: "💡 ช็อต B-Roll โดรน", 
        promptTh: "[พิมพ์ภาษาอังกฤษ]",
        promptEn: "Cinematic drone shot flying through a cyberpunk Tokyo covered in glowing neon signs. Heavy rain. Flying cars. 4k, smooth 60fps."
      },
      { 
        purpose: "💡 ซูมมาโคร", 
        promptTh: "[พิมพ์ภาษาอังกฤษ]",
        promptEn: "Extreme close-up of a human eye. Camera zooms deep into iris, transforming into a swirling galaxy. Detailed, seamless transition."
      }
    ],
    faqs: [
      { question: "แยกของจริงกับ Sora ออกไหม?", answer: "OpenAI จะฝัง Watermark ลงทุกคลิปเพื่อป้องกัน Deepfake ครับ" }
    ]
  },
  {
    id: "vid2",
    slug: "runway-gen3",
    name: "Runway – Gen-3 Alpha",
    logoUrl: "/logos/AI-Video/Runway-ai.png",
    description: "AI ผู้สร้างวิดีโอระดับภาพยนตร์ฮอลลีวูด ใช้งานง่าย เครื่องมือควบคุมกล้องละเอียด",
    longDescription: "คู่แข่ง Sora ที่เปิดให้คนทั่วไปใช้งานได้แล้ว เสกภาพเคลื่อนไหวเนียนตาระดับโฆษณา มีฟีเจอร์ Motion Brush ระบายสีเฉพาะจุดให้ขยับ และควบคุมทิศทางกล้องอย่างละเอียด",
    origin: "สร้างโดย RunwayML ที่มุ่งสร้าง Tools ให้นักตัดต่อวิดีโอ",
    category: "Video & Voice Generation",
    priceModel: "Free (จำกัด) / Starts at $15/เดือน",
    isFree: false,
    externalUrl: "https://runwayml.com",
    rating: 4.8,
    reviewCount: 6200,
    updatedAt: "Feb 2026",
    features: [
      "Image-to-Video: โยนภาพนิ่งให้ขยับ",
      "Motion Brush: ระบายสีสั่งน้ำตกให้ไหลแต่วิวอยู่นิ่ง",
      "Lip Sync: นำคลิปหน้าคนมาใส่เสียงให้ปากขยับ"
    ],
    pros: [
      "คนทั่วไปใช้ได้เลย เว็บใช้งานง่ายมาก",
      "ความสมจริงแข่งขันกับตัวท็อปได้สบาย",
      "ควบคุมการขยับเฉพาะจุดได้ดี"
    ],
    cons: [
      "เครดิตหมดไว ต้นทุนเรนเดอร์คลิปแพง",
      "สรีระคนทำแอคชันซับซ้อนยังมีบิดเบี้ยวหลอกตา"
    ],
    steps: [
      { title: "เลือกโหมด", desc: "เข้าระบบ เลือก Gen-3 Alpha" },
      { title: "อัปโหลดภาพ", desc: "แนะนำใช้ภาพนิ่งเป็นสารตั้งต้นดีกว่า Text" },
      { title: "ตั้งค่า", desc: "พิมพ์ Prompt หรือใช้ Motion Brush แล้วกดสร้าง" }
    ],
    prompts: [
      { 
        purpose: "💡 แปลงภาพนิ่งเป็น Cinematic", 
        promptTh: "[อัปโหลดภาพใบหน้า]",
        promptEn: "Subtle motion. Subject gently blinks and slightly turns head. Wind softly blows hair. Film grain, moody lighting, 4k."
      },
      { 
        purpose: "💡 ช็อตแอคชัน", 
        promptTh: "[Text ล้วน]",
        promptEn: "High-speed FPV drone chasing a red sports car drifting through snowy mountain pass. Snow flying. Fast motion blur, highly dynamic."
      }
    ],
    faqs: [
      { question: "ทำไมคลิปสั้นจัง?", answer: "AI เรนเดอร์ทีละ 5-10 วินาทีครับ ต้องนำหลายๆ ช็อตไปต่อกันในโปรแกรมตัดต่ออีกที" }
    ]
  },
  {
    id: "vid3",
    slug: "pika-labs",
    name: "Pika Labs",
    logoUrl: "/logos/AI-Video/Pika.png",
    description: "AI เสกวิดีโอสาย 3D/Anime ใช้งานฟรีง่ายๆ เด่นเรื่องขยับปากและใส่เอฟเฟกต์บึ้มบั้ม",
    longDescription: "ครองใจโซเชียลเพราะแจกเครดิตให้เล่นฟรีทุกวัน เก่งมากด้าน 3D Render และ Anime มี 'Lip Sync' ยัดเสียงให้การ์ตูนขยับปาก และเอฟเฟกต์ (Pikaffects) เช่น บีบอัด หรือระเบิดกระจาย",
    origin: "สร้างโดยนศ. Stanford ให้ใช้งานง่ายและสนุก",
    category: "Video & Voice Generation",
    priceModel: "Free (ให้เครดิตทุกวัน) / $10/เดือน",
    isFree: true,
    externalUrl: "https://pika.art",
    rating: 4.6,
    reviewCount: 5200,
    updatedAt: "Feb 2026",
    features: [
      "Lip Sync: อัปโหลดเสียงให้ตัวละครขยับปาก",
      "Pikaffects: เอฟเฟกต์ระเบิด ละลาย บีบอัด",
      "Modify Region: ตีวงกรอบเปลี่ยนเสื้อผ้าตัวละครขณะวิดีโอเล่น"
    ],
    pros: [
      "ฟรีรายวัน เหมาะทำคอนเทนต์ TikTok",
      "สไตล์ 3D/Anime ขยับลื่นไหลมีเสน่ห์",
      "ทำ Lip Sync จบในเว็บเดียว"
    ],
    cons: [
      "ความสมจริงสู้ Runway ไม่ได้ ภาพจะดูวุ้นๆ",
      "ฉากก้าวเดินหรือหันหน้าพังง่าย"
    ],
    steps: [
      { title: "อัปโหลดภาพ", desc: "กดอัปโหลดรูปที่ Pika.art" },
      { title: "ปรับแต่ง", desc: "เลือกมุมกล้อง ใส่ Prompt เล็กน้อย" },
      { title: "Lip Sync", desc: "พิมพ์บทพูดแล้วกด Generate" }
    ],
    prompts: [
      { 
        purpose: "💡 3D แอนิเมชันน่ารัก", 
        promptTh: "[อัปโหลดภาพ]",
        promptEn: "3D animation, Pixar style. Fluffy ginger kitten in tiny spacesuit, floating clumsily in zero gravity. Cheerful studio lighting."
      },
      { 
        purpose: "💡 เอฟเฟกต์บึ้มบั้ม", 
        promptTh: "[พิมพ์คำสั่ง]",
        promptEn: "The fluffy cake suddenly explodes into colorful confetti. Dynamic motion, slow motion."
      }
    ],
    faqs: [
      { question: "ทำไงให้ภาพไม่พัง?", answer: "เลี่ยงการเห็นขาก้าวเดิน หรือมือจับของ ใช้ช็อตซูมหน้าหรือวิวธรรมชาติจะรอดสุดครับ" }
    ]
  },
  {
    id: "vid4",
    slug: "luma-dream-machine",
    name: "Luma AI",
    logoUrl: "/logos/AI-Video/Luma AI.png",
    description: "AI เสกวิดีโอตัวตึงน้องใหม่ เด่นเรื่องกล้อง 3D เคลื่อนไหวรวดเร็วและสมจริงทะลุจอ",
    longDescription: "บริษัททำ 3D Capture ที่ทำ AI Video ได้เก่งเรื่อง 'ความมีมิติ' ที่สุด สามารถทำช็อตกล้องบินโฉบไปมา เคลื่อนไหวรวดเร็วดุดัน และเปลี่ยนฉากมุมกล้องได้เนียน สร้างคลิปไว ท้าชน Runway สบาย",
    origin: "จากทีมสาย 3D เน้นความเข้าใจสเปซของโลกจริง",
    category: "Video & Voice Generation",
    priceModel: "Free (30 คลิป/เดือน) / $29/เดือน",
    isFree: true,
    externalUrl: "https://lumalabs.ai/dream-machine",
    rating: 4.7,
    reviewCount: 4300,
    updatedAt: "Feb 2026",
    features: [
      "Dynamic Camera Angles: จำลองมุมกล้อง Action ทะยานไปข้างหน้า",
      "Keyframe Control: กำหนดภาพหัว-ท้าย ให้ AI โยงคลิปให้",
      "High-speed Generation: สร้างคลิป 5 วินาทีใน 2 นาที"
    ],
    pros: [
      "มิติภาพและความลึก (Depth) สวยงาม วิดีโอไม่แบน",
      "ให้โควต้าฟรีรายเดือนเยอะ (30 คลิป)",
      "ฟีเจอร์ Keyframing ช่วยคุมเนื้อเรื่องได้เป๊ะ"
    ],
    cons: [
      "เวลาคนใช้เยอะ คิวฟรีจะรอนาน",
      "การขยับสรีระคนยังหลอกตาบ้าง"
    ],
    steps: [
      { title: "ล็อกอิน", desc: "ผูกบัญชี Google" },
      { title: "กำหนดภาพ", desc: "อัปโหลดภาพ Start / End" },
      { title: "สั่งงาน", desc: "พิมพ์อธิบายทิศทางกล้องแล้วกดสร้าง" }
    ],
    prompts: [
      { 
        purpose: "💡 กล้องโดรนดุดัน", 
        promptTh: "[ภาษาอังกฤษ]",
        promptEn: "FPV drone view. Camera flies aggressively down steep mountain waterfall. Water splashes on lens. Fast-paced action."
      },
      { 
        purpose: "💡 เพิ่มมิติลึกให้ภาพ", 
        promptTh: "[อัปโหลดภาพห้อง]",
        promptEn: "Camera slowly glides forward through room, focusing on coffee table while background blurs. Cinematic tracking shot."
      }
    ],
    faqs: [
      { question: "คลิปสั้นไปยืดได้ไหม?", answer: "มีปุ่ม 'Extend' ให้ต่อยอดทีละ 5 วิไปเรื่อยๆ ครับ" }
    ]
  },

  // ==========================================
  // 📊 หมวด AI วิเคราะห์ข้อมูล (Data & Analytics)
  // ==========================================
  {
    id: "da1",
    slug: "power-bi",
    name: "Microsoft Power BI (Copilot)",
    logoUrl: "/logos/AI-Data/Power BI.png",
    description: "แพลตฟอร์ม BI อันดับ 1 มี AI ช่วยเสกกราฟและเขียนสูตร DAX ให้ในพริบตา",
    longDescription: "แพลตฟอร์ม Data Analytics คู่โลกธุรกิจ มี Copilot ช่วยสร้าง Dashboard เขียนสูตร DAX และอ่านกราฟสรุป Executive Summary (Smart Narrative) ให้อัตโนมัติ",
    origin: "พัฒนาโดย Microsoft ทำงานร่วมกับ Excel/Azure",
    category: "Data & Analytics",
    priceModel: "Desktop โหลดฟรี / Pro $10/เดือน",
    isFree: false,
    externalUrl: "https://powerbi.microsoft.com",
    rating: 4.8,
    reviewCount: 22100,
    updatedAt: "Feb 2026",
    features: [
      "Copilot Dashboard Creation: สั่งสร้างหน้ารายงานอัตโนมัติ",
      "DAX Copilot: ผู้ช่วยเขียนและอธิบายสูตรคำนวณ",
      "Smart Narrative: AI อ่านข้อมูลแล้วพิมพ์สรุปประเด็นให้"
    ],
    pros: [
      "เชื่อม Data Source ได้แทบทุกแบบ",
      "แชร์รีพอร์ตผ่าน Teams สะดวก",
      "โปรแกรม Desktop ฟรี 100%"
    ],
    cons: [
      "Copilot ตัวเต็มสงวนไว้สำหรับไลเซนส์ Premium หรือ Fabric",
      "Data Modeling ต้องวาง Star Schema ให้ถูกไม่งั้น AI ดึงมั่ว"
    ],
    steps: [
      { title: "เตรียมข้อมูล", desc: "นำเข้าและคลีนข้อมูลผ่าน Power Query" },
      { title: "สั่ง Copilot", desc: "พิมพ์อธิบายกราฟให้ AI เสกมาวาง" },
      { title: "ปรับแต่ง", desc: "เพิ่ม Smart Narrative สรุปผล" }
    ],
    prompts: [
      { 
        purpose: "💡 ร่างสูตร DAX วิเคราะห์ยอดขาย", 
        promptTh: "ช่วยเขียนสูตร DAX คำนวณ 'ยอดขายสะสม YTD' กรองเฉพาะรถ 'Hybrid' สถานะ 'Delivered'",
        promptEn: "Write a DAX measure for 'YTD Sales' from Toyota dataset. Filter for 'Hybrid' and 'Delivered' status only."
      },
      { 
        purpose: "💡 สร้างหน้า Dashboard", 
        promptTh: "สร้างหน้ารายงานวิเคราะห์ยอดขายรายสาขา โชว์ Total Revenue, YoY Growth และกราฟเส้นรายเดือน",
        promptEn: "Create a report analyzing regional sales. Highlight Total Revenue, YoY Growth by branch, and a monthly trend line chart."
      }
    ],
    faqs: [
      { question: "ทำไมใช้ Copilot ไม่ได้?", answer: "ต้องให้ Admin องค์กรเปิดสิทธิ์ และอยู่ใน Workspace ที่รองรับ Premium ครับ" }
    ]
  },
  {
    id: "da2",
    slug: "tableau-ai",
    name: "Tableau (Einstein Copilot)",
    logoUrl: "/logos/AI-Data/Tableau.png",
    description: "แพลตฟอร์ม BI ระดับ Advanced โดดเด่นเรื่อง Data Visualization กราฟสวยยืดหยุ่นสูง",
    longDescription: "ราชาแห่ง Visualization มี 'Einstein Copilot' (Salesforce) มาช่วยทำ Tableau Pulse ย่อยข้อมูลส่งอีเมล และฟีเจอร์ Ask Data พิมพ์ถามหากราฟได้ทันที",
    origin: "ถูก Salesforce เข้าซื้อกิจการ นำขุมพลัง Einstein มาช่วย",
    category: "Data & Analytics",
    priceModel: "Starts at $15/user/month",
    isFree: false,
    externalUrl: "https://www.tableau.com/products/tableau-ai",
    rating: 4.8,
    reviewCount: 18500,
    updatedAt: "Feb 2026",
    features: [
      "Tableau Pulse: ย่อยข้อมูลส่ง Insights ประจำวัน",
      "Ask Data: พิมพ์คำถามหาตัวเลข ระบบเสกกกราฟให้",
      "Einstein Copilot: ช่วยเขียน Calculated Field ซับซ้อน"
    ],
    pros: [
      "กราฟสวยงามและยืดหยุ่นที่สุด",
      "AI ช่วยหาเหตุผลที่ยอดขายตกได้",
      "รองรับ Big Data ลื่นไหล"
    ],
    cons: [
      "ราคาระดับองค์กรค่อนข้างสูง",
      "Learning Curve สูงกว่า Power BI สำหรับมือใหม่"
    ],
    steps: [
      { title: "เชื่อมต่อ Data", desc: "นำเข้าข้อมูลเข้า Tableau" },
      { title: "ตั้งค่า Pulse", desc: "เลือกตัวชี้วัดให้ AI เฝ้าระวัง" },
      { title: "Ask Data", desc: "พิมพ์คำถามเจาะลึกกับบอท" }
    ],
    prompts: [
      { 
        purpose: "💡 ให้เขียน Calculated Field", 
        promptTh: "ช่วยเขียนสูตรแบ่งกลุ่มลูกค้า ถ้ายอดซื้อ > 100k เป็น VIP, 50k-100k เป็น Gold",
        promptEn: "Write calculated field: IF Sales > 100k return 'VIP', ELSE IF 50k-100k return 'Gold', ELSE 'Standard'."
      },
      { 
        purpose: "💡 Ask Data", 
        promptTh: "Show me bar chart comparing Total Profit by Category for last 12 months.",
        promptEn: "Show me bar chart comparing Total Profit by Category for last 12 months."
      }
    ],
    faqs: [
      { question: "มีให้เด็กลองใช้ไหม?", answer: "มี Tableau Public ฟรีครับ แต่ข้อมูลจะพับลิคบนเน็ต" }
    ]
  },
  {
    id: "da3",
    slug: "google-looker",
    name: "Google Looker",
    logoUrl: "/logos/AI-Data/google-looker.png",
    description: "Cloud BI ระดับ Enterprise เชื่อมต่อ BigQuery ได้แนบเนียน พร้อม Gemini AI",
    longDescription: "Cloud-Native BI จาก Google ที่วิ่งคิวรีข้อมูลสดๆ (In-database) บน BigQuery ตอนนี้มี Gemini ช่วยเขียนโค้ด LookML และตอบคำถามเป็นกราฟ ทำให้ Data Analyst ทำงานไวขึ้น",
    origin: "Google เข้าซื้อกิจการ เน้นเจาะองค์กรที่ใช้ GCP",
    category: "Data & Analytics",
    priceModel: "Enterprise Pricing",
    isFree: false,
    externalUrl: "https://cloud.google.com/looker",
    rating: 4.6,
    reviewCount: 8200,
    updatedAt: "Feb 2026",
    features: [
      "Gemini in Looker: AI ช่วยร่างโค้ด LookML",
      "Conversational BI: แชทสั่งวาด Dashboard",
      "Real-time Querying: ดึงข้อมูลสด ไม่คอขวดตอนดูดข้อมูล"
    ],
    pros: [
      "เก่งเรื่อง Data Governance (มองเห็นความจริงชุดเดียวกัน)",
      "ทำงานคู่ BigQuery ได้เร็วที่สุด",
      "ไม่เปลืองพื้นที่เก็บข้อมูลซ้ำซ้อน"
    ],
    cons: [
      "ต้องเรียนรู้ภาษา LookML เพิ่ม",
      "จัดหน้า Dashboard ไม่ยืดหยุ่นเท่า Tableau"
    ],
    steps: [
      { title: "เชื่อมต่อ", desc: "ต่อกับ BigQuery" },
      { title: "สร้าง LookML", desc: "ให้ Gemini เขียนโครงสร้างตาราง" },
      { title: "Explore", desc: "คลิกเลือกมิติข้อมูลเพื่อออกรีพอร์ต" }
    ],
    prompts: [
      { 
        purpose: "💡 ร่างโค้ด LookML", 
        promptTh: "สร้างโค้ด LookML สำหรับ 'sales_transactions' สร้าง Dimension วันที่และสาขา พร้อม Measure ยอดรวมและยอดเฉลี่ย",
        promptEn: "Generate LookML for 'sales_transactions' view. Dimensions: date, branch. Measures: total and average sales."
      },
      { 
        purpose: "💡 Conversational BI", 
        promptTh: "Top 5 marketing channels by ROI for Q3? Show as pie chart.",
        promptEn: "Top 5 marketing channels by ROI for Q3? Show as pie chart."
      }
    ],
    faqs: [
      { question: "ต่างกับ Looker Studio ยังไง?", answer: "Studio คือตัวลากวางฟรี Looker คือตัวเต็มระดับ Enterprise ที่มี LookML ครับ" }
    ]
  },
  {
    id: "da4",
    slug: "qlik-sense",
    name: "Qlik Sense",
    logoUrl: "/logos/AI-Data/Qlik sense.png",
    description: "BI สาย Augmented Analytics ที่มี AI ช่วยเสาะหา Insight ซ่อนอยู่อัตโนมัติ",
    longDescription: "โดดเด่นด้วย 'Associative Engine' เชื่อมข้อมูลแบบใยแมงมุม ไฮไลต์สิ่งที่เกี่ยวและทำสีเทาสิ่งที่ไม่เกี่ยว AI (Insight Advisor) จะคอยสแกนหา Anomaly แจ้งเตือนขึ้นมาเองโดยไม่ต้องถาม",
    origin: "ตำนานวงการ BI จากสวีเดน เน้น Decision Intelligence",
    category: "Data & Analytics",
    priceModel: "Starts at $20/user/month",
    isFree: false,
    externalUrl: "https://www.qlik.com/us/products/qlik-sense",
    rating: 4.5,
    reviewCount: 6800,
    updatedAt: "Feb 2026",
    features: [
      "Associative Engine: คลิกกรองอิสระ หา Insight ที่คาดไม่ถึง",
      "Insight Advisor: แนะนำกราฟและแจ้งเตือนความผิดปกติ",
      "AutoML: ฟีเจอร์พยากรณ์ฝังในตัว"
    ],
    pros: [
      "Automated Insights วิเคราะห์ลึกและเก่งมาก",
      "ทำงานเร็วแม้บนมือถือ",
      "โครงสร้างข้อมูลยืดหยุ่น"
    ],
    cons: [
      "UI ดูไม่โมเดิร์นเท่ารุ่นใหม่ๆ",
      "Data Load Script มีไวยากรณ์เฉพาะตัว"
    ],
    steps: [
      { title: "โหลดข้อมูล", desc: "นำเข้าสู่ระบบ" },
      { title: "ตรวจสอบ Insight", desc: "เปิดดู AI แนะนำความผิดปกติ" },
      { title: "คลิกวิเคราะห์", desc: "คลิกจุดในกราฟเพื่อกรองแบบไดนามิก" }
    ],
    prompts: [
      { 
        purpose: "💡 หา Anomaly", 
        promptTh: "วิเคราะห์ยอดขาย Q4 เทียบ Q3 หาความผิดปกติที่ยอดตกอย่างมีนัยสำคัญ",
        promptEn: "Analyze Q4 vs Q3 sales. Identify significant anomalies or sharp declines."
      },
      { 
        purpose: "💡 แนะนำกราฟ", 
        promptTh: "อยากเทียบ 'ค่าโฆษณา' กับ 'ลูกค้าใหม่' ใช้กราฟแบบไหนดี ช่วยสร้างให้ดูหน่อย",
        promptEn: "Compare 'Ad Spend' and 'New Customers'. Suggest and generate best visualization."
      }
    ],
    faqs: [
      { question: "Associative ดีกว่า SQL ตรงไหน?", answer: "มันเก็บข้อมูลที่ไม่ตรงเงื่อนไขไว้เป็นสีเทา ทำให้เราเห็นว่าใคร 'ไม่ได้ซื้อ' ซึ่งเป็น Insight ล้ำค่าครับ" }
    ]
  },
  {
    id: "da5",
    slug: "datarobot",
    name: "DataRobot",
    logoUrl: "/logos/AI-Data/Datarobot.png",
    description: "แพลตฟอร์ม AutoML ระดับท็อป สร้างและเทรนโมเดล ML ได้อัตโนมัติ ไม่ต้องโค้ดเยอะ",
    longDescription: "โยน Dataset เข้าไป เลือกคอลัมน์เป้าหมาย DataRobot จะวิ่งเอาร้อยโมเดลมาแข่งกันหาตัวที่แม่นสุด (Leaderboard) พร้อมจูนและอธิบายเหตุผลให้ด้วย",
    origin: "สร้างมาเพื่อ AI Democratization ลดเวลาทำโมเดลจากเดือนเหลือชั่วโมง",
    category: "Data & Analytics",
    priceModel: "Enterprise Subscription",
    isFree: false,
    externalUrl: "https://www.datarobot.com",
    rating: 4.7,
    reviewCount: 3400,
    updatedAt: "Feb 2026",
    features: [
      "Leaderboard: รันแข่งและจัดอันดับโมเดล",
      "Explainable AI: อธิบายว่าโมเดลตัดสินใจยังไง (ไม่เป็น Blackbox)",
      "1-Click Deploy: สร้าง API ใช้งานจริงได้เลย"
    ],
    pros: [
      "ประหยัดเวลา Time to Value มหาศาล",
      "ระบบ Explainability ยอดเยี่ยม นำไปอธิบายผู้บริหารได้",
      "เฝ้าระวัง Data Drift ได้ดี"
    ],
    cons: [
      "ราคาแพงมาก เหมาะกับระดับองค์กร",
      "ผู้ใช้ควรมีความรู้สถิติพื้นฐาน"
    ],
    steps: [
      { title: "อัปโหลด Data", desc: "นำเข้าชุดข้อมูลลูกค้า" },
      { title: "เลือก Target", desc: "ระบุคอลัมน์ที่ต้องการพยากรณ์" },
      { title: "Start", desc: "รอโมเดลแข่งกัน แล้วเลือกตัวชนะ" }
    ],
    prompts: [
      { 
        purpose: "💡 อธิบายโมเดล", 
        promptTh: "อธิบาย XGBoost ตัวนี้ว่าตัวแปรไหนมีผลสุดให้ลูกค้ายกเลิกบริการ และควรแก้ตรงไหน",
        promptEn: "Based on report, what top features drive churn in this XGBoost model? Provide business recommendations."
      },
      { 
        purpose: "💡 ประเมินความเสี่ยงอคติ", 
        promptTh: "สแกนโมเดล Credit Scoring ว่ามีอคติต่อ 'เพศ' หรือ 'พื้นที่' ไหม ขอรายงานละเอียด",
        promptEn: "Assess this Credit Scoring model for unintended bias regarding 'Gender' or 'Region'. Generate report."
      }
    ],
    faqs: [
      { question: "แย่งงาน Data Scientist ไหม?", answer: "เป็นเหมือนชุด Iron Man ให้ทำงานเร็วขึ้น เอาเวลาไปคิดโจทย์ธุรกิจยากๆ แทนครับ" }
    ]
  },
  {
    id: "da6",
    slug: "h2o-ai",
    name: "H2O.ai (Driverless AI)",
    logoUrl: "/logos/AI-Data/H2O.png",
    description: "แพลตฟอร์ม AutoML ระดับเทพ โดดเด่นสุดๆ เรื่อง Feature Engineering อัตโนมัติ",
    longDescription: "คู่แข่ง DataRobot ที่โหดจัดเรื่อง 'Auto Feature Engineering' สร้างตัวแปรทางคณิตศาสตร์แปลกๆ ให้โมเดลฉลาดขึ้นเอง เหมาะกับงานสแกนทุจริต (Fraud Detection)",
    origin: "สร้างโดยทีม Kaggle Grandmaster เอาเทคนิคลับชนะแข่งมาใส่โปรแกรม",
    category: "Data & Analytics",
    priceModel: "Enterprise License",
    isFree: false,
    externalUrl: "https://h2o.ai",
    rating: 4.7,
    reviewCount: 2900,
    updatedAt: "Feb 2026",
    features: [
      "Auto Feature Engineering: สกัดและแปลงตัวแปรขั้นสูงอัตโนมัติ",
      "Time Series & NLP: พยากรณ์อนุกรมเวลาเก่ง",
      "Auto Doc: พิมพ์รายงานอธิบายโมเดล 40 หน้าในคลิกเดียว"
    ],
    pros: [
      "ความแม่นยำสูงมาก เพราะ Feature ลึกซึ้ง",
      "รัน Big Data บน GPU ไว",
      "มีเวอร์ชัน Open-source (H2O-3) ให้ใช้ฟรี"
    ],
    cons: [
      "UI สายเทคนิคไปหน่อย",
      "ตัวแปรที่สร้างมาอธิบายยากเพราะซับซ้อนไป"
    ],
    steps: [
      { title: "Ingest Data", desc: "นำเข้าข้อมูล Transactions" },
      { title: "ตั้งค่า Experiment", desc: "ตั้งเวลาความละเอียดการรัน" },
      { title: "Deploy", desc: "ส่งออกไฟล์ MOJO ไปรันตรวจจับ" }
    ],
    prompts: [
      { 
        purpose: "💡 แนะนำ Feature", 
        promptTh: "ทำ Fraud Detection ข้อมูลบัตรรูด ช่วยแนะนำ Feature Engineering ล้ำๆ หน่อย เช่น รูดถี่ใน 1 ชม.",
        promptEn: "Building Fraud pipeline. Suggest advanced Feature Engineering techniques (e.g., frequency within 1 hr)."
      },
      { 
        purpose: "💡 Auto Doc", 
        promptTh: "[ฟีเจอร์ในแอป] Generate Model Experiment Report documenting preprocessing and LightGBM metrics.",
        promptEn: "[In-app] Generate Model Experiment Report documenting preprocessing and LightGBM metrics."
      }
    ],
    faqs: [
      { question: "MOJO คืออะไร?", answer: "แพ็กเกจส่งออกโมเดลขนาดเล็กเบา รันพยากรณ์ได้ระดับเสี้ยววินาทีครับ" }
    ]
  },
  {
    id: "da7",
    slug: "amazon-sagemaker",
    name: "Amazon SageMaker",
    logoUrl: "/logos/AI-Data/amazon-sagemaker.png",
    description: "แพลตฟอร์มสร้าง เทรน และปล่อยโมเดล ML ระดับ Production แบบครบวงจรจาก AWS",
    longDescription: "IDE ของ ML Engineer ครอบคลุมตั้งแต่ดึงข้อมูล เทรนโมเดล จนถึง Deploy ขึ้นเซิร์ฟเวอร์สเกลโลก มี JumpStart ให้โหลด Foundation Models มากดรันได้เลย",
    origin: "รวมเครื่องมือ AI ของ AWS ให้จบในระบบเดียว",
    category: "Data & Analytics",
    priceModel: "Pay-as-you-go",
    isFree: false,
    externalUrl: "https://aws.amazon.com/sagemaker/",
    rating: 4.7,
    reviewCount: 11200,
    updatedAt: "Feb 2026",
    features: [
      "Studio Notebook: IDE บนเบราว์เซอร์",
      "JumpStart: โหลด Llama, Stable Diffusion มากดรันได้",
      "Model Monitor: แจ้งเตือน Data Drift"
    ],
    pros: [
      "ยืดหยุ่น จะเขียนโค้ดดิบหรือใช้ AutoML ก็ได้",
      "ต่อ S3, Redshift เนียน",
      "เช่า GPU ชั่วคราวได้ไม่ต้องซื้อเอง"
    ],
    cons: [
      "ตั้งค่า IAM/Network ซับซ้อนตามสไตล์ AWS",
      "ถ้าลืมปิดเซิร์ฟเวอร์ บิลจะแพงกระฉูด"
    ],
    steps: [
      { title: "เปิด Studio", desc: "สร้าง Notebook ดึง S3" },
      { title: "เทรน", desc: "เขียน Python รันโมเดล" },
      { title: "Deploy", desc: "สร้าง Endpoint ให้แอปหน้าบ้านเรียก" }
    ],
    prompts: [
      { 
        purpose: "💡 สคริปต์เทรนและเซฟ", 
        promptTh: "เขียนสคริปต์ Python รัน Scikit-Learn บน SageMaker ดึง data จาก S3 เทรนเสร็จเซฟ .tar.gz กลับ S3",
        promptEn: "Write Python script for Scikit-Learn job on SageMaker. Pull data from S3, save model.tar.gz back to S3."
      },
      { 
        purpose: "💡 Deploy Llama", 
        promptTh: "ขอโค้ด Boto3 Deploy Llama 3 ผ่าน JumpStart และแนะนำ Instance Type ที่เหมาะ",
        promptEn: "Provide Boto3 code to deploy Llama 3 via JumpStart. Recommend Instance Type."
      }
    ],
    faqs: [
      { question: "ทำ Pipeline ได้ไหม?", answer: "ได้ครับ ฟีเจอร์ SageMaker Pipelines ตอบโจทย์ ML Ops เต็มรูปแบบ" }
    ]
  },
  {
    id: "da8",
    slug: "google-vertex-ai",
    name: "Google Vertex AI",
    logoUrl: "/logos/AI-Data/vertex_ai.png",
    description: "แพลตฟอร์มศูนย์รวมพลัง AI ทำ ML และ Generative AI ในที่เดียวบน GCP",
    longDescription: "รวมเครื่องมือ AI ของ Google ไว้ในที่เดียว มี Generative AI Studio ให้เอา Gemini มา Fine-tune เป็นบอทบริษัท และมี AutoML วิดีโอ/รูปภาพขั้นเทพ",
    origin: "รวมร่าง AutoML และ AI Platform ของ GCP",
    category: "Data & Analytics",
    priceModel: "Pay-as-you-go",
    isFree: false,
    externalUrl: "https://cloud.google.com/vertex-ai",
    rating: 4.8,
    reviewCount: 9400,
    updatedAt: "Feb 2026",
    features: [
      "Generative AI Studio: สนามทดลองแต่ง Prompt และจูน Gemini",
      "AutoML: เทรนโมเดลจำแนกรูป/ข้อความแม่นยำ",
      "Feature Store: คลังจัดเก็บตัวแปรกลางของทีม"
    ],
    pros: [
      "เข้าถึง Gemini 1.5 Pro ผ่าน API เสถียร",
      "ทำงานร่วมกับ BigQuery สั่งเรียก AI ผ่าน SQL ได้เลย",
      "UI ใช้ง่ายกว่าฝั่ง AWS"
    ],
    cons: [
      "Fine-tune โมเดลใหญ่ราคาแรง",
      "อัปเดตไวเกิน Document ตามไม่ทัน"
    ],
    steps: [
      { title: "เลือกงาน", desc: "ใช้โมเดลสำเร็จ หรือเทรนเอง" },
      { title: "Tuning", desc: "สอน Gemini ให้ตอบสไตล์บริษัท" },
      { title: "API", desc: "นำไปต่อ Web App" }
    ],
    prompts: [
      { 
        purpose: "💡 ดึงข้อมูลใบเสร็จ", 
        promptTh: "ขอโค้ด Python เรียก Vertex AI (Gemini) สกัด 'ชื่อ' และ 'ยอดเงิน' จากไฟล์ PDF",
        promptEn: "Python code via Vertex AI to extract 'Name' and 'Amount' from PDF receipts."
      },
      { 
        purpose: "💡 BigQuery ML", 
        promptTh: "เขียน SQL ดึงโมเดล Vertex มาวิเคราะห์ Sentiment รีวิวลูกค้าใน BigQuery",
        promptEn: "SQL in BigQuery using ML.GENERATE_TEXT with Vertex AI to analyze customer review sentiment."
      }
    ],
    faqs: [
      { question: "ข้อมูลหลุดไหม?", answer: "Enterprise License การันตีข้อมูลคุณไม่ถูกนำไปฝึกโมเดลสาธารณะครับ" }
    ]
  },
  {
    id: "da9",
    slug: "databricks",
    name: "Databricks",
    logoUrl: "/logos/AI-Data/Databricks.png",
    description: "แพลตฟอร์ม Lakehouse ระดับเทพ รวมงาน Data Engineering และ AI ไว้ในระบบเดียว",
    longDescription: "บุกเบิก 'Lakehouse' ขับเคลื่อนด้วย Apache Spark ประมวลผล Big Data ไวมาก มี Databricks IQ (AI) ช่วยเขียนโค้ด Spark/SQL ให้ทีม Data Engineer",
    origin: "สร้างโดยผู้สร้าง Apache Spark ทลายกำแพงระหว่าง Engineer กับ Analyst",
    category: "Data & Analytics",
    priceModel: "Consumption-based (DBU)",
    isFree: false,
    externalUrl: "https://www.databricks.com",
    rating: 4.8,
    reviewCount: 15400,
    updatedAt: "Feb 2026",
    features: [
      "Spark Engine: ทำ Pipeline ใหญ่เสถียร",
      "Databricks IQ: AI ผู้ช่วยเขียน PySpark",
      "Delta Lake: โครงสร้างเก็บข้อมูลย้อน Time Travel ได้"
    ],
    pros: [
      "ตอบโจทย์ Pipeline ซับซ้อน (เช่น Fraud)",
      "ทำลายไซโลข้อมูล ดึงจากจุดเดียว",
      "เขียน Python, SQL, Scala ใน Notebook เดียวกัน"
    ],
    cons: [
      "ตั้งค่า Cluster ต้องการความรู้ Cloud สูง",
      "ลืมปิด Cluster จะแพงมาก"
    ],
    steps: [
      { title: "เปิด Cluster", desc: "สร้างเซิร์ฟเวอร์" },
      { title: "Notebook", desc: "เขียน PySpark คลีนข้อมูล" },
      { title: "Job", desc: "ตั้งเวลารันอัตโนมัติ" }
    ],
    prompts: [
      { 
        purpose: "💡 ร่าง PySpark", 
        promptTh: "เขียน PySpark อ่าน CSV, จัดการ Null, แปลงวันที่, กรองยอด > 50k แล้วเซฟลง Delta Table",
        promptEn: "PySpark to read CSV, handle Nulls, format date, filter amount > 50000, and write to Delta Table."
      },
      { 
        purpose: "💡 Optimize", 
        promptTh: "โค้ด PySpark .join() นี้ช้ามาก แนะนำเทคนิคแก้ให้หน่อย เช่น Broadcast Join",
        promptEn: "PySpark `.join()` is slow. Suggest and implement optimizations like Broadcast Joins."
      }
    ],
    faqs: [
      { question: "ใช้จัดพอร์ตได้ไหม?", answer: "มี 'Community Edition' ให้ทำพอร์ตฟรีครับ" }
    ]
  },
  {
    id: "da10",
    slug: "snowflake",
    name: "Snowflake",
    logoUrl: "/logos/AI-Data/snowflake.png",
    description: "Cloud Data Platform สุดล้ำ คิวรีข้อมูลไวด้วยสถาปัตยกรรมแยก Compute และ Storage",
    longDescription: "Data Warehouse ขั้นเทพ แยกที่เก็บและประมวลผล ขยายเซิร์ฟเวอร์ได้ทันที มี 'Snowflake Cortex' ฝัง AI LLM สั่งแปล วิเคราะห์ข้อความในตารางด้วย SQL ได้เลย",
    origin: "Cloud-native แก้ปัญหาคอขวดระบบเก่า",
    category: "Data & Analytics",
    priceModel: "Pay-as-you-go",
    isFree: false,
    externalUrl: "https://www.snowflake.com",
    rating: 4.8,
    reviewCount: 16800,
    updatedAt: "Feb 2026",
    features: [
      "Separated Architecture: สเกลอิสระ ระบบไม่ค้าง",
      "Cortex AI: AI สำเร็จรูปฝังในระบบสั่งผ่าน SQL",
      "Data Sharing: แชร์ตารางข้ามบริษัท Real-time"
    ],
    pros: [
      "Zero Management ดูแลง่าย",
      "SQL เร็วทะลุโลก",
      "Analyst ใช้ AI กับตารางได้เลย"
    ],
    cons: [
      "คิวรีมั่วๆ กิน Credit เยอะ",
      "งาน Pipeline โหดๆ อาจเป็นรอง Databricks นิดหน่อย"
    ],
    steps: [
      { title: "สร้าง Warehouse", desc: "ตั้งค่าประมวลผล (S, M, L)" },
      { title: "โหลดข้อมูล", desc: "ดึงเข้าตาราง" },
      { title: "รัน Query", desc: "ใช้ SQL ดึง Insight" }
    ],
    prompts: [
      { 
        purpose: "💡 วิเคราะห์ความรู้สึกด้วย SQL", 
        promptTh: "ใช้ CORTEX.SENTIMENT วิเคราะห์รีวิว ดึงตารางแล้วสร้างคอลัมน์คะแนน พร้อมหาค่าเฉลี่ยรายหมวด",
        promptEn: "Use CORTEX.SENTIMENT. Read reviews, generate sentiment column, calculate average by category."
      },
      { 
        purpose: "💡 Optimize SQL", 
        promptTh: "SQL นี้กิน Credit เยอะ [แปะโค้ด] ปรับให้เร็วขึ้น เลี่ยง SELECT *",
        promptEn: "Optimize this SQL taking long/high credits: [Code]. Avoid SELECT *, fix JOINs."
      }
    ],
    faqs: [
      { question: "ควรรู้ไว้ไหม?", answer: "เป็นแต้มต่อสัมภาษณ์อย่างดีครับ หลายบริษัทเทิร์นมาใช้ Snowflake กันหมดแล้ว" }
    ]
  },

  // ==========================================
  // 📊 หมวด AI ทำสไลด์ / Presentation
  // ==========================================
  {
    id: "p1",
    slug: "gamma-app",
    name: "Gamma",
    logoUrl: "/logos/Gamma.png",
    description: "แอปสร้างสไลด์และเว็บไซต์พรีเซนต์งานที่ลื่นไหลที่สุด เสกความสวยงามจากข้อความใน 1 นาที",
    longDescription: "พิมพ์หัวข้อหรือโยน Outline ลงไป AI จะแบ่งหน้า หารูป จัด Layout ให้อัตโนมัติ เลื่อนดูในมือถือเป็นเว็บได้ลื่นไหล ไม่ต้องปรับฟอนต์เองเลย",
    origin: "สร้างมาปฏิวัติสไลด์ 16:9 แบบเดิมๆ เน้นการอ่านบนจอทุกขนาด",
    category: "Presentation & Slides",
    priceModel: "Free / Plus $8 ต่อเดือน",
    isFree: true,
    externalUrl: "https://gamma.app",
    rating: 4.8,
    reviewCount: 22400,
    updatedAt: "Feb 2026",
    features: [
      "Text-to-Slide: เสกสไลด์ 10 หน้าจากคำสั่งสั้นๆ",
      "Flexible Layouts: จัดเป็นบล็อก แทรกเว็บ/วิดีโอ 3D ได้",
      "One-click Theme: เปลี่ยนสีฟอนต์โดย Layout ไม่พัง"
    ],
    pros: [
      "สวยทันที สไตล์ Modern",
      "แชร์ลิงก์เปิดมือถือง่ายมาก",
      "รองรับภาษาไทยดีเยี่ยม"
    ],
    cons: [
      "จัดแบบอิสระซ้อนๆ กัน (Free-form) ไม่ได้",
      "Export .pptx ฟอนต์อาจเคลื่อนนิดนึง"
    ],
    steps: [
      { title: "เลือก Generate", desc: "เลือก Presentation" },
      { title: "พิมพ์ Outline", desc: "ป้อนหัวข้อคอนเฟิร์ม" },
      { title: "เลือก Theme", desc: "กดรอดู AI เสกหน้าสไลด์" }
    ],
    prompts: [
      { 
        purpose: "💡 สไลด์ Pitch Deck", 
        promptTh: "สร้างสไลด์ 'แพลตฟอร์มเรียนภาษา' 4 หัวข้อ: ปัญหา, โซลูชัน, Tech Stack, โมเดลรายได้ โทนวัยรุ่นทันสมัย",
        promptEn: "Generate Pitch Deck for 'Language Learning Platform'. Include: Problem, Solution, Tech Stack, Revenue. Youthful tone."
      },
      { 
        purpose: "💡 สรุปเอกสาร", 
        promptTh: "ย่อยบทความยาวนี้ทำสไลด์สรุป 10 หน้า เน้น Icon และ Bullet ให้อ่านง่าย",
        promptEn: "Condense article into 10-slide summary. Emphasize icons and bullets."
      }
    ],
    faqs: [
      { question: "เซฟเป็น PowerPoint ได้ไหม?", answer: "ได้ครับ มีปุ่ม Export เป็น .pptx หรือ PDF ครับ" }
    ]
  },
  {
    id: "p2",
    slug: "tome",
    name: "Tome",
    logoUrl: "/logos/tome.png",
    description: "AI นักเล่าเรื่อง (Storytelling) เกิดมาเพื่อทำ Pitch Deck สไตล์ Startup และงานอาร์ต",
    longDescription: "เน้นเล่าเรื่องแบบนิตยสาร (Editorial) โทนมืดหรูหรา และให้ AI วาดรูป 3D ประกอบสไลด์ใหม่ทั้งหมด เหมาะพิตช์นักลงทุนเทคและเอเจนซี่",
    origin: "ซิลิคอนแวลลีย์ มุ่งกลุ่ม Founder และ VC",
    category: "Presentation & Slides",
    priceModel: "Free / Pro $16 ต่อเดือน",
    isFree: true,
    externalUrl: "https://tome.app",
    rating: 4.6,
    reviewCount: 15100,
    updatedAt: "Feb 2026",
    features: [
      "AI Story Creator: แบ่งสไลด์พร้อมวาดภาพ 3D อาร์ตๆ",
      "Interactive Embeds: ฝัง Figma, Airtable เล่นในสไลด์",
      "Doc to Pres: สรุปเอกสาร"
    ],
    pros: [
      "สุนทรียภาพหรูหรา สไตล์ Apple/Startup",
      "ภาพไม่ซ้ำใคร คุมโทนทั้งโปรเจกต์",
      "ฝัง Figma ดูโปรมาก"
    ],
    cons: [
      "Layout ปรับยากกว่า Gamma",
      "รูป AI บางครั้งอาร์ตไปจนดูไม่รู้เรื่อง"
    ],
    steps: [
      { title: "สร้าง", desc: "ป้อนประโยค 1 บรรทัด" },
      { title: "สไตล์ภาพ", desc: "เลือก Cyberpunk/3D" },
      { title: "ปรับแต่ง", desc: "คลิกให้ AI วาดใหม่ถ้าไม่ชอบ" }
    ],
    prompts: [
      { 
        purpose: "💡 Innovation Pitch", 
        promptTh: "สไลด์ 8 หน้า 'โปรเจกต์คุมวัตถุด้วยท่าทาง' (Hand Gestures) นักลงทุนเทค ภาพ Futuristic 3D",
        promptEn: "8-slide pitch for 'Hand Gestures Virtual Objects' project. Tech investors. Futuristic 3D illustrations."
      },
      { 
        purpose: "💡 สั่งวาดรูปในหน้าสไลด์", 
        promptTh: "วาดกราฟิก Minimalist 3D กล้อง Ricoh บนโต๊ะโค้ดดิ้ง โทนมืดเท่ๆ",
        promptEn: "Minimalist 3D render of Ricoh camera on coding desk. Dark, cool aesthetic."
      }
    ],
    faqs: [
      { question: "ภาษาไทยดีไหม?", answer: "รองรับแต่ Layout กับฟอนต์อาจจะไม่เป๊ะเท่า Gamma แนะนำให้เน้นภาพครับ" }
    ]
  },
  {
    id: "p3",
    slug: "beautiful-ai",
    name: "Beautiful.ai",
    logoUrl: "/logos/Beautiful.ai.png",
    description: "AI จัดหน้าสไลด์อัจฉริยะ ลากวางยังไงก็ไม่มีวันเละ เหมาะกับองค์กรและเซลส์",
    longDescription: "มี 'DesignerBot' คุมกฎการออกแบบ พิมพ์เพิ่มหรือโยนรูประบบจะขยับกรอบและย่อฟอนต์ให้อัตโนมัติ รักษาความเป๊ะตลอดเวลา มีระบบล็อก Brand องค์กร",
    origin: "แก้ปัญหาชาวออฟฟิศเสียเวลานั่งจัดขอบหน้ากระดาษ",
    category: "Presentation & Slides",
    priceModel: "Starts at $12/เดือน",
    isFree: false,
    externalUrl: "https://www.beautiful.ai",
    rating: 4.7,
    reviewCount: 9500,
    updatedAt: "Feb 2026",
    features: [
      "Smart Templates: กะช่องไฟพอดีหน้ากระดาษอัตโนมัติ",
      "DesignerBot: เสกสไลด์และกราฟพร้อมตัวเลข",
      "Brand Controls: ล็อกสีฟอนต์ให้ตรงกันทั้งบริษัท"
    ],
    pros: [
      "หมดปัญหาฟอนต์เละ เซฟเวลา 100%",
      "เครื่องมือทำกราฟสวยงามดูแพง",
      "เหมาะกับ Corporate"
    ],
    cons: [
      "อิสระน้อย ลากอิสระไม่ได้ตามใจ",
      "ไม่มีฟรีถาวร"
    ],
    steps: [
      { title: "เลือกหน้า", desc: "เช่น หน้า Timeline" },
      { title: "พิมพ์", desc: "ระบบขยับอัตโนมัติ" },
      { title: "Bot", desc: "สั่งให้ย่อเนื้อหา" }
    ],
    prompts: [
      { 
        purpose: "💡 รายงาน Data", 
        promptTh: "สร้างสไลด์ 5 หน้า รายงาน Data Analysis: วัตถุประสงค์, ที่มาข้อมูล, Data Cleaning, โมเดล, บทสรุป",
        promptEn: "5-slide Data Analysis report: Objectives, Dataset, Data Cleaning, Model, Conclusion."
      },
      { 
        purpose: "💡 เติมกราฟอัจฉริยะ", 
        promptTh: "นำเสนอยอด User: Q1:15k, Q2:22k, Q3:45k, Q4:80k (Bar chart เน้น Q4)",
        promptEn: "Quarterly User: Q1:15k, Q2:22k, Q3:45k, Q4:80k. Bar chart highlighting Q4."
      }
    ],
    faqs: [
      { question: "คือแค่เทมเพลตเหรอ?", answer: "ไม่ใช่ครับ เป็น Smart Slide โยนรูปเพิ่มมันจะแบ่งช่อง 3 เป็น 4 ให้อัตโนมัติ" }
    ]
  },
  {
    id: "p4",
    slug: "canva-magic-design",
    name: "Canva – Magic Design",
    logoUrl: "/logos/Canva.png",
    description: "แพลตฟอร์มกราฟิกมหาชนที่มี AI เข้ามาช่วยเสกสไลด์ ใช้ง่าย ของตกแต่งเยอะที่สุด",
    longDescription: "Magic Design พิมพ์หัวข้อเดียว AI ไปดึงเทมเพลตมาผสม ปรุงสีและใส่ข้อความ จุดแข็งคืออิสระ 100% ลากรูป แปะสติกเกอร์ หรือทำแอนิเมชันต่อได้อย่างสบายใจ",
    origin: "ยักษ์ใหญ่ด้าน Design นำ AI มาลดเวลาเริ่มต้น",
    category: "Presentation & Slides",
    priceModel: "Free / Pro $15/เดือน",
    isFree: true,
    externalUrl: "https://www.canva.com/magic-design",
    rating: 4.8,
    reviewCount: 92000,
    updatedAt: "Feb 2026",
    features: [
      "Magic Design: เสกสไลด์จาก 1 ประโยค",
      "Magic Switch: แปลงขนาด 16:9 เป็น แนวตั้ง TikTok ใน 1 คลิก",
      "Magic Animate: ใส่แอนิเมชันให้ทั้งโปรเจกต์"
    ],
    pros: [
      "คุ้นมือที่สุด ของตกแต่งเยอะ",
      "ทำ Collaborate พร้อมกันได้",
      "แปลงขนาดงานไว"
    ],
    cons: [
      "เนื้อหา AI เขียนสั้นไปหน่อย ต้องพิมพ์เพิ่มเอง",
      "เทมเพลตอาจดูซ้ำถ้าคนใช้เยอะ"
    ],
    steps: [
      { title: "เลือก Magic", desc: "ไปที่ Presentations กดดาววิบวับ" },
      { title: "พิมพ์สั่ง", desc: "เช่น 'สไลด์ Portfolio'" },
      { title: "ตกแต่ง", desc: "เลือกสไตล์แล้วลากวางต่อ" }
    ],
    prompts: [
      { 
        purpose: "💡 สไลด์ Portfolio", 
        promptTh: "สร้างสไลด์ Portfolio สัมภาษณ์ตำแหน่ง Data Engineer Co-op 6 เดือน โทนสีน้ำเงินขาวน่าเชื่อถือ",
        promptEn: "Portfolio presentation for Data Engineer Co-op internship. Blue/White professional tone."
      },
      { 
        purpose: "💡 เขียน Hard Skills (Magic Write)", 
        promptTh: "อธิบาย Hard Skills สั้นๆ เน้น Python, Data Pipeline, Git/GitHub ให้ดูโปร",
        promptEn: "3-line description of Hard Skills: Python, Data Pipelines, Git/GitHub."
      }
    ],
    faqs: [
      { question: "บัญชี Education ฟรี ใช้ได้ไหม?", answer: "ใช้ฟีเจอร์ AI พวกนี้ได้เกือบหมดเลยครับ คุ้มมากสำหรับนักศึกษา" }
    ]
  },
  {
    id: "p5",
    slug: "copilot-powerpoint",
    name: "Microsoft Copilot in PowerPoint",
    logoUrl: "/logos/AI-Data/Power BI.png",
    description: "ผู้ช่วย AI ในตำนาน เปลี่ยนไฟล์ Word ยาวๆ ให้กลายเป็นสไลด์ PowerPoint อัตโนมัติ",
    longDescription: "ฝังใน PowerPoint ดึงข้อมูลจาก Word ทำเป็นสไลด์ 10 หน้าให้ทันที ย่อยข้อความและหารูปพื้นฐานมาแปะให้ เหมาะกับคนมีรายงานแล้วขี้เกียจก๊อปปี้มาจัดหน้าสไลด์",
    origin: "Microsoft M365 ผูก GPT-4 เข้าซอฟต์แวร์ทำงาน",
    category: "Presentation & Slides",
    priceModel: "Copilot License องค์กร ($30/เดือน)",
    isFree: false,
    externalUrl: "https://www.microsoft.com/en-us/microsoft-365/copilot",
    rating: 4.5,
    reviewCount: 11000,
    updatedAt: "Feb 2026",
    features: [
      "Word to PowerPoint: แปลงรายงานเป็นสไลด์",
      "Slide Summarization: สรุปสไลด์ 100 หน้าของหัวหน้าให้อ่านง่าย",
      "Command by Chat: สั่งปรับฟอนต์ แอนิเมชัน ผ่านแชท"
    ],
    pros: [
      "ไม่ต้องเรียนรู้โปรแกรมใหม่",
      "ปลอดภัยระดับองค์กร Data ไม่หลุด",
      "ลดงานถึก (Manual task)"
    ],
    cons: [
      "สไลด์ยังดูเป็นหน้าตายุคเก่า ไม่ว้าวเท่า Gamma",
      "ต้องซื้อพ่วง License องค์กร"
    ],
    steps: [
      { title: "เปิดโปรแกรม", desc: "กดปุ่ม Copilot ขวาบน" },
      { title: "โยนไฟล์", desc: "พิมพ์ Create from file แปะลิงก์ Word" },
      { title: "ตกแต่ง", desc: "ใช้ Designer จัดหน้า" }
    ],
    prompts: [
      { 
        purpose: "💡 แปลง Word เป็นสไลด์", 
        promptTh: "Create presentation from file: [ลิงก์] ช่วยแปลงแผนธุรกิจร้านเบเกิลเป็นสไลด์ 10 หน้า เน้นต้นทุนและโฆษณา",
        promptEn: "Create presentation from file: [Link]. Convert this bagel business plan to 10 slides. Highlight costs."
      },
      { 
        purpose: "💡 สั่งเติมหน้า", 
        promptTh: "Add slide summarizing 'Interview Process with MFEC'. Format as timeline: Application, Test, Interview.",
        promptEn: "Add slide summarizing 'Interview Process with MFEC'. Format as timeline: Application, Test, Interview."
      }
    ],
    faqs: [
      { question: "ใช้ใน Word/Excel ด้วยไหม?", answer: "License เดียวครอบคลุมทั้ง Word, Excel และ Teams เลยครับ" }
    ]
  },

  // ==========================================
  // 🎙 หมวด AI สร้างเสียงพากย์ (Voice & Audio)
  // ==========================================
  {
    id: "v1",
    slug: "elevenlabs",
    name: "ElevenLabs",
    logoUrl: "/logos/ElevenLabs.png",
    description: "AI เสียงพากย์ที่สมจริงที่สุด โคลนเสียงมนุษย์เป๊ะปัง ภาษาไทยชัดเจน",
    longDescription: "มาตรฐานทองคำของเสียง AI! น้ำเสียงสมจริง เว้นวรรค มีอารมณ์ ฟีเจอร์ Voice Cloning อัปโหลดเสียงเราแค่ 1 นาทีก็เอาไปใช้พากย์ได้เลย เหมาะทำช่อง Faceless หรือพอดแคสต์",
    origin: "ก่อตั้งโดยอดีตวิศวกร Google/Palantir แก้ปัญหาเสียงแข็งแบบหุ่นยนต์",
    category: "Voice & Audio",
    priceModel: "Free / Creator $5 ต่อเดือน",
    isFree: true,
    externalUrl: "https://elevenlabs.io",
    rating: 4.9,
    reviewCount: 38500,
    updatedAt: "Feb 2026",
    features: [
      "Multilingual TTS v2: รองรับไทยชัดมาก ควบกล้ำดี",
      "Instant Voice Cloning: โคลนเสียงจากตัวอย่าง 1 นาที",
      "Speech-to-Speech: พูดเองให้ AI เปลี่ยนเสียงเป็นคนอื่น"
    ],
    pros: [
      "เสียงสมจริงสุดในตลาด",
      "มี Library เสียงฟรีให้โหลดเป็นหมื่น",
      "ภาษาไทยพัฒนาดีมาก"
    ],
    cons: [
      "เครดิตฟรีหมดไว",
      "บางครั้งใส่อารมณ์เวอร์ไป ต้องจูน Stability"
    ],
    steps: [
      { title: "เลือกเสียง", desc: "หรือจะโคลนเสียงตัวเอง" },
      { title: "วางสคริปต์", desc: "เว้นบรรทัดเพื่อให้ AI เว้นหายใจ" },
      { title: "ดาวน์โหลด", desc: "กด Generate เป็น MP3" }
    ],
    prompts: [
      { 
        purpose: "💡 สคริปต์ YouTube", 
        promptTh: "คุณเคยสงสัยไหมครับ... ว่าทำไมมหาเศรษฐี ถึงชอบตื่นตี 4? [เว้นบรรทัด]\nวันนี้ เราจะพาไปเจาะลึก 'ความลับของเวลา' กันครับ",
        promptEn: "Have you ever wondered... why billionaires wake up at 4 AM? \nToday, we uncover the 'Secrets of Time'."
      },
      { 
        purpose: "💡 โฆษณาตื่นเต้น", 
        promptTh: "โอกาสสุดท้าย!! โปรลด 70% กำลังจะหมดใน... 3... 2... 1... นาที! คลิกลิงก์เลย!",
        promptEn: "FINAL chance!! 70% sale ends in... 3... 2... 1... minutes! Click now!"
      }
    ],
    faqs: [
      { question: "เอาเสียงดารามาโคลนได้ไหม?", answer: "ผิดกฎครับ ถ้าระบบจับได้แบนทันที แนะนำใช้เสียงใน Library ดีกว่า" }
    ]
  },
  {
    id: "v2",
    slug: "openai-tts",
    name: "OpenAI – Text-to-Speech (TTS)",
    logoUrl: "/logos/OpenAI – ChatGPT.png",
    description: "ขุมพลังเสียงเบื้องหลัง ChatGPT เหมาะทำแอป Call Center โต้ตอบแบบ Real-time",
    longDescription: "นี่คือเสียงเดียวกับที่ใช้ใน Voice Mode ของ ChatGPT เน้นใช้ผ่าน API เพื่อให้นักพัฒนาเอาไปทำระบบโต้ตอบสดๆ (Low Latency) เสียงเป็นธรรมชาติสไตล์คุยกัน ไม่ใช่โฆษณา",
    origin: "สร้างโดย OpenAI เพื่อเติมเต็ม Ecosystem",
    category: "Voice & Audio",
    priceModel: "Pay-as-you-go (ถูกมาก)",
    isFree: false,
    externalUrl: "https://platform.openai.com/docs/guides/text-to-speech",
    rating: 4.8,
    reviewCount: 14200,
    updatedAt: "Feb 2026",
    features: [
      "API Ready: ฝังในซอฟต์แวร์ได้ง่าย",
      "Real-time Streaming: ส่งเสียงกลับทันทีที่แชทพิมพ์เสร็จ",
      "6 Optimized Voices: เสียงปรับจูนมาเพื่อการสนทนา"
    ],
    pros: [
      "เสียงเหมือน 'คนคุยกัน' จริงๆ",
      "API เร็วมาก (Latency ต่ำ)",
      "ต้นทุนการใช้งานถูก"
    ],
    cons: [
      "ไม่มี UI เว็บให้คนทั่วไปกดเล่น",
      "โคลนเสียงตัวเองไม่ได้"
    ],
    steps: [
      { title: "สร้าง API Key", desc: "รับคีย์จากแพลตฟอร์ม" },
      { title: "โค้ด", desc: "ใช้ Python ยิง Text เข้าไป" },
      { title: "เล่นเสียง", desc: "ระบบส่งไฟล์เสียงกลับมาในเสี้ยววิ" }
    ],
    prompts: [
      { 
        purpose: "💡 โค้ดเรียก API", 
        promptTh: "ช่วยเขียนโค้ด Python ไลบรารี openai รันโมเดล tts-1 เสียง alloy พูดว่า 'สวัสดี' เซฟไฟล์",
        promptEn: "Write Python code using openai TTS API, model tts-1, voice alloy. Text: 'Hello'. Save file."
      },
      { 
        purpose: "💡 สคริปต์ Call Center", 
        promptTh: "สวัสดีค่ะ ศูนย์บริการลูกค้ายินดีให้บริการ วันนี้มีอะไรให้เราช่วยเหลือคะ?",
        promptEn: "Hello, Customer Service. How may I assist you today?"
      }
    ],
    faqs: [
      { question: "tts-1 กับ hd ต่างไง?", answer: "1 เร็วมากเหมาะโต้ตอบสด, hd ชัดสมูธเหมาะเจนเก็บไว้ครับ" }
    ]
  },
  {
    id: "v3",
    slug: "murf-ai",
    name: "Murf AI",
    logoUrl: "/logos/Murf AI.png",
    description: "สตูดิโอเสียงพากย์ AI สไตล์มืออาชีพ มีเครื่องมือปรับจังหวะและเน้นคำรายคำ",
    longDescription: "เน้นงาน Corporate (สื่อการสอน, พรีเซนต์) มี Timeline ให้ลากวิดีโอมาเทียบเสียง ปรับ Pitch ความเร็ว และสั่งเน้นเสียงหนัก (Emphasis) เฉพาะคำได้เหมือนผู้กำกับคุมห้องอัด",
    origin: "สร้างมาเป็น All-in-one Voice-over Studio สำหรับ B2B",
    category: "Voice & Audio",
    priceModel: "Free (ลองฟัง) / Pro $26/เดือน",
    isFree: true,
    externalUrl: "https://murf.ai",
    rating: 4.7,
    reviewCount: 9100,
    updatedAt: "Feb 2026",
    features: [
      "Granular Control: ปรับความเร็ว เน้นคำ เป็นรายจุดได้",
      "Video Sync: อัปคลิปไปกะจังหวะเสียง (Time-sync)",
      "Voice Changer: อัดเสียงกากๆ ให้เป็นเสียงโปร"
    ],
    pros: [
      "โทนมืออาชีพทางการเยอะมาก",
      "Timeline ใช้ง่าย กะจังหวะหายใจเนียน",
      "มีเพลง Background Music ให้ใส่ด้วย"
    ],
    cons: [
      "ภาษาไทยสู้ ElevenLabs ไม่ได้",
      "เวอร์ชันฟรีโหลดไฟล์ออกไม่ได้"
    ],
    steps: [
      { title: "เลือกโปรไฟล์", desc: "เช่น Educator หรือ Marketer" },
      { title: "ปรับสคริปต์", desc: "ไฮไลต์คำสั่ง 'เน้น (Emphasis)'" },
      { title: "Sync", desc: "ลากคลิปมาดูจังหวะก่อนโหลด" }
    ],
    prompts: [
      { 
        purpose: "💡 สคริปต์ E-Learning", 
        promptTh: "สวัสดีพนักงานใหม่! วันนี้เราจะเรียน *ความปลอดภัยไซเบอร์* (เน้นเสียง) [เว้น 1 วิ] กดปุ่มถัดไปครับ",
        promptEn: "Welcome new hires! Today we cover *Cybersecurity* (Emphasis) [Pause 1s] Click Next."
      },
      { 
        purpose: "💡 เปิดตัวสินค้า", 
        promptTh: "โลกเปลี่ยนไปแล้ว ขอแนะนำ *EngMaster 2.0* (เน้นเสียง) แพลตฟอร์มพลิกโฉมการเรียนของคุณ",
        promptEn: "Introducing *EngMaster 2.0* (Emphasis) - revolutionizing your learning."
      }
    ],
    faqs: [
      { question: "รับสคริปต์ยาว 10 หน้าได้ไหม?", answer: "ได้ครับ ระบบแยกบล็อกข้อความ ให้สลับนักพากย์ในโปรเจกต์เดียวกันได้" }
    ]
  },
  {
    id: "v5",
    slug: "resemble-ai",
    name: "Resemble AI",
    logoUrl: "/logos/Murf AI.png",
    description: "ระบบโคลนเสียง Real-time สาย Tech ขุมพลังสร้างบทสนทนา NPC ในเกม",
    longDescription: "แพลตฟอร์ม Voice Cloning ระดับองค์กร (API First) ฟีเจอร์เด็ด 'Resemble Fill' แก้คำผิดในออดิโอเก่าด้วยการพิมพ์คำใหม่ลงไป AI ปะติดปะต่อเนียนกริบไม่ต้องอัดซ่อม",
    origin: "เจาะกลุ่ม Game Dev และ Studio ที่ต้องการนำ Voice IP ไปใช้มหาศาล",
    category: "Voice & Audio",
    priceModel: "Pay-as-you-go / $29/เดือน",
    isFree: false,
    externalUrl: "https://www.resemble.ai",
    rating: 4.6,
    reviewCount: 3200,
    updatedAt: "Feb 2026",
    features: [
      "Real-time API: เจนเสียงโคลนเร็วมาก",
      "Resemble Fill: แก้คำผิดในเสียงเก่าเนียนๆ",
      "Emotion Control: สั่งอารมณ์ (กลัว, ตะโกน, กระซิบ) ในคำสั่งเดียว"
    ],
    pros: [
      "ข้ามภาษาได้ (พูดไทยให้เจนฝรั่งเศสสำเนียงเดิม)",
      "ต่อ Unity / Unreal Engine ดีเยี่ยม",
      "มีความปลอดภัยสูง"
    ],
    cons: [
      "UI หน้าเว็บไม่เฟรนด์ลี่สำหรับคนทั่วไป",
      "Data ต้นฉบับต้องชัดเจนมากๆ"
    ],
    steps: [
      { title: "อัดต้นฉบับ", desc: "อ่าน 50 ประโยคทำโคลน" },
      { title: "ฝังโค้ด", desc: "เรียก API" },
      { title: "ใส่อารมณ์", desc: "ใช้ SSML tags บังคับอารมณ์" }
    ],
    prompts: [
      { 
        purpose: "💡 สคริปต์ NPC ในเกม", 
        promptTh: "[อารมณ์: กลัว] ระวังตัว! [อารมณ์: ตะโกน] รีบหนีไป!!",
        promptEn: "[Emotion: Fearful] Watch out! [Emotion: Shouting] HURRY!!"
      },
      { 
        purpose: "💡 Dynamic Ads", 
        promptTh: "สวัสดี {{Name}}! พิเศษเดือนเกิดคุณลด 50%!",
        promptEn: "Hello {{Name}}! Birthday discount 50%!"
      }
    ],
    faqs: [
      { question: "ใช้ในเกมดียังไง?", answer: "ไม่ต้องจ้างอัดหมื่นประโยค อัดแค่ต้นแบบแล้วให้โค้ดรัน AI เจนเสียงสดๆ ประหยัดไฟล์เกมครับ" }
    ]
  },

  // ==========================================
  // 🎯 หมวด AI ทำการตลาดและ SEO (Marketing & SEO)
  // ==========================================
  {
    id: "seo3",
    slug: "surfer-seo",
    name: "Surfer SEO",
    logoUrl: "/logos/Surfer SEO.png",
    description: "เครื่องมือสาย SEO ขนานแท้ วิเคราะห์คีย์เวิร์ดคู่แข่ง และให้คะแนนแบบ Real-time",
    longDescription: "อาวุธลับคนทำเว็บไซต์ Affiliate! พิมพ์คีย์เวิร์ด มันจะกวาดหน้าแรก Google มาบอกว่าต้องเขียนยาวแค่ไหน ใช้คำศัพท์ (LSI) อะไรบ้าง มีแถบคะแนน 0-100 ให้ดูสดๆ ตอนเขียน",
    origin: "คนทำ SEO โปแลนด์ สร้างระบบ 'Data-Driven SEO' เลิกเดาใจ Google",
    category: "Marketing, SEO & Writing",
    priceModel: "Starts at $89/เดือน",
    isFree: false,
    externalUrl: "https://surferseo.com",
    rating: 4.9,
    reviewCount: 12500,
    updatedAt: "Feb 2026",
    features: [
      "Content Editor: แถบคำศัพท์บังคับใช้ เพื่อดันคะแนน SEO ให้เขียว",
      "SERP Analyzer: แกะรอยคู่แข่งแบบละเอียดยิบ",
      "Surfer AI: สั่งบอทเขียนรวดเดียว 2000 คำ ได้คะแนนเต็ม 80+ ทันที"
    ],
    pros: [
      "เปลี่ยน SEO เป็นการเล่นเกมเก็บแต้ม ง่ายมาก",
      "มีปลั๊กอินต่อ Google Docs / WordPress",
      "อัปเดตอัลกอริทึมเป๊ะ"
    ],
    cons: [
      "ราคาแพงมาก เหมาะกับคนทำเงินจริงจัง",
      "ถ้ายัดคำมากไป บทความจะอ่านไม่รู้เรื่อง (เอาแค่ 70 ก็พอ)"
    ],
    steps: [
      { title: "สร้าง Query", desc: "พิมพ์คีย์เวิร์ดเป้าหมาย" },
      { title: "ดูไกด์", desc: "ดูจำนวนคำที่ระบบสั่ง" },
      { title: "พิมพ์+เก็บแต้ม", desc: "ยัดคำศัพท์ให้ไฟเขียว" }
    ],
    prompts: [
      { 
        purpose: "💡 ใช้คู่ ChatGPT", 
        promptTh: "เขียน 1500 คำ เรื่อง 'รีวิวรองเท้า' บังคับใส่ LSI เหล่านี้: [ลิสต์คำศัพท์จาก Surfer] ใช้ H2/H3",
        promptEn: "Write 1500 words on 'Shoes'. MUST include LSI: [Paste list]. Use H2/H3."
      },
      { 
        purpose: "💡 Rewrite ดันแต้ม", 
        promptTh: "เขียนย่อหน้านี้ใหม่ แทรกคำ 'ประกันร้ายแรง' และ 'ค่าห้อง' อย่างละ 1 ครั้งให้เนียน",
        promptEn: "Rewrite paragraph. Inject 'critical illness' and 'room rate' exactly once naturally."
      }
    ],
    faqs: [
      { question: "ทำไมคะแนน 90 แต่ไม่ติดหน้า 1?", answer: "เพราะมีปัจจัยภายนอก (Off-Page / Backlink) และความน่าเชื่อถือโดเมนด้วยครับ" }
    ]
  },

  // ==========================================
  // 💬 หมวด AI แชทบอทและผู้ช่วย (Chatbots)
  // ==========================================
  {
    id: "bot3",
    slug: "gemini-google",
    name: "Google – Gemini",
    logoUrl: "/logos/Google – Gemini.png",
    description: "ขุมพลัง AI แห่ง Google โดดเด่นด้านการดูวิดีโอ YouTube และสรุปงานใน Docs/Drive",
    longDescription: "Gemini ฝังตัวใน Ecosystem ของ Google สั่งค้นหาอีเมล สรุป Drive หรือดูคลิป YouTube 1 ชม. แล้วสรุปได้ในพริบตา มี Context Window ถึง 1-2 ล้านโทเคน (อัปหนังสือได้สิบเล่ม)",
    origin: "สร้างโดย DeepMind เป็น Multimodal แท้แต่เกิด",
    category: "Chatbots, Writing & SEO",
    priceModel: "Free / Advanced $20/เดือน",
    isFree: true,
    externalUrl: "https://gemini.google.com",
    rating: 4.7,
    reviewCount: 38900,
    updatedAt: "Feb 2026",
    features: [
      "Workspace Extensions: ดึงข้อมูลจาก Gmail/Drive โดยตรง",
      "YouTube Analysis: ดูวิดีโอและหาช่วงเวลาสำคัญ (Timestamp)",
      "Ultra-Long Context: รับไฟล์ใหญ่มากได้รวดเดียว"
    ],
    pros: [
      "ดึงข้อมูล Real-time จาก Google ไวสุด",
      "สรุป YouTube ประหยัดเวลาชีวิตมาก",
      "ใช้งานฟรีคุ้มค่า"
    ],
    cons: [
      "งานโค้ดโหดๆ ยังแอบหลอนกว่า Claude",
      "เซนเซอร์กังวลเกินไปบางครั้ง"
    ],
    steps: [
      { title: "เปิด Extensions", desc: "ตั้งค่าอนุญาตเข้าถึง" },
      { title: "พิมพ์ @", desc: "เรียก @YouTube ช่วยสรุป" },
      { title: "Export", desc: "ส่งออกไป Docs ได้เลย" }
    ],
    prompts: [
      { 
        purpose: "💡 สรุป YouTube", 
        promptTh: "@YouTube [ลิงก์] ดูคลิปนี้และสรุป 5 ข้อ พร้อม Timestamp จังหวะพูดถึง 'DCA'",
        promptEn: "@YouTube [Link] Watch and summarize 5 key points. Provide Timestamp for 'DCA'."
      },
      { 
        purpose: "💡 สรุป Drive", 
        promptTh: "@GoogleDrive หา 'บันทึกประชุม Q3' แล้วให้ @Gmail ร่างอีเมลชมเชยยอดขาย",
        promptEn: "@GoogleDrive find 'Q3 Minutes'. @Gmail draft praise email based on sales."
      }
    ],
    faqs: [
      { question: "หาไฟล์ใน Drive ไม่เจอ?", answer: "ลองพิมพ์ชื่อเป๊ะๆ หรือเช็กสวิตช์ Extension ครับ" }
    ]
  },
  {
    id: "bot4",
    slug: "grok",
    name: "xAI – Grok",
    logoUrl: "/logos/grok.png",
    description: "AI ขี้เล่นกวนโอ๊ย เข้าถึงเทรนด์ทวิตเตอร์ (X) ได้แบบวินาทีต่อวินาที",
    longDescription: "จากค่าย Elon Musk ดึงข้อมูลโพสต์บนแพลตฟอร์ม X แบบสดๆ ทำให้รู้ข่าวด่วนและดราม่าไวกว่าเพื่อน มี Fun Mode ตอบติดตลกกวนโอ๊ย เซนเซอร์น้อย",
    origin: "สร้างมาท้าทายกรอบความถูกต้องทางการเมือง (PC) เน้นหาความจริงและขำขัน",
    category: "Chatbots & Assistants",
    priceModel: "รวมอยู่ใน X Premium ($8/เดือน)",
    isFree: false,
    externalUrl: "https://x.com/i/grok",
    rating: 4.5,
    reviewCount: 15600,
    updatedAt: "Feb 2026",
    features: [
      "Real-time X Integration: ดึงทวีตมาสรุปทันที",
      "Fun Mode: โทนจิกกัด ไม่หุ่นยนต์",
      "Image Generation: วาดรูปผ่าน Flux ได้เลย"
    ],
    pros: [
      "เบอร์ 1 เช็กกระแส Social Listening",
      "ข่าวด่วน คริปโต กีฬา อัปเดตเป๊ะ",
      "อ่านเพลิน"
    ],
    cons: [
      "ต้องจ่าย X Premium",
      "งานโค้ดยังไม่เก่งเท่าตัวท็อป",
      "อาจเผลอสรุป Fake News บนทวิต"
    ],
    steps: [
      { title: "สมัคร X", desc: "ซื้อ Premium" },
      { title: "เลือกโหมด", desc: "Fun หรือ Regular" },
      { title: "ถามเทรนด์", desc: "เช่น เกิดดราม่าอะไรขึ้น" }
    ],
    prompts: [
      { 
        purpose: "💡 สรุปดราม่า (Fun Mode)", 
        promptTh: "แฮชแท็ก #ดราม่าไอที เกิดอะไรขึ้น ขอสรุปแซ่บๆ ขำๆ",
        promptEn: "Summarize trending #TechDrama. Make it spicy and easy to grasp."
      },
      { 
        purpose: "💡 ข่าวคริปโต 12 ชม.", 
        promptTh: "มีทวีตหรือประกาศจากวาฬ (Whale) เรื่อง Bitcoin ไหม ขอลิงก์เด่นๆ",
        promptEn: "Bitcoin updates from Crypto Whales in last 12 hrs? Quote top tweets."
      }
    ],
    faqs: [
      { question: "วาดรูปได้ยัง?", answer: "วาดได้แล้วครับใน Grok-2 ให้อิสระค่อนข้างเยอะด้วย" }
    ]
  },
  {
    id: "bot5",
    slug: "meta-llama",
    name: "Meta AI (Llama)",
    logoUrl: "/logos/AI-Code/Meta.png",
    description: "โมเดล AI แบบ Open-weight ทรงพลังสุด ให้โหลดไปรันบนคอมตัวเองได้ฟรี (Privacy 100%)",
    longDescription: "Llama (Meta) แจกโมเดลให้โหลดไปรันแบบ Offline บริษัทชอบนำไปสร้างแชทบอทขององค์กรเอง (Fine-tune) ข้อมูลความลับไม่รั่วไหล",
    origin: "สร้างโดย Mark Zuckerberg ขัดขวางการผูกขาดของโมเดลปิด",
    category: "Coding & Development",
    priceModel: "Free",
    isFree: true,
    externalUrl: "https://llama.meta.com",
    rating: 4.8,
    reviewCount: 27500,
    updatedAt: "Feb 2026",
    features: [
      "Open-Weight: โหลดลงเครื่อง รันออฟไลน์ได้",
      "Fine-tuning Ready: เหมาะเอาไปสอนคำศัพท์องค์กร",
      "Meta Ecosystem: ใช้ใน WhatsApp/Messenger ได้"
    ],
    pros: [
      "ความปลอดภัยสูงสุด ไม่ต่อเน็ตเลยก็ได้",
      "ฟรี 100% สำหรัยธุรกิจ",
      "ชุมชน Open-source ใหญ่มาก"
    ],
    cons: [
      "ต้องมีสเปคคอมแรงหรือเซิร์ฟเวอร์โหด",
      "ภาษาไทยเดิมๆ ยังแข็งไปนิด"
    ],
    steps: [
      { title: "โหลด Ollama", desc: "โปรแกรมรันโมเดล" },
      { title: "โหลดโมเดล", desc: "ดึงรุ่น 8B หรือ 70B" },
      { title: "ใช้งาน", desc: "รันบน Terminal เครื่องตัวเอง" }
    ],
    prompts: [
      { 
        purpose: "💡 รันผ่าน Terminal", 
        promptTh: "ollama run llama3 -> อธิบายการทำ RAG (Retrieval-Augmented Generation)",
        promptEn: "ollama run llama3 -> Explain RAG concept."
      },
      { 
        purpose: "💡 สกัดข้อมูล", 
        promptTh: "ดึง 'ชื่อบริษัท' และ 'รายได้' คืนค่าเป็น JSON เท่านั้น",
        promptEn: "Extract 'Company' and 'Revenue'. Return strictly JSON."
      }
    ],
    faqs: [
      { question: "คอมธรรมดารันได้ไหม?", answer: "รันตัวเล็ก 8B ผ่าน CPU/RAM ได้ครับ แต่จะช้านิดนึง" }
    ]
  }

];