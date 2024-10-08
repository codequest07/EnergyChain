"use client";
import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import Link from "next/link";
import { navItems } from "@/utils/data";
import { usePathname } from "next/navigation";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Image from "next/image";
import { icon_metamask_wallet, icon_trust_wallet, icon_wallet } from "@/icons";
import { useAccount } from "wagmi";
import { Basenames } from "./basename";

const Header = () => {
  const pathname = usePathname();
  const { isConnected, address } = useAccount();
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
                }`}
              >
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

        <div className="flex items-center space-x-3">
          <p className="text-sm text-[#575757] font-[400]">Your location</p>
          <div className="flex items-center space-x-2">
            <p className="font-[500]">Awka, Anambra</p>
          </div>
          {/* <ConnectButton />
          {isConnected ? (
            <Basenames address={address} />
          ) : (
            <Button
              variant={"outline"}
              className="flex items-center font-medium p-4 gap-4"
            >
              <span className="text-[16px]">Connect your wallet</span>
              <span className="flex items-center gap-2">
                <Image src={icon_wallet} alt="wallet icon" />
                <Image src={icon_trust_wallet} alt="trust wallet icon" />
                <Image src={icon_metamask_wallet} alt="metamask wallet icon" />
              </span>
            </Button>
          )} */}
        </div>
      </div>
    </header>
  );
};

export default Header;
