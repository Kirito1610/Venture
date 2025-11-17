import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SideBar from "@/Components/SideBar";
import Navbar from "@/Components/Navbar";
import cardimage from "@/Assests/twittercard.jpg";

const InterFont = Inter({
  variable: "--inter",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});


export const metadata:Metadata = {
  title: "AI Vibe Growth — Marketing Intelligence Dashboard",
  description:
    "A modern marketing dashboard with campaign analytics, interactive charts, filters, and an AI Prompt Playground. Built with Next.js, TypeScript, Tailwind CSS, and Zustand.",
  twitter: {
    card: "summary_large_image",
    title: "AI Vibe Growth — Marketing Intelligence Dashboard",
    description:
      "A clean, fast, data-driven marketing dashboard featuring filters, charts, mock APIs, and an AI-inspired Prompt Playground.",
    creator: "@vishalkundu",
    images: [
      cardimage.src, // replace with your real image
    ],
  },
  openGraph: {
    title: "AI Vibe Growth — Marketing Intelligence Dashboard",
    description:
      "A high-performance frontend project showcasing marketing analytics, charts, and AI-inspired UI actions.",
    images: [
      {
        url: cardimage.src, // replace with your OG image
        width: 1200,
        height: 630,
      },
    ],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${InterFont.variable}`}>
        <div className={`flex  font-inter mx-auto ${InterFont.className}`}>
          <div className=" sm:w-[200px] relative">
            <SideBar />
            <Navbar />
          </div>
          <div className="flex w-full sm:flex-1">{children}</div>
        </div>
      </body>
    </html>
  );
}
