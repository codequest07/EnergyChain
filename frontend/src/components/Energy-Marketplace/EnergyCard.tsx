import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Star } from "lucide-react";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import MemoStar from "@/icons/Star";

interface EnergyCardProps {
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
}

const EnergyCard: React.FC<EnergyCardProps> = ({
  savings,
  rating,
  price,
  distance,
  quantity,
  limit,
}) => (
  <Card className="sm:w-full">
    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
      <div className="flex items-center space-x-2">
        <Badge className="text-xs bg-[#ECFDF3] shadow-none hover:bg-[#ECFDF3]  text-[#027A48]">
          Saves {savings}% on carbon
        </Badge>
      </div>
      <div className="flex items-center">
        <MemoStar className="h-4 w-4 text-yellow-400 fill-current" />
        <span className="ml-1 text-xs text-[#808080]">{rating}</span>
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
        Limit:{" "}
        <span className="font-[500] text-[#21250F]">
          {limit.min}-{limit.max}kWh
        </span>
      </p>
    </CardContent>
    <CardFooter>
      <Button className=" p-0 bg-transparent hover:bg-transparent text-[#CD5334] shadow-none border-none ">
        Buy energy
      </Button>
    </CardFooter>
  </Card>
);

export default EnergyCard;
