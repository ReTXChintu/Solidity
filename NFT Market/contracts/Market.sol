// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "./ERC721.sol";
import "./ERC1155.sol";
import "./ERC20.sol";
import "./IMarket.sol";

contract Market is IMarket {
    uint256 public saleId;
    uint256 public auctionId;
    mapping(uint256 => mapping(address => mapping(address => onSaleTokens)))
        public saleTokensInfo;
    mapping(uint256 => mapping(address => mapping(address => onAuctionTokens)))
        public auctionTokensInfo;
    mapping(uint256 => mapping(address => mapping(address => address[])))
        private bidders;
    mapping(uint256 => mapping(address => mapping(address => mapping(address => uint256))))
        private biddingAmount;
    mapping(uint256 => sellers) public saleInfo;
    mapping(uint256 => auctioners) public auctionInfo;
    mapping(string => bool) private usedURI;

    constructor() {}

    function isSupportERC721(address owner) public view returns (bool) {
        bytes4 IID_IERC721 = type(IERC721).interfaceId;
        return IERC165(owner).supportsInterface(IID_IERC721);
    }

    function isSupportERC1155(address owner) public view returns (bool) {
        bytes4 IID_IERC1155 = type(IERC1155).interfaceId;
        return IERC165(owner).supportsInterface(IID_IERC1155);
    }

    function _isContract(address contractAddress) private view {
        require(
            contractAddress.code.length > 0,
            "Market: invalid contract address"
        );
    }

    function _isOnSale(
        uint256 id,
        address contractAddress,
        address seller,
        bool istrue
    ) private view {
        if (istrue) {
            require(
                saleTokensInfo[id][contractAddress][seller].isOnSale,
                "Market: token not on sale"
            );
        } else {
            require(
                !saleTokensInfo[id][contractAddress][seller].isOnSale,
                "Market: token on sale"
            );
        }
    }

    function _isOnAuction(
        uint256 id,
        address contractAddress,
        address auctioner,
        bool istrue
    ) private view {
        if (istrue)
            require(
                auctionTokensInfo[id][contractAddress][auctioner].isOnAuction,
                "Market: token not on auction"
            );
        else
            require(
                !auctionTokensInfo[id][contractAddress][auctioner].isOnAuction,
                "Market: token on auction"
            );
    }

    function _isApproved(
        uint256 id,
        address contractAddress,
        bool isERC721
    ) private view {
        if (isERC721)
            require(
                IERC721(contractAddress).getApproved(id) == address(this) ||
                    IERC721(contractAddress).isApprovedForAll(
                        msg.sender,
                        address(this)
                    ),
                "Market: approve market first"
            );
        else
            require(
                IERC1155(contractAddress).isApprovedForAll(
                    msg.sender,
                    address(this)
                ),
                "Market: approve market first"
            );
    }

    function _isOwner(
        uint256 id,
        uint256 amount,
        address contractAddress,
        address seller,
        bool isERC721
    ) private view {
        if (isERC721)
            require(
                IERC721(contractAddress).ownerOf(id) == seller,
                "Market: not owner"
            );
        else
            require(
                IERC1155(contractAddress).balanceOf(seller, id) >= amount,
                "Market: not enough token"
            );
    }

    function _isValidAmount(uint256 amount, bool isERC721) private pure {
        if (isERC721)
            require(amount == 0, "Market: amount needs to be zero for erc721");
        else {
            require(amount > 0, "Market: zero amount");
        }
    }

    function mint(
        uint256 id,
        uint256 numberOfTokens,
        string memory tokenURI,
        address contractAddress
    ) external {
        require(!usedURI[tokenURI], "Market: URI exists");
        if (isSupportERC721(contractAddress)) {
            require(
                id == 0 && numberOfTokens == 0,
                "Market: id and number of tokens must be zero"
            );
            IERC721mint(contractAddress).safeMint(msg.sender, tokenURI);
            usedURI[tokenURI] = true;
        } else if (isSupportERC1155(contractAddress)) {
            require(
                id > 0 && numberOfTokens > 0,
                "Market: id and number of tokens must be positive"
            );
            IERC1155mint(contractAddress).mint(
                msg.sender,
                id,
                numberOfTokens,
                tokenURI
            );
            usedURI[tokenURI] = true;
        } else revert("Market: unsupported interface");
    }

    function setSale(
        uint256 id,
        uint256 amount,
        uint256 price,
        address contractAddress
    ) external {
        _isContract(contractAddress);
        _isOnSale(id, contractAddress, msg.sender, false);
        _isOnAuction(id, contractAddress, msg.sender, false);
        if (isSupportERC721(contractAddress)) {
            _isValidAmount(amount, true);
            _isOwner(id, amount, contractAddress, msg.sender, true);
            _isApproved(id, contractAddress, true);
            saleTokensInfo[id][contractAddress][msg.sender].amount = 0;
        } else if (isSupportERC1155(contractAddress)) {
            _isValidAmount(amount, false);
            _isOwner(id, amount, contractAddress, msg.sender, false);
            _isApproved(id, contractAddress, false);
            saleTokensInfo[id][contractAddress][msg.sender].amount = amount;
        } else revert("Market: invalid contract address");
        saleTokensInfo[id][contractAddress][msg.sender]
            .contractAddress = contractAddress;
        saleTokensInfo[id][contractAddress][msg.sender].owner = msg.sender;
        saleTokensInfo[id][contractAddress][msg.sender].price = price;
        saleTokensInfo[id][contractAddress][msg.sender].isOnSale = true;
        saleInfo[saleId].saleId = saleId;
        saleInfo[saleId].tokenId = id;
        saleInfo[saleId].contractAddress = contractAddress;
        saleInfo[saleId].seller = msg.sender;
        saleId++;
        emit SaleStarted(msg.sender, id, contractAddress, amount, price);
    }

    function purchase(
        uint256 id,
        address seller,
        uint256 amount,
        address contractAddress
    ) external payable {
        _isOnSale(id, contractAddress, seller, true);
        require(msg.sender != seller, "Market: buying your token");
        if (isSupportERC721(contractAddress)) {
            _isValidAmount(amount, true);
            require(
                msg.value == saleTokensInfo[id][contractAddress][seller].price,
                "Market: send enough ether"
            );
            IERC721(contractAddress).transferFrom(seller, msg.sender, id);
            delete saleTokensInfo[id][contractAddress][seller];
        } else if (isSupportERC1155(contractAddress)) {
            _isValidAmount(amount, false);
            require(
                amount <= saleTokensInfo[id][contractAddress][seller].amount,
                "Market: not enough token"
            );
            require(
                msg.value ==
                    saleTokensInfo[id][contractAddress][seller].price * amount,
                "Market: send enough ether"
            );
            IERC1155(contractAddress).safeTransferFrom(
                seller,
                msg.sender,
                id,
                amount,
                "0x00"
            );
            saleTokensInfo[id][contractAddress][seller].amount -= amount;
            if (saleTokensInfo[id][contractAddress][seller].amount == 0)
                delete saleTokensInfo[id][contractAddress][seller];
        } else revert("Market: invalid contract address");
        payable(seller).transfer(msg.value);
    }

    function cancelSale(uint256 id, address contractAddress) external {
        _isContract(contractAddress);
        _isOnSale(id, contractAddress, msg.sender, true);
        delete saleTokensInfo[id][contractAddress][msg.sender];
        emit SaleEnded(msg.sender, id, contractAddress);
    }

    function setAuction(
        uint256 startTime,
        uint256 endTime,
        uint256 baseValue,
        uint256 id,
        uint256 amount,
        address contractAddress
    ) external {
        _isOnSale(id, contractAddress, msg.sender, false);
        _isOnAuction(id, contractAddress, msg.sender, false);
        require(
            startTime <= endTime &&
                (startTime >= block.timestamp || startTime == 0) &&
                endTime >= block.timestamp,
            "Market: invalid start or end time"
        );
        require(baseValue > 0, "Market: invalid baseValue");
        if (isSupportERC721(contractAddress)) {
            _isValidAmount(amount, true);
            _isOwner(id, amount, contractAddress, msg.sender, true);
            _isApproved(id, contractAddress, true);
            auctionTokensInfo[id][contractAddress][msg.sender].amount = 0;
        } else if (isSupportERC1155(contractAddress)) {
            _isValidAmount(amount, false);
            _isOwner(id, amount, contractAddress, msg.sender, false);
            _isApproved(id, contractAddress, false);
            auctionTokensInfo[id][contractAddress][msg.sender].amount = amount;
        } else revert("Market: invalid contract address");
        if (startTime == 0) startTime = block.timestamp;
        auctionTokensInfo[id][contractAddress][msg.sender].owner = msg.sender;
        auctionTokensInfo[id][contractAddress][msg.sender]
            .startTime = startTime;
        auctionTokensInfo[id][contractAddress][msg.sender].endTime = endTime;
        auctionTokensInfo[id][contractAddress][msg.sender]
            .baseValue = baseValue;
        auctionTokensInfo[id][contractAddress][msg.sender].isOnAuction = true;
        auctionTokensInfo[id][contractAddress][msg.sender].currentBidder = msg
            .sender;
        bidders[id][contractAddress][msg.sender].push(msg.sender);
        emit AuctionStarted(
            msg.sender,
            id,
            contractAddress,
            amount,
            startTime,
            endTime,
            baseValue
        );
    }

    function bid(
        uint256 id,
        address auctioner,
        uint256 bidding,
        address contractAddress
    ) external payable {
        _isOnAuction(id, contractAddress, auctioner, true);
        require(
            block.timestamp <=
                auctionTokensInfo[id][contractAddress][auctioner].endTime &&
                block.timestamp >=
                auctionTokensInfo[id][contractAddress][auctioner].startTime,
            "Market: auction is not live"
        );
        require(msg.sender != auctioner, "Market: you can't bid");
        require(
            bidding >
                auctionTokensInfo[id][contractAddress][auctioner]
                    .currentBidding &&
                bidding >
                auctionTokensInfo[id][contractAddress][auctioner].baseValue,
            "Market: bidding value has to be more than current"
        );
        require(
            msg.value ==
                bidding -
                    biddingAmount[id][contractAddress][auctioner][msg.sender],
            "Market: invalid bidding value"
        );
        if (biddingAmount[id][contractAddress][auctioner][msg.sender] == 0) {
            bidders[id][contractAddress][auctioner].push(msg.sender);
        }
        biddingAmount[id][contractAddress][auctioner][msg.sender] = bidding;
        auctionTokensInfo[id][contractAddress][auctioner].currentBidder = msg
            .sender;
        auctionTokensInfo[id][contractAddress][auctioner]
            .currentBidding = bidding;
    }

    function cancelBid(
        uint256 id,
        address auctioner,
        address contractAddress
    ) external {
        require(
            biddingAmount[id][contractAddress][auctioner][msg.sender] != 0,
            "Market: not bidder"
        );
        uint256 amount = biddingAmount[id][contractAddress][auctioner][
            msg.sender
        ];
        biddingAmount[id][contractAddress][auctioner][msg.sender] = 0;
        if (
            msg.sender ==
            auctionTokensInfo[id][contractAddress][auctioner].currentBidder
        ) {
            uint256 testVar;
            address secondHighest;
            for (
                uint256 index = 0;
                index < bidders[id][contractAddress][auctioner].length;
                index++
            ) {
                if (
                    testVar <
                    biddingAmount[id][contractAddress][auctioner][
                        bidders[id][contractAddress][auctioner][index]
                    ]
                ) {
                    secondHighest = bidders[id][contractAddress][auctioner][
                        index
                    ];
                }
            }
            auctionTokensInfo[id][contractAddress][auctioner]
                .currentBidder = secondHighest;
            auctionTokensInfo[id][contractAddress][auctioner]
                .currentBidding = biddingAmount[id][contractAddress][auctioner][
                secondHighest
            ];
        }
        payable(msg.sender).transfer(amount);
    }

    function endAuction(
        uint256 id,
        address contractAddress,
        address auctioner
    ) external {
        _isOnAuction(id, contractAddress, auctioner, true);
        address highestBidder = auctionTokensInfo[id][contractAddress][
            auctioner
        ].currentBidder;
        uint256 highestBidding = auctionTokensInfo[id][contractAddress][
            auctioner
        ].currentBidding;
        if (
            block.timestamp >
            auctionTokensInfo[id][contractAddress][msg.sender].endTime
        ) {
            require(
                msg.sender ==
                    auctionTokensInfo[id][contractAddress][msg.sender].owner ||
                    msg.sender == highestBidder,
                "Market: not allowed"
            );
        } else {
            require(
                msg.sender ==
                    auctionTokensInfo[id][contractAddress][msg.sender].owner,
                "Market: not allowed"
            );
        }
        if (isSupportERC721(contractAddress)) {
            IERC721(contractAddress).transferFrom(auctioner, highestBidder, id);
        } else if (isSupportERC1155(contractAddress)) {
            IERC1155(contractAddress).safeTransferFrom(
                auctioner,
                highestBidder,
                id,
                auctionTokensInfo[id][contractAddress][auctioner].amount,
                "0x00"
            );
        }
        biddingAmount[id][contractAddress][auctioner][highestBidder] = 0;
        biddingAmount[id][contractAddress][msg.sender][
            msg.sender
        ] = highestBidding;
        delete (auctionTokensInfo[id][contractAddress][auctioner]);
        for (
            uint256 index = 0;
            index < bidders[id][contractAddress][auctioner].length;
            index++
        ) {
            address receiver = bidders[id][contractAddress][auctioner][index];
            uint256 amount = biddingAmount[id][contractAddress][auctioner][
                receiver
            ];
            delete biddingAmount[id][contractAddress][auctioner][receiver];
            payable(receiver).transfer(amount);
        }

        emit AuctionEnd(id, contractAddress, highestBidder, highestBidding);
    }
}
