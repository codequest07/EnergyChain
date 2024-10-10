"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import MemoArrowLeft from "@/icons/ArrowLeft";
import { useRouter } from "next/navigation";
import { ApproveTransactionModal } from "./Approve-transaction-modal";

export default function CreateBuyAdInterface() {
  const router = useRouter();
  const [energyAmount, setEnergyAmount] = useState("");
  const [rate, setRate] = useState("546");
  const [duration, setDuration] = useState("");
  const [endDate, setEndDate] = useState("");
  const [totalCost, setTotalCost] = useState("0");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const availableEnergy = 350; // kWh
  const maxEnergyAmount = 1000; // kWh

  useEffect(() => {
    if (energyAmount && rate) {
      const cost = (parseFloat(energyAmount) * parseFloat(rate)).toFixed(2);
      setTotalCost(cost);
    } else {
      setTotalCost("0");
    }
  }, [energyAmount, rate]);

  useEffect(() => {
    if (duration) {
      const now = new Date();
      switch (duration) {
        case "1day":
          now.setDate(now.getDate() + 1);
          break;
        case "1week":
          now.setDate(now.getDate() + 7);
          break;
        case "1month":
          now.setMonth(now.getMonth() + 1);
          break;
      }
      setEndDate(
        now.toLocaleString("en-US", {
          day: "numeric",
          month: "short",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        })
      );
    }
  }, [duration]);

  const handleGoBack = () => {
    router.back();
  };

  const handleMaxEnergy = () => {
    setEnergyAmount(Math.min(availableEnergy, maxEnergyAmount).toString());
  };

  const handleCreateBuyEnergy = () => {
    if (
      parseFloat(energyAmount) > 0 &&
      parseFloat(energyAmount) <= Math.min(availableEnergy, maxEnergyAmount) &&
      parseFloat(rate) > 0 &&
      duration &&
      endDate
    ) {
      setIsModalOpen(true);
    } else {
      alert("Please fill in all fields correctly.");
    }
  };

  return (
    <>
      <Card className="w-full max-w-xl mx-auto">
        <CardHeader className="flex items-start justify-between">
          <div className="flex items-center space-x-2">
            <Button onClick={handleGoBack} variant="ghost" size="icon">
              <MemoArrowLeft className="h-6 w-6" />
            </Button>
            <CardTitle className="text-base font-[500]">
              Create a buy ad
            </CardTitle>
          </div>
          <div>
            <p className="text-sm text-gray-500">
              Create a buy ad for something something
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
                max={Math.min(availableEnergy, maxEnergyAmount)}
              />
              <Button
                variant="outline"
                className="rounded-lg absolute top-1.5 bg-[#F4F4F4] right-3 text-[#766153]"
                onClick={handleMaxEnergy}>
                Max
              </Button>
            </div>
            <p className="text-sm text-gray-500 mt-1">
              Available energy: {availableEnergy} kWh
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

          <div>
            <label
              htmlFor="duration"
              className="block text-sm font-medium text-gray-700 mb-1">
              Duration
            </label>
            <div className="flex space-x-2">
              <Select value={duration} onValueChange={setDuration}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select duration" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1day">1 day</SelectItem>
                  <SelectItem value="1week">1 week</SelectItem>
                  <SelectItem value="1month">1 month</SelectItem>
                </SelectContent>
              </Select>
              <Input
                type="text"
                value={endDate}
                placeholder="End date"
                className="flex-grow"
                readOnly
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Total Cost
            </label>
            <p className="text-2xl font-bold">{totalCost} ENRG</p>
          </div>

          <Button
            className="w-full bg-[#373D20] hover:bg-[#373D20] text-white"
            onClick={handleCreateBuyEnergy}>
            Buy energy
          </Button>
        </CardContent>
      </Card>
      <ApproveTransactionModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        energyAmount={parseFloat(energyAmount) || 0}
        totalCost={parseFloat(totalCost) || 0}
      />
    </>
  );
}
