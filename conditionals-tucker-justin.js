// Write the code that will log true or false for the following:

// Is 34 divided by 3 greater than 67 divided by 2?
console.log(34 / 3 > 67 / 2) // false

// Does 5 evaluate to the same as "5"?
console.log(5 == "5") // True

// Does 5 strictly equal "5"?
console.log(5 === "5") // False

// Does !3 strictly equal 3?
console.log(!3 === 3) // False

// Does "LEARN".length strictly equal 5 AND "Student".length strictly equal 7?
console.log("LEARN".length === 5 && "Student".length === 7) // True


// Does "LEARN".length strictly equal 5 OR "Student".length strictly equal 10?
console.log("LEARN".length === 5 || "Student".length === 10) // True

// Does "LEARN" contain the subset "RN"?
let str = "LEARN"
console.log(str.includes("RN")) // True

// Does "LEARN" contain the subset "rn"?
console.log(str.includes("rn")) // False

// Does "LEARN"[0] strictly equal "l"?
console.log(str[0] === "l") // False

// Modify the code from the previous question to return true.
console.log(str[0] === "L") // True

// Make sure you try different options and change the variables to ensure properly working code.


// Write a statement that takes a variable of item and logs "in budget" if a price is $100 or less.
const price = 60

if(price <= 100){
    console.log("in budget")
} else {
    console.log("not in budget")
} // in budget

// Write a statement that takes a variable of hungry and logs "eat food" if you are hungry and "keep coding" if you are not hungry.
const food = "hungry"

if(food === "hungry"){
    console.log("eat food")
} else{
    console.log("keep coding")
} // eat food

// Write a statement that takes a variable of trafficLight and logs "go" if the light is green, "slow down" if the light is yellow and "stop" if the light is red.
 let trafficLight = ("green");

 if(trafficLight === "green"){
    console.log("go")
 } else if(trafficLight === "yellow"){
    console.log("slow down")
 } else{
    console.log("stop")
 }


// Write a statement that takes two variables that are numbers and outputs the larger number. If the numbers are equal, output "the numbers are the same".
const numOne = -10
const numTwo = 5

if(numOne === numTwo){
    console.log("the numbers are the same")
} else if(numOne > numTwo){
    console.log(numOne)
} else{
    console.log(numTwo)
}

// Write a statement that takes a variable of a number and logs whether the number is odd, even, or zero.
const numThree = 19
if(numThree === 0){
    console.log("is zero")
}
  else if(numThree % 2 === 0){
    console.log("even")
} else if(numThree % 2 === 1){
    console.log("is odd")
} 