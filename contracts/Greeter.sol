// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.19;

// Uncomment this line to use console.log
 contract Greeter {
    string private greeting;
event GreetingChanged(string newGreeting);
    constructor(string memory _greeting){
         emit GreetingChanged(_greeting);
        greeting = _greeting;
    }
    function greet() public view returns (string memory) {
        return greeting;
        
    }
    function setGreeting(string memory _greeting) public {
        emit GreetingChanged(_greeting);
        greeting = _greeting;
    }

 }