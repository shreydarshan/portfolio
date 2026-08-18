import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SceneBackground } from "@/components/3d/SceneBackground";
import { Navbar } from "@/components/layout/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shrey Darshan — AI/ML Student & Software Developer",
  description: "Portfolio of Shrey Darshan, showcasing work in Artificial Intelligence, Machine Learning, and Software Development.",
  keywords: ["AI", "Machine Learning", "Software Developer", "Portfolio", "Shrey Darshan"],
  openGraph: {
    title: "Shrey Darshan | AI/ML Engineer",
    description: "Portfolio of Shrey Darshan, showcasing work in AI, ML, and Software Development.",
    type: "website",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[var(--background)] text-[var(--foreground)] selection:bg-[var(--accent)] selection:text-white">
        <SceneBackground />
        <Navbar />
        <main className="relative z-10 flex flex-col min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
