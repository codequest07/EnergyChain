"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import MemoProsumerIcon from "@/icons/ProsumerIcon";
import MemoArrowDown from "@/icons/ArrowDown";

export default function ProsumerScoreCard() {
  const [selectedAddress, setSelectedAddress] = useState("0x345...sjd89");

  const addresses = ["0x345...sjd89", "0x123...abc45", "0x789...xyz01"];

  return (
    <Card className="w-full max-w-md overflow-hidden">
      <CardHeader className="bg-[#C9DDB5]">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-[400] text-[#575757]">
            Prosumer score card
          </h2>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="h-8 hover:bg-transparent text-[#21250F] focus:ring-0 focus-visible:ring-0 bg-transparent shadow-none outline-none  justify-start text-left font-[400]">
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
        <h3 className="mt-4 text-sm text-[#575757] font-[500]">Nwamaka,</h3>
        <p className="mt-2 text-[#21250F] text-xl  font-[500]">
          You produce more than you consume.
          <br />
          That's some hero sh*t!
        </p>
      </CardContent>
    </Card>
  );
}
