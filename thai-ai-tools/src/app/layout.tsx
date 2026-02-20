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

// 🧠 SEO Config กลาง: เปลี่ยน URL ด้านล่างเป็นโดเมนจริงเมื่อคุณได้โดเมนแล้ว
export const metadata: Metadata = {
  metadataBase: new URL('https://aitoolbox-demo.vercel.app'), 
  title: {
    default: "AIToolbox | รวมเครื่องมือ AI ที่ดีที่สุดของปี 2025",
    template: "%s | AIToolbox" 
  },
  description: "ศูนย์รวมเครื่องมือ AI ยอดนิยม อัปเดตล่าสุดปี 2025 ค้นหา AI แชทบอท, วาดรูป, ทำวิดีโอ, ทำเพลง พร้อมแจก Prompt ฟรีระดับพรีเมียม ช่วยลดเวลาทำงานของคุณ.",
  keywords: ["เครื่องมือ AI", "AI วาดรูป", "AI เขียนบทความ", "Prompt AI", "ChatGPT", "Midjourney", "AI ช่วยทำงาน", "สอนใช้ AI"],
  authors: [{ name: "AIToolbox Team" }],
  creator: "AIToolbox",
  publisher: "AIToolbox",
  openGraph: {
    type: 'website',
    locale: 'th_TH',
    url: 'https://aitoolbox-demo.vercel.app',
    title: 'AIToolbox | รวมเครื่องมือ AI ที่ดีที่สุดของปี 2025',
    description: 'ค้นหา AI สุดล้ำ พร้อมแจก Prompt ระดับโปร ช่วยให้คุณทำงานเสร็จไวขึ้น 10 เท่า',
    siteName: 'AIToolbox',
    images: [
      {
        url: '/og-image-home.jpg', // ⚠️ แนะนำ: สร้างรูปปกเว็บขนาด 1200x630px เซฟชื่อนี้ไปใส่ในโฟลเดอร์ public
        width: 1200,
        height: 630,
        alt: 'AIToolbox Cover Image',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AIToolbox | ศูนย์รวมเครื่องมือ AI อันดับ 1',
    description: 'อัปเดตเครื่องมือ AI ใหม่ๆ ก่อนใคร พร้อมแจก Prompt ฟรี!',
    images: ['/og-image-home.jpg'], // ใช้รูปเดียวกับ OpenGraph
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
            <p>© 2025 AIToolbox. All rights reserved.</p>
            <p className="text-xs text-slate-300 mt-2">Made with ❤️ for AI Lovers</p>
          </div>
        </footer>

        <CookieConsent />
        
        {/* ✅ ย้าย Google Analytics เข้ามาอยู่ใน body แล้วครับ */}
        <GoogleAnalytics gaId="G-XXXXXXXXXX" /> 
      </body>
    </html>
  );
}