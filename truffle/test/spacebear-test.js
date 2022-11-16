const Spacebear = artifacts.require('Spacebear');
const truffleAssert = require('truffle-assertions');

contract('Spacebear', (accounts) => {
  it('should credit NFT to a correct account', async () => {
    const spacebearInstance = await Spacebear.deployed();
    const txResult = await spacebearInstance.safeMint(accounts[1], 'spacebear_1.json');
    truffleAssert.eventEmitted(txResult, 'Transfer', {from: '0x0000000000000000000000000000000000000000',
                                                      to: accounts[1],
                                                      tokenId: web3.utils.toBN('0')});
    const owner = await spacebearInstance.ownerOf(0);
    assert.equal(owner, accounts[1]);
  });
});
