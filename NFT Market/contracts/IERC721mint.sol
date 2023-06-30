// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;


interface IERC721mint {
    function safeMint(address to, string memory uri) external;
}
