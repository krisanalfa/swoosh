const Smooch = require('smooch-core')

const smooch = new Smooch({
  keyId: process.env.KEY_ID,
  secret: process.env.SECRET,
  scope: 'app'
})

module.exports = smooch
