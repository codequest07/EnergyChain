import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import * as dotenv from "dotenv";
dotenv.config();

const config: HardhatUserConfig = {
  solidity: "0.8.24",
  networks: {
    // for testnet
    "scrollSepolia": {
      url: process.env.ALCHEMY_SCROLL_RPC_URL!,
      accounts: [process.env.ACCOUNT_PRIVATE_KEY!],
      gasPrice: 1000000000,
    },
  },
  etherscan: {
    apiKey: {
      "scroll-sepolia": "123",
    },
  },
  sourcify: {
    enabled: false,
  },
};

export default config;