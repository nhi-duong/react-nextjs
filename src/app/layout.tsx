import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./globals.css";

import Nav from "@/components/L3/menu/nav";
import Footer from "@/components/L3/footer/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Learning NextJS",
  description: "Sale 50%",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav />

        {children}
        <Footer />
      </body>
    </html>
  );
}
