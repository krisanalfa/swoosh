const smooch = require('./smooch')

module.exports = {
  sendMessage (id) {
    smooch.appUsers.sendMessage(id, {
      text: `Just put some vinegar on it [${id}]`,
      role: 'appMaker',
      type: 'text'
    }).then((res) => {
      // async code
      console.log(`Sucessfully sending message to ${id}`)
      console.log(JSON.stringify(res, null ,2))
      process.kill(0)
    }, (err) => {
      console.log(JSON.stringify(err, null ,2))
    })
  }
}
