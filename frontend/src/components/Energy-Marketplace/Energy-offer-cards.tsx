"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { energyData, sellData } from "@/utils/data";
import EnergyCard from "./EnergyCard";
import SellEnergyCard from "./SellEnergyCard";
import MemoFilters from "@/icons/Filters";
import Link from "next/link";

export default function MarketplacePage() {
  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState<string>("buy");

  useEffect(() => {
    const tabFromUrl = searchParams.get("tab");
    if (tabFromUrl && (tabFromUrl === "buy" || tabFromUrl === "sell")) {
      setActiveTab(tabFromUrl);
    }
  }, [searchParams]);

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <Tabs value={activeTab} className="w-full">
          <main className="sm:flex items-center justify-between">
            <TabsList className="flex w-[200px] space-x-4">
              <Link href="/dashboard/marketplace?tab=buy" passHref>
                <TabsTrigger value="buy" className="flex-1 text-center">
                  Buy energy
                </TabsTrigger>
              </Link>
              <Link href="/dashboard/marketplace?tab=sell" passHref>
                <TabsTrigger value="sell" className="flex-1 text-center">
                  Sell energy
                </TabsTrigger>
              </Link>
            </TabsList>

            <div className="flex space-x-4 sm:justify-end">
              <Button variant="outline" className="flex space-x-2">
                <MemoFilters className="w-4 h-4" />
                <p>More filters</p>
              </Button>
              <Button className="bg-[#373D20] text-white hover:bg-[#373D20]">
                Create a {activeTab === "buy" ? "buy" : "sell"} ad
              </Button>
            </div>
          </main>
          <TabsContent value="buy">
            <div className="grid grid-cols-1 mt-8 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {energyData.map((energy, index) => (
                <EnergyCard key={index} {...energy} />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="sell">
            <div className="grid grid-cols-1 mt-8 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {sellData.map((energy, index) => (
                <SellEnergyCard
                  key={index}
                  {...energy}
                  icon={
                    energy.icon ? <energy.icon className="w-5 h-5" /> : null
                  }
                />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
