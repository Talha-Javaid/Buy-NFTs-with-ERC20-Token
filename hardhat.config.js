require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-etherscan");
require('dotenv').config(); 

/** @type import('hardhat/config').HardhatUserConfig */

module.exports = {
   solidity: "0.8.1",
   defaultNetwork: "goerli",
   networks: {
      hardhat: {},
      goerli: {
         url: `https://goerli.infura.io/v3/${process.env.INFURA_PROJECT_ID}`,
         accounts: [`0x${process.env.PRIVATE_KEY}`]
      }
   },
    etherscan: {
     // Your API key for Etherscan
     // Obtain one at https://etherscan.io/
     apiKey: process.env.ETHERSCAN_API_KEY
   }
};