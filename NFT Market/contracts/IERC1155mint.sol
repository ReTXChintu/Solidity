// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

interface IERC1155mint {
    function mint(
        address account,
        uint256 id,
        uint256 amount,
        string memory _tokenURI_
    ) external;
}
