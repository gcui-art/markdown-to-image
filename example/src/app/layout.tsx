import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
const inter = Inter({ subsets: ["latin"] });
import 'markdown-to-poster/dist/style.css'
import { Analytics } from "@vercel/analytics/react"

export const metadata: Metadata = {
  title: "markdown to poster image",
  description: "Render Markdown into a beautiful poster image, with support for copying as an image. Md to Poster/Image/Quote/Card/Instagram/Twitter/Facebook...",
  keywords: ["poster image", "海报", "卡片", "图片", "markdown", "ai", "markdown to poster", "markdown to image", "markdown to card", "markdown to quote", "instagram", "twitter", "facebook"],
  creator: "gcui.ai",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header></Header>{children}<Footer></Footer>
        <Analytics />
      </body>
    </html>
  );
}
