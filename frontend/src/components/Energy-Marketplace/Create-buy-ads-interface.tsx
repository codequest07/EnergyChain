"use client";

import { useState } from "react";
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

export default function CreateBuyAdInterface() {
  const [energyAmount, setEnergyAmount] = useState("");
  const [rate, setRate] = useState("546");
  const [duration, setDuration] = useState("");

  return (
    <Card className="w-full max-w-xl mx-auto">
      <CardHeader className="flex items-start justify-between">
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon">
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
              className=" h-12 outline-none rounded-lg focus:ring-0 focus-visible:ring-0"
            />
            <Button
              variant="outline"
              className="rounded-lg absolute top-1.5 bg-[#F4F4F4]  right-3 text-[#766153]">
              Max
            </Button>
          </div>
          <p className="text-sm text-gray-500 mt-1">
            Available energy: 350 kWh
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
              placeholder="23 Sept, 2024 - 10:32 AM"
              className="flex-grow"
              readOnly
            />
          </div>
        </div>

        <Button className="w-full bg-[#373D20] hover:bg-[#373D20] text-white">
          Buy energy
        </Button>
      </CardContent>
    </Card>
  );
}
