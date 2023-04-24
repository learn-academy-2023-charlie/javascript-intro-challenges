// // Write a function named marco that returns "polo".

// Function Signature
// Input: none
// Output: string "polo"

//  const marco = () => {

    // returns the string "polo"
//     return "polo"

//  }

    // Prints out marco() return value
//  console.log(marco());

// // Write a function named greeting that takes a name as an argument and returns "Welcome, <person's name here>!"

// Function Signature
// Input:string of person's name
// Output: String "Welcome, [person's name]"

// const greeting = (person) => {

    // returns the message w/ input string
//     return `Welcome, ${person}`
// }

    //prints out greeting() string
// console.log(greeting("Will"));

// // Write a function named oddOrEven that takes a number as an argument and returns whether the number is odd or even.

// Function Signature
// Input: Number
// Output: Whether that number is odd or even

// const oddOrEven = (number) => {

    // Temporary string value
//     let res = ""

    //Determines if the input is even
//     if (number % 2 === 0) {

    //Assigns string "Even" to res if condition is met
//         res = "Even"
//     }

    //Runs if above condition is not met
//     else {

    //Assigns string "Odd" to res if above condition is not met
//         res = "Odd"
//     }
    
    // returns value of res
//     return res
// }

    // Prints return value of oddOrEven()
// console.log(oddOrEven(3));

// Write a function named triple that takes a number as an argument and returns the result of that number multiplied by 3.

// Function Signature
// Input: Number
// Output: The input multiplied by 3

// const triple = (number) => {
//     return number * 3
// }

// console.log(triple(10));

// Write a function named multiply that takes two numbers as arguments and returns the result of the numbers multiplied together.

// Function Signature
// Input:
// Output:

// const multiply = (num1, num2) => {
//     return num1 * num2
// }

// console.log(multiply(5, 10));

// Write a function named divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".

// Function Signature
// Input:
// Output:

// const divisibleBy = (num1, num2) => {
//     let res = ""

//     if (num1 % num2 === 0) {
//         res = `${num1} is evenly divisible by ${num2}`
//     }
//     else {
//         res = `${num1} is not evenly divisible by ${num2}`
//     }

//     return res
// }

// console.log(divisibleBy(12, 5));


// Write a function named assignGrade that takes a number score as an argument and returns the letter grade for the score.

// Function Signature
// Input:
// Output:

// const assignGrade = (number) => {
//     let res = ""

//     if (number >= 90) {
//         res = "Gradulations! You have an A!"
//     }

//     else if (number >= 80 && number <= 89) {
//         res = "Gradulations! You have an B!"
//     }

//     else if (number >= 70 && number <= 79) {
//         res = "Gradulations! You have an C!"
//     }

//     else if (number >= 60 && number <= 69) {
//         res = "Gradulations! You have an D!"
//     }

//     else {
//         res = "Sorry! You failed!"
//     }

//     return res
// }

// console.log(assignGrade(80));


// Write a function named isLonger that takes two strings as arguments and returns the string that contains the most characters.

// Function Signature
// Input:
// Output:

// const isLonger = (string1, string2) => {
//     let res = ""

//     if (string1.length >= string2.length) {
//         res = string1
//     }
//     else {
//         res = string2
//     }

//     return res

// }

// console.log(isLonger("Will" , "Bob"));


// Write a function named greaterNum that takes two numbers as arguments and returns whichever number is the greater (higher) number.

// Function Signature
// Input:
// Output:

const greaterNum = (num1, num2) => {
    let res = ""

    if (num1 >= num2) {
        res = num1
    }
    else {
        res = num2
    }

    return res

}

// console.log(greaterNum(4, 5));

// -. Write a function named yelling that takes a string as an argument and return the string in all uppercase case letters.

// Function Signature
// Input:
// Output:

const yelling = (string) => {
    return string.toUpperCase()
}

console.log(yelling("hey"));

// 🏔 Stretch Goals
// The World Translator

// Write a function named helloWorld that takes a language code (e.g. "es", "de", "en") as an argument and returns "Hello World!" in the given language. Ensure you function works for at least 5 languages.
// Have your function default to returning English.

// Function Signature
// Input:
// Output:

// {"code":"en","name":"English","nativeName":"English"}
// {"code":"it","name":"Italian","nativeName":"Italiano"}
// {"code":"fr","name":"French","nativeName":"français, langue française"},
// {"code":"hu","name":"Hungarian","nativeName":"Magyar"},
// {"code":"sr","name":"Serbian","nativeName":"српски језик"}
// {"code":"es","name":"Spanish; Castilian","nativeName":"español, castellano"}



// const helloWorld = () => {

// }

// The Pluralizer
// Write a function named pluralizer that takes a number and a singular noun as arguments and returns the number and pluralized form of the noun, if necessary.
// Enhance your function so it can handle a few collective nouns like "sheep", "goose", "child", "person" and "species".
// let anArr = ["goose", "child", "person"]


// Function Signature
// Input:
// Output:

// const pluralizer = (num, animal) => {
//     let res = ""

//     if (num === 1) {
//         res = `${num} ${animal}`
//     }
//     else if (animal === "sheep" || animal === "species") {
//         res = `${num} ${animal}`
//     }
//     else if (animal === "goose") {
        
//     }
//     else {
//         res = `${num} ${animal.concat("s")}`
//     }

//     return res

// }

// console.log(pluralizer(2, "cat"));