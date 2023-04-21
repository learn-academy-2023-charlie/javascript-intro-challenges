// write a function named marco that returns "polo".
    const marco = () => {console.log("polo")} 
    marco() 
// Write a function named greeting that takes a name as an argument and returns "Welcome, <person's name here>!"
    const greeting = (name) => {return `welcome ${name}`} 
    console.log(greeting("matt"));
// Write a function named oddOrEven that takes a number as an argument and returns whether the number is odd or even.
    const oddOrEven = (Number) => {
        if (Number % 2 === 0){
            return "even" 
        } else {return "odd"} 
    } 
    console.log(oddOrEven(1));
// Write a function named triple that takes a number as an argument and returns the result of that number multiplied by 3.

// goal: writing a fx named triple
// input: number
// output: number * 3

const triple = (numberToBeMultipliedBy3) => {console.log(numberToBeMultipliedBy3*3);}
triple(2)

// Write a function named multiply that takes two numbers as arguments and returns the result of the numbers multiplied together.

// Write a function named divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".

// Write a function named assignGrade that takes a number score as an argument and returns the letter grade for the score.

// Write a function named isLonger that takes two strings as arguments and returns the string that contains the most characters.

// Write a function named greaterNum that takes two numbers as arguments and returns whichever number is the greater (higher) number.

// -. Write a function named yelling that takes a string as an argument and return the string in all uppercase case letters.