"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "../ui/badge";
import MemoArrowLeft from "@/icons/ArrowLeft";
import MemoChurch from "@/icons/Church";
import { ApproveTransactionModal } from "./Approve-transaction-modal";
import { useRouter } from "next/navigation";

export default function SellEnergyInterface() {
  const router = useRouter();
  const [energyAmount, setEnergyAmount] = useState("");
  const [amountToReceive, setAmountToReceive] = useState("--");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const pricePerKWh = 567;
  const availableEnergy = 350;

  useEffect(() => {
    if (energyAmount && !isNaN(parseFloat(energyAmount))) {
      const amount = parseFloat(energyAmount);
      if (amount > 0 && amount <= availableEnergy) {
        // Validate against available balance
        const total = (amount * pricePerKWh).toFixed(2);
        setAmountToReceive(`${total} ENRG`);
      } else {
        setAmountToReceive("Invalid amount");
      }
    } else {
      setAmountToReceive("--");
    }
  }, [energyAmount]);

  const handleMaxLimit = () => {
    setEnergyAmount(availableEnergy.toString());
  };

  const handleSellEnergy = () => {
    if (
      energyAmount &&
      amountToReceive !== "Invalid amount" &&
      amountToReceive !== "--"
    ) {
      setIsModalOpen(true);
    }
  };
  const handleGoBack = () => {
    router.back();
  };
  return (
    <>
      <Card className="w-full max-w-xl mx-auto">
        <CardHeader className="flex items-start justify-between">
          <div className="flex items-center space-x-2">
            <Button onClick={handleGoBack} variant="ghost" size="icon">
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
          <p className="text-sm text-gray-500 mb-4">
            10 km away • QTY: 567 kWh
          </p>

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
                  onClick={handleMaxLimit}
                  variant="outline"
                  className="rounded-lg absolute top-1.5 bg-[#F4F4F4]  right-3 text-[#766153]">
                  Max
                </Button>
              </div>
            </div>
            <p className="text-sm text-gray-500">
              Available energy: {availableEnergy} kWh
            </p>

            <div>
              <p className="text-2xl font-bold">{amountToReceive}</p>
            </div>
            <Button
              onClick={handleSellEnergy}
              className="w-full bg-[#373D20] hover:bg-[#373D20] text-white">
              Sell energy
            </Button>
          </div>
        </CardContent>
      </Card>
      <ApproveTransactionModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        energyAmount={parseFloat(energyAmount) || 0}
        totalCost={parseFloat(amountToReceive.split(" ")[0]) || 0}
      />
    </>
  );
}
