import type { Metadata } from "next";
import { DM_Sans, Grenze } from 'next/font/google';
import "./globals.css";
import "@rainbow-me/rainbowkit/styles.css";
import '@coinbase/onchainkit/styles.css';

const dmSans = DM_Sans({weight: ["300", "400", "500", "600", "700", "900"], subsets: ['latin']})

import { Providers } from "./providers";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "Energy-chain",
  description: "Energy-chain",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.className} antialiased`}>
        <Providers>{children}</Providers>
        <Toaster />
      </body>
    </html>
  );
}
