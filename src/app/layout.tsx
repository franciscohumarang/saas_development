import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI-Powered SaaS Development for Non-Tech Founders",
  description: "Transform your idea into a MicroSaaS in 4-5 weeks. Done-for-you development using AI tools. Built for non-technical founders who want results, not headaches.",
  keywords: "AI development, MicroSaaS, MVP development, startup development, non-technical founders",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased bg-gray-900 text-white`}>
        {children}
      </body>
    </html>
  );
}
