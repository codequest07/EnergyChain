"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "../ui/badge";
import MemoArrowLeft from "@/icons/ArrowLeft";
import MemoChurch from "@/icons/Church";

export default function SellEnergyInterface() {
  const [energyAmount, setEnergyAmount] = useState("");

  return (
    <Card className="w-full max-w-xl mx-auto">
      <CardHeader className="flex items-start justify-between">
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon">
            <MemoArrowLeft className="h-6 w-6" />
          </Button>
          <CardTitle className="text-base font-[500]">Sell energy</CardTitle>
        </div>
      </CardHeader>

      <CardContent>
        <div className="flex justify-between items-start mb-1">
          <div className="flex items-center">
            <MemoChurch className="h-5 w-5 mr-2 text-purple-500" />
            <span className="font-medium">Church</span>
          </div>
          <span className="text-sm text-gray-500">
            Expires: 30D : 24H : 10M
          </span>
        </div>
        <Badge className="text-xs bg-[#ECFDF3] shadow-none hover:bg-[#ECFDF3]  text-[#027A48]">
          Saves 10% on carbon
        </Badge>
        <h2 className="text-3xl mt-4 font-bold mb-2">
          567 ENRG{" "}
          <span className="text-sm font-normal text-gray-500">/kWh</span>
        </h2>
        <p className="text-sm text-gray-500 mb-4">10 km away • QTY: 567 kWh</p>

        <div className="space-y-4">
          <div>
            <label
              htmlFor="energy-amount"
              className="block text-sm font-medium text-gray-700 mb-1">
              Energy amount
            </label>
            <div className="flex relative">
              <Input
                id="energy-amount"
                placeholder="kWh"
                value={energyAmount}
                onChange={(e) => setEnergyAmount(e.target.value)}
                className=" h-12 outline-none rounded-lg focus:ring-0 focus-visible:ring-0"
              />
              <Button
                variant="outline"
                className="rounded-lg absolute top-1.5 bg-[#F4F4F4]  right-3 text-[#766153]">
                Max
              </Button>
            </div>
          </div>
          <p className="text-sm text-gray-500">Available energy: 350 kWh</p>
          <div>
            <p className="text-sm font-medium text-gray-700 mb-1">
              You receive
            </p>
            <p className="text-2xl font-bold">--</p>
          </div>
          <Button className="w-full bg-[#373D20] hover:bg-[#373D20] text-white">
            Sell energy
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
