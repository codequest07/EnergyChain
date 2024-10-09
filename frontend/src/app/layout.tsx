import type { Metadata } from "next";
import "./globals.css";

import "@rainbow-me/rainbowkit/styles.css";
import '@coinbase/onchainkit/styles.css';

import { Providers } from "./providers";
import { Toaster } from "@/components/ui/toaster";
import { headers } from "next/headers";
import { cookieToInitialState } from "wagmi";
import { config } from "@/utils/config";

export const metadata: Metadata = {
  title: "Energy chain",
  description: "Trade Energy efficiently and securely",
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
      <body>
        <Providers initialState={initialState}>{children}</Providers>
        <Toaster />
      </body>
    </html>
  );
}