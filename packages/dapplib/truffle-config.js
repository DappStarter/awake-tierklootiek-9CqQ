require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture roast food ski struggle cruise noise estate hockey kiwi tackle spy'; 
let testAccounts = [
"0x6b74d493ef29cd790cd748f4bb825474552523d71e6245b92fdfcd89766d9018",
"0xda4ade43d9e3dd5c15ee8afb0a966aeb09fc8c1feb8ef8cf745525cd47e099fe",
"0xacd9341874cd7463e48f9752ee9ec9e1bab3c290eccb49c61d955f6cc4cc8935",
"0x0d3d80fd518f8312490c8273b50d194410156c1cbe61ba9a0f32ac05a5774607",
"0x69623fa90d3150c7c63d28815470e5398acd57ad045d52aad987c39eea5113d5",
"0x03ac493369f16aed9904ed1629dcbb095115b8be40e0ddc808f01c41e801bbb1",
"0x6372e746cb338886c9312e42a8d52edff06e575f336284e565d095f377c0392d",
"0x233532f8cd93e844382ff0826bed3a4afe49adaf3d839d6cf398fa201afe4ff7",
"0xf2e844170a8fb328c104d754c2bb865d393e0019854a458d8b857dac71d6538a",
"0x4b87bc48e5fb2371fdd69355542ce36d1db289404d0668f43a5f309a6df29e0c"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


