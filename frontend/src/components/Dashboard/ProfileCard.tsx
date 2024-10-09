"use client";

import MemoCopy from "@/icons/Copy";
import React from "react";

import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/hooks/use-toast";

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

  const handleCopy = () => {
    navigator.clipboard.writeText(walletAddress).then(() => {
      toast({
        title: "Copied!",
        description: `${walletAddress} has been copied to your clipboard.`,
        action: <ToastAction altText="Undo">Undo</ToastAction>,
      });
    });
  };

  return (
    <div className="flex items-center space-x-3 p-2">
      {/* Profile Image */}
      {profileImage}

      {/* Name and Wallet Address */}
      <div className="flex flex-col">
        <span className="font-[500] text-[#21250F]">{name}</span>
        <span className="text-sm text-[#575757]">{walletAddress.slice(0, 6)}...{walletAddress.slice(-4)}</span>
      </div>

      {/* Copy Icon */}
      <button
        onClick={handleCopy}
        className="ml-2 text-gray-400 hover:text-gray-600">
        <MemoCopy className="w-4 h-4" />
      </button>
    </div>
  );
};

export default ProfileCard;
