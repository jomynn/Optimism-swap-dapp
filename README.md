
# Optimism Swap dApp

## Project Overview

The Optimism Swap dApp is a decentralized application built on Optimism, an Ethereum Layer 2 scaling solution. This dApp allows users to swap tokens directly on Optimism with lower fees and faster transaction speeds, taking advantage of the Uniswap V3 decentralized exchange protocol. The project is built using Solidity for the smart contract, Hardhat for deployment, and a React-based frontend to connect with users’ wallets and provide an intuitive interface for swapping tokens.

## Key Features

- **Layer 2 Efficiency**: Leveraging Optimism, this dApp ensures faster transactions with significantly reduced gas fees compared to Ethereum mainnet.
- **Token Swapping**: Uses Uniswap V3 on Optimism, allowing for efficient and permissionless token swaps.
- **User-Friendly Interface**: Built with React, enabling easy wallet connection, input customization, and a simple, accessible swap interface.
- **Wallet Integration**: Compatible with WalletConnect and MetaMask, allowing seamless wallet connection through Web3Modal.

## Technologies Used

- **Optimism**: Layer 2 scaling solution that enables faster transactions with lower fees.
- **Solidity**: Smart contract language for creating the swap functionality.
- **Uniswap V3**: Used to provide liquidity and enable token swaps on Optimism.
- **Hardhat**: Development environment and testing framework for compiling, deploying, and testing smart contracts.
- **React**: Frontend framework for creating the user interface.
- **Ethers.js**: Library for connecting to the Ethereum blockchain, interacting with smart contracts, and managing wallet connections.

## Project Structure

The project consists of three main parts:

1. **Smart Contracts**: Deployed on Optimism and written in Solidity, including a custom contract that interacts with Uniswap V3 to facilitate token swaps.
2. **Backend Scripts**: Deployed using Hardhat, these scripts handle contract compilation and deployment on the Optimism network.
3. **Frontend**: A React-based client application that lets users connect their wallets, specify tokens to swap, and perform the swaps on the Optimism network.

### Project Structure Layout

```
optimism-swap-dapp/
│
├── contracts/                 # Solidity smart contract code
│   └── SwapExample.sol        # Swap contract using Uniswap V3
│
├── scripts/                   # Hardhat deployment scripts
│   └── deploy.js              # Deployment script for SwapExample contract
│
├── client/                    # React frontend for user interaction
│   ├── public/                # Public assets
│   └── src/                   # Source code for the React app
│       ├── App.js             # Main app component
│       └── SwapExampleABI.js  # Contract ABI for interacting with SwapExample
│
├── .env                       # Environment variables file
├── hardhat.config.js          # Hardhat configuration file
├── package.json               # Project dependencies and scripts
└── README.md                  # Project documentation
```

## How It Works

1. **User Connects Wallet**: Users connect their wallet (e.g., MetaMask) to the dApp.
2. **Specify Tokens and Amount**: They enter the token details they want to swap, such as token addresses and amount.
3. **Perform Swap**: Using the Uniswap V3 protocol on Optimism, the smart contract processes the swap.
4. **Transaction Completion**: Once completed, users receive the swapped tokens in their wallet.

## Installation and Setup

1. **Clone the repository**:

   ```bash
   git clone https://github.com/yourusername/optimism-swap-dapp.git
   cd optimism-swap-dapp
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Set up environment variables**:

   Create a `.env` file in the root directory and add the following:

   ```plaintext
   PRIVATE_KEY=YOUR_PRIVATE_KEY
   OPTIMISM_RPC_URL=https://opt-mainnet.g.alchemy.com/v2/YOUR_ALCHEMY_API_KEY
   ```

   Replace the placeholders with your actual private key and RPC URL.

4. **Compile and Deploy Contracts**:

   Compile the contract:

   ```bash
   npx hardhat compile
   ```

   Deploy the contract to Optimism:

   ```bash
   npx hardhat run scripts/deploy.js --network optimism
   ```

5. **Run the React App**:

   Start the React frontend by navigating to the `client` directory:

   ```bash
   cd client
   npm start
   ```

6. **Connect Wallet and Swap**:

   - Open the dApp in your browser.
   - Connect your wallet (MetaMask or WalletConnect).
   - Specify the token addresses and amount to swap, then click "Swap Tokens."

## Dependencies

- `ethers`: For blockchain interactions in the frontend.
- `dotenv`: To load environment variables.
- `hardhat`: For contract development and deployment.
- `react`, `react-dom`: For building the frontend interface.
- `web3modal` and `@walletconnect/web3-provider`: For wallet connection and Web3 support.

## Notes

- **Gas Fees**: While Optimism has lower gas fees than Ethereum mainnet, remember to have enough funds to cover transaction costs on Optimism.
- **Security**: Keep your private key and API keys secure, and avoid committing them to version control.

## License

This project is open-source and available under the MIT License.
