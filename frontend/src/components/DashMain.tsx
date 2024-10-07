"use client";
import { Statistics } from "@/utils/data";
import ProsumerScoreCard from "./cards/ProsumerScoreCard";
import StatisticCard from "./cards/StatisticCard";
import EnergyMetrics from "./Energy-metrics";
const DashMain = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className=" p-4 md:p-8 pt-6">
        <ProsumerScoreCard />
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
    </div>
  );
};

export default DashMain;
