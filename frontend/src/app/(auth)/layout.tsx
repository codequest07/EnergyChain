import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Auth | Energy-chain",
  description: "Welcome to Energy-Chain",
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="flex min-h-screen">
      <div className="w-5/12 bg-gradient-to-b from-[#D6E7AD] to-[#C28775] hidden md:block"></div>
      <div className="flex-1">{children}</div>
    </section>
  );
}
