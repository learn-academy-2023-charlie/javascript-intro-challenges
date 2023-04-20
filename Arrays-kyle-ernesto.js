var groceryList = ["chips", "dip", "cookies"]


// Write the code that will add "soda" to the end of the original array.

// groceryList.push("soda")
// console.log(groceryList)
// output: [ 'chips', 'dip', 'cookies', 'soda' ]

// Write the code that will add "granola" to the end of array without altering the original array.

var myOtherArray = ["granola"]
myOtherArray.concat(groceryList)
// console.log(groceryList.concat(myOtherArray))
// output: [ 'chips', 'dip', 'cookies', 'granola' ]


// Write the code that will return a subset of the array containing only "chips" and "dip".
groceryList.pop()
// console.log(groceryList)
// output: [ 'chips', 'dip' ]


// Write the code that will add "beans" to the "chips" and "dip" array.
groceryList.push("beans")
console.log(groceryList)
// output: [ 'chips', 'dip', 'beans' ]