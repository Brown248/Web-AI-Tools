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
  // 🔹 หมวด AI เขียนโค้ด (Coding & Development) - อัปเดตใหม่ 10 ตัวท็อป
  // ==========================================
  {
    id: "c1",
    slug: "github-copilot",
    name: "GitHub Copilot",
    logoUrl: "/logos/github-copilot.png",
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
    logoUrl: "/logos/Anthropic – Claude.png",
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
      "ต้องระวังเรื่องค่าใช้จ่าย (Cost) เพราะเป็นการเรียก API หลังบ้านโดยตรง หากสั่งงานที่ต้องอ่านไฟล์เยอะๆ บ่อยๆ อาจจะเปลือง",
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
        promptEn: "claude 'Please scan all files in the /components directory. Identify any remaining React Class Components and refactor them into modern Functional Components using React Hooks (useState, useEffect). Save the changes.'"
      },
      { 
        purpose: "💡 สั่งให้ AI ช่วยเขียนสคริปต์และรันทดสอบ (Agentic Task)", 
        promptTh: "claude 'ช่วยสร้างไฟล์ Python ชื่อ data_cleaner.py สำหรับอ่านไฟล์ data.csv กำจัดแถวที่มีค่าว่าง (Null) และเซฟไฟล์ใหม่เป็น clean_data.csv เขียนเสร็จแล้วช่วยรันสคริปต์เพื่อทดสอบให้ดูหน่อยว่าได้ผลลัพธ์กี่บรรทัด'",
        promptEn: "claude 'Create a Python script named data_cleaner.py that reads data.csv, drops any rows with Null values, and saves the output as clean_data.csv. Once written, execute the script and tell me the total row count of the cleaned file.'"
      }
    ],
    faqs: [
      { question: "มันจะลบไฟล์โปรเจกต์ฉันทิ้งไหม?", answer: "Claude Code จะถามยืนยัน (Confirmation) คุณก่อนเสมอเมื่อต้องทำการลบไฟล์ หรือเปลี่ยนแปลงโครงสร้างใหญ่ๆ ครับ แนะนำให้ใช้ Git ครอบโปรเจกต์ไว้ก่อนเสมอเพื่อความปลอดภัย" }
    ]
  },
  {
    id: "c3",
    slug: "replit-ghostwriter",
    name: "Replit Ghostwriter",
    logoUrl: "/logos/Replit.png",
    description: "AI คู่หูใน Cloud IDE เขียน รัน และ Deploy โค้ดได้จบบนเว็บเบราว์เซอร์",
    longDescription: "Replit ไม่ใช่แค่แชทบอท แต่เป็นพื้นที่เขียนโค้ดบนคลาวด์ (Cloud IDE) ที่มี AI อัจฉริยะชื่อ Ghostwriter ฝังเป็นเนื้อเดียวกัน คุณไม่ต้องเสียเวลาติดตั้ง Node.js หรือ Python ในคอมพิวเตอร์ตัวเอง แค่เปิดเว็บก็เริ่มโปรเจกต์ได้เลย ความเจ๋งคือ AI ตัวนี้จะเห็นความเคลื่อนไหวทั้งหมดในโปรเจกต์ของคุณ ถ้ารันโค้ดแล้วติด Error ตัวแดงแจ้งเตือน AI จะเสนอตัวช่วยวิเคราะห์และกดปุ่ม 'Fix it' เพื่อแก้บั๊กให้ทันที เหมาะสุดๆ สำหรับการสร้างแอปแบบรวดเร็ว (MVP)",
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
      "Generate Code in Context: ไฮไลต์โค้ดแล้วคลิกขวา สั่งให้แปลงภาษา (เช่น แปลง Python เป็น JS) หรือให้มันเติมคอมเมนต์อธิบายโค้ดให้"
    ],
    pros: [
      "เหมาะกับมือใหม่มากที่สุด ลดอาการหัวร้อนจากการตั้งค่าเครื่อง (Environment Setup) ไม่ผ่าน",
      "มีระบบ Multiplayer ลิงก์โปรเจกต์ส่งให้เพื่อนเข้ามาช่วยกันพิมพ์โค้ดแก้บั๊กแบบเรียลไทม์ได้",
      "กดปุ่มเดียว Deploy นำแอปขึ้นออนไลน์ให้คนอื่นใช้งานได้เลย"
    ],
    cons: [
      "แพ็กเกจฟรีจะถูกบังคับให้โปรเจกต์เป็นแบบสาธารณะ (Public) คนอื่นเห็น Source Code เราได้",
      "หากพัฒนาโปรเจกต์ระบบใหญ่มากๆ การเขียนและรันบนเบราว์เซอร์อาจจะเกิดอาการหน่วงได้"
    ],
    steps: [
      { title: "สร้าง Repl (โปรเจกต์)", desc: "สมัครสมาชิก กดปุ่ม Create Repl เลือกภาษาที่อยากเขียน เช่น Python หรือ Next.js" },
      { title: "ใช้ AI สร้างโครง", desc: "เปิดช่องแชทด้านขวา พิมพ์สั่งให้ AI สร้างไฟล์ตั้งต้นและไลบรารีที่จำเป็น" },
      { title: "รันและแก้บั๊ก", desc: "กดปุ่ม 'Run' หากมี Error ให้กดปุ่ม 'Explain Error' เพื่อให้ AI ช่วยแก้ไข" }
    ],
    prompts: [
      { 
        purpose: "💡 สร้างโครงแอปขูดข้อมูลเว็บไซต์ด้วย Python (Web Scraping)", 
        promptTh: "ฉันต้องการสร้างสคริปต์ Python เพื่อขูดข้อมูล (Scrape) ราคาสินค้าจากเว็บไซต์ [ระบุ URL] ช่วยเขียนโครงสร้างโค้ดเริ่มต้นโดยใช้ BeautifulSoup ให้หน่อย และเขียนฟังก์ชันสำหรับเซฟข้อมูลที่ได้ลงไฟล์ CSV ด้วย",
        promptEn: "I want to build a Python script to scrape product prices from [Insert URL]. Please generate the boilerplate code using the BeautifulSoup library. Also, include a function to save the extracted data into a CSV file."
      },
      { 
        purpose: "💡 ให้ AI เติมคอมเมนต์อธิบายโค้ดให้คนอื่นเข้าใจ (Code Documentation)", 
        promptTh: "[ไฮไลต์บล็อกโค้ดแล้วเลือก AI]\nช่วยอธิบายการทำงานของลูปนี้แบบทีละสเต็ปด้วยภาษาที่เข้าใจง่าย และช่วยเติม Inline Comments (// หรือ #) เข้าไปในโค้ดแต่ละบรรทัดให้ด้วย เพื่อให้เพื่อนร่วมทีมมาอ่านต่อได้",
        promptEn: "Please explain the logic of this highlighted loop step-by-step in plain English. After explaining, inject clear inline comments into the code block so that junior developers on my team can easily understand it."
      }
    ],
    faqs: [
      { question: "สามารถโหลดโค้ดที่เขียนบนเว็บกลับมาลงคอมตัวเองได้ไหม?", answer: "ได้ครับ สามารถกดดาวน์โหลดโปรเจกต์ออกมาเป็นไฟล์ .zip หรือจะเชื่อมต่อกับ GitHub Repository ของคุณเพื่อ Push โค้ดเก็บไว้ก็ได้เช่นกัน" }
    ]
  },
  {
    id: "c4",
    slug: "blackbox-ai",
    name: "Blackbox AI",
    logoUrl: "/logos/blackbox.png",
    description: "เครื่องมือวิเคราะห์และแนะนำโค้ดที่ครอบคลุม ช่วยหาโค้ด Snippet ตอบโจทย์ได้ไว",
    longDescription: "Blackbox AI เริ่มต้นจากการเป็นเครื่องมือยอดฮิตที่ให้คุณก๊อปปี้ข้อความโค้ดจากวิดีโอ (Video to Text) ก่อนจะพัฒนาตัวเองมาเป็น AI Coding Assistant เต็มรูปแบบ จุดเด่นของ Blackbox คือมีระบบ 'AI Code Search' ที่ทรงพลัง เหมือนเป็น Google สำหรับโปรแกรมเมอร์โดยเฉพาะ เมื่อคุณถามวิธีแก้ปัญหา มันจะดึงตัวอย่างโค้ด (Snippets) ที่ใช้งานได้จริงจากฐานข้อมูลขนาดใหญ่มาให้ พร้อมมี Extension สำหรับผูกกับ IDE เพื่อช่วยแนะนำโค้ดและเขียนเอกสารประกอบ (Documentation) ได้อัตโนมัติ",
    origin: "สร้างขึ้นเพื่อแก้ปัญหานักพัฒนาที่ใช้เวลาหลายชั่วโมงในการค้นหาวิธีแก้บั๊กบน StackOverflow โดย Blackbox รวบรวมคำตอบที่ดีที่สุดมาเสิร์ฟให้ในหน้าต่างเดียว",
    category: "Coding & Development",
    priceModel: "Free (ฟีเจอร์พื้นฐาน) / Starts at $0.99/เดือน สำหรับ Pro",
    isFree: true,
    externalUrl: "https://www.blackbox.ai",
    rating: 4.5,
    reviewCount: 9200,
    updatedAt: "Feb 2026",
    features: [
      "Code Search Engine: ค้นหาวิธีแก้ปัญหาและสคริปต์โค้ดจากคำถามภาษามนุษย์",
      "Auto Documentation: กดคลิกเดียวเพื่อสแกนโค้ดและสร้างเอกสาร README หรือ Comment อธิบายโค้ด",
      "Image to Code: อัปโหลดภาพหน้าจอ UI (Screenshot) แล้วให้ AI เขียนโค้ด HTML/CSS จำลองตามภาพนั้น"
    ],
    pros: [
      "หาตัวอย่างโค้ด (Snippets) มาใช้งานได้เร็วมาก ประหยัดเวลาค้นหา",
      "ฟีเจอร์ Image to Code ทำงานได้น่าประทับใจ ช่วยขึ้นโครงหน้าเว็บได้รวดเร็ว",
      "ราคาแพ็กเกจพรีเมียมค่อนข้างถูกเมื่อเทียบกับคู่แข่งในตลาด"
    ],
    cons: [
      "ความสามารถในการเข้าใจ Context โปรเจกต์ขนาดใหญ่ยังเป็นรอง Copilot และ Cursor",
      "UI บนหน้าเว็บอาจจะดูรกๆ ไปบ้างในบางฟีเจอร์"
    ],
    steps: [
      { title: "ค้นหาปัญหา", desc: "เข้าไปที่หน้าเว็บ Blackbox.ai แล้วพิมพ์ปัญหาที่คุณเจอ เช่น 'how to connect MongoDB in Next.js'" },
      { title: "เลือก Snippet", desc: "AI จะพ่นตัวอย่างโค้ดมาให้ คุณสามารถก๊อปปี้ไปปรับใช้ได้เลย" },
      { title: "ใช้งานใน IDE", desc: "โหลด Extension มาติดตั้งใน VS Code เพื่อใช้งานฟีเจอร์ Autocomplete" }
    ],
    prompts: [
      { 
        purpose: "💡 สั่งสร้างเอกสาร Readme สำหรับโปรเจกต์ (Documentation)", 
        promptTh: "ช่วยเขียนไฟล์ README.md สำหรับโปรเจกต์ Next.js ของฉันหน่อย โครงการนี้คือ [ระบุเป้าหมาย เช่น เว็บแอปพลิเคชันสำหรับเรียนภาษาอังกฤษ] โดยต้องมีหัวข้อ: วิธีการติดตั้ง (Installation), ตัวแปร Environment (.env) ที่ต้องใช้, และโครงสร้างโฟลเดอร์",
        promptEn: "Generate a professional README.md file for my Next.js project. The project is a [Insert goal e.g., platform for learning English]. Include the following sections: Installation Guide, Required Environment Variables (.env), and Folder Structure overview."
      },
      { 
        purpose: "💡 ให้หาโค้ดเชื่อมต่อฐานข้อมูลแบบเร็วๆ (Code Search)", 
        promptTh: "ขอตัวอย่างโค้ด (Snippet) ที่สั้นและกระชับที่สุด สำหรับการเชื่อมต่อฐานข้อมูล PostgreSQL โดยใช้ Prisma ORM ในโปรเจกต์ TypeScript",
        promptEn: "Provide the most concise code snippet to establish a connection to a PostgreSQL database using Prisma ORM in a TypeScript project."
      }
    ],
    faqs: [
      { question: "ฟีเจอร์ Image to Code รองรับภาษาอะไรบ้าง?", answer: "รองรับการแปลงรูปภาพเป็นโค้ด HTML, CSS, Tailwind CSS และ React (JSX) เป็นหลักครับ เหมาะกับการร่าง UI พื้นฐาน" }
    ]
  },
  {
    id: "c5",
    slug: "amazon-q-developer",
    name: "Amazon Q Developer",
    logoUrl: "/logos/Amazon.png", // สมมติโลโก้ Amazon (ถ้ามี)
    description: "ผู้ช่วยเขียนโค้ดสาย Cloud และ Enterprise จาก AWS โดดเด่นเรื่องการทำ Code Review และ Security",
    longDescription: "Amazon Q Developer (รีแบรนด์และอัปเกรดจาก CodeWhisperer) คือ AI ที่เกิดมาเพื่อ 'องค์กรและสายคลาวด์' แม้จะช่วยเติมโค้ดและแชทได้เหมือน Copilot แต่ไม้ตายของมันคือ 'ความเชี่ยวชาญในระบบ AWS' ถ้าคุณเขียนโค้ดเพื่อ Deploy บน AWS มันจะแนะนำวิธีที่ดีที่สุด (Best Practices) ให้ นอกจากนี้ยังมีระบบสแกนความปลอดภัย (Security Scan) ที่คอยตรวจจับโค้ดของคุณว่ามีช่องโหว่ (Vulnerability) หรือมีเผลอพิมพ์รหัสผ่านฝังไว้ในโค้ดหรือไม่ พร้อมแนะนำวิธีอุดรอยรั่วนั้นให้เสร็จสรรพ",
    origin: "สร้างโดย Amazon Web Services (AWS) โดยเน้นจุดขายเรื่องความปลอดภัยระดับ Enterprise และเป็น AI ตัวเดียวที่กล้าการันตีเรื่องลิขสิทธิ์ (Reference Tracker) ว่าโค้ดที่ AI แนะนำมานั้นไปซ้ำกับ Open Source ตัวไหนไหม เพื่อป้องกันบริษัทถูกฟ้อง",
    category: "Coding & Development",
    priceModel: "Free (สำหรับผู้ใช้รายบุคคล) / $19 ต่อเดือน สำหรับ Pro",
    isFree: true,
    externalUrl: "https://aws.amazon.com/q/developer/",
    rating: 4.7,
    reviewCount: 5100,
    updatedAt: "Feb 2026",
    features: [
      "Security Scans: สแกนโค้ดในโปรเจกต์เพื่อหาช่องโหว่ความปลอดภัยแบบเรียลไทม์",
      "AWS Expert: สั่งให้เขียนสคริปต์ Infrastructure (เช่น Terraform, CloudFormation) ได้แม่นยำมาก",
      "Legacy Code Upgrade: ฟีเจอร์ขั้นเทพที่ช่วยอัปเกรดโค้ดเวอร์ชันเก่า (เช่น อัปเกรด Java 8 เป็น 17) ให้ทั้งโปรเจกต์"
    ],
    pros: [
      "เวอร์ชัน Free Tier ให้มาคุ้มค่ามาก (มีระบบสแกนความปลอดภัยให้ใช้ฟรีด้วย)",
      "มีระบบ Reference Tracker แจ้งเตือนลิขสิทธิ์โค้ด ทำให้องค์กรนำไปใช้ได้อย่างสบายใจ",
      "ใครที่ทำงานสาย DevOps หรือใช้ AWS เป็นประจำ ตัวนี้คือผู้ช่วยที่เก่งที่สุด"
    ],
    cons: [
      "การแนะนำโค้ดฝั่ง Frontend (เช่น UI สวยๆ) ยังไม่ลื่นไหลเท่า Copilot หรือ Cursor",
      "การตั้งค่าเข้าใช้งานครั้งแรก (Authentication) แอบมีความซับซ้อนตามสไตล์เครื่องมือ AWS"
    ],
    steps: [
      { title: "โหลด Extension", desc: "ติดตั้ง AWS Toolkit ใน VS Code หรือ JetBrains" },
      { title: "ล็อกอิน AWS Builder ID", desc: "สมัครและล็อกอินด้วยบัญชี AWS Builder ID (ใช้งานได้ฟรี)" },
      { title: "ใช้งานคู่กับ AWS", desc: "พิมพ์ขอสคริปต์เซ็ตอัปเซิร์ฟเวอร์ หรือกดปุ่มสแกน Security ในแผงควบคุม" }
    ],
    prompts: [
      { 
        purpose: "💡 สั่งให้เขียนสคริปต์อัปโหลดไฟล์ขึ้น AWS S3", 
        promptTh: "ช่วยเขียนฟังก์ชันภาษา Python โดยใช้ไลบรารี boto3 เพื่ออัปโหลดไฟล์รูปภาพจากเครื่องโลคอล ขึ้นไปยัง AWS S3 Bucket ที่ชื่อ '[ระบุชื่อ Bucket]' โดยให้ตั้งค่าสิทธิ์ไฟล์เป็นแบบ Private และคืนค่า URL กลับมา",
        promptEn: "Write a Python function using the boto3 library to upload a local image file to an AWS S3 Bucket named '[Insert Bucket Name]'. Ensure the uploaded file permissions are set to Private, and return the presigned URL."
      },
      { 
        purpose: "💡 สั่งสแกนหาจุดอ่อนความปลอดภัย (Security Check)", 
        promptTh: "[ใช้แผงควบคุม Q Developer]\nช่วยสแกนไฟล์ authentication.js นี้ให้หน่อยว่ามีช่องโหว่ความปลอดภัยประเภท SQL Injection หรือ XSS หลุดรอดอยู่ไหม? ถ้าเจอช่วยเขียนโค้ดอัปเดตเพื่อป้องกันการโจมตีให้ด้วย",
        promptEn: "Scan this authentication.js file for any security vulnerabilities, particularly SQL Injection or Cross-Site Scripting (XSS). If found, provide the remediated code to secure the inputs."
      }
    ],
    faqs: [
      { question: "ถ้าไม่ได้ใช้ AWS เลย ใช้ตัวนี้จะคุ้มไหม?", answer: "ยังคุ้มค่าครับ เพราะฟีเจอร์พื้นฐานอย่าง Autocomplete และหน้าต่าง Chat ก็ใช้งานกับโปรเจกต์ทั่วไป (เช่น สร้างเว็บ React) ได้ดี แถมใช้ฟรีด้วยครับ" }
    ]
  },
  {
    id: "c6",
    slug: "cursor",
    name: "Cursor",
    logoUrl: "/logos/cursor.png", // สมมติโลโก้
    description: "Code Editor ขุมพลัง AI แห่งยุค เข้าใจโค้ดทั้งโปรเจกต์ สั่งแก้บั๊กข้ามไฟล์ได้สุดโหด",
    longDescription: "Cursor คือดาวรุ่งพุ่งแรงที่สุดในวงการตอนนี้! มันไม่ใช่แค่ Extension แต่เป็นโปรแกรม Code Editor (ที่ Fork มาจาก VS Code ทำให้ใช้ Extension เดิมได้หมด) แต่ฝังขุมพลัง AI เข้าไปลึกถึงแก่น จุดแข็งที่คู่แข่งต้องยอมแพ้คือฟีเจอร์ 'Composer' และคำสั่ง 'Cmd+K' ที่คุณสามารถไฮไลต์โค้ด แล้วสั่งให้ AI แก้ไข หรือสั่งให้มัน 'สร้างฟีเจอร์ใหม่ที่ต้องแก้ไฟล์ 5 ไฟล์พร้อมกัน' มันก็สามารถเปิดไฟล์และแก้โค้ดให้สัมพันธ์กันทั้งโปรเจกต์ได้ (Project-wide Understanding) ถือเป็นอาวุธลับของ Startup ยุคนี้",
    origin: "สร้างโดยทีม Anysphere ด้วยความเชื่อที่ว่า การพึ่งพาแค่ Extension บน IDE ตัวเก่านั้นมีข้อจำกัด พวกเขาจึงสร้าง Editor ตัวใหม่ที่ให้ AI เป็นศูนย์กลางการทำงาน (AI-First) โดยมีผู้สนับสนุนหลักคือ OpenAI",
    category: "Coding & Development",
    priceModel: "Free (จำกัดการเรียกโมเดลเทพ) / Pro $20 ต่อเดือน",
    isFree: true,
    externalUrl: "https://cursor.com",
    rating: 4.9,
    reviewCount: 31000,
    updatedAt: "Feb 2026",
    features: [
      "Cmd+K (Ctrl+K): ไฮไลต์โค้ด กดคีย์ลัด แล้วพิมพ์สั่งแก้โค้ดตรงนั้นได้เลย AI จะขึ้นแถบสีเทียบ Before/After ให้ดู",
      "Cursor Composer: แผงควบคุมใหญ่ที่คุณสั่งงานระดับโปรเจกต์ เช่น 'เพิ่มระบบ Login' AI จะร่างไฟล์ทั้ง Frontend/Backend มาให้ทีเดียว",
      "Codebase Indexing: AI อ่านและจำโค้ดของคุณทั้งโปรเจกต์ ถามคำถามข้ามโฟลเดอร์ก็ตอบได้แม่นยำ"
    ],
    pros: [
      "ประสบการณ์ใช้งาน (UX) ไหลลื่นที่สุด สั่งแก้โค้ดได้รวดเร็วเหมือนมีโปรแกรมเมอร์ซีเนียร์มานั่งพิมพ์ให้",
      "หน้าตาและคีย์ลัดเหมือน VS Code 100% กดย้ายมาใช้ได้เลยโดยไม่ต้องปรับตัว",
      "สามารถเลือกโมเดล AI ตัวท็อปได้ตามใจชอบ (เช่น GPT-4o, Claude 3.5 Sonnet)"
    ],
    cons: [
      "แพ็กเกจฟรีให้โควต้าใช้โมเดลระดับสูง (Premium Models) น้อยไปหน่อย ถ้าใช้เต็มที่ต้องจ่ายรายเดือน",
      "การจัดการ Indexing กับโปรเจกต์ที่มีขนาดมโหฬารมากๆ (ระดับ Enterprise) อาจจะกินแรมเครื่อง"
    ],
    steps: [
      { title: "ดาวน์โหลดโปรแกรม", desc: "โหลด Cursor จากเว็บมาติดตั้ง (มันจะถามว่าอยาก Import การตั้งค่าจาก VS Code มาเลยไหม ให้กด Yes)" },
      { title: "สร้าง/เปิดโปรเจกต์", desc: "ลากโฟลเดอร์งานเข้าไป แล้วปล่อยให้ Cursor ทำการ Index โค้ดสักครู่" },
      { title: "ใช้คำสั่ง Cmd+K", desc: "ไฮไลต์บรรทัดโค้ด กด Cmd+K (หรือ Ctrl+K) แล้วสั่งให้ AI ปรับแก้โค้ดได้เลย" }
    ],
    prompts: [
      { 
        purpose: "💡 สั่งทำ Refactoring ยกแผง (ใช้ฟีเจอร์ Composer)", 
        promptTh: "โปรเจกต์นี้ใช้ CSS ธรรมดาอยู่ ฉันต้องการย้ายไปใช้ Tailwind CSS ทั้งหมด ช่วยสแกนไฟล์หน้าเว็บในโฟลเดอร์ /pages แล้วเปลี่ยน Class name ทั้งหมดให้เป็น Tailwind โดยคุมโทนสีให้เป็นสไตล์ [ระบุสไตล์ เช่น Minimal ขาวดำ] จัดการแก้ทุกไฟล์ที่เกี่ยวข้องให้หน่อย",
        promptEn: "This project currently uses standard CSS. I want to migrate entirely to Tailwind CSS. Scan all web pages in the /pages directory and convert all styling into equivalent Tailwind utility classes. Maintain a [Insert style e.g., minimalist black-and-white] aesthetic. Apply changes across all relevant files."
      },
      { 
        purpose: "💡 สั่งสร้าง Component ใหม่ (Cmd+K)", 
        promptTh: "[ไฮไลต์พื้นที่ว่างในไฟล์ หน้า Layout]\nสร้าง Navigation Bar ด้านบน ประกอบด้วยโลโก้ฝั่งซ้าย ลิงก์เมนู 3 อันตรงกลาง และปุ่ม Login ฝั่งขวา ทำให้เป็นแบบ Responsive (พับเป็นเมนูแฮมเบอร์เกอร์ในมือถือ) ใช้ Next.js และ Tailwind",
        promptEn: "Create a top Navigation Bar component. It should have a logo on the left, 3 menu links in the center, and a Login button on the right. Make it fully responsive (collapsing into a hamburger menu on mobile devices). Use Next.js and Tailwind CSS."
      }
    ],
    faqs: [
      { question: "ต้องเลิกใช้ VS Code ไหมถ้ามาใช้ Cursor?", answer: "สามารถใช้สลับกันได้ครับ เพราะโฟลเดอร์งานคือที่เดียวกัน แต่ส่วนใหญ่คนที่ลองใช้ Cursor แล้ว มักจะลบ VS Code ทิ้งเพราะติดใจความไวของ AI ครับ" }
    ]
  },
  {
    id: "c7",
    slug: "codeium",
    name: "Codeium",
    logoUrl: "/logos/codeium.png", // สมมติโลโก้
    description: "ทางเลือกฟรีที่ท้าชน Copilot ปั่นโค้ดไวทะลุนรก รองรับ IDE แทบทุกสำนัก",
    longDescription: "หากคุณเป็นนักศึกษาหรือ Dev ที่ไม่อยากเสียเงินรายเดือน Codeium คือ 'ของฟรีที่ดีที่สุด' ในตลาดตอนนี้! มันคือ AI Code Autocomplete ที่เคลมว่าทำงานได้เร็วกว่าคู่แข่ง และให้ความแม่นยำสูงลิ่ว Codeium ให้ฟีเจอร์หลักๆ มาครบ ทั้งการเติมโค้ด แชทถามตอบ และการอธิบายโค้ด แถมยังใจกว้างรองรับ IDE มากกว่า 40 ตัว (ตั้งแต่ตัวฮิตๆ ไปจนถึง Vim หรือ Emacs) ทำให้คอมมูนิตี้ผู้ใช้งานเติบโตอย่างก้าวกระโดด",
    origin: "พัฒนาโดยทีมวิศวกรที่เชี่ยวชาญด้าน Deep Learning Infrastructure ทำให้พวกเขาสามารถรีดประสิทธิภาพการประมวลผล (Latency) ให้เสิร์ฟโค้ดถึงมือโปรแกรมเมอร์ได้รวดเร็วปานสายฟ้า ในขณะที่ยังคงให้ใช้งานแพ็กเกจส่วนบุคคล (Individual) ได้ฟรีตลอดชีพ",
    category: "Coding & Development",
    priceModel: "Free ตลอดชีพ (สำหรับรายบุคคล) / Teams $12/เดือน",
    isFree: true,
    externalUrl: "https://codeium.com",
    rating: 4.7,
    reviewCount: 15200,
    updatedAt: "Feb 2026",
    features: [
      "Lightning Fast Autocomplete: เสนอโค้ดล่วงหน้าด้วยความเร็วที่แทบไม่มีดีเลย์",
      "Universal Compatibility: มี Extension รองรับ IDE และโปรแกรม Editor ยิบย่อยแทบทุกตัวบนโลก",
      "Codeium Chat: หน้าต่างแชทใน IDE ที่ให้ใช้ฟรีแบบไม่มีกั๊กโควต้า"
    ],
    pros: [
      "ของฟรีที่คุณภาพระดับ Enterprise คุ้มค่าที่สุดสำหรับผู้ใช้งานทั่วไป",
      "ความเร็วในการเสนอโค้ด (Suggestion) ไวมาก ทำให้ Flow การพิมพ์ไม่สะดุด",
      "ติดตั้งง่าย ไม่ต้องผูกบัตรเครดิตเพื่อทดลองใช้"
    ],
    cons: [
      "ความเก่งในการทำความเข้าใจโครงสร้างโปรเจกต์ใหญ่ๆ (Context Awareness) อาจจะยังตามหลัง Cursor เล็กน้อย",
      "หากใช้ภาษาโปรแกรมที่เฉพาะกลุ่มมากๆ อาจจะเสนอโค้ดได้ไม่แม่นยำเท่าภาษาหลัก (Python/JS)"
    ],
    steps: [
      { title: "เลือก IDE ของคุณ", desc: "เข้าไปที่เว็บ Codeium เพื่อดูลิสต์ IDE แล้วกดโหลด Extension ที่ตรงกับโปรแกรมคุณ" },
      { title: "สร้างบัญชี", desc: "สมัครสมาชิก Codeium ฟรีเพื่อรับสิทธิ์การใช้งาน" },
      { title: "เริ่มพิมพ์โค้ด", desc: "พิมพ์คอมเมนต์หรือฟังก์ชัน AI จะพ่นข้อความสีเทามาให้ กด Tab เพื่อใช้งาน" }
    ],
    prompts: [
      { 
        purpose: "💡 สร้าง API Endpoint อย่างรวดเร็วด้วย Python (FastAPI)", 
        promptTh: "# สร้าง FastAPI endpoint (เมธอด GET) ที่ path '/users/{user_id}'\n# หน้าที่: ค้นหา user จาก database (สมมติข้อมูลขึ้นมา) ถ้าไม่เจอให้โยน Error 404\n# รีเทิร์นผลลัพธ์: คืนค่าเป็น JSON อิงตาม Pydantic model",
        promptEn: "# Create a FastAPI GET endpoint at the path '/users/{user_id}'.\n# Functionality: Search for the user in a mock database. If not found, raise an HTTP 404 Exception.\n# Return: Return the user data serialized via a Pydantic model."
      },
      { 
        purpose: "💡 ให้ AI เขียน Regular Expression (Regex) ที่แสนน่าปวดหัว", 
        promptTh: "[เปิดหน้าแชท Codeium]\nช่วยเขียน Regex ในภาษา JavaScript สำหรับตรวจสอบรูปแบบ 'รหัสผ่าน' โดยมีเงื่อนไขคือ: ต้องยาว 8-20 ตัวอักษร, มีตัวพิมพ์ใหญ่อย่างน้อย 1 ตัว, ตัวพิมพ์เล็ก 1 ตัว, ตัวเลข 1 ตัว และสัญลักษณ์พิเศษ 1 ตัว พร้อมยกตัวอย่างโค้ดทดสอบให้ดูด้วย",
        promptEn: "Write a Regular Expression (Regex) in JavaScript to validate a password. Conditions: It must be 8-20 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character. Provide test cases as well."
      }
    ],
    faqs: [
      { question: "ทำไมเขาถึงให้ใช้ฟรี เขาแอบเอาโค้ดเราไปขายไหม?", answer: "Codeium ยืนยันใน Privacy Policy ว่าจะไม่นำโค้ดของผู้ใช้แบบรายบุคคล (Individual) ไปฝึกฝนโมเดลสร้างรายได้ครับ โมเดลธุรกิจเขาคือการแจกฟรีให้คนทั่วไป เพื่อให้คนนำไปบอกต่อให้ 'บริษัท' มาซื้อแพ็กเกจ Teams ครับ" }
    ]
  },
  {
    id: "c8",
    slug: "tabnine",
    name: "Tabnine",
    logoUrl: "/logos/tabnine.png", // สมมติโลโก้
    description: "AI คู่ใจองค์กรใหญ่ เน้นความเป็นส่วนตัว รันแบบ Local ได้ ข้อมูลไม่รั่วไหลชัวร์ 100%",
    longDescription: "ในโลกธุรกิจที่ Source Code คือความลับขั้นสูงสุด การส่งโค้ดผ่านเน็ตไปให้ AI ของบริษัทอื่นประมวลผลคือเรื่องต้องห้าม Tabnine จึงเกิดมาเพื่อปิดจุดอ่อนนี้! มันคือ AI Coding Assistant ที่มีจุดเด่นระดับเทพคือ 'Privacy-First' บริษัทสามารถเลือกที่จะรัน Tabnine บนเซิร์ฟเวอร์ส่วนตัว (On-Premises) หรือรันบนคอมพิวเตอร์ของโปรแกรมเมอร์ (Local) ได้เลย แปลว่าโค้ดทุกบรรทัดจะไม่ถูกส่งออกสู่อินเทอร์เน็ต ทำให้องค์กรระดับธนาคารหรือหน่วยงานรัฐกล้าใช้งาน",
    origin: "เป็นหนึ่งในผู้เล่นยุคแรกสุดของวงการ AI Autocomplete (ก่อตั้งมาก่อน Copilot) Tabnine ค่อยๆ ปรับตัวจากการเป็นแค่เอนจินเดาคำ ไปสู่เป้าหมายในการเป็นโซลูชันระดับ Enterprise ที่ปรับแต่ง AI ให้เรียนรู้เฉพาะโค้ดภายในของบริษัท (Custom Models) ได้",
    category: "Coding & Development",
    priceModel: "Free (Basic) / Pro $12/เดือน / Enterprise",
    isFree: true,
    externalUrl: "https://www.tabnine.com",
    rating: 4.5,
    reviewCount: 4800,
    updatedAt: "Feb 2026",
    features: [
      "Total Privacy: โหมด Local ทำงานแบบออฟไลน์ โค้ดไม่หลุดออกจากเครื่อง",
      "Highly Personalized: AI จะเรียนรู้สไตล์การเขียนโค้ดของคุณ หรือฐานข้อมูลโค้ดของบริษัท เพื่อแนะนำคำสั่งที่ตรงแพทเทิร์นทีม",
      "Enterprise Ready: มีระบบจัดการสิทธิ์ผู้ใช้งาน (Admin Panel) เหมาะสำหรับองค์กรขนาดใหญ่"
    ],
    pros: [
      "ความปลอดภัยและความเป็นส่วนตัวสูงสุด ไร้ความกังวลเรื่องข้อมูลบริษัทรั่วไหล (Zero Data Retention)",
      "ยิ่งใช้งานนาน AI ยิ่งปรับตัวเข้ากับสไตล์การตั้งชื่อตัวแปรของโปรเจกต์คุณได้เนียนขึ้น",
      "กินทรัพยากรเครื่องน้อยเมื่อเทียบกับส่วนขยาย AI ตัวอื่นๆ"
    ],
    cons: [
      "ในโหมดใช้งานแบบ Local/ออฟไลน์ ความฉลาดในการเขียนโค้ดยาวๆ จะสู้พวกที่รันผ่าน Cloud อย่าง Copilot ไม่ได้ (ได้แค่เติมคำสั้นๆ)",
      "หน้าต่างแชท (Tabnine Chat) ยังดูไม่ครบเครื่องเท่าคู่แข่ง"
    ],
    steps: [
      { title: "ติดตั้งใน IDE", desc: "โหลด Extension 'Tabnine' ผ่าน VS Code หรือ IntelliJ" },
      { title: "ตั้งค่า Privacy", desc: "เลือกโหมดการทำงาน (Cloud หรือ Local) ตามนโยบายความปลอดภัยของคุณ" },
      { title: "พิมพ์และให้ AI เดาใจ", desc: "AI จะค่อยๆ ซึมซับสไตล์โค้ดของคุณ และเสนอการเติมเต็ม (Completion) ที่ตรงกับใจคุณมากขึ้นเรื่อยๆ" }
    ],
    prompts: [
      { 
        purpose: "💡 ให้ AI เติมแพทเทิร์นโค้ดสไตล์องค์กร (Boilerplate Generation)", 
        promptTh: "[เปิดไฟล์ใหม่ แล้วพิมพ์โครงสร้างนำร่องให้ AI สานต่อ]\n// Controller สำหรับจัดการข้อมูลพนักงาน (อิงตามสถาปัตยกรรมของบริษัท)\nclass EmployeeController { \n  // ฟังก์ชัน Get พนักงานทั้งหมด\n",
        promptEn: "// Employee Data Controller (following internal company architecture)\nclass EmployeeController { \n  // Function to fetch all employees\n"
      },
      { 
        purpose: "💡 สร้าง Unit Test ระดับ Enterprise", 
        promptTh: "ช่วยเขียน Unit Test (ใช้ไลบรารี Jest) สำหรับฟังก์ชัน คำนวณภาษี นี้ให้หน่อย ขอให้ครอบคลุม Edge cases ทั้งหมด เช่น ค่าติดลบ, ค่าเป็นศูนย์, และกรณีที่ส่งตัวแปรผิดประเภท (Type mismatch)",
        promptEn: "Write comprehensive Unit Tests (using Jest) for this Tax Calculation function. Ensure you cover all edge cases, including: negative values, zero values, and Type mismatches."
      }
    ],
    faqs: [
      { question: "ถ้าใช้แบบฟรี 100% มันทำอะไรได้บ้าง?", answer: "แบบฟรีจะได้แค่ฟีเจอร์ Basic Autocomplete ครับ คือการเดาคำ หรือเดาบรรทัดสั้นๆ 1 บรรทัด (คล้ายๆ ฟีเจอร์เดาคำในมือถือ) จะสั่งให้สร้างโค้ดทั้งก้อนไม่ได้ครับ" }
    ]
  },
  {
    id: "c9",
    slug: "sourcegraph-cody",
    name: "Sourcegraph Cody",
    logoUrl: "/logos/sourcegraph.png", // สมมติโลโก้
    description: "นักสืบหาโค้ด AI Agent ที่เก่งที่สุดในการดำน้ำทำความเข้าใจ Codebase ระดับแสนบรรทัด",
    longDescription: "ลองจินตนาการว่าคุณเพิ่งย้ายงานใหม่ แล้วต้องไปรับช่วงต่อโปรเจกต์มรดก (Legacy Project) ที่มีโค้ด 5 แสนบรรทัด ไม่มีใครอธิบายได้ว่ามันทำงานยังไง... นั่นคือหน้าที่ของ Sourcegraph Cody! เครื่องมือตัวนี้ถูกสร้างมาเหนือกว่าระบบแชทธรรมดา เพราะมันใช้เทคโนโลยี RAG (Retrieval-Augmented Generation) เจาะลึกเข้าไปอ่านโครงสร้างไฟล์ (Codebase Context) ทั้งหมดขององค์กร เมื่อคุณถามว่า 'ระบบตัดเงินผูกกับ API ตัวไหน?' Cody จะดำน้ำลงไปดึงไฟล์ 10 ไฟล์ที่เกี่ยวข้องมาประกอบร่างเป็นคำตอบให้คุณอย่างแม่นยำ ถือเป็นพระเอกขี่ม้าขาวของทีม Dev องค์กรใหญ่",
    origin: "Sourcegraph เป็นบริษัทที่ทำระบบ Universal Code Search (ระบบค้นหาโค้ดระดับองค์กร) มาก่อน เมื่อผสานรวมพลังการค้นหาที่รวดเร็วของตนเองเข้ากับ AI LLM จึงเกิดเป็น 'Cody' AI ที่หาของเก่งที่สุดในวงการ",
    category: "Coding & Development",
    priceModel: "Free (จำกัดปริมาณ) / Pro $9 ต่อเดือน / Enterprise",
    isFree: true,
    externalUrl: "https://sourcegraph.com/cody",
    rating: 4.8,
    reviewCount: 5600,
    updatedAt: "Feb 2026",
    features: [
      "Codebase-Aware Chat: ถามคำถามโดยอิงความรู้จากทั้งโปรเจกต์ (หรือหลาย Repository พร้อมกัน)",
      "Explain Code & Architecture: ให้ AI วาดภาพหรืออธิบายสถาปัตยกรรมรวมของโฟลเดอร์งานได้",
      "One-click Unit Tests & Docs: ไฮไลต์โค้ดแล้วกดสั่งสร้าง Test หรือเอกสารได้แม่นกว่าค่ายอื่นเพราะมันอ่านบริบทไฟล์รอบๆ ด้วย"
    ],
    pros: [
      "สวรรค์ของคนที่ต้องดูแลระบบใหญ่ (Enterprise Monoliths) ช่วยย่นเวลาทำความเข้าใจโปรเจกต์เก่าได้มหาศาล",
      "อ้างอิงแหล่งที่มาได้ชัดเจน เวลา AI ตอบ มันจะบอกด้วยว่าอ่านมาจากไฟล์ชื่ออะไร บรรทัดไหน",
      "ราคา Pro ถือว่าจับต้องได้ง่ายมาก (คุ้มกว่าซื้อกาแฟ 2 แก้ว)"
    ],
    cons: [
      "ระบบทำดัชนี (Indexing) เริ่มต้นสำหรับโปรเจกต์ใหญ่อาจจะใช้เวลาเตรียมตัวนานเล็กน้อย",
      "หากใช้กับโปรเจกต์เล็กๆ จิ๋วๆ (เช่น ไฟล์เดียวจบ) อาจจะไม่เห็นความเก่งที่แท้จริงของมัน"
    ],
    steps: [
      { title: "ติดตั้ง Extension", desc: "โหลด Cody เข้า IDE (VS Code, JetBrains)" },
      { title: "เตรียมฐานข้อมูลโค้ด", desc: "เปิดโปรเจกต์แล้วรอให้ Cody ทำการสแกน (Index) โค้ดทั้งหมดของคุณ" },
      { title: "ถามคำถามกว้างๆ", desc: "เปิดแชทแล้วพิมพ์ถามถึงระบบโดยรวม AI จะรวบรวมไฟล์มาตอบให้" }
    ],
    prompts: [
      { 
        purpose: "💡 สั่งให้อธิบายสถาปัตยกรรมและหาต้นตอโค้ด (Architecture Analysis)", 
        promptTh: "[ใช้หน้าต่างแชทของ Cody]\nอ้างอิงจาก Codebase ทั้งหมดนี้ ช่วยอธิบายหน่อยว่าระบบ 'ตะกร้าสินค้า (Shopping Cart)' มีขั้นตอนการทำงาน (Flow) อย่างไร? เริ่มตั้งแต่ User กดปุ่ม Add to cart ไปจนถึงการเซฟลง Database มีไฟล์ไหนเกี่ยวข้องบ้าง ขอสรุปเป็นข้อๆ",
        promptEn: "Based on the entire codebase, please explain the workflow of the 'Shopping Cart' system. Trace the flow starting from when a user clicks the 'Add to cart' button all the way to when the data is persisted in the database. List all files involved in this process."
      },
      { 
        purpose: "💡 ค้นหาและเตรียมแก้ไขจุดที่เกิดผลกระทบวงกว้าง (Impact Analysis)", 
        promptTh: "ฉันต้องการแก้ไขรูปแบบตัวแปรในตาราง 'User_Profile' ถ้าฉันแก้ไขไฟล์ Schema ตรงนี้ มันจะส่งผลกระทบให้ไฟล์อื่นๆ ในโปรเจกต์ (เช่น หน้า Frontend หรือไฟล์ Service) พังบ้างไหม? ช่วยลิสต์ไฟล์ทั้งหมดที่ฉันต้องเข้าไปตามแก้ให้หน่อย",
        promptEn: "I plan to modify the schema for the 'User_Profile' table. If I change the schema file here, what other files in the project (e.g., Frontend views or backend Services) will break? Please list all the files I need to update to prevent errors."
      }
    ],
    faqs: [
      { question: "Cody รองรับภาษาอะไรบ้าง?", answer: "รองรับทุกภาษาที่โมเดล LLM ทั่วไปรู้จักครับ แต่จะทำงานได้ดีเว่อร์ๆ กับภาษาที่มีโครงสร้างชัดเจนอย่าง TypeScript, Go, Java และ Python" }
    ]
  },
  {
    id: "c10",
    slug: "phind",
    name: "Phind",
    logoUrl: "/logos/phind.png", // สมมติโลโก้
    description: "Search Engine แบบฉบับโปรแกรมเมอร์ หาบั๊กเก่ง มีเหตุผล และอธิบายละเอียดยิบ",
    longDescription: "ถ้า Google เอาไว้หาคำตอบกว้างๆ StackOverflow เอาไว้หาคำตอบของปัญหาเดิมๆ... Phind (อ่านว่า ฟินด์) ก็คือจุดสูงสุดของการผสมผสานระหว่าง Search Engine และ AI สำหรับโปรแกรมเมอร์โดยเฉพาะ! ความเจ๋งคือมันสามารถต่ออินเทอร์เน็ตเพื่อค้นหา Document ล่าสุดของภาษาโปรแกรม (เช่น Next.js เวอร์ชันเพิ่งอัปเดตเมื่อวาน) มาอ่านแล้วประมวลผลเป็นคำตอบพร้อมตัวอย่างโค้ดให้คุณทันที แถมมันยังชอบอธิบายตรรกะเบื้องหลัง (Reasoning) ว่าทำไมถึงต้องเขียนโค้ดแบบนี้ ถือเป็นเครื่องมือที่ช่วยให้ Dev เติบโตได้ดีมากๆ",
    origin: "สร้างมาเพื่อเป็น 'ผู้ช่วยไขปัญหา' ให้กับ Developer ที่เบื่อกับการต้องเปิดแท็บเบราว์เซอร์ 20 หน้าเพื่อตามหาจุดพังของโค้ด Phind จะเข้าไปกวาดข้อมูลจากเว็บตัวท็อปๆ แล้วสรุปจบมาให้ในหน้าเดียว",
    category: "Coding & Development",
    priceModel: "Free (ใช้งานบนเว็บ) / Pro $20 ต่อเดือน",
    isFree: true,
    externalUrl: "https://www.phind.com",
    rating: 4.8,
    reviewCount: 7100,
    updatedAt: "Feb 2026",
    features: [
      "Developer Search Engine: ถามปัญหาโค้ด AI จะค้นหาเน็ต สรุปข้อมูล และแนบลิงก์อ้างอิงมาให้",
      "Pair Programmer Mode: โหมดแชทแบบเจาะลึกที่ AI จะช่วยคิดและจับผิดโค้ดอย่างมีเหตุผล",
      "VS Code Extension: ติดตั้งในส่วนขยายเพื่อใช้งาน Phind หาคำตอบคู่กับการพิมพ์โค้ดได้เลย"
    ],
    pros: [
      "ข้อมูลโคตรอัปเดต! เพราะมันดึงสดๆ จากเน็ต หมดปัญหา AI ให้โค้ดเก่าที่ใช้งานไม่ได้",
      "คำอธิบายของ Phind ละเอียดและมีตรรกะมาก เหมาะกับคนที่ต้องการเรียนรู้ 'ทำไมต้องทำแบบนี้'",
      "หน้าเว็บใช้งานง่าย มินิมอล ไม่ต้องติดตั้งอะไรก็ใช้งานได้เต็มประสิทธิภาพ"
    ],
    cons: [
      "การให้คำตอบอาจจะใช้เวลาหมุนประมวลผลนานกว่า ChatGPT เล็กน้อย (เพราะมันต้องไปค้นข้อมูลบนเน็ตมารวมกัน)",
      "ไม่เหมาะกับงานสั่งให้เขียนแอปพลิเคชันขึ้นมาใหม่ทั้งก้อน (สู้ Cursor ไม่ได้) เหมาะกับงานแก้ปัญหา (Debugging) มากกว่า"
    ],
    steps: [
      { title: "เปิดเว็บ Phind", desc: "เข้าไปที่ phind.com (ตั้งเป็นหน้าแรกของเบราว์เซอร์แทน Google ได้เลย)" },
      { title: "วาง Error Message", desc: "ก๊อปปี้ข้อความตัวแดงๆ ที่ Error ตอนรันโค้ดไปวางในช่องค้นหา" },
      { title: "อ่านคำอธิบาย", desc: "Phind จะวิเคราะห์สาเหตุ พร้อมให้โค้ดที่ถูกต้อง และอ้างอิงหน้า Document ให้ไปอ่านต่อ" }
    ],
    prompts: [
      { 
        purpose: "💡 ให้ AI ช่วยออกแบบสถาปัตยกรรมระบบ (System Design)", 
        promptTh: "ฉันกำลังจะสร้างแพลตฟอร์ม Web Application สำหรับ 'สถาบันสอนภาษาอังกฤษ' (Language Learning Portal) โดยคาดว่าจะมีผู้ใช้งานหลักพันคน ช่วยแนะนำ Tech Stack ที่เหมาะสมในยุค 2026 ให้หน่อย พร้อมวิเคราะห์ข้อดีข้อเสียของการเลือกใช้ Next.js คู่กับ Supabase สำหรับโปรเจกต์แนวนี้",
        promptEn: "I am planning to build a Web Application platform for a 'Language Learning Portal' expecting thousands of concurrent users. Recommend a modern, scalable Tech Stack for 2026. Also, critically analyze the Pros and Cons of using Next.js combined with Supabase for this specific use case."
      },
      { 
        purpose: "💡 ให้ AI ช่วยดีบั๊ก Error ที่หาทางแก้ไม่เจอ (Deep Debugging)", 
        promptTh: "ฉันกำลังเจอ Error แบบนี้ตอนสั่ง Build โปรเจกต์ Next.js: '[วางข้อความ Error ยาวๆ จาก Terminal]' ฉันลองแก้โดยการลบโฟลเดอร์ node_modules และลงใหม่แล้วก็ยังไม่หาย มันเกิดจากอะไร และมีวิธีแก้ปัญหาที่ต้นเหตุอย่างไรบ้าง?",
        promptEn: "I am encountering the following build error in my Next.js project: '[Paste full terminal Error here]'. I have already tried deleting node_modules and reinstalling, but the issue persists. What is the root cause of this error, and what are the exact steps to fix it permanently?"
      }
    ],
    faqs: [
      { question: "ถ้ามีโค้ดความลับบริษัท พิมพ์ลงเว็บ Phind ได้ไหม?", answer: "ทาง Phind อนุญาตให้ปิดสวิตช์ฟีเจอร์ Data Sharing ได้ในเมนูตั้งค่าครับ ทำให้ข้อมูลที่คุณค้นหาจะไม่ถูกนำไปใช้สอน AI ต่อ แต่ถ้าซีเรียสมากๆ แนะนำให้เซนเซอร์คีย์เวิร์ดชื่อบริษัทก่อนค้นหาครับ" }
    ]
  },

  // ==========================================
  // 🎨 หมวด AI สร้างภาพ (Image Generation) - 5 ตัวท็อป
  // ==========================================
  {
    id: "img1",
    slug: "midjourney",
    name: "Midjourney",
    logoUrl: "/logos/Midjourney.png",
    description: "AI เสกภาพคุณภาพสูงระดับงานศิลป์ สวยสมจริง โทน Cinematic รายละเอียดสุดยอด",
    longDescription: "Midjourney คือราชาแห่งความสวยงามในวงการ AI สร้างภาพ มันโดดเด่นเรื่องการทำความเข้าใจสุนทรียภาพทางศิลปะ (Aesthetics) แสง เงา และพื้นผิวที่สมบูรณ์แบบจนแทบแยกไม่ออกว่านี่คือภาพ AI หรือถ่ายด้วยกล้องโปร เหมาะที่สุดสำหรับงานโปรดักชัน งานโฆษณา ทำปกหนังสือ หรืองานกราฟิกที่ต้องการความรู้สึกแบบ Cinematic",
    origin: "พัฒนาโดยห้องปฏิบัติการวิจัยอิสระ นำโดย David Holz ทำงานผ่านแอป Discord ปัจจุบันถึงเวอร์ชัน v6 ที่เก่งเรื่องภาพถ่ายเสมือนจริง (Photorealism) และการใส่ตัวหนังสือลงในภาพ",
    category: "Image Generation",
    priceModel: "Starts at $10/เดือน",
    isFree: false,
    externalUrl: "https://midjourney.com",
    rating: 4.9,
    reviewCount: 35400,
    updatedAt: "Feb 2026",
    features: [
      "Photorealistic & Cinematic: ความสมจริงขั้นสุด แสงเงาสะท้อนระดับสตูดิโอถ่ายภาพ",
      "Style & Character Reference (--sref, --cref): ล็อกหน้าตาตัวละครหรือคัดลอกลายเส้นจากรูปต้นแบบมาใส่ในรูปใหม่ได้เป๊ะๆ",
      "Vary (Region): ไฮไลต์แก้ไขรูปภาพเฉพาะจุด (Inpainting) เช่น สั่งเปลี่ยนชุด สวมแว่นตา หรือเปลี่ยนพื้นหลัง"
    ],
    pros: [
      "คุณภาพรูปภาพกินขาด AI ทุกตัวบนโลก (โดยเฉพาะ Portrait คน และงานศิลปะ)",
      "ฟีเจอร์ Character Reference ช่วยให้สร้างคาแรคเตอร์ตัวเดิมในอิริยาบถต่างๆ ได้ง่ายขึ้น",
      "คอมมูนิตี้ใหญ่มาก มีตัวอย่าง Prompt ให้ศึกษาจากผู้ใช้งานระดับโปรทั่วโลก"
    ],
    cons: [
      "การใช้งานผ่าน Discord อาจจะซับซ้อนสำหรับมือใหม่ (แต่ปัจจุบันเริ่มเปิดให้ใช้บนเว็บไซต์แล้ว)",
      "พิมพ์คำสั่ง (Prompt) เป็นภาษาไทยไม่ได้ ต้องใช้ภาษาอังกฤษเท่านั้น",
      "ไม่มีโควต้าให้ทดลองใช้ฟรี"
    ],
    steps: [
      { title: "เข้า Discord หรือเว็บ", desc: "สมัครแพ็กเกจ แล้วเข้าไปที่ห้องแชทของ Midjourney Bot" },
      { title: "ใช้คำสั่ง /imagine", desc: "พิมพ์ /imagine ตามด้วยคำอธิบายภาพภาษาอังกฤษ และใส่ Parameter เช่น --ar 16:9" },
      { title: "อัปสเกลรูปภาพ", desc: "กดปุ่ม U1-U4 เพื่อขยายรูปที่ถูกใจ หรือกด V1-V4 เพื่อขอรูปทางเลือกเพิ่ม" }
    ],
    prompts: [
      { 
        purpose: "💡 สร้างภาพถ่ายบุคคลสไตล์ Cinematic นิตยสารแฟชั่น", 
        promptTh: "[Midjourney รับคำสั่งภาษาอังกฤษเท่านั้น กรุณานำ Prompt ด้านล่างไปปรับใช้]",
        promptEn: "A photorealistic, highly detailed editorial portrait of a beautiful Asian woman in her mid-20s, wearing a futuristic cyberpunk neon jacket. She is standing in a dimly lit, rainy Tokyo street. Neon reflections on wet pavement, cinematic lighting, shot on 35mm lens, f/1.8 aperture, 8k resolution, ultra-realistic textures. --ar 4:5 --style raw --v 6.0"
      },
      { 
        purpose: "💡 ออกแบบโลโก้แบรนด์สไตล์ Minimal", 
        promptTh: "[Midjourney รับคำสั่งภาษาอังกฤษเท่านั้น]",
        promptEn: "A clean, minimalist vector logo design for a modern specialty coffee shop named 'BREW'. The logo features a simple geometric coffee cup integrated with a rising sun. Monotone color palette, flat design, isolated on a pure white background. High quality graphic design, professional, corporate. --ar 1:1 --no shading, realistic details --v 6.0"
      }
    ],
    faqs: [
      { question: "ทำยังไงให้ตัวละครหน้าเหมือนเดิมตลอด?", answer: "ใช้ Parameter --cref [ลิงก์รูปหน้าตัวละคร] ตามด้วย --cw 100 ครับ AI จะพยายามรักษาหน้าตา ทรงผม และเสื้อผ้าของตัวละครนั้นไว้ในภาพใหม่" }
    ]
  },
  {
    id: "img2",
    slug: "dall-e-3",
    name: "OpenAI – DALL·E 3",
    logoUrl: "/logos/OpenAI – DALL·E.png",
    description: "Multimodal AI สั่งงานเป็นภาษาไทยได้ เข้าใจ Prompt ซับซ้อนและเขียนตัวอักษรได้เป๊ะ",
    longDescription: "DALL·E 3 คือ AI สร้างภาพที่ 'เข้าใจภาษามนุษย์' ดีที่สุดในโลก มันถูกฝังอยู่ใน ChatGPT ทำให้คุณสามารถพิมพ์สั่งวาดรูปเป็นภาษาไทยแบบคุยกับเพื่อนได้เลย จุดแข็งที่โดดเด่นคือการทำตามคำสั่งที่มีองค์ประกอบยิบย่อยเยอะๆ (Prompt Adherence) และความสามารถในการวาด 'ตัวอักษร' ลงบนป้ายหรือเสื้อผ้าได้อย่างแม่นยำ ซึ่งเป็นจุดบอดของ AI ตัวอื่นมาตลอด",
    origin: "ถูกผนวกรวมเข้ากับ ChatGPT Plus โดย ChatGPT จะทำหน้าที่แปลงคำสั่งภาษาไทยของคุณให้เป็น Prompt ภาษาอังกฤษที่สมบูรณ์แบบ ก่อนส่งไปให้ DALL·E 3 วาดรูป",
    category: "Image Generation",
    priceModel: "รวมอยู่ใน ChatGPT Plus ($20/เดือน)",
    isFree: false,
    externalUrl: "https://openai.com/dall-e-3",
    rating: 4.7,
    reviewCount: 28100,
    updatedAt: "Feb 2026",
    features: [
      "Conversational Editing: สั่งแก้รูปภาพด้วยการพิมพ์แชทต่อ เช่น 'ช่วยเปลี่ยนเสื้อเป็นสีแดง' หรือ 'ขอซูมออกอีกนิด'",
      "Text Rendering: เรนเดอร์ตัวหนังสือลงในภาพได้เป๊ะมาก (เช่น สั่งให้เขียนคำว่า 'SALE 50%' บนป้ายโฆษณา)",
      "Inpainting: มีเครื่องมือพู่กันให้ระบายเลือกจุดที่อยากแก้ไขเฉพาะส่วนบนภาพได้โดยตรง"
    ],
    pros: [
      "ใช้งานง่ายที่สุด ไม่ต้องจำสูตร Prompt ยากๆ แค่พิมพ์บอกความต้องการตรงๆ",
      "ทำงานร่วมกับฟีเจอร์วิเคราะห์ข้อมูลของ ChatGPT ได้ เช่น ให้ AI อ่านไฟล์ Excel สรุปเทรนด์ แล้ววาดรูปกราฟิกประกอบเนื้อหานั้น",
      "เรนเดอร์ตัวหนังสือภาษาอังกฤษได้ถูกต้องแม่นยำสูงมาก"
    ],
    cons: [
      "สไตล์ภาพมักจะดูออกชัดเจนว่าเป็น 'ภาพ AI' (Digital Art) ไม่ค่อยสมจริงระดับภาพถ่ายเหมือน Midjourney",
      "ระบบเซนเซอร์ความปลอดภัยเข้มงวดมาก ปฏิเสธการวาดภาพดารา คนดัง หรือภาพที่มีความรุนแรง/โป๊เปลือยอย่างเด็ดขาด"
    ],
    steps: [
      { title: "เปิด ChatGPT", desc: "ล็อกอินเข้า ChatGPT Plus (ต้องเป็นบัญชีเสียเงิน)" },
      { title: "สั่งวาดรูป", desc: "พิมพ์คำสั่งเป็นภาษาไทย เช่น 'ช่วยวาดรูปแมวอวกาศ ถือป้ายคำว่า HELLO'" },
      { title: "ปรับแต่ง (Refine)", desc: "ถ้ายังไม่ถูกใจ สามารถใช้เมาส์ระบายจุดที่อยากแก้ หรือพิมพ์แชทบอกให้ AI ปรับปรุงรูปให้" }
    ],
    prompts: [
      { 
        purpose: "💡 สร้างภาพ Mockup สินค้าพร้อมตัวหนังสือ (UX/UI & Marketing)", 
        promptTh: "ช่วยวาดภาพ Mockup สินค้า เป็นขวดน้ำหอมสไตล์มินิมอลวางอยู่บนแท่นหินอ่อน โดยมีฉากหลังเป็นแสงแดดรำไรลอดผ่านใบไม้ ที่ฉลากขวดน้ำหอมให้เขียนคำว่า 'ELEGANCE' ด้วยฟอนต์ที่ดูหรูหรา ขอภาพโทนสีอบอุ่น (Warm tone) อัตราส่วน 16:9",
        promptEn: "Generate a product mockup of a minimalist perfume bottle resting on a marble pedestal. The background features dappled sunlight filtering through leaves. The label on the perfume bottle must clearly display the word 'ELEGANCE' in a luxurious, elegant font. Use a warm color tone. Aspect ratio 16:9."
      },
      { 
        purpose: "💡 สร้างภาพประกอบบทความสไตล์ Flat Design", 
        promptTh: "สร้างภาพประกอบสไตล์ Flat vector illustration สีสันสดใส รูปพนักงานออฟฟิศกำลังนั่งปวดหัวกับกองเอกสาร โดยมีนาฬิกาเรือนใหญ่กำลังเดินจับเวลาอยู่ด้านหลัง ภาพพื้นหลังสีขาวสะอาด สำหรับนำไปใช้ประกอบบทความเรื่องการจัดการเวลา",
        promptEn: "Create a colorful flat vector illustration of a stressed office worker sitting at a desk overflowing with documents, with a giant ticking clock looming in the background. Pure white background, clean lines, corporate Memphis style, perfect for a blog post about time management."
      }
    ],
    faqs: [
      { question: "สั่งวาดตัวหนังสือภาษาไทยลงไปในรูปได้ไหม?", answer: "ปัจจุบัน DALL-E 3 ยังเรนเดอร์ 'ฟอนต์ภาษาไทย' ไม่ได้ครับ มันจะวาดออกมาเป็นตัวอึกขระแปลกๆ แนะนำให้สั่งเขียนเป็นภาษาอังกฤษไปก่อน แล้วค่อยไปพิมพ์ข้อความไทยทับใน Canva ครับ" }
    ]
  },
  {
    id: "img3",
    slug: "stable-diffusion",
    name: "Stability AI – Stable Diffusion",
    logoUrl: "/logos/Stability AI.png",
    description: "AI สายเปิดกว้าง (Open-source) ปรับแต่งได้อิสระลึกระดับเส้นโครงกระดูก",
    longDescription: "Stable Diffusion คือมหาเทพของนักสร้างภาพสายฮาร์ดคอร์ มันเป็นระบบ Open-source ที่เปิดให้คุณดาวน์โหลดโค้ดมารันบนการ์ดจอคอมพิวเตอร์ของคุณเองฟรีๆ จุดเด่นที่ AI ตัวอื่นทำไม่ได้คือส่วนเสริมอย่าง 'ControlNet' ที่ให้คุณบังคับท่าทาง (Pose) ของตัวละคร หรืออัปโหลดภาพห้องเปล่าๆ เข้าไป แล้วบังคับให้ AI วางเฟอร์นิเจอร์ตามโครงสร้างเป๊ะๆ ชนิดมิลลิเมตรต่อมิลลิเมตร เหมาะสำหรับสายสถาปนิกและโปรดักชันสตูดิโอ",
    origin: "แจกฟรีโดย Stability AI ทำให้เกิดคอมมูนิตี้ระดับโลก มีคนนำไปพัฒนาต่อเป็นโมเดลเฉพาะทาง (เช่น สายสมจริง, สายอนิเมะ) และมี LoRA แจกฟรีบนเว็บอย่าง Civitai มหาศาล",
    category: "Image Generation",
    priceModel: "Free (รัน Local เครื่องตัวเอง) / มีแอปเว็บ Third-party ให้บริการ",
    isFree: true,
    externalUrl: "https://stability.ai",
    rating: 4.8,
    reviewCount: 19500,
    updatedAt: "Feb 2026",
    features: [
      "ControlNet: ควบคุมท่าทางมนุษย์ เส้นขอบสถาปัตยกรรม และความลึก (Depth) จากภาพอ้างอิงได้อย่างสมบูรณ์",
      "LoRA & Fine-tuning: ระบบเทรน AI ขนาดย่อม ให้เรียนรู้ใบหน้าของคุณ สินค้า หรือสไตล์ศิลปินลงไปในโมเดลได้",
      "Uncensored: ไม่มีระบบเซนเซอร์คำสั่ง ทำให้สามารถสร้างสรรค์ผลงานได้อิสระ 100% (หากรันบนเครื่องตัวเอง)"
    ],
    pros: [
      "อิสระสูงสุด ปรับแต่งพารามิเตอร์ได้ลึกที่สุด ควบคุมภาพได้ดั่งใจนึก ไม่ใช่แค่การ 'สุ่ม' กาชาปอง",
      "มีโมเดลและส่วนเสริมฟรีให้โหลดนับหมื่นรูปแบบ",
      "หากรันออฟไลน์บนเครื่องตัวเอง จะไม่ต้องเสียเงินค่ารายเดือนใดๆ ทั้งสิ้น"
    ],
    cons: [
      "หน้าต่างใช้งาน (UI) อย่าง ComfyUI หรือ Automatic1111 มีความซับซ้อนระดับขับเครื่องบิน มือใหม่ท้อแน่นอน",
      "ต้องใช้คอมพิวเตอร์สเปคแรงมาก (แนะนำการ์ดจอ NVIDIA ที่มี VRAM 8GB ขึ้นไป)",
      "การเขียน Prompt ค่อนข้างจุกจิก ต้องรู้คำศัพท์ (Tags) เฉพาะทาง"
    ],
    steps: [
      { title: "ดาวน์โหลดโปรแกรม", desc: "ติดตั้ง UI เช่น ComfyUI หรือใช้บริการผ่านเว็บคลาวด์ เช่น Tensor.art หรือ Leonardo.ai" },
      { title: "โหลด Checkpoint", desc: "ดาวน์โหลดสไตล์รูปภาพ (เช่น สายสมจริง) จากเว็บ Civitai มาติดตั้ง" },
      { title: "รันภาพด้วย Prompt & ControlNet", desc: "ใส่ภาพเรฟเฟอเรนซ์ พิมพ์คำสั่ง (Positive/Negative Prompt) แล้วกด Generate" }
    ],
    prompts: [
      { 
        purpose: "💡 โครงสร้าง Prompt แบบ Tags สำหรับภาพบุคคลสมจริง (SDXL)", 
        promptTh: "[การพิมพ์ Prompt ใน SD นิยมพิมพ์เป็นกลุ่มคำสั้นๆ คั่นด้วยลูกน้ำ]",
        promptEn: "masterpiece, best quality, ultra-detailed, RAW photo, a portrait of a stunning futuristic cyberpunk hacker woman, wearing holographic streetwear, standing in a glowing neon city street background, sharp focus, 8k uhd, dslr, soft volumetric lighting, detailed skin pores. \n\n[Negative Prompt]: (worst quality, low quality:1.4), illustration, 3d, 2d, painting, cartoons, sketch, bad anatomy, missing fingers, blurry, ugly."
      },
      { 
        purpose: "💡 งานเรนเดอร์ตกแต่งภายใน (Architectural Rendering)", 
        promptTh: "[ใช้ร่วมกับ ControlNet สายเส้นเพื่อคุมโครงสร้างห้อง]",
        promptEn: "interior design, hyper-realistic architectural render of a modern cozy living room, warm afternoon sunlight casting shadows through large floor-to-ceiling windows, indoor monstera plants, a minimalist grey sofa, wooden coffee table, highly detailed, octane render, unreal engine 5, ray tracing. \n\n[Negative Prompt]: blurry, cartoon, unproportional, messy, distorted perspective, watermark."
      }
    ],
    faqs: [
      { question: "ถ้าคอมสเปคไม่แรง แต่อยากใช้ Stable Diffusion ทำไง?", answer: "แนะนำให้ไปใช้บริการผ่านเว็บไซต์ Third-party ที่นำโค้ด Stable Diffusion ไปรันบน Cloud ของเขาครับ เช่นเว็บ SeaArt.ai หรือ Leonardo.ai ซึ่งจะมีโควต้าให้ใช้ฟรีระดับหนึ่งครับ" }
    ]
  },
  {
    id: "img4",
    slug: "adobe-firefly",
    name: "Adobe – Firefly",
    logoUrl: "/logos/Adobe Firefly.png", // สมมติโลโก้
    description: "AI สาย Commercial ปลอดภัยเรื่องลิขสิทธิ์ 100% เชื่อมต่อกับ Photoshop โดยตรง",
    longDescription: "Adobe Firefly คือ AI สร้างภาพที่เกิดมาเพื่อ 'องค์กรและแบรนด์ใหญ่' จุดขายที่สำคัญที่สุดคือ 'ความปลอดภัยด้านลิขสิทธิ์ (Commercially Safe)' เพราะโมเดลนี้ถูกฝึกสอน (Train) จากคลังภาพ Adobe Stock และภาพที่เป็นโดเมนสาธารณะเท่านั้น ทำให้แบรนด์สามารถนำภาพไปใช้ทำโฆษณา บิลบอร์ด หรือแพ็กเกจจิ้งได้อย่างสบายใจโดยไม่ต้องกลัวโดนฟ้อง นอกจากนี้ มันยังถูกฝังเป็นฟีเจอร์ 'Generative Fill' ใน Photoshop ที่ให้คุณลบคน รีทัชภาพ หรือขยายขอบภาพ (Outpainting) ได้เนียนกริบในไม่กี่คลิก",
    origin: "พัฒนาโดย Adobe เจ้าพ่อซอฟต์แวร์กราฟิก โดยตั้งเป้าให้เป็นเครื่องมือเสริมพลัง (Copilot) สำหรับนักออกแบบมืออาชีพ มากกว่าจะมาแย่งงานศิลปิน",
    category: "Image Generation",
    priceModel: "มีแครดิตฟรีรายเดือน / รวมอยู่ในแพ็กเกจ Adobe Creative Cloud",
    isFree: true,
    externalUrl: "https://firefly.adobe.com",
    rating: 4.6,
    reviewCount: 12500,
    updatedAt: "Feb 2026",
    features: [
      "Generative Fill / Expand: ลบวัตถุ เติมของ หรือขยายสัดส่วนภาพใน Photoshop ได้อย่างแนบเนียน",
      "Structure Match: อัปโหลดภาพร่าง (Sketch) เข้าไป แล้วให้ AI วาดภาพจริงโดยคุมโครงสร้างตามภาพร่างเป๊ะๆ",
      "Text Effects: สร้างกราฟิกตัวหนังสือที่ประกอบขึ้นจากพื้นผิวแปลกๆ เช่น ตัวอักษรที่ทำจากขนสัตว์ หรือใบไม้"
    ],
    pros: [
      "ปลอดภัยด้านลิขสิทธิ์ 100% (Safe for Commercial Use) องค์กรใหญ่ใช้ได้สบายใจ",
      "เครื่องมือ Generative Fill ใน Photoshop คือสิ่งที่นักแต่งรูปทุกคนขาดไม่ได้ ประหยัดเวลารีทัชไปได้ 90%",
      "รองรับการสั่งงานด้วย Prompt มากกว่า 100 ภาษา (รวมถึงภาษาไทยด้วย)"
    ],
    cons: [
      "ความสวยงามและความคิดสร้างสรรค์ของรูปภาพตั้งต้น (Text to Image) ยังตามหลัง Midjourney อยู่พอสมควร",
      "ความสมจริงของใบหน้ามนุษย์ บางครั้งยังดูแบนๆ หรือเหมือนภาพสต็อก (Stock Photo) มากเกินไป"
    ],
    steps: [
      { title: "เปิดเว็บหรือแอป", desc: "เข้าไปที่เว็บ Adobe Firefly หรือเปิดโปรแกรม Photoshop (เวอร์ชันอัปเดตล่าสุด)" },
      { title: "ใช้ Generative Fill", desc: "ใช้เครื่องมือ Lasso Tool วงบริเวณที่ต้องการแก้ไข แล้วพิมพ์คำสั่ง (เช่น 'ใส่รถสปอร์ตสีแดง')" },
      { title: "เลือกผลลัพธ์", desc: "AI จะให้ตัวเลือกมา 3 แบบ ให้คุณกดเลือกแบบที่กลืนไปกับสภาพแสงของรูปที่สุด" }
    ],
    prompts: [
      { 
        purpose: "💡 ขยายขอบภาพแนวนอน และลบสิ่งรบกวน (Generative Fill ใน Photoshop)", 
        promptTh: "[การพิมพ์ภาษาอังกฤษใน Photoshop มักจะให้ผลลัพธ์ที่แม่นยำกว่าภาษาไทย]\n1. ลากเครื่องมือ Crop Tool ยืดขอบภาพให้กว้างขึ้น -> กดปุ่ม Generative Fill -> ปล่อยช่อง Prompt ว่างไว้แล้วกด Generate (AI จะเติมฉากหลังให้เนียนเอง)\n2. วงกลมรอบคนเดินผ่านหลังกล้อง -> พิมพ์ Prompt: 'remove person' หรือปล่อยว่างไว้ ระบบจะลบคนทิ้งให้",
        promptEn: "1. Expand canvas using Crop Tool -> Click Generative Fill -> Leave prompt blank -> Click Generate (AI auto-fills background).\n2. Lasso a photobomber -> Prompt: 'remove person'."
      },
      { 
        purpose: "💡 สร้างภาพพื้นหลังสำหรับงานโฆษณา (Text to Image บนเว็บ Firefly)", 
        promptTh: "ภาพพื้นหลังเวที 3 มิติ (3D podium) ที่ทำจากหินอ่อนสีขาว ท่ามกลางป่าดิบชื้นที่มีหมอกจางๆ และแสงแดดลอดผ่านใบไม้ สำหรับวางโฆษณาผลิตภัณฑ์บำรุงผิว โทนสีเขียวธรรมชาติและสบายตา",
        promptEn: "A 3D marble podium background situated in a lush, misty tropical rainforest with sunbeams filtering through the canopy. Designed for a skincare product advertisement. Natural, calming, and lush green color palette."
      }
    ],
    faqs: [
      { question: "ถ้าใช้แครดิตฟรีบนเว็บ ภาพจะติดลายน้ำไหม?", answer: "ถ้าใช้บัญชีฟรี ภาพที่โหลดจากเว็บ Firefly จะมีลายน้ำ Adobe เล็กๆ ติดอยู่ที่มุมภาพครับ ต้องเป็นสมาชิก Creative Cloud แบบเสียเงินถึงจะโหลดภาพแบบไม่มีลายน้ำได้" }
    ]
  },
  {
    id: "img5",
    slug: "google-imagen",
    name: "Google DeepMind – Imagen 3",
    logoUrl: "/logos/Google – Gemini.png", // ใช้โลโก้ Gemini เพราะผูกกัน
    description: "AI สร้างภาพของ Google คมชัดสูง สีสันสมจริงที่สุดในการทำภาพแนว Photorealistic",
    longDescription: "Imagen 3 คือโมเดลสร้างภาพรุ่นท็อปจากฝั่ง Google DeepMind ปัจจุบันถูกนำมาให้ใช้งานผ่านแชทบอท Gemini สิ่งที่ Imagen 3 ทำได้ดีจนน่าขนลุกคือ 'ภาพแนวสตรีทและการถ่ายภาพบุคคลสมจริง (Photorealistic)' แสง เงา ริ้วรอยบนใบหน้า และสีสันของภาพจะดูเป็นธรรมชาติมากๆ ไม่ติดโทน 'พลาสติก 3D' แบบ AI ตัวอื่นๆ นอกจากนี้มันยังเก่งเรื่องการวาดรูปให้ตรงตามสัดส่วนภาพถ่ายกล้องโปร และสามารถเรนเดอร์ตัวหนังสือ (Text Rendering) ลงไปในป้ายหรือภาพกราฟิกได้อย่างแม่นยำสูสีกับ DALL-E 3",
    origin: "พัฒนาโดย Google DeepMind ออกแบบมาเพื่อผสานเข้ากับระบบ Ecosystem ของ Google (เช่น Gemini, Google Docs, Slides) เพื่อให้ผู้ใช้งานทั่วไปสามารถเสกภาพประกอบรายงานได้ทันที",
    category: "Image Generation",
    priceModel: "Free (ใช้งานผ่าน Gemini)",
    isFree: true,
    externalUrl: "https://gemini.google.com",
    rating: 4.6,
    reviewCount: 14500,
    updatedAt: "Feb 2026",
    features: [
      "Exceptional Photorealism: ภาพคนและภาพวิวสมจริงระดับนำไปหลอกคนในโซเชียลได้ (Skin texture เนียนมาก)",
      "Accurate Text Generation: พิมพ์คำสั่งให้ใส่ตัวหนังสือลงในรูปภาพได้",
      "Gemini Integration: สั่งงานผ่านแชท Gemini ด้วยภาษาไทยได้ทันที"
    ],
    pros: [
      "ความสมจริงของสภาพแสง (Lighting) ดูเป็นธรรมชาติและคล้ายการจัดแสงจริงของมนุษย์ที่สุด",
      "ใช้งานฟรีผ่านหน้าเว็บ Gemini ได้เลย ประมวลผลรวดเร็ว",
      "ทำตามคำสั่ง Prompt ยาวๆ ได้ดีเยี่ยม ไม่หลงลืมรายละเอียดเล็กๆ น้อยๆ"
    ],
    cons: [
      "ไม่สามารถสร้างภาพบุคคลที่มีอยู่จริง หรือภาพที่อาจก่อให้เกิดปัญหาทางการเมืองและศีลธรรมได้ (เซนเซอร์ดุมาก)",
      "สัดส่วนภาพส่วนใหญ่จะถูกล็อกไว้เป็นจัตุรัส (1:1) หากไม่ได้ระบุในคำสั่งชัดเจน",
      "ยังไม่มีเครื่องมือล้ำๆ อย่าง Inpainting (ระบายแก้เฉพาะจุด) แบบเต็มรูปแบบเหมือนใน DALL-E หรือ Midjourney"
    ],
    steps: [
      { title: "เปิด Google Gemini", desc: "เข้าเว็บไซต์ gemini.google.com ด้วยบัญชี Gmail" },
      { title: "สั่งวาดภาพ", desc: "พิมพ์คำว่า 'ช่วยวาดภาพ...' หรือ 'Generate an image of...' ตามด้วยคำอธิบาย" },
      { title: "ดาวน์โหลด", desc: "AI จะให้ภาพทางเลือกมา 2-4 ภาพ ให้กดปุ่มดาวน์โหลดรูปที่ถูกใจได้เลย" }
    ],
    prompts: [
      { 
        purpose: "💡 สร้างภาพถ่ายสตรีทไลฟ์สมจริง (Street Photography)", 
        promptTh: "ช่วยวาดภาพถ่ายบุคคล (Portrait) ของชายชราที่มีริ้วรอยตามวัยกำลังนั่งยิ้มดื่มกาแฟอยู่ที่ร้านกาแฟริมถนนในเมืองปารีส ถ่ายด้วยกล้อง DSLR เลนส์ 85mm หน้าชัดหลังเบลอ (Bokeh) แสงแดดยามเช้าสาดส่องกระทบใบหน้า ขอความสมจริงระดับภาพถ่ายสารคดี",
        promptEn: "Generate a photorealistic portrait of an elderly man with detailed facial wrinkles, smiling warmly while drinking coffee at a sidewalk cafe in Paris. Shot on a DSLR with an 85mm lens, shallow depth of field (bokeh effect). Morning sunlight softly illuminating his face. Documentary photography style."
      },
      { 
        purpose: "💡 สร้างภาพเมนูอาหารยั่วๆ (Food Photography)", 
        promptTh: "ภาพถ่ายมุมสูง (Top-down view) ของชามราเมนต้มยำกุ้งน้ำข้นสไตล์ฟิวชัน ควันร้อนๆ กำลังลอยขึ้นมา จัดจานแบบพรีเมียมไฟน์ไดนิ่ง มีตะเกียบไม้วางพาดอยู่ขอบชาม แสงไฟสตูดิโอขับสีส้มของน้ำซุปให้ดูน่ากินจัดจ้าน",
        promptEn: "A top-down view food photography shot of a premium fusion Tom Yum Goong ramen bowl. Hot steam gently rising. Fine-dining plating style, with wooden chopsticks resting on the rim. Professional studio lighting highlighting the rich, vibrant orange color of the spicy broth. Extremely appetizing and highly detailed."
      }
    ],
    faqs: [
      { question: "วาดรูปคนได้ไหม เห็นเมื่อก่อน Google สั่งระงับ?", answer: "ปัจจุบัน Google ได้ปรับปรุงโมเดล Imagen 3 ให้สามารถสร้างภาพคนทั่วไปได้อย่างปลอดภัยและสมจริงมากแล้วครับ แต่ยังคงบล็อกการสร้างภาพดารา คนดัง หรือนักการเมืองที่มีอยู่จริงครับ" }
    ]
  },

  // ==========================================
  // 🎬 หมวด AI สร้างวิดีโอ (Video Generation) - 5 ตัวท็อป
  // ==========================================
  {
    id: "vid1",
    slug: "openai-sora",
    name: "OpenAI – Sora",
    logoUrl: "/logos/OpenAI – DALL·E.png", // ใช้โลโก้ OpenAI ชั่วคราว
    description: "สุดยอด AI เปลี่ยนข้อความเป็นวิดีโอ สมจริงระดับภาพยนตร์ฮอลลีวูด ความยาว 1 นาทีเต็ม",
    longDescription: "Sora คือ 'ปรากฏการณ์' ที่สะเทือนวงการภาพยนตร์ไปทั่วโลก โมเดล Text-to-Video ตัวนี้สามารถเสกวิดีโอความยาวสูงสุด 60 วินาที จากการพิมพ์ Prompt แค่ไม่กี่ประโยค ความโหดของมันคือ 'ความเข้าใจเรื่องฟิสิกส์ 3 มิติ' (3D Physical World) เวลาที่มุมกล้องแพนไปมา วัตถุในฉากและเงาจะยังคงอยู่ในตำแหน่งที่ถูกต้อง ไม่เบี้ยว ไม่ละลายหายไปเหมือน AI วิดีโอยุคก่อนหน้า เหมาะสำหรับงานโปรดักชัน โฆษณา และการสร้างช็อต B-Roll อลังการที่ไม่สามารถถ่ายทำจริงได้",
    origin: "เปิดตัวโดย OpenAI ทำให้โลกตะลึงด้วยคุณภาพความเนียนตา (Temporal Consistency) ที่ก้าวกระโดดจาก AI รุ่นก่อนเป็นสิบเท่า ปัจจุบันยังอยู่ในช่วงทดสอบกับกลุ่มผู้กำกับและนักวิจัย (Red Team) อย่างจำกัด",
    category: "Video Generation",
    priceModel: "ปัจจุบันเปิดให้ทดลองเฉพาะกลุ่มนักสร้างสรรค์/องค์กร",
    isFree: false,
    externalUrl: "https://openai.com/sora",
    rating: 4.9,
    reviewCount: 8400,
    updatedAt: "Feb 2026",
    features: [
      "1-Minute Continuous Video: สร้างวิดีโอแบบลากยาว 1 นาที โดยที่ตัวละครและฉากไม่เปลี่ยนรูปร่าง",
      "Complex Camera Motion: รองรับการแพนกล้อง ซูมทะลุวัตถุ หรือถ่ายแบบโดรนบินวนรอบเมืองได้สมบูรณ์แบบ",
      "Image/Video to Video: นำภาพนิ่งมาทำให้ขยับ หรือนำคลิปเก่ามาใส่เอฟเฟกต์แปลงโฉมสภาพแวดล้อมได้"
    ],
    pros: [
      "คุณภาพงานระดับ Production-ready ภาพสวยและมุมกล้องสมจริงมากที่สุดในตลาด",
      "ลดปัญหาฉากหลังละลาย (Morphing) เมื่อตัวละครเดินบังกล้อง",
      "ประหยัดงบถ่ายทำมหาศาลสำหรับช็อตภาพมุมกว้าง หรือฉากแฟนตาซีอลังการ"
    ],
    cons: [
      "คนทั่วไปยังเข้าใช้งานไม่ได้ง่ายๆ (ยังไม่เปิด Public Release แบบเต็มรูปแบบ)",
      "ยังมีบั๊กเรื่องฟิสิกส์หนักๆ เช่น กระจกแตกไม่เนียน หรือตัวละครกินคุกกี้แล้วรอยแหว่งไม่ลดลง",
      "การประมวลผลคลิปยาวๆ ใช้เวลาเรนเดอร์และกินทรัพยากรมหาศาล"
    ],
    steps: [
      { title: "เตรียม Prompt ให้ละเอียด", desc: "Sora ต้องการคำอธิบายบรรยากาศ มุมกล้อง และการเคลื่อนไหวที่ชัดเจน" },
      { title: "ป้อนคำสั่ง", desc: "พิมพ์คำสั่ง Text-to-Video ลงในระบบ" },
      { title: "รอเรนเดอร์", desc: "ระบบจะใช้เวลาประมวลผลก่อนเสิร์ฟวิดีโอระดับความละเอียด 1080p มาให้" }
    ],
    prompts: [
      { 
        purpose: "💡 สั่งสร้างช็อต B-Roll โดรนถ่ายเมือง (Drone Cinematic)", 
        promptTh: "[แนะนำพิมพ์ภาษาอังกฤษเพื่อผลลัพธ์ที่สมบูรณ์ที่สุด]",
        promptEn: "A cinematic, sweeping drone camera shot flying through a futuristic cyberpunk Tokyo covered in glowing neon signs. Heavy rain is pouring. The camera gracefully weaves between tall skyscrapers, capturing flying cars navigating the traffic. Photorealistic, 4k resolution, smooth 60fps motion."
      },
      { 
        purpose: "💡 ช็อตซูมบุคคลแบบมาโคร (Macro Close-up)", 
        promptTh: "[แนะนำพิมพ์ภาษาอังกฤษ]",
        promptEn: "An extreme close-up of a human eye. The camera zooms deep into the iris, which magically transforms into a swirling galaxy full of sparkling stars and nebulas. Ultra-detailed, cinematic lighting, seamless transition."
      }
    ],
    faqs: [
      { question: "เราจะแยกออกไหมว่าอันไหนของจริง อันไหนคลิปสาดจาก Sora?", answer: "OpenAI ประกาศว่าจะฝังลายน้ำ (Watermark) และข้อมูล Metadata ลงไปในทุกคลิปที่สร้างจาก Sora เพื่อป้องกันการนำไปใช้สร้างข่าวปลอม (Deepfake) ครับ" }
    ]
  },
  {
    id: "vid2",
    slug: "runway-gen3",
    name: "Runway – Gen-3 Alpha",
    logoUrl: "/logos/Runway-ai.png",
    description: "AI ผู้สร้างวิดีโอระดับภาพยนตร์ฮอลลีวูด ใช้งานง่าย เครื่องมือควบคุมกล้องละเอียด",
    longDescription: "Runway Gen-3 Alpha คือผู้ท้าชิงเบอร์หนึ่งของ Sora ที่ 'เปิดให้คนทั่วไปใช้งานได้แล้ววันนี้' ความสามารถของมันคือการเสกภาพเคลื่อนไหวที่เนียนตา (Temporal consistency) สมจริงระดับโฆษณาทีวี จุดแข็งของ Runway คือระบบนิเวศหน้าเว็บที่มีฟีเจอร์สำหรับ 'คนทำหนัง' โดยเฉพาะ ไม่ว่าจะเป็นการอัปโหลดภาพนิ่งแล้วสั่งให้ขยับ ฟีเจอร์ Motion Brush ที่ให้คุณเอากระป๋องสีไประบายเมฆให้ขยับแต่วัตถุอื่นอยู่นิ่ง หรือการควบคุมทิศทางกล้องแพนซ้ายขวา (Camera Control) อย่างละเอียด",
    origin: "RunwayML เป็นสตาร์ทอัพที่มุ่งสร้าง Tools ให้นักตัดต่อวิดีโอ และมีส่วนร่วมในการพัฒนาเทคโนโลยีเบื้องหลังภาพยนตร์ระดับรางวัลออสการ์อย่าง 'Everything Everywhere All at Once'",
    category: "Video Generation",
    priceModel: "Free (ให้เครดิตจำกัด) / Starts at $15/เดือน",
    isFree: false,
    externalUrl: "https://runwayml.com",
    rating: 4.8,
    reviewCount: 6200,
    updatedAt: "Feb 2026",
    features: [
      "Image-to-Video: โยนภาพนิ่งสวยๆ (จาก Midjourney) เข้าไป แล้วสั่งให้มันขยับเป็นวิดีโอ",
      "Motion Brush: ระบายสีลงบนรูปภาพ เฉพาะจุดที่อยากให้มีการเคลื่อนไหว เช่น ปล่อยน้ำตกไหล",
      "Lip Sync & Audio: นำคลิปหน้าคนมาใส่เสียงพากย์ ให้ AI ทำให้ปากขยับตามเสียงได้เนียนกริบ"
    ],
    pros: [
      "เปิดให้คนทั่วไปเข้าใช้งานได้เลย อินเตอร์เฟซเว็บออกแบบมาดี ใช้งานง่ายมาก",
      "คุณภาพความสมจริง (Photorealism) ของโมเดล Gen-3 แข่งขันกับตัวท็อปได้สบายๆ",
      "ฟีเจอร์ควบคุมการเคลื่อนไหวเฉพาะจุด (Motion Brush) มีประโยชน์มากๆ สำหรับคนทำภาพโฆษณา"
    ],
    cons: [
      "เครดิตหมดไวมาก การสร้างคลิป 10 วินาทีใช้เครดิตค่อนข้างเยอะ (ต้นทุนแพง)",
      "ใบหน้าและนิ้วมือมนุษย์ในการทำแอคชันซับซ้อน (เช่น เดินหันหลัง หรือจับของ) ยังมีอาการบิดเบี้ยวหลอกตาอยู่บ้าง"
    ],
    steps: [
      { title: "เลือกโหมด", desc: "ล็อกอินเข้าระบบ เลือกเครื่องมือ 'Text/Image to Video' (Gen-3 Alpha)" },
      { title: "อัปโหลดรูปตั้งต้น", desc: "แนะนำให้อัปโหลดภาพนิ่งเข้าไปเป็นสารตั้งต้น (ดีกว่าพิมพ์ Text สดๆ)" },
      { title: "สั่ง Generate", desc: "พิมพ์คำสั่งอธิบายสิ่งที่อยากให้ขยับ แล้วรอประมวลผล 1-2 นาที" }
    ],
    prompts: [
      { 
        purpose: "💡 ทำภาพนิ่งให้กลายเป็นวิดีโอ Cinematic (Image-to-Video)", 
        promptTh: "[อัปโหลดรูปภาพใบหน้าคน แล้วพิมพ์ Prompt ภาษาอังกฤษ]",
        promptEn: "Subtle motion. The subject gently blinks and slightly turns her head towards the camera. The wind softly blows her hair. Film grain, moody cinematic lighting, 4k."
      },
      { 
        purpose: "💡 สร้างช็อตแอคชันเร็วๆ (Dynamic Motion)", 
        promptTh: "[พิมพ์ Text ล้วน]",
        promptEn: "A high-speed FPV drone chasing a red sports car drifting through a snowy mountain pass. Snow flying off the tires. Fast motion blur, highly dynamic camera angle, hyper-realistic."
      }
    ],
    faqs: [
      { question: "ทำไมคลิปที่ได้ยาวแค่ไม่กี่วินาที?", answer: "การประมวลผลวิดีโอทีละเฟรมกินพลังงานเซิร์ฟเวอร์มหาศาลครับ ปัจจุบัน AI ค่ายนี้จะเรนเดอร์คลิปให้ทีละ 5-10 วินาที คุณต้องเอาช็อตสั้นๆ หลายๆ ช็อตไปเรียงต่อกันในโปรแกรมตัดต่ออีกทีครับ" }
    ]
  },
  {
    id: "vid3",
    slug: "pika-labs",
    name: "Pika Labs",
    logoUrl: "/logos/Pika.png",
    description: "AI เสกวิดีโอสาย 3D/Anime ใช้งานฟรีง่ายๆ เด่นเรื่องขยับปากและใส่เอฟเฟกต์บึ้มบั้ม",
    longDescription: "Pika คือคู่แข่งตัวตึงที่ครองใจวัยรุ่นและนักทำคอนเทนต์โซเชียล เพราะมันมีโมเดลธุรกิจที่ 'ใจดี' แจกเครดิตให้เล่นฟรีทุกวัน! จุดแข็งของ Pika ไม่ใช่การแข่งความสมจริงแบบภาพยนตร์ แต่เก่งมากในการปั้นสไตล์ แอนิเมชัน, 3D Render น่ารักๆ และสไตล์ Anime แถมยังมีฟีเจอร์เด็ดอย่าง 'Lip Sync' ยัดไฟล์เสียงลงไปให้ตัวการ์ตูนขยับปากพูดตามเป๊ะๆ และมีปุ่มกดใส่เอฟเฟกต์ (Pikaffects) เช่น สั่งให้ของระเบิดตูมตาม ทำลูกโป่งแตก ได้ในคลิกเดียว",
    origin: "สร้างโดยทีมนักศึกษา Stanford ที่อยากให้เครื่องมือทำวิดีโอมันสนุกและจับต้องได้ง่าย Pika เคยเป็นไวรัลสุดๆ บน X (Twitter) ตอนที่ปล่อยฟีเจอร์สั่งขยายกรอบภาพวิดีโอ (Expand Canvas)",
    category: "Video Generation",
    priceModel: "Free (มีเครดิตเติมให้ทุกวัน) / Starts at $10/เดือน",
    isFree: true,
    externalUrl: "https://pika.art",
    rating: 4.6,
    reviewCount: 5200,
    updatedAt: "Feb 2026",
    features: [
      "Lip Sync: อัปโหลดเสียง (หรือพิมพ์ข้อความ) ให้ตัวละครในภาพขยับปากพูดตามเนียนๆ",
      "Pikaffects: เอฟเฟกต์สำเร็จรูป สั่งให้วัตถุในรูป ละลาย, บีบอัด, หรือระเบิดกระจายได้ทันที",
      "Modify Region: ตีวงกรอบสี่เหลี่ยมในคลิปวิดีโอ แล้วสั่งให้ AI เปลี่ยนเสื้อผ้า เปลี่ยนแว่น ขณะคลิปกำลังเล่นอยู่ได้"
    ],
    pros: [
      "เวอร์ชันฟรีแจกเครดิตให้เล่นทุกวัน เหมาะกับการเอาไปทำคอนเทนต์ลง TikTok หรือ YouTube Shorts",
      "ฟีเจอร์สไตล์การ์ตูน 3D หรือ Anime ทำออกมาได้มีเสน่ห์และขยับได้ลื่นไหลมาก",
      "ระบบเครื่องมือ Lip Sync ทำได้จบในเว็บเดียว ไม่ต้องสลับแอปไปมา"
    ],
    cons: [
      "ความสมจริงในแง่ของภาพมนุษย์หรือธรรมชาติ (Photorealism) สู้ Runway หรือ Luma ไม่ได้ ภาพจะดูนวลๆ วุ้นๆ นิดนึง",
      "ฉากที่ตัวละครมีการก้าวเท้าเดิน หรือหันหน้า 360 องศา มักจะบิดเบี้ยวหรือพังได้ง่าย"
    ],
    steps: [
      { title: "อัปโหลดภาพตั้งต้น", desc: "เข้าไปที่ Pika.art กดอัปโหลดภาพที่จะทำให้ขยับ" },
      { title: "ปรับแต่ง Camera", desc: "เลือกทิศทางกล้อง ซูมเข้า/ออก หรือพิมพ์ Prompt ว่าอยากให้เกิดอะไรขึ้น" },
      { title: "ใส่เสียง Lip Sync", desc: "ถ้าเป็นภาพคน ให้คลิกฟีเจอร์ Lip sync แล้วพิมพ์บทพูดลงไป จากนั้นกด Generate" }
    ],
    prompts: [
      { 
        purpose: "💡 สร้างแอนิเมชัน 3D สุดน่ารักสไตล์ Pixar", 
        promptTh: "[แนะนำพิมพ์ภาษาอังกฤษต่อท้ายภาพที่อัปโหลด]",
        promptEn: "High quality 3D animation, Pixar style. An adorable fluffy ginger kitten wearing a tiny spacesuit, floating clumsily in zero gravity inside a futuristic spaceship. Bright, cheerful studio lighting, fluid motion, highly detailed fur."
      },
      { 
        purpose: "💡 สั่งเพิ่มเอฟเฟกต์ระเบิดหรือละลาย (Pikaffects)", 
        promptTh: "[คลิกเลือกเมนูเอฟเฟกต์ หรือพิมพ์คำสั่งตรงๆ]",
        promptEn: "The fluffy cake on the table suddenly explodes into colorful confetti. Dynamic motion, slow motion effect."
      }
    ],
    faqs: [
      { question: "ทำวิดีโอแบบไหนที่ภาพมักจะพังน้อยที่สุด?", answer: "ช็อตซูมครึ่งตัว (Close-up) หรือช็อตที่กล้องแพนผ่านวิวธรรมชาติเฉยๆ ครับ หลีกเลี่ยงช็อตที่เห็นขากำลังก้าวเดิน หรือช็อตที่มีมือมาจับสิ่งของซับซ้อน" }
    ]
  },
  {
    id: "vid4",
    slug: "luma-dream-machine",
    name: "Luma AI – Dream Machine",
    logoUrl: "/logos/Pika.png", // ใช้โลโก้ชั่วคราว
    description: "AI เสกวิดีโอตัวตึงน้องใหม่ เด่นเรื่องกล้อง 3D เคลื่อนไหวรวดเร็วและสมจริงทะลุจอ",
    longDescription: "Luma AI เริ่มต้นจากการเป็นบริษัททำ 3D Capture ขั้นเทพ (ถ่ายรูปของรอบด้านแล้วปั้นเป็นโมเดล 3D) เมื่อพวกเขาปล่อย 'Dream Machine' มันเลยกลายเป็น AI Video ที่เก่งเรื่อง 'ความมีมิติและความลึก (Depth)' ที่สุดในตลาดตอนนี้ จุดแข็งที่คนรัก Luma คือมันสามารถทำช็อตที่กล้องบินโฉบไปมา (FPV Drone Style) เคลื่อนไหวรวดเร็ว ดุดัน และเปลี่ยนฉากมุมกล้องได้เนียนสุดๆ ทำความยาวเริ่มต้น 5 วินาที และให้ภาพสมจริงที่น่าประทับใจจนก้าวขึ้นมาท้าชน Runway และ Sora ได้อย่างเต็มภาคภูมิ",
    origin: "พัฒนาโดย Luma AI สตาร์ทอัพสาย 3D ที่ผันตัวมาลุยตลาด Generative Video โมเดลของพวกเขาเน้นความเข้าใจในโครงสร้าง 3 มิติของโลก ทำให้วิดีโอที่ได้ไม่มีอาการภาพแบนๆ เป็นแผ่นกระดาษ",
    category: "Video Generation",
    priceModel: "Free (จำกัด 30 ครั้ง/เดือน) / Starts at $29/เดือน",
    isFree: true,
    externalUrl: "https://lumalabs.ai/dream-machine",
    rating: 4.7,
    reviewCount: 4300,
    updatedAt: "Feb 2026",
    features: [
      "Dynamic Camera Angles: เก่งมากเรื่องการจำลองมุมกล้องแบบ Action ทะยานไปข้างหน้า หรือบินตีลังกา",
      "Keyframe Control: สามารถกำหนด 'ภาพแรก (Start Frame)' และ 'ภาพสุดท้าย (End Frame)' ให้ AI ทายวิดีโอคั่นกลางให้เนียนเชื่อมกัน",
      "High-speed Generation: ประมวลผลและสร้างคลิป 5 วินาทีออกมาได้เร็วกว่า AI หลายๆ ค่าย (ใช้เวลาประมาณ 2 นาที)"
    ],
    pros: [
      "มิติภาพและความลึกของฉาก (Depth of Field) สวยงามสมบูรณ์แบบมาก วิดีโอดูมีสเปซ ไม่บี้แบน",
      "ให้โควต้าฟรีรายเดือนเยอะ (ประมาณ 30 คลิป) เหมาะแก่การไปลองของ",
      "ฟีเจอร์กำหนดภาพหัว-ท้าย (Keyframing) ช่วยให้คุมทิศทางเนื้อเรื่องในคลิปได้เป๊ะขึ้น"
    ],
    cons: [
      "ช่วงที่มีคนใช้งานหนักๆ (Traffic สูง) แถวคิวในแพ็กเกจฟรีจะยาวมาก อาจต้องรอคลิปเป็นสิบนาที",
      "เหมือน AI ตัวอื่นๆ คือยังจัดการสรีระหน้าตาของคนในคลิปที่มีการขยับตัวเยอะๆ ได้ไม่เพอร์เฟกต์ 100%"
    ],
    steps: [
      { title: "ลงชื่อเข้าใช้", desc: "เข้าเว็บไซต์ Luma Dream Machine ผูกบัญชี Google" },
      { title: "กำหนดภาพคีย์เฟรม", desc: "อัปโหลดภาพตั้งต้น (Start) และภาพจบ (End) ถ้ามี" },
      { title: "พิมพ์ Prompt", desc: "พิมพ์อธิบายการเคลื่อนไหวของกล้องให้ชัดเจน แล้วกดสร้างคลิป" }
    ],
    prompts: [
      { 
        purpose: "💡 สร้างช็อตกล้องบินโดรนสไตล์ดุดัน (Action FPV)", 
        promptTh: "[แนะนำภาษาอังกฤษ]",
        promptEn: "First-person FPV drone view. The camera flies aggressively down a steep, narrow mountain waterfall. Water splashes onto the lens. Highly dynamic, fast-paced action, hyper-realistic nature documentary style."
      },
      { 
        purpose: "💡 สั่งให้เปลี่ยนรูปภาพให้มีมิติลึกขึ้น (Cinematic Pan)", 
        promptTh: "[อัปโหลดรูปภาพห้องนั่งเล่นเข้าไป]",
        promptEn: "The camera slowly glides forward through the room, focusing on the coffee table while the background softly blurs out. Cinematic tracking shot, highly detailed, realistic lighting."
      }
    ],
    faqs: [
      { question: "คลิป 5 วินาทีมันสั้นไป สั่งยืดความยาวได้ไหม?", answer: "เมื่อกดสร้างคลิปแรกเสร็จ จะมีปุ่ม 'Extend' ให้คุณกดครับ AI จะเอาเฟรมสุดท้ายของคลิปนั้นไปคิดต่อยอดความยาวเพิ่มอีก 5 วินาทีต่อกันไปเรื่อยๆ ได้ครับ" }
    ]
  },
  {
    id: "vid5",
    slug: "synthesia",
    name: "Synthesia",
    logoUrl: "/logos/Synthesia.png",
    description: "AI จ้างคนจำลอง (Avatars) พรีเซนต์งานและอ่านสคริปต์แทนคุณ รองรับภาษาไทยชัดเจน",
    longDescription: "หมดปัญหาการตั้งกล้อง เช่าไฟ และเขินกล้อง! Synthesia คือแพลตฟอร์มที่เสก 'พรีเซนเตอร์เสมือนจริง (AI Avatars)' มายืนอ่านสคริปต์หน้าจอแทนคุณ คุณเพียงแค่พิมพ์ข้อความที่อยากให้พูด เลือกหุ่นพรีเซนเตอร์ที่มีให้เลือกกว่า 160 แบบ AI จะจัดการขยับปากให้ตรงกับเสียงพูด (Lip-sync) พร้อมน้ำเสียงและภาษากายที่เป็นธรรมชาติ เหมาะที่สุดสำหรับการทำวิดีโอสอนพนักงาน (Corporate Training) วิดีโออธิบายสินค้า หรืองานนำเสนอแบบมืออาชีพ",
    origin: "มุ่งเน้นแก้ปัญหางานโปรดักชัน B2B ให้กับองค์กรระดับโลก เพื่อลดต้นทุนการจ้างสตูดิโอถ่ายคลิปสอนงานลงกว่า 80%",
    category: "Video Generation",
    priceModel: "Starts at $22/เดือน",
    isFree: false,
    externalUrl: "https://www.synthesia.io",
    rating: 4.8,
    reviewCount: 6500,
    updatedAt: "Feb 2026",
    features: [
      "160+ AI Avatars: มีพรีเซนเตอร์ทุกเชื้อชาติ อายุ และสไตล์ชุดเสื้อผ้าให้เลือก",
      "Multilingual Audio: รองรับกว่า 120 ภาษา (เสียงภาษาไทยพูดได้เป็นธรรมชาติ ควบกล้ำชัดเจน)",
      "Built-in Video Editor: มีหน้าต่างจัดสไลด์ ใส่พื้นหลังข้อความ วิดีโอสต็อก และปุ่มกดให้ครบจบในแอปเดียว",
      "Custom Avatar: ส่งคลิปตัวคุณเองไปให้บริษัทโคลนหน้าและเสียง เพื่อสร้าง Avatar ส่วนตัวให้คุณพิมพ์สั่งตัวเองพูดได้ตลอดชีพ"
    ],
    pros: [
      "ประหยัดเวลาและค่าใช้จ่ายในการถ่ายทำอย่างมหาศาล หากพูดผิดก็แค่พิมพ์แก้ข้อความแล้วกดเรนเดอร์ใหม่ ไม่ต้องถ่ายซ่อม",
      "Avatar รุ่นใหม่ๆ มีการแสดงสีหน้า กะพริบตา เอียงคอ และขยับมือ (Micro-expressions) ดูเป็นมนุษย์ขึ้นมาก",
      "หน้าต่างตัดต่อใช้งานง่ายเหมือนทำสไลด์ PowerPoint"
    ],
    cons: [
      "แววตาและการแสดงอารมณ์ดราม่ายังดูออกว่าเป็น AI (แอบตาลอยเบาๆ)",
      "แพ็กเกจเริ่มต้นให้โควต้านาทีในการเรนเดอร์วิดีโอน้อยไปนิดนึง",
      "หากใช้อวตารฟรีที่มีในระบบ คนดูอาจจำหน้าได้ว่านี่คือ AI ทำให้ขาดความเป็นเอกลักษณ์ของแบรนด์"
    ],
    steps: [
      { title: "เลือก Avatar และฉาก", desc: "เข้าไปในระบบ เลือกพรีเซนเตอร์ที่ถูกใจ และเลือกภาพพื้นหลังฉาก (เช่น ออฟฟิศ ห้องข่าว)" },
      { title: "พิมพ์สคริปต์รายสไลด์", desc: "วางข้อความที่ต้องการให้ AI พูดลงไป (ปรับแต่งความช้า/เร็ว การเว้นวรรคหายใจได้)" },
      { title: "กด Generate", desc: "ตรวจสอบความถูกต้อง แล้วกดสร้างคลิป รอประมาณ 5-10 นาที จะได้ไฟล์ MP4 ไปใช้งาน" }
    ],
    prompts: [
      { 
        purpose: "💡 สคริปต์วิดีโออธิบายสินค้า (Product Explainer)", 
        promptTh: "สวัสดีค่ะ! ยินดีต้อนรับเข้าสู่วิดีโอแนะนำบริการจากบริษัทของเรา. [เว้นวรรค 1 วิ] วันนี้เราจะพาคุณไปทำความรู้จักกับฟีเจอร์ใหม่ล่าสุด ที่จะช่วยให้การจัดการข้อมูลลูกค้าของคุณง่ายขึ้นกว่าเดิมถึง 2 เท่า! ไปดูขั้นตอนการตั้งค่าพร้อมๆ กันบนหน้าจอเลยค่ะ",
        promptEn: "Hello and welcome! In today's video, we are thrilled to introduce our newest feature designed to make your customer data management twice as efficient. [Pause for 1 sec] Let's jump right into the dashboard and see exactly how to set it up!"
      },
      { 
        purpose: "💡 สคริปต์สอนงานพนักงาน (Corporate Onboarding)", 
        promptTh: "ยินดีต้อนรับพนักงานใหม่ทุกท่านเข้าสู่ครอบครัวของเรานะคะ! ในโมดูลแรกนี้ เราจะมาทำความเข้าใจเกี่ยวกับวิสัยทัศน์ และวัฒนธรรมองค์กรของเรา ซึ่งถือเป็นหัวใจสำคัญในการทำงานร่วมกันที่นี่ หากพร้อมแล้ว เราไปเริ่มเนื้อหาสไลด์ถัดไปกันเลยค่ะ",
        promptEn: "Welcome to the team! We are so excited to have you on board. In this first module, we will explore our company's core vision and culture, which guide everything we do here. If you are ready, let's dive into the first lesson."
      }
    ],
    faqs: [
      { question: "ทำ Avatar โคลนหน้าตัวเองแพงไหม?", answer: "มีค่าบริการรายปีเพิ่มเติมแยกจากแพ็กเกจปกติครับ โดยคุณต้องอัดวิดีโออ่านสคริปต์ส่งไปให้ระบบใช้เวลาเรียนรู้หน้าคุณประมาณ 1 สัปดาห์ถึงจะได้ Avatar ส่วนตัวมาใช้ครับ" }
    ]
  },

  // ==========================================
  // 📊 หมวด AI วิเคราะห์ข้อมูล (Data & Analytics) - 10 ตัวท็อป
  // ==========================================
  {
    id: "da1",
    slug: "power-bi",
    name: "Microsoft Power BI (Copilot)",
    logoUrl: "/logos/Power BI.png",
    description: "แพลตฟอร์ม BI อันดับ 1 มี AI ช่วยเสกกราฟและเขียนสูตร DAX ให้ในพริบตา",
    longDescription: "Power BI คือหัวใจสำคัญของการทำ Data Analytics ในโลกธุรกิจ ปัจจุบัน Microsoft ได้ฝัง 'Copilot' เข้ามาช่วยเปลี่ยนการทำรีพอร์ตที่ยุ่งยากให้กลายเป็นเรื่องง่าย คุณสามารถพิมพ์บอก AI ให้ช่วยสร้างหน้า Dashboard สรุปยอดขาย เขียนสูตรคำนวณ DAX ที่ซับซ้อน หรือแม้แต่ให้ AI อ่านกราฟแล้วเขียนสรุป (Smart Narrative) ออกมาเป็นข้อความให้ผู้บริหารอ่านได้ทันที",
    origin: "พัฒนาโดย Microsoft ครองแชมป์ใน Gartner Magic Quadrant ด้าน Analytics มาอย่างยาวนาน ทำงานร่วมกับ Excel และ Azure ได้อย่างไร้รอยต่อ",
    category: "Data & Analytics",
    priceModel: "Desktop โหลดฟรี / Power BI Pro $10 ต่อเดือน",
    isFree: false,
    externalUrl: "https://powerbi.microsoft.com",
    rating: 4.8,
    reviewCount: 22100,
    updatedAt: "Feb 2026",
    features: [
      "Copilot Dashboard Creation: พิมพ์สั่งให้ AI สร้างหน้ารายงานพร้อมกราฟหลากหลายแบบอัตโนมัติ",
      "DAX Copilot: ผู้ช่วยเขียนและอธิบายสูตรคำนวณ DAX ประหยัดเวลาเปิด Google หาโค้ด",
      "Smart Narrative: AI อ่านข้อมูลทั้งหมดในหน้าจอ แล้วพิมพ์สรุปประเด็นสำคัญ (Executive Summary) ให้อัตโนมัติ"
    ],
    pros: [
      "เชื่อมต่อกับ Data Source ได้แทบทุกประเภทบนโลก (Excel, SQL, Cloud)",
      "แชร์ลิงก์รายงานให้ทีมดูผ่าน Microsoft Teams ได้สะดวกมาก",
      "โปรแกรม Power BI Desktop โหลดมาใช้งานบนเครื่องตัวเองได้ฟรี 100%"
    ],
    cons: [
      "ฟีเจอร์ Copilot ตัวเต็มสงวนไว้สำหรับองค์กรที่ซื้อไลเซนส์ระดับ Premium หรือ Fabric เท่านั้น",
      "การเตรียมข้อมูล (Data Modeling) ยังต้องอาศัยความเข้าใจเรื่อง Star Schema หากทำผิด AI จะดึงข้อมูลมั่วได้"
    ],
    steps: [
      { title: "เตรียมข้อมูล", desc: "นำเข้าและคลีนข้อมูล (Transform Data) ผ่าน Power Query" },
      { title: "สั่ง Copilot", desc: "เปิดแผงแชท Copilot พิมพ์คำอธิบายกราฟที่อยากได้ AI จะเสกกราฟมาวางให้" },
      { title: "ปรับแต่ง", desc: "จัดเรียงหน้าตา Dashboard และเพิ่ม Smart Narrative สรุปผล" }
    ],
    prompts: [
      { 
        purpose: "💡 ให้ AI ร่างสูตร DAX วิเคราะห์ยอดขายยานยนต์", 
        promptTh: "ช่วยเขียนสูตร DAX เพื่อคำนวณ 'ยอดขายสะสมตั้งแต่ต้นปี (YTD Sales)' ของข้อมูลยอดขายรถยนต์ Toyota โดยมีเงื่อนไขว่าต้องกรองเฉพาะรถยนต์กลุ่ม 'Hybrid' และสถานะการขายคือ 'Delivered' เท่านั้น",
        promptEn: "Write a DAX measure to calculate the 'Year-to-Date (YTD) Sales' from the Toyota sales dataset. Apply a filter to strictly include only the 'Hybrid' vehicle category where the sales status is 'Delivered'."
      },
      { 
        purpose: "💡 สั่ง Copilot สร้างหน้า Dashboard", 
        promptTh: "สร้างหน้ารายงานใหม่เพื่อวิเคราะห์ประสิทธิภาพยอดขายรายภูมิภาค โชว์ Metric หลักคือ 'Total Revenue' และ 'YoY Growth' โดยแบ่งตามสาขา พร้อมกราฟเส้นแสดงเทรนด์รายเดือน",
        promptEn: "Create a new report page analyzing regional sales performance. Highlight key metrics: 'Total Revenue' and 'YoY Growth' segmented by branch. Include a line chart showing the monthly trend."
      }
    ],
    faqs: [
      { question: "ทำไมใช้ Copilot ใน Power BI ไม่ได้?", answer: "ต้องตรวจสอบว่า Admin ขององค์กรเปิดสิทธิ์การใช้งาน Copilot ให้หรือยัง และบัญชีของคุณต้องอยู่ใน Workspace ที่รองรับ Premium Capacity ครับ" }
    ]
  },
  {
    id: "da2",
    slug: "tableau-ai",
    name: "Tableau (Einstein Copilot)",
    logoUrl: "/logos/Tableau.png",
    description: "แพลตฟอร์ม BI ระดับ Advanced โดดเด่นเรื่อง Data Visualization กราฟสวยยืดหยุ่นสูง",
    longDescription: "Tableau คือราชาแห่งการทำ Data Visualization ที่ให้ความอิสระในการตกแต่งกราฟมากที่สุด การมาของ 'Einstein Copilot' (จาก Salesforce) ทำให้ Tableau ฉลาดขึ้นไปอีกขั้น คุณสามารถใช้ฟีเจอร์ Tableau Pulse เพื่อให้ AI สรุปยอดขายรายวันส่งเข้าอีเมล หรือพิมพ์ถามหาตัวเลข (Ask Data) ด้วยภาษามนุษย์ แล้วระบบจะพ่นกราฟคำตอบขึ้นมาให้ทันทีโดยไม่ต้องลากวางเอง",
    origin: "ถูก Salesforce เข้าซื้อกิจการ จึงได้รับการถ่ายทอดขุมพลัง AI ของ Einstein มาช่วยลดเวลาในการย่อยข้อมูลให้ผู้บริหารอ่าน",
    category: "Data & Analytics",
    priceModel: "Starts at $15/user/month (ต้องใช้ License องค์กร)",
    isFree: false,
    externalUrl: "https://www.tableau.com/products/tableau-ai",
    rating: 4.8,
    reviewCount: 18500,
    updatedAt: "Feb 2026",
    features: [
      "Tableau Pulse: AI ย่อยข้อมูลและส่งสรุป Insights ประจำวันเข้าอีเมล/Slack แบบอัตโนมัติ",
      "Ask Data: พิมพ์คำถามหาตัวเลขด้วยภาษามนุษย์ ระบบจะสร้างกราฟตอบให้ทันที",
      "Einstein Copilot: ช่วยเขียนสูตรคำนวณซับซ้อน (Calculated Field) ในหน้า Worksheet"
    ],
    pros: [
      "ความสวยงามและความยืดหยุ่นของการทำกราฟ (Visualization) ชนะคู่แข่งทุกตัวในตลาด",
      "AI ช่วยอธิบายสาเหตุที่ยอดขายตกได้ ทำให้ไม่ต้องเดาจากกราฟเอง",
      "รองรับการจัดการข้อมูลขนาดมหาศาล (Big Data) ได้อย่างลื่นไหล"
    ],
    cons: [
      "ราคาไลเซนส์ระดับองค์กรค่อนข้างสูง",
      "Learning Curve สูงกว่า Power BI เล็กน้อยสำหรับผู้เริ่มต้นที่ไม่เคยใช้ BI มาก่อน"
    ],
    steps: [
      { title: "เชื่อมต่อ Data", desc: "นำเข้าข้อมูลจาก Database เข้าสู่ Tableau Server" },
      { title: "ตั้งค่า Metrics", desc: "เลือกตัวชี้วัดใน Tableau Pulse ปล่อยให้ AI เฝ้าระวังข้อมูลให้" },
      { title: "ถาม-ตอบ (Ask Data)", desc: "พิมพ์คำถามเจาะลึกกับบอทเพื่อสร้างมุมมองวิเคราะห์ใหม่ๆ" }
    ],
    prompts: [
      { 
        purpose: "💡 ให้ AI เขียน Calculated Field ที่ซับซ้อน", 
        promptTh: "ช่วยเขียนสูตรคำนวณ (Calculated Field) เพื่อแบ่งกลุ่มลูกค้า (Customer Segmentation) ถ้าลูกค้ามียอดซื้อรวม > 100,000 ให้เป็น 'VIP', ถ้าอยู่ระหว่าง 50,000 ถึง 100,000 ให้เป็น 'Gold' และน้อยกว่านั้นเป็น 'Standard'",
        promptEn: "Write a calculated field formula for Customer Segmentation: IF Total Sales > 100,000 return 'VIP', ELSE IF between 50,000 and 100,000 return 'Gold', ELSE return 'Standard'."
      },
      { 
        purpose: "💡 สร้างกราฟทันทีด้วย Ask Data", 
        promptTh: "Show me a bar chart comparing Total Profit by Product Category for the last 12 months, and sort it in descending order.",
        promptEn: "Show me a bar chart comparing Total Profit by Product Category for the last 12 months, and sort it in descending order."
      }
    ],
    faqs: [
      { question: "Tableau มีเวอร์ชันให้เด็กจบใหม่ลองใช้จัดพอร์ตไหม?", answer: "มี Tableau Public ครับ ให้ดาวน์โหลดมาใช้งานได้ฟรี แต่มีข้อแม้ว่าข้อมูลและ Dashboard ที่คุณสร้างจะต้องเซฟไว้บนเซิร์ฟเวอร์สาธารณะเท่านั้นครับ" }
    ]
  },
  {
    id: "da3",
    slug: "google-looker",
    name: "Google Looker",
    logoUrl: "/logos/Google – Gemini.png", // ใช้โลโก้ Google
    description: "Cloud BI ระดับ Enterprise เชื่อมต่อ BigQuery ได้แนบเนียน พร้อม Gemini AI",
    longDescription: "Looker เป็นเครื่องมือ BI แบบ Cloud-Native 100% จาก Google ที่มีภาษาจำลองโมเดลข้อมูลของตัวเองเรียกว่า LookML จุดแข็งที่สุดของมันคือสถาปัตยกรรมแบบ In-database (ไม่ได้ดูดข้อมูลมาเก็บไว้ที่ตัวเอง แต่วิ่งไป Query สดๆ จาก Database) ทำให้มันเป็นเพื่อนรักที่ดีที่สุดของ Google BigQuery ล่าสุด Google ได้นำเอา Gemini AI เข้ามาฝังเพื่อช่วยเขียนโค้ด LookML และช่วยวาดกราฟจากคำสั่งแชท ทำให้ฝั่ง Data Analyst ทำงานได้ไวขึ้นหลายเท่า",
    origin: "เดิมเป็นสตาร์ทอัพที่ถูก Google Cloud ซื้อกิจการเพื่อมาเสริมทัพสู้กับ Power BI และ Tableau โดยเน้นเจาะกลุ่มองค์กรที่รันระบบบน Google Cloud Platform (GCP)",
    category: "Data & Analytics",
    priceModel: "Enterprise Pricing (Custom)",
    isFree: false,
    externalUrl: "https://cloud.google.com/looker",
    rating: 4.6,
    reviewCount: 8200,
    updatedAt: "Feb 2026",
    features: [
      "Gemini in Looker: AI ช่วยร่างโค้ด LookML สำหรับสร้าง Data Model",
      "Conversational BI: แชทถามบอทเพื่อให้มันเจาะข้อมูลและวาด Dashboard ออกมาให้",
      "Real-time Querying: ประมวลผลและดึงข้อมูลสดๆ จาก Data Warehouse (ไม่มีปัญหาคอขวดตอนดูดข้อมูล)"
    ],
    pros: [
      "เก่งมากเรื่องความปลอดภัยของข้อมูล (Data Governance) เพราะทุกคนมองเห็นความจริงชุดเดียวกันผ่าน LookML",
      "ทำงานร่วมกับ Google BigQuery ได้เร็วและทรงพลังที่สุด",
      "ไม่เปลืองพื้นที่เก็บข้อมูลซ้ำซ้อน เพราะไม่ต้อง Import ข้อมูลเข้าตัวโปรแกรม"
    ],
    cons: [
      "ต้องใช้เวลาเรียนรู้ภาษา LookML ซึ่งเป็นภาษาเฉพาะของเครื่องมือนี้",
      "การจัดหน้า Dashboard อาจจะไม่ยืดหยุ่นและสวยงามล้ำลึกเท่า Tableau"
    ],
    steps: [
      { title: "เชื่อมฐานข้อมูล", desc: "ต่อ Looker เข้ากับ Data Warehouse (เช่น BigQuery)" },
      { title: "สร้าง LookML", desc: "ใช้ Gemini ช่วยเขียนโครงสร้างความสัมพันธ์ของตารางข้อมูล" },
      { title: "Explore & Build", desc: "ผู้ใช้ทั่วไปคลิกเลือกมิติข้อมูล (Dimensions) เพื่อออกรายงานได้ทันทีโดยไม่ต้องเขียน SQL" }
    ],
    prompts: [
      { 
        purpose: "💡 ให้ Gemini ช่วยร่างโค้ด LookML", 
        promptTh: "ช่วยสร้างโค้ด LookML สำหรับ View ที่ชื่อ 'sales_transactions' โดยดึงข้อมูลจากตาราง `project.dataset.sales` ให้สร้าง Dimension สำหรับวันที่ขาย, รหัสสาขา, และสร้าง Measure สำหรับหาผลรวมยอดขาย (sum) และค่าเฉลี่ยยอดขาย (average)",
        promptEn: "Generate LookML code for a View named 'sales_transactions' pointing to the `project.dataset.sales` table. Include dimensions for sales_date and branch_id. Create measures for total sales (sum) and average sales."
      },
      { 
        purpose: "💡 สั่ง AI วิเคราะห์ข้อมูลในหน้า Explore", 
        promptTh: "What are the top 5 performing marketing channels in terms of ROI for the Q3 campaign? Show it as a pie chart.",
        promptEn: "What are the top 5 performing marketing channels in terms of ROI for the Q3 campaign? Show it as a pie chart."
      }
    ],
    faqs: [
      { question: "Looker Studio กับ Looker ต่างกันยังไง?", answer: "Looker Studio (ชื่อเดิม Data Studio) เป็นตัวฟรีที่ใช้ลากวางกราฟง่ายๆ ส่วน Looker (ตัวเต็ม) เป็นระดับ Enterprise ที่มีระบบจัดการ Data Model เบื้องหลังด้วย LookML ครับ" }
    ]
  },
  {
    id: "da4",
    slug: "qlik-sense",
    name: "Qlik Sense",
    logoUrl: "/logos/qlik.png", // สมมติโลโก้
    description: "BI สาย Augmented Analytics ที่มี AI ช่วยเสาะหา Insight พฤติกรรมที่ซ่อนอยู่อัตโนมัติ",
    longDescription: "Qlik Sense โดดเด่นด้วยกลไก 'Associative Engine' ที่ไม่เหมือนใคร มันสามารถเชื่อมโยงข้อมูลทุกตารางเข้าด้วยกันแบบใยแมงมุม เมื่อคุณคลิกเลือกข้อมูลตัวหนึ่ง มันจะไฮไลต์ข้อมูลที่เกี่ยวข้อง และ 'ทำสีเทา' ข้อมูลที่ไม่เกี่ยวข้องให้เห็นทันที นอกจากนี้ Qlik ยังชูจุดเด่นเรื่อง Augmented Analytics ที่ให้ AI คอยสแกนหาความผิดปกติ (Anomaly) และเทรนด์ที่ซ่อนอยู่ในข้อมูล แล้วเด้งแจ้งเตือนขึ้นมาบอกผู้ใช้งานเองโดยที่ยังไม่ได้ตั้งคำถาม",
    origin: "บริษัทสัญชาติสวีเดนที่เป็นผู้เล่นระดับตำนานในวงการ BI มุ่งเน้นการใช้ AI เพื่อสนับสนุนการตัดสินใจ (Decision Intelligence) ให้กับคนทำงานที่ไม่ใช่สายเทค",
    category: "Data & Analytics",
    priceModel: "Starts at $20/user/month",
    isFree: false,
    externalUrl: "https://www.qlik.com/us/products/qlik-sense",
    rating: 4.5,
    reviewCount: 6800,
    updatedAt: "Feb 2026",
    features: [
      "Associative Engine: คลิกกรองข้อมูลได้อิสระ ไม่โดนบังคับเส้นทางแบบ SQL ช่วยให้เจอ Insight ที่คาดไม่ถึง",
      "Insight Advisor: AI คอยแนะนำว่าควรสร้างกราฟแบบไหน หรือคอยแจ้งเตือนเมื่อพบตัวเลขที่ผิดปกติ",
      "AutoML Integration: มีฟีเจอร์พยากรณ์ข้อมูล (Predictive Analytics) ฝังมาในตัวให้กดใช้ง่ายๆ"
    ],
    pros: [
      "เครื่องมือ AI ทำหน้าที่วิเคราะห์ข้อมูลเชิงลึกได้อัตโนมัติ (Automated Insights) เก่งมาก",
      "ทำงานได้เร็วมากแม้อยู่บนมือถือ",
      "สถาปัตยกรรมข้อมูลไม่ตายตัว ยืดหยุ่นสูง"
    ],
    cons: [
      "หน้าตา UI ของตัวโปรแกรมอาจจะดูไม่โมเดิร์นเท่าคู่แข่งรุ่นใหม่",
      "การเขียนสคริปต์โหลดข้อมูล (Data Load Script) มีไวยากรณ์เฉพาะตัวที่ต้องศึกษาเพิ่ม"
    ],
    steps: [
      { title: "โหลดข้อมูล", desc: "ลากไฟล์ใส่ หรือเขียน Script ดึงข้อมูลเข้า Qlik Sense" },
      { title: "ตรวจสอบ Insight", desc: "เปิดแผง Insight Advisor เพื่อดูว่า AI แนะนำกราฟหรือเจอความผิดปกติอะไรบ้าง" },
      { title: "คลิกเพื่อวิเคราะห์", desc: "จิ้มจุดข้อมูลในกราฟเพื่อกรองข้อมูลทั้ง Dashboard แบบไดนามิก" }
    ],
    prompts: [
      { 
        purpose: "💡 ให้ AI สแกนหาความผิดปกติของรายได้ (Anomaly Detection)", 
        promptTh: "[ใช้หน้าต่าง Insight Advisor]\nวิเคราะห์ยอดขายในไตรมาสที่ 4 เทียบกับไตรมาสที่ 3 และช่วยหาจุดที่มีความผิดปกติ (Anomaly) หรือสาขาที่ยอดขายตกลงอย่างมีนัยสำคัญให้หน่อย",
        promptEn: "Analyze the sales revenue in Q4 compared to Q3. Identify any significant anomalies, outliers, or specific branches that experienced a sharp decline."
      },
      { 
        purpose: "💡 ให้ AI แนะนำกราฟที่เหมาะสม", 
        promptTh: "ฉันต้องการเปรียบเทียบความสัมพันธ์ระหว่าง 'ค่าใช้จ่ายโฆษณา' กับ 'จำนวนลูกค้าใหม่ที่ได้มา' ควรใช้กราฟรูปแบบไหนดีที่สุด? ช่วยสร้างให้ดูหน่อย",
        promptEn: "I want to compare the correlation between 'Ad Spend' and 'New Customer Acquisition'. What is the best visualization for this? Please generate it."
      }
    ],
    faqs: [
      { question: "Associative Data Model ดีกว่า SQL ตรงไหน?", answer: "SQL มักจะตัดข้อมูลที่ไม่ตรงเงื่อนไขทิ้งไปเลย แต่ Associative ของ Qlik จะเก็บไว้เป็นสีเทา ทำให้เราเห็นว่า 'ลูกค้ากลุ่มไหนที่ไม่ได้ซื้อสินค้าตัวนี้' ซึ่งบางครั้งเป็น Insight ที่มีค่ามากครับ" }
    ]
  },
  {
    id: "da5",
    slug: "datarobot",
    name: "DataRobot",
    logoUrl: "/logos/datarobot.png", // สมมติโลโก้
    description: "แพลตฟอร์ม AutoML ระดับท็อป สร้างและเทรนโมเดล ML ได้อัตโนมัติ ไม่ต้องโค้ดเยอะ",
    longDescription: "DataRobot คือระบบ 'Automated Machine Learning (AutoML)' ที่ช่วยเปลี่ยนทุกคนให้เป็น Data Scientist โยนชุดข้อมูล (Dataset) เข้าไป เลือกคอลัมน์ที่ต้องการทำนาย (Target Variable) จากนั้น DataRobot จะทำหน้าที่เหมือนกองทัพนักวิเคราะห์ โดยวิ่งหยิบเอาอัลกอริทึม ML นับร้อยโมเดลมาแข่งขันกันรันหาผลลัพธ์ที่ดีที่สุด (Leaderboard) พร้อมทั้งจูนพารามิเตอร์ให้เสร็จสรรพ ทำให้คุณได้โมเดลทำนายผลระดับโปรดักชันในเวลาไม่กี่นาที",
    origin: "สร้างขึ้นด้วยภารกิจ AI Democratization (ทำให้ทุกคนเข้าถึง AI ได้) ลดเวลาที่ทีม Data Science ต้องมานั่งเขียนโค้ดจูนโมเดลซ้ำๆ เป็นเดือน ให้จบในคลิกเดียว",
    category: "Data & Analytics",
    priceModel: "Enterprise Subscription (ราคาสูงระดับองค์กร)",
    isFree: false,
    externalUrl: "https://www.datarobot.com",
    rating: 4.7,
    reviewCount: 3400,
    updatedAt: "Feb 2026",
    features: [
      "Automated Model Leaderboard: รันอัลกอริทึมจำนวนมากพร้อมกันแล้วจัดอันดับว่าตัวไหนแม่นยำที่สุด",
      "Explainable AI (XAI): อธิบายได้อย่างชัดเจนว่าทำไมโมเดลถึงตัดสินใจแบบนี้ (Feature Impact)",
      "One-Click Deployment: ได้โมเดลชนะเลิศแล้ว กดปุ่มเดียวเพื่อสร้าง API นำไปเชื่อมกับแอปพลิเคชันจริงได้เลย"
    ],
    pros: [
      "ประหยัดเวลาการทำโมเดล (Time to Value) จากหลายสัปดาห์เหลือแค่หลักชั่วโมง",
      "มีระบบ Explainability ที่ยอดเยี่ยม ทำให้สามารถอธิบายให้ผู้บริหารหรือ Regulator ฟังได้ว่าโมเดลทำงานยังไง (ไม่เป็น Blackbox)",
      "มีระบบ Guardrails คอยเฝ้าระวังไม่ให้โมเดลเกิดอาการ Bias หรือความแม่นยำตก (Data Drift) เมื่อปล่อยใช้จริง"
    ],
    cons: [
      "ราคาแพงมาก เหมาะกับองค์กรขนาดใหญ่ที่มี Use case การใช้ ML ชัดเจน",
      "แม้จะไม่ต้องเขียนโค้ด แต่ผู้ใช้งานก็ควรมีความรู้ความเข้าใจพื้นฐานด้านสถิติและ Data Science อยู่บ้างเพื่อตีความผลลัพธ์"
    ],
    steps: [
      { title: "อัปโหลด Data", desc: "นำเข้าชุดข้อมูล (เช่น ข้อมูลลูกค้าเก่า)" },
      { title: "เลือก Target", desc: "ระบุคอลัมน์ที่ต้องการทำนาย (เช่น ทายว่าลูกค้าคนไหนจะยกเลิกบริการ - Churn)" },
      { title: "กด Start", desc: "ระบบจะรันโมเดลแข่งกัน เมื่อเสร็จแล้วให้เลือกโมเดลที่แม่นยำที่สุดไปใช้งาน" }
    ],
    prompts: [
      { 
        purpose: "💡 ให้ AI อธิบายโมเดลทำนายการยกเลิกบริการ (Churn Prediction)", 
        promptTh: "[ใช้ในหน้า Explainability]\nช่วยอธิบายผลลัพธ์ของโมเดล XGBoost ตัวนี้ให้หน่อยว่า ตัวแปร (Feature) ไหนที่มีอิทธิพลมากที่สุดที่ทำให้ลูกค้าตัดสินใจยกเลิกบริการ? และหากต้องการลดอัตราการ Churn องค์กรควรไปโฟกัสแก้ไขที่จุดไหน?",
        promptEn: "Based on the Explainability report for this XGBoost model, what are the top features driving customer churn? Provide actionable recommendations on what the business should focus on to reduce the churn rate."
      },
      { 
        purpose: "💡 ประเมินความเสี่ยงและอคติ (Bias Assessment)", 
        promptTh: "กรุณาสแกนโมเดล Credit Scoring ตัวนี้ว่ามีอคติ (Bias) ต่อข้อมูลเพศ (Gender) หรือที่อยู่อาศัย (Region) ซ่อนอยู่หรือไม่? ขอรายงานความเสี่ยงแบบละเอียด",
        promptEn: "Perform a bias assessment on this Credit Scoring model. Does it exhibit any unintended bias regarding the 'Gender' or 'Region' features? Generate a detailed risk report."
      }
    ],
    faqs: [
      { question: "AutoML จะมาแย่งงาน Data Scientist ไหม?", answer: "ไม่ครับ แต่จะเป็นเหมือน Iron Man Suit ให้กับ Data Scientist มากกว่า ทำให้ไม่ต้องเสียเวลาไปกับการเขียนโค้ดจูนโมเดลพื้นฐาน เอาเวลาไปคิดโจทย์ธุรกิจที่ซับซ้อนขึ้นแทน" }
    ]
  },
  {
    id: "da6",
    slug: "h2o-ai",
    name: "H2O.ai (Driverless AI)",
    logoUrl: "/logos/h2o.png", // สมมติโลโก้
    description: "แพลตฟอร์ม AutoML ระดับเทพ โดดเด่นสุดๆ เรื่อง Feature Engineering อัตโนมัติ",
    longDescription: "H2O Driverless AI คือคู่แข่งตัวฉกาจของ DataRobot ความโหดของ H2O คือความเก่งกาจด้าน 'Automatic Feature Engineering' ในงาน Data Science ปกติคุณต้องมานั่งคิดสูตรแปลงข้อมูล (เช่น เอาคอลัมน์ A มาคูณ B แล้วสแควร์รูท) เพื่อให้โมเดลฉลาดขึ้น แต่ Driverless AI จะใช้ Algorithm ระดับโลกมาคิดค้นและแปลงฟีเจอร์แปลกๆ นานาชนิดให้คุณแบบอัตโนมัติ ซึ่งเหมาะมากสำหรับงานวิเคราะห์ข้อมูลที่มีความซับซ้อนสูงและต้องการความแม่นยำเด็ดขาด เช่น ระบบตรวจจับการทุจริต (Fraud Detection)",
    origin: "สร้างโดยทีมนักวิจัยระดับ Grandmaster ของ Kaggle (เวทีแข่งเขียน AI ระดับโลก) พวกเขานำเทคนิคลับที่ใช้ชนะการแข่งขันมายัดใส่ไว้ในเครื่องมือนี้",
    category: "Data & Analytics",
    priceModel: "Enterprise License",
    isFree: false,
    externalUrl: "https://h2o.ai",
    rating: 4.7,
    reviewCount: 2900,
    updatedAt: "Feb 2026",
    features: [
      "Auto Feature Engineering: สกัดและสร้างตัวแปรใหม่ๆ ทางคณิตศาสตร์ให้โมเดลฉลาดขึ้นอัตโนมัติ",
      "Time Series & NLP: รองรับข้อมูลประเภทข้อความ (Text) และการพยากรณ์ข้อมูลล่วงหน้าแบบอนุกรมเวลาได้อย่างเนียนกริบ",
      "Auto Doc Generation: เมื่อรันโมเดลเสร็จ กดปุ่มเดียวระบบจะพิมพ์เอกสารรายงานความหนา 40 หน้า อธิบายที่มาที่ไปของโมเดลให้เสร็จสรรพ"
    ],
    pros: [
      "ความแม่นยำของโมเดลมักจะสูงมาก เพราะมีกระบวนการทำ Feature Engineering ที่ลึกล้ำ",
      "รองรับการวิเคราะห์ข้อมูลขนาดใหญ่ (Big Data) และประมวลผลบน GPU ได้เร็วทะลุนรก",
      "มีเวอร์ชัน Open-source (H2O-3) ให้สายนักพัฒนาโหลดไปรันใช้งานได้ฟรีด้วย"
    ],
    cons: [
      "หน้าต่างใช้งาน (UI) ออกแนวสายเนิร์ด (Technical) มากกว่า DataRobot อาจทำให้ Business User งงได้",
      "ด้วยความที่มันสร้างตัวแปรใหม่ (Features) ออกมาซับซ้อนมาก บางครั้งการอธิบายผลลัพธ์ก็แอบยากตามไปด้วย"
    ],
    steps: [
      { title: "Ingest Data", desc: "เตรียมชุดข้อมูลธุรกรรมบัตรเครดิตที่มี Label ว่าทุจริตหรือไม่ นำเข้าระบบ" },
      { title: "ตั้งค่า Experiment", desc: "กำหนดเวลาที่จะให้ระบบรัน และตั้งระดับความสามารถในการตีความผลลัพธ์ (Interpretability)" },
      { title: "Deploy", desc: "เซฟโมเดลเป็นไฟล์ MOJO เพื่อนำไปวางหลังบ้านเป็น Data Pipeline ตรวจจับแบบ Real-time" }
    ],
    prompts: [
      { 
        purpose: "💡 ให้ AI แนะนำ Feature สำหรับโปรเจกต์ Fraud Detection", 
        promptTh: "อิงจากชุดข้อมูลธุรกรรมบัตรเครดิตที่ฉันมี ฉันกำลังทำโปรเจกต์ระบบ Data Pipeline ตรวจจับการทุจริต (Fraud Detection) ช่วยวิเคราะห์และแนะนำให้หน่อยว่าควรทำ Feature Engineering ออกมาในรูปแบบไหนบ้าง? เช่น การหาค่าความถี่การรูดบัตรใน 1 ชั่วโมงย้อนหลัง",
        promptEn: "Based on this credit card transaction dataset, I am building a Fraud Detection data pipeline. Please suggest advanced Feature Engineering techniques I should apply to improve model accuracy (e.g., transaction frequency within the last 1 hour per user)."
      },
      { 
        purpose: "💡 สร้างสรุปรายงานโมเดล (Auto Doc)", 
        promptTh: "[ฟีเจอร์ภายในแอป] Generate an exhaustive Model Experiment Report documenting the data preprocessing steps, the evolutionary feature engineering process, and the final LightGBM model metrics for compliance review.",
        promptEn: "[In-app feature] Generate an exhaustive Model Experiment Report documenting the data preprocessing steps, the evolutionary feature engineering process, and the final LightGBM model metrics for compliance review."
      }
    ],
    faqs: [
      { question: "MOJO Pipeline คืออะไร?", answer: "เป็นสถาปัตยกรรมการส่งออกโมเดลของ H2O ที่ถูกแพ็กมาให้มีขนาดเล็กและเบามาก ทำให้เวลา Deploy ขึ้นไปเป็น API แล้วมันสามารถพยากรณ์ผลได้เสร็จสิ้นภายในหลักมิลลิวินาที (เสี้ยววินาที) ครับ" }
    ]
  },
  {
    id: "da7",
    slug: "amazon-sagemaker",
    name: "Amazon SageMaker",
    logoUrl: "/logos/Amazon.png", // สมมติโลโก้
    description: "แพลตฟอร์มสร้าง เทรน และปล่อยโมเดล ML ระดับ Production แบบครบวงจรจาก AWS",
    longDescription: "หากคุณเป็นสาย Data Engineer หรือ Machine Learning Engineer นี่คือสุดยอดอาวุธคู่กาย Amazon SageMaker ไม่ใช่แค่ตัวช่วยเขียนโค้ด แต่มันคือแพลตฟอร์มแบบ End-to-End บนคลาวด์ AWS ที่ครอบคลุมตั้งแต่การเตรียมข้อมูล (Data Prep), การเปิดสมุดโน้ต (Jupyter Notebook) เพื่อเขียนโค้ดเทรนโมเดล, ไปจนถึงการกด Deploy โมเดลนั้นขึ้นเซิร์ฟเวอร์สเกลระดับโลก ความเจ๋งคือมันมีฟีเจอร์ Autopilot สำหรับทำ AutoML และมี JumpStart ที่แจกโมเดล AI สำเร็จรูป (เช่น Llama, Stable Diffusion) ให้คุณกดคลิกเดียวเพื่อรันโมเดลบนเซิร์ฟเวอร์ส่วนตัวของคุณเองได้เลย",
    origin: "สร้างโดย Amazon Web Services (AWS) เพื่อรวบรวมเครื่องมือด้าน AI/ML ที่เคยกระจัดกระจาย ให้มาจบในระบบนิเวศเดียว (IDE สำหรับ ML)",
    category: "Data & Analytics",
    priceModel: "Pay-as-you-go (คิดเงินตามทรัพยากรการประมวลผลที่ใช้จริง)",
    isFree: false,
    externalUrl: "https://aws.amazon.com/sagemaker/",
    rating: 4.7,
    reviewCount: 11200,
    updatedAt: "Feb 2026",
    features: [
      "SageMaker Studio: IDE บนเบราว์เซอร์สำหรับงาน Data Science โดยเฉพาะ",
      "SageMaker JumpStart: คลังรวม Foundation Models ยอดฮิตและโซลูชันสำเร็จรูปให้กดติดตั้งใช้งานได้ทันที",
      "Model Monitor: เฝ้าระวังโมเดลบน Production คอยเตือนเวลาข้อมูลโลกจริงเริ่มเปลี่ยนไป (Data Drift)"
    ],
    pros: [
      "ยืดหยุ่นสูงสุด เลือกได้ว่าจะเขียนโค้ดเองหมด (Hardcore) หรือจะให้ระบบรันแบบ AutoML (Low-code) ก็ได้",
      "ทำงานร่วมกับ Data Services อื่นๆ บน AWS เช่น S3, Redshift, Kinesis ได้ดีเยี่ยม",
      "สเกลทรัพยากร (เช่น เช่า GPU ชั่วคราวมาเทรนโมเดล) ได้รวดเร็ว ประหยัดค่าซื้อฮาร์ดแวร์"
    ],
    cons: [
      "หน้าตาและโครงสร้างระบบมีความซับซ้อนตามสไตล์ AWS หน้าใหม่เข้ามาจะงงกับการตั้งค่าสิทธิ์ (IAM) และ Network มากๆ",
      "ถ้าลืมปิดเซิร์ฟเวอร์หลังรันโค้ดเสร็จ (Resource leak) บิลค่าใช้จ่ายตอนสิ้นเดือนอาจจะพุ่งกระฉูด"
    ],
    steps: [
      { title: "เปิด Studio Notebook", desc: "เข้าไปที่ AWS Console สร้าง SageMaker Studio ดึงข้อมูลจาก S3 มาวิเคราะห์" },
      { title: "เทรนโมเดล", desc: "ใช้เฟรมเวิร์กอย่าง TensorFlow/PyTorch หรือกดรัน SageMaker Autopilot" },
      { title: "Deploy เป็น Endpoint", desc: "กด Deploy เพื่อสร้าง API ให้แอปพลิเคชันหน้าบ้านเรียกเข้ามาทำนายผล" }
    ],
    prompts: [
      { 
        purpose: "💡 เขียนสคริปต์เทรนโมเดลและเซฟลง S3 (AWS Infrastructure)", 
        promptTh: "ช่วยเขียนสคริปต์ Python เบื้องต้นสำหรับการรันเทรนโมเดล Scikit-Learn บน Amazon SageMaker โดยให้ดึงข้อมูล training data จาก S3 bucket และหลังจากเทรนเสร็จ ให้เซฟไฟล์โมเดล model.tar.gz กลับขึ้นไปที่ S3 ด้วย",
        promptEn: "Write a basic Python script to execute a Scikit-Learn training job on Amazon SageMaker. The script should pull the training dataset from an S3 bucket and, upon completion, save the trained model.tar.gz artifact back to S3."
      },
      { 
        purpose: "💡 สั่ง Deploy Foundation Model จาก JumpStart", 
        promptTh: "มีวิธี Deploy โมเดล Llama 3 ผ่าน SageMaker JumpStart ด้วยโค้ด Python (Boto3) ไหม? ขอตัวอย่างโค้ดและวิธีตั้งค่า Instance Type ให้เหมาะสมกับโมเดลนี้",
        promptEn: "How can I deploy the Llama 3 model via SageMaker JumpStart using the Python SDK? Please provide the code snippet and recommend the appropriate Instance Type for this model."
      }
    ],
    faqs: [
      { question: "เหมาะกับการเอามาทำ Data Pipeline แบบเรียลไทม์ไหม?", answer: "เหมาะมากครับ โดยเฉพาะถ้าคุณใช้ฟีเจอร์ SageMaker Pipelines ในการร้อยเรียงขั้นตอนตั้งแต่ดึง Data ยัน Deploy เพื่อทำ ML Ops อย่างเต็มรูปแบบ" }
    ]
  },
  {
    id: "da8",
    slug: "google-vertex-ai",
    name: "Google Vertex AI",
    logoUrl: "/logos/Google – Gemini.png", // ใช้โลโก้ Google
    description: "แพลตฟอร์มศูนย์รวมพลัง AI ทำ Machine Learning และดึงพลัง Generative LLM มาใช้ได้ในที่เดียว",
    longDescription: "คู่ปรับตัวตึงของ SageMaker แต่มาจากฝั่ง Google Cloud Platform (GCP)! Vertex AI เป็นแพลตฟอร์มแบบครบวงจรที่รวมเครื่องมือ AI ทั้งหมดของ Google ไว้ด้วยกัน จุดเด่นที่ทำให้ Vertex AI ร้อนแรงสุดๆ ในตอนนี้คือ 'Generative AI Studio' ที่ให้คุณสามารถนำโมเดลตระกูล Gemini มาปรับแต่ง (Fine-tune) ให้กลายเป็นแชทบอทหรือระบบดึงข้อมูลเฉพาะสำหรับบริษัทคุณได้ นอกจากนี้ยังมี AutoML สำหรับข้อมูลรูปแบบ รูปภาพ, วิดีโอ, และข้อความ ที่แม่นยำระดับเวทมนตร์",
    origin: "Google รวมเอาบริการ AI ยิบย่อยในอดีต (เช่น AutoML, AI Platform) มาผนึกกำลังกันในชื่อ Vertex AI เพื่อให้ทีม Data ทำงานได้จบในที่เดียว ไม่ต้องย้ายหน้าจอไปมา",
    category: "Data & Analytics",
    priceModel: "Pay-as-you-go (คิดตามวินาทีการประมวลผลและการเรียก API)",
    isFree: false,
    externalUrl: "https://cloud.google.com/vertex-ai",
    rating: 4.8,
    reviewCount: 9400,
    updatedAt: "Feb 2026",
    features: [
      "Generative AI Studio: สนามเด็กเล่นสำหรับปรับจูนโมเดล Gemini และสร้าง Prompt แบบโครงสร้าง",
      "AutoML for Everything: โยนรูปภาพ วิดีโอ หรือข้อความเข้าไป ระบบจะเทรนโมเดลจำแนกประเภท (Classification) ให้เองอย่างแม่นยำ",
      "Vertex Feature Store: คลังจัดเก็บตัวแปร (Features) ตรงกลาง ให้ทีม Data Engineer นำไปแชร์และใช้ซ้ำได้ทั้งองค์กร"
    ],
    pros: [
      "เข้าถึงโมเดลล้ำหน้าอย่าง Gemini 1.5 Pro ได้โดยตรงผ่าน API ที่เสถียรมาก",
      "ทำงานประสานกับ Google BigQuery แบบไร้รอยต่อ (สามารถเรียกใช้โมเดล ML ได้จากหน้าต่างเขียน SQL เลย)",
      "UI เป็นมิตรและใช้งานง่ายกว่า AWS SageMaker ในสายตาของผู้เริ่มต้น"
    ],
    cons: [
      "บริการบางตัว (เช่น การทำ Fine-tuning โมเดล LLM ขนาดใหญ่) มีราคาสูง",
      "อัปเดตฟีเจอร์ใหม่บ่อยมากจนเอกสารอ้างอิง (Documentation) ตามไม่ทันในบางครั้ง"
    ],
    steps: [
      { title: "เลือกประเภทงาน", desc: "เลือกว่าจะใช้โมเดลสำเร็จรูป (Generative AI) หรือจะเทรนโมเดลเองจากข้อมูลในบริษัท" },
      { title: "ปรับแต่ง (Tuning)", desc: "ป้อนตัวอย่างข้อมูล Prompt/Response เพื่อสอนให้โมเดล Gemini ตอบแบบที่บริษัทต้องการ" },
      { title: "ใช้งานผ่าน API", desc: "นำ Endpoint URL ไปฝังในระบบ Web App เพื่อใช้งานจริง" }
    ],
    prompts: [
      { 
        purpose: "💡 สั่งปรับแต่ง (Fine-tune) โมเดลเพื่อสกัดข้อมูล (Data Extraction)", 
        promptTh: "ฉันต้องการใช้ Vertex AI เพื่อดึงข้อมูล 'ชื่อลูกค้า' และ 'จำนวนเงิน' จากไฟล์ใบเสร็จรับเงิน (PDF) ของบริษัท ช่วยแนะนำขั้นตอนและตัวอย่างโค้ด Python สำหรับเรียกใช้โมเดล Gemini ผ่าน Vertex AI API ให้หน่อย",
        promptEn: "I want to use Vertex AI to extract 'Customer Name' and 'Total Amount' from PDF receipts. Please outline the steps and provide a Python code snippet using the Vertex AI SDK to call the Gemini model for this task."
      },
      { 
        purpose: "💡 เขียน BigQuery ML เรียกใช้ Vertex AI", 
        promptTh: "ช่วยเขียนคำสั่ง SQL ใน BigQuery เพื่อเรียกใช้โมเดล (ML.GENERATE_TEXT) ที่เชื่อมกับ Vertex AI ในการวิเคราะห์ Sentiment (อารมณ์บวก/ลบ) ของตารางรีวิวลูกค้าให้หน่อย",
        promptEn: "Write a SQL query in BigQuery using the ML.GENERATE_TEXT function connected to a Vertex AI model. The goal is to perform Sentiment Analysis on a column of customer reviews."
      }
    ],
    faqs: [
      { question: "เอาข้อมูลบริษัทไปทำ Fine-tuning ใน Vertex AI ข้อมูลจะถูก Google ขโมยไปไหม?", answer: "Google ยืนยันในสัญญา Enterprise ว่าข้อมูลลูกค้าและโมเดลที่ถูกปรับแต่งใน Vertex AI จะเป็นของคุณ 100% ไม่ถูกนำไปใช้เทรนโมเดลสาธารณะเด็ดขาดครับ" }
    ]
  },
  {
    id: "da9",
    slug: "databricks",
    name: "Databricks",
    logoUrl: "/logos/databricks.png", // สมมติโลโก้
    description: "แพลตฟอร์ม Lakehouse ระดับเทพ รวมงาน Data Engineering และ AI ไว้ในระบบเดียว",
    longDescription: "ถ้าคุณเป็นสาย Data Engineer ที่ต้องคลุกคลีกับการทำ Data Pipeline ก้อนมหึมา Databricks คือบ้านเกิดของคุณ! มันคือแพลตฟอร์มที่บุกเบิกแนวคิด 'Data Lakehouse' (รวมข้อดีของ Data Lake ที่เก็บข้อมูลดิบๆ และ Data Warehouse ที่ดึงข้อมูลได้เร็วเข้าด้วยกัน) ขับเคลื่อนด้วยขุมพลัง Apache Spark ที่ประมวลผลข้อมูล Big Data ได้เร็วทะลุโลก ปัจจุบัน Databricks ได้เพิ่มฟีเจอร์ 'MosaicML' และ 'Databricks IQ' ที่นำ AI เข้ามาช่วยเขียนโค้ด Spark ช่วยทำ Data Catalog และสามารถเทรนโมเดล LLM ส่วนตัวขององค์กรได้บนแพลตฟอร์มเลย",
    origin: "ก่อตั้งโดยผู้สร้าง Apache Spark โดยตรง เป้าหมายเพื่อสร้างแพลตฟอร์ม Unified Analytics ที่ประสานรอยร้าวระหว่างทีม Data Engineer (สายท่อ) และ Data Scientist (สายวิเคราะห์) ให้ทำงานบนพื้นที่เดียวกัน",
    category: "Data & Analytics",
    priceModel: "Consumption-based (คิดตามหน่วย DBU ที่ใช้ไป)",
    isFree: false,
    externalUrl: "https://www.databricks.com",
    rating: 4.8,
    reviewCount: 15400,
    updatedAt: "Feb 2026",
    features: [
      "Apache Spark Engine: ประมวลผลและทำ Data Pipeline ขนาดใหญ่ได้เร็วและเสถียรสุดๆ",
      "Databricks IQ: AI ผู้ช่วยอัจฉริยะที่ช่วยเขียนและอธิบายโค้ด PySpark และ SQL",
      "Delta Lake: โครงสร้างการเก็บข้อมูลที่เชื่อถือได้ รองรับการย้อนดูข้อมูลในอดีต (Time Travel)"
    ],
    pros: [
      "ตอบโจทย์งาน Data Engineering ขั้นสุด เหมาะมากกับโปรเจกต์ที่ต้องคลีนข้อมูลซับซ้อน (เช่น Fraud Detection Data Pipeline)",
      "ทำลายไซโลข้อมูล (Data Silos) เพราะทุกคนในบริษัทวิ่งมาดึงข้อมูลจาก Lakehouse ที่เดียวกัน",
      "รองรับการเขียนโค้ดทั้ง Python (PySpark), Scala, SQL, และ R ในหน้า Notebook เดียวกัน"
    ],
    cons: [
      "การตั้งค่าระบบและ Cluster ต้องใช้ความรู้เชิงลึกด้าน Cloud Architecture ค่อนข้างมาก",
      "ค่าใช้จ่ายอาจจะบานปลายได้หากทีมงานเปิด Cluster ทิ้งไว้แล้วลืมปิด"
    ],
    steps: [
      { title: "เปิด Cluster", desc: "สร้างและเปิดใช้งานเครื่องเซิร์ฟเวอร์ (Compute Cluster)" },
      { title: "เขียน Notebook", desc: "เปิด Workspace เขียนโค้ด PySpark ดึงข้อมูลดิบมาคลีนและแปลงรูปร่าง" },
      { title: "จัดตาราง (Job)", desc: "ตั้งเวลาให้ Pipeline รันอัตโนมัติทุกวัน แล้วส่งต่อให้ทีม ML นำไปทำโมเดล" }
    ],
    prompts: [
      { 
        purpose: "💡 ให้ AI ร่างโค้ด Data Pipeline แบบ PySpark", 
        promptTh: "ในฐานะ Data Engineer ฉันต้องการสร้าง Data Pipeline ด้วย PySpark เพื่อจัดการข้อมูลธุรกรรมทางการเงิน ช่วยเขียนโค้ดสำหรับอ่านไฟล์ CSV, จัดการค่า Null, แปลงคอลัมน์วันที่ให้อยู่ในฟอร์แมต 'YYYY-MM-DD' และกรองเอาเฉพาะธุรกรรมที่น่าสงสัย (amount > 50000) จากนั้นเซฟลง Delta Table",
        promptEn: "As a Data Engineer, I need to build a PySpark data pipeline for financial transactions. Write the code to: read a CSV file, handle Null values, format the date column to 'YYYY-MM-DD', filter for suspicious transactions (amount > 50000), and finally write the DataFrame to a Delta Table."
      },
      { 
        purpose: "💡 สั่งปรับจูนประสิทธิภาพโค้ด (Optimization)", 
        promptTh: "โค้ด PySpark ตัวนี้ของฉันทำงานช้ามากตอนทำฟังก์ชัน `.join()` ระหว่างสองตารางใหญ่ ช่วยแนะนำเทคนิคการ Optimize เช่น การใช้ Broadcast Join หรือเทคนิคอื่นๆ พร้อมปรับแก้โค้ดให้หน่อย",
        promptEn: "My PySpark code is running extremely slow during a `.join()` operation between two massive DataFrames. Please recommend optimization techniques (e.g., Broadcast Joins or partitioning) and refactor the code for better performance."
      }
    ],
    faqs: [
      { question: "ทำโปรเจกต์ Data Pipeline สำหรับพอร์ตโฟลิโอ ใช้ Databricks ได้ไหม?", answer: "ได้ครับ Databricks มีเวอร์ชัน 'Community Edition' ให้ใช้งานฟรี เหมาะมากสำหรับนักศึกษาหรือคนที่อยากโชว์สกิล Spark ลงใน GitHub พอร์ตโฟลิโอสัมภาษณ์งานครับ" }
    ]
  },
  {
    id: "da10",
    slug: "snowflake",
    name: "Snowflake",
    logoUrl: "/logos/snowflake.png", // สมมติโลโก้
    description: "Cloud Data Platform สุดล้ำ คิวรีข้อมูลไวด้วยสถาปัตยกรรมแยก Compute และ Storage",
    longDescription: "Snowflake คือคู่แข่งฟ้าประทานของ Databricks! ในขณะที่ Databricks เก่งเรื่องวิศวกรรมข้อมูล Snowflake จะโดดเด่นในฐานะ 'Cloud Data Warehouse' ที่สมบูรณ์แบบที่สุด ความลับความสำเร็จคือสถาปัตยกรรมที่แยก 'ที่เก็บข้อมูล (Storage)' ออกจาก 'หน่วยประมวลผล (Compute)' ทำให้คุณสามารถอัดข้อมูลเข้าไปได้ไม่จำกัด และขยายเซิร์ฟเวอร์ประมวลผลได้พริบตาเมื่อต้องการคิวรีข้อมูลหนักๆ ปัจจุบันมี 'Snowflake Cortex' ที่ฝังพลัง AI LLM ลงไป ทำให้ผู้ใช้สามารถสั่งแปลภาษา วิเคราะห์ Sentiment หรือสรุปเอกสารในตารางข้อมูลได้ด้วยคำสั่ง SQL ง่ายๆ",
    origin: "ออกแบบมาเพื่อแก้ปัญหาคอขวดของ Data Warehouse ยุคเก่า (เช่น อืดเวลาคนใช้เยอะ) และเกิดมาเป็นระบบ Cloud-native ที่สามารถรันคล่อมได้ทั้ง AWS, Azure และ GCP",
    category: "Data & Analytics",
    priceModel: "Pay-as-you-go (คิดเงินตามเครดิตที่ใช้ประมวลผลระดับวินาที)",
    isFree: false,
    externalUrl: "https://www.snowflake.com",
    rating: 4.8,
    reviewCount: 16800,
    updatedAt: "Feb 2026",
    features: [
      "Separated Compute & Storage: สเกลการประมวลผลได้อย่างอิสระ ไม่มีอาการระบบค้างเวลาคนดึงรีพอร์ตพร้อมกัน",
      "Snowflake Cortex (AI): ฟังก์ชัน AI สำเร็จรูปฝังในระบบ สั่งสรุปข้อความหรือพยากรณ์ข้อมูลได้ด้วยโค้ด SQL",
      "Data Sharing: ฟีเจอร์สุดเจ๋งที่ให้คุณแชร์ตารางข้อมูลข้ามบริษัทหรือให้ลูกค้าเข้ามาดูได้แบบ Real-time โดยไม่ต้องก๊อปปี้ไฟล์ส่งให้กัน"
    ],
    pros: [
      "ใช้งานง่ายและดูแลรักษาง่ายมาก แทบจะไม่มีงาน Admin หลังบ้านที่ต้องคอยจัดการ (Zero Management)",
      "ประสิทธิภาพการทำ SQL Query เร็วทะลุโลก",
      "ฟีเจอร์ Cortex ช่วยให้ Data Analyst นำพลัง Generative AI มาประยุกต์ใช้กับตารางข้อมูลได้เลยโดยไม่ต้องพึ่งทีม ML"
    ],
    cons: [
      "เนื่องจากคิดเงินตามวินาทีที่ประมวลผล (Compute Credit) หากเขียน SQL คิวรีแบบไม่มีประสิทธิภาพ (เช่น ไม่ใช้ Filter) ค่าใช้จ่ายจะสูงลิ่ว",
      "แม้จะมี Snowpark ให้เขียน Python ได้ แต่เครื่องมือในการทำ Data Pipeline ซับซ้อนก็ยังถูกมองว่าเป็นรอง Databricks เล็กน้อย"
    ],
    steps: [
      { title: "สร้าง Warehouse", desc: "ตั้งค่า Virtual Warehouse (หน่วยประมวลผล) เลือกขนาดไซส์แบบเสื้อผ้า (S, M, L, XL)" },
      { title: "โหลดข้อมูล", desc: "ดึงข้อมูลจาก Cloud Storage เข้ามาเก็บในรูปแบบตาราง" },
      { title: "รัน Query & AI", desc: "ใช้ SQL หรือฟังก์ชัน Cortex AI เพื่อดึง Insight ส่งไปให้หน้า Dashboard" }
    ],
    prompts: [
      { 
        purpose: "💡 ใช้ AI วิเคราะห์ความรู้สึกจากข้อความด้วย SQL (Cortex AI)", 
        promptTh: "ฉันต้องการใช้ Snowflake Cortex (ฟังก์ชัน CORTEX.SENTIMENT) ในการวิเคราะห์รีวิวลูกค้า ช่วยเขียนคำสั่ง SQL เพื่อดึงตาราง 'customer_reviews' แล้วสร้างคอลัมน์ใหม่ที่ระบุว่ารีวิวนั้นเป็นแง่บวกหรือแง่ลบ พร้อมหาค่าเฉลี่ยคะแนน Sentiment ของแต่ละหมวดหมู่สินค้า",
        promptEn: "I want to use Snowflake Cortex (CORTEX.SENTIMENT function) to analyze customer feedback. Write a SQL query that reads the 'customer_reviews' table, generates a new column with the sentiment score, and calculates the average sentiment per product category."
      },
      { 
        purpose: "💡 สั่ง AI ช่วย Optimize SQL Query ที่คิวรีช้าให้วิ่งฉิว", 
        promptTh: "คำสั่ง SQL นี้ของฉันใช้เวลาประมวลผลใน Snowflake นานมาก และกิน Credit สูง [แปะโค้ด SQL] ช่วยรีวิวและปรับแก้ (Optimize) โค้ดนี้หน่อย เช่น การเลี่ยงการใช้ SELECT * หรือปรับปรุงการทำ JOIN ให้ทำงานได้เร็วขึ้น",
        promptEn: "This SQL query takes a long time to run in Snowflake and consumes a lot of Compute Credits: [Paste SQL Query]. Please review and optimize it. Apply best practices such as avoiding SELECT *, optimizing the JOIN conditions, and using appropriate filtering."
      }
    ],
    faqs: [
      { question: "เตรียมสัมภาษณ์ตำแหน่ง Data Engineer จำเป็นต้องรู้ Snowflake ไหม?", answer: "เป็นแต้มต่อที่สูงมากครับ! หลายองค์กรในปัจจุบันย้าย Data Warehouse ขึ้นมาบน Snowflake หมดแล้ว การที่คุณรู้คอนเซปต์ 'แยก Compute กับ Storage' จะทำให้คุณตอบคำถามสัมภาษณ์ได้คมขึ้นมากครับ" }
    ]
  },

  // ==========================================
  // ✍️ หมวด AI เขียนบทความ / คอนเทนต์ (Writing & Content) - 5 ตัวท็อป
  // ==========================================
  {
    id: "w1",
    slug: "chatgpt",
    name: "OpenAI – ChatGPT",
    logoUrl: "/logos/OpenAI – ChatGPT.png",
    description: "LLM ครอบจักรวาล เขียนบทความยาว คิดสคริปต์ รีไรต์งาน หรือทำ SEO ได้จบในตัว",
    longDescription: "ChatGPT (โดยเฉพาะเวอร์ชัน Plus ที่ใช้โมเดล GPT-4o ขึ้นไป) คือผู้ช่วยด้านภาษาที่ทรงพลังที่สุดในปัจจุบัน ความฉลาดของมันไม่ใช่แค่การเขียนตามสั่ง แต่คือการ 'สวมบทบาท (Roleplay)' และการวิเคราะห์บริบทที่ยอดเยี่ยม คุณสามารถป้อนข้อมูลดิบๆ แล้วสั่งให้มันเขียนบทความ SEO วางโครงสร้างเว็บไซต์ เขียนแผนธุรกิจ หรือแม้กระทั่งให้มันช่วยตรวจทาน (Proofread) และขัดเกลาสำนวนให้เป็นทางการหรือเป็นกันเองได้อย่างเป็นธรรมชาติที่สุด",
    origin: "พัฒนาโดย OpenAI ถือเป็นแชทบอทที่สร้างแรงสั่นสะเทือนเปลี่ยนโลก AI อย่างแท้จริง มีความสามารถในการอ่านไฟล์ (PDF, Word) และค้นหาข้อมูลจากอินเทอร์เน็ตได้แบบเรียลไทม์",
    category: "Writing & Content",
    priceModel: "Free / Plus $20 ต่อเดือน",
    isFree: true,
    externalUrl: "https://chatgpt.com",
    rating: 4.9,
    reviewCount: 55000,
    updatedAt: "Feb 2026",
    features: [
      "Advanced Roleplay: สั่งให้สวมบทบาทเป็นผู้เชี่ยวชาญเฉพาะทางเพื่อให้ได้น้ำเสียง (Tone of Voice) ที่แม่นยำ",
      "Web Browsing & SEO: ค้นหาข้อมูลล่าสุดบนเน็ตและนำมาเขียนบทความที่รองรับคีย์เวิร์ด SEO",
      "Document Analysis: อัปโหลดไฟล์งานวิจัยหรือข้อมูลดิบ แล้วสั่งให้แปลงเป็นบทความหรือสรุปย่อได้ทันที"
    ],
    pros: [
      "รองรับภาษาไทยได้เป็นธรรมชาติและสละสลวยที่สุดเมื่อเทียบกับคู่แข่ง",
      "จดจำบริบทการสนทนาได้ยาวนาน สามารถสั่งแก้เฉพาะบางย่อหน้าได้อย่างต่อเนื่อง",
      "ใช้งานได้สารพัดประโยชน์ ไม่จำกัดแค่การเขียน (ทำรูป, อ่านกราฟ, แปลงไฟล์ได้)"
    ],
    cons: [
      "บางครั้งอาจเกิดอาการ 'Hallucination' (แต่งเรื่องขึ้นมาเอง) หากข้อมูลที่ค้นหาไม่ชัดเจน",
      "หากไม่ให้ Prompt ที่ละเอียดพอ สำนวนการเขียนมักจะดูออกว่าเป็น AI (เช่น ชอบใช้คำว่า 'นอกจากนี้', 'สรุปได้ว่า')"
    ],
    steps: [
      { title: "กำหนดบทบาท", desc: "เริ่มต้นด้วยการบอกว่า AI คือใคร (เช่น 'คุณคือ Copywriter มืออาชีพ')" },
      { title: "ให้ข้อมูลและเป้าหมาย", desc: "ใส่ข้อมูลสินค้าหรือหัวข้อ และระบุกลุ่มเป้าหมายที่จะอ่าน" },
      { title: "สั่งปรับแก้ (Refine)", desc: "เมื่อได้ข้อความมาแล้ว ให้สั่งปรับโทน เช่น 'ขอให้ดูสนุกขึ้น' หรือ 'ขอให้สั้นลง 20%'" }
    ],
    prompts: [
      { 
        purpose: "💡 สั่งเขียนแผนธุรกิจสำหรับธุรกิจขนาดเล็ก (Business Plan)", 
        promptTh: "คุณคือที่ปรึกษาธุรกิจ ช่วยเขียนแผนธุรกิจ (Business Plan) เบื้องต้นสำหรับ 'โฮมคาเฟ่ที่เน้นขายเบเกิลโฮมเมดและเครื่องดื่ม' โดยเน้นทำเลในหมู่บ้านและการส่งเดลิเวอรี่ ขอให้ครอบคลุมหัวข้อ: 1. บทสรุปผู้บริหาร 2. กลุ่มลูกค้าเป้าหมาย 3. กลยุทธ์การตลาดผ่านโซเชียลมีเดีย และ 4. โครงสร้างต้นทุนเบื้องต้น",
        promptEn: "Act as a business consultant. Write a basic Business Plan for a 'home-based cafe specializing in homemade bagels and craft drinks', focusing on a residential neighborhood and delivery operations. Include: 1. Executive Summary, 2. Target Audience, 3. Social Media Marketing Strategy, and 4. Basic Cost Structure."
      },
      { 
        purpose: "💡 สั่งร่างโครงสร้างเว็บไซต์ (Website Copywriting)", 
        promptTh: "ฉันกำลังจะสร้างเว็บไซต์สำหรับ 'โรงเรียนสอนภาษาอังกฤษออนไลน์' ช่วยร่างโครงสร้างเนื้อหา (Sitemap) และเขียน Copywriting หน้า Landing Page ให้หน่อย โดยขอให้มีส่วนของ: Headline ที่ดึงดูด, Pain points ของคนเรียนภาษาไม่เก่ง, และปุ่ม Call-to-action (CTA) ที่กระตุ้นให้คนอยากสมัครเรียน",
        promptEn: "I am building a website for an 'Online English Language School'. Please draft the Sitemap and write the copywriting for the Landing Page. Include: A catchy Headline, common Pain Points of language learners, and compelling Call-to-action (CTA) buttons to drive course registrations."
      }
    ],
    faqs: [
      { question: "ทำยังไงไม่ให้คนอ่านรู้ว่าใช้ ChatGPT เขียน?", answer: "ต้องใช้เทคนิค Prompt สั่งห้ามใช้คำซ้ำซากครับ เช่น 'ห้ามใช้คำว่า ยิ่งไปกว่านั้น, อย่างไรก็ตาม, ในยุคดิจิทัล' และควรนำข้อความมาเกลา (Rewrite) ด้วยตัวเองอีกรอบเสมอครับ" }
    ]
  },
  {
    id: "w2",
    slug: "claude",
    name: "Anthropic – Claude 3.5",
    logoUrl: "/logos/Anthropic – Claude.png",
    description: "ราชาแห่งการอ่านเอกสารยาวๆ สรุปข้อมูลวิจัยแม่นยำ และเขียนภาษาได้เป็นธรรมชาติมาก",
    longDescription: "หาก ChatGPT คือเด็กเนิร์ดที่รู้ทุกเรื่อง Claude ก็คือนักวิชาการและนักเขียนรางวัลซีไรต์! Claude โดดเด่นอย่างมากเรื่อง 'Long-context window' มันสามารถรับไฟล์ PDF ความยาวเป็นร้อยๆ หน้าเข้าไปอ่านและวิเคราะห์ได้โดยไม่หลงลืมรายละเอียด (No memory loss) ที่สำคัญคือสไตล์การเขียนของ Claude จะมีความลื่นไหล เป็นมนุษย์ มีความถ่อมตัว และไม่ค่อยใช้คำศัพท์ที่ดูประดิษฐ์ประดอยเหมือน AI ทั่วไป เหมาะอย่างยิ่งสำหรับงานสรุปรายงานบริษัท การวิเคราะห์เอกสารทางกฎหมาย หรืองานเขียนที่ต้องการความลุ่มลึก",
    origin: "สร้างโดยทีมอดีตนักวิจัยจาก OpenAI ที่ให้ความสำคัญกับความปลอดภัยและจริยธรรม (Constitutional AI) ทำให้ Claude เป็น AI ที่ไว้ใจได้เรื่องการไม่ตอบข้อมูลที่เป็นอันตราย",
    category: "Writing & Content",
    priceModel: "Free / Pro $20 ต่อเดือน",
    isFree: true,
    externalUrl: "https://claude.ai",
    rating: 4.8,
    reviewCount: 31200,
    updatedAt: "Feb 2026",
    features: [
      "Massive Context Window: รองรับการอัปโหลดไฟล์ขนาดใหญ่ (หนังสือทั้งเล่ม) เพื่อให้ AI อ่านและวิเคราะห์",
      "Artifacts: ฟีเจอร์แบ่งหน้าจอขวาที่ให้ Claude วาดกราฟิก สร้างตาราง หรือเขียนโค้ดและพรีวิวให้ดูได้ทันที",
      "Nuanced Writing: น้ำเสียงการเขียนมีความซับซ้อนและเป็นธรรมชาติ คล้ายคลึงนักเขียนมืออาชีพ"
    ],
    pros: [
      "เป็นเบอร์ 1 ในเรื่องการสรุปเอกสารยาวๆ ไม่มีการ 'หลอน' (Hallucinate) ข้อมูลจากไฟล์ที่อัปโหลด",
      "ฟีเจอร์ Artifacts มีประโยชน์มากเวลาสั่งให้มันเขียนโครงสร้างบทความ หรือทำตารางเปรียบเทียบข้อมูล",
      "สำนวนการเขียนภาษาไทยดูเป็น 'คนจริง' มากกว่า ChatGPT"
    ],
    cons: [
      "ในเวอร์ชันฟรี โควต้าการใช้งาน (Message limits) หมดค่อนข้างเร็ว โดยเฉพาะถ้าอัปโหลดไฟล์ใหญ่",
      "ไม่สามารถค้นหาข้อมูลจากอินเทอร์เน็ต (Web Browsing) แบบเรียลไทม์ได้ด้วยตัวเอง"
    ],
    steps: [
      { title: "อัปโหลดเอกสาร", desc: "ลากไฟล์ PDF หรือ Text หลายๆ ไฟล์เข้าไปในช่องแชท" },
      { title: "สั่งวิเคราะห์", desc: "พิมพ์คำถามเจาะจง เช่น 'ช่วยสรุปประเด็นหลัก 3 ข้อจากเอกสารนี้'" },
      { title: "ใช้งาน Artifacts", desc: "สั่งให้ Claude แปลงข้อมูลในเอกสารออกมาเป็นตารางเทียบสเปก (Table) ในหน้าต่างขวา" }
    ],
    prompts: [
      { 
        purpose: "💡 ให้ AI วิเคราะห์และสรุปรายงานขนาดยาว (Document Analysis)", 
        promptTh: "[อัปโหลดไฟล์ PDF รายงานการตลาด]\nช่วยอ่านเอกสารนี้และเขียนสรุป Executive Summary ความยาวไม่เกิน 1 หน้ากระดาษ โดยเน้นไปที่ 'พฤติกรรมผู้บริโภคที่เปลี่ยนไป' และ 'โอกาสทางธุรกิจ' พร้อมทำตารางสรุปตัวเลขสถิติที่สำคัญ",
        promptEn: "[Upload PDF report]\nPlease read this document and write an Executive Summary (max 1 page). Focus specifically on 'shifting consumer behaviors' and 'new business opportunities'. Also, generate a table summarizing the key statistical findings."
      },
      { 
        purpose: "💡 สั่งเกลาภาษาให้เป็นมืออาชีพ (Tone Adjustment)", 
        promptTh: "นี่คืออีเมลที่ฉันร่างไว้เพื่อส่งให้พาร์ทเนอร์ธุรกิจ [วางข้อความอีเมล] ช่วยเกลาภาษาใหม่ให้ดูเป็นทางการ สุภาพ แต่ยังคงความกระตือรือร้นที่จะร่วมงานด้วย และแก้ไขไวยากรณ์ให้ถูกต้อง 100%",
        promptEn: "Here is a draft email I wrote for a business partner: [Paste email]. Please rewrite it to sound highly professional, polite, yet enthusiastic about the collaboration. Ensure 100% perfect grammar."
      }
    ],
    faqs: [
      { question: "Claude แตกต่างกับ ChatGPT อย่างไรในการเขียน?", answer: "ChatGPT จะชอบจัดรูปแบบมาเป็น Bullet สวยงามและมีคำสรุปปิดท้ายเสมอ ส่วน Claude จะเขียนแบบเล่าเรื่อง (Narrative) ค่อยๆ อธิบายเหตุผล ซึ่งอ่านแล้วรู้สึกลื่นไหลเหมือนคนเขียนมากกว่าครับ" }
    ]
  },
  {
    id: "w3",
    slug: "jasper-ai",
    name: "Jasper AI",
    logoUrl: "/logos/Jasper AI.png",
    description: "AI เบอร์หนึ่งสายนักการตลาด เขียนโฆษณา แคปชั่นขายของ และ Email Marketing เก่งขั้นเทพ",
    longDescription: "Jasper ไม่ได้ถูกสร้างมาให้แชทเล่นทั่วไป แต่มันคือ AI ที่ถูกเทรนด้วยความรู้ด้าน 'Marketing Copywriting' โดยเฉพาะ! มันเกิดมาเพื่อช่วยนักการตลาดปั่นคอนเทนต์ ไม่ว่าจะเป็นแคปชั่น Facebook Ads, สคริปต์วิดีโอ TikTok, หน้า Sales Page แบบยาวๆ ไปจนถึง Email Marketing Jasper มี 'Brand Voice' ที่คุณสามารถป้อนข้อมูลให้มันเรียนรู้โทนเสียงของแบรนด์คุณ (เช่น สนุกสนาน, ทางการ, ทันสมัย) เพื่อให้งานเขียนทุกชิ้นออกมาเป็นเนื้อเดียวกันเหมือนทีมงานคนเดียวกันเขียน",
    origin: "เริ่มต้นจากชื่อ Jarvis ก่อนจะเปลี่ยนเป็น Jasper ถือเป็นเครื่องมือบุกเบิกในวงการ AI Copywriting ที่รวมโมเดล AI หลายตัวมาปรับแต่ง (Fine-tune) ให้เก่งเรื่องการกระตุ้นยอดขายโดยเฉพาะ",
    category: "Writing & Content",
    priceModel: "Starts at $39/เดือน",
    isFree: false,
    externalUrl: "https://www.jasper.ai",
    rating: 4.7,
    reviewCount: 14500,
    updatedAt: "Feb 2026",
    features: [
      "50+ Marketing Templates: มีแบบฟอร์มสำเร็จรูปให้เลือก เช่น โครงสร้าง AIDA (Attention, Interest, Desire, Action), PAS (Problem, Agitate, Solution)",
      "Brand Voice & Style: กำหนดน้ำเสียงของแบรนด์ และใส่ข้อมูลสินค้า (Knowledge Base) ทิ้งไว้ให้ AI ดึงไปใช้เขียนได้ตลอด",
      "Campaign Generator: พิมพ์ไอเดียแคมเปญสั้นๆ ระบบจะแตกชิ้นงานออกมาเป็น อีเมล, แคปชั่น FB, และหน้าเว็บ ให้ครบชุด"
    ],
    pros: [
      "มี Template สำเร็จรูปเยอะมาก ทำให้ทำงานได้เร็วโดยไม่ต้องคิด Prompt เองตั้งแต่ศูนย์",
      "เขียน Copywriting ได้มีชั้นเชิงและกระตุ้นความรู้สึกอยากซื้อ (Conversion) ได้ดีกว่า ChatGPT ทั่วไป",
      "ฟีเจอร์ Brand Voice ช่วยคุมโทนงานเขียนของทีมการตลาดทั้งบริษัทได้ดีเยี่ยม"
    ],
    cons: [
      "ราคาค่อนข้างสูงเมื่อเทียบกับการใช้งาน LLM ทั่วไป เหมาะกับบริษัทหรือ Agency มากกว่าใช้งานส่วนตัว",
      "การเขียนภาษาไทยบางครั้งยังต้องนำมาปรับคำให้เป็นภาษาพูดแบบคนไทยอีกเล็กน้อย"
    ],
    steps: [
      { title: "ตั้งค่า Brand Voice", desc: "นำบทความเก่าๆ ของคุณมาให้ Jasper อ่านเพื่อเรียนรู้น้ำเสียง (Tone)" },
      { title: "เลือก Template", desc: "เลือกรูปแบบที่ต้องการ เช่น 'Facebook Ad Headline' หรือ 'AIDA Framework'" },
      { title: "ใส่คีย์เวิร์ด", desc: "พิมพ์ชื่อสินค้าและจุดเด่นสั้นๆ แล้วให้ AI เสกคอนเทนต์ออกมาหลายๆ แบบให้เลือก" }
    ],
    prompts: [
      { 
        purpose: "💡 เขียนอีเมลเสนอขายสินค้าแบบต่อเนื่อง (Email Sequence)", 
        promptTh: "[ใช้ใน Template: Email Campaign]\nช่วยเขียนอีเมล 3 ฉบับ (Drip Campaign) สำหรับเสนอขาย 'คอร์สเรียนภาษาอังกฤษออนไลน์แบบ Full-stack' อีเมลที่ 1: แนะนำตัวและชี้ให้เห็นปัญหาการสื่อสารไม่ได้, อีเมลที่ 2: นำเสนอความสำเร็จของนักเรียน (Testimonial), อีเมลที่ 3: เสนอโปรโมชั่นโค้งสุดท้ายก่อนปิดรับสมัคร",
        promptEn: "Write a 3-part email sequence (Drip Campaign) for selling a 'Comprehensive Online English Course'. Email 1: Introduction & agitating the pain point of communication barriers. Email 2: Social proof and student testimonials. Email 3: Scarcity-driven final discount offer before closing."
      },
      { 
        purpose: "💡 เขียนแคปชั่นโฆษณาเฟซบุ๊ก (Facebook Ads)", 
        promptTh: "[ใช้ใน Template: AIDA Framework]\nช่วยเขียนแคปชั่นโฆษณา Facebook สำหรับ 'ระบบรับชำระเงินออนไลน์สำหรับธุรกิจ B2B' โดยใช้โครงสร้าง AIDA ดึงดูดความสนใจด้วยปัญหาเรื่องการวางบิลล่าช้า และกระตุ้นให้พวกเขากดปุ่มทดลองใช้ฟรี",
        promptEn: "Write a Facebook Ad caption for a 'B2B Online Payment System' using the AIDA framework. Grab attention with the pain point of late invoice collections, and strongly call them to action (CTA) for a free trial."
      }
    ],
    faqs: [
      { question: "ทำไมถึงควรจ่ายเงินซื้อ Jasper ในเมื่อ ChatGPT ก็เขียนโฆษณาได้?", answer: "Jasper มีฟีเจอร์จัดการแคมเปญและ Template ที่ประหยัดเวลาครับ คุณไม่ต้องมานั่งคิด Prompt แบบ 'Act as a marketer...' ทุกครั้ง และระบบเด่นเรื่องการทำ A/B Testing ให้ข้อความโฆษณาครับ" }
    ]
  },
  {
    id: "w4",
    slug: "copy-ai",
    name: "Copy.ai",
    logoUrl: "/logos/Copy.ai.png",
    description: "ผู้ช่วยสายโซเชียล คิดไอเดียคอนเทนต์ เขียนแคปชั่น และบล็อกโพสต์ได้ไวสุดๆ",
    longDescription: "Copy.ai เป็นเครื่องมือสาย Copywriting ที่โด่งดังตีคู่มากับ Jasper แต่จะเน้นหนักไปทาง 'การใช้งานที่ง่ายและรวดเร็ว' (Ease of use) เหมาะกับเหล่า Content Creator, เจ้าของร้านค้าออนไลน์ หรือนักการตลาดสายโซเชียลมีเดีย จุดเด่นคือมี Tools แจกแจงย่อยๆ มากกว่า 90 แบบ เช่น เครื่องมือตั้งชื่อคลิป YouTube, เครื่องมือคิดไอเดียโพสต์ Instagram หรือกระทั่งเครื่องมือเขียนจดหมายขอโทษลูกค้า แถมยังมี 'Brand Voice' และระบบ Workflow ที่สั่งรันกระบวนการเขียนอัตโนมัติได้",
    origin: "สร้างมาเพื่อแก้ปัญหา 'อาการสมองตัน (Writer's Block)' โดยเน้น UI ที่สะอาดตา พิมพ์คำศัพท์ไปไม่กี่คำ ก็พ่นไอเดียเจ๋งๆ ออกมาให้เลือกเพียบ",
    category: "Writing & Content",
    priceModel: "Free (จำกัดคำ) / Pro $36 ต่อเดือน",
    isFree: true,
    externalUrl: "https://www.copy.ai",
    rating: 4.6,
    reviewCount: 9800,
    updatedAt: "Feb 2026",
    features: [
      "90+ Copywriting Tools: มีเครื่องมือยิบย่อยครอบคลุมทุกแพลตฟอร์มโซเชียล",
      "Infobase: บันทึกข้อมูลบริษัทหรือสเปกสินค้าไว้ พอจะเขียนโพสต์ก็พิมพ์แท็กชื่อสินค้าได้เลย AI จะดึงข้อมูลไปเขียนเอง",
      "Workflow Automation: สั่งให้ AI รันงานต่อเนื่อง เช่น อ่านข่าวต่างประเทศ แปลเป็นไทย แล้วย่อยเป็นโพสต์ Twitter อัตโนมัติ"
    ],
    pros: [
      "มีเวอร์ชันฟรีให้ใช้งานได้เรื่อยๆ (เหมาะกับร้านค้าเล็กๆ หรือมือใหม่)",
      "หน้าตาโปรแกรมใช้งานง่ายมาก (User-friendly) ไม่มีความรู้เรื่อง AI Prompt ก็ใช้งานได้ 100%",
      "ไอเดียความสร้างสรรค์ในการทำแคปชั่นโซเชียลถือว่าจี๊ดจ๊าดและน่าสนใจ"
    ],
    cons: [
      "ถ้าจะเขียนบทความระดับวิชาการหรือเอกสารที่ใช้ตรรกะซับซ้อน จะทำได้ไม่ดีเท่า Claude หรือ ChatGPT",
      "จำนวนคำ (Word limit) ในเวอร์ชันฟรีอาจจะไม่พอสำหรับคนที่เขียนบล็อกยาวๆ ทุกวัน"
    ],
    steps: [
      { title: "เลือกโปรเจกต์", desc: "เลือกว่าจะเขียนอะไร เช่น 'Instagram Captions' หรือ 'Blog Ideas'" },
      { title: "อธิบายสั้นๆ", desc: "พิมพ์อธิบายสิ่งที่จะสื่อเพียง 1-2 บรรทัด หรือเลือกโทนเสียง เช่น 'ตลก', 'หรูหรา'" },
      { title: "เลือกและปรับแต่ง", desc: "AI จะให้ตัวเลือกมา 5-10 แบบ ให้กด Copy แบบที่ชอบที่สุดไปใช้ได้เลย" }
    ],
    prompts: [
      { 
        purpose: "💡 ให้ AI ร่างแคปชั่น Instagram แบบเป็นกันเอง", 
        promptTh: "[ใช้เครื่องมือ Instagram Caption]\nช่วยเขียนแคปชั่น IG สำหรับร้าน 'โฮมคาเฟ่' ของฉัน วันนี้เรามีเมนูใหม่คือ 'เบเกิลครีมชีสสตรอว์เบอร์รี' รสชาติเปรี้ยวอมหวาน กินคู่กับกาแฟดำเข้ากันสุดๆ ขอโทนเสียงแบบน่ารัก สดใส เป็นกันเอง พร้อมใส่ Hashtag ที่เกี่ยวข้องให้ด้วย",
        promptEn: "Write an Instagram caption for my home-based cafe. Today's new menu item is a 'Strawberry Cream Cheese Bagel'. It's sweet and tangy, perfectly paired with black coffee. Tone: Cute, bright, and friendly. Include relevant hashtags."
      },
      { 
        purpose: "💡 ร่างโพสต์ LinkedIn โชว์ความเป็นมืออาชีพ", 
        promptTh: "[ใช้เครื่องมือ LinkedIn Post]\nฉันเพิ่งเรียนจบหลักสูตร Data Analysis และได้ทำโปรเจกต์ 'วิเคราะห์ยอดขาย Toyota' จนเสร็จสมบูรณ์ ช่วยเขียนโพสต์แชร์ประสบการณ์ สิ่งที่ได้เรียนรู้ และเปิดโอกาสให้คนมาพูดคุยแลกเปลี่ยนกัน ขอโทนเสียงแบบมืออาชีพและถ่อมตัว",
        promptEn: "I just completed a Data Analysis course and finished my capstone project on 'Toyota Sales Data Analysis'. Write a LinkedIn post sharing my journey, key learnings, and inviting connections to discuss. Tone: Professional and humble."
      }
    ],
    faqs: [
      { question: "เหมาะกับร้านค้าใน IG หรือ TikTok ไหม?", answer: "เหมาะมากๆ ครับ Copy.ai เก่งเรื่องการเขียนข้อความสั้นๆ ที่มี Hook กระชากใจ (เช่น ประโยคเปิดคลิป TikTok) ช่วยให้คอนเทนต์โซเชียลหยุดนิ้วคนดูได้ดีครับ" }
    ]
  },
  {
    id: "w5",
    slug: "writesonic",
    name: "Writesonic",
    logoUrl: "/logos/Writesonic.png",
    description: "AI สายปั่นบทความ SEO อัตโนมัติ มีโครงสร้างเว็บ โยงข้อมูลและรูปภาพให้พร้อม",
    longDescription: "Writesonic คือสุดยอดอาวุธสำหรับชาว SEO และ Blogger! ในขณะที่ AI ตัวอื่นแค่เขียนข้อความให้ แต่ Writesonic ถูกออกแบบมาเพื่อ 'ทำอันดับบน Google' อย่างแท้จริง มีเครื่องมือ Article Writer 6.0 ที่คุณแค่ป้อนคีย์เวิร์ด (Keyword) ลงไป มันจะไปวิเคราะห์เว็บไซต์คู่แข่งที่ติดหน้าแรก Google ดึงเอาโครงสร้างหัวข้อ (H1, H2, H3) มารวมกัน แล้วเขียนบทความใหม่ที่ยาวกว่า ดีกว่า พร้อมแทรกรูปภาพอ้างอิงและลิงก์ออก (Outbound Links) ให้เสร็จสรรพในคลิกเดียว!",
    origin: "สร้างขึ้นด้วยเป้าหมายเพื่อเป็น All-in-one AI สำหรับการทำ Content Marketing โดยมี Chatsonic (แชทบอทที่ต่อเน็ตได้) เป็นฟีเจอร์ชูโรงตีคู่มากับ ChatGPT",
    category: "Writing & Content",
    priceModel: "Free (ให้คำจำกัด) / Starts at $16/เดือน",
    isFree: true,
    externalUrl: "https://writesonic.com",
    rating: 4.6,
    reviewCount: 8800,
    updatedAt: "Feb 2026",
    features: [
      "AI Article Writer 6.0: สแกนคู่แข่งและเสกบทความยาว 2,000+ คำ ที่อัดแน่นด้วยคีย์เวิร์ด SEO ทันที",
      "Surfer SEO Integration: เชื่อมต่อกับเครื่องมือทำ SEO ชื่อดังเพื่อวิเคราะห์คะแนนบทความ (Content Score)",
      "Chatsonic: แชทบอทอัจฉริยะที่สามารถวาดรูปและเสิร์ช Google เพื่อให้ข้อมูลที่เป็นปัจจุบันที่สุด"
    ],
    pros: [
      "ช่วยประหยัดเวลาทำ Research ข้อมูลสำหรับบล็อกโพสต์ไปได้มหาศาล",
      "โครงสร้างบทความที่ได้ เป็นมิตรกับ Google Algorithm มากๆ (SEO-friendly)",
      "มีระบบ Auto-publish กดปุ่มเดียวส่งบทความขึ้น WordPress ได้เลย"
    ],
    cons: [
      "สำหรับภาษาไทย บางครั้งคำศัพท์ในบทความยาวๆ อาจจะดูแปลกแปร่ง ต้องมานั่งเกลาอีกรอบ",
      "เครดิตใช้งาน (Words) หมดค่อนข้างเร็วหากสั่งเขียนบทความแบบคุณภาพสูงสุด (Premium Quality)"
    ],
    steps: [
      { title: "ใส่ Keyword", desc: "เข้าไปที่ Article Writer พิมพ์คีย์เวิร์ดหลักที่อยากให้คนค้นเจอ" },
      { title: "เลือกโครงสร้าง", desc: "AI จะเสนอหัวข้อย่อย (Outlines) มาให้ ให้เรากดเลือกหรือเพิ่มลบเองได้" },
      { title: "กด Generate", desc: "รอระบบปั่นบทความยาวเหยียดพร้อมจัด Format หน้ากระดาษให้เรียบร้อย" }
    ],
    prompts: [
      { 
        purpose: "💡 ให้ Chatsonic ช่วยเขียนบทความอัปเดตเทรนด์ปัจจุบัน (Real-time Data)", 
        promptTh: "ช่วยเขียนบทความบล็อกความยาว 800 คำ ในหัวข้อ 'รวมบริษัทที่เปิดรับนักศึกษาฝึกงาน (Co-op) ด้าน Data Engineer 6 เดือน พร้อมให้เงินเดือน' โดยให้ค้นหาข้อมูลอัปเดตล่าสุดจากอินเทอร์เน็ต จัดหน้าแบบอ่านง่าย และแทรกคีย์เวิร์ด SEO",
        promptEn: "Write an 800-word blog post on 'Top Companies Offering 6-Month Paid Co-op Internships for Data Engineers'. Search the web for the most up-to-date listings. Format it for readability and seamlessly integrate SEO keywords."
      },
      { 
        purpose: "💡 เขียน Copywriting สำหรับ Landing Page สินค้า", 
        promptTh: "[ใช้เครื่องมือ Landing Page Copy]\nชื่อสินค้า/บริการ: คอร์สเรียน Python พื้นฐานสำหรับคนไม่มีพื้นฐาน\nจุดเด่น: สอนทำโปรเจกต์จริง, มีโค้ดตัวอย่างให้, เข้าใจง่าย",
        promptEn: "Product/Service: Beginner Python Course for Non-programmers\nFeatures: Hands-on real projects, code snippets provided, easy-to-understand approach."
      }
    ],
    faqs: [
      { question: "Google จะแบนเว็บไซต์ที่ใช้ AI เขียนบทความไหม?", answer: "Google ออกกฎชัดเจนว่า 'ไม่แบน AI' ตราบใดที่บทความนั้น 'มีประโยชน์และตอบคำถามผู้ใช้งานได้จริง (Helpful Content)' ไม่ใช่แค่การสแปมคีย์เวิร์ดขยะครับ" }
    ]
  },

  // ==========================================
  // 📊 หมวด AI ทำสไลด์ / Presentation - 5 ตัวท็อป
  // ==========================================
  {
    id: "p1",
    slug: "gamma-app",
    name: "Gamma",
    logoUrl: "/logos/Gamma.png",
    description: "แอปสร้างสไลด์และเว็บไซต์พรีเซนต์งานที่ลื่นไหลที่สุด เสกความสวยงามจากข้อความใน 1 นาที",
    longDescription: "ลืมการนั่งปรับขนาดฟอนต์หรือขยับรูปภาพใน PowerPoint ไปได้เลย! Gamma คือเครื่องมือ Presentation แห่งอนาคต (เขาเรียกตัวเองว่าเป็นสื่อรูปแบบใหม่) คุณเพียงแค่พิมพ์หัวข้อ หรือโยนไฟล์ข้อความ/โครงร่าง (Outline) เข้าไป AI ของ Gamma จะนำไปแบ่งหน้าสไลด์ จับคู่สี หารูปภาพ (หรือสร้างรูปจาก AI) และจัด Layout ให้อัตโนมัติในเวลาไม่ถึงนาที ความเจ๋งคือมันแสดงผลได้ทั้งแบบสไลด์ปัดขวา หรือแบบเว็บเพจที่เลื่อนสกอร์ลง (Scrollable) ดูบนมือถือก็สวยงาม",
    origin: "สร้างมาเพื่อปฏิวัติวงการนำเสนองาน โดยมองว่าสไลด์แบบเดิม (16:9) ไม่ตอบโจทย์การอ่านบนสมาร์ทโฟน จึงออกแบบ Gamma ให้เป็นเหมือนหน้าเว็บที่อ่านลื่นไหล",
    category: "Presentation & Slides",
    priceModel: "Free (ให้เครดิตฟรีตอนสมัคร) / Plus $8 ต่อเดือน",
    isFree: true,
    externalUrl: "https://gamma.app",
    rating: 4.8,
    reviewCount: 22400,
    updatedAt: "Feb 2026",
    features: [
      "Text-to-Slide: พิมพ์ข้อความคำอธิบายสั้นๆ แล้วให้ AI เสกสไลด์ 10 หน้าให้ทันที",
      "Flexible Layouts: จัดวางข้อมูลแบบการ์ด (Cards) ยืดหยุ่นสูง แทรกวิดีโอ YouTube, เว็บไซต์ หรือ 3D Model ลงในสไลด์ได้เลย",
      "One-click Theme: เปลี่ยนธีมสีและฟอนต์ทั้งโปรเจกต์ได้ในคลิกเดียว โดยที่ Layout ไม่พัง"
    ],
    pros: [
      "ใช้งานง่ายและได้ผลลัพธ์ที่ 'สวยทันที' สไตล์ Modern Minimalist",
      "แชร์ลิงก์ให้คนอื่นดูได้ง่ายมาก เปิดดูในมือถือ (Mobile Responsive) ได้สวยงาม ไม่ต้องโหลดแอป",
      "รองรับภาษาไทยได้ดีเยี่ยม ทั้งการตีความคำสั่ง และการจัดวางฟอนต์ภาษาไทย"
    ],
    cons: [
      "ไม่สามารถจัด Layout แบบอิสระ (Free-form) ลากรูปไปวางทับๆ กันแบบ PowerPoint ไม่ได้ (มันเป็นระบบบล็อก)",
      "การส่งออก (Export) เป็นไฟล์ .pptx บางครั้ง Layout หรือฟอนต์อาจจะเคลื่อนเล็กน้อย"
    ],
    steps: [
      { title: "เลือก Generate", desc: "เข้าไปที่เว็บ Gamma เลือกเมนู 'Generate' แล้วเลือกทำ Presentation" },
      { title: "พิมพ์ Outline", desc: "ป้อนข้อความว่าสไลด์เกี่ยวกับอะไร AI จะร่างหัวข้อแต่ละหน้ามาให้คอนเฟิร์ม" },
      { title: "เลือก Theme", desc: "เลือกโทนสีที่ชอบ แล้วนั่งดู AI พิมพ์ข้อความและหารูปมาใส่ให้แบบเรียลไทม์" }
    ],
    prompts: [
      { 
        purpose: "💡 สั่งเสกสไลด์ Pitch Deck นำเสนอโปรเจกต์", 
        promptTh: "[พิมพ์ในกล่อง Generate ของ Gamma]\nสร้างสไลด์ Pitch Deck สำหรับ 'แพลตฟอร์ม Web Application เพื่อการเรียนภาษา (Bilingual-Club)' ที่มีฟีเจอร์ขายคอร์สเรียนและ e-book ขอให้มีหัวข้อ: ปัญหาของการเรียนภาษาแบบเดิม, โซลูชันของเรา, โครงสร้างแอปพลิเคชัน (Tech Stack), และโมเดลการสร้างรายได้ โทนสีดูเป็นวัยรุ่นและทันสมัย",
        promptEn: "Generate a Pitch Deck presentation for a 'Language Learning Web Application Platform (Bilingual-Club)' that features online courses and e-book sales. Include sections for: The Problem with traditional learning, Our Solution, the App Architecture (Tech Stack), and the Revenue Model. Use a modern, youthful tone."
      },
      { 
        purpose: "💡 แปลงเนื้อหาเป็นสไลด์สรุป (Text to Presentation)", 
        promptTh: "[เลือกเมนู Text to Presentation แล้ววางบทความยาวๆ]\nช่วยย่อยข้อมูลทั้งหมดในบทความนี้ ทำเป็นสไลด์สรุปบทเรียน 10 หน้า โดยเน้นใช้สัญลักษณ์ (Icons) และ Bullet points ให้อ่านง่าย",
        promptEn: "Condense all the information from this pasted article into a 10-slide summary presentation. Emphasize the use of icons and bullet points for easy readability."
      }
    ],
    faqs: [
      { question: "Gamma เซฟออกมาเป็นไฟล์ PowerPoint หรือ PDF ได้ไหม?", answer: "ได้ครับ! สามารถกดปุ่ม Export มุมขวาบน เลือกดาวน์โหลดเป็น PDF หรือไฟล์ .pptx ไปเปิดในคอมเครื่องอื่นที่ไม่มีเน็ตได้เลยครับ" }
    ]
  },
  {
    id: "p2",
    slug: "tome",
    name: "Tome",
    logoUrl: "/logos/tome.png",
    description: "AI นักเล่าเรื่อง (Storytelling) เกิดมาเพื่อทำ Pitch Deck สไตล์ Startup และงานอาร์ต",
    longDescription: "Tome คล้ายกับ Gamma แต่มีจุดยืนที่ต่างออกไป Tome เน้นเรื่องการนำเสนอแบบ 'Storytelling' สไลด์ที่ได้จะมีความเป็นนิตยสาร (Editorial layout) ดูหรูหรา และมีศิลปะสูง สิ่งที่ Tome ทำได้ดีมากคือการเชื่อมต่อกับโมเดล AI วาดรูป (เช่น DALL-E) เพื่อวาดภาพประกอบสไลด์ให้ใหม่ทั้งหมด ทำให้สไลด์ของคุณมีภาพที่เป็นเอกลักษณ์ไม่ซ้ำใคร เหมาะมากสำหรับงานสายครีเอทีฟ, การพิตช์งานเอเจนซี่, หรือโปรเจกต์ Startup ที่ต้องการภาพลักษณ์ล้ำสมัย",
    origin: "สร้างโดยนักพัฒนาจากซิลิคอนแวลลีย์ มุ่งเน้นไปที่กลุ่ม Founder และนักลงทุน (VC) ที่เบื่อหน้าตาของสไลด์ PowerPoint แบบเดิมๆ",
    category: "Presentation & Slides",
    priceModel: "Free (ให้เครดิต) / Pro $16 ต่อเดือน",
    isFree: true,
    externalUrl: "https://tome.app",
    rating: 4.6,
    reviewCount: 15100,
    updatedAt: "Feb 2026",
    features: [
      "AI Story Creator: ป้อนหัวข้อเพียงประโยคเดียว AI จะแต่งเรื่องราว แบ่งสไลด์ และวาดภาพ 3D ประกอบให้ทันที",
      "Interactive Embeds: ฝังโปรแกรมจากภายนอก เช่น Figma (Prototype หน้าเว็บ), Airtable, หรือ 3D Spline ลงไปเล่นในสไลด์ได้เลย",
      "Document to Presentation: แปลงไฟล์เอกสารยาวๆ ให้เป็นสไลด์ย่อยง่าย (เหมือน Gamma)"
    ],
    pros: [
      "สุนทรียภาพ (Aesthetics) ของสไลด์ดูหรูหรา มืดๆ สไตล์ Apple/Startup สายเทค",
      "ภาพประกอบที่ AI วาดให้ดูมีศิลปะและคุมโทนไปในทิศทางเดียวกันทั้งงาน",
      "ฟีเจอร์ฝังงานจาก Figma ช่วยให้การพิตช์โปรเจกต์ทำเว็บ/แอปดูเป็นมืออาชีพสุดๆ"
    ],
    cons: [
      "การปรับแต่ง Layout แอบใช้งานยากกว่า Gamma และไม่สามารถปรับเปลี่ยนธีมได้อิสระเท่า",
      "ภาพประกอบที่ AI วาดขึ้นมา บางครั้งอาจจะดูอาร์ตเกินไปจนไม่สื่อถึงเนื้อหาแบบตรงไปตรงมา"
    ],
    steps: [
      { title: "สร้าง Tome ใหม่", desc: "กด Create พิมพ์ประโยคคำสั่งในช่องรับคำสั่ง (Prompt bar)" },
      { title: "เลือกสไตล์ภาพ", desc: "เลือกสไตล์ภาพประกอบ (เช่น 3D, Cyberpunk, Watercolor) ก่อนให้ AI เริ่มทำงาน" },
      { title: "ปรับแต่ง (Tweak)", desc: "คลิกที่ภาพเพื่อสั่งให้ AI วาดใหม่ หรือลากบล็อกข้อความเพื่อเปลี่ยนเลย์เอาต์" }
    ],
    prompts: [
      { 
        purpose: "💡 สร้างสไลด์นำเสนอโปรเจกต์นวัตกรรม (Innovation Pitch)", 
        promptTh: "สร้างพรีเซนเทชัน 8 สไลด์ เพื่อนำเสนอ 'โปรเจกต์ควบคุมวัตถุเสมือนจริงด้วยท่าทางมือ (Hand Gestures Virtual Objects)' ที่ใช้ Python และ Computer Vision กลุ่มเป้าหมายคือนักลงทุนสาย Tech เน้นภาพประกอบสไตล์โลกอนาคต (Futuristic 3D)",
        promptEn: "Create an 8-slide presentation pitching a 'Hand Gestures Virtual Objects' project built with Python and Computer Vision. The target audience is tech investors. Generate accompanying illustrations in a Futuristic 3D style."
      },
      { 
        purpose: "💡 ให้ AI วาดรูปประกอบสไลด์ใหม่ (Image Generation)", 
        promptTh: "[คลิกที่รูปภาพในสไลด์ แล้วใส่ Prompt]\nวาดภาพกราฟิกแบบมินิมอล 3 มิติ (Minimalist 3D render) ของกล้องถ่ายรูปสไตล์คลาสสิก คล้ายกับ Ricoh GR IV วางอยู่บนโต๊ะทำงานที่มีโค้ดโปรแกรมมิ่งอยู่บนจอคอมพิวเตอร์ด้านหลัง โทนสีมืดและเท่",
        promptEn: "A minimalist 3D render of a classic compact camera (similar to a Ricoh GR IV) resting on a sleek desk, with computer screens displaying programming code in the blurred background. Dark, moody, and cool aesthetic."
      }
    ],
    faqs: [
      { question: "ถ้าสไลด์มีภาษาไทยเยอะๆ Tome ทำได้ดีไหม?", answer: "Tome รองรับข้อความภาษาไทยได้ครับ แต่บางครั้งการจัดวาง Layout กับฟอนต์ไทยอาจจะยังไม่เป๊ะเท่า Gamma แนะนำให้เน้นใช้รูปภาพเป็นหลักและมีข้อความภาษาไทยสั้นๆ ครับ" }
    ]
  },
  {
    id: "p3",
    slug: "beautiful-ai",
    name: "Beautiful.ai",
    logoUrl: "/logos/Beautiful.ai.png", // สมมติโลโก้
    description: "AI จัดหน้าสไลด์อัจฉริยะ ลากวางยังไงก็ไม่มีวันเละ เหมาะกับองค์กรและเซลส์",
    longDescription: "หากคุณเป็นคนที่ทำสไลด์ทีไร หน้าตาก็ออกมาเละเทะ (ฟอนต์เบี้ยว กราฟล้น) Beautiful.ai คือพระเอกของคุณ! มันคือเครื่องมือทำ Presentation ที่มี 'DesignerBot' คอยคุมกฎการออกแบบ ไม่ว่าคุณจะพิมพ์ข้อความยาวแค่ไหน หรือโยนรูปเข้าไปกี่รูป AI จะทำการปรับเลย์เอาต์ ย่อฟอนต์ และจัดช่องไฟ (Spacing) ให้อัตโนมัติตามหลักการออกแบบระดับโปร (Design rules) รับประกันว่าสไลด์คุณจะดู 'สวยงามและเป็นระเบียบ' ตลอดเวลา",
    origin: "สร้างมาแก้ปัญหา (Pain point) คลาสสิกของชาวออฟฟิศ ที่มักจะเสียเวลาไปกับการ 'จัดหน้าสไลด์' มากกว่าการ 'คิดเนื้อหา'",
    category: "Presentation & Slides",
    priceModel: "Starts at $12/เดือน (ไม่มีแผนฟรีระยะยาว มีแค่ Trial 14 วัน)",
    isFree: false,
    externalUrl: "https://www.beautiful.ai",
    rating: 4.7,
    reviewCount: 9500,
    updatedAt: "Feb 2026",
    features: [
      "Smart Templates: หน้าสไลด์แบบจำกัดรูปแบบ (เช่น ใส่ได้แค่ 3 คอลัมน์) แต่ AI จะคอยขยับสมดุลให้เองเวลามีข้อมูลเพิ่ม",
      "DesignerBot: พิมพ์คำสั่งให้ AI สร้างโครงสไลด์พร้อมกราฟและตารางข้อมูลตัวอย่าง",
      "Brand Controls: ล็อกสี โลโก้ และฟอนต์บริษัทไว้ เพื่อให้ทุกคนในออฟฟิศทำสไลด์ออกมาหน้าตาเหมือนกันเป๊ะ"
    ],
    pros: [
      "หมดปัญหาเรื่องจัดหน้ากระดาษ (Formatting issues) ประหยัดเวลาทำสไลด์ไปได้หลายชั่วโมง",
      "มีเครื่องมือวาดกราฟ (Data Visualization) ในตัวที่สวยงามและใช้งานง่ายมาก นำเสนอตัวเลขแล้วดูแพง",
      "เหมาะกับการใช้งานในระดับองค์กร (Enterprise) ที่สุด"
    ],
    cons: [
      "อิสระน้อย! หากคุณเป็นคนชอบจัด Layout แปลกๆ ทับซ้อนกัน จะรู้สึกอึดอัดเพราะ AI จะล็อกโครงสร้างไว้",
      "ไม่มีแพ็กเกจฟรีถาวร ต้องจ่ายเงินรายเดือน"
    ],
    steps: [
      { title: "เลือก Template", desc: "เริ่มจากการเลือกหน้าสไลด์ที่ตรงกับข้อมูล (เช่น หน้าเปรียบเทียบ, หน้า Timeline)" },
      { title: "ใส่ข้อมูล", desc: "พิมพ์เนื้อหาหรือตัวเลขลงไป ระบบจะขยับกรอบและปรับขนาดตัวหนังสือให้พอดีอัตโนมัติ" },
      { title: "ให้ DesignerBot ช่วย", desc: "สั่ง AI ให้คิดไอเดียหน้าถัดไป หรือสรุปข้อมูลให้สั้นลง" }
    ],
    prompts: [
      { 
        purpose: "💡 สร้างสไลด์รายงาน Data (Data Analysis Report)", 
        promptTh: "[สั่ง DesignerBot]\nช่วยสร้างชุดสไลด์พรีเซนเทชัน 5 หน้า สำหรับรายงานโปรเจกต์วิเคราะห์ข้อมูล (Data Analysis Project) โดยมีหัวข้อ: วัตถุประสงค์ของการวิเคราะห์, แหล่งที่มาของข้อมูล (Dataset), กระบวนการทำความสะอาดข้อมูล (Data Cleaning), โมเดลที่ใช้พยากรณ์, และบทสรุปข้อเสนอแนะ",
        promptEn: "Create a 5-slide presentation for a Data Analysis Project report. Outline: Analysis Objectives, Dataset Origins, Data Cleaning Process, Predictive Modeling methodology, and Conclusion/Recommendations."
      },
      { 
        purpose: "💡 ให้ AI เติมข้อมูลลงในกราฟอัจฉริยะ (Smart Charts)", 
        promptTh: "[เลือกหน้าแบบ Chart แล้วป้อนข้อมูลดิบให้ AI จัดให้]\nนำเสนอยอดผู้ใช้งานแพลตฟอร์มรายไตรมาส Q1: 15k, Q2: 22k, Q3: 45k, Q4: 80k โดยให้แสดงเป็นกราฟแท่ง (Bar chart) และไฮไลต์ไตรมาสที่ 4 เป็นสีโดดเด่น",
        promptEn: "Present the quarterly platform user growth: Q1: 15k, Q2: 22k, Q3: 45k, Q4: 80k. Display this as a bar chart and apply a distinct highlight color to the Q4 bar."
      }
    ],
    faqs: [
      { question: "สไลด์สวยจริงไหม หรือก็แค่ Template?", answer: "มันเก่งกว่า Template ทั่วไปตรงที่มันเป็น 'Smart Slide' ครับ เช่น ถ้าคุณมีรูปภาพเรียงกัน 3 รูป แล้วคุณโยนรูปที่ 4 เข้าไป มันจะจัดแถวและย่อขนาดรูปทั้ง 4 ให้พอดีหน้ากระดาษทันทีโดยที่คุณไม่ต้องลากเมาส์ปรับขอบเองเลยครับ" }
    ]
  },
  {
    id: "p4",
    slug: "canva-magic-design",
    name: "Canva – Magic Design",
    logoUrl: "/logos/Canva.png", // สมมติโลโก้
    description: "แพลตฟอร์มกราฟิกมหาชนที่มี AI เข้ามาช่วยเสกสไลด์ ใช้ง่าย ของตกแต่งเยอะที่สุดในสามโลก",
    longDescription: "Canva คือโปรแกรมออกแบบที่ทุกคนคุ้นเคย แต่ล่าสุดพวกเขาได้ปล่อย 'Magic Studio' ที่ทำให้ Canva กลายเป็น AI Presentation Tool สุดโหด! ฟีเจอร์ Magic Design ให้คุณพิมพ์หัวข้อที่ต้องการ แล้ว AI จะไปค้นหา Template นับหมื่นแบบในคลังของ Canva มารวมร่างกัน ปรุงแต่งข้อความ ใส่รูปสต็อก และปรับสีให้เข้ากับแบรนด์ของคุณทันที จุดแข็งที่สุดของ Canva คือคุณมี 'อิสระ 100%' ในการเข้าไปลากวาง ตกแต่ง ใส่สติกเกอร์ (Elements) เติมเพลง หรือทำแอนิเมชันต่อได้อย่างไร้ขีดจำกัด",
    origin: "Canva เป็นยักษ์ใหญ่ด้าน Design Democratization (ทำให้ทุกคนออกแบบได้) การนำ AI เข้ามาก็เพื่อช่วยลดเวลาเริ่มต้นโปรเจกต์ (Blank canvas syndrome) ให้ผู้ใช้นั่นเอง",
    category: "Presentation & Slides",
    priceModel: "Free / Canva Pro $15 ต่อเดือน",
    isFree: true,
    externalUrl: "https://www.canva.com/magic-design",
    rating: 4.8,
    reviewCount: 92000,
    updatedAt: "Feb 2026",
    features: [
      "Magic Design for Presentations: พิมพ์สั่งสไลด์ 1 ประโยค AI จะสร้างสไลด์ 10 หน้าให้ พร้อมจัดหน้าตามาให้หลายๆ สไตล์ให้เลือก",
      "Magic Switch: แปลงขนาดงานทันที เช่น ทำสไลด์ (16:9) เสร็จ สั่ง AI แปลงเป็นรูปแบบเอกสาร (A4) หรือคลิป TikTok (9:16) ได้ในคลิกเดียว",
      "Magic Animate: สั่ง AI ใส่ลูกเล่นแอนิเมชันให้ทั้งโปรเจกต์ดูเคลื่อนไหวลื่นไหลแบบมือโปร"
    ],
    pros: [
      "เข้าถึงได้ง่ายที่สุด คุ้นมือทุกคน และมีของตกแต่ง (Assets) ให้เลือกใช้มหาศาล",
      "ทำงานร่วมกันเป็นทีม (Collaboration) ได้ดีมาก เหมือน Google Docs",
      "ฟีเจอร์แปลงงาน (Magic Switch) เป็นภาษาอื่นๆ หรือปรับขนาดแพลตฟอร์ม ช่วยประหยัดเวลาได้สุดๆ"
    ],
    cons: [
      "เนื้อหา (Text) ที่ AI เขียนให้ในสไลด์ยังค่อนข้างตื้นและสั้น สู้การแต่งเรื่องของ Gamma หรือ ChatGPT ไม่ได้ (ต้องมาพิมพ์เนื้อหาเพิ่มเองเยอะ)",
      "Template บางครั้งดูจำเจถ้าใช้งานบ่อยๆ"
    ],
    steps: [
      { title: "เลือก Magic Design", desc: "ไปที่แท็บ Presentations แล้วคลิกแถบ Magic Design (ไอคอนดาววิบวับ)" },
      { title: "ป้อนคำสั่ง", desc: "พิมพ์หัวข้อ เช่น 'สไลด์แนะนำตัวสมัครงานตำแหน่ง Data Analyst'" },
      { title: "เลือกดีไซน์", desc: "Canva จะเสนอสไลด์มาให้ 2-3 สไตล์ เลือกอันที่ชอบแล้วเข้าไปแต่งต่อได้เลย" }
    ],
    prompts: [
      { 
        purpose: "💡 สั่งทำสไลด์พอร์ตโฟลิโอสมัครงาน (Resume/Portfolio)", 
        promptTh: "[พิมพ์ในช่อง Magic Design]\nสร้างสไลด์ Presentation สำหรับพอร์ตโฟลิโอ (Portfolio) เพื่อใช้ประกอบการสัมภาษณ์งานตำแหน่ง 'Data Engineer / Data Analyst' สำหรับโครงการฝึกงาน Co-op 6 เดือน ขอโทนสีน้ำเงิน-ขาว ที่ดูเป็นมืออาชีพและน่าเชื่อถือ",
        promptEn: "Create a Portfolio presentation slide deck for a job interview applying for a 'Data Engineer / Data Analyst' 6-month Co-op internship position. Use a professional and trustworthy Blue and White color scheme."
      },
      { 
        purpose: "💡 ใช้ Magic Write (AI เขียนข้อความ) ในกล่องข้อความ", 
        promptTh: "[คลิกที่กล่องข้อความแล้วเลือก Magic Write]\nช่วยเขียนข้อความอธิบายทักษะความสามารถของฉัน (Hard Skills) โดยเน้นไปที่ประสบการณ์การใช้งาน Python, การทำ Data Pipeline, และการใช้งาน Git/GitHub ให้อ่านดูน่าประทับใจความยาว 3 บรรทัด",
        promptEn: "Write a compelling 3-line description of my Hard Skills, focusing heavily on my experience with Python programming, building Data Pipelines, and version control using Git/GitHub."
      }
    ],
    faqs: [
      { question: "ใช้ Canva Pro สายการศึกษา (Education) ฟรี เข้าถึง AI พวกนี้ได้ไหม?", answer: "ได้ครับ! บัญชี Canva for Education จะสามารถใช้งานฟีเจอร์ Magic Studio (AI) ได้แทบจะเทียบเท่าบัญชี Pro ปกติเลยครับ เป็นข้อดีสำหรับนักศึกษาและครูมากๆ" }
    ]
  },
  {
    id: "p5",
    slug: "copilot-powerpoint",
    name: "Microsoft Copilot in PowerPoint",
    logoUrl: "/logos/Power BI.png", // ใช้โลโก้ Microsoft / Power BI แทนได้
    description: "ผู้ช่วย AI ในตำนาน เปลี่ยนไฟล์ Word ยาวๆ ให้กลายเป็นสไลด์ PowerPoint อัตโนมัติ",
    longDescription: "หากองค์กรของคุณถูกผูกติดกับ Microsoft Office นี่คืออาวุธที่ขาดไม่ได้! Copilot ถูกฝังเข้าไปในโปรแกรม PowerPoint โดยตรง ความมหัศจรรย์ของมันคือการดึงข้อมูลจาก Ecosystem ของ Microsoft ทั้งหมดมาทำงานร่วมกัน ฟีเจอร์ที่ว้าวที่สุดคือการที่คุณสามารถโยนไฟล์รายงานประจำปี (Word Document) ชิ้นใหญ่เข้าไป แล้วสั่งให้ Copilot ย่อยข้อมูล สกัดประเด็นสำคัญ และสร้างหน้าสไลด์ PowerPoint ออกมาให้เป็นสิบๆ หน้า พร้อมใส่รูปภาพพื้นฐานให้เสร็จสรรพ ทำให้คุณไม่ต้องมานั่งก๊อปปี้แปะข้อความทีละหน้าอีกต่อไป",
    origin: "เกิดจากการจับมือกันของ Microsoft และ OpenAI โดยนำเอาขุมพลังของโมเดล GPT-4 ไปฝังไว้ในซอฟต์แวร์ทำงานที่คนทั่วโลกใช้กันอยู่แล้ว",
    category: "Presentation & Slides",
    priceModel: "Microsoft 365 Copilot License (ประมาณ $30/เดือน สำหรับองค์กร)",
    isFree: false,
    externalUrl: "https://www.microsoft.com/en-us/microsoft-365/copilot",
    rating: 4.5,
    reviewCount: 11000,
    updatedAt: "Feb 2026",
    features: [
      "Word to PowerPoint: ดึงเนื้อหาจากไฟล์เอกสาร Word มาแปลงเป็นโครงสร้างสไลด์และพาดหัวให้อัตโนมัติ",
      "Slide Summarization: เปิดไฟล์ PowerPoint ยาว 100 หน้าของหัวหน้า แล้วสั่งให้ AI สรุปเป็นข้อความสั้นๆ ให้อ่านในหน้าเดียว",
      "Command by Chat: สั่งงานโปรแกรมด้วยภาษาแชท เช่น 'ช่วยทำสไลด์หน้า 3 ให้เป็นแอนิเมชัน' หรือ 'ช่วยเปลี่ยนฟอนต์ทั้งงานให้เล็กลง'"
    ],
    pros: [
      "ไม่ต้องเรียนรู้โปรแกรมใหม่ ทำงานบน PowerPoint เดิมที่คุณคุ้นเคยได้เลย",
      "ปลอดภัยสำหรับองค์กร ข้อมูลบริษัทจะไม่ถูกนำไปใช้เทรน AI ต่อ (Enterprise Security)",
      "ลดเวลาทำงานถึก (Manual task) เช่น การเรียงหน้าเอกสารหรือการหารูปสต็อกพื้นฐานมาประกอบสไลด์"
    ],
    cons: [
      "สไลด์ที่ AI สร้างให้ ยังดูเป็นหน้าตาแบบ 'PowerPoint ยุคเก่า' ไม่ได้ล้ำสมัยและมีดีไซน์สวยว้าวเท่า Gamma หรือ Tome",
      "ราคาไลเซนส์ (License) รายเดือนสูงมาก และมักจะขายพ่วงให้กับบัญชีระดับองค์กร (Enterprise) เท่านั้น"
    ],
    steps: [
      { title: "เปิด PowerPoint", desc: "เปิดโปรแกรมขึ้นมา จะมีปุ่ม 'Copilot' โผล่ที่แถบเมนูด้านขวา" },
      { title: "เลือกไฟล์ตั้งต้น", desc: "พิมพ์คำสั่ง 'Create presentation from file...' แล้วแปะลิงก์เอกสาร Word ของคุณ" },
      { title: "จัดแต่ง", desc: "Copilot จะสร้างสไลด์ให้ คุณสามารถใช้ฟีเจอร์ Designer จัดหน้าตาต่อได้เลย" }
    ],
    prompts: [
      { 
        purpose: "💡 สร้างสไลด์จากเอกสาร Word ทันที (Document Transformation)", 
        promptTh: "[ใช้หน้าต่างแชทของ Copilot ใน PowerPoint]\nCreate presentation from file: [ลิงก์ไฟล์เอกสารแผนธุรกิจ.docx]\nช่วยแปลงเอกสารแผนธุรกิจร้านเบเกิลนี้ ให้เป็นพรีเซนเทชัน 10 สไลด์ โดยขอให้เน้นดึงตัวเลขต้นทุนและกลยุทธ์การตลาดมาทำเป็นไฮไลต์เด่นๆ",
        promptEn: "Create presentation from file: [Link to Business Plan.docx]. Please convert this bagel shop business plan into a 10-slide presentation. Highlight the cost structure and marketing strategies prominently."
      },
      { 
        purpose: "💡 ให้ AI เพิ่มหน้าสไลด์และจัดหน้า (Slide Addition)", 
        promptTh: "Add a slide summarizing the 'Interview Process with MFEC'. Format it as a timeline with 3 distinct steps: Application, Technical Test, and Final Interview. Add an appropriate professional image.",
        promptEn: "Add a slide summarizing the 'Interview Process with MFEC'. Format it as a timeline with 3 distinct steps: Application, Technical Test, and Final Interview. Add an appropriate professional image."
      }
    ],
    faqs: [
      { question: "ใช้งาน Copilot ในโปรแกรม Excel และ Word ด้วยได้ไหม?", answer: "ได้ครับ! หากองค์กรคุณซื้อไลเซนส์ Copilot for M365 คุณจะสามารถเรียกใช้ AI ตัวนี้ได้ในทุกโปรแกรมเลย ทั้ง Word, Excel, PowerPoint รวมถึงใช้สรุปการประชุมใน Microsoft Teams ด้วยครับ" }
    ]
  },

  // ==========================================
  // 🎙 หมวด AI สร้างเสียงพากย์และโคลนเสียง (Voice & Audio Generation) - 5 ตัวท็อป
  // ==========================================
  {
    id: "v1",
    slug: "elevenlabs",
    name: "ElevenLabs",
    logoUrl: "/logos/ElevenLabs.png", // สมมติโลโก้
    description: "AI เสียงพากย์ที่สมจริงที่สุดในโลก โคลนเสียงมนุษย์ได้เป๊ะปังระดับโปรดักชัน",
    longDescription: "ElevenLabs คือ 'มาตรฐานทองคำ' (Gold Standard) ของวงการ AI เสียงพากย์ในปัจจุบัน น้ำเสียงที่ได้มีความเป็นธรรมชาติสูงมาก มีการเว้นวรรคหายใจ มีจังหวะหนักเบา และใส่อารมณ์ลงไปในน้ำเสียงได้จนแทบแยกไม่ออกว่านี่คือ AI ฟีเจอร์ที่สร้างชื่อที่สุดคือ 'Voice Cloning' ที่คุณสามารถอัปโหลดเสียงตัวเองความยาวแค่ 1 นาทีเข้าไป ระบบก็จะโคลนเสียงคุณออกมาให้พิมพ์ข้อความสั่งพูดได้ทันที ปัจจุบันรองรับภาษาไทยได้ดีเยี่ยม เหมาะสุดๆ สำหรับทำช่อง YouTube แบบ Faceless, พอดแคสต์, หรือทำหนังสือเสียง (Audiobook)",
    origin: "ก่อตั้งโดยอดีตวิศวกร Machine Learning จาก Google และ Palantir โดยมุ่งเน้นการแก้ปัญหาเสียง AI แบบเก่าที่ฟังดูแข็งเหมือนหุ่นยนต์ Siri/Google Translate",
    category: "Voice & Audio",
    priceModel: "Free (ให้เครดิตจำกัด) / Creator $5 ต่อเดือน",
    isFree: true,
    externalUrl: "https://elevenlabs.io",
    rating: 4.9,
    reviewCount: 38500,
    updatedAt: "Feb 2026",
    features: [
      "Text-to-Speech (TTS): แปลงข้อความเป็นเสียงด้วยโมเดล Multilingual v2 ที่รองรับกว่า 29 ภาษา (รวมภาษาไทย)",
      "Instant Voice Cloning: โคลนเสียงใครก็ได้โดยใช้ออดิโอตัวอย่างแค่ 1-2 นาที (ต้องยืนยันลิขสิทธิ์เสียงด้วย)",
      "Speech-to-Speech: อัดเสียงพูดของคุณเข้าไป แล้วให้ AI เปลี่ยนเป็นเสียงคนอื่น แต่ยังคงจังหวะและอารมณ์ดั้งเดิมของคุณไว้ 100%"
    ],
    pros: [
      "คุณภาพความสมจริงของเสียงชนะขาดคู่แข่งทุกตัวในตลาด",
      "ภาษาไทยพัฒนาขึ้นมาก เสียงชัดเจน ควบกล้ำ ร.เรือ ล.ลิง ได้ค่อนข้างเป็นธรรมชาติ",
      "มีคลังเสียง (Voice Library) ที่ผู้ใช้คนอื่นทำมาแชร์ให้เลือกใช้ฟรีๆ นับหมื่นเสียง"
    ],
    cons: [
      "เครดิต (จำนวนตัวอักษร) ในแพ็กเกจฟรีหมดค่อนข้างไว หากทำคลิปยาวๆ ต้องสมัครรายเดือน",
      "บางครั้งเสียงอาจจะใส่อารมณ์เกินจริงไปนิด (เช่น จู่ๆ ก็ทำเสียงกระซิบ) ต้องใช้เครื่องมือปรับจูน (Stability & Clarity) ช่วย"
    ],
    steps: [
      { title: "เลือกเสียงพากย์", desc: "เข้าไปที่ Speech Synthesis เลือกเสียงจาก Library หรือโคลนเสียงตัวเอง" },
      { title: "วางสคริปต์", desc: "พิมพ์หรือวางข้อความที่ต้องการให้ AI พูด (แนะนำให้เว้นบรรทัดเพื่อให้ AI เว้นจังหวะหายใจ)" },
      { title: "ปรับแต่งและดาวน์โหลด", desc: "ปรับค่า Stability แล้วกด Generate เมื่อพอใจก็ดาวน์โหลดเป็นไฟล์ MP3 ไปตัดต่อได้เลย" }
    ],
    prompts: [
      { 
        purpose: "💡 สคริปต์สำหรับช่อง YouTube (Faceless Channel)", 
        promptTh: "[การเว้นวรรคและเครื่องหมายวรรคตอน มีผลต่อจังหวะหายใจของ ElevenLabs]\nคุณเคยสงสัยไหมครับ... ว่าทำไมมหาเศรษฐีระดับโลก ถึงชอบตื่นกันตอนตี 4? [เว้นบรรทัด]\nวันนี้! เราจะพาไปเจาะลึก 'ความลับของเวลา' ที่คนรวยเก็บซ่อนไว้... ถ้าพร้อมแล้ว กดซับสไครบ์ แล้วไปดูกันเลยครับ!",
        promptEn: "Have you ever wondered... why the world's billionaires always wake up at 4 AM? \n\nToday! We are going to uncover the 'Secrets of Time' that the rich have been hiding from you. If you're ready, hit that subscribe button, and let's dive right in!"
      },
      { 
        purpose: "💡 สคริปต์ทำโฆษณาสินค้าแนวตื่นเต้น (Commercial Audio)", 
        promptTh: "นี่คือโอกาสสุดท้ายของคุณ!! โปรโมชั่นลดล้างสต็อก 70% กำลังจะหมดเวลาในอีก... 3... 2... 1... นาที! อย่ารอช้า! รีบคลิกลิงก์ด้านล่างเพื่อรับสิทธิ์ด่วน ก่อนสินค้าจะหมดไปตลอดกาล!",
        promptEn: "This is your absolute FINAL chance!! Our massive 70% clearance sale ends in... 3... 2... 1... minutes! Don't wait! Click the link below to claim your offer right now, before it's gone forever!"
      }
    ],
    faqs: [
      { question: "เอาเสียงดารามาโคลนได้ไหม?", answer: "ตามกฎหมายและข้อตกลงการใช้งาน (ToS) ของ ElevenLabs ห้ามโคลนเสียงบุคคลอื่นโดยไม่ได้รับอนุญาตครับ หากระบบตรวจพบ บัญชีจะถูกระงับทันทีครับ แนะนำให้ใช้เสียงใน Voice Library ที่เขาอนุญาตเชิงพาณิชย์แล้วดีกว่าครับ" }
    ]
  },
  {
    id: "v2",
    slug: "openai-tts",
    name: "OpenAI – Text-to-Speech (TTS)",
    logoUrl: "/logos/OpenAI – ChatGPT.png",
    description: "ขุมพลังเสียงเบื้องหลัง ChatGPT ไหลลื่น เป็นธรรมชาติ เหมาะสำหรับนักพัฒนาแอป",
    longDescription: "ถ้าคุณเคยคุยโต้ตอบด้วยเสียง (Voice Mode) กับ ChatGPT แล้วรู้สึกทึ่งในความฉลาดและน้ำเสียงที่เป็นมนุษย์... นี่คือเทคโนโลยีเบื้องหลังสิ่งนั้นครับ! OpenAI TTS (Voice Engine) เป็นโมเดลเสียงแบบ Advanced Neural Network ที่ไม่ได้เน้นหน้าเว็บให้คนทั่วไปมาคลิกเล่น แต่เกิดมาเพื่อ 'นักพัฒนา (Developers)' ที่ต้องการเขียนโค้ดเรียก API เอาเสียงอัจฉริยะนี้ไปฝังในแอปพลิเคชันของตัวเอง เช่น ทำระบบ Call Center อัจฉริยะ, แอปอ่านหนังสือให้คนตาบอด, หรือผู้ช่วย AI ส่วนตัว",
    origin: "สร้างโดย OpenAI เพื่อเติมเต็มระบบนิเวศ (Ecosystem) ของตนเองให้ครบทั้ง Text, Image และ Audio ทำให้สามารถสร้าง AI Agent ที่รับรู้และโต้ตอบได้เหมือนมนุษย์ 100%",
    category: "Voice & Audio",
    priceModel: "Pay-as-you-go (คิดเงินตามจำนวน 1,000 ตัวอักษรที่เรียก API)",
    isFree: false,
    externalUrl: "https://platform.openai.com/docs/guides/text-to-speech",
    rating: 4.8,
    reviewCount: 14200,
    updatedAt: "Feb 2026",
    features: [
      "API Integration: ปลั๊กอินเข้ากับซอฟต์แวร์ผ่าน API ได้ง่ายดายและรวดเร็วมาก (Low Latency)",
      "Real-time Audio Streaming: สามารถส่งเสียงสตรีมมิ่งกลับมาได้ทันทีที่ AI พิมพ์ข้อความเสร็จ (เหมาะทำแชทบอทเสียงโต้ตอบ)",
      "Optimized Voices: มีเสียงพื้นฐานคุณภาพสูงให้เลือก 6 เสียง (เช่น Alloy, Echo, Fable) ที่ถูกปรับจูนมาเพื่อการสนทนาโดยเฉพาะ"
    ],
    pros: [
      "เสียงมีความเป็นมนุษย์ใน 'สไตล์การสนทนา' (Conversational) สูงมาก ฟังดูไม่เหมือนการอ่านสคริปต์โฆษณา",
      "ความเร็วในการประมวลผลผ่าน API (Latency) เร็วมากจนสามารถทำแอปโต้ตอบแบบ Real-time ได้",
      "ราคาถูกมากเมื่อเทียบกับการเรียกใช้ API ของผู้ให้บริการเจ้าอื่น"
    ],
    cons: [
      "ไม่มีหน้าต่าง User Interface (UI) แบบเว็บแอปให้คนทั่วไปเข้าไปพิมพ์ข้อความแล้วกดโหลดง่ายๆ ต้องใช้งานผ่าน API หรือแอป Third-party",
      "มีเสียงให้เลือกจำกัดแค่ 6 เสียง ไม่สามารถโคลนเสียงตัวเองได้ (OpenAI ปิดฟีเจอร์นี้ไว้เพื่อความปลอดภัย)"
    ],
    steps: [
      { title: "สร้าง API Key", desc: "เข้าไปที่ OpenAI Platform แล้วกดสร้าง API Key สำหรับโปรเจกต์ของคุณ" },
      { title: "เขียนโค้ดเรียก API", desc: "ใช้ Python หรือ Node.js ส่งข้อความและกำหนดชื่อเสียง (เช่น voice='nova') ไปที่ Endpoint ของ OpenAI" },
      { title: "รับไฟล์เสียง", desc: "ระบบจะคืนค่ากลับมาเป็นไฟล์เสียง (เช่น .mp3) ให้นำไปเล่นในแอปพลิเคชันของคุณได้เลย" }
    ],
    prompts: [
      { 
        purpose: "💡 เขียนโค้ด Python เพื่อเรียกใช้ OpenAI TTS API", 
        promptTh: "ช่วยเขียนโค้ด Python โดยใช้ไลบรารี `openai` เวอร์ชันล่าสุด เพื่อเรียกใช้บริการ Text-to-Speech (TTS) โดยรับข้อความภาษาไทยว่า 'สวัสดีครับ ยินดีต้อนรับสู่บริการผู้ช่วยอัจฉริยะ' ใช้โมเดล `tts-1` เสียง `alloy` และบันทึกผลลัพธ์เป็นไฟล์ `output.mp3`",
        promptEn: "Write a Python script using the latest `openai` library to call the Text-to-Speech (TTS) API. The input text should be 'Welcome to our intelligent assistant service'. Use the `tts-1` model with the `alloy` voice, and save the audio output as `output.mp3`."
      },
      { 
        purpose: "💡 สคริปต์โต้ตอบสำหรับ AI Call Center", 
        promptTh: "[ใช้ในระบบ Prompt ฝั่งหลังบ้าน]\nสวัสดีค่ะ ศูนย์บริการลูกค้า บริษัท ไอทีโซลูชัน ยินดีให้บริการค่ะ ไม่ทราบว่าวันนี้มีอะไรให้ทางเราช่วยเหลือคะ? ท่านสามารถแจ้งหมายเลขคำสั่งซื้อ หรือเล่าปัญหาที่พบได้เลยค่ะ",
        promptEn: "Hello! Welcome to IT Solution Customer Service. How may I assist you today? You can provide your order number or briefly describe the issue you are facing."
      }
    ],
    faqs: [
      { question: "โมเดล tts-1 กับ tts-1-hd ต่างกันยังไง?", answer: "tts-1 ออกแบบมาให้ทำงาน 'เร็วที่สุด' เหมาะสำหรับแอปพลิเคชันโต้ตอบสดๆ ส่วน tts-1-hd จะให้ 'คุณภาพเสียงที่ชัดเจนและสมูธกว่า' แลกมากับเวลาประมวลผลที่นานขึ้นเล็กน้อย เหมาะกับการเจนไฟล์เสียงเก็บไว้ครับ" }
    ]
  },
  {
    id: "v3",
    slug: "murf-ai",
    name: "Murf AI",
    logoUrl: "/logos/Murf AI.png",
    description: "สตูดิโอเสียงพากย์ AI สไตล์มืออาชีพ มีเครื่องมือปรับจังหวะและเน้นคำแบบละเอียด",
    longDescription: "หาก ElevenLabs คือดาราฮอลลีวูด Murf AI ก็คือ 'โฆษกองค์กรและนักพากย์โฆษณา' มืออาชีพ! Murf ถูกออกแบบมาเพื่อตอบโจทย์งานฝั่ง Business โดยเฉพาะ เช่น การทำสื่อการสอน (E-learning), วิดีโอพรีเซนต์องค์กร, หรือเสียงบรรยายสินค้า จุดเด่นที่สุดของ Murf คือหน้าต่าง Editor ที่ทรงพลัง คุณสามารถลากวางไฟล์วิดีโอเข้าไปเทียบกับเสียงพากย์ได้เลย และสามารถปรับแต่งได้ลึกซึ้งถึงระดับ 'คำ' (เช่น สั่งให้พูดคำนี้ช้าลง สั่งเน้นเสียงหนักที่คำนี้ หรือเปลี่ยนระดับความสูงต่ำของเสียง - Pitch) เหมือนคุณเป็นผู้กำกับที่กำลังสั่งนักพากย์ในสตูดิโอ",
    origin: "สร้างมาเพื่อเป็นแพลตฟอร์ม Voice-over แบบ All-in-one ไม่ใช่แค่เครื่องมือแปลงข้อความ แต่ต้องเป็นสตูดิโอตัดต่อเสียงแบบเต็มรูปแบบบนเบราว์เซอร์",
    category: "Voice & Audio",
    priceModel: "Free (ให้ลองฟังแต่ห้ามโหลด) / Pro $26 ต่อเดือน",
    isFree: true,
    externalUrl: "https://murf.ai",
    rating: 4.7,
    reviewCount: 9100,
    updatedAt: "Feb 2026",
    features: [
      "Granular Voice Control: ควบคุมระดับเสียง (Pitch), ความเร็ว (Speed), และการเน้นคำ (Emphasis) ได้แบบเจาะจงรายคำ",
      "Video & Audio Sync: อัปโหลดไฟล์วิดีโอหรือภาพนิ่งเข้าไปในระบบ เพื่อกะจังหวะเสียงพากย์ให้ตรงกับภาพ (Time-sync) ได้ในเว็บเดียว",
      "Voice Changer: อัดเสียงธรรมดาๆ (เช่น เสียงอัดจากไมค์มือถือที่มีเสียงรบกวน) แล้วให้ AI แปลงเป็นเสียงผู้ประกาศข่าวคุณภาพสตูดิโอ"
    ],
    pros: [
      "มีเสียงโทน 'มืออาชีพและเป็นทางการ' ให้เลือกเยอะมาก เหมาะกับงาน Corporate สุดๆ",
      "หน้าต่าง Timeline ใช้งานง่าย คล้ายโปรแกรมตัดต่อวิดีโอ ทำให้กะจังหวะการเว้นวรรคได้แม่นยำ",
      "มีไลบรารีเพลงประกอบพื้นหลัง (Background Music) แบบถูกลิขสิทธิ์ให้เลือกใส่พร้อมเสียงพากย์ได้เลย"
    ],
    cons: [
      "เสียงภาษาไทยมีให้เลือกน้อยกว่าภาษาอังกฤษ และความสมจริงในการออกเสียงภาษาไทยยังแอบสู้ ElevenLabs ไม่ได้",
      "เวอร์ชันฟรีไม่สามารถดาวน์โหลดไฟล์เสียงออกมาใช้งานได้ ทำได้แค่ทดลองฟังเท่านั้น"
    ],
    steps: [
      { title: "เลือกโปรไฟล์เสียง", desc: "เข้าไปใน Studio เลือกหมวดหมู่เสียง เช่น Educator, Podcaster, หรือ Marketer" },
      { title: "ปรับแต่งสคริปต์", desc: "วางสคริปต์ ใช้เมาส์ไฮไลต์คำที่ต้องการ 'เน้น (Emphasis)' หรือสั่งให้หยุดเว้นวรรค (Pause 0.5s)" },
      { title: "ซิงก์กับภาพและโหลด", desc: "ลากภาพหรือวิดีโอมาวางเทียบเพื่อเช็กจังหวะ แล้วกด Export โปรเจกต์" }
    ],
    prompts: [
      { 
        purpose: "💡 สคริปต์สื่อการสอนองค์กร (E-Learning / Onboarding)", 
        promptTh: "[ใช้ฟีเจอร์ Emphasis เน้นคำสำคัญ]\nสวัสดีครับพนักงานใหม่ทุกท่าน! ในบทเรียนที่ 2 นี้ เราจะมาเรียนรู้เกี่ยวกับ *นโยบายความปลอดภัยทางไซเบอร์* (เน้นเสียง) ซึ่งถือเป็นสิ่งที่มีความสำคัญสูงสุด [เว้นวรรค 1 วิ] กรุณากดปุ่ม 'ถัดไป' เพื่อเริ่มทำแบบทดสอบครับ",
        promptEn: "Hello and welcome to all new employees! In Module 2, we will be covering our *Cybersecurity Policies* (Emphasis), which are of the utmost importance. [Pause 1s] Please click 'Next' to begin the assessment."
      },
      { 
        purpose: "💡 สคริปต์พรีเซนเทชันเปิดตัวสินค้า (Product Launch)", 
        promptTh: "โลกเปลี่ยนไปแล้ว... และวิธีการทำงานของคุณก็ต้องเปลี่ยนตาม ขอแนะนำ 'EngMaster 2.0' (เน้นคำ) แพลตฟอร์มที่จะพลิกโฉมการเรียนภาษาของคุณให้ง่ายขึ้น เร็วขึ้น และสนุกกว่าที่เคยมีมา",
        promptEn: "The world has changed... and the way you work needs to change with it. Introducing *EngMaster 2.0* (Emphasis) – the platform that will revolutionize your language learning experience. Making it easier, faster, and more fun than ever before."
      }
    ],
    faqs: [
      { question: "ถ้ามีสคริปต์ยาว 10 หน้ากระดาษ Murf รับมือไหวไหม?", answer: "ไหวสบายมากครับ Murf มีฟีเจอร์แยกบล็อกข้อความ (Text Blocks) ทำให้คุณสามารถจัดสคริปต์ยาวๆ และเปลี่ยนเสียงพากย์สลับไปมา (เช่น คนที่ 1 พูดสลับคนที่ 2) ในโปรเจกต์เดียวกันได้ครับ" }
    ]
  },
  {
    id: "v4",
    slug: "synthesia-voice",
    name: "Synthesia (Avatar + Voiceover)",
    logoUrl: "/logos/Synthesia.png",
    description: "AI พรีเซนเตอร์ครบจบในเว็บเดียว เสียงพากย์เป๊ะมาพร้อมคนพูดขยับปากสมจริง",
    longDescription: "แม้จะถูกจัดอยู่ในหมวดวิดีโอ แต่ในแง่ของ 'งานเสียงพากย์และเสียงบรรยาย' Synthesia คือเครื่องมือที่เหนือชั้นไปอีกระดับ! เพราะนี่ไม่ใช่แค่การเจนไฟล์เสียง MP3 ทื่อๆ แต่มันเสก 'AI Avatar (คนเสมือนจริง)' มายืนขยับปากพูดตามสคริปต์ (Lip-sync) ด้วยจังหวะและภาษากายที่สอดคล้องกับเสียงแบบ 100% รองรับภาษามากกว่า 120 ภาษา (ภาษาไทยชัดมากและควบกล้ำดี) เหมาะสุดๆ สำหรับคนที่ต้องการทำวิดีโอพรีเซนต์งาน คอร์สเรียนออนไลน์ หรือคลิปเทรนนิ่ง โดยไม่ต้องจ้างนางแบบหรือเข้าสตูดิโออัดเสียงเลย",
    origin: "ก่อตั้งโดยนักวิจัยด้าน Computer Vision ถือเป็นผู้บุกเบิกเทคโนโลยี AI Video Generation สำหรับกลุ่มองค์กร (B2B) ช่วยบริษัทลดต้นทุนงานโปรดักชันลงได้มหาศาล",
    category: "Voice & Audio",
    priceModel: "Starts at $22/เดือน",
    isFree: false,
    externalUrl: "https://www.synthesia.io",
    rating: 4.8,
    reviewCount: 6500,
    updatedAt: "Feb 2026",
    features: [
      "Text-to-Video & Voice: พิมพ์ข้อความ แล้วได้ทั้งเสียงพากย์และวิดีโอคนพูดขยับปากเนียนๆ ทันที",
      "Multilingual Voiceovers: เสียงพากย์ภาษาไทยและภาษาต่างประเทศมีความชัดเจน สำเนียงเป๊ะ เหมือนเจ้าของภาษา",
      "Voice Cloning (Custom Voice): อัดเสียงตัวเองเข้าระบบ เพื่อใช้เสียงคุณเองพากย์ทับร่าง Avatar"
    ],
    pros: [
      "ได้ชิ้นงานที่สมบูรณ์แบบ (ภาพ+เสียง) เร็วกว่าการไปจ้างนักพากย์แล้วเอามาตัดต่อวิดีโอเอง",
      "แก้ไขงานง่ายมาก ถ้าพูดผิด หรือต้องการอัปเดตข้อมูล ก็แค่เข้าไปแก้ Text แล้วกดเรนเดอร์วิดีโอใหม่ ไม่ต้องถ่ายทำใหม่",
      "มีเทมเพลตจัดสไลด์ พิมพ์ข้อความประกอบฉากหลังได้เหมือนทำ PowerPoint"
    ],
    cons: [
      "ไม่สามารถ Export ออกมาเฉพาะไฟล์เสียง (.mp3) เดี่ยวๆ ได้ (ระบบบังคับเรนเดอร์เป็นวิดีโอ MP4)",
      "แววตาและอารมณ์ของ Avatar บางครั้งยังดูเป็นหุ่นยนต์นิดๆ หากต้องใช้สคริปต์ที่แสดงอารมณ์ดราม่าหนักๆ"
    ],
    steps: [
      { title: "เลือก Avatar และภาษา", desc: "เลือกพรีเซนเตอร์ที่คุณชอบ และกำหนดภาษาเป็น Thai (หรือภาษาอื่นๆ)" },
      { title: "วางสคริปต์", desc: "พิมพ์ข้อความในช่อง Script สามารถปรับความเร็ว หรือแทรกการหยุดเว้นวรรคได้" },
      { title: "ตกแต่งฉากและเรนเดอร์", desc: "ใส่ข้อความบนหน้าจอ ใส่โลโก้บริษัท แล้วกด Generate Video รอประมาณ 5 นาที" }
    ],
    prompts: [
      { 
        purpose: "💡 สคริปต์วิดีโอต้อนรับพนักงาน (HR Onboarding)", 
        promptTh: "[การพิมพ์สคริปต์ ควรสะกดคำอ่านตามจริงเพื่อให้ AI ออกเสียงชัดเจน]\nสวัสดีค่ะ ยินดีต้อนรับเข้าสู่บริษัทของเราอย่างเป็นทางการนะคะ! ในคลิปวิดีโอนี้ เราจะขอแนะนำให้ทุกท่านรู้จักกับ สวัสดิการพนักงาน และ กฎระเบียบเบื้องต้นในการทำงานค่ะ [เว้นวรรค] หากมีข้อสงสัย สามารถติดต่อฝ่ายบุคคลได้ตลอดเวลาเลยนะคะ",
        promptEn: "Hello, and a very warm welcome to our company! In this video, we will walk you through our employee benefits program and outline our basic workplace policies. [Pause] If you have any questions, please feel free to reach out to the HR department at any time."
      },
      { 
        purpose: "💡 สคริปต์สาธิตการใช้ซอฟต์แวร์ (Software Demo)", 
        promptTh: "ขั้นตอนต่อไป ให้คลิกที่เมนู 'การตั้งค่า' ที่มุมขวาบนของหน้าจอนะคะ... จากนั้นเลือกเมนูย่อย 'จัดการบัญชีผู้ใช้' ระบบจะพาคุณเข้าสู่หน้าจอสำหรับเพิ่มหรือลบรายชื่อพนักงานในทีมค่ะ",
        promptEn: "Next, please click on the 'Settings' icon located in the top right corner of your screen. Then, select 'User Management' from the dropdown menu. This will take you to the dashboard where you can add or remove team members."
      }
    ],
    faqs: [
      { question: "ถ้าฉันอยากพิมพ์ภาษาอังกฤษ แต่ให้ Avatar พูดสำเนียงไทยๆ ทำได้ไหม?", answer: "ทำได้ครับ Synthesia มีฟีเจอร์ Localized Accents คุณสามารถพิมพ์ข้อความภาษาอังกฤษ แต่เลือกเสียงพากย์เป็นคนไทย ระบบจะอ่านภาษาอังกฤษด้วยสำเนียงแบบคนไทย (Thai Accent) ให้ครับ" }
    ]
  },
  {
    id: "v5",
    slug: "resemble-ai",
    name: "Resemble AI",
    logoUrl: "/logos/Murf AI.png", // ใช้โลโก้ชั่วคราว หรือเว้นว่างหากไม่มี
    description: "ระบบโคลนเสียง Real-time สาย Tech ขุมพลังสร้างบทสนทนา NPC ในเกมและแอป",
    longDescription: "หากคุณเป็นนักพัฒนาเกม (Game Developer) หรือกำลังทำแอปที่ต้องการให้ตัวละครพูดโต้ตอบแบบ Real-time... Resemble AI คือคำตอบสุดท้าย! นี่คือแพลตฟอร์ม Voice Cloning ระดับองค์กรที่เก่งกาจด้านการทำงานร่วมกับ Code (API First) ฟีเจอร์ที่ว้าวที่สุดคือ 'Resemble Fill' สมมติว่าคุณมีไฟล์เสียงพากย์เก่าอยู่ แล้วนักพากย์พูดผิดไป 1 คำ คุณสามารถลากไฟล์นั้นลงไป แล้วพิมพ์ 'แก้คำผิด' ด้วย Text AI จะเนียนปะติดปะต่อเสียงใหม่ทับเสียงเก่าด้วยน้ำเสียงเดิมเป๊ะ โดยไม่ต้องเรียกนักพากย์มาเข้าห้องอัดใหม่!",
    origin: "เน้นเจาะตลาดฝั่ง Gaming, Animation และ Entertainment Studio ขนาดใหญ่ ที่ต้องการนำเสียงนักพากย์มืออาชีพไปสร้างเป็นโมเดล (Voice IP) เพื่อต่อยอดในโปรเจกต์มหาศาล",
    category: "Voice & Audio",
    priceModel: "Pay-as-you-go (คิดตามวินาทีเสียง) / Creator $29 ต่อเดือน",
    isFree: false,
    externalUrl: "https://www.resemble.ai",
    rating: 4.6,
    reviewCount: 3200,
    updatedAt: "Feb 2026",
    features: [
      "Real-time Voice Cloning: API ที่สามารถเจนเสียงโคลนนิ่งออกมาได้ในระดับมิลลิวินาที (เหมาะกับการโต้ตอบในเกม)",
      "Resemble Fill: ฟีเจอร์ตัดต่อเสียงด้วยการพิมพ์ (Inpainting Audio) เปลี่ยนคำผิดในไฟล์เสียงเก่าได้แนบเนียน",
      "Emotion Control: รองรับการปรับเปลี่ยนอารมณ์เสียงแบบเจาะจง (เช่น ดีใจ, โกรธ, เศร้า, กระซิบ) ในประโยคเดียวกัน"
    ],
    pros: [
      "ความสามารถในการทำงานข้ามภาษา (Cross-lingual) โคลนเสียงคุณที่พูดภาษาไทย แล้วสั่งให้พูดภาษาฝรั่งเศสสำเนียงเป๊ะได้",
      "มีเครื่องมือสำหรับ Developer (API/SDK) ที่เชื่อมต่อกับเอนจินเกมอย่าง Unity และ Unreal Engine ได้อย่างยอดเยี่ยม",
      "มีความปลอดภัยสูง (Deepfake Detection) ป้องกันการนำเสียงไปใช้ในทางที่ผิด"
    ],
    cons: [
      "การใช้งานบนหน้าเว็บ (Web UI) อาจจะไม่ User-friendly สำหรับคนทั่วไปเท่า ElevenLabs หรือ Murf",
      "ต้องใช้ชุดข้อมูล (Data) เสียงตัวอย่างที่มีความคมชัดสูงมาก เพื่อให้ได้เสียงโคลนนิ่งที่สมบูรณ์แบบ"
    ],
    steps: [
      { title: "บันทึกเสียงต้นฉบับ", desc: "อัดเสียงตัวคุณเองหรือนักพากย์อ่านสคริปต์ที่ระบบเตรียมไว้ (ประมาณ 50 ประโยค) เพื่อสร้าง Custom Voice" },
      { title: "เขียนโค้ดเรียกใช้", desc: "นำ API Key ไปฝังในโปรเจกต์เกมของคุณ เพื่อสร้างบทสนทนาแบบไดนามิก" },
      { title: "ควบคุมอารมณ์", desc: "ใช้ SSML tags ในโค้ด เพื่อสั่งให้ตัวละครทำเสียงตะโกน หรือเสียงกระซิบเวลาอยู่ในฉากซ่อนตัว" }
    ],
    prompts: [
      { 
        purpose: "💡 สคริปต์สร้างบทสนทนา NPC ในเกม (Gaming Dialogue)", 
        promptTh: "[ใช้เทคนิคการกำหนดอารมณ์ในระบบ Resemble]\n[อารมณ์: หวาดกลัว] ระวังตัวด้วย! ข้าได้ยินเสียงฝีเท้าของพวกมันกำลังใกล้เข้ามา... [อารมณ์: ตะโกน] รีบหนีไปทางประตูหลัง เร็วเข้า!!",
        promptEn: "[Emotion: Fearful] Watch out! I can hear their footsteps approaching... [Emotion: Shouting] Run towards the back door, HURRY!!"
      },
      { 
        purpose: "💡 สคริปต์โฆษณาแบบ Dynamic (เปลี่ยนชื่อลูกค้าตาม Data)", 
        promptTh: "[ทำงานผ่าน API โดยใส่ตัวแปร Name]\nสวัสดีคุณ {{Customer_Name}}! พิเศษสุดสำหรับเดือนเกิดของคุณ เราขอมอบส่วนลด 50% สำหรับการสั่งซื้อเครื่องดื่มสาขาใกล้บ้านคุณ!",
        promptEn: "Hello {{Customer_Name}}! As a special treat for your birthday month, we are offering you an exclusive 50% discount on your next drink order at your nearest store!"
      }
    ],
    faqs: [
      { question: "การนำไปใช้ในเกม มันทำงานยังไง?", answer: "แทนที่คุณจะต้องจ้างนักพากย์มาอัดเสียงบทพูด NPC นับหมื่นประโยค คุณอัดเสียงนักพากย์แค่เป็นต้นแบบ แล้วใช้โค้ดรันให้ Resemble AI เจนเสียงพูดทั้งหมดในเกมออกมาแบบอัตโนมัติ ช่วยลดขนาดไฟล์เกมและประหยัดงบได้มหาศาลครับ" }
    ]
  },


];
