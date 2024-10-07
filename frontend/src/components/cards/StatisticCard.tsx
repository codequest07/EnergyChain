"use client";

import { Button } from "../ui/button";

interface StatisticCardProps {
  icon: React.ElementType;
  title: string;
  value: string | number;
  unit?: string;
  extra?: string;
  bgColor: string;
  textColor?: string;
}

const StatisticCard: React.FC<StatisticCardProps> = ({
  icon: Icon,
  title,
  value,
  unit,
  extra,
  bgColor,
  textColor,
}) => {
  return (
    <div
      style={{ backgroundColor: bgColor }}
      className={`rounded-lg shadow-lg p-6 flex flex-col justify-between `}>
      <div className="flex items-center justify-between gap-3">
        {/* Render the icon component */}
        <Icon className="w-8 h-8 " />
        {extra && (
          <Button
            style={{ color: textColor }}
            className="bg-transparent focus:ring-0 focus-visible:ring-0 hover:bg-transparent shadow-none text-sm text-right">
            {extra}
          </Button>
        )}
      </div>
      <div className="mt-4">
        <div className="font-[400] text-[#808080] text-sm">{title}</div>
        <div className="mt-3">
          <span className="text-xl font-[600]">{value}</span>
          <span className="text-xs text-[#575757] ml-1">{unit}</span>
        </div>
      </div>
    </div>
  );
};

export default StatisticCard;
