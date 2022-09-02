var assert = require('chai').assert;
var SuperFizzBuzz = require('../exercises/superFizzBuzz.js');

describe('Array', function () {
  describe('#indexOf()', function () {
    it('should accept a number', function () {
      let superfizzbuzz = new SuperFizzBuzz(5)
      assert.equal(superfizzbuzz.number, 5);
    });
  });
});
