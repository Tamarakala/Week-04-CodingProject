//Q!  
//Create an array called ages that contains the following values: 3, 
//9, 23, 64, 2, 8, 28, 93.
let ages = [3, 9, 23, 64, 2, 8, 28, 93]
// Q1a 
// Programmatically subtract the value of the first element in 
// the array from the value in the last element of the array.
console.log(ages[ages.length - 1] - ages[0]);
// Q1b
//Add a new age to your array and repeat the step above to ensure it is dynamic.
// (works for arrays of different lengths).
ages.push(50)
console.log(ages[ages.length - 1] - ages[0]);
// Q1c
//Use a loop to iterate through the array and calculate the average age. 
let sum = 0; 
for (let i = 0; i < ages.length; i++) {
sum += ages[i]; 
}
console.log(sum / ages.length);


// Q2 // Create an array called names that contains the following values: 
// 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'] 
// Q2a
// Use a loop to iterate through the array and calculate the average 
//number of letters per name.
let totalLetters = 0;
for (let i = 0; i < names.length; i++) {
totalLetters += names[i].length;
}
let averageLetters = totalLetters / names.length;
console.log(`Average number of letters per name: ${averageLetters}`);


// Q2b
// Use a loop to iterate through the array again and concatenate all 
// the names together, separated by spaces.
console.log(names.join(" "));  


//Q3
// How do you access the last element of any array?
// console.log([name.length - 1]);

// Q4
// How do you access the first element of any array?
// console.log(names[0]);


// Q5
// Create a new array called nameLengths. Write a loop to 
// iterate over the previously created names array and add the length 
//of each name to the nameLengths array.
// For example:
// let names = ["Kelly", "Sam", "Kate"];    // starting with this array
// let nameLengths = [5, 3, 4];             // create a new array
let namesOfArray = ["Kelly", "Sam", "Kate"]
let nameLengths = [];
for (let i = 0; i < namesOfArray.length; i++) {
nameLengths.push(namesOfArray[i].length);
}
console.log(nameLengths); 


//Q6
// Write a loop to iterate over the nameLengths array and calculate the 
// sum of all the elements in the array.
let nameLenghts = [5, 3, 4]; 
let sumOfArray = 0; 
for (let i = 0; i < nameLenghts.length; i ++) {
sumOfArray += nameLengths[i];
}
console.log(sumOfArray)



//Q7 
// Write a function that takes two parameters, word and n, 
// as arguments and returns the word concatenated to itself n number of times. 
// (i.e. if I pass in 'Hello' and 3, I would expect the function to return
// 'HelloHelloHello').
function greeting(word, n) {
let result = '';
for (let i = 0; i < n; i++) {
result += word;
}
return result;
}
console.log(greeting('Hello', 3));


//Q8
// Write a function that takes two parameters, firstName and lastName, 
// and returns a full name. The full name should be the first and the 
//last name separated by a space.
function name (firstName, lastName){
return firstName + ' ' + lastName;
}
console.log(name('Anna','Smith')); 



//Q9
// Write a function that takes an array of numbers and returns true if the sum
// of all the numbers in the array is greater than 100.

let arrayOfNumbers = [3,6,8,]; 

function sumOfArrayGreaterThan100 (arr){


}


//Q10
// Write a function that takes an array of numbers and 
// returns the average of all the elements in the array.


//Q11
// Write a function that takes two arrays of numbers
// and returns true if the average of the elements in the first array 
// is greater than the average of the elements in the second array.


//Q12
//Write a function called willBuyDrink that takes a 
//boolean isHotOutside, and a number moneyInPocket, and 
//returns true if it is hot outside and if moneyInPocket is greater than 10.50.
function willBuyDrink(isHotOutside, moneyInPocket) {
let willBuy;
if (isHotOutside === true && moneyInPocket > 10.5) {
willBuy = true;
} else {
willBuy = false;
}
return willBuy;
}
console.log(willBuyDrink(true, 5));



//Q13
// Create a function of your own that solves a problem.
// In comments, write what the function does and why you created it.
function favoriteWine (sommelierName, wine) {
if (wine === "Dark fruit flavor" || wine === "Tannins")
wine = "Red"
else if (wine === "Tart" || wine === "Citrus flavor")
wine = "White"
else wine = "Sparkling"
return `The wine professional ${sommelierName} prefers ${wine} wine.` 
}
console.log(favoriteWine('Tom', 'Citrus flavor'))
