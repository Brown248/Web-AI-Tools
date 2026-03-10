import type { CustomPrompt } from './index';

export const marketingPrompts: CustomPrompt[] = [
  {
    id: "marketing-1",
    purpose: "💡 คิดแคปชั่น Facebook ดึงดูดลูกค้า",
    promptTh: `
คุณคือผู้เชี่ยวชาญด้าน Social Media Marketing

ช่วยสร้างแคปชั่น Facebook สำหรับโปรโมทสินค้า/บริการต่อไปนี้

ชื่อสินค้า/บริการ:
[ใส่ชื่อสินค้า]

กลุ่มเป้าหมาย:
[เช่น นักศึกษา / คนทำงาน / ธุรกิจ]

จุดเด่นของสินค้า:
[เช่น ราคาถูก / คุณภาพสูง / ใช้งานง่าย]

ปัญหาที่สินค้าช่วยแก้:
[อธิบาย]

โทนของแบรนด์:
[เช่น สนุก / เป็นกันเอง / พรีเมียม]

สิ่งที่ต้องการให้ทำ:

1. เขียนแคปชั่น 3 แบบ
2. ทำให้ดึงดูดความสนใจตั้งแต่ประโยคแรก
3. มีการพูดถึงประโยชน์ของสินค้า
4. มี Call to Action ตอนท้าย
5. ใช้ Emoji ให้เหมาะสม

แคปชั่นต้องเหมาะกับ Facebook และกระตุ้นให้คนอยากซื้อ
`,
    promptEn: `
You are a social media marketing expert.

Create Facebook captions to promote the following product/service.

Product/Service Name:
[Insert product name]

Target Audience:
[e.g. students / professionals / businesses]

Product Strengths:
[e.g. affordable / high quality / easy to use]

Problem the product solves:
[Describe]

Brand Tone:
[e.g. fun / friendly / premium]

Please do the following:

1. Write 3 caption variations
2. Start with a strong hook
3. Highlight product benefits
4. Include a clear call to action
5. Use appropriate emojis

Captions should be optimized for Facebook engagement.
`,
    category: "Marketing, SEO & Writing",
    toolName: "Copy.ai",
    toolSlug: "copy-ai",
    logoUrl: "/logos/AI-Writing/Copy.ai.png"
  },

  {
    id: "marketing-2",
    purpose: "📈 สร้าง Marketing Strategy สำหรับธุรกิจ",
    promptTh: `
คุณคือ Marketing Strategist ระดับมืออาชีพ

ช่วยวาง Marketing Strategy สำหรับธุรกิจต่อไปนี้

ชื่อธุรกิจ:
[ใส่ชื่อธุรกิจ]

สินค้า/บริการ:
[อธิบาย]

กลุ่มเป้าหมาย:
[เช่น อายุ / เพศ / อาชีพ]

จุดขายหลักของธุรกิจ:
[Unique selling point]

งบประมาณการตลาด:
[เช่น ต่ำ / กลาง / สูง]

ช่องทางที่ต้องการใช้:
[เช่น Facebook / TikTok / Google Ads]

สิ่งที่ต้องการให้คุณทำ:

1. วิเคราะห์ตลาด
2. ระบุกลุ่มเป้าหมายหลัก
3. เสนอ Marketing Strategy
4. เสนอ Content Strategy
5. แนะนำช่องทางโฆษณาที่เหมาะสม
6. เสนอไอเดียแคมเปญการตลาด

ขอคำอธิบายแบบละเอียดและใช้งานได้จริง
`,
    promptEn: `
You are a professional marketing strategist.

Create a marketing strategy for the following business.

Business Name:
[Insert business name]

Product/Service:
[Describe]

Target Audience:
[e.g. age / gender / profession]

Unique Selling Point:
[Describe]

Marketing Budget:
[Low / Medium / High]

Preferred Channels:
[e.g. Facebook / TikTok / Google Ads]

Please do the following:

1. Analyze the market
2. Identify the target audience
3. Propose a marketing strategy
4. Suggest a content strategy
5. Recommend advertising channels
6. Provide campaign ideas

Provide detailed and practical recommendations.
`,
    category: "Marketing, SEO & Writing",
    toolName: "Jasper AI",
    toolSlug: "jasper-ai",
    logoUrl: "/logos/AI-Writing/Jasper AI.png"
  },

  {
    id: "marketing-3",
    purpose: "📝 เขียนบทความ SEO สำหรับเว็บไซต์",
    promptTh: `
คุณคือผู้เชี่ยวชาญด้าน SEO Content

ช่วยเขียนบทความ SEO สำหรับเว็บไซต์

หัวข้อบทความ:
[ใส่หัวข้อ]

Keyword หลัก:
[ใส่ keyword]

Keyword รอง:
[ใส่ keyword เพิ่ม]

กลุ่มผู้อ่าน:
[เช่น นักเรียน / ธุรกิจ / ผู้เริ่มต้น]

เป้าหมายของบทความ:
[เช่น ให้ความรู้ / โปรโมทสินค้า]

สิ่งที่ต้องการ:

1. เขียนบทความความยาวประมาณ 1000-1500 คำ
2. ใส่ Keyword อย่างเป็นธรรมชาติ
3. มีหัวข้อ H1 / H2 / H3
4. มี Introduction ที่ดึงดูด
5. มี Conclusion ที่สรุปเนื้อหา
6. SEO Friendly

บทความต้องอ่านง่ายและมีคุณค่า
`,
    promptEn: `
You are an SEO content expert.

Write an SEO blog article for a website.

Article Topic:
[Insert topic]

Primary Keyword:
[Insert keyword]

Secondary Keywords:
[Insert additional keywords]

Target Audience:
[e.g. beginners / businesses / students]

Article Goal:
[e.g. education / product promotion]

Requirements:

1. Write 1000–1500 words
2. Use keywords naturally
3. Include H1 / H2 / H3 headings
4. Write an engaging introduction
5. Include a strong conclusion
6. Make the article SEO-friendly

The article should be informative and easy to read.
`,
    category: "Marketing, SEO & Writing",
    toolName: "ChatGPT",
    toolSlug: "chatgpt",
    logoUrl: "/logos/AI-Chatbot/OpenAI – ChatGPT.png"
  },

  {
    id: "marketing-4",
    purpose: "🎥 คิดไอเดียคอนเทนต์ TikTok / Reels",
    promptTh: `
คุณคือ Social Media Content Creator

ช่วยคิดไอเดียคอนเทนต์สำหรับ TikTok หรือ Instagram Reels

สินค้า/บริการ:
[อธิบาย]

กลุ่มเป้าหมาย:
[เช่น Gen Z / นักศึกษา / คนทำงาน]

เป้าหมายของคอนเทนต์:
[เช่น เพิ่มยอดขาย / เพิ่มผู้ติดตาม]

สไตล์คอนเทนต์:
[เช่น ตลก / ให้ความรู้ / รีวิว]

สิ่งที่ต้องการ:

1. เสนอไอเดียคอนเทนต์ 5 แบบ
2. อธิบายเนื้อหาของแต่ละคลิป
3. แนะนำ Hook เปิดคลิป
4. แนะนำ Caption
5. แนะนำ Hashtag

คอนเทนต์ต้องมีโอกาส Viral สูง
`,
    promptEn: `
You are a social media content creator.

Generate TikTok or Instagram Reels content ideas.

Product/Service:
[Describe]

Target Audience:
[e.g. Gen Z / students / professionals]

Content Goal:
[e.g. increase sales / gain followers]

Content Style:
[e.g. funny / educational / review]

Please do the following:

1. Suggest 5 content ideas
2. Explain each video concept
3. Provide a hook for the start
4. Suggest captions
5. Recommend hashtags

Content should have high viral potential.
`,
    category: "Marketing, SEO & Writing",
    toolName: "ChatGPT",
    toolSlug: "chatgpt",
    logoUrl: "/logos/AI-Chatbot/OpenAI – ChatGPT.png"
  },

  {
    id: "marketing-5",
    purpose: "📊 วิเคราะห์คู่แข่งทางการตลาด",
    promptTh: `
คุณคือผู้เชี่ยวชาญด้าน Competitive Analysis

ช่วยวิเคราะห์คู่แข่งสำหรับธุรกิจต่อไปนี้

ชื่อธุรกิจ:
[ใส่ชื่อธุรกิจ]

สินค้า/บริการ:
[อธิบาย]

ตลาดที่อยู่:
[เช่น ไทย / Global]

คู่แข่งหลัก:
[ใส่ชื่อแบรนด์]

สิ่งที่ต้องการให้วิเคราะห์:

1. จุดแข็งของคู่แข่ง
2. จุดอ่อนของคู่แข่ง
3. กลยุทธ์การตลาดของคู่แข่ง
4. โอกาสในตลาด
5. วิธีที่ธุรกิจของเราจะเหนือกว่า

ขอคำแนะนำเชิงกลยุทธ์ที่สามารถนำไปใช้จริงได้
`,
    promptEn: `
You are a competitive marketing analyst.

Analyze competitors for the following business.

Business Name:
[Insert business name]

Product/Service:
[Describe]

Market:
[e.g. Thailand / Global]

Main Competitors:
[Insert competitor names]

Please analyze:

1. Competitors' strengths
2. Competitors' weaknesses
3. Their marketing strategies
4. Market opportunities
5. How our business can outperform them

Provide strategic and actionable insights.
`,
    category: "Marketing, SEO & Writing",
    toolName: "ChatGPT",
    toolSlug: "chatgpt",
    logoUrl: "/logos/AI-Chatbot/OpenAI – ChatGPT.png"
  },

  {
  id: "marketing-6",
  purpose: "🔎 วิเคราะห์ Keyword สำหรับทำ SEO",
  promptTh: `
คุณคือผู้เชี่ยวชาญด้าน SEO และ Keyword Research

ช่วยวิเคราะห์ Keyword สำหรับเว็บไซต์ต่อไปนี้

เว็บไซต์:
[ใส่ชื่อเว็บไซต์]

ธุรกิจหรือเนื้อหาของเว็บไซต์:
[อธิบาย]

กลุ่มเป้าหมาย:
[เช่น นักเรียน / นักพัฒนา / ธุรกิจ]

ประเทศหรือภาษาเป้าหมาย:
[เช่น Thailand / Global / English]

สิ่งที่ต้องการ:

1. เสนอ Keyword หลัก 10 คำ
2. เสนอ Long-tail Keyword 10 คำ
3. วิเคราะห์ Search Intent ของแต่ละ Keyword
4. ประเมินความยากในการแข่งขัน (Low / Medium / High)
5. แนะนำ Keyword ที่ควรเริ่มทำก่อน

ผลลัพธ์ควรเหมาะสำหรับการทำ SEO จริง
`,
  promptEn: `
You are an SEO and keyword research expert.

Analyze keywords for the following website.

Website:
[Insert website name]

Business or website topic:
[Describe]

Target Audience:
[e.g. students / developers / businesses]

Target country or language:
[e.g. Thailand / Global / English]

Please do the following:

1. Suggest 10 primary keywords
2. Suggest 10 long-tail keywords
3. Analyze search intent for each keyword
4. Estimate keyword difficulty (Low / Medium / High)
5. Recommend which keywords to target first

Results should be practical for real SEO strategies.
`,
  category: "Marketing, SEO & Writing",
  toolName: "ChatGPT",
  toolSlug: "chatgpt",
  logoUrl: "/logosAI-Chatbot/OpenAI – ChatGPT.png"
},

{
  id: "marketing-7",
  purpose: "📄 สร้าง SEO Blog Outline",
  promptTh: `
คุณคือผู้เชี่ยวชาญด้าน SEO Content

ช่วยสร้าง Outline สำหรับบทความ SEO

หัวข้อบทความ:
[ใส่หัวข้อ]

Keyword หลัก:
[ใส่ Keyword]

Keyword รอง:
[ใส่ Keyword เพิ่ม]

กลุ่มผู้อ่าน:
[เช่น นักเรียน / นักธุรกิจ / นักพัฒนา]

เป้าหมายของบทความ:
[ให้ความรู้ / ดึง Traffic / โปรโมทสินค้า]

สิ่งที่ต้องการ:

1. สร้างโครงสร้างบทความ
2. มี H1 / H2 / H3
3. มี Introduction ที่ดึงดูด
4. แนะนำหัวข้อที่ตอบคำถามของผู้ใช้
5. มี Conclusion ที่สรุปเนื้อหา

Outline ต้องเหมาะสำหรับการทำ SEO
`,
  promptEn: `
You are an SEO content expert.

Create an SEO blog outline.

Article Topic:
[Insert topic]

Primary Keyword:
[Insert keyword]

Secondary Keywords:
[Insert additional keywords]

Target Audience:
[e.g. students / businesses / developers]

Article Goal:
[education / traffic / promotion]

Please do the following:

1. Create a structured outline
2. Include H1 / H2 / H3 headings
3. Write an engaging introduction idea
4. Suggest sections that answer user intent
5. Include a strong conclusion

The outline should be optimized for SEO.
`,
  category: "Marketing, SEO & Writing",
  toolName: "ChatGPT",
  toolSlug: "chatgpt",
  logoUrl: "/logos/AI-Chatbot/OpenAI – ChatGPT.png"
},

{
  id: "marketing-8",
  purpose: "✍️ เขียน Meta Title และ Meta Description",
  promptTh: `
คุณคือผู้เชี่ยวชาญด้าน SEO On-Page

ช่วยสร้าง Meta Title และ Meta Description สำหรับหน้าเว็บ

หัวข้อหน้าเว็บ:
[ใส่หัวข้อ]

Keyword หลัก:
[ใส่ Keyword]

Keyword รอง:
[ใส่ Keyword เพิ่ม]

ประเภทหน้า:
[เช่น Blog / Landing Page / Product Page]

สิ่งที่ต้องการ:

1. เขียน Meta Title 5 แบบ
2. เขียน Meta Description 5 แบบ
3. ใส่ Keyword อย่างเป็นธรรมชาติ
4. ทำให้ดึงดูดให้คนคลิก
5. ความยาวเหมาะกับ Google SEO

ผลลัพธ์ต้องช่วยเพิ่ม CTR ใน Search Results
`,
  promptEn: `
You are an SEO on-page optimization expert.

Generate Meta Titles and Meta Descriptions for a webpage.

Page Topic:
[Insert topic]

Primary Keyword:
[Insert keyword]

Secondary Keywords:
[Insert additional keywords]

Page Type:
[e.g. blog / landing page / product page]

Please do the following:

1. Write 5 Meta Title variations
2. Write 5 Meta Description variations
3. Use keywords naturally
4. Make them compelling for clicks
5. Keep optimal length for Google SEO

The goal is to improve search click-through rate (CTR).
`,
  category: "Marketing, SEO & Writing",
  toolName: "Copy.ai",
  toolSlug: "copy-ai",
  logoUrl: "/logos/AI-Writing/Copy.ai.png"
},

{
  id: "marketing-9",
  purpose: "🔗 วิเคราะห์ SEO ของเว็บไซต์คู่แข่ง",
  promptTh: `
คุณคือผู้เชี่ยวชาญด้าน SEO Competitive Analysis

ช่วยวิเคราะห์ SEO ของเว็บไซต์คู่แข่ง

เว็บไซต์ของเรา:
[ใส่เว็บไซต์]

เว็บไซต์คู่แข่ง:
[ใส่ URL]

Keyword ที่ต้องการติดอันดับ:
[ใส่ Keyword]

สิ่งที่ต้องการ:

1. วิเคราะห์จุดแข็งของเว็บไซต์คู่แข่ง
2. วิเคราะห์จุดอ่อนของคู่แข่ง
3. วิเคราะห์ Content Strategy
4. วิเคราะห์ Keyword ที่คู่แข่งใช้
5. เสนอวิธีที่เว็บไซต์ของเราจะชนะใน SEO

ให้คำแนะนำเชิงกลยุทธ์ที่สามารถนำไปใช้ได้จริง
`,
  promptEn: `
You are an SEO competitive analysis expert.

Analyze the SEO performance of a competitor website.

Our Website:
[Insert website]

Competitor Website:
[Insert URL]

Target Keywords:
[Insert keywords]

Please analyze:

1. Competitor strengths
2. Competitor weaknesses
3. Their content strategy
4. Keywords they target
5. How our website can outperform them

Provide practical SEO recommendations.
`,
  category: "Marketing, SEO & Writing",
  toolName: "ChatGPT",
  toolSlug: "chatgpt",
  logoUrl: "/logos/AI-Chatbot/OpenAI – ChatGPT.png"
},

{
  id: "marketing-10",
  purpose: "📈 วางแผน Content SEO ระยะยาว",
  promptTh: `
คุณคือผู้เชี่ยวชาญด้าน SEO Strategy

ช่วยสร้าง Content Plan สำหรับทำ SEO

เว็บไซต์:
[ใส่ชื่อเว็บไซต์]

หัวข้อหลักของเว็บไซต์:
[เช่น AI Tools / การตลาด / เทคโนโลยี]

กลุ่มเป้าหมาย:
[เช่น นักเรียน / นักพัฒนา / ธุรกิจ]

เป้าหมาย:
[เพิ่ม Traffic / เพิ่ม Lead / เพิ่มยอดขาย]

สิ่งที่ต้องการ:

1. เสนอหัวข้อบทความ SEO 20 หัวข้อ
2. แนะนำ Keyword สำหรับแต่ละหัวข้อ
3. แนะนำประเภทคอนเทนต์ (Guide / Tutorial / List)
4. วาง Content Strategy ระยะ 3 เดือน
5. แนะนำความถี่ในการโพสต์

Content Plan ต้องเหมาะสำหรับการเพิ่ม Organic Traffic
`,
  promptEn: `
You are an SEO strategy expert.

Create a long-term SEO content plan.

Website:
[Insert website name]

Main Website Topic:
[e.g. AI tools / marketing / technology]

Target Audience:
[e.g. students / developers / businesses]

Goal:
[increase traffic / leads / sales]

Please do the following:

1. Suggest 20 SEO blog topics
2. Recommend keywords for each topic
3. Suggest content types (guide / tutorial / list)
4. Create a 3-month content strategy
5. Recommend posting frequency

The plan should help increase organic search traffic.
`,
  category: "Marketing, SEO & Writing",
  toolName: "ChatGPT",
  toolSlug: "chatgpt",
  logoUrl: "/logos/AI-Chatbot/OpenAI – ChatGPT.png"
}

];