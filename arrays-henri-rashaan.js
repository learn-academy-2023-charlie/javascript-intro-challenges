// Challenges
// Copy the challenges into your JavaScript file. Comment out the instructions and code the solution to each problem beneath the prompt.

// Consider the variable:
var groceryList = ["chips", "dip", "cookies"]

// Write the code that will add "soda" to the end of the original array.
console.log(groceryList.push("soda"));
console.log(groceryList);
//output: [ 'chips', 'dip', 'cookies', 'soda' ]

// Write the code that will add "granola" to the end of array without altering the original array.
var newList = groceryList.push("granola");
console.log(newList);

// Write the code that will return a subset of the array containing only "chips" and "dip".
groceryList.pop("cookies")
console.log(groceryList);

// Write the code that will add "beans" to the "chips" and "dip" array.
groceryList.push("beans")
console.log(groceryList);

// Consider the variable:
var numbers = [2, 4, 6, 8, 10]

// Write the code that will add the number 0 to the beginning of the array.
numbers.unshift(0);
console.log(numbers);

// Write the code that will add the number 12 to the end of the array.
numbers.push(12);
console.log(numbers);

// Write the code that will remove the first number from the array.
numbers.shift();
console.log(numbers);

// Write the code that will add the number 0 to the beginning of the array without altering the original array. HINT: it's not .unshift You'll have to get creative! ;)
numbers.join("").concat("0");
console.log(numbers.join(""));
console.log(numbers.concat("0"));


// Consider the variable:
var numSet = [2, 13, 6, 8, 4, 2]

// Write the code that finds the index of the first appearance of the number 2.
numSet.indexOf(2);
console.log(numSet.indexOf(2));

// Write the code that finds the index of the last appearance of the number 2.
console.log(numSet.lastIndexOf(2));

// Write the code that returns the number at the third index.
console.log(numSet.slice(3,4));

// Consider the variable:
var characters = ["y", "a", "r", "r", "a"]

// Write the code that brings all the letters in the characters array together into a string.
console.log(characters.join(" "));

// Write the code that reverses the order of the letters in the characters array and saves it into a variable called charsReversed.
var charsReversed = (characters.reverse());
console.log(charsReversed);

// Write the code that brings all the letters in the charsReversed array together into a 
// string with an asterisk between each letter.

console.log(charsReversed.join("*"));

// Write the code that brings all the letters in the charsReversed array together into a string without separators.
console.log(charsReversed.join("").concat());

// Create two arrays consisting of three first names of your cohort members in each.
var name1 = ['Sara','Rashaan','Vance']
var name2 = ['Scott','Halie','Bea']

// Write the code that sorts the names in alphabetical order.
console.log(name1.sort(),name2.sort());

// Write the code that sorts the names in reverse alphabetical order.
console.log(name1.reverse(),name2.reverse());

// Write the code that sorts all the names in alphabetical order in a single array.
console.log(name1.concat(name2).sort())

// Consider the variables:
var numbers = [42, 221, 71, 7, 18, 87]
var oddIndexes = []

// Write the code that logs the values from the numbers array that are at odd indexes.
console.log(numbers.slice(1,numbers.length+1,2))

// Write the code that adds the values from odd indexes into the oddIndexes array.
oddIndexes = (numbers.slice(1,numbers.length+1,2))
console.log(oddIndexes);