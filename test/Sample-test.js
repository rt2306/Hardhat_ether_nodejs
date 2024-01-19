// first step

// const { expect } = require("chai");
// const { ethers } = require("hardhat");

// describe("Greeter", async function () {
//   it("Should return the new greeting once it's changed", async function () {
//     const Greeter = await ethers.getContractFactory("Greeter");
//     const greeter = await Greeter.deploy("Hello Raja G");
// await greeter.deployed()  // remove this line not working

//     expect(await greeter.greet()).to.equal("Hello Raja G"); 
//   });
// });



// second 
// const { expect } = require("chai");
// const { ethers } = require("hardhat");

// describe("Greeter", async function () {
//     let contract;
//     beforeEach(async()=>{
//         const Greeter = await ethers.getContractFactory("Greeter");
//         const greeter = await Greeter.deploy("Hello Raja G");
//         contract = greeter;
//     })
//   it("Should return the new greeting once it's changed", async function () {
   

//     expect(await contract.greet()).to.equal("Hello Raja G");
   
//   });
//   it("Should assign new value to greeting variable " ,async function(){
//  const setGreetingTx = await contract.setGreeting("Hola,bro what's up");

//     await setGreetingTx.wait();

//     expect(await contract.greet()).to.equal("Hola,bro what's up");
//   })
// });



// third

const { expect,assert } = require("chai");
const { ethers } = require("hardhat");

describe("Greeter", async function () {
    let contract;
    beforeEach(async()=>{
        const Greeter = await ethers.getContractFactory("Greeter");
        const greeter = await Greeter.deploy("Hello Raja G");
        contract = greeter;
    })
  it("Should return the new greeting once it's changed", async function () {
   

assert.equal(await contract.greet(),"Hello Raja G")  
  });
  it("Should assign new value to greeting variable " ,async function(){
 const setGreetingTx = await contract.setGreeting("Hola,bro what's up");

    await setGreetingTx.wait();

    expect(await contract.greet()).to.equal("Hola,bro what's up");
  })
});