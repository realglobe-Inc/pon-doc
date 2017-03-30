'use strict'

const { functionComments } = require('pon-doc')

{
  let comments = functionComments('lib/my-file.js')
  console.log(comments) // -> Parsed function jsdoc comments
}
