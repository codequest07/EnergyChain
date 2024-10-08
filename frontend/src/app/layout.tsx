import type { Metadata } from "next";
import { DM_Sans, Grenze } from "next/font/google";
import "./globals.css";
import "@rainbow-me/rainbowkit/styles.css";
import "@coinbase/onchainkit/styles.css";

const dmSans = DM_Sans({
  weight: ["300", "400", "500", "600", "700", "900"],
  subsets: ["latin"],
});

import { Providers } from "./providers";
import { Toaster } from "@/components/ui/toaster";
import { headers } from "next/headers";
import { cookieToInitialState } from "wagmi";
import { config } from "@/utils/config";

export const metadata: Metadata = {
title: "energyy-chain",
  description: "energyy-chain",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const initialState = cookieToInitialState(
    config,
    headers().get("cookie")
  );
  return (
    <html lang="en">
      <body className={`${dmSans.className} antialiased`}>
        <Providers initialState={initialState}>{children}</Providers>
        <Toaster />
      </body>
    </html>
  );
}
