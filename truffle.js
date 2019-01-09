// Allows us to use ES6 in our migrations and tests.
require('babel-register')

// Edit truffle.config file should have settings to deploy the contract to the Rinkeby Public Network.
// Infura should be used in the truffle.config file for deployment to Rinkeby.
const HDWalletProvider = require("truffle-hdwallet-provider");
module.exports = {
  networks: {
    ganache: {
      host: '127.0.0.1',
      port: 7545,
      network_id: '*' // Match any network id
    },
    rinkeby: {
      provider: function() {
        return new HDWalletProvider("venture blame dress gauge curtain ridge author mixed physical couple snap treat",
                                    "https://rinkeby.infura.io/v3/4dd6cfedc4874cad8e51cb3a0480d867")
      },
      network_id: '*',
      gas: 4500000,
      gasPrice: 10000000000,
    }
  }
};
