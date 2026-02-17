import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import { GoogleAnalytics } from '@next/third-parties/google';
import "../globals.css";
import Navbar from "@/components/layout/Navbar";
import CookieConsent from "@/components/ui/CookieConsent";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const outfit = Outfit({ subsets: ["latin"], variable: '--font-outfit' });

export const metadata: Metadata = {
  metadataBase: new URL('https://aitoolbox-demo.vercel.app'), // ⚠️ เปลี่ยนเป็นโดเมนจริง
  title: {
    default: "AIToolbox - รวมเครื่องมือ AI ที่ดีที่สุด",
    template: "%s | AIToolbox" 
  },
  description: "ค้นหาเครื่องมือ AI ยอดนิยม อัปเดตล่าสุด 2025",
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

        {/* ✅ Footer ที่มีลิงก์กฎหมาย */}
        <footer className="py-8 text-center text-sm text-slate-400 border-t border-slate-100 bg-slate-50 mt-auto">
          <div className="flex justify-center gap-6 mb-4 font-medium">
            <a href="/privacy" className="hover:text-blue-600 transition-colors">Privacy Policy</a>
            <a href="/terms" className="hover:text-blue-600 transition-colors">Terms of Service</a>
          </div>
          <p>© 2025 AIToolbox. All rights reserved.</p>
        </footer>

        {/* ✅ แบนเนอร์คุกกี้ */}
        <CookieConsent />
      </body>

      {/* ✅ Google Analytics (ใส่รหัสจริงของคุณที่นี่) */}
      <GoogleAnalytics gaId="G-XXXXXXXXXX" />
    </html>
  );
}