"use client";
import { Statistics } from "@/utils/data";
import ProsumerScoreCard from "./cards/ProsumerScoreCard";
import StatisticCard from "./cards/StatisticCard";
import EnergyMetrics from "./Energy-metrics";
import { TotalEnergyChart } from "./TotalEnergyChart";
import { MarketplaceActivity } from "./MarketplaceActivity";
import { Assets } from "./Assets";
const DashMain = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex gap-4 p-4 md:p-8 pt-6">
        <ProsumerScoreCard />
        <TotalEnergyChart />
      </div>
      <div className="grid sm:grid-cols-4 grid-cols-1 gap-3 p-4">
        {Statistics.map((data, index) => (
          <StatisticCard
            key={index}
            icon={data.icon}
            title={data.title}
            value={data.value}
            unit={data.unit}
            extra={data.extra}
            bgColor={data.bgColor}
            textColor={data.textColor}
          />
        ))}
      </div>
      <div className="p-4">
        <EnergyMetrics />
      </div>
      {/* max-w-7xl mx-auto */}
      <div className=" p-4">
         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
           <MarketplaceActivity />
           <Assets />
         </div>
       </div>
    </div>
  );
};

export default DashMain;
