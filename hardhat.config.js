require("@nomiclabs/hardhat-waffle");

/** @type import('hardhat/config').HardhatUserConfig */

const ROPSTEN_PRIVATE_KEY="12323434"
const URL ="1223"
module.exports = {
  solidity: "0.8.17",
  networks:{
    ropsten:{
      url:`{${URL}}`,
      accounts:[`${ROPSTEN_PRIVATE_KEY}`]
    }
  }
};
