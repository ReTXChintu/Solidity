// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

interface IMarket {
    struct onSaleTokens {
        address contractAddress;
        address owner;
        uint256 price;
        uint256 amount;
        bool isOnSale;
    }

    struct onAuctionTokens {
        address contractAddress;
        address owner;
        uint256 amount;
        uint256 startTime;
        uint256 endTime;
        uint256 baseValue;
        uint256 currentBidding;
        address currentBidder;
        bool isOnAuction;
    }

    struct sellers {
        uint256 saleId;
        uint256 tokenId;
        address contractAddress;
        address seller;
    }

    struct auctioners {
        address contractAddress;
        address auctioner;
    }

    event SaleStarted(
        address owner,
        uint256 id,
        address contractAddress,
        uint256 amount,
        uint256 price
    );

    event SaleEnded(address owner, uint256 id, address contractAddress);

    event AuctionStarted(
        address owner,
        uint256 id,
        address contractAddress,
        uint256 amount,
        uint256 startTime,
        uint256 endTime,
        uint256 baseValue
    );

    event AuctionEnd(
        uint256 id,
        address contractAddress,
        address highestBidder,
        uint256 highestBidding
    );

    event AuctionCancelled(uint256 id, address contractAddress, address owner);
}
