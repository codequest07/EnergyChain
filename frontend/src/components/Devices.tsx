"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { XAxis, YAxis, ResponsiveContainer, AreaChart, Area } from "recharts";
import DeviceChart from "./Devices/DeviceChart";
import ProsumerScoreCard from "./Dashboard/ProsumerScoreCard";
import MetricCard from "./Dashboard/MetricCard";
import { metricsData, totalEnergyProduced } from "@/utils/data";
import SolarPanelCard from "./Devices/Solar-panel-card";
import MemoHouseIcon from "@/icons/HouseIcon";
import MainDashHeader from "./Dashboard/MainDashHeader";

const data = [
  { name: "Sun", value: 4000 },
  { name: "Mon", value: 3000 },
  { name: "Tue", value: 2000 },
  { name: "Wed", value: 2780 },
  { name: "Thurs", value: 1890 },
  { name: "Fri", value: 2390 },
  { name: "Sat", value: 3490 },
];

export default function Devices() {
  return (
    <>
      <MainDashHeader />
      <div className="bg-white text-white min-h-screen p-8">
        <SolarPanelCard
          panelName="Solar Panel 1"
          surplusEnergy={150}
          energyBalance={54758.08}
          ownerType="Home owner"
          onEdit={() => console.log("Edit clicked")}
          onConnect={() => console.log("Connect clicked")}
          icon={<MemoHouseIcon className="w-7 h-7 mr-2" />}
        />
        <div>
          <DeviceChart />
        </div>

        <Card className="w-full ">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-base font-[500] text-[#575757]">
              24h Energy metrics
            </CardTitle>
            <div className="mt-6 text-base font-[600] text-muted-foreground">
              {totalEnergyProduced.toLocaleString()}{" "}
              <span className="font-[400] text-sm">
                kWh total energy produced
              </span>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
              {metricsData.map((metric, index) => (
                <MetricCard key={index} {...metric} />
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="flex my-5 items-center space-x-4">
          <ProsumerScoreCard className="mt-[1.5rem]" />
          <Card className="bg-white w-full text-black">
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
                <span className="text-xs font-normal text-green-500">
                  ↑ 24%
                </span>
              </div>
              <ResponsiveContainer width="100%" height={200}>
                <AreaChart data={data}>
                  <XAxis
                    dataKey="name"
                    stroke="#888888"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                  />
                  <YAxis
                    stroke="#888888"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                    tickFormatter={(value) => `${value}`}
                  />
                  <Area
                    dataKey="value"
                    type="natural"
                    fill="linear-gradient(180deg, rgba(55, 61, 32, 0.38) 17.5%, rgba(255, 255, 255, 0) 100%)"
                    fillOpacity={0.4}
                    stroke="hsla(72, 31%, 18%, 1)"
                    stackId="a"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
