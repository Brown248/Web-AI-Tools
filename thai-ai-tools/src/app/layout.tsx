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
  title: {
    template: '%s | Thai AI Tools',
    default: 'Thai AI Tools - รวม AI ฟรีที่คนไทยต้องรู้ วิธีใช้งานง่าย',
  },
  description: "แหล่งรวมรีวิว AI Tools ภาษาไทย คัดเฉพาะตัวฟรีที่ใช้งานได้จริง สอนวิธีใช้ Step-by-step สำหรับนักเรียน คนทำงาน และแม่ค้าออนไลน์",
  keywords: ["AI ฟรี", "สอนใช้ AI", "ChatGPT ภาษาไทย", "รวม AI", "เครื่องมือ AI"],
  openGraph: {
    title: 'Thai AI Tools - รวม AI ฟรีที่คนไทยต้องรู้',
    description: 'แหล่งรวมรีวิว AI Tools ภาษาไทย คัดเฉพาะตัวฟรีที่ใช้งานได้จริง',
    locale: 'th_TH',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th" className={`${prompt.variable} ${inter.variable}`}>
      <body className="font-sans bg-background text-foreground antialiased selection:bg-primary-100 selection:text-primary-900">
        <Navbar />
        {children}
        <footer className="bg-white border-t border-border py-12 mt-0">
          <div className="container mx-auto px-6 text-center">
            <p className="font-bold text-xl mb-4 text-foreground">Thai<span className="text-primary-600">AI</span>Tools</p>
            <div className="flex justify-center gap-6 text-sm text-muted-foreground mb-8">
              <a href="#" className="hover:text-primary-600">หน้าแรก</a>
              <a href="#" className="hover:text-primary-600">เกี่ยวกับเรา</a>
              <a href="#" className="hover:text-primary-600">นโยบายความเป็นส่วนตัว</a>
            </div>
            <p className="text-sm text-muted-foreground">© 2024 Thai AI Tools. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}