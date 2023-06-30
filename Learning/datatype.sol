// SPDX-License-Identifier: MIT

pragma solidity >=0.7.0 <0.9.0;

//data types - values and references

contract dataTypes {
    bool public boolTemp = true;

    int public tedgemp = 243; //range -2^255 to 2^255-1
    uint public temp2 = 5467; //range 0-2^256-1
    uint16 public temp3 = 2435; //range 0-2^16-1

    address public addr = 0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2; // size 20bits, hexadecimal form,

    bytes32 public temp4 = "abcddddddddddddddddddddddddddddd";

    enum newEnum {
        _geeks,
        _for,
        geeks_
    }

    function Enum() public pure returns (newEnum) {
        return newEnum._for;
    }
}
