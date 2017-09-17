/**
 * Parse function comments in file
 * @function functionComments
 * @param {string} filename - Filename to read
 * @returns {Object[]} Doc data
 */
'use strict'

const {commentsInFile} = require('ape-doc')

/** @lends functionComments */
function functionComments (filename) {
  return commentsInFile(filename)
    .filter((comments) => !!comments.function)
    .map((comments) => {
      const [func] = comments.function
      return {
        name: func.name,
        description: comments.description,
        params: comments.param.map(({type, name, description}) => ({
          name: name.trim(),
          type: type.replace(/\|/g, '&#124;'),
          description: description.trim().replace(/^-/, '')
        })),
        returns: comments.returns && comments.returns[0],
        get signature () {
          let {name, params, returns} = this
          let paramsText = params.map(({name}) => name).filter((name) => !/\./.test(name)).join(', ')
          let signature = `${name}(${paramsText})`
          if (returns) {
            signature += ` -> ${returns.type}`
          }
          return signature
        }
      }
    })
}

module.exports = functionComments
