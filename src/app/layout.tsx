import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "My Blog",
  description: "个人博客，分享技术心得与生活随笔",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen`}
        style={{ backgroundColor: "var(--color-bg)" }}
      >
        <Header />
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex gap-8">
            <Sidebar />
            <main className="flex-1 min-w-0 pt-8 pb-16">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
