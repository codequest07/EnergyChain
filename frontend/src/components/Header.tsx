"use client";
import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import Link from "next/link";
import { navItems } from "@/utils/data";
import { usePathname } from "next/navigation";
import MemoGps from "@/icons/Gps";

const Header = () => {
  const pathname = usePathname();
  return (
    <header className="flex h-14 items-center gap-4 border-b bg-[#FBFBFB] px-4 lg:h-[80px] lg:px-6">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="flex flex-col">
          <nav className="grid gap-2 text-lg font-medium">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center gap-3 rounded-lg px-3 py-4 transition-all ${
                  pathname === item.href
                    ? "bg-[#EFF1ED] text-[#766153]" // Active state styling
                    : "text-[#575757] hover:bg-[#EFF1ED]" // Default state styling
                }`}>
                {/* Apply conditional color to the icon */}
                <item.icon
                  className={`h-5 w-5 ${
                    pathname === item.href
                      ? "text-[#766153]"
                      : "text-[##575757]"
                  }`}
                />
                {item.name}
              </Link>
            ))}
          </nav>
        </SheetContent>
      </Sheet>

      <div className="sm:container sm:mx-auto flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
        <div className="flex items-center space-x-8">
          <div>
            <p className="text-sm text-[#575757] font-[400]">Your location</p>
            <div className="flex items-center space-x-2">
              <MemoGps className="h-5 w-5 text-[#373D20]" />
              <p className="font-[500]">Awka, Anambra</p>
            </div>
          </div>
          <div className="bg-[#FFF1F3] text-[#C01048] hidden sm:flex items-center space-x-2 px-3 py-1.5 rounded-md text-sm font-[500]">
            <p className="bg-[#F63D68] h-2 w-2 rounded-full" />{" "}
            <p>You have 3.5KWH energy in surplus</p>
          </div>
        </div>

        <div className="hidden sm:flex space-x-2">
          <Button
            variant="outline"
            className="bg-[#EFF1ED] text-[#766153] hover:bg-[#373D20] hover:text-[#FFFFFF] transition-colors duration-300 ease-in-out">
            Buy energy
          </Button>
          <Button className="bg-[#373D20] text-[#FFFFFF] hover:bg-[#EFF1ED] hover:text-[#766153] transition-colors duration-300 ease-in-out">
            Sell energy
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
