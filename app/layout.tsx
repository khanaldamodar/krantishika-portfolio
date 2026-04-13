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
    default: 'Krantishikha Dhital | Political Leader & Psychosocial Counselor',
  },
  description: "Official website of Krantishikha Dhital — Central Committee Member of Rastriya Swatantra Party (RSP), Psychosocial Counselor, and Senior Communications Professional.",
  keywords: ["Krantishikha Dhital", "Rastriya Swatantra Party", "RSP Nepal", "Psychosocial Counselor Nepal", "Media Professional Nepal", "Shramadhan App Project Head"],
  authors: [{ name: "Krantishikha Dhital" }],
  openGraph: {
    title: 'Krantishikha Dhital | Political Leader & Psychosocial Counselor',
    description: 'Central Committee Member of RSP and advocate for psychosocial well-being and social concerns.',
    url: 'https://krantishikha.com.np',
    siteName: 'Krantishikha Dhital',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Krantishikha Dhital | Political Leader & Psychosocial Counselor',
    description: 'Central Committee Member of RSP and advocate for psychosocial well-being and social concerns.',
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
