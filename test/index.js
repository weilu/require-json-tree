var requireJsonTree = require('../index.js')
var assert = require('assert')

var file1 = require('./tree/file1')
var file2 = require('./tree/file2')

describe('requireJsonTree', function(){
  it('works', function(){
    tree = requireJsonTree('./tree')
    assert.deepEqual(tree.file1, file1)
    assert.deepEqual(tree.file2, file2)
  })
})

