// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.19;

import "hardhat/console.sol";

// Uncomment this line to use console.log
 contract Greeter {
    string private greeting;
    constructor(string memory _greeting){
        greeting = _greeting;
    }
    function greet() public view returns (string memory) {
        return greeting;
        
    }
    function setGreeting(string memory _greeting) public {
                console.log("This greeting will change from %S to %s",greeting,_greeting);   // for debuging 

        greeting = _greeting;
    }

 }