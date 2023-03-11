# Hardhat

### Tested setup

```
macOS Monterey
12.6.4
```
```
node -v
v19.7.0
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
WARNING: You are using a version of Node.js that is not supported, and it may work incorrectly, or not work at all. See https://hardhat.org/nodejs-versions




  Spacebear
    ✔ should return contract name (2603ms)
    ✔ should return token URI (74ms)
    ✔ should mint a token (41ms)
    ✔ should fail to mint a token (131ms)
    ✔ should fail to transfer tokens from a wrong address (79ms)
    ✔ should fail to transfer token with invalid token id (48ms)


  6 passing (3s)
```
