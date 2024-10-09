import { DashboardLayout } from "@/components/Dashboard";
import SellEnergyInterface from "@/components/Energy-Marketplace/Sell-energy-interface";

const page = () => {
  return (
    <DashboardLayout>
      <SellEnergyInterface />
    </DashboardLayout>
  );
};

export default page;
