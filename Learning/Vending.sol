// SPDX-License-Identifier: MIT

pragma solidity >=0.7.0 <0.9.0;

contract VendingMachine {
    address public owner;
    mapping(address =>uint256 ) private donutBalance;

    constructor() {
        owner = msg.sender;
        donutBalance[address(this)] = 100;
    }

    function getBalance() public view returns (uint256) {
        return donutBalance[address(this)];
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can perform this operation");
        _;
    }

    modifier exceptOwner(uint256 amount) {
        if (msg.sender != owner) {
            _;
        } else {
            if (amount <= donutBalance[address(this)]) {
                donutBalance[address(this)] -= amount;
                donutBalance[address(msg.sender)] += amount;
            } else {
                revert("Not enough stock. Please Refill.");
            }
        }
    }

    function reStock(uint256 amount) public onlyOwner {
        donutBalance[address(this)] += amount;
    }

    function purchase(uint256 amount) public payable exceptOwner(amount) {
        // x = amount*1 ether;
        // return x;
        require(
            msg.value == amount * 1 ether,
            "You have to pay 1 ether per Donut"
        );
        require(
            donutBalance[address(this)] * 1 ether >= amount * 1 ether,
            "Don't have enough stock"
        );
        donutBalance[address(this)] -= amount;
        donutBalance[address(msg.sender)] += amount;
    }

}
