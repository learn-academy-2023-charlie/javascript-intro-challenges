//  var groceryList = ["chips", "dip", "cookies"]

// Write the code that will add "soda" to the end of the original array.
// groceryList.push("soda")
// console.log(groceryList)
// [ 'chips', 'dip', 'cookies', 'soda' ]


// Write the code that will add "granola" to the end of array without altering the original array.
// var groceryAdd = "granola"
// console.log(groceryList.concat(groceryAdd))
// console.log(groceryList)
// [ 'chips', 'dip', 'cookies', 'granola' ]
// [ 'chips', 'dip', 'cookies' ]


// Write the code that will return a subset of the array containing only "chips" and "dip".
// let upDate = groceryList.slice(0,2)
// console.log(upDate)
// [ 'chips', 'dip' ]


// Write the code that will add "beans" to the "chips" and "dip" array.

// upDate.push("beans")
// console.log(upDate)
// [ 'chips', 'dip', 'beans' ]



// Consider the variable:

// Write the code that will add the number 0 to the beginning of the array.
// var numbers = [2, 4, 6, 8, 10]
// numbers.unshift(0)
// console.log(numbers)
// [ 0, 2, 4, 6, 8, 10 ]


// // // Write the code that will add the number 12 to the end of the array.
// numbers.push(12)
// // console.log(numbers)
// [0,  2,  4, 6, 8, 10, 12]

// Write the code that will remove the first number from the array.
// numbers.shift()
// console.log(numbers)
// [ 2, 4, 6, 8, 10, 12 ]

// Write the code that will add the number 0 to the beginning of the array without altering the original array. HINT: it's not .unshift You'll have to get creative! ;)
// var newArray = numbers.reverse().concat(0).reverse()
// console.log(newArray)
// [0,  2,  4, 6, 8, 10, 12]

// console.log(numbers.reverse().concat(0).reverse())
// console.log(numbers)
// [0,  2,  4, 6, 8, 10, 12]
// [ 12, 10, 8, 6, 4, 2 ]

// Consider the variable:

// var numSet = [2, 13, 6, 8, 4, 2]
// Write the code that finds the index of the first appearance of the number 2.
// console.log(numSet.indexOf(2))
// 0

// Write the code that finds the index of the last appearance of the number 2.
// console.log(numSet.lastIndexOf(2))
// 5


// Write the code that returns the number at the third index.
// console.log(numSet[2])
// 6

// Consider the variable:
// var characters = ["y", "a", "r", "r", "a"]

// Write the code that brings all the letters in the characters array together into a string.
// console.log(characters.join(""))
// yarra


// Write the code that reverses the order of the letters in the characters array and saves it into a variable called charsReversed.
// var charsReversed = characters.reverse()
// console.log(charsReversed)
// [ 'a', 'r', 'r', 'a', 'y' ]


// Write the code that brings all the letters in the charsReversed array together into a string with an asterisk between each letter.
// console.log(charsReversed.join("*"))
//a*r*r*a*y


// Write the code that brings all the letters in the charsReversed array together into a string without separators.
// console.log(charsReversed.join(""))
// array


// Create two arrays consisting of three first names of your cohort members in each.
let firstArray = ["Tucker", "Aubrey", "Will"]
let secondArray = ["Justin", "Scott", "Bea"]


// Write the code that sorts the names in alphabetical order.
// console.log(firstArray.sort())
// console.log(secondArray.sort())
// [ 'Aubrey', 'Tucker', 'Will' ]
// [ 'Bea', 'Justin', 'Scott' ]


// Write the code that sorts the names in reverse alphabetical order.
// console.log(firstArray.sort().reverse())
// console.log(secondArray.sort().reverse())
// [ 'Will', 'Tucker', 'Aubrey' ]
// [ 'Scott', 'Justin', 'Bea' ]


// Write the code that sorts all the names in alphabetical order in a single array.
// console.log(firstArray.concat(secondArray).sort())


// Consider the variables:
var numbers = [42, 221, 71, 7, 18, 87]
var oddIndexes = []

// Write the code that logs the values from the numbers array that are at odd indexes.
oddIndexes = numbers.filter((num) => num % 2 === 1)
console.log(oddIndexes)


// Write the code that adds the values from odd indexes into the oddIndexes array.






