import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
const inter = Inter({ subsets: ["latin"] });
import 'markdown-to-poster/dist/style.css'

export const metadata: Metadata = {
  title: "markdown to poster",
  description: "ai tool",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}><Header></Header>{children}<Footer></Footer></body>
    </html>
  );
}
