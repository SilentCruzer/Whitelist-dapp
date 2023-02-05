const { ethers } = require("hardhat");
// Whitelist Contract Address: 0xb4d11574405a9BC83937AD1AB2742f9caA0d1153
async function main() {
  const whitelistContract = await ethers.getContractFactory("Whitelist");
  const deployedWhitelistContract = await whitelistContract.deploy(10);

  await deployedWhitelistContract.deployed();
  
  console.log("Whitelist Contract Address:", deployedWhitelistContract.address); 
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });