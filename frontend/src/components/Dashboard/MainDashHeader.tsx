"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function MainDashHeader() {
  const router = useRouter();

  const handleEnergyButtonClick = (tab: string) => {
    console.log(`Clicking ${tab} energy button`);
    router.push(`/dashboard/marketplace/?tab=${tab}`);
  };

  return (
    <header className="p-4">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
        <div className="mb-4 sm:mb-0 text-center sm:text-left">
          <h1 className="text-sm font-[500] text-[#575757]">Hey Nwamaka,</h1>
          <p className="text-[#21250F] text-base">
            Today is a good day to save the world
          </p>
        </div>

        <div className="flex space-x-3">
          <Button
            variant="outline"
            className="bg-[#EFF1ED] text-[#766153] hover:bg-[#373D20] hover:text-[#FFFFFF] transition-colors duration-300 ease-in-out"
            onClick={() => handleEnergyButtonClick("buy")}>
            Buy energy
          </Button>
          <Button
            className="bg-[#373D20] text-[#FFFFFF] hover:bg-[#EFF1ED] hover:text-[#766153] transition-colors duration-300 ease-in-out"
            onClick={() => handleEnergyButtonClick("sell")}>
            Sell energy
          </Button>
        </div>
      </div>
    </header>
  );
}
