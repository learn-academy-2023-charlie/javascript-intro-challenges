// Write the code that will log true or false for the following:

// 	•	Is 34 divided by 3 greater than 67 divided by 2?
console.log((34 / 3) > (67 / 2))
// false

// 	•	Does 5 evaluate to the same as "5"?
console.log(5 == "5")
// true

// 	•	Does 5 strictly equal "5"?
console.log(5 === "5")
// false

// 	•	Does !3 strictly equal 3?
console.log(!3 === 3)
//false

// 	•	Does "LEARN".length strictly equal 5 AND "Student".length strictly equal 7?
console.log(("LEARN".length === 5) && ("Student".length === 7))
//true

// 	•	Does "LEARN".length strictly equal 5 OR "Student".length strictly equal 10?
console.log(("LEARN".length === 5) || ("Student".length === 10))
//true

// 	•	Does "LEARN" contain the subset "RN"?
var word = "LEARN"
console.log(word.includes("RN"))
//true

// 	•	Does "LEARN" contain the subset "rn"?
console.log(word.includes("rn"))
//false

// 	•	Does "LEARN"[0] strictly equal "l"?
console.log(word.charAt(0) === "l")
//false

// 	•	Modify the code from the previous question to return true.
console.log(word.charAt(0) === "L")
//true



// Make sure you try different options and change the variables to ensure properly working code.

// 	•	Write a statement that takes a variable of item and logs "in budget" if a price is $100 or less.
var item = 76

if (item < 101) {
    console.log("in budget")
} 
else {
    console.log("out of budget")
}
//in budget

item = 105

if (item < 101) {
    console.log("in budget")
} 
else {
    console.log("out of budget")
}

//out of budget

// 	•	Write a statement that takes a variable of hungry and logs "eat food" if you are hungry and "keep coding" if you are not hungry.
var hungry = true

if (hungry) {
    console.log("eat food")
} 
else {
    console.log("keep coding")
}
//eat food 

hungry = false

if (hungry) {
    console.log("eat food")
} 
else {
    console.log("keep coding")
}
//keep coding

// 	•	Write a statement that takes a variable of trafficLight and logs "go" if the light is green, "slow down" if the light is yellow and "stop" if the light is red.
// 	•	Write a statement that takes two variables that are numbers and outputs the larger number. If the numbers are equal, output "the numbers are the same".
	