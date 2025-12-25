import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Sangalang Family Reunion 2025 | Our Memories Together",
  description: "A collection of cherished memories from the Sangalang Family Reunion 2025. View photos, videos, and relive the beautiful moments we shared.",
  keywords: ["family reunion", "Sangalang family", "2025", "memories", "photos", "videos"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col antialiased">
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
