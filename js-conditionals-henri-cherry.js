// Write the code that will log true or false for the following:

// Is 34 divided by 3 greater than 67 divided by 2?

console.log(34/3 > 67/2); //output: false

// Does 5 evaluate to the same as "5"?

console.log(5 == "5"); //output: true

// Does 5 strictly equal "5"?

console.log(5 === "5"); //output: false

// Does !3 strictly equal 3?

console.log(!3 === 3); //output: false

// Does "LEARN".length strictly equal 5 AND "Student".length strictly equal 7?

console.log("LEARN".length === 5 && "Student".length === 7); //output: true

// Does "LEARN".length strictly equal 5 OR "Student".length strictly equal 10?

console.log("LEARN".length === 5 || "Student".length === 10); //output: true

// Does "LEARN" contain the subset "RN"?
var learn = "LEARN"
console.log(learn.includes("RN")); //output: true

// Does "LEARN" contain the subset "rn"?

console.log(learn.includes("rn")); //output: false

// Does "LEARN"[0] strictly equal "l"?

console.log(learn.charAt(0) === "l"); //output: false

// Modify the code from the previous question to return true.

console.log(learn.charAt(0) === "L"); //output: true
// Make sure you try different options and change the variables to ensure properly working code.

// Write a statement that takes a variable of item and logs "in budget" if a price is $100 or less.

var item 
item = 80
if (item <= 100) {
    console.log("In Budget");
}
//output: In Budget 

// Write a statement that takes a variable of hungry and logs "eat food" if you are hungry and "keep coding" if you are not hungry.

var hungry = "no"

if (hungry===true){
    console.log("eat food")
} else{
    console.log("keep coding")
}

 //output: keep coding 

// Write a statement that takes a variable of trafficLight and logs "go" if the light is green, "slow down" if the light is yellow and "stop" if the light is red.

var trafficLight 
if (trafficLight==="green"){
    console.log("go")
} else if(trafficLight==="yellow") {
    console.log("slow down")
} else if (trafficLight==="red"){
    console.log("stop");
} else {
    console.log("please enter red yellow or green");
}

//output: please enter red yellow or green

// Write a statement that takes two variables that are numbers and outputs the larger number. If the numbers are equal, output "the numbers are the same".

var a = 15
var b = 32
if(a > b){
    console.log(a);
} else if(b > a){
    console.log(b)
} else if (a==b){
    console.log("the numbers are the same")
} else {
    console.log("what happened?");
}

//output: 32

// Write a statement that takes a variable of a number and logs whether the number is odd, even, or zero.

var x = 5
if(x===0){
    console.log("the number is equal to zero");
} else if(x % 2 === 0){
    console.log(" the number is even");
} else{
    console.log("the number is odd");
}

//output: the number is odd

// 🏔 Stretch Goals
// Write a statement that takes a variable of a grade percentage and logs the letter grade for that percentage, 
//if the grade is 100% log "perfect score", if the grade is zero log "no grade available."

var grade = 65
if(grade === 100){
    console.log("perfect score");
} else if(grade === 0){
    console.log("no grade available");
} else if(grade < 100 && grade >= 90){
    console.log("you have an A");
} else if(grade < 90 && grade >= 80){
    console.log("you have an B");
}else if(grade < 80 && grade >= 70){
    console.log("you have an C");
}else if(grade < 70 && grade >= 60){
    console.log("you have an D");
} else{
    console.log("you have an F");
}

//output: you have a D
// Write a statement that takes a variable of a boolean, number, or string data type and logs the data type of the variable. HINT: Check out the JavaScript typeof operator.

// Create a password checker using a single conditional statement. If a user inputs a password with 12 or more characters AND the password includes !, then log "That is a mighty strong password!" If the user’s password is 8 or more characters OR includes !, then log "That password is strong enough." Log "That is not a valid password." for every other input.