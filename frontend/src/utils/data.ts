import MemoAccount from "@/icons/Account";
import MemoBulb from "@/icons/Bulb";
import MemoBulb2 from "@/icons/Bulb2";
import MemoDashboard from "@/icons/Dashboard";
import MemoDevices from "@/icons/Devices";
import MemoListing from "@/icons/Listing";
import MemoMarketplace from "@/icons/Marketplace";
import MemoPerformance from "@/icons/Performance";
import MemoPlug from "@/icons/Plug";
import MemoWallet from "@/icons/Wallet";

export const navItems = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: MemoDashboard,
  },
  {
    name: "Devices",
    href: "/dashboard/devices",
    icon: MemoDevices,
  },
  {
    name: "Wallet",
    href: "/dashboard/wallet",
    icon: MemoWallet,
  },
  {
    name: "Marketplace",
    href: "/dashboard/marketplace",
    icon: MemoMarketplace,
  },
  {
    name: "My listing",
    href: "/dashboard/listing",
    icon: MemoListing,
  },
  {
    name: "Account information",
    href: "/dashboard/account",
    icon: MemoAccount,
  },
];

export const Statistics = [
  {
    icon: MemoPlug,
    title: "Active panels",
    value: 3,
    unit: "out of 5",
    extra: "+ Add panel",
    bgColor: "#FFEFEB",
    textColor: "#CD5334",
  },
  {
    icon: MemoBulb,
    title: "Energy generated",
    value: "54,6893",
    unit: "KWH",
    bgColor: "#E6F6E4",
  },
  {
    icon: MemoPerformance,
    title: "Performance",
    value: "99.9%",
    bgColor: "#EBE7F5",
  },
  {
    icon: MemoBulb2,
    title: "My contribution",
    value: "56%",
    extra: "Anambra",
    unit: "of energy shared",
    bgColor: "#EAF0FB",
    textColor: "#21250F",
  },
];
