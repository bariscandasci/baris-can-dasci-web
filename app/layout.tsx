import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Syne, Instrument_Serif } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "latin-ext"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin", "latin-ext"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin", "latin-ext"],
  weight: ["500", "600", "700", "800"],
});

const instrument = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin", "latin-ext"],
  weight: "400",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Barış Can Daşcı",
  description: "Karabük Üniversitesi bilgisayar mühendisliği öğrencisi. PUHU yazılım ekip lideri ve GEPTEK kurucu başkanı.",
  keywords: "Barış Can Daşcı, Next.js, Tailwind CSS, web geliştirme, portfolyo",
  authors: [{ name: "Barış Can Daşcı" }],
  icons: {
    icon: [{ url: "/resimler/baris.jpg", type: "image/jpeg" }],
    shortcut: "/resimler/baris.jpg",
    apple: "/resimler/baris.jpg",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${syne.variable} ${instrument.variable} antialiased text-[#f4f1ea] min-h-screen relative overflow-x-hidden`}
      >
        <div className="site-bg" aria-hidden="true" />
        <Navbar />
        <main className="pt-24">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
