var assert = require('chai').assert;
var Flattener = require('../exercises/flattener.js');

describe('Flattener', function() {
  it('should return a flattened array', function() {
    let flatten = new Flattener()
    console.log('hi')
    assert.deepEqual(flatten.flattener([1, 2, 3, [[4], 5], [[[6]]]]), [1, 2, 3, 4, 5, 6])
  })
})
