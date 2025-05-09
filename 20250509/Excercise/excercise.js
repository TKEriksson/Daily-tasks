//This entire week i will focus on repeating the basics...
// I also want to relearn some react, i knew the basics of it before so rest of the day will be spent on that. I think it also will include practicing javascript, like arrow functions etc.

// Next week i think i will re-do ALL the previous excercises, even if i think i know most of them. It will guranantee that i know as much as before. I remember much, but not all like arrow functions, destructuring, array mapping etc.

const prompt = require("prompt-sync")({ sigint: true });


// Excercise 1
// 8. Random Integer Guess Game
// https://www.w3resource.com/javascript-exercises/javascript-basic-exercises.php
// Write a JavaScript program where the program takes a random integer between 1 and 10, and the user is then prompted to input a guess number. The program displays a message "Good Work" if the input matches the guess number otherwise "Not matched".  
console.log("\nExcercise 1: Random Integer Guess Game");
let n = Math.floor(Math.random() * 10) + 1;
let guess = prompt("Guess a number between 1 and 10");
if (guess == n) console.log("Good Work");
  else console.log("Not matched. The number was " + n);





// Excercise 2
// 3. Get Current Date in Various Formats
// https://www.w3resource.com/javascript-exercises/javascript-basic-exercises.php
// Write a JavaScript program to get the current date.  
// Expected Output :
// mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy
console.log("\nExcercise 2: Get Current Date in Various Formats");
let date = new Date();
let dd = String(date.getDate()).padStart(2, '0');
let mm = String(date.getMonth() + 1).padStart(2, '0'); // January is 0!
let yyyy = date.getFullYear();

console.log(mm + '-' + dd + '-' + yyyy);
console.log(dd + '-' + mm + '-' + yyyy);
console.log(mm + '/' + dd + '/' + yyyy);
console.log(dd + '/' + mm + '/' + yyyy);






// Excercise 3
// 7. Find Years When Jan 1 is Sunday (2014?2050)
//https://www.w3resource.com/javascript-exercises/javascript-basic-exercises.php
// Write a JavaScript program to find out if 1st January will be a Sunday between 2014 and 2050.  
// Click me to see the solution
console.log("\nExcercise 3: Find Years When Jan 1 is Sunday (2014?2050)");
  for (let y = 2014; y <= 2050; y++) {
    let d = new Date(y, 0, 1);
    if (d.getDay() == 0) {
      console.log("1st January is a Sunday in " + y);
    }
  }

// Excercise 4
// 21. Every nth Element in Array
// https://www.w3resource.com/javascript-exercises/fundamental/index.php
// Write a JavaScript program to get every nth element in a given array.

console.log("\nExcercise 4: Every nth Element in Array");
let arr = []

 for (let a = 0; a < 100; a++) {
  arr.push(a);
 }

 nth = prompt("Enter the nth element to get from the array 0-100:");
for (let i = 0; i < arr.length; i++) {
  if (i % nth == 0) {
    console.log(arr[i]);
  }
}



// Excercise 5
// 7. Count Vowels
// Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.
// https://www.w3resource.com/javascript-exercises/javascript-functions-exercises.php
// Note : As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here.
// Example string : 'The quick brown fox'
// Expected Output : 5

console.log("\nExcercise 5: Count Vowels");

let word = prompt("Enter a string to count the vowels:");
let vowels = "aouåeiyäö";

for (let i = 0; i < word.length; i++) {
  if (vowels.includes(word[i].toLowerCase())) {
    console.log(word[i]);
  }
}






