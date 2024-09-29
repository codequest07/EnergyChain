import { DashboardLayout } from "@/components/Dashboard";
import EnergyMonitoring from "@/components/Energy-monitoring";

const page = () => {
  return (
    <DashboardLayout>
      <EnergyMonitoring />
    </DashboardLayout>
  );
};

export default page;
