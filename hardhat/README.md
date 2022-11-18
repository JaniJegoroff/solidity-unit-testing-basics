# Hardhat

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

Hardhat installed: https://github.com/NomicFoundation/hardhat

### Install dependencies

```
npm install
```

### Run unit tests

```
npx hardhat test
```
Example
```
Janis-MBP:hardhat janijegoroff$ npx hardhat test
You are using a version of Node.js that is not supported by Hardhat, and it may work incorrectly, or not work at all.

Please, make sure you are using a supported version of Node.js.

To learn more about which versions of Node.js are supported go to https://hardhat.org/nodejs-versions
Compiled 14 Solidity files successfully


  Spacebear
    ✔ should return contract name (1736ms)
    ✔ should return token URI
    ✔ should mint a token
    ✔ should fail to mint a token (92ms)
    ✔ should fail to transfer tokens from a wrong address
    ✔ should fail to transfer token with invalid token id


  6 passing (2s)
```
