// SPDX-License-Identifier: MIT

pragma solidity >=0.7.0 <0.9.0;

contract Shape {
    uint public a;
    uint public b;

    function setValue(uint _a, uint _b) public {
        a=_a;
        b=_b;
    }
    

    function area() external view virtual returns (uint){}
}

contract Rectangle is Shape {
    function area() public view virtual override returns (uint) {
        return a * b;
    }
}

contract Rhombus is Shape {
    function area() public view virtual override returns (uint) {
        return a * a;
    }
}

contract Square is Rectangle, Rhombus {
    function area() public view override(Rectangle, Rhombus) returns (uint) {
        return a * a;
    }
}
