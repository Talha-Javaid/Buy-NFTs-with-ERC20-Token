const INFURA_PROJECT_ID = process.env.INFURA_PROJECT_ID;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const ERC_CONTRACT_ADDRESS = process.env.ERC_CONTRACT_ADDRESS;
const contract = require("../artifacts/contracts/ERC20 Token.sol/OptimusPrime.json");

// provider - Infura
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
