import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import MemoPencil from "@/icons/Pencil";
import { Badge } from "../ui/badge";

interface SolarPanelCardProps {
  panelName: string;
  surplusEnergy: number;
  energyBalance: number;
  ownerType: string;
  onEdit: () => void;
  onConnect: () => void;
  icon?: React.ReactNode;
}

export default function SolarPanelCard({
  panelName,
  surplusEnergy,
  energyBalance,
  ownerType,
  onEdit,
  onConnect,
  icon,
}: SolarPanelCardProps) {
  return (
    <div className="w-full max-w-sm">
      <Card className=" ">
        <CardHeader className="flex bg-[#EFF1ED] flex-row items-center justify-between pb-2">
          <CardTitle className="text-lg font-medium">{panelName}</CardTitle>
          <Button variant="ghost" size="icon" onClick={onEdit}>
            <MemoPencil className="h-5 w-5" />
          </Button>
        </CardHeader>
        <CardContent className="pt-3">
          <div className="space-y-4">
            <Badge className="text-xs flex space-x-1 rounded-xl items-center w-fit bg-[#FFF1F3] shadow-none hover:bg-[#FFF1F3]  text-[#C01048]">
              <p className="bg-[#F63D68] h-2 w-2 rounded-full" />{" "}
              <p> {surplusEnergy} kWh surplus</p>
            </Badge>
            <div>
              <p className="text-sm text-gray-500">Energy balance</p>
              <p className="text-3xl font-bold">
                {energyBalance.toLocaleString()}{" "}
                <span className="text-sm font-[400] text-[#575757]">kWh</span>
              </p>
            </div>
            <div className="flex items-center">
              {icon}
              <span className="text-sm text-green-500 font-medium">
                {ownerType}
              </span>
            </div>
          </div>
        </CardContent>
      </Card>
      <div className="my-4 pb-6">
        <Button
          variant="outline"
          className=" w-full border-dashed border-[#CD5334] text-[#CD5334] hover:bg-red-50"
          onClick={onConnect}>
          + Connect device
        </Button>
      </div>
    </div>
  );
}
