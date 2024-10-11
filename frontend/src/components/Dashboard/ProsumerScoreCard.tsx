"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  // DropdownMenuContent,
  // DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import MemoProsumerIcon from "@/icons/ProsumerIcon";
import MemoArrowDown from "@/icons/ArrowDown";
import { useAccount } from "wagmi";
import { baseSepolia } from "viem/chains";
import { getName } from "@coinbase/onchainkit/identity";

interface ProsumerScoreCardProps {
  className?: string;
}

export default function ProsumerScoreCard({ className }: ProsumerScoreCardProps) {
  const { address, isConnected } = useAccount();
  const [name, setName] = useState<string>("");

  async function fetchBasename(address: `0x${string}`) {
    try {
      // @ts-expect-error This is necessary due to TypeScript inference limitations
      const basename = await getName({ address, chain: baseSepolia });
      if (basename) {
        setName(basename);
        return basename;
      }
    } catch (error) {
      console.error("Error fetching basename:", error);
    }
    return null;
  }

  useEffect(() => {
    async function fetchData() {
      if (isConnected && address) {
        await fetchBasename(address as `0x${string}`);
      }
    }

    fetchData();
  }, [isConnected, address]);

  return (
    <Card className="w-full max-w-md overflow-hidden">
      <CardHeader className="bg-[#C9DDB5]">
        <div className="flex items-center justify-between">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="h-8 hover:bg-transparent text-[#21250F] focus:ring-0 focus-visible:ring-0 bg-transparent shadow-none outline-none  justify-start text-left font-[400]">
                <span>{name ? name : address ? `${address.slice(0, 9)}...${address.slice(-8)}` : ""}</span>
                <MemoArrowDown className="ml-2 h-4 w-4 shrink-0 " />
              </Button>
            </DropdownMenuTrigger>
            {/* <DropdownMenuContent align="end">
              {addresses.map((address) => (
                <DropdownMenuItem
                  className="text-[#21250F]"
                  key={address}
                  onSelect={() => setSelectedAddress(address)}>
                  {address}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent> */}
          </DropdownMenu>
        </div>
      </CardHeader> 
      <CardContent className={`p-6 flex flex-col ${className}`}>
        <MemoProsumerIcon className="w-24 h-24" />
        <h3 className="mt-4 text-sm text-[#575757] font-[400]">
          Energy balance
        </h3>
        <p className="mt-2 text-[#21250F] text-xl  font-[600]">
          54,758.08 <span className="text-[#575757] text-xs">KWH</span>
        </p>
      </CardContent>
    </Card>
  );
}
