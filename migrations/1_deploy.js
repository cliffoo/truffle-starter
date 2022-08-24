const SimpleStorage = artifacts.require("SimpleStorage");
const HelloWorld = artifacts.require("HelloWorld");

module.exports = function (deployer) {
  deployer.deploy(SimpleStorage);
  deployer.deploy(HelloWorld);
};
