const {
  time,
  loadFixture,
} = require("@nomicfoundation/hardhat-network-helpers");
// console.log(time);
// console.log(loadFixture);

const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
// console.log(anyValue);

const { expect } = require("chai");
// console.log(expect);

const { ethers } = require("hardhat");
// console.log(ethers);

describe("MyTest", function () {
  async function runEveryTime() {
    const ONE_YEAR_IN_SECONDS = 356 * 24 * 60 * 60;
    const ONE_GEWI = 1000000000;
    const lockAmount = ONE_GEWI;
    const unlockTime = (await time.latest()) + ONE_YEAR_IN_SECONDS;
    // console.log(unlockTime);

    const [owner, otherAccount] = await ethers.getSigners();
    // console.log(owner)
    // console.log(otherAccount);
    const MyTest = await ethers.getContractFactory("MyTest");
    const myTest = await MyTest.deploy(unlockTime, { value: lockAmount });
    // console.log(myTest,'111111111111');
    // console.log(unlockTime,'2222222222222222222');
    // console.log(lockAmount,'333333333333');
    // console.log(owner,'4444444444444');
    // console.log(otherAccount,'5555555555555555555555555');
    return { myTest, unlockTime, lockAmount, owner, otherAccount };
  }

  describe("Deployment", function () {
    // check a unlocked time
    it("Should check unlocked time", async function () {
      const { myTest, unlockTime } = await loadFixture(runEveryTime);
      // console.log(myTest,unlockTime);
      expect(await myTest.unlockedTime()).to.equal(unlockTime);
    });

    // check owner

    it("Should be the right owner", async function () {
      const { myTest, owner } = await loadFixture(runEveryTime);
      expect(await myTest.owner()).to.equal(owner.address);
    });
    // checl balance
    it("Should receive and store the funds to MyTest", async function () {
      const { myTest, lockAmount } = await loadFixture(runEveryTime);
      // const contractBal = await ethers.provider.getBalance(myTest.target);
      //  console.log(contractBal,'contractBalcontractBal');

      expect(await ethers.provider.getBalance(myTest.target)).to.equal(
        lockAmount
      );
    });
    //condition check
    it("Should fail if the unlocked is not in the future", async function () {
      const latestTime = await time.latest();
      // console.log(latestTime / 60 / 60 / 60 / 24);
      const MyTest = await ethers.getContractFactory("MyTest");

      await expect(MyTest.deploy(latestTime, { value: 1 })).to.be.revertedWith(
        "Your unlock time must be in the future"
      );
    });
  });

  describe("Withdrawals", function () {
    describe("Validation", function () {
      //Time check for withdarw
      it("Shouldn revert wih the right if called to soon", async function () {
        const { myTest } = await loadFixture(runEveryTime);

        await expect(myTest.withdraw()).to.be.revertedWith(
          "wait till the period complete"
        );
      });

      // right owner

      it("Should revert the message for right owner", async function () {
        const { myTest ,unlockedTime,otherAccout} = await loadFixture(runEveryTime);

        const newTime = await time.increaseTo(unlockedTime);
        // console.log(newTime)
      await time.increaseTo(unlockedTime);
      await expect(myTest.connect(otherAccout).withdraw()).to.be.revertedWith("You are not owner")
      });

    });
  });
  runEveryTime();
});
