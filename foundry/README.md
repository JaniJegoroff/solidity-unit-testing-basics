# Foundry

### Tested setup

```
macOS Monterey
12.6.2
```
```
node -v
v19.1.0
```

### Prerequisites

Foundry installed: https://github.com/foundry-rs/foundry

### Run unit tests

```
forge test
```
Example
```
Janis-MBP:foundry janijegoroff$ forge test
[⠒] Compiling...
No files changed, compilation skipped

Running 6 tests for test/Spacebear.t.sol:SpacebearTest
[PASS] testContractName() (gas: 9603)
[PASS] testMintToken() (gas: 101565)
[PASS] testMintTokenNotOwner() (gas: 11896)
[PASS] testTokenTransferFromNotOwnerAddress() (gas: 110345)
[PASS] testTokenTransferInvalidTokenId() (gas: 106605)
[PASS] testTokenURI() (gas: 104933)
Test result: ok. 6 passed; 0 failed; finished in 2.16ms
```
