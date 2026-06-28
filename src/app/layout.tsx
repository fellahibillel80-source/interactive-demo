import type { Metadata } from "next";
import { Noto_Kufi_Arabic, Roboto_Mono, Inter } from "next/font/google";
import "./globals.css";

const notoKufi = Noto_Kufi_Arabic({ 
  subsets: ["arabic"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-noto-kufi",
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Buddy System | تكنولوجيا الصحة النفسية المهنية",
  description: "النموذج الأولي لتطبيق Buddy System للوقاية النفسية المهنية في البيئات البترولية المعزولة",
};

import { Navigation } from "@/components/Navigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className="dark">
      <body
        className={`${notoKufi.variable} ${robotoMono.variable} ${inter.variable} antialiased min-h-screen bg-background font-kufi text-foreground`}
      >
        <Navigation />
        <main className="md:pr-64 pb-20 md:pb-0 min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
