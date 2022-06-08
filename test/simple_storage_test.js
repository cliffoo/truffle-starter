const SimpleStorage = artifacts.require("SimpleStorage");

contract("SimpleStorage", () => {
  it("passes", async () => {
    const instance = await SimpleStorage.new();
    const code = await web3.eth.getCode(instance.address);
    const newAddr = "0xaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";

    // Try to copy runtime bytecode to new address.
    // It doesn't fail, but it also doesn't await properly.
    await web3.currentProvider.send({
      method: "evm_setAccountCode",
      params: [newAddr, code]
    }, (err, res) => {
      console.log(err);
      console.log(res);
    });

    const newAddrCode = await web3.eth.getCode(newAddr);
    console.log(newAddrCode);
  });
});
