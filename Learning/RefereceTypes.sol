// SPDX-License-Identifier: MIT

pragma solidity >=0.7.0 <0.9.0;


// Reference Types

contract referenceTypes {
    uint[3] public array = [uint(1), 2, 3];

    uint[] public arr;

    // arr.push(5);
    function addData(uint num) public {
        arr.push(num);
    }

    function getData() public view returns (uint[] memory) {
        return arr;
    }

    function getLength() public view returns (uint) {
        return arr.length;
    }

    function getSum() public view returns (uint) {
        uint sum = 0;
        for (uint i = 0; i < uint(arr.length); i++) {
            sum = sum + arr[i];
        }
        return sum;
    }

    string f = "Element Found.";
    string nf = "Element not found.";

    function search(uint k) private view returns (string memory) {
        for (uint i = 0; i < uint(array.length); i++) {
            if (array[i] == k) {
                return f;
            } else {
                return nf;
            }
        }
    }

    function callSearch() public view returns (string memory) {
        return search(1);
    }
}

