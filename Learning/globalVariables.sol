// SPDX-License-Identifier: MIT

pragma solidity >=0.7.0 <0.9.0;

contract GlobalVariables {
    event logstring(string);
    event loguint(uint);
    event logbytes(bytes);
    event logaddress(address);
    event logbyte4(bytes4);
    event logblock(bytes32);

    function globalVariable() public payable {
        emit logaddress(block.coinbase);
        emit loguint(block.difficulty);
        emit loguint(block.gaslimit);
        emit loguint(gasleft());
        emit loguint(tx.gasprice);
        emit loguint(block.number);
        emit loguint(block.timestamp);
        // emit loguint(now);
        emit logbytes(msg.data);
        emit logbyte4(msg.sig);
        emit loguint(msg.value);
        emit logaddress(msg.sender);
        emit logaddress(tx.origin);
        emit logblock(blockhash(block.number));
    }

}