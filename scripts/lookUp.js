// scripts/checkStorage.js
const { ethers } = require("hardhat");

async function main() {
  const Contract = await ethers.getContractFactory("Naira"); // Replace "YourContract" with your actual contract name
  const contractAddress = "0x6956F9E7d58B327d1155186B2C59f2Cf03c4F753"; // Replace with the address of your deployed contract
  const contract = Contract.attach(contractAddress);

  // Access storage variables
  const storageValue = await contract.symbol(); // Replace "storageVariable" with the name of the storage variable you want to check
  console.log("Storage Value:", storageValue.toString());
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
