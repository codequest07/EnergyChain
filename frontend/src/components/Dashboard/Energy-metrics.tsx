"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { metrics } from "@/utils/data";
import MetricCard from "./MetricCard";

export default function EnergyMetrics() {
  const totalEnergyProduced = 54758.08;

  return (
    <Card className="w-full ">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-[500] text-[#575757]">
          24h Energy metrics
        </CardTitle>
        <div className="mt-6 text-base font-[600] text-muted-foreground">
          {totalEnergyProduced.toLocaleString()}{" "}
          <span className="font-[400] text-sm">kWh total energy produced</span>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          {metrics.map((metric, index) => (
            <MetricCard key={index} {...metric} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
