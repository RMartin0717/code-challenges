/* n this assignment you'll implement an algorithm that is actually used in some programmer interviews. And the really shocking part is that some people fail it! This is an extension of the FizzBuzz problem. Write an implementation of the following algorithm.

Iterate through the numbers 0 through 1000 and for each one print out exactly one thing. These rules are in descending priority:

If it's evenly divisible by 3, 5, and 7 print SuperFizzBuzz
If it's evenly divisible by 3 and 7 print SuperFizz
If it's evenly divisible by 5 and 7 print SuperBuzz
If it's evenly divisible by 3 and 5 print FizzBuzz
If it's evenly divisible by 3, print Fizz
If it's evenly divisible by 5, print Buzz
If it's evenly divisible by 7, print Super
Otherwise print just the number */

class SuperFizzBuzz {
  constructor(range) {
    this.range = range || [0, 1000]
  }

  superFizzBuzz() {
    let processedNums = []

    for (let currentNum = this.range[0]; currentNum <= this.range[1]; currentNum++) {
      let toPrint = ''
      if(currentNum % 7 === 0) {
        toPrint = 'Super'
      }
      if(currentNum % 3 === 0) {
        toPrint = `${toPrint}Fizz`
      }
      if(currentNum % 5 === 0) {
        toPrint = `${toPrint}Buzz`
      }
      if(toPrint){
        processedNums.push(toPrint)
      } else {
        processedNums.push(currentNum)
      }
    }

    const sequence = processedNums.join('\n')
    return sequence
  }
}

module.exports = SuperFizzBuzz
