
const hre = require("hardhat");

async function main() {

  const natoken = await hre.ethers.getContractFactory("natoken");
  const natoken = await natoken.deploy();

  await natoken.deployed();

  console.log(
    `natoken with ${ethers.utils.formatEther(
      lockedAmount
    )}ETH and unlock timestamp ${unlockTime} deployed to ${natoken.address}`
  );
}


main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
