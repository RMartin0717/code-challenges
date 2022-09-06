// completed September 6. 2022

class Flattener {
  constructor() {
    this.flattened = []
  }

  flattener(numbers) {
    numbers.forEach(element => {
      if(!element.length) {
        this.flattened = [...this.flattened, element]
      } else {
        this.flattener(element)
      }
    })
    return this.flattened
  }
}

module.exports = Flattener

// Flattener Problem
// In Ruby and JavaScript, there is a built in method/function to flatten arrays, meaning it makes them one-dimensional. Below are examples of both Ruby and JavaScript:
// #Ruby
// nums = [1, 2, 3, [[4], 5], [[[6]]]]
// nums.flatten
// => [1, 2, 3, 4, 5, 6]
// #JavaScript
// var nums = [ 0, 1, 2, [ 3, 4 ] ]
// nums.flat()
// => [ 0, 1, 2, 3, 4 ]
// Your goal is to recreate this functionality without using the built in method/function. You will be given a deeply nested array, or multi-dimensional array, that will look similar to either of the below:
// nums = [1, 2, 3, [[4], 5], [[[6]]]]
// words = ["hi", "this is", [[["string"], "that is very"], [[[["nested"]]]]]]
// The contents of the array are not significant. Your method/function should take an input of a multi-dimensional array and output a one-dimensional array. More simply put, remove the deeply nested brackets to return a single array.

// i am starting with an array of elements which may or may not be arrays
  //create an empty array
  //iterate over given array
    //if the current element is not an array, add it to the stored array
    //if the current element is an array, recursively call the function
// i need to return a flattened array
