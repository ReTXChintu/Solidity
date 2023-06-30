// SPDX-License-Identifier: MIT

pragma solidity >=0.7.0 <0.9.0;

contract ViewPure {
    uint8 private num1 = 8;

    function see() public view returns(uint8) {
        // uint8 num2 = ++num1;
        return num1;
    }

    function seeAgain() public pure returns(uint8) {
        uint8 num2 = 5;
        return num2;
        // return num1;
    }
}