# Decentralized Energy Trading Platform

## Project Overview

This project aims to create a decentralized energy trading platform that allows users to buy and sell excess solar energy using blockchain technology. The platform is built on the Scroll network, leveraging its scalability and efficiency for energy transactions.

### Objectives

1. Facilitate peer-to-peer energy trading
2. Promote sustainable energy usage
3. Create a user-friendly interface for energy transactions
4. Ensure secure and transparent energy trading using blockchain technology
5. Build a community-driven marketplace for renewable energy

## Technology Stack

- Smart Contracts: Solidity
- Blockchain Network: Scroll (Testnet)
- Frontend: Next.js, React, TypeScript
- Styling: Tailwind CSS
- Web3 Integration: Rainbow Kit
- Development Environment: Hardhat
- RPC Provider: Alchemy

## Project Structure

```
.
├── frontend/ 
│ ├── public/ 
│ ├── src/ 
│ │ ├── app/ 
│ │ ├── components/ 
│ │ ├── lib/ 
│ │ └── ... 
│ ├── package.json 
│ └── tailwind.config.ts 
├── smart-contracts/ 
│ ├── contracts/ 
│ │ ├── Energy.sol 
│ │ └── ICAR.sol 
│ ├── hardhat.config.ts 
│ ├── ... 
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

### Smart Contracts Setup

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
   SCROLL_RPC_URL=<Your Alchemy Scroll Testnet RPC URL>
   ACCOUNT_PRIVATE_KEY=<Your Ethereum account private key>
   ```

4. Compile the smart contracts:

   ```
   npx hardhat compile
   ```

5. Deploy the smart contracts to Scroll Testnet:

   ```
   npx hardhat run scripts/deploy.ts --network scroll-sepolia
   ```

### Frontend Setup

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

5. Open <http://localhost:3000> in your browser to see the application.

## Deployment

The smart contracts are deployed to the Scroll Testnet using Alchemy's RPC URLs and API. Make sure to update the `hardhat.config.ts` file with the correct network configurations before deployment.

## Features

- User-friendly dashboard for energy trading
- Real-time energy listings
- Secure blockchain-based transactions
- Community-driven marketplace
- Integration with Rainbow Kit for easy wallet connection

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.

## Acknowledgements

- OpenZeppelin for secure smart contract libraries
- Alchemy for providing RPC and API services
- Scroll Network for the underlying blockchain infrastructure