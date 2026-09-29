import type { Metadata } from "next";
import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import Container from "@/components/global/Container";
import Navbar from "@/components/navbar/Navbar";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: "store",
  description: "A nifty store built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
  <html lang='en'>
    <body >
      <Navbar />
      <Container className='py-20'>{children}</Container>
    </body>
  </html>
  );
}