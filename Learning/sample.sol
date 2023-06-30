// SPDX-License-Identifier: MIT

pragma solidity >=0.7.0 <0.9.0;

//data types - values and references

// contract dataTypes{
//     bool public boolTemp = true;

//     int public temp = 243;      //range -2^255 to 2^255-1
//     uint public temp2 = 5467;   //range 0-2^256-1
//     uint16 public temp3 = 2435; //range 0-2^16-1

//     address public owneraddr = msg.sender;    // size 20bits, hexadecimal form,
//     address public thisaddr = address(this);    // size 20bits, hexadecimal form,

//     bytes32 public temp4;

// }

// contract Checking {
//     uint public data;
//     function x() public returns (uint) {
//         data = 3; // internal access
//         return this.data(); // external access
//         // return data;
//     }
// }

//////////////Modifier Overriding

// contract FunctionModifier {
//     address public owner;

//     constructor() {
//         owner = msg.sender;
//     }

//     modifier onlyOwner() virtual {
//         require(msg.sender == owner);
//         _;
//     }

//     function verify() external view onlyOwner {
//         revert("Owner verified.");
//     }
// }

// contract FunctionModifier2 is FunctionModifier {
//     modifier onlyOwner() override {
//         _;
//     }

//     function caller() public view {
//         // obj.verify();
//     }
// }



