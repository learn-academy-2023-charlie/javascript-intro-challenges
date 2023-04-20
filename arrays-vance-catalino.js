// // Arrays Challenge

// Consider the variable:

// var groceryList = ["chips", "dip", "cookies"]
// Write the code that will add "soda" to the end of the original array.
var groceryList = ["chips", "dip", "cookies", "soda"]
console.log (groceryList)


// Write the code that will add "granola" to the end of array without altering the original array.
groceryList.push ("granola")
console.log (groceryList)

// Write the code that will return a subset of the array containing only "chips" and "dip".
console.log (groceryList.slice (0, 2))
var nachos = (groceryList.slice (0, 2))

// Write the code that will add "beans" to the "chips" and "dip" array.
nachos.push ("beans")
console.log (nachos)