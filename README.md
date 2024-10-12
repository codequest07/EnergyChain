# Energy Chain: Decentralized Energy Marketplace DApp on Base Sepolia

## Problem we aim to solve!

Our inspiration stems from the pressing issue of insufficient power supply in Africa. Energy access remains a major challenge across the continent, and this platform was conceived to address that gap. By decentralizing power supply, we aim to empower renewable energy producers and power plant operators to safely and efficiently extend energy access to those in need. Our goal is to create a more sustainable, reliable, and equitable energy system that benefits both producers and consumers, contributing to the continent's growth and development.

Check out our pitch deck here: https://drive.google.com/file/d/1DEHKmNRdKCEFtiYoxM8zxI__cjb_IBHK/view?usp=sharing

check out our live demo vide here: --- demo video here


## Project Overview

The **Decentralized Energy Marketplace** aims to revolutionize energy trading by creating a transparent, efficient, and user-friendly platform for energy producers and consumers. This innovative project will leverage blockchain technology to establish a single smart contract where energy producers can list their available energy credits, allowing for seamless and transparent transactions. The platform is built on the **Base network**, leveraging its scalability and efficiency for energy transactions provided by the **ALCHEMY RPC-URL**

Deployed Smart contract on Base Sepolia Testnet: https://sepolia.basescan.org/address/0x3335BaEEDdD1Cc77B8Ab9acBF862764812337a3F
https://sepolia.basescan.org/address/0x9f3eB17a20a4E57Ed126F34061b0E40dF3a4f5C2

Live Link to interact: --live link here


### Objectives

1. Facilitate peer-to-peer energy trading
2. Promote sustainable energy usage
3. Create a user-friendly interface for energy transactions
4. Ensure secure and transparent energy trading using blockchain technology
5. Build a community-driven marketplace for renewable energy

**Key Features:**

1. **Decentralized Energy Trading**: The platform facilitates a decentralized marketplace where energy producers can easily showcase their available energy credits, enabling direct trading with consumers.

2. **On-Chain Tracking**: All transactions related to energy trades and transfers are recorded on-chain, ensuring transparency and traceability of energy credits. This feature enhances trust among participants and simplifies regulatory compliance.

3. **Micro-Transactions Support**: By utilizing Base’s low transaction fees, the marketplace will support micro-transactions, making it feasible for consumers to purchase small amounts of energy credits without incurring prohibitive costs.

4. **Tokenization of Energy Credits**: Upon purchasing energy credits, buyers receive transferable tokens that represent their credits. These tokens are securely stored in their wallets, enabling easy transfers and trades within the marketplace.

5. **Usage and Balance Tracking**: The platform will provide users with intuitive tools to monitor their available energy credits and usage in real-time, promoting informed decision-making and efficient energy management.

## UX Features

- User-friendly dashboard for energy trading
- Real-time energy listings
- Secure blockchain-based transactions
- Community-driven marketplace
- Integration with Rainbow Kit for easy wallet connection


## Technologies Used

- Frontend: Next.js, Typescript, Wagmi, Ethers.js
- Styling: Tailwind CSS
- Smart Contracts: Solidity
- Development Environment: Hardhat
- Blockchain Network: Base (Testnet)
- RPC Provider: Alchemy
- Deployment: Hardhat Ignition

## Project Structure

The project is divided into two main directories:

1. `frontend`: Contains the frontend React application
2. `smart-contracts`: Contains the smart contract and related files

```
.
├── frontend/
│ ├── src/
│ │ ├── app/
│ │ ├── components/
│ │ ├── lib/
│ │ └── ...
│ ├── package.json
│ └── tailwind.config.ts
├── smart-contracts/
│ ├── contracts/
│ │ └── Energy.sol
│ │ └── ICAR.sol
│ ├── hardhat.config.ts
│ └── package.json
└── README.md
```

## Smart Contracts

The project uses a custom ERC20 token called ICAR (Icar Token) for energy trading. The smart contract is located in `smart-contracts/contracts/ICAR.sol`.

## Setup and Installation

### Prerequisites

- Node.js (v14 or later)
- npm or yarn
- Git

### Clone the Repository

```bash
git clone https://github.com/codequest07/Icarus.git
cd Icarus
npm install
```

### Frontend Setup (frontend directory)

1. Navigate to the `frontend` directory:
   ```
   cd frontend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env.local` file in the `frontend` directory with the following content:
   ```
   NEXT_PUBLIC_ALCHEMY_ID=<Your Alchemy API Key>
   ```

4. Run the development server:
   ```
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.


### Smart Contract Setup (smart-contracts directory)

1. Navigate to the `smart-contracts` directory:
   ```
   cd smart-contracts
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env` file in the `smart-contracts` directory with the following content:
   ```
   Base_RPC_URL=<Your Alchemy Base Testnet RPC URL>
   ACCOUNT_PRIVATE_KEY=<Your Ethereum account private key>
   ```

4. Compile the smart contracts:
   ```
   npx hardhat compile
   ```

## Deployment

The smart contracts are deployed to the Base Testnet using Alchemy's RPC URLs and API. Make sure to update the `hardhat.config.ts` file with the correct network configurations before deployment.

## Environment Variables

Create a `.env` file in the `smart-contracts` directory with the following variables:

```
ALCHEMY_Base_RPC_URL=your_alchemy_Base_rpc_url
ACCOUNT_PRIVATE_KEY=your_wallet_private_key
BaseSCAN_API_KEY=your_Basescan_api_key
```

- To get your Alchemy Base rpc url you have to sign up on [Alchemy](https://auth.alchemy.com/#:~:text=Log%20in.%20Don't%20have%20an%20account?%20Signup.) and head to your dashboard <https://dashboard.alchemy.com/> to get your alchemy Base rpc url
- To get your BaseScan Api key you also have to sign up on [Basescan](https://Basescan.com/register) and then head to your dashboard to get your api key <https://Basescan.com/myapikey>

## Deploying Smart Contracts

To deploy the smart contracts to Base Sepolia:

```bash
cd hardhat-contracts
npx hardhat ignition deploy ignition/modules/Energy.ts --network Base_sepolia
```

To verify the contract on BaseScan:

```bash
npx hardhat verify YOUR_CONTRACT_ADDRESS --network Base_sepolia
```

Replace `YOUR_CONTRACT_ADDRESS` with the address of your deployed contract.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
