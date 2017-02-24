require('dotenv').config()

const koa = require('koa')
const route = require('koa-route')
const bodyParser = require('koa-bodyparser')
const routes = require('./routes')
const app = koa()

app.use(bodyParser())

app.use(routes.postRoot)

app.listen(9000)
