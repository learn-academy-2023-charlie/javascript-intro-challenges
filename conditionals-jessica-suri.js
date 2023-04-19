// Is 34 divided by 3 greater than 67 divided by 2?
console.log(34/3 > 67/2)

// Does 5 evaluate to the same as "5"?
console.log(5=="5")

// Does 5 strictly equal "5"?
console.log(5==="5")


// Does !3 strictly equal 3?
console.log(!3===3)

// Does "LEARN".length strictly equal 5 AND "Student".length strictly equal 7?
console.log("LEARN".length === 5 && "Student".length===7)

// Does "LEARN".length strictly equal 5 OR "Student".length strictly equal 10?
console.log("LEARN".length === 5 || "Student".length===10)

// Does "LEARN" contain the subset "RN"?
const string = ("LEARN")

console.log(string.includes("RN"));

// Does "LEARN" contain the subset "rn"?


console.log(string.includes("rn"));

// Does "LEARN"[0] strictly equal "l"?
console.log("LEARN"[0]==="l")

// Modify the code from the previous question to return true.
console.log("LEARN"[0]==="L")

// Make sure you try different options and change the variables to ensure properly working code.

// Write a statement that takes a variable of item and logs "in budget" if a price is $100 or less.
var price = 100
if(price<=100){
    console.log("In Budget")
}

// Write a statement that takes a variable of hungry and logs "eat food" if you are hungry and "keep coding" if you are not hungry.
var hungry
if(hungry=true){
    console.log("Eat Food")
}else{
    (console.log("Keep coding"))
}

// Write a statement that takes a variable of trafficLight and logs "go" if the light is green, "slow down" if the light is yellow and "stop" if the light is red.
var trafficLight="green"
if(trafficLight==="green"){
    console.log("Go")
}else if(trafficLight==="yellow"){
    console.log("Slow down")  
}else {
    console.log("Stop")
}

// Write a statement that takes two variables that are numbers and outputs the larger number. If the numbers are equal, output "the numbers are the same".
var firstNumber="7"
var secondNumber="8"
if (firstNumber>secondNumber) {
    console.log(`${firstNumber}`)
    
} else if (firstNumber<secondNumber){
    console.log(`${secondNumber}`)
    
}

// Write a statement that takes a variable of a number and logs whether the number is odd, even, or zero.

var number= "0"
if (number == 0) {
    console.log("The number is zero.")
}else if(number % 2 == 0) {
        console.log("The number is even.");
}
else {
    console.log("The number is odd.");
}