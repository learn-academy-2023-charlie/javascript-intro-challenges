//Functions Challenge 4/21/23 Suri and CRod

// Write a function named marco that returns "polo".
// const marco = () =>{
//     return "polo"
// }
// console.log(marco())
// Write a function named greeting that takes a name as an argument and returns "Welcome, <person's name here>!"
const greeting = (personsName) => {
    return `Welcome, ${personsName}!`

}
console.log(greeting("Suri"))

// Write a function named oddOrEven that takes a number as an argument and returns whether the number is odd or even.

const oddOrEven = (numberEven) =>{
    if (numberEven % 2 === 0 ){
        return "Even"
        }
    else {
        return "Odd"
    }
}
console.log(oddOrEven("1"))
// Write a function named triple that takes a number as an argument and returns the result of that number multiplied by 3.
const triple = (multiplier) =>{
    return (multiplier*3)
    }
console.log(triple("9"))
// Write a function named multiply that takes two numbers as arguments and returns the result of the numbers multiplied together.
const multiplier= (num1,num2) => {
    return num1 *num2}
    console.log(multiplier(5,5))

// Write a function named divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".

const divisibleBy= (num1, num2) => {
    if (num1 % num2 === 0){
        return `${num1} is evenly divisible by ${num2}`
    }else{ 
        return "Nope!"
    }
}
console.log(divisibleBy ( 7,5))
// Write a function named assignGrade that takes a number score as an argument and returns the letter grade for the score.??
// Write a function named isLonger that takes two strings as arguments and returns the string that contains the most characters.

// Write a function named greaterNum that takes two numbers as arguments and returns whichever number is the greater (higher) number.

// -. Write a function named yelling that takes a string as an argument and return the string in all uppercase case letters.