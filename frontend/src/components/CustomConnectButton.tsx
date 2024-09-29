import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Button } from "./ui/button";
import { Wallet } from "lucide-react";

export default function CustomConnectButton() {
  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        authenticationStatus,
        mounted,
      }) => {
        const ready = mounted && authenticationStatus !== "loading";
        const connected =
          ready &&
          account &&
          chain &&
          (!authenticationStatus || authenticationStatus === "authenticated");

        if (!ready) {
          return null;
        }

        if (!connected) {
          return (
            <button
              onClick={openConnectModal}
              type="button"
              className="bg-[#131313B2] text-white py-2 px-5 rounded-lg">
              Connect Wallet
            </button>
          );
        }

        if (chain.unsupported) {
          return (
            <button onClick={openChainModal} type="button">
              Wrong network
            </button>
          );
        }

        return (
          <Button
            onClick={openAccountModal}
            type="button"
            style={{
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
            }}
            variant="outline"
            className="hidden sm:flex">
            <Wallet className="mr-2 h-4 w-4" />
            <p>
              {account.address.slice(0, 6)}...{account.address.slice(-4)}
            </p>
          </Button>
        );
      }}
    </ConnectButton.Custom>
  );
}
