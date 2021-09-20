require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey close off success stone crawl praise purse hard light army gasp'; 
let testAccounts = [
"0x56c5cf0c7d58dd2d5abf28f9855e093f1a029342c6b878d532039e0d096782c8",
"0x9327324f29ddb33cf4b9d2d22d5190eec019ee21e701c3bd0d3ea37be8bd0500",
"0x8c188f791362f9369b4bc641ea39506049cfa005e4c1ad25bbe9d248fb88ed45",
"0xa908313dc3bff612ab70f116ca08d5415131c4e654a18e8f3e906773543efb71",
"0x1d66943b21b202328ef3157d5d7b6e480bc17ac15d7daded622c5d9855adff4d",
"0x71f61a09cfb582f693c0937afcc8cea3c81f67b539f889ba1465de3d37660f81",
"0xb527f696077409fab4ec4f7c83e09b043eda523a741c2173a04e35f06f37ad34",
"0x92c2c58cdd0881298dba0f85c11333f1df5bc974cc6239379de36f8838f17680",
"0x3825e1cbdecec6e8f05e5a6e09c051bc5c5763ae9d01fd295d3d569aaf99e4ea",
"0x54e9d0887e1e585a9c7aab2b7d4a5aa8f7f0b255d77bac5a399d286fcd163554"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

