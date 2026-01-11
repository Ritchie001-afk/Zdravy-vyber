import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import NewsletterModal from "@/components/layout/NewsletterModal";
import CookieConsent from "@/components/layout/CookieConsent";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://zdravy-vyber.cz'),
  title: "Zdravý Výběr | Odborný průvodce světem doplňků",
  description: "Evidence-based recenze a články o doplňcích stravy. Zjistěte, co skutečně funguje.",
  icons: {
    icon: '/icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${inter.variable} antialiased bg-slate-950 text-slate-300 font-sans selection:bg-emerald-500/30 selection:text-emerald-200`}
      >
        {/* Minimal Sticky Nav */}
        <nav className="sticky top-0 z-50 w-full border-b border-slate-800 bg-slate-950/80 backdrop-blur-md transition-all">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
            <Link href="/" className="text-xl font-bold tracking-tight text-white">
              Zdravý<span className="text-emerald-500">Výběr</span>.
            </Link>

            <div className="flex items-center gap-6">
              <Link href="/" className="hidden sm:block text-sm font-medium text-slate-400 hover:text-emerald-500 transition-colors">
                Všechny články
              </Link>
              <NewsletterModal />
            </div>
          </div>
        </nav>

        {children}
        <CookieConsent gaId="G-2FBQE93ZL7" />
      </body>
    </html>
  );
}
