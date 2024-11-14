
import React, { useState } from "react";
import { ethers } from "ethers";
import Web3Modal from "web3modal";
import { SwapExampleABI } from "./SwapExampleABI";

const swapContractAddress = "YOUR_SWAP_CONTRACT_ADDRESS";

function App() {
  const [provider, setProvider] = useState(null);
  const [signer, setSigner] = useState(null);
  const [swapContract, setSwapContract] = useState(null);

  const connectWallet = async () => {
    const web3Modal = new Web3Modal({
      network: "optimism",
      cacheProvider: true,
      providerOptions: {
        walletconnect: {
          package: require("@walletconnect/web3-provider"),
          options: {
            infuraId: "YOUR_INFURA_ID",
          },
        },
      },
    });
    const instance = await web3Modal.connect();
    const web3Provider = new ethers.providers.Web3Provider(instance);
    const signer = web3Provider.getSigner();
    setProvider(web3Provider);
    setSigner(signer);
    setSwapContract(new ethers.Contract(swapContractAddress, SwapExampleABI, signer));
  };

  const swapTokens = async () => {
    const amountIn = ethers.utils.parseUnits("0.01", 18); // Example amount
    const tx = await swapContract.swapExactInputSingle(amountIn, tokenInAddress, tokenOutAddress);
    await tx.wait();
    console.log("Swap completed");
  };

  return (
    <div>
      <button onClick={connectWallet}>Connect Wallet</button>
      <button onClick={swapTokens}>Swap Tokens</button>
    </div>
  );
}

export default App;
