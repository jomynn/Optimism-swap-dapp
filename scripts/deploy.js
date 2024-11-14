
const hre = require("hardhat");

async function main() {
  const SwapExample = await hre.ethers.getContractFactory("SwapExample");
  const swapRouterAddress = "0xE592427A0AEce92De3Edee1F18E0157C05861564"; // Uniswap V3 Router on Optimism
  const swapExample = await SwapExample.deploy(swapRouterAddress);

  await swapExample.deployed();
  console.log("SwapExample deployed to:", swapExample.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
