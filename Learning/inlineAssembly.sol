// SPDX-License-Identifier: MIT

pragma solidity >=0.7.0 <0.9.0;

contract inlineAssembly {
    uint256[] private _data;

    constructor() {
        _data.push(1);
        _data.push(10);
        _data.push(100);
        _data.push(1000);
        _data.push(10000);
    }

    function iSum(uint256[] memory data) private pure returns (uint256 isum) {
        for (uint256 i = 0; i < data.length; ++i) {
            assembly {
                isum := add(isum, mload(add(add(data, 0x20), mul(i, 0x20))))
            }
        }
    }

    function Csum() external view returns (uint256) {
        return iSum(_data);
    }
}
