const { ethers } = require("hardhat");

async function main() {
   // const [deployer] = await ethers.getSigners();
  // Define a list of wallets to airdrop NFTs
  const airdropAddresses = [
    '0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC',
    '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266',
    '0xBcB6F9e45Fc09c078dc4218C16741172f9c66c0c'
  ];

  const YourERC20Contract = await ethers.getContractFactory("Naira");
  const signer = "0xEA05b4b861751b3e3C2BF065Ce71fc84532010Af";

  // Get the instance of the contract
  const yourERC20Contract = await YourERC20Contract.attach("0x6956F9E7d58B327d1155186B2C59f2Cf03c4F753");
  const amount = 100000000000000000000n;
  //const amount1 = 100 * amount;
  // Mint tokens to the contract
  
  // Airdrop tokens to each address in the list
  for (let i = 0; i < airdropAddresses.length; i++) {
    const address = airdropAddresses[i];
    console.log(`Airdropping tokens to ${address}...`);
    await yourERC20Contract.transfer(address, amount, { from: signer });
  }

  console.log("Airdrop complete!");
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
