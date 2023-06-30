// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/token/ERC1155/extensions/ERC1155Burnable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC1155/extensions/ERC1155Supply.sol";
import "./IERC1155mint.sol";

contract MyERC1155 is ERC1155, ERC1155Burnable, ERC1155Supply, IERC1155mint {
    mapping(uint256 => address) private idOwner;
    mapping(uint256 => string) public tokenURI;
    uint256[] private _mintedTokenIds;

    constructor() ERC1155("") {}

    function mint(
        address account,
        uint256 id,
        uint256 amount,
        string memory uri_
    ) public {
        require(msg.sender.code.length > 0, "MyERC1155: mint from market only");
        require(amount > 0, "MyERC1155: minting zero tokens");
        require(
            idOwner[id] == account || idOwner[id] == address(0),
            "MyERC1155: id belongs to different owner"
        );
        if (!exists(id)) {
            idOwner[id] = account;
            tokenURI[id] = uri_;
            _mintedTokenIds.push(id);
        }

        _mint(account, id, amount, "");
    }

    // The following functions are overrides required by Solidity.

    function _beforeTokenTransfer(
        address operator,
        address from,
        address to,
        uint256[] memory ids,
        uint256[] memory amounts,
        bytes memory data
    ) internal override(ERC1155, ERC1155Supply) {
        super._beforeTokenTransfer(operator, from, to, ids, amounts, data);
    }

    function mintedIds() public view returns (uint256[] memory) {
        return _mintedTokenIds;
    }
}
