require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */


task("accounts","Prints the list of accounts",async (taskArgs,hre)=>{
  const accounts =await hre.ethers.getSigners();

  for(const account of accounts){
    const address = await account.getAddress();
     console.log(address  )
  }
})
module.exports = {
  solidity: "0.8.19",
  defaultNetwork:"hardhat",
  networks:{
    hardhat:{}
  },
  paths:{
    sources: "./contracts",
    tests: "./test",
    cache:"./cache",
    artifacts:"./artifacts"
  },
};
