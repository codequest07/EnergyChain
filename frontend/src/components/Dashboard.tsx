"use client";

import Header from "./Header";
import Sidebar from "./Sidebar";
import { useAccount } from "wagmi";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export function DashboardLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const { isConnected, address } = useAccount();
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!(isConnected && address)) {
      router.push("/create-account");
    } else {
      setLoading(false);
    }
  }, [isConnected, address]);

  if (loading) {
    return <div>Loading...</div>; // Display a loading screen while checking the connection
  }

  return (
    <div className="grid min-h-[100vh] w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      {/* Sidebar - Fixed and full height */}
      <div className="sticky top-0 lg:h-screen">
        <Sidebar />
      </div>

      {/* Main Content Area */}
      <div className="flex flex-col flex-1">
        {/* Fixed Header */}
        <div className="sticky top-0 z-10">
          <Header />
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-4">{children}</div>
      </div>
    </div>
  );
}
