const SimpleStorage = artifacts.require("SimpleStorage");

async function setCode(addr, code) {
  return new Promise((resolve, reject) => {
    web3.currentProvider.send({
      method: "evm_setAccountCode",
      params: [addr, code]
    }, (err, res) => {
      if (res?.result) { resolve(); }
      else { reject(); }
    });
  });
}

contract("SimpleStorage", () => {
  it("passes", async () => {
    const instance = await SimpleStorage.new();
    const code = await web3.eth.getCode(instance.address);
    const newAddr = "0xaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";

    await setCode(newAddr, code);
    const newAddrCode = await web3.eth.getCode(newAddr);
    console.log(newAddrCode);
  });
});
