import {expect } from "chai";
import {ethers} from "hardhat";

describe("Greeter",async function(){
    it("should return the new greeting once it's changed",async function(){
        const Greeter = await ethers.getContractFactory("Greeter");
        const greeter = await Greeter.deploy("Hello Raja G");
        await greeter.deployed();

        expect(await greeter.greet()).to.equal("Hello Raja G");
        const setGreetingTx = await greeter.setGreeting("Hola,mundoi");

        await setGreetingTx.wait();

        expect(await greeter.greet()).to.equal("Hola,mundoi");
    });
})