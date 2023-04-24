// // Challenges
// // Copy the challenges into your JavaScript file. Comment out the instructions and code the solution to each problem beneath the prompt. Each solution requires pseudocode. Test your functions with multiple function calls.

// // Write a function named marco that returns "polo".
// const marco = (name) => {
//     return `${name}`
// }
// console.log(marco("polo"))
// // output: polo

// // Write a function named greeting that takes a name as an argument and returns "Welcome, <person's name here>!"
// const greeting = (name) => {
//     return `Welcome, ${name}!`
// }
// console.log(greeting("marco"))
// // output: Welcome, marco!

// // Write a function named oddOrEven that takes a number as an argument and returns whether the number is odd or even.

// // pseudo code 
// // write a function named const oddOrEven
// // take a number input
// // if number is even - output even
// // if number is odd - output odd
// // return output odd or even
// // log to console
// const oddOrEven = (numOne) => {
//     if(numOne % 2 === 0){
//         return `The number ${numOne} is even`
//     }
//     else if (numOne % 2 === 1){
//         return `The number ${numOne} is odd`
//     }
//     else {
//         return "Check your input"
//     }
// }
// console.log(oddOrEven(17))
// // output: The number 17 is odd

// // Write a function named triple that takes a number as an argument and returns the result of that number multiplied by 3.
const triple = (numTwo) => {
    return numTwo*3
        //return `${numTwo}`
}
console.log(triple(4))

// Write a function named multiply that takes two numbers as arguments and returns the result of the numbers multiplied together.
const multiply = (numThree, numFour) => {
    return numThree*numFour
}
console.log(multiply(10, 20))

//output = 200


// Write a function named divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".

//pseudo code
//Declare function : divisibleBy
//if first number is evenly divisible by second number
// 10 % 5 === 0
//log first number is divisible by second number evenly

const divisibleBy = (numFive, numSix) => {
    if (numFive % numSix === 0) {
        return `${numFive} is evenly divisible by ${numSix}`
    } else {
        return `${numFive} is not evenly divisible by ${numSix}`
    }
}
console.log(divisibleBy(10, -5))

//output : 10 is evenly divisible by -5


// Write a function named assignGrade that takes a number score as an argument and returns the letter grade for the score.
//pseudo-code
//make a range 0-50 F, 51-60-D, 0...50 if below this number/if above
// if number/return letter
//log the letter grade

const assignGrade = (numSeven) => {
    if (numSeven >= 90) {
    return `You get an A!`
}
} else if (numSeven >= 80) {
    return 'You get a B.'
} else if (numSeven >= 70) {
    return 'you get a C'
} else {
    return 'try harder'
}
console.log(assignGrade(90))

// Write a function named isLonger that takes two strings as arguments and returns the string that contains the most characters.

// Write a function named greaterNum that takes two numbers as arguments and returns whichever number is the greater (higher) number.

// -. Write a function named yelling that takes a string as an argument and return the string in all uppercase case letters.