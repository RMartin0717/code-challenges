var assert = require('chai').assert;
var WhatDidIOrder = require('../exercises/whatDidIOrder.js');

describe('What Did I Order?', function() {
  it('should', function() {
    let whatDidIOrder = new WhatDidIOrder([13.75])
    assert.deepEqual(whatDidIOrder.whatDidIOrder(), [{ total: 13.75, items: ['veggie sandwich', 'nachos', 'nachos']}])
  })
})
