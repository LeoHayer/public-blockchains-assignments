require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config({ path: require('path').resolve(__dirname, '../.env') });

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  networks: {
    uniMa: {
      url: "http://134.155.50.136:8506",
      chainId: 1337,
      accounts: [process.env.METAMASK_1_PRIVATE_KEY],
      gas: "auto",
      gasPrice: "auto",
      gasMultiplier: 1
    }
  },
  solidity: "0.8.24",
};
