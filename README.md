# Energy Chain: Decentralized Energy Marketplace DApp on Scroll Sepolia

The **Decentralized Energy Marketplace** aims to revolutionize energy trading by creating a transparent, efficient, and user-friendly platform for energy producers and consumers. This innovative project will leverage blockchain technology to establish a single smart contract where energy producers can list their available energy credits, allowing for seamless and transparent transactions.

Deployed Smart contract on Scroll Sepolia Testnet: .....deployed link

Live Link to interact: live-link.on.vercel

**Key Features:**

1. **Decentralized Energy Trading**: The platform facilitates a decentralized marketplace where energy producers can easily showcase their available energy credits, enabling direct trading with consumers.

2. **On-Chain Tracking**: All transactions related to energy trades and transfers are recorded on-chain, ensuring transparency and traceability of energy credits. This feature enhances trust among participants and simplifies regulatory compliance.

3. **Micro-Transactions Support**: By utilizing Scroll’s low transaction fees, the marketplace will support micro-transactions, making it feasible for consumers to purchase small amounts of energy credits without incurring prohibitive costs.

4. **Tokenization of Energy Credits**: Upon purchasing energy credits, buyers receive transferable tokens that represent their credits. These tokens are securely stored in their wallets, enabling easy transfers and trades within the marketplace.

5. **Usage and Balance Tracking**: The platform will provide users with intuitive tools to monitor their available energy credits and usage in real-time, promoting informed decision-making and efficient energy management.

## Technologies Used

- Frontend: React.js with Vite, Wagmi, Ethers.js
- Smart Contracts: Solidity
- Development Environment: Hardhat
- Network: Scroll Sepolia
- RPC Provider: Alchemy
- Deployment: Hardhat Ignition

## Project Structure

The project is divided into two main directories:

1. `frontend`: Contains the frontend React application
2. `smart-contracts`: Contains the smart contract and related files

## Setup and Installation

### Prerequisites

- Node.js (v14 or later)
- npm or yarn
- Git

### Clone the Repository

```bash
git clone https://github.com/codequest07/Icarus.git
cd Icarus
```

### Frontend Setup (frontend directory)

For detailed instructions on setting up the frontend, please refer to the [Client README](./frontend/README.md).

### Smart Contract Setup (smart-contracts directory)

For detailed instructions on setting up and deploying the smart contracts, please refer to the [Hardhat Contracts README](./smart-contracts/README.md).

## Environment Variables

Create a `.env` file in the `smart-contracts` directory with the following variables:

```
ALCHEMY_SCROLL_RPC_URL=your_alchemy_scroll_rpc_url
WALLET_KEY=your_wallet_private_key
SCROLLSCAN_API_KEY=your_scrollscan_api_key
```

- To get your Alchemy scroll rpc url you have to sign up on [Alchemy](https://auth.alchemy.com/#:~:text=Log%20in.%20Don't%20have%20an%20account?%20Signup.) and head to your dashboard <https://dashboard.alchemy.com/> to get your alchemy scroll rpc url
- To get your ScrollScan Api key you also have to sign up on [scrollscan](https://scrollscan.com/register) and then head to your dashboard to get your api key <https://scrollscan.com/myapikey>

## Deploying Smart Contracts

To deploy the smart contracts to Scroll Sepolia:

```bash
cd hardhat-contracts
npx hardhat ignition deploy ignition/modules/Energy.ts --network scroll_sepolia
```

To verify the contract on ScrollScan:

```bash
npx hardhat verify YOUR_CONTRACT_ADDRESS --network scroll_sepolia
```

Replace `YOUR_CONTRACT_ADDRESS` with the address of your deployed contract.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
