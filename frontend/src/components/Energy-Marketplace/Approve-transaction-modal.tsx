"use client";

import { useState } from "react";
import { X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import MemoApprovalIcon from "@/icons/ApprovalIcon";

interface ApproveTransactionModalProps {
  isOpen: boolean;
  onClose: () => void;
  energyAmount: number;
  totalCost: number;
}

export function ApproveTransactionModal({
  isOpen,
  onClose,
  energyAmount,
  totalCost,
}: ApproveTransactionModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[430px]">
        <DialogHeader>
          <DialogTitle className="flex justify-between items-center">
            Approve transaction
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="h-6 w-6" />
            </Button>
          </DialogTitle>
        </DialogHeader>
        <div className="text-center">
          <div className="flex items-center justify-center">
            <MemoApprovalIcon className="w-28 h-28" />
          </div>
          <h2 className="text-xl font-semibold mb-2">
            Buying {energyAmount.toLocaleString()} KWH for{" "}
            {totalCost.toLocaleString()} ENRG
          </h2>
          <p className="text-sm text-gray-500">
            You'll need to review and sign the smart contract in your wallet to
            proceed with this transaction
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
