/**
 * Test case for functionComments.
 * Runs with mocha.
 */
'use strict'

const functionComments = require('../lib/function_comments.js')
const { ok } = require('assert')
const co = require('co')

describe('function-comments', function () {
  this.timeout(3000)

  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Function comments', () => co(function * () {
    let comments = functionComments(require.resolve('../lib/function_comments'))
    ok(comments)
  }))
})

/* global describe, before, after, it */
