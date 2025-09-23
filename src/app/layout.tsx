import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sneaker Store - Step into Style",
  description: "Your ultimate destination for premium sneakers and athletic footwear",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <nav className="flex gap-6 p-4 bg-white dark:bg-gray-900 shadow-sm border-b">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-gray-900 dark:text-white">SneakerStore</span>
          </div>
          <div className="flex gap-6 ml-auto">
            <Link href="/" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-medium">Home</Link>
            <Link href="/shop" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-medium">Shop</Link>
            <Link href="/about" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-medium">About</Link>
            <Link href="/cart" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-medium">Cart</Link>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
