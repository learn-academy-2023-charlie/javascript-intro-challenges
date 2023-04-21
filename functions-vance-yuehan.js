// //Functions Challenge

// Write a function named marco that returns "polo".
const marco = () => {
    return "polo"
}
console.log (marco())

// Write a function named greeting that takes a name as an argument and returns "Welcome, <person's name here>!"
const greeting = (name) => {
return `Welcome, ${name}`
}
console.log (greeting("<person's name here>!"))

// Write a function named oddOrEven that takes a number as an argument and returns whether the number is odd or even.
const oddOrEven = (num) => {
if (num % 2 != 0) {
    return `${num} is odd`
}
else {
    return `${num} is even`
}
}
console.log(oddOrEven(3))
console.log(oddOrEven(2))

// Write a function named triple that takes a number as an argument and returns the result of that number multiplied by 3.
const triple = (num) => {
return num*3
}
console.log(triple(3))

// Write a function named multiply that takes two numbers as arguments and returns the result of the numbers multiplied together.
const multiply = (num1, num2) => {
return num1 * num2
}
console.log(multiply(3,4))

// Write a function named divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".

//Function divisibleBy
//input: (num1, num2)
//output: return "num1 is evenly divisible by num2." if is evenly divisible.
//return "num1 is not evenly divisible by num2." if is not evenly divisible.



const divisibleBy = (num1, num2) => {
    if (num1 % num2 != 0) {
        return `${num1} is not evenly divisible by ${num2}.`
    }
    else {
        return `${num1} is evenly divisible by ${num2}.`
    }
    }
console.log(divisibleBy(10, 5));
console.log(divisibleBy(9, 5));

// Write a function named assignGrade that takes a number score as an argument and returns the letter grade for the score.
// Function: assignGrade
// input:num
// output:letter

const assignGrade = (num) => {
if (num >= 80) {
    return `score ${num} is an A!`
} else if (num <= 60) {
    return `score ${num} is a C!`
} else {
    return `score ${num} is a B!`
}
}

console.log(assignGrade(100));
console.log(assignGrade(50));
console.log(assignGrade(70));


// Write a function named isLonger that takes two strings as arguments and returns the string that contains the most characters.
// Function: isLonger
// input:("string1", "string2")
// output: return "string1 has the most characters!" if string1 has the most characters
// return "string2 has the most characters!" if string2 has the most characters
const isLonger = (string1, string2) => {
if (string1.length > string2.length) {
    return `${string1} has the most characters!`
} else if (string2.length > string1.length) {
    return `${string2} has the most characters!`
} else {
    return `${string1} and ${string2} has the same characters amount!`
}
}
console.log(isLonger("donut", "cake"));
console.log(isLonger("tea", "coffee"));
console.log(isLonger("fire", "tire"));

// Write a function named greaterNum that takes two numbers as arguments and returns whichever number is the greater (higher) number.

// -. Write a function named yelling that takes a string as an argument and return the string in all uppercase case letters.

// 🏔 Stretch Goals
// The World Translator

// Write a function named helloWorld that takes a language code (e.g. "es", "de", "en") as an argument and returns "Hello World!" in the given language. Ensure you function works for at least 5 languages.
// Have your function default to returning English.
// The Pluralizer

// Write a function named pluralizer that takes a number and a singular noun as arguments and returns the number and pluralized form of the noun, if necessary.
// Enhance your function so it can handle a few collective nouns like "sheep", "goose", "child", "person" and "species".
