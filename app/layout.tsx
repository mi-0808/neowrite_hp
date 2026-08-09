// filepath: app/layout.tsx
import type { Metadata } from "next";
import { Inter, Noto_Sans_JP } from "next/font/google";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import StickyCta from "@/components/StickyCta";
import MotionProvider from "@/components/motion/MotionProvider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const notoSansJp = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-noto-sans-jp",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://neowrite.jp"),
  title: "NEOWRITE｜次世代の挑戦をテクノロジーで形にする",
  description:
    "システム開発・Web制作・SNS運用を通じて、次世代を本気でつくろうとする企業様の挑戦を支えます。",
  openGraph: {
    title: "NEOWRITE｜次世代の挑戦をテクノロジーで形にする",
    description:
      "システム開発・Web制作・SNS運用を通じて、次世代を本気でつくろうとする企業様の挑戦を支えます。",
    siteName: "NEOWRITE",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NEOWRITE｜次世代の挑戦をテクノロジーで形にする",
    description:
      "システム開発・Web制作・SNS運用を通じて、次世代を本気でつくろうとする企業様の挑戦を支えます。",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${inter.variable} ${notoSansJp.variable} font-sans antialiased`}>
        <MotionProvider>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-neo-navy focus:shadow-lg"
          >
            本文へスキップ
          </a>
          <Header />
          {children}
          <Footer />
          <StickyCta />
        </MotionProvider>
      </body>
    </html>
  );
}
