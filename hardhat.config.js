require('@nomicfoundation/hardhat-toolbox');
require('dotenv').config();

const GOERLI_RPC_URL = process.env.GOERLI_RPC_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const GOERLI_CHAIN_ID = 5;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: 'hardhat',
  networks: {
    goerli: {
      url: GOERLI_RPC_URL,
      accounts: [PRIVATE_KEY],
      chainId: GOERLI_CHAIN_ID,
    },
  },
  solidity: '0.8.9',
};
