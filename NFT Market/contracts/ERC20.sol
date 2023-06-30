// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MyERC20 is ERC20 {
    string private _name;
    string private _symbol;
    uint256 public _mintingPrice;
    uint256 private dec = decimals();

    constructor(
        string memory name,
        string memory symbol,
        uint256 mintingPrice
    ) ERC20(name, symbol) {
        _name = name;
        _symbol = symbol;
        _mintingPrice = mintingPrice;
    }

    function mint(uint256 numberOfTokens) public  {
        require(numberOfTokens > 0, "Myerc20: minting zero number of tokens");
        // require(
        //     msg.value == (numberOfTokens * _mintingPrice) / 10**dec,
        //     "Myerc20: send enough ether"
        // );
        _mint(msg.sender, numberOfTokens);
    }

    function burn(uint256 numberOfTokens) external {
        require(
            numberOfTokens > 0 && balanceOf(msg.sender) >= numberOfTokens,
            "Myerc20: invalid number of tokens"
        );
        _burn(msg.sender, numberOfTokens);
        payable(msg.sender).transfer(numberOfTokens * _mintingPrice/10**dec);
    }
}
