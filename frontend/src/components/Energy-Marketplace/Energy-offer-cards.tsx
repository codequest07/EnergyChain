"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { energyData, sellData } from "@/utils/data";

import EnergyCard from "./EnergyCard";
import SellEnergyCard from "./SellEnergyCard";

export default function EnergyOfferCards() {
  const [activeTab, setActiveTab] = useState("buy");

  return (
    <div className="container mx-auto p-4">
      {/* Tab Triggers with Flexbox */}
      <div className="flex justify-between items-center mb-4">
        <Tabs
          defaultValue="buy"
          className="w-full"
          onValueChange={setActiveTab}>
          <main className="sm:flex items-center justify-between">
            <TabsList className="flex w-[200px] space-x-4">
              <TabsTrigger value="buy" className="flex-1 text-center">
                Buy energy
              </TabsTrigger>
              <TabsTrigger value="sell" className="flex-1 text-center">
                Sell energy
              </TabsTrigger>
            </TabsList>

            {/* Button container with Flexbox */}
            <div className="flex space-x-4 sm:justify-end">
              <Button variant="outline">View all ads</Button>
              <Button className="bg-gray-800 text-white hover:bg-gray-700">
                Create a {activeTab === "buy" ? "buy" : "sell"} ad
              </Button>
            </div>
          </main>
          <TabsContent value="buy">
            <div className="grid grid-cols-1 mt-8 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {energyData.map((energy, index) => (
                <EnergyCard
                  key={index}
                  id={energy.id}
                  savings={energy.savings}
                  rating={energy.rating}
                  price={energy.price}
                  distance={energy.distance}
                  quantity={energy.quantity}
                  limit={energy.limit}
                />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="sell">
            <div className="grid grid-cols-1 mt-8 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {sellData.map((energy, index) => (
                <SellEnergyCard
                  key={index}
                  id={energy.id}
                  savings={energy.savings}
                  rating={energy.rating}
                  price={energy.price}
                  distance={energy.distance}
                  quantity={energy.quantity}
                  limit={energy.limit}
                  type={energy.type}
                  icon={
                    energy.icon ? <energy.icon className="w-5 h-5" /> : null
                  }
                  expires={energy.expires}
                />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
