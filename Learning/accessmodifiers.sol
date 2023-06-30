// SPDX-License-Identifier: MIT

pragma solidity >=0.7.0 <0.9.0;

contract AccessModifiers {
    uint8 private num1;
    uint8 internal num2;
    uint8 public num3;
    event loguint(uint);

    constructor() {
        num1 = 3;
        num2 = 5;
        num3 = 7;
    }

    function getaddr() public returns (address) {
        emit loguint(tx.gasprice);
        return msg.sender;
    }

    function getaddr1() private returns (address) {
        emit loguint(tx.gasprice);
        return msg.sender;
    }

    function getaddr2() internal returns (address) {
        emit loguint(tx.gasprice);
        return msg.sender;
    }

    function getaddr3() external returns (address) {
        emit loguint(tx.gasprice);
        return msg.sender;
    }

    function caller() public returns (address) {
        return this.getaddr3();
    }
}

contract A is AccessModifiers {
    function sum() public view returns (uint8) {
        //Use of Internal Variable
        return num2 + num3;
    }

    

    function caller10() public {
        // getaddr1();
        getaddr2();
      
    }
}

contract B is A {
    function getNumber() public returns (uint8 num) {
        AccessModifiers obj = new AccessModifiers();
        return obj.num3();
    }
    // getaddr();

    function caller1() public {
        AccessModifiers obj2 = new AccessModifiers();
        obj2.getaddr();
        // obj2.getaddr3();
    }
    function caller2() public {
        AccessModifiers obj2 = new AccessModifiers();
        // obj2.getaddr();
        obj2.getaddr3();
    }

    // function caller() public {
    //     getaddr();
    // }
}
