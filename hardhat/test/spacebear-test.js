const { expect } = require('chai');
const hre = require('hardhat');
const { loadFixture } = require('@nomicfoundation/hardhat-network-helpers');

describe('Spacebear', () => {
  async function deploySpacebearAndMintTokenFixture() {
    const Spacebear = await hre.ethers.getContractFactory('Spacebear');
    const spacebearInstance = await Spacebear.deploy();

    const [owner, otherAccount] = await ethers.getSigners();
    await spacebearInstance.safeMint(otherAccount.address, 'spacebear_1.json');
    return { spacebearInstance };
  }

  it('should return correct contract name', async () => {
    const { spacebearInstance } = await loadFixture(deploySpacebearAndMintTokenFixture);

    expect(await spacebearInstance.name()).to.equal('Spacebear');
  });

  it('should mint a token', async () => {
    const { spacebearInstance } = await loadFixture(deploySpacebearAndMintTokenFixture);
    const [_owner, otherAccount] = await ethers.getSigners();

    expect(await spacebearInstance.ownerOf(0)).to.equal(otherAccount.address);
  });

  it('should fail to transfer tokens from a wrong address', async () => {
    const { spacebearInstance } = await loadFixture(deploySpacebearAndMintTokenFixture);
    const [_owner, nftOwnerAccount, notNftOwnerAccount] = await ethers.getSigners();

    expect(await spacebearInstance.ownerOf(0)).to.equal(nftOwnerAccount.address);

    const msg = 'ERC721: caller is not token owner or approved';
    await expect(spacebearInstance
      .connect(notNftOwnerAccount)
      .transferFrom(nftOwnerAccount.address, notNftOwnerAccount.address, 0)).to.be.revertedWith(msg);
  });
});
