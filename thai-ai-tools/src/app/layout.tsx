// ไฟล์: src/app/layout.tsx

import type { Metadata } from "next";
import { Prompt, Inter } from "next/font/google";
import "../globals.css"; // <--- แก้เป็น ../globals.css แล้ว
import Navbar from "@/components/layout/Navbar";

const prompt = Prompt({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['thai', 'latin'],
  variable: '--font-prompt',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Thai AI Tools - รวม AI ฟรีที่คนไทยต้องรู้",
  description: "แหล่งรวมเครื่องมือ AI ภาษาไทย รีวิวชัดเจน ใช้งานง่าย ช่วยทำงานและเรียน",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th" className={`${prompt.variable} ${inter.variable}`}>
      <body className="font-sans bg-white text-dark antialiased">
        <Navbar />
        <main className="min-h-screen">
            {children}
        </main>
        <footer className="bg-gray-50 border-t border-gray-200 py-8 mt-12 text-center text-sm text-gray-500">
          <p>© 2024 Thai AI Tools. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}