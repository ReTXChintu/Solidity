// SPDX-License-Identifier: MIT

pragma solidity >=0.7.0 <0.9.0;


contract constructorExample {
    string str;

    constructor() {
        str = "Hello World!!!";
    } 

    function getValue() public view returns(string memory) {
        return str;
    }
}

