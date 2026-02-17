import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import { GoogleAnalytics } from '@next/third-parties/google';
import Link from 'next/link'; // ✅ อย่าลืม import Link
import { AlertTriangle } from 'lucide-react'; // ✅ อย่าลืม import Icon
import "../globals.css";
import Navbar from "@/components/layout/Navbar";
import CookieConsent from "@/components/ui/CookieConsent";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const outfit = Outfit({ subsets: ["latin"], variable: '--font-outfit' });

export const metadata: Metadata = {
  metadataBase: new URL('https://aitoolbox-demo.vercel.app'), 
  title: {
    default: "AIToolbox - รวมเครื่องมือ AI ที่ดีที่สุด",
    template: "%s | AIToolbox" 
  },
  description: "ค้นหาเครื่องมือ AI ยอดนิยม อัปเดตล่าสุด 2025 ช่วยลดเวลาทำงานของคุณ",
  openGraph: {
    type: 'website',
    locale: 'th_TH',
    url: '/',
    siteName: 'AIToolbox',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th" className={`${inter.variable} ${outfit.variable}`}>
      <body className="font-sans antialiased bg-background text-foreground flex flex-col min-h-screen">
        <Navbar />
        
        {/* ส่วนเนื้อหาหลัก (ยืดขยายเต็มพื้นที่) */}
        <div className="flex-grow">
          {children}
        </div>

        {/* ✅ FOOTER: ส่วนล่างสุดของเว็บ */}
        <footer className="py-10 text-center text-sm text-slate-400 border-t border-slate-100 bg-slate-50 mt-auto">
          <div className="max-w-7xl mx-auto px-6">
            
            {/* ลิงก์ต่างๆ */}
            <div className="flex flex-wrap justify-center gap-6 mb-6 font-medium">
              <Link href="/privacy" className="hover:text-blue-600 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-blue-600 transition-colors">
                Terms of Service
              </Link>
              
              {/* 🔥 ปุ่มแจ้งปัญหา (เพิ่มตรงนี้) */}
              <Link 
                href="/report" 
                className="flex items-center gap-1.5 hover:text-red-500 transition-colors"
              >
                <AlertTriangle size={14} /> แจ้งปัญหาใช้งาน
              </Link>
            </div>

            {/* Copyright */}
            <p>© 2025 AIToolbox. All rights reserved.</p>
            <p className="text-xs text-slate-300 mt-2">Made with ❤️ for AI Lovers</p>
          </div>
        </footer>

        {/* Cookie Consent Banner */}
        <CookieConsent />
      </body>

      {/* Google Analytics */}
      <GoogleAnalytics gaId="G-XXXXXXXXXX" />
    </html>
  );
}