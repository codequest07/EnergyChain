"use client";

import React, { useEffect, useState } from "react";
import MemoCopy from "@/icons/Copy";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/hooks/use-toast";
import { useAccountModal } from "@rainbow-me/rainbowkit";

interface ProfileCardProps {
  name: string;
  walletAddress: string;
  profileImage: any;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  name,
  walletAddress,
  profileImage,
}) => {
  const { toast } = useToast();
  const [mounted, setMounted] = useState(false);
  const { openAccountModal } = useAccountModal();

  // Ensure component is mounted before rendering to prevent hydration errors
  useEffect(() => {
    setMounted(true);
  }, []);

  // Handle copy functionality only on the client side
  const handleCopy = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(walletAddress).then(() => {
        toast({
          title: "Copied!",
          description: `${walletAddress} has been copied to your clipboard.`,
          action: <ToastAction altText="Undo">Undo</ToastAction>,
        });
      });
    }
  };

  // Return null while waiting for the component to mount on the client
  if (!mounted) {
    return null;
  }

  return (
    <div className="flex items-center space-x-3 p-2 w-full" onClick={openAccountModal ? () => openAccountModal() : () => {}}>
      {/* Profile Image */}
      {profileImage}

      {/* Name and Wallet Address */}
      <div className="flex flex-col w-3/5 cursor-pointer" onClick={openAccountModal ? () => openAccountModal() : () => {}}>
        <span className="font-[500] truncate text-[#21250F]">{name}</span>
        <span className="text-sm truncate text-[#575757]">
          {walletAddress.slice(0, 6)}...{walletAddress.slice(-4)}
        </span>
      </div>

      {/* Copy Icon */}
      <button
        onClick={handleCopy}
        className="ml-1 text-gray-400 hover:text-gray-600">
        <MemoCopy className="w-4 h-4" />
      </button>
    </div>
  );
};

export default ProfileCard;
