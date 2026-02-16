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
          50: '#f5f3ff', // ม่วงอ่อนมาก (พื้นหลังบางส่วน)
          100: '#ede9fe',
          500: '#8b5cf6', // ม่วงหลัก (ปุ่ม/Icon)
          600: '#7c3aed',
          900: '#4c1d95',
        },
        dark: '#0f172a', // สีดำอมน้ำเงินสำหรับ Text
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'], // ควรใช้ Google Font เช่น Prompt หรือ Inter
      },
    },
  },
  plugins: [],
};
export default config;