"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import MemoProsumerIcon from "@/icons/ProsumerIcon";
import MemoArrowDown from "@/icons/ArrowDown";
import MemoBaseIcon from "@/icons/BaseIcon";

export default function ProsumerScoreCard() {
  const [selectedAddress, setSelectedAddress] = useState("mgbeke.base.eth");

  const addresses = ["mgbeke.base.eth", "joel.eth", "Don.eth"];

  return (
    <Card className="w-full max-w-md overflow-hidden">
      <CardHeader className="bg-[#C9DDB5]">
        <div className="flex items-center justify-between">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="h-8 hover:bg-transparent text-[#21250F] focus:ring-0 focus-visible:ring-0 bg-transparent shadow-none outline-none  justify-start text-left font-[400]">
                <MemoBaseIcon className="w-24 h-24" />
                <span>{selectedAddress}</span>
                <MemoArrowDown className="ml-2 h-4 w-4 shrink-0 " />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {addresses.map((address) => (
                <DropdownMenuItem
                  className="text-[#21250F]"
                  key={address}
                  onSelect={() => setSelectedAddress(address)}>
                  {address}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardHeader>
      <CardContent className="p-6 flex flex-col mt-16 ">
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
