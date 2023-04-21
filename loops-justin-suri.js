// Challenges
// Create a for loop that logs each number from 1 - 20.
// for(i=1; i<21; i++){
//     console.log(i)
// }
// output: 1-20

// Create a for loop that logs every other number from 1 - 20.
var numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
// for(i=0; i<numbers.length; i++){
//     if(numbers[i] % 2 == 0 ){
//         console.log(numbers[i])
//     }
// }

// Create a for loop that logs the result of each number from 1 - 20 tripled.
// for(i=1; i<21; i++){
//     console.log([i] * 3)
// }

// Create a for loop that logs each even number from 1-20, and in the place of every odd number, returns the word "ODD".
for(i=0; i<numbers.length; i++){
    if(numbers[i] % 2 == 0 ){
        console.log(numbers[i])
    } else {
        console.log("ODD")
    }
}
// output: ODD, 2, ODD, 4, ODD, 6 ...etc

// Consider this variable:

const nums = [3, 57, -9, 20, 67]
// Create the code that will log the largest number from the array.
nums.sort((a,b) => a-b)
console.log(nums.pop())
//output: 67

// Create the code that will log the smallest number from the array.
nums.sort((a,b) => b-a)
console.log(nums.pop())
// output: -9

// Create the code that will log the remainder of each number when divided by 2. Expected output: 1, 1, -1, 0, 1


// Consider this variable:

// const myString = "learn student"
// Create the code that will log the number of times the letter "e" occurs in the string.
// Create the code that will log every other character in the string.