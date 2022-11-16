const Spacebear = artifacts.require('Spacebear');
const truffleAssert = require('truffle-assertions');

contract('Spacebear', (accounts) => {
  let spacebearInstance;

  before(async () => {
    spacebearInstance = await Spacebear.deployed();
  });

  it('should return correct contract name', async () => {
    assert.equal(await spacebearInstance.name(), 'Spacebear');
  });

  it('should credit NFT to a correct account', async () => {
    const txResult = await spacebearInstance.safeMint(accounts[1], 'spacebear_1.json');
    truffleAssert.eventEmitted(txResult, 'Transfer', {from: '0x0000000000000000000000000000000000000000',
                                                      to: accounts[1],
                                                      tokenId: web3.utils.toBN('0')});
    const owner = await spacebearInstance.ownerOf(0);
    assert.equal(owner, accounts[1]);
  });
});
