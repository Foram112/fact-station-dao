const hre = require("hardhat");

async function main() {
  
  // const FSToken = await hre.ethers.getContractFactory("FSToken");
  // const fstoken = await FSToken.deploy(10, 10);

  // await fstoken.deployed();

  // console.log("FSToken deployed to:", fstoken.address);

  const FactStation = await hre.ethers.getContractFactory("FactStation");
  const factstation = await FactStation.deploy();

  await factstation.deployed();

  console.log("FactStation deployed to:", factstation.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
