import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Load Encanto-style Madrigal font
const encantoFont = localFont({
  src: "../fonts/Madrigal.ttf",
  variable: "--font-encanto",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Onofre + Aurora Family Reunion 2025 | Our Memories Together",
  description: "A collection of cherished memories from the Onofre + Aurora Family Reunion 2025. View photos, videos, and relive the beautiful moments we shared.",
  keywords: ["family reunion", "Onofre family", "Aurora family", "2025", "memories", "photos", "videos"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${encantoFont.variable} min-h-screen flex flex-col antialiased`}>
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
