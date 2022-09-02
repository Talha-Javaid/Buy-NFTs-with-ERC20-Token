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
    
    const balanceOf = await NftPrimeContract.balanceOf("0xc483157d284C0df5AaDc38801a15aC535A18fc29");
    console.log("The balance is: " + balanceOf);

    // console.log("Updating the message...");
    const BuyNFT = await NftPrimeContract.BuyNFT();
    console.log(BuyNFT); 

}

main();