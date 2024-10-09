"use client";
import { navItems } from "@/utils/data";
import Link from "next/link";
import Image from 'next/image';
import { usePathname } from "next/navigation";
import ProfileCard from "@/components/Dashboard/ProfileCard";
import MemoUser from "@/icons/User";
import { useAccount } from 'wagmi';
import { useState, useEffect } from 'react';
// import { Basenames } from "./basename";
import { getName, getAvatar } from '@coinbase/onchainkit/identity';
import { baseSepolia } from 'viem/chains';

const Sidebar = () => {
  const pathname = usePathname();
  const { address, isConnected } = useAccount();
  const [name, setName] = useState("");
  const [avatarUrl, setAvatarUrl] = useState("");

  async function fetchBasename(address: `0x${string}`) {
    const basename = await getName({ address, chain: baseSepolia });
    console.log(basename);
    if(basename) setName(basename);
  }

  async function fetchAvatar(name: string) {
    // @ts-ignore
    const baseAvatar = await getAvatar({ ensName: name, chain: baseSepolia });
    console.log(baseAvatar);
    if(baseAvatar) setAvatarUrl(baseAvatar)
  }

  useEffect(() => {
    if(isConnected && address) {
      fetchBasename(address as `0x${string}`);
    }
    if(name) {
      fetchAvatar(name);
    }
  }, [isConnected, address, name]);

  return (
    <div className="hidden border-r bg-muted/40 md:block">
      <div className="flex h-[100vh] max-h-screen flex-col gap-2">
        <div className="flex h-14 items-center border-b px-4 lg:h-[80px] lg:px-6">
          <Link href="/" className="">
            <div className="flex items-center space-x-2">
              <span className="text-xl font-[600] text-[#21250F]">
                EnergyChain
              </span>
            </div>
          </Link>
        </div>
        <div className="flex-1">
          <nav className="grid items-start px-2 py-6 text-base font-medium lg:px-4 gap-2">
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
        </div>
        <div className="p-4">
        {isConnected && (
          <ProfileCard
            // @ts-ignore
            name={name || `${address.slice(0, 6)}...${address.slice(-4)}`}
            walletAddress={address as string}
            profileImage={
              // @ts-ignore
              avatarUrl ? <Image src={avatarUrl} width={20} height={20} className="w-10 h-10 rounded-full object-cover" alt="baseAvatar"/> : <MemoUser className="w-10 h-10 rounded-full object-cover"/>
            }
          />
        )}           
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
