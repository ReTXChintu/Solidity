// SPDX-License-Identifier: MIT

pragma solidity >=0.7.0 <0.9.0;

contract C {
    uint private data;
    uint public info;

    constructor() {
        info = 10;
    }

    function increment() private pure returns (uint) {
        // return a + 1;
    }

    function updateData(uint a) public {
        data = a;
    }

    function getData() public virtual view returns (uint) {
        return info;
    }

    function compute(uint a, uint b) internal pure returns (uint) {
        return a + b;
    }
}

contract D {
   function readData() public returns(uint) {
      C c = new C();
      c.updateData(7);         
      return c.getData();
   }
}
//Derived Contract
contract E is C {
   uint private result;
   C private c;
   
   constructor() {
      c = new C();
   }  
   function getComputedResult() public {      
      result = compute(3, 5); 
   }
   function getResult() public view returns(uint) { return result; }
   function getData() public override view returns(uint) { return c.info(); }
}
