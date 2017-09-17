'use strict'

const {functionComments} = require('pon-doc')

{
  const comments = functionComments('lib/my-file.js')
  console.log(comments) // -> Parsed function jsdoc comments
}
