require("@nomicfoundation/hardhat-toolbox");
require("hardhat-contract-sizer");
require("hardhat-gas-reporter");
require("hardhat-abi-exporter");

/** @type import('hardhat/config').HardhatUserConfig */
const ALCHEMY_API_KEY = "WsxlNfmkbav9JnB3WvSqOSc4mtFehNkk";
const SEPOLIA_PRIVATE_KEY = "c024f86ba203a9a7107169345c0942835c838e0afbd4edfec0a8b44e637e48f5";
module.exports = {
  solidity: "0.8.18",
  gasReporter: {
    currency: "INR",
    gasPrice: 21,
    coinmarketcap: "ce981fa1-da36-4dda-a910-c34e3ac57bbc",
    enabled: true,
  },
  contractSizer: {
    alphaSort: true,
    disambiguatePaths: false,
    runOnCompile: true,
  },
  abiExporter: [
    {
      path: "./abi/json",
      format: "json",
    },
    {
      path: "./abi/minimal",
      format: "minimal",
    },
    {
      path: "./abi/fullName",
      format: "fullName",
    },
  ],
  etherscan: {
    apiKey: "5XJI5X43W8U92HYUHZEUKMT1CFDB2E9TQA",
  },
  networks: {
    sepolia: {
      url: `https://eth-sepolia.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      accounts: [SEPOLIA_PRIVATE_KEY],
    },
  },
};
