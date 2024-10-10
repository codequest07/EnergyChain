"use client";

import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { energyData, sellData } from "@/utils/data";
import EnergyCard from "./EnergyCard";
import SellEnergyCard from "./SellEnergyCard";
import MemoFilters from "@/icons/Filters";

export default function EnergyOfferCards() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("buy");

  useEffect(() => {
    const tabFromUrl = searchParams.get("tab");
    console.log("Tab from URL:", tabFromUrl);
    if (tabFromUrl && (tabFromUrl === "buy" || tabFromUrl === "sell")) {
      console.log("Setting active tab to:", tabFromUrl);
      setActiveTab(tabFromUrl);
    }
  }, [searchParams]);

  const handleCreateAd = () => {
    if (activeTab === "buy") {
      router.push("/dashboard/marketplace/create-buy-ads");
    } else {
      router.push("/dashboard/marketplace/create-sell-ads");
    }
  };
  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <Tabs value={activeTab} className="w-full" onValueChange={setActiveTab}>
          <main className="sm:flex items-center justify-between">
            <TabsList className="flex w-[200px] space-x-4">
              <TabsTrigger value="buy" className="flex-1 text-center">
                Buy energy
              </TabsTrigger>
              <TabsTrigger value="sell" className="flex-1 text-center">
                Sell energy
              </TabsTrigger>
            </TabsList>

            <div className="flex space-x-4 sm:justify-end">
              <Button variant="outline" className="flex space-x-2">
                <MemoFilters className="w-4 h-4" />
                <p> More filters</p>
              </Button>
              <Button
                onClick={handleCreateAd}
                className="bg-[#373D20] text-white hover:bg-[#373D20]">
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
