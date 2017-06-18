module.exports = MiddlewareBase => class BodyParser extends MiddlewareBase {
  description () {
    return 'Request body parser.'
  }
  middleware () {
    return require('koa-bodyparser')()
  }
}
