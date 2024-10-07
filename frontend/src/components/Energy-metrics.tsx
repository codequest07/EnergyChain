"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const CircularProgressBar = ({
  percentage,
  color,
}: {
  percentage: number;
  color: string;
}) => (
  <div className="relative w-16 h-16">
    <svg className="w-full h-full" viewBox="0 0 100 100">
      <circle
        className="text-gray-200 stroke-current"
        strokeWidth="10"
        cx="50"
        cy="50"
        r="40"
        fill="transparent"></circle>
      <circle
        className={`stroke-current ${color}`}
        strokeWidth="10"
        strokeLinecap="round"
        cx="50"
        cy="50"
        r="40"
        fill="transparent"
        strokeDasharray={`${percentage * 2.51327} 251.327`}
        transform="rotate(-90 50 50)"></circle>
    </svg>
    <span className="absolute inset-0 flex items-center justify-center text-sm font-medium">
      {percentage}%
    </span>
  </div>
);

const MetricCard = ({
  title,
  value,
  percentage,
  color,
}: {
  title: string;
  value: number;
  percentage: number;
  color: string;
}) => (
  <div>
    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
      <CardTitle className="text-sm font-[400] text-[#808080]">
        {title}
      </CardTitle>
      <CircularProgressBar percentage={percentage} color={color} />
    </CardHeader>
    <CardContent>
      <div className="text-2xl font-bold">{value.toLocaleString()}</div>
      <p className="text-xs text-muted-foreground">kWh</p>
    </CardContent>
  </div>
);

export default function EnergyMetrics() {
  const [selectedPanel, setSelectedPanel] = useState("Solar panel 1");
  const totalEnergyProduced = 54758.08;

  const metrics = [
    {
      title: "Energy in use (locally)",
      value: 50746,
      percentage: 20,
      color: "text-green-500",
    },
    {
      title: "Energy in surplus",
      value: 50746,
      percentage: 10,
      color: "text-orange-500",
    },
    {
      title: "Energy sold",
      value: 50746,
      percentage: 70,
      color: "text-blue-500",
    },
    { title: "Energy bought", value: 0, percentage: 0, color: "text-pink-500" },
  ];

  return (
    <Card className="w-full ">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-[500] text-[#575757]">
          24h Energy metrics
        </CardTitle>
        <Select value={selectedPanel} onValueChange={setSelectedPanel}>
          <SelectTrigger className="w-[180px] focus:ring-0 focus-visible:ring-0 border-none shadow-none">
            <SelectValue placeholder="Select a solar panel" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Solar panel 1">Solar panel 1</SelectItem>
            <SelectItem value="Solar panel 2">Solar panel 2</SelectItem>
            <SelectItem value="Solar panel 3">Solar panel 3</SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {metrics.map((metric, index) => (
            <MetricCard key={index} {...metric} />
          ))}
        </div>
        <div className="mt-6 text-base font-[600] text-muted-foreground">
          {totalEnergyProduced.toLocaleString()}{" "}
          <span className="font-[400] text-sm">kWh total energy produced</span>
        </div>
      </CardContent>
    </Card>
  );
}
