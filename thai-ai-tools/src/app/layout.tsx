import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import { GoogleAnalytics } from '@next/third-parties/google';
import Link from 'next/link'; 
import { AlertTriangle } from 'lucide-react'; 
import "../globals.css";
import Navbar from "@/components/layout/Navbar";
import CookieConsent from "@/components/ui/CookieConsent";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const outfit = Outfit({ subsets: ["latin"], variable: '--font-outfit' });

// 🧠 ตั้งค่า Domain หลักของคุณที่นี่ (เปลี่ยนเมื่อได้โดเมนจริง)
const siteUrl = 'https://web-ai-tools.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl), 
  title: {
    default: "AIToolbox | รวมเครื่องมือ AI ที่ดีที่สุดของไทย",
    template: "%s | AIToolbox" 
  },
  description: "ค้นหา AI สุดล้ำ พร้อมแจก Prompt ระดับโปร ช่วยให้คุณทำงานเสร็จไวขึ้น 10 เท่า รวบรวมเครื่องมือ AI สำหรับวาดรูป เขียนบทความ และทำงานอัตโนมัติ",
  keywords: [
    "เครื่องมือ AI", "AI วาดรูป", "AI เขียนบทความ", "Prompt AI", 
    "ChatGPT", "Midjourney", "AI ช่วยทำงาน", "สอนใช้ AI", 
    "รวมเว็บ AI", "Generative AI", "AI สร้างวิดีโอ", "AIToolbox"
  ],
  authors: [{ name: "AIToolbox Team", url: siteUrl }],
  creator: "AIToolbox",
  publisher: "AIToolbox",
  
  // ✅ Canonical URL ช่วยบอก Google ว่า URL ไหนคือหน้าหลัก ป้องกันปัญหา Duplicate Content
  alternates: {
    canonical: '/',
  },

  // ✅ สั่งให้ Bot เข้ามาเก็บข้อมูลและค้นหาเจอ
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  icons: {
    icon: '/images/icon.png',
    shortcut: '/images/icon.png',
    apple: '/images/icon.png', // ไอคอนสำหรับเซฟลงหน้าจอ iPhone
  },

  // ✅ Open Graph สำหรับแชร์ลง Facebook, LINE, LinkedIn
  openGraph: {
    type: 'website',
    locale: 'th_TH',
    url: siteUrl,
    title: 'AIToolbox | ศูนย์รวมเครื่องมือ AI ที่ดีที่สุด',
    description: 'ค้นหา AI สุดล้ำ พร้อมแจก Prompt ระดับโปร ช่วยลดเวลาทำงานของคุณให้เสร็จไวขึ้น 10 เท่า',
    siteName: 'AIToolbox',
    images: [
      {
        url: '/og-image-home.jpg', // ขนาดที่แนะนำ: 1200x630px
        width: 1200,
        height: 630,
        alt: 'AIToolbox - ศูนย์รวมเครื่องมือ AI',
      }
    ],
  },
  
  // ✅ Twitter Card สำหรับการแชร์ลง X (Twitter)
  twitter: {
    card: 'summary_large_image',
    site: '@aitoolbox', // ใส่ Twitter Handle ของเว็บ (ถ้ามี)
    creator: '@aitoolbox',
    title: 'AIToolbox | ศูนย์รวมเครื่องมือ AI',
    description: 'อัปเดตเครื่องมือ AI ใหม่ๆ และ Prompt เด็ดๆ ที่จะช่วยลดเวลาทำงานของคุณ',
    images: ['/og-image-home.jpg'], 
  },

  // ✅ ใส่โค้ดยืนยันตัวตนสำหรับ Google Search Console
  verification: {
    // ⚠️ ระวัง: เปลี่ยนข้อความด้านล่างให้เป็น รหัสจากแท็ก HTML (<meta name="google-site-verification" content="...รหัสตรงนี้..." />)
    google: 'ใส่รหัสยาวๆ_ที่ก็อปปี้มาจาก_GSC_ที่นี่', 
  },
  category: 'technology',
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
        
        <div className="flex-grow">
          {children}
        </div>

        <footer className="py-10 text-center text-sm text-slate-400 border-t border-slate-100 bg-slate-50 mt-auto">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-wrap justify-center gap-6 mb-6 font-medium">
              <Link href="/privacy" className="hover:text-blue-600 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-blue-600 transition-colors">
                Terms of Service
              </Link>
              <Link href="/report" className="flex items-center gap-1.5 hover:text-red-500 transition-colors">
                <AlertTriangle size={14} /> แจ้งปัญหาใช้งาน
              </Link>
            </div>
            {/* ✅ อัปเดตปีลิขสิทธิ์ให้เป็นปีปัจจุบันอัตโนมัติ */}
            <p>© {new Date().getFullYear()} AIToolbox. All rights reserved.</p>
            <p className="text-xs text-slate-300 mt-2">Made with ❤️ for AI Lovers</p>
          </div>
        </footer>

        <CookieConsent />
        
        {/* GoogleAnalytics */}
        <GoogleAnalytics gaId="G-J3JWTXQ2K0" /> 
      </body>
    </html>
  );
}