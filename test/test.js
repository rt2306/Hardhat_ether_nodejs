const {time ,loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
// console.log(time);
// console.log(loadFixture);

const {anyValue} = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
// console.log(anyValue);

const {expect} = require("chai")
// console.log(expect);

const {ethers} = require("hardhat");
// console.log(ethers);

describe("MyTest",function(){
    async function runEveryTime() {
        const ONE_YEAR_IN_SECONDS = 356 * 24 * 60 * 60;
        const ONE_GEWI = 1000000000 
        const lockAmount = ONE_GEWI;
        const unlockTime = await (time.latest()) + ONE_YEAR_IN_SECONDS;
        // console.log(unlockTime);


        const [owner,otherAccount] = await ethers.getSigners();
        console.log(owner)
        console.log(otherAccount);
        
        
    }
    runEveryTime();
})