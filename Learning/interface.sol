// SPDX-License-Identifier: MIT

pragma solidity >=0.7.0 <0.9.0;

interface Calculator {
   function sum(uint a, uint b) external view returns(uint);
   function subtract(uint a, uint b) external view returns(uint);
   function multiply(uint a, uint b) external view returns(uint);
   function divide(uint a, uint b) external view returns(uint);
}


contract Test is Calculator {

   constructor() {}
   function sum(uint a, uint b) external pure returns(uint) {
      uint result = a + b;
      return result;
   }
   function subtract(uint a, uint b) external pure returns(uint) {
      uint result = a - b;
      return result;
   }
   function multiply(uint a, uint b) external pure returns(uint) {
      uint result = a * b;
      return result;
   }
   function divide(uint a, uint b) external pure returns(uint) {
      uint result = a / b;
      return result;
   }

}
