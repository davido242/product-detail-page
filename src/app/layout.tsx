import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../component/Header";
import Footer from "../component/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Product Detail App",
  description: "Developed by Daveed",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}</body>
        <Footer />
    </html>
  );
}