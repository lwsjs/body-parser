module.exports = MiddlewareBase => class BodyParser extends MiddlewareBase {
  description () {
    return 'Makes request body available to downstream middleware.'
  }
  middleware () {
    return require('koa-bodyparser')()
  }
}
