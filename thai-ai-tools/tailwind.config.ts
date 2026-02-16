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
        primary: {
          50: '#eff6ff', 
          100: '#dbeafe',
          500: '#3b82f6', 
          600: '#2563eb', 
          700: '#1d4ed8', 
          900: '#1e3a8a', 
        },
        // ปรับชุดสี Neutral ให้เข้มขึ้น เพื่อให้อ่านง่าย (High Contrast)
        dark: '#020617',    // Slate-950 (สำหรับหัวข้อใหญ่ - ดำเกือบสนิท)
        text: '#1e293b',    // Slate-800 (สำหรับเนื้อหาทั่วไป - เข้มมาก อ่านชัด)
        muted: '#475569',   // Slate-600 (สำหรับคำอธิบายรอง - ไม่จางแล้ว)
        light: '#ffffff',   // White (พื้นหลังขาวจั๊วะ ตัดกับตัวหนังสือ)
        border: '#cbd5e1',  // Slate-300 (เส้นขอบให้เห็นชัดขึ้นนิดนึง)
      },
      fontFamily: {
        sans: ['var(--font-prompt)', 'var(--font-inter)', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.02)',
        'card': '0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -2px rgba(0, 0, 0, 0.04)',
      }
    },
  },
  plugins: [],
};
export default config;