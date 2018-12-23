var bitcoinjs = require('bitgo-utxo-lib')
var bip32utils = require('bip32-utils')

// Hierarchical Deterministic wallet
function phraseToHDWallet(phraseStr) {
  // Seed key, make it fucking strong
  // phraseStr: string
  const seedHex = Buffer.from(phraseStr.slice(0, 64)).toString('hex')

  //Set Network
  let network = bitcoinjs.networks['zer']
  //console.log('Network ' + network)

  // chains
  const hdNode = bitcoinjs.HDNode.fromSeedHex(seedHex, network)
  var chain = new bip32utils.Chain(hdNode)

  // Creates 42 address from the same chain
  for (var k = 0; k < 42; k++){
    chain.next()
  }

  // Get private keys from them
  var privateKeys = chain.getAll().map((x) => chain.derive(x).keyPair.toWIF())

  return privateKeys
}

module.exports = {
  phraseToHDWallet: phraseToHDWallet
}
