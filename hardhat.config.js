require('@nomicfoundation/hardhat-toolbox');
require('dotenv').config();
require('./tasks/block-number');
require('@nomiclabs/hardhat-etherscan');

const GOERLI_RPC_URL = process.env.GOERLI_RPC_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const GOERLI_CHAIN_ID = 5;
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: 'hardhat',
  networks: {
    goerli: {
      url: GOERLI_RPC_URL,
      accounts: [PRIVATE_KEY],
      chainId: GOERLI_CHAIN_ID,
    },
    localhost: {
      url: 'http://127.0.0.1:8545/',
      chainId: 31337,
    },
  },
  solidity: '0.8.9',
  etherscan: {
    apiKey: ETHERSCAN_API_KEY,
  },
};
