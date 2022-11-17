// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.17;

import "forge-std/Test.sol";
import "../src/Spacebear.sol";

contract SpacebearTest is Test {
    Spacebear public spacebear;

    function setUp() public {
        spacebear = new Spacebear();
    }

    function testContractName() public {
        assertEq(spacebear.name(), 'Spacebear');
    }

    function testMintToken() public {
        spacebear.safeMint(msg.sender, 'spacebear_1.json');
        assertEq(spacebear.ownerOf(0), msg.sender);
    }

    function testTokenURI() public {
        spacebear.safeMint(msg.sender, 'spacebear_1.json');
        string memory expectedTokenURI = 'https://ethereum-blockchain-developer.com/2022-06-nft-truffle-hardhat-foundry/nftdata/spacebear_1.json';
        assertEq(spacebear.tokenURI(0), expectedTokenURI);
    }

    function testMintTokenNotOwner() public {
        address notOwnerAddress = address(0x1);
        vm.startPrank(notOwnerAddress);
        vm.expectRevert('Ownable: caller is not the owner');
        spacebear.safeMint(notOwnerAddress, 'spacebear_1.json');
        vm.stopPrank();
    }
}
