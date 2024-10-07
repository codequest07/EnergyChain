"use client";
import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";import Link from "next/link";
import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Input } from "./ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import CustomConnectButton from "./CustomConnectButton";

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
    <div className="w-full flex-1">
        <form>
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search products..."
              className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
            />
          </div>
        </div>

    <div className="ml-auto flex items-center space-x-4">
        <CustomConnectButton />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="relative h-8 w-8 rounded-full">
              <Bell className="h-5 w-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Notifications</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>New energy offer available</DropdownMenuItem>
            <DropdownMenuItem>Your energy sale was completed</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Dashboard</DropdownMenuItem>
            <DropdownMenuItem>Analytics</DropdownMenuItem>
            <DropdownMenuItem>Trading</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default Header;
