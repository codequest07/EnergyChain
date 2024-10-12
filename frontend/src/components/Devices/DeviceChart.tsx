"use client";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { AreaChart, XAxis, YAxis, CartesianGrid, Area } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "../ui/chart";
// import { AreaChart } from 'lucide-react'

const data = [
  { name: "Sun", value: 5000 },
  { name: "Mon", value: 2500 },
  { name: "Tue", value: 3000 },
  { name: "Wed", value: 2000 },
  { name: "Thurs", value: 3200 },
  { name: "Fri", value: 2000 },
  { name: "Sat", value: 3490 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
  // mobile: {
  //   label: "Mobile",
  //   color: "hsl(var(--chart-2))",
  // },
} satisfies ChartConfig;

const DeviceChart = () => {
  return (
    <div>
      <Card className="bg-white text-black mb-4">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Total energy production (KWH)
          </CardTitle>
          <div className="space-x-2">
            <Button variant="outline" size="sm" className="text-xs">
              7 days
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-xs text-muted-foreground">
              30 days
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-xs text-muted-foreground">
              90 days
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            54.6k{" "}
            <span className="text-xs font-normal text-green-500">↑ 24%</span>
          </div>
          <ChartContainer className="h-full" config={chartConfig}>
            {/* width="100%" height={200} */}
            <AreaChart
              accessibilityLayer
              data={data}
              margin={{
                left: -20,
                right: 12,
              }}>
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="name"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                tickFormatter={(value) => value.slice(0, 3)}
              />
              <YAxis
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                tickCount={3}
              />
              <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
              <Area
                dataKey="value"
                type="natural"
                fill="linear-gradient(180deg, rgba(55, 61, 32, 0.38) 17.5%, rgba(255, 255, 255, 0) 100%)"
                fillOpacity={0.4}
                stroke="hsla(72, 31%, 18%, 1)"
                stackId="a"
              />
            </AreaChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  );
};

export default DeviceChart;
