const Spacebear = artifacts.require('Spacebear');
const truffleAssert = require('truffle-assertions');

contract('Spacebear', (accounts) => {
  let spacebearInstance;

  before(async () => {
    spacebearInstance = await Spacebear.deployed();
  });

  it('should return contract name', async () => {
    assert.equal(await spacebearInstance.name(), 'Spacebear');
  });

  it('should credit token to a correct account', async () => {
    const txResult = await spacebearInstance.safeMint(accounts[1], 'spacebear_1.json');
    truffleAssert.eventEmitted(txResult, 'Transfer', {from: '0x0000000000000000000000000000000000000000',
                                                      to: accounts[1],
                                                      tokenId: web3.utils.toBN('0')});
    
    const owner = await spacebearInstance.ownerOf(0);
    assert.equal(owner, accounts[1]);

    const expectedTokenURI = 'https://ethereum-blockchain-developer.com/2022-06-nft-truffle-hardhat-foundry/nftdata/spacebear_1.json';
    const tokenURI = await spacebearInstance.tokenURI(0);
    assert.equal(tokenURI, expectedTokenURI);
  });
});
