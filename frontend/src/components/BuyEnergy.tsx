import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Activity, DollarSign, Download, Zap, ArrowUpDown } from "lucide-react";

const BuyEnergy = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Buy</h2>
          <div className="flex items-center space-x-2">
            <Button className="hidden sm:flex">
              <Download className="mr-2 h-4 w-4" />
              Download Report
            </Button>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Buy Energy</CardTitle>
              <CardDescription>
                Purchase energy from the marketplace
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form>
                <div className="grid w-full items-center gap-4">
                  <div className="flex flex-col space-y-1.5">
                    <Input
                      id="amount"
                      placeholder="Amount of energy to buy (kWh)"
                    />
                  </div>
                  <Button>Buy Energy</Button>
                </div>
              </form>
            </CardContent>
          </Card>
          {/* <Card>
            <CardHeader>
              <CardTitle>Sell Energy</CardTitle>
              <CardDescription>
                Sell your excess energy to the marketplace
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form>
                <div className="grid w-full items-center gap-4">
                  <div className="flex flex-col space-y-1.5">
                    <Input
                      id="amount"
                      placeholder="Amount of energy to sell (kWh)"
                    />
                  </div>
                  <Button>Sell Energy</Button>
                </div>
              </form>
            </CardContent>
          </Card> */}
        </div>
      </div>
    </div>
  );
};

export default BuyEnergy;
