// Write a function named marco that returns "polo".
const marco = () => {
    return "Polo"
}
// console.log(marco());

// Write a function named  greeting that takes a name as an argument and returns "Welcome, <person's name here>!"
const greeting = (name) => {
    return `Welcome, ${name}!`
}
// console.log(greeting("John"));

// Write a function named oddOrEven that takes a number as an argument and returns whether the number is odd or even.

const oddOrEven = (number) => {
   if (number%2 === 0) {
return `The number ${number} is even`
    }
else {
    return `The number ${number} is odd`
}
}
console.log(oddOrEven(7));

// Write a function named triple that takes a number as an argument and returns the result of that number multiplied by 3.
const triple = (number) => {
return `${number} times 3 equals ` + (number * 3)
}
console.log(triple(4));


// Write a function named multiply that takes two numbers as arguments and returns the result of the numbers multiplied together.
const multiply = (num1, num2) => {
    return num1 * num2
}
console.log(multiply(3,5));

// Write a function named divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".
const divisibleBy = (num1, num2) => {
    return `${num1} is evenly divisible by ${num2}`
}

console.log(divisibleBy(10, 5))


// Write a function named assignGrade that takes a number score as an argument and returns the letter grade for the score.

const assignGrade = (score) => {
    if(score <= 100 && score >= 90) {
        return "Your got an A"
    }
    else if(score <= 89 && score >= 80) {
        return "You got a B"
    }
    else if(score <= 79 && score >= 70) {
        return "You got a C"
    }
    else if (score <= 69 && score >= 60) {
        return "You got a D"
    }
    else {"You fail"}
}

console.log(assignGrade(75))

// Write a function named isLonger that takes two strings as arguments and returns the string that contains the most characters.
const isLonger = (string, string2) => {
    if (string.length > string2.length) {
        return string; 
    }
    else {
        return string2
    }
}

console.log(isLonger("string", "string2"))

// Write a function named greaterNum that takes two numbers as arguments and returns whichever number is the greater (higher) number.
const greaterNum = (num1, num2) => {
    if (num1 > num2) {
        return num1
    }
    else {return num2}
}
console.log(greaterNum(4,7))
// -. Write a function named yelling that takes a string as an argument and return the string in all uppercase case letters.
const yelling = (string) => {
    return string.toUpperCase()
}
console.log(yelling("whatever"))