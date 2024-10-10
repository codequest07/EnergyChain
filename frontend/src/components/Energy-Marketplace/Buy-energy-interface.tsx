"use client";

import { useEffect, useState } from "react";
import { Star } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import MemoArrowLeft from "@/icons/ArrowLeft";
import { Badge } from "../ui/badge";
import { ApproveTransactionModal } from "./Approve-transaction-modal";
import { useRouter } from "next/navigation";

export default function BuyEnergyInterface() {
  const router = useRouter();
  const [energyAmount, setEnergyAmount] = useState("");
  const [amountToPay, setAmountToPay] = useState("--");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const pricePerKWh = 567;
  const minLimit = 57;
  const maxLimit = 567;

  useEffect(() => {
    if (energyAmount && !isNaN(parseFloat(energyAmount))) {
      const amount = parseFloat(energyAmount);
      if (amount >= minLimit && amount <= maxLimit) {
        const total = (amount * pricePerKWh).toFixed(2);
        setAmountToPay(`${total} ENRG`);
      } else {
        setAmountToPay("Invalid amount");
      }
    } else {
      setAmountToPay("--");
    }
  }, [energyAmount]);

  const handleMaxLimit = () => {
    setEnergyAmount(maxLimit.toString());
  };

  const handleBuyEnergy = () => {
    if (
      energyAmount &&
      amountToPay !== "Invalid amount" &&
      amountToPay !== "--"
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
            <CardTitle className="text-base font-[500]">Buy energy</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex justify-between items-center">
            <Badge className="text-xs bg-[#ECFDF3] shadow-none hover:bg-[#ECFDF3]  text-[#027A48]">
              Saves 10% on carbon
            </Badge>
            <div className="flex items-center">
              <Star className="h-4 w-4 text-yellow-400 fill-current" />
              <span className="ml-1 text-sm">4.5</span>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold">
              {pricePerKWh} ENRG{" "}
              <span className="text-sm font-normal text-gray-500">/kWh</span>
            </h2>
            <p className="text-sm text-gray-500">10 km away • QTY: 567 kWh</p>
          </div>

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
                type="number"
                min={minLimit}
                max={maxLimit}
              />
              <Button
                variant="outline"
                onClick={handleMaxLimit}
                className="rounded-lg absolute top-1.5 bg-[#F4F4F4]  right-3 text-[#766153]">
                Max
              </Button>
            </div>
            <p className="text-sm text-gray-500 mt-1">
              Limit: {minLimit} - {maxLimit} kWh
            </p>
          </div>

          <div>
            <p className="text-sm font-medium text-gray-700 mb-1">You pay</p>
            <p className="text-2xl font-bold">{amountToPay}</p>
          </div>

          <Button
            onClick={handleBuyEnergy}
            className="w-full bg-[#373D20] hover:bg-[#373D20] text-white">
            Buy energy
          </Button>
        </CardContent>
      </Card>
      <ApproveTransactionModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        energyAmount={parseFloat(energyAmount) || 0}
        totalCost={parseFloat(amountToPay.split(" ")[0]) || 0}
      />
    </>
  );
}
