import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // ชุดสีหลัก: น้ำเงิน Deep Blue (เหมือน Stripe / Facebook ใหม่)
        primary: {
          50: '#eff6ff', 
          100: '#dbeafe',
          500: '#3b82f6', // สีฟ้าสด (Icon / Focus)
          600: '#2563eb', // สีน้ำเงินหลัก (Button / Links)
          700: '#1d4ed8', // สีน้ำเงินเข้ม (Hover)
          900: '#1e3a8a', // สีน้ำเงินลึก (Hero Background)
        },
        // ชุดสีโทนกลาง (Neutral): ใช้ Slate เพื่อความทันสมัย (อมน้ำเงินนิดๆ)
        dark: '#020617',    // Slate-950 (หัวข้อใหญ่ - ดำเกือบสนิท)
        text: '#1e293b',    // Slate-800 (เนื้อหาทั่วไป - เข้มมาก อ่านชัดแน่นอน)
        muted: '#475569',   // Slate-600 (คำอธิบายรอง - ไม่จางจนมองไม่เห็น)
        light: '#ffffff',   // White (พื้นหลัง)
        border: '#cbd5e1',  // Slate-300 (เส้นขอบชัดเจน)
        surface: '#f8fafc', // Slate-50 (พื้นหลังส่วนรอง)
      },
      fontFamily: {
        sans: ['var(--font-prompt)', 'var(--font-inter)', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.02)',
        'card': '0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -2px rgba(0, 0, 0, 0.04)',
        'glow': '0 0 20px rgba(37, 99, 235, 0.25)', // เงาสีฟ้าฟุ้งๆ รอบปุ่ม
      }
    },
  },
  plugins: [],
};
export default config;