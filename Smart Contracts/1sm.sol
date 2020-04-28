pragma solidity ^0.6.4;


contract SimpleStorage {
    int storedData;

    event data(
        int _value
    );

    function set(int x) public {
        storedData = x;
    }

    function get() public {
        emit data(storedData);
    }

     
}
