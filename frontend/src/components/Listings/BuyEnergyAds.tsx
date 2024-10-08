import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";

interface EnergyCardProps {
  id: number;
  savings: number;
  price: string;
  bought: string;
  expires: string;
  onViewDetails: () => void;
}

const BuyEnergyAds: React.FC<EnergyCardProps> = ({
  savings,
  price,
  bought,
  expires,
  onViewDetails,
}) => (
  <Card className="sm:w-full">
    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
      <div className="flex items-center space-x-2">
        <Badge className="text-xs bg-[#ECFDF3] shadow-none hover:bg-[#ECFDF3]  text-[#027A48]">
          Saves {savings}% on carbon
        </Badge>
      </div>
    </CardHeader>
    <CardContent>
      <h3 className="text-2xl font-[600] mt-2">
        {price}{" "}
        <span className="text-sm font-normal text-muted-foreground">/kWh</span>
      </h3>
      <p className="text-xs text-muted-foreground mt-5">Bought: {bought}</p>
      <p className="text-xs text-muted-foreground mt-5">Expires: {expires}</p>
    </CardContent>
    <CardFooter className="flex space-x-4">
      <Button
        onClick={onViewDetails}
        className=" p-0 bg-transparent hover:bg-transparent text-[#344054] shadow-none border-none ">
        View details
      </Button>
      <Button className=" p-0 bg-transparent hover:bg-transparent text-[#CD5334] shadow-none border-none ">
        Delist
      </Button>
    </CardFooter>
  </Card>
);

export default BuyEnergyAds;
