// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
  const erc1155 = await hre.ethers.deployContract("MyERC1155");
  await erc1155.waitForDeployment();

  // const erc721 = await hre.ethers.deployContract("MyERC721");
  // await erc721.waitForDeployment();

  // const market = await hre.ethers.deployContract("Market");
  // await market.waitForDeployment();

  // console.log(`MyERC721 deployed to: ${erc721.target}`);
  console.log(`MyERC1155 deployed to: ${erc1155.target}`);
  // console.log(`Market deployed to: ${market.target}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
