import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CodeCapture - Beautiful Code Snippets Made Easy",
  description:
    "Create and customize stunning images of your code with CodeCapture. Choose from diverse themes and export options to share your code in style.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("dark", inter.className)}>{children}</body>
    </html>
  );
}
