# Truffle

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

Truffle installed: https://github.com/trufflesuite/truffle

### Install dependencies

```
npm install
```

### Run unit tests

```
npm run test
```
Example
```
Janis-MBP:truffle janijegoroff$ npm run test

> test@1.0.0 test
> truffle test

This version of µWS is not compatible with your Node.js build:

Error: Cannot find module './uws_darwin_x64_111.node'
Falling back to a NodeJS implementation; performance may be degraded.


Using network 'test'.


Compiling your contracts...
===========================
> Everything is up to date, there is nothing to compile.


  Contract: Spacebear
    ✔ should return contract name
    ✔ should credit token to a correct account (93ms)
    ✔ should return token URI (73ms)


  3 passing (356ms)
```
