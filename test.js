const Tom = require('test-runner').Tom
const BodyParser = require('./')
const Lws = require('lws')
const a = require('assert')
const fetch = require('node-fetch')

const tom = module.exports = new Tom('body-parser')

tom.test('simple', async function () {
  const actuals = []
  const port = 8000 + this.index
  class One {
    middleware (options) {
      return function (ctx, next) {
        actuals.push(ctx.request.body.one)
      }
    }
  }
  const lws = Lws.create({
    port,
    stack: [ BodyParser, One ]
  })
  const response = await fetch(`http://localhost:${port}/`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify({ one: 'one' })
  })
  lws.server.close()
  a.deepStrictEqual(actuals, [ 'one' ])
})
