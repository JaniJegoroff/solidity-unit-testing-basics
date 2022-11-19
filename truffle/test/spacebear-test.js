const Spacebear = artifacts.require('Spacebear');
const truffleAssert = require('truffle-assertions');
const { expectRevert } = require('@openzeppelin/test-helpers');

contract('Spacebear', (accounts) => {
  let spacebearInstance;

  before(async () => {
    spacebearInstance = await Spacebear.deployed();
  });

  it('should return contract name', async () => {
    assert.equal(await spacebearInstance.name(), 'Spacebear');
  });

  it('should mint a token', async () => {
    const minter = accounts[1];
    const txResult = await spacebearInstance.safeMint(minter, 'spacebear_1.json');
    truffleAssert.eventEmitted(txResult, 'Transfer', {from: '0x0000000000000000000000000000000000000000',
                                                      to: minter,
                                                      tokenId: web3.utils.toBN('0')});
    
    const owner = await spacebearInstance.ownerOf(0);
    assert.equal(owner, minter);
  });

  it('should return token URI', async () => {
    await spacebearInstance.safeMint(accounts[0], 'spacebear_1.json');

    const expectedTokenURI = 'https://ethereum-blockchain-developer.com/2022-06-nft-truffle-hardhat-foundry/nftdata/spacebear_1.json';
    const tokenURI = await spacebearInstance.tokenURI(0);
    assert.equal(tokenURI, expectedTokenURI);
  });

  it('should fail to transfer token from a wrong address', async () => {
    const owner = accounts[0];
    const notOwner = accounts[1];
    await spacebearInstance.safeMint(owner, 'spacebear_1.json');

    const msg = 'ERC721: caller is not token owner nor approved -- Reason given: ERC721: caller is not token owner nor approved.';
    await expectRevert(spacebearInstance.transferFrom(notOwner, owner, 0), msg);
  });

  it('should fail to transfer token with invalid token id', async () => {
    const owner = accounts[0];
    await spacebearInstance.safeMint(owner, 'spacebear_1.json');

    const msg = 'ERC721: invalid token ID -- Reason given: ERC721: invalid token ID.';
    await expectRevert(spacebearInstance.transferFrom(owner, owner, 99), msg);
  });
});
