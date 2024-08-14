// /** @type import('hardhat/config').HardhatUserConfig */ 
// module.exports = {
//   solidity: {
//     version: "0.8.9",
//     defaultNetwork: "sepolia",
//     networks: {
//       hardhat: {},
//       sepolia: {
//         url: "https://11155111.rpc.thirdweb.com",
//         accounts: [`0x${ process.env.PRIVATE_KEY }`],
//       },
//     },
//     settings: {
//       optimizer: {
//         enabled: true,
//         runs: 200,
//       },
//     },
//   },
// };



require("@matterlabs/hardhat-zksync-solc");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  zksolc: {
    version: "1.3.9",
    compilerSource: "binary",
    settings: {
      optimizer: {
        enabled: true,
      },
    },
  },
  networks: {
    zksync_testnet: {
      url: "https://zksync2-testnet.zksync.dev",
      ethNetwork: "goerli",
      chainId: 280,
      zksync: true,
    },
    zksync_mainnet: {
      url: "https://zksync2-mainnet.zksync.io/",
      ethNetwork: "mainnet",
      chainId: 324,
      zksync: true,
    },
  },
  paths: {
    artifacts: "./artifacts-zk",
    cache: "./cache-zk",
    sources: "./contracts",
    tests: "./test",
  },
  solidity: {
    version: "0.8.17",
    defaultNetwork: "sepolia",
    networks: {
      hardhat: {},
      sepolia: {
        url: "https://11155111.rpc.thirdweb.com",
        accounts: [`0x${ process.env.PRIVATE_KEY }`],
      },
    },
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};

// solidity: {
  //     version: "0.8.9",
  //     defaultNetwork: "sepolia",
  //     networks: {
  //       hardhat: {},
  //       sepolia: {
  //         url: "https://11155111.rpc.thirdweb.com",
  //         accounts: [`0x${ process.env.PRIVATE_KEY }`],
  //       },
  //     },
  //     settings: {
  //       optimizer: {
  //         enabled: true,
  //         runs: 200,
  //       },
  //     },




// ganache: {
//   url: "http://localhost:7545", // Assuming Ganache is running on default port
//   chainId: 1337, // Assuming Ganache's chainId is 1337
// },

// fundpoint secret key = 2iFu2Igtt-dBVvJtA5VIegRFTHkn1x1uyLpgZgTHBxkcRDbh3mHoBHUn6poMi6zqTeA_IUWPo61MLI9fCAM-ow