/**
 * Document parser for pon
 * @module pon-doc
 */

'use strict'

let d = (module) => module && module.default || module

module.exports = {
  get functionComments () { return d(require('./function_comments')) }
}
