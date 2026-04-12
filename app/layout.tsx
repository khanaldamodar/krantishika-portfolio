import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: '%s | Krantishikha Dhital',
    default: 'Krantishikha Dhital | Member of Parliament, Nepal',
  },
  description: "Official website of Krantishikha Dhital — Lawmaker of the Federal Parliament of Nepal (RSP), Psychosocial Counselor, and Social Advocate. Dedicated to public service and mental health.",
  keywords: ["Krantishikha Dhital", "Rastriya Swatantra Party", "RSP Nepal", "Member of Parliament Nepal", "Psychosocial Counselor Nepal", "Nepali Politician"],
  authors: [{ name: "Krantishikha Dhital" }],
  openGraph: {
    title: 'Krantishikha Dhital | Member of Parliament, Nepal',
    description: 'Official representative and social advocate dedicated to national development and mental health advocacy.',
    url: 'https://krantishikha.com',
    siteName: 'Krantishikha Dhital',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Krantishikha Dhital | Member of Parliament, Nepal',
    description: 'Official representative and social advocate dedicated to national development and mental health advocacy.',
    site: '@krantishikha',
    creator: '@krantishikha',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return ( 
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${geistSans.className} h-full antialiased`}
    >
      
      <body className="min-h-full flex flex-col font-sans">
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
