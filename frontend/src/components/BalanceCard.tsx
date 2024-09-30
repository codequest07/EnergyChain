import { DollarSign } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const BalanceCard = () => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Token Balance</CardTitle>
        <DollarSign className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">500 ENRG</div>
        <p className="text-xs text-muted-foreground">1 ENRG ≈ 1 kWh</p>
      </CardContent>
    </Card>
  );
};

export default BalanceCard;
