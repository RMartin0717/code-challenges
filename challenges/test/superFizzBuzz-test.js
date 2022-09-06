var assert = require('chai').assert;
var SuperFizzBuzz = require('../exercises/superFizzBuzz.js');

describe('SuperFizzBuzz', function () {
  it('should accept a range of numbers', function () {
    let superfizzbuzz = new SuperFizzBuzz([5, 20])
    assert.deepEqual(superfizzbuzz.range, [5,20])
  })
  it('should have a default range of 0 - 1000', function () {
    let superfizzbuzz = new SuperFizzBuzz()
    assert.deepEqual(superfizzbuzz.range, [0,1000])
  })
  it('should iterate over a given range of numbers and for a number divisible by 7, print super', function () {
    let superfizzbuzz = new SuperFizzBuzz([7,7])
    assert.equal(superfizzbuzz.superFizzBuzz(), 'Super')
  })
  it('should iterate over a given range of numbers and for a number divisible by 3, print fizz', function () {
    let superfizzbuzz = new SuperFizzBuzz([3,3])
    assert.equal(superfizzbuzz.superFizzBuzz(), 'Fizz')
  })
  it('should iterate over a given range of numbers and for a number divisible by 5, print buzz', function () {
    let superfizzbuzz = new SuperFizzBuzz([5,5])
    assert.equal(superfizzbuzz.superFizzBuzz(), 'Buzz')
  })
  it('should iterate over a given range of numbers and for a number divisible by 7 and 3, print superfizz', function () {
    let superfizzbuzz = new SuperFizzBuzz([21,21])
    assert.equal(superfizzbuzz.superFizzBuzz(), 'SuperFizz')
  })
  it('should iterate over a given range of numbers and for a number divisible by 7 and 5, print superbuzz', function () {
    let superfizzbuzz = new SuperFizzBuzz([35,35])
    assert.equal(superfizzbuzz.superFizzBuzz(), 'SuperBuzz')
  })
  it('should iterate over a given range of numbers and for a number divisible by 3 and 5, print fizzbuzz', function () {
    let superfizzbuzz = new SuperFizzBuzz([15,15])
    assert.equal(superfizzbuzz.superFizzBuzz(), 'FizzBuzz')
  })
  it('should iterate over a given range of numbers and for a number divisible by 7, 3, and 5, print superfizzbuzz', function () {
    let superfizzbuzz = new SuperFizzBuzz([105,105])
    assert.equal(superfizzbuzz.superFizzBuzz(), 'SuperFizzBuzz')
  })
  it('should iterate over a given range of numbers and print each number that is not divisible by 7, 3, or 5 and print the correct word in place of numbers that are divisible by 7, 3, or 5', function () {
    let superfizzbuzz = new SuperFizzBuzz([0,35])
    assert.equal(superfizzbuzz.superFizzBuzz(), 'SuperFizzBuzz\n1\n2\nFizz\n4\nBuzz\nFizz\nSuper\n8\nFizz\nBuzz\n11\nFizz\n13\nSuper\nFizzBuzz\n16\n17\nFizz\n19\nBuzz\nSuperFizz\n22\n23\nFizz\nBuzz\n26\nFizz\nSuper\n29\nFizzBuzz\n31\n32\nFizz\n34\nSuperBuzz')
  })
})
