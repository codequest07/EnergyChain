import * as React from "react";
import { Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { X } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import MemoTransactionIcon from "@/icons/TransactionIcon";
import { Badge } from "../ui/badge";

interface OrderEntry {
  date: string;
  amount: number;
  price: number;
}

const orderHistory: OrderEntry[] = [
  { date: "25 Sept, 2024", amount: 567.9, price: 567.9 },
  { date: "25 Sept, 2024", amount: 567.9, price: 567.9 },
  { date: "25 Sept, 2024", amount: 567.9, price: 567.9 },
  { date: "25 Sept, 2024", amount: 567.9, price: 567.9 },
  { date: "25 Sept, 2024", amount: 567.9, price: 567.9 },
  { date: "25 Sept, 2024", amount: 567.9, price: 567.9 },
  { date: "25 Sept, 2024", amount: 567.9, price: 567.9 },
  { date: "25 Sept, 2024", amount: 567.9, price: 567.9 },
  { date: "25 Sept, 2024", amount: 567.9, price: 567.9 },
];

interface DrawerDemoProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

export function DrawerDemo({ isOpen, setIsOpen }: DrawerDemoProps) {
  return (
    <Drawer open={isOpen} onOpenChange={setIsOpen}>
      <DrawerContent>
        <div className="mx-auto w-full h-full">
          <DrawerHeader className="flex items-center justify-between">
            <DrawerTitle> Ad details</DrawerTitle>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}>
              <X className="h-4 w-4" />
            </Button>
          </DrawerHeader>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h2 className="text-3xl font-bold">
              567 ENRG{" "}
              <span className="text-sm font-normal text-gray-500">/kWh</span>
            </h2>
            <div className="flex justify-between items-center mt-2 p-3">
              <Badge className="text-xs bg-[#ECFDF3] shadow-none hover:bg-[#ECFDF3]  text-[#027A48]">
                Saves 10% on carbon
              </Badge>
              <p className="text-sm text-[#808080]">
                Expires:{" "}
                <span className="text-[#21250F] font-[600] text-xs">
                  30D : 24H : 10M
                </span>
              </p>
            </div>
            <div className="mt-4">
              <div className="flex justify-between text-sm mb-1 ">
                <span>1000 kWh bought</span>
                <span>10,000 kWh</span>
              </div>
              <Progress value={20} className="h-2 " />
            </div>
          </div>
          <div className="p-3">
            <h3 className="font-semibold mb-2">Order history</h3>
            {/* Scrollable container for order history */}
            <div className="max-h-[25rem] overflow-y-auto">
              {orderHistory.map((order, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center text-sm">
                  <div className="flex space-x-2 my-1 items-center">
                    <MemoTransactionIcon className="h-9 w-9 text-green-500" />
                    <div>
                      <p>Bought {order.amount.toFixed(2)} KWH</p>
                      <p className="text-gray-500">1 KWH = 2.89 KWH</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p>-{order.price.toFixed(2)} ENRG</p>
                    <p className="text-gray-500">≈ $356.00</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <DrawerFooter>
            <div className="flex justify-end space-x-2 mt-1 mb-0">
              <Button
                variant="outline"
                className="bg-[#FEF3F2]"
                onClick={() => setIsOpen(false)}>
                Cancel
              </Button>
              <Button className="bg-[#D92D20]" variant="destructive">
                Delist
              </Button>
            </div>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
