'use strict'

class BodyParser {
  middleware () {
    return require('koa-bodyparser')()
  }
}
