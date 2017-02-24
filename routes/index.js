const route = require('koa-route')
const prophet = require('./../prophet')

const postRoot = route.post('/', function *() {
  this.body = 'OK'
  this.res.status = 200
  this.response.status = 200

  prophet.sendMessage(this.request.body.appUser._id)
})

module.exports = {
  postRoot
}
