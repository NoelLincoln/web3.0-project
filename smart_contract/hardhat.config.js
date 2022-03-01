// https://eth-ropsten.alchemyapi.io/v2/fSXffuR5ADxrAvC93XvQcWTH7f-qNDV-

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity : '0.8.0',
  networks : {
    ropsten :{
      url: 'https://eth-ropsten.alchemyapi.io/v2/fSXffuR5ADxrAvC93XvQcWTH7f-qNDV-',
      accounts : ['473efba26c87ea18dc2fc1fb57b4aa2741b3d8ab36f11b2969a50c13532cd2f6']
    }
  }

}