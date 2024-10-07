"use client";
import { navItems } from "@/utils/data";
import Link from "next/link";

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className="hidden border-r bg-muted/40 md:block">
    <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <div className="flex items-center space-x-2">
              <Zap className="h-6 w-6 sm:h-5 sm:w-5 text-green-600" />
              <span className="text-xl  font-bold text-green-800">
                EnergyChain
              </span>
            </div>
          </Link>
        </div>
        <div className="flex-1">
        <nav className="grid items-start px-2 py-6  text-base font-medium lg:px-4">
            <Link
              href="/dashboard"
              className="flex items-center gap-3 rounded-lg px-3 py-4 text-primary transition-all hover:text-primary">
              <Home className="h-4 w-4" />
              Dashboard
            </Link>
            <Link
              href="/dashboard/marketplace"
              className="flex items-center gap-3 rounded-lg px-3 py-4 text-primary transition-all hover:text-primary">
              <ShoppingCart className="h-4 w-4" />
              Marketplace
            </Link>
            <Link
              href="/dashboard/sell"
              className="flex items-center gap-3 rounded-lg px-3 py-4 text-primary transition-all hover:text-primary">
              <Package className="h-4 w-4" />
              Products
            </Link>
            <Link
              href="/dashboard/buy"
              className="flex items-center gap-3 rounded-lg px-3 py-4 text-primary transition-all hover:text-primary">
              <Users className="h-4 w-4" />
              Customers
            </Link>
            <Link
              href="/dashboard/monitor"
              className="flex items-center gap-3 rounded-lg px-3 py-4 text-primary transition-all hover:text-primary">
              <LineChart className="h-4 w-4" />
              Monitoring
            </Link>
          </nav>
        </div>
    </div>
    </div>
  );
};

export default Sidebar;
