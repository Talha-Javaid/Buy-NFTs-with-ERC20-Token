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
    
    const balanceOf = await PrimeContract.balanceOf("0x990C650cB4d5b82E6Dc9dca4674E3605d419ED78");
    console.log("The balance is: " + balanceOf); 

    // console.log("Updating the message...");
    const approve = await PrimeContract.approve("0x990C650cB4d5b82E6Dc9dca4674E3605d419ED78", 
    ethers.utils.parseUnits('0.5', 18));
    
    console.log(approve); 
}

main();