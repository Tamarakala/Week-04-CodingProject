
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
// The array is defined by name 'ages', after it comes to substruct the first element from the last one
// and then add the new age using 'push' method. After adding the number 50, 
// the array list changes and now the result of the substruction is 47. After comes the 
// average age calculation by using the for loop. 



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
// This array contains the list of names. The variable 'totalLetters' is created to store the total 
// number of the letters. 'For loop' is presemted to reach  out the each elements of array and 
// to calculate the everage number of letters in name. 



// Q2b
// Use a loop to iterate through the array again and concatenate all 
// the names together, separated by spaces.
console.log(names.join(" "));  
// To conbine all the elements in array I used the 'join' method, which is seperated by spaces. 


//Q3
// How do you access the last element of any array?
// console.log([name.lenght - 1]);

// Q4
// How do you access the first element of any array?
// console.log(names[0]);



// Q5
// Create a new array called nameLengths. Write a loop to 
// iterate over the previously created names array and add the length 
//of each name to the nameLengths array.
// For example:
// let names = ["Kelly", "Sam", "Kate"];    // starting with this array
// let nameLengths = [5, 3, 4];             // create a new array
let namesOfArray = ["Kelly", "Sam", "Kate"]
let nameLengths = [];
for (let i = 0; i < namesOfArray.length; i++) {
  nameLengths.push(namesOfArray[i].length);
}
console.log(nameLengths); 
// Here are two arrays: namesOfArray and nameLenghts. The second 
// array is empty. With the help of 'for loop' we get the lenght of each name and add that 
// length to the end of the array with push method. 


//Q6
// Write a loop to iterate over the nameLengths array and calculate the 
// sum of all the elements in the array.
let nameLenghts = [5, 3, 4]; 
let sumOfArray = 0; 
for (let i = 0; i < nameLenghts.length; i ++) {
sumOfArray += nameLenghts[i];
}
console.log(sumOfArray)
// This 'loop' iterates over the array to calculates the sum of the values
// in the array and prints the result in the console.



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
// This is the function with two parameters. The function repeates the first parameter 'word' 
// 'n' times, which is the second parameter and returns the concatenated word. 
//In the console.log we call the arguments of the funtion 
// 3 times and which prints the concatenated word: 'HelloHelloHello'.  



//Q8
// Write a function that takes two parameters, firstName and lastName, 
// and returns a full name. The full name should be the first and the 
//last name separated by a space.
function name (firstName, lastName){
    return firstName + ' ' + lastName;
}
console.log(name('Anna','Smith')); 
// This is the function with two parameters concatenated with '+' operator. 



//Q9
// Write a function that takes an array of numbers and returns true if the sum
// of all the numbers in the array is greater than 100.


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
// This is the function with two parameters: the first one 
// is a boolean and second one is a number. The condition checks if
// the person is able by some drink. To meet this condition it needs 
// to be hot outside and the person shoud have more than $10.50. 
// Since the second condition is not met we can say that
// the person can not buy the drink, because he/she has $5 which is not more than $10.50. 


//Q13
// Create a function of your own that solves a problem.
// In comments, write what the function does and why you created it.
function favoriteWine (sommelierName, wine) {
if (wine === "Dark fruit flavor" || wine === "Tannins")
wine = "Red"
else if (wine === "Tart" || wine === "Citrus flavor")
wine = "White"
else wine = "Sparkling"
return `The wine proffesional ${sommelierName} prefers ${wine} wine.` 
}
console.log(favoriteWine('Tom', 'Citrus flavor'))
// The name of the is faovireWine which has two parameters: 'sommelierName and wine'. To check what 
// type of wine does sommelier like I used 'if/else' statement with logical OR operator.
// The output of the code changes based on the wine flavor I put in the console.log. 





