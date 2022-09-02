// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {

  // deployment script for ERC Token contract
  
  const OptimusPrime = await hre.ethers.getContractFactory("OptimusPrime");
  const optimusPrime = await OptimusPrime.deploy();
  await optimusPrime.deployed();
  console.log("OptimusPrime Token is deployed to:", optimusPrime.address);

  // deployment script for NFT contract

  const MyOptimusPrime = await hre.ethers.getContractFactory("MyOptimusPrime");
  const myOptimusPrime = await MyOptimusPrime.deploy(optimusPrime.address);

  await myOptimusPrime.deployed();

  console.log("MyOptimusPrime Nft Token is deployed to:", myOptimusPrime.address);

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});


//OptimusPrime Token is deployed to: 0x09a6510E848Bb7519B847d76d0C6eB61C7071397
//MyOptimusPrime Nft Token is deployed to: 0x990C650cB4d5b82E6Dc9dca4674E3605d419ED78
