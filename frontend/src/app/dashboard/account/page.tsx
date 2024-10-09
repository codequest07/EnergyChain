import { DashboardLayout } from "@/components/Dashboard";
import CreateBuyAdInterface from "@/components/Energy-Marketplace/Create-buy-ads-interface";
import SellEnergyInterface from "@/components/Energy-Marketplace/Sell-energy-interface";

const page = () => {
  return (
    <DashboardLayout>
      <SellEnergyInterface />
      <CreateBuyAdInterface />
    </DashboardLayout>
  );
};

export default page;
