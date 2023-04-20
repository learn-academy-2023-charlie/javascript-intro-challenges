
// Consider the variable:

var groceryList = ["chips", "dip", "cookies"]
// Write the code that will add "soda" to the end of the original array.

groceryList.push("soda");
console.log(groceryList);
//output: [ 'chips', 'dip', 'cookies', 'soda' ]

// Write the code that will add "granola" to the end of array without altering the original array.

console.log(groceryList.concat("granola"));
//output: [ 'chips', 'dip', 'cookies', 'soda', 'granola' ]

// Write the code that will return a subset of the array containing only "chips" and "dip".

console.log(groceryList.slice(0, 2));
//output: [ 'chips', 'dip' ]

// Write the code that will add "beans" to the "chips" and "dip" array.

console.log(groceryList.slice(0, 2).concat("beans"));
//output: [ 'chips', 'dip', 'beans' ]

// Consider the variable:
var numbers = [2, 4, 6, 8, 10]
// Write the code that will add the number 0 to the beginning of the array.
numbers.unshift(0);
console.log(numbers);
//output: [ 0, 2, 4, 6, 8, 10 ]


// Write the code that will add the number 12 to the end of the array.
numbers.push(12);
console.log(numbers);

// //output: [
//   0,  2,  4, 6,
//   8, 10, 12
// ]


// Write the code that will remove the first number from the array.
numbers.shift()
console.log(numbers);

//output: [ 2, 4, 6, 8, 10, 12 ]

// Write the code that will add the number 0 to the beginning of the array without altering the original array. HINT: it's not .unshift You'll have to get creative! ;)
var numbers2 = numbers
numbers2.unshift(0)
console.log(numbers2);

// //output: [
//   0,  2,  4, 6,
//   8, 10, 12
// ]

// Consider the variable:

var numSet = [2, 13, 6, 8, 4, 2]

// Write the code that finds the index of the first appearance of the number 2.
console.log(numSet.indexOf(2));
//output: 0

// Write the code that finds the index of the last appearance of the number 2.

console.log(numSet.lastIndexOf(2));
//output: 5

// Write the code that returns the number at the third index.

console.log(numSet[2]);
//output: 6

// Consider the variable:

var characters = ["y", "a", "r", "r", "a"]
// Write the code that brings all the letters in the characters array together into a string.

console.log(characters.join(""));
//output: yarra

// Write the code that reverses the order of the letters in the characters array and saves it into a variable called charsReversed.
var charsReversed = characters.reverse();
console.log(charsReversed);
//output: 
// [ 'a', 'r', 'r', 'a', 'y' ]

// Write the code that brings all the letters in the charsReversed array together into a string with an asterisk between each letter.

console.log(charsReversed.join("*"));
//output: a*r*r*a*y

// Write the code that brings all the letters in the charsReversed array together into a string without separators.

console.log(charsReversed.join(""));
//output: array

// Create two arrays consisting of three first names of your cohort members in each.
var charlieNames = ["Bea", "Aubrey", "C Rod"]
var charlieNames2 = ["Jessica", "Halie", "Henri"]
//output: 

// Write the code that sorts the names in alphabetical order.
console.log(charlieNames.sort());
console.log(charlieNames2.sort());
//output: [ 'Aubrey', 'Bea', 'C Rod' ]
// [ 'Halie', 'Henri', 'Jessica' ]

// Write the code that sorts the names in reverse alphabetical order.
console.log(charlieNames.sort().reverse());
console.log(charlieNames2.sort().reverse());
//output: [ 'C Rod', 'Bea', 'Aubrey' ]
// [ 'Jessica', 'Henri', 'Halie' ]

// Write the code that sorts all the names in alphabetical order in a single array.
console.log(charlieNames.concat(charlieNames2).sort());

//output: [ 'Aubrey', 'Bea', 'C Rod', 'Halie', 'Henri', 'Jessica' ]

// Consider the variables:
var numbers = [42, 221, 71, 7, 18, 87]
var oddIndexes = []
// Write the code that logs the values from the numbers array that are at odd indexes.

oddIndexes = numbers.filter(index => index % 2 != 0)
console.log(oddIndexes);
//output: 

// Write the code that adds the values from odd indexes into the oddIndexes array

//output: 