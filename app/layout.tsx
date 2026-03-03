import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Barış Can Daşcı | Future Architect",
  description: "Geleceği kodla inşa ediyoruz - Bilgisayar Mühendisliği öğrencisi ve dijital mimar",
  keywords: "Barış Can Daşcı, Next.js, Tailwind CSS, web geliştirme, portfolyo",
  authors: [{ name: "Barış Can Daşcı" }],
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#050505] text-gray-100 min-h-screen relative overflow-x-hidden`}
      >
        {/* Grid background pattern */}
        <div className="fixed inset-0 -z-10 bg-[radial-gradient(#ffffff33_1px,transparent_1px)] bg-[size:20px_20px] opacity-20"></div>
        
        {/* Animated gradient background */}
        <div className="fixed inset-0 -z-10 bg-gradient-to-br from-gray-900 via-gray-950 to-black"></div>
        
        {/* Floating particles effect */}
        <div className="fixed inset-0 -z-5 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-20 left-10 w-2 h-2 bg-cyan-400 rounded-full animate-pulse opacity-60"></div>
            <div className="absolute top-40 right-20 w-1 h-1 bg-indigo-400 rounded-full animate-pulse opacity-40"></div>
            <div className="absolute bottom-20 left-1/3 w-1.5 h-1.5 bg-cyan-300 rounded-full animate-pulse opacity-50"></div>
            <div className="absolute bottom-40 right-1/4 w-1 h-1 bg-indigo-300 rounded-full animate-pulse opacity-30"></div>
          </div>
        </div>

          <Navbar />
          {children}
          <Footer />
      </body>
    </html>
  );
}