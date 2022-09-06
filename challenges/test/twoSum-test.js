var assert = require('chai').assert;
var TwoSum = require('../exercises/twoSum.js');

describe('Two Sum', function() {
  it('should return indices of the two numbers such that they add up to target', function() {
    let twoSum = new TwoSum()
    console.log(twoSum)
    assert.deepEqual(twoSum.twoSum([2,7,11,15], 9), [0,1])
  })
})
