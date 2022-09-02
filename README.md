# Buy-NFTs-with-ERC20-Token

## This repo is about

```
1: Creating a fungible token contract with a capped supply of 1000

2: Writing an NFT contract that is mintable/Buyable by an ERC20 fungible token 

3: Each NFT price is set to 0.5 fungible token

4: After a successful transaction, NFT will transfer to the buyer, and FT is transferred to the seller's account

5: Verifying both contracts on Etherscan

6: Writing hardhat scripts to mint NFTs and getBlance for both NFTs and Token.

```
### Setting Up the Environment

```
1- VSCode
2- Javascript
3- MetaMask
4- Solidity
5- Hardhat
6- Ether.js
7- Node.js
8- Json
9: ERC20 Token 
10: ERC721 NFTs Token
11: Etherscan
12- Ethereum Blockchain

```

Most Ethereum libraries and tools are written in JavaScript, and so is Ether.js. If you're not familiar with Node.js, it's a JavaScript runtime built on Chrome's V8 JavaScript engine. It's the most popular solution to run JavaScript outside of a web browser and hardhat is built on top of it.

# Getting Started

## Connect to the Ethereum network

There are many ways to make requests to the Ethereum chain. For simplicity, we’ll use a free account on #Infura, a blockchain developer platform, and API that allows us to communicate with the Ethereum chain without having to run our own nodes. The platform also has developer tools for monitoring and analytics that we’ll take advantage of in this tutorial to understand what’s going on under the hood in our smart contract deployment.


### Initializing NPM

```
npm install -y
```
### Installing Hardhat

```
npm install --save-dev hardhat

```
### Initializing Hardhat

```
npx hardhat

```
#### Note: You can use your own contract or use my contract using npx hardhat command in terminal 

### Installing Dependencies 

```
npm install --save-dev @nomicfoundation/hardhat-toolbox@^1.0.1
npm install --save-dev @nomiclabs/hardhat-ethers ethers
npm install --save dotenv

```

### Compiling Smart Contract Using hardhat
To compile the contract run npx hardhat compile in your terminal. The compile task is one of the built-in tasks.
```
npx hardhat compile

Compilation finished successfully

```

### Deploying Smart contract on Rinkeby Testnet
The contract has been successfully compiled and is ready to be used.
Now, deploy this contract to rinkeby testnet. Run the deployment script present in the scripts folder, using following command:
```
npx hardhat run scripts/deploy.js --network goerli
Contract deployed successfully

```

#  Interact with your Smart Contract using ether.js and node.js script

### Installing Dotenv file to keep private key and sensitive data secured

```
npm install dotenv --save

```

#### Your .env should look like this:

```
PRIVATE_KEY = ""
INFURA_PROJECT_ID = ""
ETHERSCAN_API_KEY= ""
ERC_CONTRACT_ADDRESS=""
NFT_CONTRACT_ADDRESS=""

```
### Grab your contract ABI

```
const contract = require("../artifacts/contracts/yourcontract.sol/yourcontract.json");

```

### Your Token Transaction Script should look like this

```
const INFURA_PROJECT_ID = process.env.INFURA_PROJECT_ID;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const ERC_CONTRACT_ADDRESS = process.env.ERC_CONTRACT_ADDRESS;
const contract = require("../artifacts/contracts/ERC20 Token.sol/OptimusPrime.json");

// provider - Alchemy
const InfuraProvider = new ethers.providers.InfuraProvider(network="goerli", INFURA_PROJECT_ID);

// signer - you
const signer = new ethers.Wallet(PRIVATE_KEY, InfuraProvider);

// contract instance
const PrimeContract = new ethers.Contract(ERC_CONTRACT_ADDRESS, contract.abi, signer);

async function main() {
    
    const balanceOf = await PrimeContract.balanceOf("Your NFTs Contract Address");
    console.log("The balance is: " + balanceOf); 

    // console.log("Updating the message...");
    const approve = await PrimeContract.approve("Your NFTs Contract Address", 
    ethers.utils.parseUnits('0.5', 18));
    
    console.log(approve); 
}

main();

```
### Your NFTs Transaction Script should look like this

```
const INFURA_PROJECT_ID = process.env.INFURA_PROJECT_ID;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const NFT_CONTRACT_ADDRESS = process.env.NFT_CONTRACT_ADDRESS;
const contract = require("../artifacts/contracts/NFTs Token.sol/MyOptimusPrime.json");

// provider - Alchemy
const InfuraProvider = new ethers.providers.InfuraProvider(network="goerli", INFURA_PROJECT_ID);

// signer - you
const signer = new ethers.Wallet(PRIVATE_KEY, InfuraProvider);

// contract instance
const NftPrimeContract = new ethers.Contract(NFT_CONTRACT_ADDRESS, contract.abi, signer);

async function main() {
    
    const balanceOf = await NftPrimeContract.balanceOf("Your Metamask Account Address");
    console.log("The balance is: " + balanceOf);

    // console.log("Updating the message...");
    const BuyNFT = await NftPrimeContract.BuyNFT();
    console.log(BuyNFT); 

}

main();

```

## Run the script using: 

...

npx hardhat run scripts/Tokwn.js --network goerli

npx hardhat run scripts/Nft.js --network goerli
...

### Verify on EtherScan

Install:

```
npm install --save-dev @nomiclabs/hardhat-etherscan

```
Run:

```
npx hardhat verify --network goerli <Your Deployed Contract Address>

```

### My Verified Contract addresses

```
OptimusPrime Token is deployed to: 0x09a6510E848Bb7519B847d76d0C6eB61C7071397

MyOptimusPrime Nft Token is deployed to: 0x990C650cB4d5b82E6Dc9dca4674E3605d419ED78

```

## Versioning

```
pragma solidity ^0.8.15;

```

## License

```

//SPDX-License-Identifier: UNLICENSED

```
