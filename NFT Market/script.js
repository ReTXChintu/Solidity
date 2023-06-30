let erc721contractAddress = "0x67Af15F27ff2c3d78F98BF0eD19a2216110f01f1";
let erc1155contractAddress = "0xfdf5Cd6130cdEe9Bd1BF6Bbf581A12e51376EF4d";
let marketcontractAddress = "0x572ED4F9D14A80b43FBA68468c853f592Bbc1031";
let erc721abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "ownedIds",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "string",
        name: "uri",
        type: "string",
      },
    ],
    name: "safeMint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "tokenByIndex",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "tokenIdCounter",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "tokenOfOwnerByIndex",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

let erc1155abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "values",
        type: "uint256[]",
      },
    ],
    name: "TransferBatch",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "TransferSingle",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "value",
        type: "string",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "URI",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "accounts",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
    ],
    name: "balanceOfBatch",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "values",
        type: "uint256[]",
      },
    ],
    name: "burnBatch",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "exists",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "uri_",
        type: "string",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "mintedIds",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeBatchTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "uri",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

let marketabi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "contractAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "AuctionCancelled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "contractAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "highestBidder",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "highestBidding",
        type: "uint256",
      },
    ],
    name: "AuctionEnd",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "contractAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "startTime",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "endTime",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "baseValue",
        type: "uint256",
      },
    ],
    name: "AuctionStarted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "contractAddress",
        type: "address",
      },
    ],
    name: "SaleEnded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "contractAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
    ],
    name: "SaleStarted",
    type: "event",
  },
  {
    inputs: [],
    name: "auctionId",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "auctionInfo",
    outputs: [
      {
        internalType: "address",
        name: "contractAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "auctioner",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "auctionTokensInfo",
    outputs: [
      {
        internalType: "address",
        name: "contractAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "startTime",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "endTime",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "baseValue",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "currentBidding",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "currentBidder",
        type: "address",
      },
      {
        internalType: "bool",
        name: "isOnAuction",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "auctioner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "bidding",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "contractAddress",
        type: "address",
      },
    ],
    name: "bid",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "auctioner",
        type: "address",
      },
      {
        internalType: "address",
        name: "contractAddress",
        type: "address",
      },
    ],
    name: "cancelBid",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "contractAddress",
        type: "address",
      },
    ],
    name: "cancelSale",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "contractAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "auctioner",
        type: "address",
      },
    ],
    name: "endAuction",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "isSupportERC1155",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "isSupportERC721",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "numberOfTokens",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "tokenURI",
        type: "string",
      },
      {
        internalType: "address",
        name: "contractAddress",
        type: "address",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "seller",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "contractAddress",
        type: "address",
      },
    ],
    name: "purchase",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "saleId",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "saleInfo",
    outputs: [
      {
        internalType: "uint256",
        name: "saleId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "contractAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "seller",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "saleTokensInfo",
    outputs: [
      {
        internalType: "address",
        name: "contractAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "isOnSale",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "startTime",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "endTime",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "baseValue",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "contractAddress",
        type: "address",
      },
    ],
    name: "setAuction",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "contractAddress",
        type: "address",
      },
    ],
    name: "setSale",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const sepolia = 11155111;
let web3;
let accounts;
let contract;
let contract721;
let contract1155;
let user;
async function checkNetwork() {
  let network = await web3.eth.getChainId();
  if (network !== sepolia) {
    swal("Switching to Sepolia network");
    try {
      await web3.currentProvider.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: web3.utils.toHex(sepolia) }],
      });
    } catch (error) {
      console.error(error.message);
    }
  }
}

function eButton() {
  $(".insideBtns").prop("disabled", false);
  $(".navBtns").prop("disabled", false);
}
function dButton() {
  $(".insideBtns").prop("disabled", true);
  $(".navBtns").prop("disabled", true);
}

async function connect() {
  if ($("#button").text().trim() === "Connect to Metamask") {
    try {
      connectInside();
      swal({ title: "Connected to Metamask", icon: "success" });
    } catch (error) {
      swal({
        title: error.message,
        icon: "error",
        dangerMode: true,
      });
      console.log(error);
    }
  } else {
    location.reload();
  }
  web3.eth.currentProvider.on("accountsChanged", async function (accounts) {
    if (!accounts.length) {
      location.reload();
    } else {
      await connectInside();
    }
  });
}

async function connectInside() {
  if (window.ethereum) {
    web3 = new Web3(window.ethereum);
    accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
  } else {
    swal({
      title: "Metamask is not installed, redirecting to metamask",
      icon: "warning",
    });
    window.location.href = "https://metamask.io";
  }
  await checkNetwork();
  $("#button").html("Disconnect");
  $(".content").css("display", "block");
  $(".userAddress").html(`User Address: ${accounts[0]}`);
  contract = new web3.eth.Contract(marketabi, marketcontractAddress);
  contract721 = new web3.eth.Contract(erc721abi, erc721contractAddress);
  contract1155 = new web3.eth.Contract(erc1155abi, erc1155contractAddress);
  user = accounts[0];
}

async function mint() {
  if (!accounts) await connect();
  let estGas;
  let tokenId;
  let amount;
  let contractAddress;
  let tokenURI;
  try {
    dButton();
    try {
      tokenId = $("#idForMinting").val();
      amount = $("#numberOfTokensForMinting").val();
      contractAddress = $("#contractAddress").val();
      tokenURI = $("#tokenURI").val();
      estGas = await contract.methods
        .mint(tokenId, amount, tokenURI, contractAddress)
        .estimateGas({ from: user });
    } catch (error) {
      eButton();
      console.log(error);
      let oErrorJSON = JSON.parse(
        error.message.substr(
          error.message.indexOf("{"),
          error.message.lastIndexOf("}")
        )
      );
      let oError = oErrorJSON.originalError.message;
      if (error.message.includes("Market")) {
        swal(oError.slice(20));
        return;
      } else {
        swal({ title: error.message, icon: "error", dangerMode: true });
        return;
      }
    }
    await contract.methods
      .mint(tokenId, amount, tokenURI, contractAddress)
      .send({ from: accounts[0], gas: estGas });
    swal({ title: `Token Minted`, icon: "success" });
  } catch (error) {
    eButton();
    if (error.message.includes("User denied")) {
      swal("you have denied the transaction");
      return;
    } else {
      swal({ title: error.message, icon: "error", dangerMode: true });
      return;
    }
  }
  eButton();
}

async function showOnSaleTokens() {
  $(".onSaleTokens").empty();
  if (!accounts) await connect();
  dButton();
  let numberOfSales = await contract.methods.saleId().call();
  if (numberOfSales == 0) {
    $(".onSaleTokens").append(`<h1>No Sales available</h1>`);
  }
  $(".onSaleTokens").append(
    `<button class="insideBtns" onclick="showSetSale()">Sell Token</button>`
  );
  $(".btnDiv").css("display", "none");
  $(".myAssets").css("display", "none");
  $(".onSaleTokens").css("display", "block");
  for (let i = 0; i < numberOfSales; i++) {
    try {
      const tokenInfo = await contract.methods.saleInfo(i).call();
      let saleId = tokenInfo["saleId"];
      let tokenId = tokenInfo.tokenId;
      let contractAddress = tokenInfo.contractAddress;
      let seller = tokenInfo.seller;
      let price = await contract.methods
        .saleTokensInfo(tokenId, contractAddress, seller)
        .call();
      let uri;
      if (contract.methods.isSupportERC721(contractAddress)) {
        uri = await contract721.methods.tokenURI(tokenId).call();
        const response = await fetch(uri);
        const jsonData = await response.json();
        $(".onSaleTokens").append(`
            <div id=${tokenId} class="card">
              <img src="${jsonData.image}" class="card-img-top" alt="NFT IMAGE" width=300px>
              <div class="card-body">
              <h5 class="card-title">Sale Id: ${saleId}</h5>
                <h5 class="card-title">Id: ${tokenId}</h5>
                <h5 class="card-title">Price: ${price.price}</h5>
                <h5 class="card-title">Contract Address: ${contractAddress}</h5>
                <h5 class="card-title">Seller Address: ${seller}</h5>
                <button class = "insideBtns" id = "${saleId}" onclick = "buyToken(${tokenId}, 0,'${contractAddress}', '${seller}', ${price.price})">Buy</button>
              </div>
            </div>
          `);
      } else {
        uri = await contract1155.methods.tokenURI(tokenId).call();
        const response = await fetch(uri);
        const jsonData = await response.json();
        $(".onSaleTokens").append(`
            <div id=${tokenId} class="card">
              <img src="${jsonData.image}" class="card-img-top" alt="NFT IMAGE" width=300px>
              <div class="card-body">
              <h5 class="card-title">Sale Id: ${saleId}</h5>
                <h5 class="card-title">Id: ${tokenId}</h5>
                <h5 class="card-title>Amount: ${price.amount}</h5>
                <h5 class="card-title">Price: ${price.price}</h5>
                <h5 class="card-title">Contract Address: ${contractAddress}</h5>
                <h5 class="card-title">Seller Address: ${seller}</h5>
                <button class = "insideBtns" onclick = "buyToken(${tokenId},${price.amount}, '${contractAddress}', '${seller}', ${price.price})">Buy</button>
              </div>
            </div>
          `);
      }
    } catch (error) {
      eButton();
      swal({
        title: "Failed to show sale tokens",
        icon: "error",
        dangerMode: true,
      });
      console.error(error);
    }
  }
  eButton();
}

function showSetSale() {
  $(".setSale").css("display", "flex");
  $(".onSaleTokens").css("display", "none");
  $(".btnDiv").css("display", "none");
}

async function setOnSale() {
  let tokenId = $("#idForSale").val();
  let amount = $("#amountForSale").val();
  let contractAddr = $("#contractAddressForSale").val();
  let price = $("#priceForSale").val();
  let estGas;
  if (!web3.utils.isAddress(contractAddr)) {
    swal({ title: "Please enter a valid contract address", icon: "error" });
    return;
  }
  try {
    dButton();
    try {
      estGas = await contract.methods
        .setSale(tokenId, amount, price, contractAddr)
        .estimateGas({ from: user });
    } catch (error) {
      eButton();
      let oErrorJSON = JSON.parse(
        error.message.substr(
          error.message.indexOf("{"),
          error.message.lastIndexOf("}")
        )
      );
      let oError = oErrorJSON.originalError.message;
      if (
        error.message.includes("Market") ||
        error.message.includes("MyERC721") ||
        error.message.includes("MyERC1155") ||
        error.message.includes("ERC721") ||
        error.message.includes("ERC1155")
      ) {
        swal(oError.slice(20));
        return;
      } else {
        swal(error);
        return;
      }
    }
    await contract.methods
      .setSale(tokenId, amount, price, contractAddr)
      .send({ from: user, gas: estGas });
    swal({
      title: "Set Sale Successful",
      icon: "success",
    });
  } catch (error) {
    eButton();
    if (error.message.includes("User denied")) {
      swal("you have denied the transaction");
      return;
    } else {
      swal({ title: error.message, icon: "error" });
      console.error("Failed to Transfer", error);
    }
  }
  eButton();
}

async function buyToken(tokenId, amount, contractAddress, seller, price) {
  try {
    dButton();
    let estGas;
    try {
      estGas = await contract.methods
        .purchase(tokenId, seller, amount, contractAddress)
        .estimateGas({ from: user, value: price });
    } catch (error) {
      eButton();
      let oErrorJSON = JSON.parse(
        error.message.substr(
          error.message.indexOf("{"),
          error.message.lastIndexOf("}")
        )
      );
      let oError = oErrorJSON.originalError.message;
      if (
        error.message.includes("Market") ||
        error.message.includes("MyERC721") ||
        error.message.includes("MyERC1155") ||
        error.message.includes("ERC721") ||
        error.message.includes("ERC1155")
      ) {
        swal(oError.slice(20));
        return;
      } else {
        swal(error);
        return;
      }
    }
    await contract.methods
      .purchase(tokenId, seller, amount, contractAddress)
      .send({ from: user, gas: estGas, value: price });
  } catch (error) {
    eButton();
    if (error.message.includes("User denied")) {
      swal("you have denied the transaction");
      return;
    } else {
      swal({ title: error.message, icon: "error" });
      console.error("Failed to Transfer", error);
    }
  }
  eButton();
}

async function showOnAuctionTokens() {
  $(".onSaleTokens").empty();
  if (!accounts) {
    await connect();
  }
  dButton();
  let numberOfAuctions = await contract.methods.auctionId().call();
  $(".onSaleTokens").append(
    `<button class="insideBtns">Set an Auction</button>`
  );
  $(".btnDiv").css("display", "none");
  $(".onSaleTokens").css("display", "block");
  if (numberOfAuctions == 0) {
    $(".onSaleTokens").append(`<h1>No Auctions available</h1>`);
  }
  for (let i = 0; i < numberOfAuctions; i++) {
    try {
      const tokenInfo = await contract.methods.auctionInfo(i).call();
      let saleId = tokenInfo["tokenId"];
      let tokenId = tokenInfo.tokenId;
      let contractAddress = tokenInfo.contractAddress;
      let tokenURI;
      tokenURI = await contract721.methods.tokenURI(tokenId).call();
      let seller = tokenInfo.seller;
      $(".onSaleTokens").append(`
          <div id=${tokenId} class="card">
            <img src="${tokenURI}" class="card-img-top" alt="NFT IMAGE" width=300px>
            <div class="card-body">
            <h5 class="card-title">Sale Id: ${saleId}</h5>
              <h5 class="card-title">Id: ${tokenId}</h5>
              <h5 class="card-title">Contract Address: ${contractAddress}</h5>
              <h5 class="card-title">Seller Address: ${seller}</h5>
              <button class = "insideBtns" onclick = "buyToken()">Buy</button>
            </div>
          </div>
        `);
    } catch (error) {
      swal({
        title: "Failed to show sale tokens",
        icon: "error",
        dangerMode: true,
      });
      console.error(error);
    }
  }
  eButton();
}

async function setOnAuction() {}

async function showAssets() {
  $(".myAssets").css("display", "block");
  $(".myAssets").empty();
  $("#homeBtns").prop("disabled", true);

  $(".myAssets").append(`ERC721 Tokens`);
  let tokens = [];
  const totalTokens = await contract721.methods.tokenIdCounter().call();
  let indexed = 0;
  for (let i = 0; i < totalTokens; i++) {
    let index = i + 1;
    let owner;
    try {
      owner = await contract721.methods.ownerOf(index).call();
      owner = owner.toLowerCase();
      if (owner === accounts[0]) {
        tokens[indexed] = index;
        indexed++;
        console.log(indexed);
      }
    } catch (error) {
      console.error(error);
    }
  }
  if (tokens.length === 0) {
    return;
  } else {
    // $("#myTokens").append(`My Tokens`);
    for (let id = 0; id < tokens.length; id++) {
      const tokenId = tokens[id];
      console.log("Hello");
      const uri = await contract721.methods.tokenURI(tokenId).call();
      const response = await fetch(uri);
      const jsonData = await response.json();
      console.log(jsonData);

      $(".myAssets").append(`
          <div id=${id} class="card">
            <img src="${jsonData.image}" class="card-img-top" alt="NFT IMAGE", width="300px>
            <div class="card-body">
              <h5 class="card-title">Id: ${tokenId}</h5>
              <h5 class="card-title">Name: ${jsonData.name}</h5>
              <h5 class="card-title">Description: ${jsonData.descrption}</h5>
            </div>
          </div>
        `);
    }
  }

  $(".myAssets").append(`ERC1155 Tokens`);
  tokens = await contract1155.methods.mintedIds().call();
  console.log(tokens);
  for (let i = 0; i < tokens.length; i++) {
    let index = i + 1;
    let balance;
    try {
      balance = await contract1155.methods.balanceOf(user, index).call();
      if (balance > 0) {
        const uri = await contract1155.methods.tokenURI(index).call();
        const response = await fetch(uri);
        const jsonData = await response.json();

        $(".myAssets").append(`
        <div id=${i} class="card">
          <img src="${jsonData.image}" class="card-img-top" alt="NFT IMAGE", width="300px>
          <div class="card-body">
            <h5 class="card-title">Id: ${index}</h5>
            <h5 class="card-title">Number of Tokens: ${balance}</h5>
            <h5 class="card-title">Name: ${jsonData.name}</h5>
            <h5 class="card-title">Description: ${jsonData.descrption}</h5>
          </div>
        </div>
      `);
      }
    } catch (error) {
      swal({ title: `Failed to load Assets`, icon: "error" });
      console.log(error);
    }
  }
}

// $("#home").click(connectInside());
