import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";

interface SellEnergyCardProps {
  id: number;
  savings: number;
  rating: number;
  price: string;
  distance: number;
  quantity: number;
  limit: {
    min: number;
    max: number;
  };
  type: string;
  icon: React.ReactNode;
  expires: string;
}

const SellEnergyCard: React.FC<SellEnergyCardProps> = ({
  savings,
  price,
  distance,
  quantity,
  type,
  icon,
  expires,
}) => (
  <Card className="sm:w-full">
    <CardHeader className="pb-2">
      <div className="flex items-center ">
        {icon && <span className="mr-1">{icon}</span>}
        <span className="ml-1 text-xs text-[#808080]">{type}</span>
      </div>
      <div className="flex ">
        <Badge className="text-xs bg-[#ECFDF3] my-1 shadow-none hover:bg-[#ECFDF3] text-[#027A48]">
          Saves {savings}% on carbon
        </Badge>
      </div>
    </CardHeader>
    <CardContent>
      <h3 className="text-2xl font-[600] mt-2">
        {price}{" "}
        <span className="text-sm font-normal text-muted-foreground">/kWh</span>
      </h3>
      <p className="text-xs text-muted-foreground mt-5">
        {distance} km away • QTY:{" "}
        <span className="font-[500] text-[#21250F]"> {quantity} kWh</span>
      </p>
      <p className="text-xs text-muted-foreground mt-5">
        Expires <span className="font-[500] text-[#21250F]">{expires}kWh</span>
      </p>
    </CardContent>
    <CardFooter>
      <Button className="p-0 bg-transparent hover:bg-transparent text-[#CD5334] shadow-none border-none">
        Sell energy
      </Button>
    </CardFooter>
  </Card>
);

export default SellEnergyCard;
