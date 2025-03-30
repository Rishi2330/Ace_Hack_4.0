const hre = require("hardhat");

async function main() {
  // Get the contract factory
  const Upload = await hre.ethers.getContractFactory("Upload");
  
  // Deploy the contract
  const upload = await Upload.deploy();
  console.log("Upload contract deploying to:", upload.target);
  
  await upload.waitForDeployment();
  console.log("Upload contract deployed to:", await upload.getAddress());
}

// Handle errors
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
}); 