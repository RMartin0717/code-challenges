//not complete, September 6, 2022

class WhatDidIOrder {
  constructor(receipts) {
    this.menuItems = {
      "veggie sandwich": 6.85,
      "extra veggies": 2.20,
      "chicken sandwich": 7.85,
      "extra chicken": 3.20,
      "cheese": 1.25,
      "chips": 1.40,
      "nachos": 3.45,
      "soda": 2.05,
    }
    this.receipts = receipts || [4.85, 11.05, 13.75, 17.75, 18.25, 19.40, 28.25, 40.30, 75.00]
    this.totalSpent = 0
    this.items = []
  }
  whatDidIOrder() {
    const itemsList = Object.keys(this.menuItems)
    // const sortedItemsList = itemsList.sort((a,b) => this.menuItems[b] - this.menuItems[a])

    const itemizedReceipts = this.receipts.map(receipt => {
      this.totalSpent = 0
      this.items = []
      for(let i = 0; i < itemsList.length; i++) {
        if(this.totalSpent < receipt) {
          this.addItem(itemsList[i], this.menuItems[itemsList[i]], receipt)
        }
        if(this.totalSpent === receipt) {
          return { total: receipt, items: this.items }
        }
      }
    })
    return itemizedReceipts
  }

  addItem(itemName, price, receiptAmount) {
    if(this.totalSpent + price > receiptAmount) {
      return
    }
    this.totalSpent = this.totalSpent + price
    this.items = [...this.items, itemName]
    console.log(this.totalSpent, this.items)
    this.addItem(itemName, price, receiptAmount)
  }

  //iterate over totals array
  //on each iteration, find first combo of food that adds up to total
  //create variable to track total spent so far
  //Object.keys(menuItems)
  //iterate over menuItems and use dot notation to get prices and sort array of menuItems by ascending price
  //iterate over sorted items (for loop so you can exit when receipt amount is reached) and for each item
  //check if price is less than receipt amount minus total spent so far
  //if it is less, add it to total spent so far
  //check again and add again if possible
  //check if total spent so far is equal to receipt amount
  //create and return an object with key value pairs for total and items
  //return totals array
}

module.exports = WhatDidIOrder
// In this challenge you are given a menu and a list of receipt values. Write a method/function to find the first combination of food that adds up to the receipt total. Return a print out of only one combination for that receipt, and move on to the next receipt. How the print out looks is up to you, but here are some examples:

// #Example 1
//     4.85:
//     3 items, extra veggies, chips, cheese

// #Example 2
//     13.75:
//     3 items, {'veggie sandwich': 1, 'nachos': 2}

// Constraints:

// you must use 100% of the receipt value, we don’t want any money left over
// you can order any quantity of any menu item
// none of the receipt values are “tricks”, they all have answers
// Tip:

// Doing subtraction and addition on money values CAN lead to “floating point precision” problems. For example, 4.85 - 1.25 might give you 3.599999996. Round values to two decimal places to make sure you’re finding answers.
