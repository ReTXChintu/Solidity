// SPDX-License-Identifier: MIT

pragma solidity >=0.7.0 <0.9.0;

contract Conversion {
    // uint8 x = 5;
    // uint16 y = 10;

    function conversion(uint8 x,uint16 y) public pure returns (uint32) {
        return uint32(x+y);  // Implicit conversion

    }
    
    function conversion2(uint16 x,uint16 y) public pure returns (uint32) {
        return uint8(x+y);  // Explicit conversion

    }

}