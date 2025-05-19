import type { Metadata } from "next";

import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/master/Navigation";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Match Right | Get Hired Faster with Smart Resume Matching",
  description:
    "Help users align their resume with job descriptions using AI suggestions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased h-screen `}>
        <ClerkProvider>
          <div className="flex flex-col h-screen">
            {/* Sticky Navbar */}
            <header className="sticky top-0 z-50 bg-white">
              <Navigation />
            </header>

            {/* Scroll Snap Container */}
            <main className="flex-1 overflow-y-auto snap-y snap-mandatory">
              {children}
            </main>
          </div>
        </ClerkProvider>
      </body>
    </html>
  );
}
