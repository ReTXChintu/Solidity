// SPDX-License-Identifier: MIT

pragma solidity >=0.7.0 <0.9.0;

contract Functions {
    address public owner;

    constructor(){
        owner=msg.sender;
    }

    modifier onlyOwner(){
        require(msg.sender==owner, "Not The Owner");
        _;
    }

    function setOwner(address _newOwner) public onlyOwner{
        require (_newOwner!=address(0), "Invalid address");
        owner = _newOwner;
    }

    function onlyOwnerCanAccess() public onlyOwner{

    }

    function anyOneCanAccess() public{
       
    }
}