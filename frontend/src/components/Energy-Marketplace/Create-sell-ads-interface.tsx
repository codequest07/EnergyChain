"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import MemoArrowLeft from "@/icons/ArrowLeft";
import { useRouter } from "next/navigation";
import { ApproveTransactionModal } from "./Approve-transaction-modal";

export default function CreateSellAdInterface() {
  const router = useRouter();
  const [energyAmount, setEnergyAmount] = useState("");
  const [rate, setRate] = useState("546");
  const [minOrder, setMinOrder] = useState("546");
  const [maxOrder, setMaxOrder] = useState("546");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [amountToReceive, setAmountToReceive] = useState("--");

  const availableEnergy = 350; // kWh

  useEffect(() => {
    if (energyAmount && rate) {
      const amount = (parseFloat(energyAmount) * parseFloat(rate)).toFixed(2);
      setAmountToReceive(`${amount} ENRG`);
    } else {
      setAmountToReceive("--");
    }
  }, [energyAmount, rate]);

  const handleGoBack = () => {
    router.back();
  };

  const handleMaxEnergy = () => {
    setEnergyAmount(availableEnergy.toString());
  };

  const handleCreateSellEnergy = () => {
    if (
      parseFloat(energyAmount) > 0 &&
      parseFloat(energyAmount) <= availableEnergy &&
      parseFloat(rate) > 0 &&
      parseFloat(minOrder) > 0 &&
      parseFloat(maxOrder) >= parseFloat(minOrder) &&
      amountToReceive !== "Invalid amount" &&
      amountToReceive !== "--"
    ) {
      setIsModalOpen(true);
    } else {
      alert("Please fill in all fields correctly.");
    }
  };

  return (
    <>
      <Card className="w-full max-w-[34rem] mx-auto">
        <CardHeader className="flex items-start justify-between">
          <div className="flex items-center space-x-2">
            <Button onClick={handleGoBack} variant="ghost" size="icon">
              <MemoArrowLeft className="h-6 w-6" />
            </Button>
            <CardTitle className="text-base font-[500]">
              Create a sell ad
            </CardTitle>
          </div>
          <div>
            <p className="text-sm text-gray-500">
              Create a sell ad for something something
            </p>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
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
                className="h-12 outline-none rounded-lg focus:ring-0 focus-visible:ring-0"
                type="number"
                min="0"
                max={availableEnergy}
              />
              <Button
                variant="outline"
                className="rounded-lg absolute top-1.5 bg-[#F4F4F4] right-3 text-[#766153]"
                onClick={handleMaxEnergy}>
                Max
              </Button>
            </div>
            <p className="text-sm text-gray-500 mt-1">
              Available energy: {availableEnergy} kWh available
            </p>
          </div>

          <div>
            <label
              htmlFor="rate"
              className="block text-sm font-medium text-gray-700 mb-1">
              Rate (ENRG)
            </label>
            <Input
              id="rate"
              value={rate}
              onChange={(e) => setRate(e.target.value)}
              type="number"
              min="0"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="min-order"
                className="block text-sm font-medium text-gray-700 mb-1">
                Min order (kWh)
              </label>
              <Input
                id="min-order"
                value={minOrder}
                onChange={(e) => setMinOrder(e.target.value)}
                type="number"
                min="0"
              />
            </div>
            <div>
              <label
                htmlFor="max-order"
                className="block text-sm font-medium text-gray-700 mb-1">
                Max order (kWh)
              </label>
              <Input
                id="max-order"
                value={maxOrder}
                onChange={(e) => setMaxOrder(e.target.value)}
                type="number"
                min="0"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              You receive
            </label>
            <p className="text-2xl font-bold">{amountToReceive}</p>
          </div>

          <Button
            onClick={handleCreateSellEnergy}
            className="w-full bg-[#373D20] hover:bg-[#373D20] text-white">
            Sell energy
          </Button>
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
