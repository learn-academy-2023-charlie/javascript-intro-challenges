// Copy the challenges into your JavaScript file. Comment out the instructions and code the solution to each problem beneath the prompt.

// Write the code that will log true or false for the following:

// Is 34 divided by 3 greater than 67 divided by 2?
console.log((34/3) > (67/2))
// False

// Does 5 evaluate to the same as "5"?
console.log(5 == '5')
// False

// Does 5 strictly equal "5"?
console.log(5 === '5')

// Does !3 strictly equal 3?
console.log(!3 === 3)

// Does "LEARN".length strictly equal 5 AND "Student".length strictly equal 7?
console.log('LEARN'.length === 5 && 'Student'.length === 7)

// Does "LEARN".length strictly equal 5 OR "Student".length strictly equal 10?
console.log('LEARN'.length===5 || 'Student'.length===10)

// Does "LEARN" contain the subset "RN"?
console.log('LEARN'.includes('RN'))

// Does "LEARN" contain the subset "rn"?
console.log('LEARN'.includes('rn'))

// Does "LEARN"[0] strictly equal "l"?
console.log('LEARN'[0] === 'l')

// Modify the code from the previous question to return true.
console.log('LEARN'[0] === 'L')

// Make sure you try different options and change the variables to ensure properly working code.


// Write a statement that takes a variable of item and logs "in budget" if a price is $100 or less.
let cereal = 25
if (cereal < 100){
    console.log('in budget')
}

// Write a statement that takes a variable of hungry and logs "eat food" if you are hungry and "keep coding" if you are not hungry.
let hungry = 'no'
if (hungry === 'yes'){
    console.log('eat food')
} else { console.log('keep coding') 
}

// Write a statement that takes a variable of trafficLight and logs "go" if the light is green, "slow down" if the light is yellow and "stop" if the light is red.
let trafficLight = 'Green'
if (trafficLight === 'Green'){
    console.log('go')
} else if (trafficLight== 'Yellow'){
    console.log('slow down')
}
    else{
        console.log('stop')
}
// Write a statement that takes two variables that are numbers and outputs the larger number. If the numbers are equal, output "the numbers are the same".
let number1 = 24
let number2 = 10
if (number1 > number2){
    console.log(`This is the larger number${number1} and this is the smaller number${number2}`)
    }
    else if (number1 < number2){
        console.log(`Number2 is ${number2} and it is larger than number1 ${number1}`)
    }
    else {
        console.log(`The numbers are both ${number1}`)
    }


// Write a statement that takes a variable of a number and logs whether the number is odd, even, or zero.
let number = 25
if (number % 2 == 0){
    console.log(`${number} is even`)
} else if (number % 2 != 0){
    console.log(`${number} is odd`)

}

// 🏔 Stretch Goals

// Write a statement that takes a variable of a grade percentage and logs the letter grade for that percentage, if the grade is 100% log "perfect score", if the grade is zero log "no grade available."
grade = 100
if(grade >=90 && grade <= 99){
    console.log('you earned an A')
}
else if(grade >=80 && grade <= 89){
    console.log('you earned an B')

}else if(grade >=70 && grade <= 79){
    console.log('you earned an C')
    
}else if(grade >=60 && grade <= 69){
    console.log('you earned an D')

}else if(grade >=1 && grade <= 59){
    console.log('you earned an F')

}else if(grade == 0){
    console.log('No grade available')
}
else{
    console.log('You have a perfect score')
}

// Write a statement that takes a variable of a boolean, number, or string data type and logs the data type of the variable. HINT: Check out the JavaScript typeof operator.
let words = true;
if (typeof words === Boolean || typeof words === String || typeof words === Number){
    console.log(typeof words)
}

// Create a password checker using a single conditional statement. If a user inputs a password with 12 or more characters AND the password includes !, then log "That is a mighty strong password!" If the user’s password is 8 or more characters OR includes !, then log "That password is strong enough." Log "That is not a valid password." for every other input.≈

let password = 'rashdfao!'
if (password.length >= 12 && password.includes('!')){
    console.log('That password is strong enough')
}else{
    console.log("That is not a valid password.")
}