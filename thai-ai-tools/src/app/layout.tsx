import type { Metadata } from "next";
import { Prompt, Inter } from "next/font/google";
import "../globals.css";
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
      {/* แก้ไขบรรทัดนี้: เปลี่ยน bg-white เป็น bg-light และเพิ่ม selection color */}
      <body className="font-sans bg-light text-text antialiased selection:bg-primary-100 selection:text-primary-900">
        <Navbar />
        <main className="min-h-screen">
            {children}
        </main>
        {/* ปรับ Footer ให้ใช้สีจาก Theme */}
        <footer className="bg-surface border-t border-border py-8 mt-12 text-center text-sm text-muted">
          <p>© 2024 Thai AI Tools. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}