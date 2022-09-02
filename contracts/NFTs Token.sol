// SPDX-License-Identifier: MIT
pragma solidity 0.8.1;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";


contract MyOptimusPrime is ERC721, Ownable {
    using Counters for Counters.Counter;

    Counters.Counter private _tokenIdCounter;
     
    IERC20 public tokenAddress;

    uint public NFTPrice= 0.5 * 10 ** 18;

    // Using ERC20 deployed contract address as an address parameter for constructor
    // Deploying the NFTs contract by using ERC20 token address  
    
    constructor(address _tokenAddress) ERC721("MyOptimusPrime", "MOP") {
        tokenAddress= IERC20(_tokenAddress);
    }

    // BuyNFTs function to mint nfts on the caller address

    function BuyNFT() public {

        tokenAddress.transferFrom(msg.sender, address(this), NFTPrice);
        uint256 tokenId = _tokenIdCounter.current();
        _tokenIdCounter.increment();
        _safeMint(msg.sender, tokenId);
    }

}